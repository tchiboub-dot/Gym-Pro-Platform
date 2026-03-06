import { z } from "zod";
export const CreateBookingDtoSchema = z.object({
    classSessionId: z.string().min(1),
    idempotencyKey: z.string().min(8)
});
export const BookingDtoSchema = z.object({
    id: z.string(),
    classSessionId: z.string(),
    userId: z.string(),
    status: z.enum(["CONFIRMED", "CANCELED", "WAITLISTED", "NO_SHOW", "ATTENDED"]),
    createdAt: z.string().datetime()
});
