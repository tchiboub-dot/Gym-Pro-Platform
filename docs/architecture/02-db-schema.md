# Gym Pro Platform - Database Schema (Livrable 2)

## Vue d'ensemble

Le schema complet est defini dans `apps/api/prisma/schema.prisma`.

Principes:
- PostgreSQL en production.
- Isolation multi-salle via `gymLocationId` sur les aggregates metier.
- Integrite via cles et contraintes `@@unique`.
- Performance via indexes sur filtres frequents (status, dates, location).
- Idempotence native pour booking, paiements et webhooks.

## Domaines et relations

1. Identity & Access
- `GymLocation` 1..n `User`
- `User` (role unique applicatif: ADMIN/MANAGER/COACH/MEMBER)

2. Commerce
- `GymLocation` 1..n `Plan`
- `User` 1..n `Subscription` -> `Plan`
- `Invoice` reliee a `User`, `Payment` reliee optionnellement a `Invoice`/`Subscription`
- `Coupon` scoped location

3. Scheduling
- `Class` (template) 1..n `ClassSession`
- `ClassSession` 1..n `Booking`
- `ClassSession` 1..n `WaitlistEntry`
- `User` (coach) 1..n `CoachAvailability`

4. Operations
- `Checkin` (member + session)
- `Notification`, `EmailLog`
- `Setting` (K/V JSON par salle)
- `MediaAsset`

5. Growth / Content
- `Lead`
- `BlogPost` -> `BlogCategory`
- `BlogPost` <-> `BlogTag` via `BlogPostTag`

6. Security / Compliance
- `AuditLog`
- `ConsentRecord`
- `WebhookEvent` (idempotence provider event)

## Contraintes critiques anti-bugs

1. Anti double reservation
- `Booking @@unique([classSessionId, userId])`

2. Waitlist sans doublon
- `WaitlistEntry @@unique([classSessionId, userId])`
- `WaitlistEntry @@unique([classSessionId, position])`

3. Idempotence
- `Booking @@unique([gymLocationId, idempotencyKey])`
- `Payment @@unique([gymLocationId, idempotencyKey])`
- `WebhookEvent @@unique([provider, eventId])`

4. Facturation
- `Invoice @@unique([gymLocationId, number])`

5. Unicite metier locale
- `User @@unique([gymLocationId, email])`
- `Plan @@unique([gymLocationId, code])`
- `Class @@unique([gymLocationId, slug])`
- `Coupon @@unique([gymLocationId, code])`
- `BlogPost @@unique([gymLocationId, locale, slug])`

## Indexes essentiels

- Planning et recherche sessions:
  - `ClassSession @@index([gymLocationId, startsAt])`
  - `ClassSession @@index([classId, startsAt])`
- Exploitation bookings:
  - `Booking @@index([gymLocationId, status, createdAt])`
- Paiements / factures:
  - `Payment @@index([gymLocationId, status, createdAt])`
  - `Invoice @@index([gymLocationId, status, issuedAt])`
- Local SEO / geographie:
  - `GymLocation @@index([city, district])`

## Regles transactionnelles (implementation API)

Les contraintes SQL ne suffisent pas pour la capacite. Le module Booking devra:
- Ouvrir une transaction DB.
- Lire `ClassSession` en verrou `FOR UPDATE`.
- Verifier `bookedCount < capacity`.
- Inserer `Booking` (avec idempotency key).
- Incrementer `bookedCount`.
- Commit.

En annulation:
- Decrementer `bookedCount`.
- Promouvoir automatiquement la tete de waitlist.
- Notifier le membre promu via queue.

## Notes de migration / evolution

- Option multi-tenant global (tenantId) possible en ajoutant une table `Tenant` au-dessus de `GymLocation`.
- Pour contraintes CHECK (minutes, ranges), utiliser migrations SQL manuelles Prisma.
