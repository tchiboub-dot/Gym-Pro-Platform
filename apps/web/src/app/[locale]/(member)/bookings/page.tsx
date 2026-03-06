export default function MyBookingsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Mes Réservations</h1>

      <div className="bg-bg-1 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Prochains cours</h2>
          <button className="text-accent hover:text-accent/80">
            Voir l'historique
          </button>
        </div>

        {/* Booking list would go here */}
        <div className="space-y-4">
          <div className="bg-bg-surface rounded-md p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">HIIT 45</h3>
              <p className="text-text-muted">Demain à 18h00</p>
              <p className="text-sm text-text-muted">Avec Coach Sarah</p>
            </div>
            <button className="text-danger hover:text-danger/80">
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
