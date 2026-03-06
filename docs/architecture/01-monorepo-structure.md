# Gym Pro Platform - Monorepo Structure (Livrable 1)

## 1) Arborescence

```text
Gym Pro Platform/
	.github/
		workflows/

	apps/
		web/                                  # Next.js App Router (UX/UI, marketing + member + admin)
			src/
				app/
					[locale]/                        # fr | en | ar (routes localisees)
						(marketing)/                   # pages vitrine: home, pricing, coaches, blog, contact
						(member)/                      # espace membre: profile, bookings, invoices
						(admin)/                       # backoffice: classes, plans, leads, settings
					api/                             # route handlers web (proxy/API edge handlers si necessaire)
				components/                        # composants app-specifiques web
				features/
					auth/
					booking/
					pricing/
					coaches/
					blog/
					checkout/
					seo/
					i18n/
					consent/
					analytics/
				lib/                               # clients API, helpers, server actions
				styles/                            # globals.css + themes
				content/
					legal/                           # CGU, confidentialite, cookies, remboursement
			public/
				backgrounds/                       # assets AVIF/WebP (hero, coach, equipment, etc.)

		api/                                   # NestJS + Prisma (business logic)
			src/
				main/                              # bootstrap app, global pipes/filters/guards
				modules/
					auth/
					users/
					roles/
					plans/
					subscriptions/
					payments/
					invoices/
					classes/
					class-sessions/
					bookings/
					waitlist/
					coaches/
					checkins/
					leads/
					blog/
					media-assets/
					coupons/
					notifications/
					settings/
					health/
				common/
					guards/
					interceptors/
					pipes/
					filters/
					decorators/
					logger/
					security/
			prisma/
				migrations/
				seeds/
			test/
				unit/
				integration/
				e2e/

	packages/
		shared/                                # contrats inter-apps et regles communes
			src/
				contracts/
					v1/                              # DTO versionnes API /v1
				enums/                             # roles, permissions, status, currency, tax mode
				validators/                        # zod/joi schemas partages
				policies/                          # policies RBAC + ownership checks
				idempotency/                       # helpers de cle d'idempotence

		ui/                                    # design system + motion + background system
			src/
				components/                        # Button, Card, Modal, Drawer, Table, etc.
				tokens/                            # couleurs, spacing, radius, shadow, typography
				motion/                            # durations/easing/stagger + helpers reduce motion
				background/                        # BackgroundSection + overlay presets
				providers/                         # ThemeProvider, ToastProvider, RTLProvider

		config/                                # configs mutualises
			eslint/
			typescript/
			tailwind/
			prettier/
			jest/

	infra/
		docker/                                # compose local (postgres, redis, minio, mailhog)
		terraform/                             # option IaC terraform
		azd/                                   # option azd/azure infra

	scripts/
		db/                                    # migrate, seed, rollback
		ops/                                   # replay webhooks, rotate secrets, backup restore
		ci/                                    # utilitaires CI

	tests/
		e2e/                                   # e2e cross-app (signup -> booking -> checkout)
		perf/                                  # budgets perf, lighthouse/playwright perf

	docs/
		architecture/
		api/
		runbook/
		security/
		seo/
		design/
		assets/                                # assets & licensing
```

## 2) Separation des couches (DDD light)

- `apps/web`: presentation, parcours utilisateur, rendering, i18n/rtl, SEO, analytics.
- `apps/api`: logique metier, orchestration domain rules, securite, persistence.
- `packages/shared`: contrats versionnes, enums, validators, policies transverses.
- `packages/ui`: design system reutilisable et tokens motion/background.

## 3) Decoupage domaine (API)

- `Identity & Access`: auth, users, roles, permissions.
- `Commerce`: plans, subscriptions, payments, invoices, coupons.
- `Scheduling`: classes, class_sessions, bookings, waitlist, coaches, coach_availability.
- `Operations`: checkins, notifications, settings, media_assets.
- `Growth`: leads CRM, blog, categories, tags.

## 4) Conventions de nommage

- Dossiers: `kebab-case`.
- DTO partages: `packages/shared/src/contracts/v1/<domain>/*.dto.ts`.
- Validators: `*.schema.ts`.
- Enums: `*.enum.ts`.
- Policies: `*.policy.ts`.
- Routes API: prefixees `/v1`.

## 5) Multi-salle / multi-tenant readiness

- Toutes les entites metier porteront `gymLocationId` (ou tenantId selon mode) dans le schema DB.
- RBAC scope-aware: permissions globales vs locales.
- Routes web SEO localisees possibles: `/[locale]/[city]/...`.

## 6) Ce que cette structure garantit

- Maintenabilite: front, back, shared, UI bien separes.
- Evolutivite: ajout de modules sans couplage fort.
- Testabilite: tests unitaires/integration/e2e isoles par couche.
- Industrialisation: CI/CD et ops facilites (scripts + infra + docs).

