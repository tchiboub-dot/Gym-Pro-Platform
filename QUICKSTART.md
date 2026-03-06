# Quick Start Guide

Get the Gym Pro Platform running locally in under 5 minutes.

## Prerequisites

- Node.js 20+ ([Download](https://nodejs.org/))
- pnpm 8+ (`npm install -g pnpm`)
- Docker Desktop ([Download](https://www.docker.com/products/docker-desktop/))

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/tchiboub-dot/Gym-Pro-Platform.git
cd Gym-Pro-Platform
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment Files

```bash
# Copy example env files
cp infra/docker/.env.example infra/docker/.env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

**Important**: Update the following in `apps/api/.env`:
```env
JWT_SECRET=your-secure-random-secret-here-min-32-chars
JWT_REFRESH_SECRET=another-secure-random-secret-here
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

Generate secrets:
```bash
# Generate random secrets
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Start Docker Services

```bash
cd infra/docker
docker compose up -d
```

This starts:
- PostgreSQL (port 5432)
- Redis (port 6379)
- MinIO (port 9000, 9001)
- Mailhog (port 8025)
- Adminer (port 8080)

### 5. Setup Database

```bash
cd ../../apps/api

# Generate Prisma client
pnpm prisma generate

# Run migrations
pnpm prisma migrate dev

# Seed test data
pnpm db:seed
```

### 6. Start Development Servers

```bash
# From project root
cd ../..
pnpm dev
```

This starts:
- **Next.js Web** → http://localhost:3000
- **NestJS API** → http://localhost:4000

## Access Points

| Service | URL | Credentials |
|---------|-----|-------------|
| Web App | http://localhost:3000 | See test accounts below |
| API | http://localhost:4000/v1 | - |
| Adminer | http://localhost:8080 | postgres / postgres / gympro_dev |
| Mailhog | http://localhost:8025 | - |
| MinIO | http://localhost:9001 | minioadmin / minioadmin |

## Test Accounts

```
Admin:   admin@gympro.com / Password123!
Manager: manager@gympro.com / Password123!
Coach:   coach@gympro.com / Password123!
Member:  member1@gympro.com / Password123!
```

## Verify Installation

### 1. Check API Health
```bash
curl http://localhost:4000/v1/healthz
# Expected: {"status":"ok"}
```

### 2. Test Login
```bash
curl -X POST http://localhost:4000/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"member1@gympro.com","password":"Password123!"}'
# Expected: {"accessToken":"...", "refreshToken":"...", "user":{...}}
```

### 3. Browse Web App
Open http://localhost:3000 in your browser and explore:
- Marketing pages: Home, Pricing, Classes, Coaches, Contact
- Authentication: Login, Register
- Member area: Dashboard, Bookings, Billing, Profile (after login)

## Troubleshooting

### Port Already in Use
```bash
# Check what's using a port (e.g., 3000)
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill the process or change port in package.json
```

### Database Connection Error
```bash
# Reset Docker containers
cd infra/docker
docker compose down -v
docker compose up -d

# Wait 10 seconds, then retry migration
cd ../../apps/api
pnpm prisma migrate dev
```

### Prisma Client Generation Error
```bash
cd apps/api
rm -rf node_modules/.prisma
pnpm prisma generate
```

### PNPM Install Fails
```bash
# Clear cache and retry
pnpm store prune
rm -rf node_modules
pnpm install
```

## Next Steps

1. **Explore the codebase**
   - `apps/api/src/` - NestJS backend modules
   - `apps/web/src/app/` - Next.js pages
   - `packages/shared/` - Shared types and DTOs
   - `packages/ui/` - Design system components

2. **Read documentation**
   - Architecture: `docs/architecture/`
   - API spec: `docs/api/03-routes-and-payloads.md`
   - RBAC: `docs/security/05-rbac-matrix-policies.md`
   - Deployment: `docs/runbook/07-deployment-runbook-checklists-roadmap.md`

3. **Make your first change**
   - Edit `apps/web/src/app/[locale]/(marketing)/page.tsx`
   - Save and see hot reload at http://localhost:3000

4. **Run tests** (when available)
   ```bash
   pnpm test
   pnpm test:e2e
   ```

## Getting Help

- **Documentation**: Check `docs/` folder
- **Issues**: Open a GitHub issue
- **Contributing**: See `CONTRIBUTING.md`
- **Security**: See `SECURITY.md`

## Useful Commands

```bash
# Development
pnpm dev              # Start all dev servers
pnpm build            # Build all apps
pnpm lint             # Lint all packages
pnpm typecheck        # Type check all packages

# Database
cd apps/api
pnpm prisma studio    # Open Prisma Studio GUI
pnpm prisma migrate dev --name description  # Create new migration
pnpm db:seed          # Re-seed database

# Docker
cd infra/docker
docker compose up -d          # Start services
docker compose down           # Stop services
docker compose down -v        # Stop and delete volumes
docker compose logs -f api    # View logs
```

---

**Ready to build?** 🚀 Start coding and check `CHANGELOG.md` for what's implemented!
