# Gym Pro Platform - Runbook + Checklists + Roadmap (Livrable 7)

## 1. Runbook deploiement

### Pre-deploy
- Verifier variables d'environnement et secrets.
- Verifier migrations Prisma en staging.
- Verifier webhook Stripe endpoint + secret.
- Verifier health deps (DB, Redis, storage, email).

### Deploy standard
1. Build images/apps.
2. Deployer API puis WEB.
3. Executer migrations DB.
4. Warm-up cache.
5. Smoke tests:
   - signup/login
   - booking
   - checkout stripe test
6. Basculer trafic.

### Rollback migration
1. Activer maintenance mode lecture seule.
2. Restaurer snapshot DB pre-deploy.
3. Redeployer image precedente.
4. Rejouer events Stripe non traites.
5. Valider integrite bookings/paiements.

### Rotation secrets
- Tourner JWT, Stripe, email, S3 keys avec overlap.
- Invalider tokens refresh si compromission.
- Journaliser action dans audit log ops.

### Webhook replay
- Lister `WebhookEvent status != processed`.
- Relancer worker idempotent.
- Monitorer erreurs par type event.

### Panne email
- Basculer provider secondaire.
- Requeue notifications `FAILED`.
- Alerter support si latence > SLA.

## 2. Checklist performance

- LCP mobile < 2.5s sur page home.
- Hero background `priority` et assets AVIF.
- Sections non critiques en lazy load.
- Pas de JS inutile au-dessus de la ligne de flottaison.
- No parallax mobile.
- Animations only transform/opacity.
- `prefers-reduced-motion` respecte.

## 3. Checklist SEO

- Metadata complete par page/locale.
- OG/Twitter cards configurees.
- `sitemap.xml` et `robots.txt` ok.
- `hreflang` FR/EN/AR.
- Schema.org: LocalBusiness, FAQPage, BreadcrumbList, Article.
- Pages locales `/[locale]/[city]` avec NAP coherent.

## 4. Checklist securite

- Password hashing (bcrypt/argon2).
- Validation serveur stricte (DTO + schemas).
- Rate limiting auth/contact.
- hCaptcha + honeypot forms.
- Headers securite: CSP, HSTS, XFO, XCTO, Referrer-Policy.
- CORS whitelist stricte.
- Webhooks Stripe: signature verify + idempotence + retries.
- Audit logs admin actifs.
- Backups DB testes (restore teste).
- RGPD: consent proof + export/delete.

## 5. Monitoring & alerting

- Metrics: latency p95 API, error rate, queue lag, checkout success rate.
- Logs JSON centralises.
- Sentry alerts sur erreurs critiques.
- Alerting booking failures, webhook failures, email backlog.

## 6. Roadmap

### MVP (phase 1)
- Vitrine conversion (home, pricing, coaches, planning teaser, contact)
- Auth membre + profil
- Booking cours (capacity + cancel + waitlist)
- Stripe checkout + customer portal + webhooks
- Factures PDF
- I18N FR/EN + base AR RTL
- SEO baseline + analytics events

Critere d'acceptation MVP:
- Signup -> booking -> checkout fonctionne E2E.
- Aucun double booking sur meme session.
- Webhook duplicate sans double impact.
- LCP mobile home <= 2.5s en staging.
- Accessibilite AA sur pages critiques.

Definition of done MVP:
- code review merge
- tests unit/integration/e2e verts
- lint + typecheck + build verts
- runbook ops valide
- monitoring + alertes actives

### Phase 2
- AR RTL complet detaille (tables/forms/icons mirrored)
- Multi-salle complet + RBAC scope avancé
- Blog SEO local avance + pages ville automatisees
- check-in QR (OPTION)
- visite 360 (OPTION)

### Phase 3
- Automations CRM leads
- Recommandations IA planning/offres
- Cohorts retention analytics
- A/B testing funnel checkout

## 7. Risques cles et solutions

1. Paiements/Stripe
- Risque: incoherence paiement <-> subscription
- Solution: transaction interne + webhook idempotent + reconciliation job nocturne

2. Webhooks
- Risque: retries/doublons
- Solution: table `WebhookEvent` unique(provider,eventId), workers idempotents, DLQ

3. RTL AR
- Risque: regressions layout/forms
- Solution: tokens directionnels, tests visuels RTL, composants logical properties CSS

4. Performance mobile
- Risque: backgrounds lourds + animations
- Solution: AVIF, lazy, mobile variants, motion reduction policy stricte

5. Booking concurrence
- Risque: overbooking en pic
- Solution: transaction DB + lock session + compteur atomique + tests de charge
