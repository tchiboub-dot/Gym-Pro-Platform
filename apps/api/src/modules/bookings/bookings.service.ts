import { Injectable, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateBookingDto } from '@gympro/shared';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, gymLocationId: string, dto: CreateBookingDto) {
    // Transaction-based booking with capacity check
    return this.prisma.$transaction(async (tx) => {
      // Lock session
      const session = await tx.classSession.findUnique({
        where: { id: dto.classSessionId },
      });

      if (!session) {
        throw new BadRequestException('Session not found');
      }

      if (session.bookedCount >= session.capacity) {
        throw new ConflictException('Session is full');
      }

      // Check for duplicate booking
      const existing = await tx.booking.findFirst({
        where: {
          classSessionId: dto.classSessionId,
          userId,
        },
      });

      if (existing) {
        throw new ConflictException('Already booked');
      }

      // Create booking
      const booking = await tx.booking.create({
        data: {
          gymLocationId,
          classSessionId: dto.classSessionId,
          userId,
          status: 'CONFIRMED',
          idempotencyKey: dto.idempotencyKey,
        },
      });

      // Increment booked count
      await tx.classSession.update({
        where: { id: dto.classSessionId },
        data: { bookedCount: { increment: 1 } },
      });

      return booking;
    });
  }

  async findUserBookings(userId: string, status?: string) {
    return this.prisma.booking.findMany({
      where: {
        userId,
        ...(status && { status }),
      },
      include: {
        classSession: {
          include: {
            class: true,
            coach: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async cancel(bookingId: string, userId: string, reason?: string) {
    return this.prisma.$transaction(async (tx) => {
      const booking = await tx.booking.findUnique({
        where: { id: bookingId },
      });

      if (!booking || booking.userId !== userId) {
        throw new BadRequestException('Booking not found');
      }

      if (booking.status !== 'CONFIRMED') {
        throw new BadRequestException('Cannot cancel this booking');
      }

      // Cancel booking
      const canceled = await tx.booking.update({
        where: { id: bookingId },
        data: {
          status: 'CANCELED',
          canceledAt: new Date(),
          cancelReason: reason,
        },
      });

      // Decrement booked count
      await tx.classSession.update({
        where: { id: booking.classSessionId },
        data: { bookedCount: { decrement: 1 } },
      });

      // TODO: Auto-promote from waitlist

      return canceled;
    });
  }
}
