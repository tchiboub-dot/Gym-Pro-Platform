import { useTranslations } from 'next-intl';
import { BackgroundSection, Button, Card } from '@gympro/ui';

export default function HomePage() {
  const t = useTranslations();

  // Get section data with fallbacks
  const features = t.raw('features.items') || [];
  const equipment = t.raw('equipment.items') || [];
  const coaches = t.raw('coaches.items') || [];
  const schedule = t.raw('schedule.items') || [];
  const pricing = t.raw('pricing.items') || [];
  const testimonials = t.raw('testimonials.items') || [];
  const faq = t.raw('faq.items') || [];

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
            {t('features.title')}
          </h2>
          {features.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature: any, idx: number) => (
                <div key={idx} className="bg-bg-2 rounded-lg p-8 hover:bg-bg-3 transition-colors">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-text-muted">No features available</div>
          )}
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-bg-2">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t('equipment.title')}
          </h2>
          <p className="text-center text-text-muted mb-16 max-w-2xl mx-auto">
            {t('equipment.subtitle')}
          </p>
          {equipment.length > 0 ? (
            <div className="grid md:grid-cols-4 gap-6">
              {equipment.map((item: any, idx: number) => (
                <div key={idx} className="bg-bg-1 rounded-lg p-6 hover:bg-bg-3 transition-colors">
                  <h3 className="text-lg font-bold mb-3">{item.name}</h3>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-text-muted">No equipment available</div>
          )}
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-24 bg-bg-1">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t('coaches.title')}
          </h2>
          <p className="text-center text-text-muted mb-16 max-w-2xl mx-auto">
            {t('coaches.subtitle')}
          </p>
          {coaches.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {coaches.map((coach: any, idx: number) => (
                <div key={idx} className="bg-bg-2 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-b from-accent to-accent/50 flex items-center justify-center">
                    <span className="text-white/70">{coach.image}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{coach.name}</h3>
                    <p className="text-accent font-semibold mb-2">{coach.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-text-muted">No coaches available</div>
          )}
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 bg-bg-2">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t('schedule.title')}
          </h2>
          <p className="text-center text-text-muted mb-16 max-w-2xl mx-auto">
            {t('schedule.subtitle')}
          </p>
          {schedule.length > 0 ? (
            <div className="space-y-4 max-w-2xl mx-auto">
              {schedule.map((slot: any, idx: number) => (
                <div key={idx} className="bg-bg-1 rounded-lg p-6 flex items-center justify-between hover:bg-bg-3 transition-colors">
                  <div>
                    <h3 className="text-lg font-bold">{slot.name}</h3>
                    <p className="text-text-muted text-sm">{slot.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent font-semibold">{slot.capacity}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-text-muted">No schedule available</div>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-bg-1">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-center text-text-muted mb-16 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
          {pricing.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {pricing.map((plan: any, idx: number) => (
                <div
                  key={idx}
                  className={`rounded-lg p-8 transition-all ${
                    plan.popular
                      ? 'bg-accent/10 border-2 border-accent transform scale-105'
                      : 'bg-bg-2 border-2 border-transparent hover:border-accent/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="inline-block bg-accent text-bg-1 px-3 py-1 rounded-full text-sm font-bold mb-4">
                      {t('pricing.items.1.popular') || 'Most Popular'}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-text-muted">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features && plan.features.map((feature: string, fidx: number) => (
                      <li key={fidx} className="flex items-start">
                        <span className="text-accent mr-3">✓</span>
                        <span className="text-sm text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                    {t('common.get_started') || 'Get Started'}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-text-muted">No pricing available</div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-bg-2">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t('testimonials.title')}
          </h2>
          {testimonials.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial: any, idx: number) => (
                <div key={idx} className="bg-bg-1 rounded-lg p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                  </div>
                  <p className="text-text-muted mb-4">{testimonial.text}</p>
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-text-muted">No testimonials available</div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-bg-1">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t('faq.title')}
          </h2>
          {faq.length > 0 ? (
            <div className="space-y-4">
              {faq.map((item: any, idx: number) => (
                <details
                  key={idx}
                  className="bg-bg-2 rounded-lg p-6 hover:bg-bg-3 transition-colors cursor-pointer group"
                >
                  <summary className="font-bold flex items-center justify-between">
                    {item.question}
                    <span className="text-accent group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="text-text-muted mt-4">{item.answer}</p>
                </details>
              ))}
            </div>
          ) : (
            <div className="text-center text-text-muted">No FAQ available</div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-bg-2">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-text-muted mb-8 text-lg">
            {t('contact.subtitle')}
          </p>
          <div className="bg-bg-1 rounded-lg p-8 mb-8">
            <p className="mb-4 text-text-muted">
              <span className="block font-semibold">{t('contact.address')}</span>
            </p>
            <p className="mb-4 text-text-muted">
              <span className="block">{t('contact.phone')}</span>
            </p>
            <p className="mb-6 text-text-muted">
              <span className="block">{t('contact.email')}</span>
            </p>
          </div>
          <Button variant="primary" size="lg">
            {t('contact.cta') || 'Get Started'}
          </Button>
        </div>
      </section>
    </main>
  );
}
