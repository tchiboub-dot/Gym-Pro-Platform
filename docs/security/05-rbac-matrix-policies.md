# Gym Pro Platform - RBAC Matrix & Policies (Livrable 5)

Roles:
- `admin` (global)
- `manager` (local gym)
- `coach`
- `member`

Scopes:
- `global` (all locations)
- `location` (single gymLocationId)
- `owner` (resource owner)

## Matrice permissions

| Permission | admin | manager | coach | member |
|---|---|---|---|---|
| users.read | global | location | owner | owner |
| users.write | global | location | owner (limited) | owner |
| roles.manage | global | no | no | no |
| plans.manage | global | location | no | no |
| subscriptions.read | global | location | no | owner |
| payments.read | global | location | no | owner |
| refunds.create | global | location | no | no |
| invoices.read | global | location | no | owner |
| classes.manage | global | location | assigned | no |
| sessions.manage | global | location | assigned | no |
| bookings.create | yes | yes | yes (for assigned/private) | yes |
| bookings.cancel | global | location | assigned | owner |
| waitlist.manage | global | location | assigned | owner(join/leave) |
| checkins.manage | global | location | assigned | self |
| coaches.manage | global | location | owner profile | no |
| leads.read | global | location | no | no |
| leads.write | global | location | no | no |
| blog.manage | global | location | no | no |
| media.manage | global | location | assigned limited | no |
| settings.manage | global | location | no | no |
| audit.read | global | location | no | no |

## Policies (examples)

1. Location isolation policy
- Rule: any query/update on scoped resource must include `gymLocationId` from auth context.
- Exception: `admin` with global scope.

2. Ownership policy
- Member can read/update only own profile, bookings, invoices.
- Coach can edit only own availability and assigned sessions.

3. Booking policy
- deny if member has no active subscription.
- deny if late cancellation window violated (configurable).
- deny if duplicate booking exists.

4. Refund policy
- manager/admin only.
- mandatory audit log with reason.

5. Blog/content policy
- manager/admin only for publish/unpublish.

## Enforcement technique

- NestJS guards chain:
  - `JwtAuthGuard`
  - `LocationScopeGuard`
  - `PermissionsGuard`
- Decorators:
  - `@RequirePermission('bookings.create')`
  - `@Scope('location')`
- Service-level checks (defense-in-depth).

## Audit requirements

Every privileged action logs:
- actorUserId
- action
- entityType/entityId
- changesJson (before/after)
- ip, userAgent, timestamp
