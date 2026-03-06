import { z } from "zod";
export declare const CreateBookingDtoSchema: z.ZodObject<{
    classSessionId: z.ZodString;
    idempotencyKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    classSessionId: string;
    idempotencyKey: string;
}, {
    classSessionId: string;
    idempotencyKey: string;
}>;
export type CreateBookingDto = z.infer<typeof CreateBookingDtoSchema>;
export declare const BookingDtoSchema: z.ZodObject<{
    id: z.ZodString;
    classSessionId: z.ZodString;
    userId: z.ZodString;
    status: z.ZodEnum<["CONFIRMED", "CANCELED", "WAITLISTED", "NO_SHOW", "ATTENDED"]>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    classSessionId: string;
    status: "CONFIRMED" | "CANCELED" | "WAITLISTED" | "NO_SHOW" | "ATTENDED";
    id: string;
    userId: string;
    createdAt: string;
}, {
    classSessionId: string;
    status: "CONFIRMED" | "CANCELED" | "WAITLISTED" | "NO_SHOW" | "ATTENDED";
    id: string;
    userId: string;
    createdAt: string;
}>;
export type BookingDto = z.infer<typeof BookingDtoSchema>;
