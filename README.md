# Gym Pro Platform - Complete SaaS Implementation

Enterprise-grade gym management platform with premium design, multi-tenant architecture, and production-ready infrastructure.

## 🏗️ Architecture

**Turborepo Monorepo** with DDD light structure:

```
apps/
  ├── web/          # Next.js 14 App Router (FR/EN/AR i18n, RTL)
  └── api/          # NestJS REST API (JWT auth, Stripe, transactional booking)

packages/
  ├── shared/       # DTOs, enums, validators (Zod)
  ├── ui/           # Design system (BackgroundSection, motion tokens)
  └── config/       # Shared configs (TypeScript, ESLint, Tailwind)

infra/
  └── docker/       # PostgreSQL, Redis, MinIO, Mailhog

docs/             # Architecture docs, API specs, runbooks
tests/            # E2E tests (Playwright)
```

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: NestJS, Prisma ORM, PostgreSQL, Redis, BullMQ
- **Auth**: JWT (Passport), bcrypt
- **Payments**: Stripe (Checkout, Customer Portal, Webhooks)
- **i18n**: next-intl (FR/EN/AR with full RTL support)
- **Infra**: Docker Compose, pnpm workspace

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+
- Docker & Docker Compose

### Installation

```bash
# Install dependencies
pnpm install

# Start Docker services (Postgres, Redis, etc.)
cd infra/docker
docker compose up -d

# Setup database
cd apps/api
pnpm prisma migrate dev
pnpm prisma db seed

# Start development servers
cd ../..
pnpm dev
```

Access:
- Web: http://localhost:3000
- API: http://localhost:4000/v1
- Adminer: http://localhost:8080
- Mailhog: http://localhost:8025

### Test Accounts

```
Admin:   admin@gympro.com / Password123!
Manager: manager@gympro.com / Password123!
Coach:   coach@gympro.com / Password123!
Member:  member1@gympro.com / Password123!
```

## 📁 Key Features

### ✅ Implemented

- **Multi-tenant Architecture**: Isolated gym locations via `gymLocationId`
- **Authentication**: JWT with refresh tokens, email verification flow
- **Booking System**: Transactional bookings with capacity management, anti-double-booking
- **Payments**: Stripe Checkout, Customer Portal, webhook idempotency
- **RBAC**: Admin/Manager/Coach/Member roles with permission matrix
- **i18n**: French, English, Arabic with RTL support
- **Design System**: BackgroundSection with overlay presets, motion tokens
- **API Services**: Auth, Users, Bookings, Classes, ClassSessions, Payments, Leads

### 🔄 In Progress

- Marketing pages (home, pricing, classes, coaches, contact)
- Member area (dashboard, bookings, billing, profile)
- Authentication UI (login, register, forgot password)

### ⏳ Pending

- Coach availability system
- Waitlist auto-promotion
- Notification system (email, push)
- Blog/CMS
- Admin dashboard
- E2E tests

## 🏛️ Database Schema

25+ models including:
- **User**: Multi-role (Admin, Manager, Coach, Member)
- **GymLocation**: Multi-tenant root
- **Booking**: Unique constraint on `userId + sessionId` (anti-double-booking)
- **ClassSession**: `capacity` + `bookedCount` with atomic updates
- **Payment**: Idempotency keys
- **WebhookEvent**: `provider + eventId` unique constraint
- **Invoice, Subscription, AuditLog, ConsentRecord**

## 📡 API Endpoints

```
POST   /v1/auth/register
POST   /v1/auth/login
GET    /v1/users/me
PATCH  /v1/users/me

GET    /v1/classes
GET    /v1/class-sessions/upcoming

GET    /v1/bookings/me
POST   /v1/bookings
DELETE /v1/bookings/:id

POST   /v1/payments/checkout-session
POST   /v1/payments/customer-portal-session
POST   /v1/payments/webhook

POST   /v1/leads

GET    /v1/healthz
GET    /v1/readyz
```

## 🎨 Design Tokens

```css
--bg-0: #090b10         /* Deep background */
--bg-1: #0f131a         /* Section background */
--surface: #151b24      /* Cards/modals */
--text-strong: #f4f7fb  /* Headings */
--text-base: #d1d9e6    /* Body text */
--text-muted: #9ba7ba   /* Secondary text */
--accent: #18c2a4       /* Primary CTA */
--danger: #ff5b6e       /* Destructive actions */
```

## 🔒 Security Features

- Password hashing: bcrypt (12 rounds)
- JWT tokens: Access (15m), Refresh (30d)
- Stripe webhook signature verification
- Booking transaction locks (prevents race conditions)
- Idempotency keys (bookings, payments, webhooks)
- CORS whitelist
- Rate limiting (TODO)
- Audit logs

## 📚 Documentation

- **Architecture**: `docs/architecture/`
- **API Spec**: `docs/api/03-routes-and-payloads.md`
- **Design System**: `docs/design/04-ui-wireframes-design-motion.md`
- **RBAC Matrix**: `docs/security/05-rbac-matrix-policies.md`
- **Deployment**: `docs/runbook/07-deployment-runbook-checklists-roadmap.md`

## 🧪 Testing

```bash
# Unit tests (TODO)
pnpm test

# E2E tests (TODO)
pnpm test:e2e

# Type check
pnpm typecheck

# Lint
pnpm lint
```

## 🚢 Deployment

See `docs/runbook/07-deployment-runbook-checklists-roadmap.md` for:
- Environment setup (dev/staging/prod)
- Migration procedures
- Rollback plan
- Webhook replay
- Performance checklist (LCP < 2.5s)
- Security audit

## 📄 License

Proprietary - All rights reserved

## 👥 Team

Initial implementation: Auto-generated scaffold
Customization: Your team

---

**Status**: 🟡 Core backend complete, frontend pages in progress
**Next**: Complete marketing pages, member area, authentication UI
