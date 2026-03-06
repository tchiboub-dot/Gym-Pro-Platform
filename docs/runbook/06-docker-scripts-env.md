# Gym Pro Platform - Docker, Scripts, Env (Livrable 6)

## Docker local

Fichier:
- `infra/docker/docker-compose.yml`

Services:
- `postgres` (5432)
- `redis` (6379)
- `minio` (9000 + console 9001)
- `mailhog` (1025 SMTP, 8025 UI)
- `adminer` (8080, profile `ops`)

Commandes:
- `pnpm compose:up`
- `pnpm compose:down`

## Scripts monorepo

Racine `package.json`:
- `dev`, `build`, `lint`, `typecheck`, `test`, `test:e2e`
- `db:migrate`, `db:seed`, `db:studio`

## .env.example

Fichier:
- `.env.example`

Couvre:
- Core app URLs
- DB, Redis
- JWT
- Stripe
- Email providers
- Storage S3-compatible
- Observability
- Security/CORS/CSP
- Feature flags

## Environnements

- `dev`: docker compose local
- `staging`: DB managée + secrets vault + Sentry on
- `prod`: HA DB/Redis, CDN, rotation secrets, backups automatiques
