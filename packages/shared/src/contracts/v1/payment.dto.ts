import { z } from 'zod';

export const CreateCheckoutSessionDto = z.object({
  planId: z.string(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
  couponCode: z.string().optional(),
});

export type CreateCheckoutSessionDto = z.infer<typeof CreateCheckoutSessionDto>;

export const StripeWebhookDto = z.object({
  eventId: z.string(),
  type: z.string(),
  data: z.any(),
});

export type StripeWebhookDto = z.infer<typeof StripeWebhookDto>;
