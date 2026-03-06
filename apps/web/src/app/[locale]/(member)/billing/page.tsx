export default function BillingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Facturation</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-bg-1 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Abonnement actuel</h3>
          <p className="text-2xl font-bold mb-2">Premium</p>
          <p className="text-text-muted mb-4">49,99€ / mois</p>
          <button className="w-full bg-accent hover:bg-accent/90 text-bg-0 font-semibold px-4 py-2 rounded-md transition-colors">
            Gérer l'abonnement
          </button>
        </div>

        <div className="bg-bg-1 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Prochain paiement</h3>
          <p className="text-2xl font-bold mb-2">49,99€</p>
          <p className="text-text-muted mb-4">Le 15 janvier 2026</p>
          <button className="w-full border border-text-muted/20 hover:bg-bg-surface text-text-base font-semibold px-4 py-2 rounded-md transition-colors">
            Voir les détails
          </button>
        </div>
      </div>

      <div className="bg-bg-1 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Historique de facturation</h2>
        {/* Invoice list would go here */}
        <div className="space-y-2">
          <div className="flex items-center justify-between py-3 border-b border-text-muted/10">
            <div>
              <p className="font-semibold">Décembre 2025</p>
              <p className="text-sm text-text-muted">Payée le 15/12/2025</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">49,99€</span>
              <button className="text-accent hover:text-accent/80 text-sm">
                Télécharger
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
