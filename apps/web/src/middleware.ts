import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en', 'ar'],
  defaultLocale: 'fr',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
