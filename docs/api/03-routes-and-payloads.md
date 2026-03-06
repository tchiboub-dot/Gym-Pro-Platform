# Gym Pro Platform - API v1 (Livrable 3)

Base URL: `/v1`
Format erreur standard:
```json
{
  "error": {
    "code": "BOOKING_CONFLICT",
    "message": "You already booked this session.",
    "details": {"classSessionId": "cls_123"},
    "requestId": "req_abc",
    "timestamp": "2026-03-06T12:00:00.000Z"
  }
}
```

## Auth

Routes:
- `POST /v1/auth/register`
- `POST /v1/auth/login`
- `POST /v1/auth/reset-password/request`
- `POST /v1/auth/reset-password/confirm`

Payloads (3):
```json
{"email":"member@gympro.com","password":"StrongPass#2026","firstName":"Sara","lastName":"Ben"}
```
```json
{"email":"member@gympro.com","password":"StrongPass#2026"}
```
```json
{"token":"reset_token_here","newPassword":"EvenStronger#2026"}
```

## Users / Member profile

Routes:
- `GET /v1/users/me`
- `PATCH /v1/users/me`
- `GET /v1/users/me/invoices`

Payloads (3):
```json
{"firstName":"Sara","lastName":"Bennani","phone":"+212600000000","locale":"fr"}
```
```json
{"marketing":true,"analytics":true,"pixel":false}
```
```json
{"export":"gdpr","format":"json"}
```

## Plans / Pricing

Routes:
- `GET /v1/plans?gymLocationId=...`
- `POST /v1/plans` (admin/manager)
- `PATCH /v1/plans/:id`

Payloads (3):
```json
{"code":"STANDARD_M","name":"Standard Mensuel","billingInterval":"monthly","amountCents":39900,"currency":"MAD","taxMode":"EXCLUSIVE","taxRateBps":2000}
```
```json
{"code":"VIP_A","name":"VIP Annuel","billingInterval":"yearly","amountCents":349900,"currency":"MAD"}
```
```json
{"isActive":false}
```

## Subscriptions / Checkout

Routes:
- `POST /v1/subscriptions/checkout-session`
- `POST /v1/subscriptions/customer-portal`
- `POST /v1/webhooks/stripe`

Payloads (3):
```json
{"planId":"plan_123","successUrl":"https://app/success","cancelUrl":"https://app/cancel","couponCode":"SPRING10"}
```
```json
{"returnUrl":"https://app/member/billing"}
```
```json
{"eventId":"evt_123","type":"checkout.session.completed","data":{"object":{"id":"cs_test"}}}
```

## Classes / Sessions

Routes:
- `GET /v1/classes`
- `POST /v1/classes`
- `GET /v1/class-sessions?from=...&to=...&coachId=...`

Payloads (3):
```json
{"slug":"hiit-45","name":"HIIT 45","durationMins":45,"capacity":20,"category":"cardio"}
```
```json
{"classId":"class_1","startsAt":"2026-03-07T10:00:00Z","endsAt":"2026-03-07T10:45:00Z","capacity":20,"coachId":"usr_coach_1"}
```
```json
{"status":"CANCELED"}
```

## Bookings / Waitlist

Routes:
- `POST /v1/bookings`
- `DELETE /v1/bookings/:id`
- `POST /v1/waitlist`
- `GET /v1/bookings/me?status=CONFIRMED&page=1&pageSize=10`

Payloads (3):
```json
{"classSessionId":"sess_123","idempotencyKey":"book_20260306_member123_sess123"}
```
```json
{"reason":"Schedule conflict"}
```
```json
{"classSessionId":"sess_123","idempotencyKey":"wait_20260306_member123_sess123"}
```

## Coaches / Private coaching

Routes:
- `GET /v1/coaches`
- `POST /v1/coaches/:id/availability`
- `POST /v1/coaches/:id/private-booking`

Payloads (3):
```json
{"weekday":2,"startMinute":540,"endMinute":720,"isPrivateCoaching":true}
```
```json
{"startAt":"2026-03-10T09:00:00Z","endAt":"2026-03-10T10:00:00Z","memberId":"usr_member_1","idempotencyKey":"priv_001"}
```
```json
{"bio":"Coach certifiee, specialite force.","specialties":["strength","mobility"]}
```

## Payments / Invoices

Routes:
- `GET /v1/payments/me`
- `POST /v1/invoices/:id/refund` (admin)
- `GET /v1/invoices/:id/pdf`

Payloads (3):
```json
{"paymentId":"pay_123","amountCents":10000,"reason":"medical exception"}
```
```json
{"invoiceId":"inv_123"}
```
```json
{"sendEmail":true}
```

## Leads / Contact

Routes:
- `POST /v1/leads`
- `GET /v1/leads?source=WEBSITE`
- `PATCH /v1/leads/:id`

Payloads (3):
```json
{"fullName":"Youssef Alaoui","email":"youssef@mail.com","phone":"+212611111111","source":"WEBSITE","campaignUtm":"utm_source=instagram"}
```
```json
{"note":"Interested in annual VIP"}
```
```json
{"status":"qualified"}
```

## Blog

Routes:
- `GET /v1/blog/posts?locale=fr&published=true`
- `POST /v1/blog/posts` (admin/manager)
- `POST /v1/blog/categories`

Payloads (3):
```json
{"slug":"gym-rabat-centre","title":"Gym a Rabat Centre","contentMd":"...","locale":"fr","isPublished":true}
```
```json
{"slug":"nutrition","name":"Nutrition"}
```
```json
{"slug":"fat-loss","name":"Fat loss"}
```

## Notifications

Routes:
- `POST /v1/notifications/send`
- `POST /v1/notifications/schedule`
- `GET /v1/notifications/logs`

Payloads (3):
```json
{"userId":"usr_1","type":"EMAIL","templateKey":"booking_confirmed","payload":{"className":"HIIT 45"}}
```
```json
{"userId":"usr_1","type":"EMAIL","templateKey":"class_reminder","scheduledAt":"2026-03-07T08:00:00Z"}
```
```json
{"from":"2026-03-01","to":"2026-03-31"}
```

## Settings

Routes:
- `GET /v1/settings/public`
- `GET /v1/settings/admin`
- `PUT /v1/settings/:key`

Payloads (3):
```json
{"key":"business_hours","valueJson":{"mon":"06:00-22:00","sun":"08:00-20:00"}}
```
```json
{"key":"seo_default","valueJson":{"title":"Gym Pro Platform","cityPagesEnabled":true}}
```
```json
{"key":"social_links","valueJson":{"instagram":"https://instagram.com/gym"}}
```

## Health

Routes:
- `GET /v1/healthz`
- `GET /v1/readyz`
- `GET /v1/version`

Pagination/tri/filtres:
- Parametres standards: `page`, `pageSize`, `sortBy`, `sortDir`, `q`, `from`, `to`, `status`.
