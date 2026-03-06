export enum UserStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  PENDING = 'PENDING',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  COACH = 'COACH',
  MEMBER = 'MEMBER',
}

export enum SubscriptionStatus {
  TRIALING = 'TRIALING',
  ACTIVE = 'ACTIVE',
  PAST_DUE = 'PAST_DUE',
  CANCELED = 'CANCELED',
  EXPIRED = 'EXPIRED',
}

export enum BookingStatus {
  CONFIRMED = 'CONFIRMED',
  CANCELED = 'CANCELED',
  WAITLISTED = 'WAITLISTED',
  NO_SHOW = 'NO_SHOW',
  ATTENDED = 'ATTENDED',
}

export enum SessionStatus {
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

export enum PaymentStatus {
  REQUIRES_ACTION = 'REQUIRES_ACTION',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
}

export enum InvoiceStatus {
  DRAFT = 'DRAFT',
  ISSUED = 'ISSUED',
  PAID = 'PAID',
  VOID = 'VOID',
  REFUNDED = 'REFUNDED',
}

export enum CurrencyCode {
  MAD = 'MAD',
  EUR = 'EUR',
  USD = 'USD',
}

export enum TaxMode {
  INCLUSIVE = 'INCLUSIVE',
  EXCLUSIVE = 'EXCLUSIVE',
  NONE = 'NONE',
}

export enum NotificationType {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
  WHATSAPP = 'WHATSAPP',
}

export enum LeadSource {
  WEBSITE = 'WEBSITE',
  WHATSAPP = 'WHATSAPP',
  PHONE = 'PHONE',
  WALK_IN = 'WALK_IN',
  REFERRAL = 'REFERRAL',
  OTHER = 'OTHER',
}

export enum ConsentType {
  ANALYTICS = 'ANALYTICS',
  MARKETING = 'MARKETING',
  PIXEL = 'PIXEL',
  NECESSARY = 'NECESSARY',
}
