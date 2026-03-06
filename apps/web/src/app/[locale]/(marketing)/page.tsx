import { useTranslations } from 'next-intl';
import { BackgroundSection, Button } from '@gympro/ui';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main>
      {/* Hero Section */}
      <BackgroundSection
        imageSrc="/backgrounds/hero-gym.avif"
        overlayPreset="heroDark"
        noise
        priority
        className="min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                {t('hero.cta_trial')}
              </Button>
              <Button variant="secondary" size="lg">
                {t('hero.cta_visit')}
              </Button>
            </div>
          </div>
        </div>
      </BackgroundSection>

      {/* Features Section */}
      <section className="py-24 bg-bg-1">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Pourquoi nous choisir
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature cards would go here */}
          </div>
        </div>
      </section>
    </main>
  );
}
