import { z } from 'zod';

export const CreateBookingDto = z.object({
  classSessionId: z.string(),
  idempotencyKey: z.string(),
});

export type CreateBookingDto = z.infer<typeof CreateBookingDto>;

export const CancelBookingDto = z.object({
  reason: z.string().optional(),
});

export type CancelBookingDto = z.infer<typeof CancelBookingDto>;

export const JoinWaitlistDto = z.object({
  classSessionId: z.string(),
  idempotencyKey: z.string(),
});

export type JoinWaitlistDto = z.infer<typeof JoinWaitlistDto>;

export const BookingResponseDto = z.object({
  id: z.string(),
  classSessionId: z.string(),
  userId: z.string(),
  status: z.enum(['CONFIRMED', 'CANCELED', 'WAITLISTED', 'NO_SHOW', 'ATTENDED']),
  createdAt: z.string(),
});

export type BookingResponseDto = z.infer<typeof BookingResponseDto>;
