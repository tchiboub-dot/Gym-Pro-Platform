import { z } from 'zod';

export const RegisterDto = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().optional(),
  locale: z.enum(['fr', 'en', 'ar']).default('fr'),
});

export type RegisterDto = z.infer<typeof RegisterDto>;

export const LoginDto = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginDto = z.infer<typeof LoginDto>;

export const ResetPasswordRequestDto = z.object({
  email: z.string().email(),
});

export type ResetPasswordRequestDto = z.infer<typeof ResetPasswordRequestDto>;

export const ResetPasswordConfirmDto = z.object({
  token: z.string(),
  newPassword: z.string().min(8),
});

export type ResetPasswordConfirmDto = z.infer<typeof ResetPasswordConfirmDto>;
