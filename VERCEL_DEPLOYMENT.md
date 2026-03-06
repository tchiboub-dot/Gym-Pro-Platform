# Vercel Deployment Guide for Gym Pro Platform

## Option 1: Automatic Setup (Recommended)

The repository now includes a `vercel.json` configuration file that handles most settings automatically.

### Steps:

1. **Go to Vercel Dashboard**: https://vercel.com/new
2. **Import your Git repository**: tchiboub-dot/Gym-Pro-Platform
3. **Configure Project Settings**:
   - **Framework Preset**: Other
   - **Root Directory**: `apps/web` ← **IMPORTANT**
   - **Build Command**: Leave as detected
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`

4. **Environment Variables** (Required):
   Add these in Vercel project settings:
   ```
   NEXT_PUBLIC_API_URL=https://your-api-domain.com/v1
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key
   ```

5. **Click Deploy**

---

## Option 2: Manual Configuration

If you don't set a root directory, configure these in Vercel:

### Build & Development Settings:

- **Build Command**:
  ```bash
  cd apps/web && pnpm install && pnpm build
  ```

- **Output Directory**:
  ```
  apps/web/.next
  ```

- **Install Command**:
  ```bash
  pnpm install
  ```

- **Development Command**:
  ```bash
  cd apps/web && pnpm dev
  ```

---

## Important Notes

### 1. API Backend Deployment

The NestJS API (`apps/api`) needs to be deployed separately:

**Options:**
- **Railway**: https://railway.app/ (Recommended for Node.js apps)
- **Render**: https://render.com/
- **AWS ECS/Fargate**
- **DigitalOcean App Platform**

**API Deployment Steps:**
1. Deploy PostgreSQL database (Railway, Render, AWS RDS, etc.)
2. Deploy Redis instance
3. Set environment variables (see `apps/api/.env.example`)
4. Run migrations: `pnpm prisma migrate deploy`
5. Deploy API service pointing to root directory with:
   - Build: `cd apps/api && pnpm install && pnpm build`
   - Start: `cd apps/api && pnpm start`

### 2. Database

You need a production PostgreSQL database:
- **Vercel Postgres** (easiest): https://vercel.com/storage/postgres
- **Neon**: https://neon.tech/ (recommended, generous free tier)
- **Supabase**: https://supabase.com/
- **Railway**: https://railway.app/

Add connection string to both API and Web env vars:
```
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

### 3. Monorepo Build Order

Vercel automatically handles Turborepo build caching. The build command:
```bash
turbo run build --filter=@gympro/web...
```

This ensures:
1. `packages/shared` builds first
2. `packages/ui` builds second
3. `apps/web` builds last with dependencies

### 4. Common Issues

#### Issue: "No tasks were executed"
**Solution**: Make sure Root Directory is set to `apps/web`

#### Issue: Module not found '@gympro/shared'
**Solution**: Build command must be from monorepo root:
```bash
cd ../.. && pnpm install && pnpm turbo run build --filter=@gympro/web...
```

#### Issue: Build timeout
**Solution**: 
- Use pnpm (faster than npm)
- Enable Turborepo remote caching
- Upgrade Vercel plan if needed

#### Issue: API calls failing
**Solution**: Set correct `NEXT_PUBLIC_API_URL` environment variable

---

## Production Checklist

Before going live:

### Security
- [ ] Update all secrets (JWT_SECRET, STRIPE keys, etc.)
- [ ] Enable CORS only for your domain
- [ ] Set up rate limiting on API
- [ ] Enable Stripe webhooks (use production webhook secret)
- [ ] Review RBAC permissions

### Performance
- [ ] Enable Vercel Analytics
- [ ] Set up CDN for images (Vercel automatically handles this)
- [ ] Enable Redis caching on API
- [ ] Configure database connection pooling

### Monitoring
- [ ] Set up Sentry for error tracking
- [ ] Enable API health check monitoring (UptimeRobot, Better Stack)
- [ ] Configure log aggregation (LogDNA, Datadog)

### Database
- [ ] Run migrations: `pnpm prisma migrate deploy`
- [ ] Seed initial data if needed
- [ ] Set up automated backups
- [ ] Enable connection pooling (PgBouncer)

---

## Deployment Architecture

```
┌─────────────────┐
│  Vercel (Web)   │  ← apps/web (Next.js 14)
│  Frontend       │     - Marketing pages
└────────┬────────┘     - Member area
         │              - Static serving
         │
         │ HTTPS
         │
┌────────▼────────┐
│   Railway/      │  ← apps/api (NestJS)
│   Render (API)  │     - REST endpoints
└────────┬────────┘     - Authentication
         │              - Business logic
         │
    ┌────▼─────┐
    │ Database │  ← PostgreSQL
    │  + Redis │     (Neon/Railway/Vercel)
    └──────────┘
```

---

## Quick Deploy Commands

After setting up Vercel project:

```bash
# Commit config changes
git add .
git commit -m "chore: add Vercel deployment configuration"
git push origin main

# Vercel will auto-deploy on push to main
```

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Turborepo Docs**: https://turbo.build/repo/docs/handbook/deploying-with-docker
- **Next.js Deployment**: https://nextjs.org/docs/deployment

For API deployment guides, see `docs/runbook/07-deployment-runbook-checklists-roadmap.md`
