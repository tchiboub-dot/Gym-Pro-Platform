# Contributing to Gym Pro Platform

Thank you for your interest in contributing!

## Development Setup

1. Fork the repository
2. Clone your fork
3. Install dependencies: `pnpm install`
4. Start Docker services: `cd infra/docker && docker compose up -d`
5. Setup database: `cd apps/api && pnpm prisma migrate dev && pnpm prisma db seed`
6. Start dev servers: `pnpm dev`

## Code Standards

### TypeScript
- Use strict mode
- No `any` types (use `unknown` if necessary)
- Prefer interfaces over types for object shapes
- Use enums from `@gympro/shared`

### React
- Use functional components with hooks
- Use TypeScript for props
- Keep components small and focused
- Use Server Components by default (Next.js 14)

### NestJS
- Use dependency injection
- Follow module/service/controller pattern
- Use DTOs from `@gympro/shared`
- Validate all inputs with class-validator

### Styling
- Use Tailwind CSS classes
- Follow design tokens from `@gympro/tailwind-config`
- Use Framer Motion for animations (GPU-friendly only)
- Ensure AA contrast ratios

## Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Write tests
4. Run checks: `pnpm typecheck && pnpm lint`
5. Commit with conventional commits: `feat: add booking cancellation`
6. Push and create a pull request

## Commit Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (formatting)
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Maintenance

## Pull Request Process

1. Update documentation if needed
2. Update tests
3. Ensure all checks pass
4. Request review from maintainers
5. Address review comments
6. Squash commits before merge

## Testing

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Type checking
pnpm typecheck

# Linting
pnpm lint
```

## Need Help?

- Open a discussion on GitHub
- Check existing issues
- Read the documentation in `docs/`

## Code of Conduct

- Be respectful and inclusive
- Follow best practices
- Help others learn
- Give constructive feedback
