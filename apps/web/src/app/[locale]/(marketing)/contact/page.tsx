export default function ContactPage() {
  return (
    <main className="py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-5xl font-bold text-center mb-6">Contactez-nous</h1>
        <p className="text-xl text-center text-text-muted mb-16">
          Une question ? Notre équipe vous répond sous 24h
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nom complet</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
              placeholder="Jean Dupont"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
              placeholder="jean@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Téléphone</label>
            <input
              type="tel"
              className="w-full px-4 py-3 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
              placeholder="Votre message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-bg-0 font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </main>
  );
}
