import { PrismaService } from "./prisma.service.js";
export declare class BookingsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createBooking(input: {
        gymLocationId: string;
        userId: string;
        classSessionId: string;
        idempotencyKey: string;
    }): Promise<any>;
    cancelBooking(bookingId: string): Promise<any>;
}
