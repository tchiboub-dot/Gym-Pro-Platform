import { z } from 'zod';

export const CreateLeadDto = z.object({
  fullName: z.string().min(2),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  source: z.enum(['WEBSITE', 'WHATSAPP', 'PHONE', 'WALK_IN', 'REFERRAL', 'OTHER']).default('WEBSITE'),
  campaignUtm: z.string().optional(),
  note: z.string().optional(),
});

export type CreateLeadDto = z.infer<typeof CreateLeadDto>;
