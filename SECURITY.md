# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please email security@gympro.com.

**Do not** create public GitHub issues for security vulnerabilities.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Security Features

- JWT authentication with refresh tokens
- bcrypt password hashing (12 rounds)
- Stripe webhook signature verification
- Transactional booking with race condition prevention
- Idempotency keys for payments and bookings
- CORS whitelist
- Input validation with class-validator
- SQL injection prevention via Prisma ORM
- XSS protection via React automatic escaping

## Best Practices

1. **Never commit secrets** - Use .env files (not committed)
2. **Rotate JWT secrets** - At least every 90 days
3. **Keep dependencies updated** - Run `pnpm audit` monthly
4. **Enable 2FA** - For all admin/manager accounts
5. **Audit logs** - Review regularly for suspicious activity
6. **Stripe webhooks** - Always verify signatures
7. **Rate limiting** - Configure in production
8. **HTTPS only** - Enforce in production

## Deployment Checklist

- [ ] All environment variables set correctly
- [ ] JWT secrets rotated
- [ ] Stripe webhook secret configured
- [ ] Database backups automated
- [ ] Rate limiting enabled
- [ ] Monitoring alerts configured
- [ ] Security headers enabled (CSP, HSTS, XFO)
- [ ] CORS whitelist configured
- [ ] WAF configured (if applicable)
