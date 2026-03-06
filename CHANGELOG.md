# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-01-12

### Added - Core Implementation

#### Architecture & Infrastructure
- Turborepo monorepo with apps/web, apps/api, and shared packages
- Docker Compose setup (PostgreSQL, Redis, MinIO, Mailhog, Adminer)
- Comprehensive documentation (architecture, API specs, RBAC, deployment)
- Multi-tenant database schema with 25+ Prisma models
- Environment templates and configuration files

#### Backend (NestJS API)
- JWT authentication system with Passport strategies
- User CRUD with role-based access (Admin, Manager, Coach, Member)
- Transactional booking system with capacity management
- Anti-double-booking via unique constraints + DB transactions
- Stripe payment integration (Checkout Sessions, Customer Portal)
- Webhook handling with idempotency via event storage
- Class and ClassSession management
- Lead capture system
- Health check endpoints (/healthz, /readyz)
- Prisma seed data with test accounts

#### Frontend (Next.js 14)
- App Router with [locale] routing for FR/EN/AR
- Full RTL support for Arabic
- next-intl integration for internationalization
- Marketing pages (home, pricing, classes, coaches, contact)
- Member area (dashboard, bookings, billing, profile)
- Authentication pages (login, register)
- API client with JWT token management
- Service layer (auth, bookings, classes, payments)

#### Shared Packages
- **@gympro/shared**: DTOs, enums, Zod validators
- **@gympro/ui**: Design system components (BackgroundSection, Button, Card)
- **@gympro/tailwind-config**: Dark theme tokens and shared Tailwind config
- **@gympro/config**: TypeScript and ESLint configurations

#### Design System
- BackgroundSection component with 4-layer architecture
- Overlay presets (heroDark, sectionDark, pricingAbstract, lightClean)
- Motion tokens (duration, easing, stagger)
- Framer Motion integration with GPU-friendly animations
- prefers-reduced-motion support
- AA contrast enforcement

#### Security
- bcrypt password hashing (12 rounds)
- JWT tokens (access 15m, refresh 30d)
- Stripe webhook signature verification
- Idempotency keys for bookings and payments
- CORS configuration
- Input validation with class-validator and Zod
- SQL injection prevention via Prisma ORM

### Documented
- 7 deliverables completed (architecture, DB schema, API routes, UI specs, RBAC, Docker setup, deployment runbook)
- README with quick start guide
- SECURITY.md with best practices
- CONTRIBUTING.md with development guidelines
- Complete API documentation with payload examples

### Testing
- Seed data with 5 test accounts across all roles
- 14 days of class sessions for testing bookings
- 3 sample plans (Basic, Standard, Premium)

## [Unreleased]

### Planned Features
- Coach availability scheduling system
- Automated waitlist promotion
- Notification system (email, push)
- Blog/CMS functionality
- Admin dashboard
- E2E test suite (Playwright)
- Performance monitoring and observability
- Rate limiting middleware
- Multi-factor authentication
- GDPR data export/deletion
- PDF invoice generation
- Email templates with BullMQ queue
- Mobile app (React Native)

### Known Issues
- Frontend components are scaffolds without full interactivity
- Missing authentication middleware for member routes
- No email verification flow implementation
- Coach availability model created but not integrated
- Waitlist auto-promotion is TODO
- No real-time updates (consider Socket.io)
- Missing admin dashboard pages

---

**Legend**:
- 🔥 Breaking change
- ✨ New feature
- 🐛 Bug fix
- 📚 Documentation
- ♻️ Refactor
- 🔒 Security
- ⚡️ Performance
