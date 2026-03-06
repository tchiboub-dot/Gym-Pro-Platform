import { BookingsService } from "./bookings.service.js";
import type { CreateBookingDto } from "@gympro/shared";
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(body: CreateBookingDto, gymLocationId?: string, userId?: string): Promise<any>;
    cancel(bookingId: string): Promise<any>;
}
