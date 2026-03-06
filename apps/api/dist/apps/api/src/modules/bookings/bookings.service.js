var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateBookingDtoSchema } from "@gympro/shared";
import { PrismaService } from "./prisma.service.js";
let BookingsService = class BookingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBooking(input) {
        const parsed = CreateBookingDtoSchema.safeParse({
            classSessionId: input.classSessionId,
            idempotencyKey: input.idempotencyKey
        });
        if (!parsed.success) {
            throw new BadRequestException("Invalid booking payload");
        }
        return this.prisma.$transaction(async (tx) => {
            const idempotent = await tx.booking.findFirst({
                where: {
                    gymLocationId: input.gymLocationId,
                    idempotencyKey: input.idempotencyKey
                }
            });
            if (idempotent) {
                return idempotent;
            }
            const existing = await tx.booking.findUnique({
                where: {
                    classSessionId_userId: {
                        classSessionId: input.classSessionId,
                        userId: input.userId
                    }
                }
            });
            if (existing) {
                throw new ConflictException("Duplicate booking is not allowed for this session.");
            }
            const session = await tx.classSession.findUnique({
                where: { id: input.classSessionId }
            });
            if (!session) {
                throw new NotFoundException("Class session not found.");
            }
            if (session.bookedCount >= session.capacity) {
                throw new ConflictException("Class is full. Join the waitlist.");
            }
            const created = await tx.booking.create({
                data: {
                    gymLocationId: input.gymLocationId,
                    classSessionId: input.classSessionId,
                    userId: input.userId,
                    idempotencyKey: input.idempotencyKey,
                    status: "CONFIRMED"
                }
            });
            await tx.classSession.update({
                where: { id: input.classSessionId },
                data: {
                    bookedCount: { increment: 1 }
                }
            });
            return created;
        });
    }
    async cancelBooking(bookingId) {
        const booking = await this.prisma.booking.findUnique({ where: { id: bookingId } });
        if (!booking) {
            throw new NotFoundException("Booking not found");
        }
        if (booking.status === "CANCELED") {
            return booking;
        }
        const canceled = await this.prisma.$transaction(async (tx) => {
            const updated = await tx.booking.update({
                where: { id: bookingId },
                data: {
                    status: "CANCELED",
                    canceledAt: new Date()
                }
            });
            await tx.classSession.update({
                where: { id: booking.classSessionId },
                data: {
                    bookedCount: { decrement: 1 }
                }
            });
            const next = await tx.waitlistEntry.findFirst({
                where: { classSessionId: booking.classSessionId, promotedAt: null },
                orderBy: { position: "asc" }
            });
            if (next) {
                await tx.waitlistEntry.update({
                    where: { id: next.id },
                    data: { promotedAt: new Date() }
                });
            }
            return updated;
        });
        return canceled;
    }
};
BookingsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], BookingsService);
export { BookingsService };
//# sourceMappingURL=bookings.service.js.map