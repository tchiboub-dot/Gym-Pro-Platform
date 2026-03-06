export default function MemberDashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Tableau de bord</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-bg-1 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-text-muted">
            Abonnement
          </h3>
          <p className="text-2xl font-bold">Premium</p>
        </div>

        <div className="bg-bg-1 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-text-muted">
            Prochain cours
          </h3>
          <p className="text-2xl font-bold">HIIT 45</p>
          <p className="text-sm text-text-muted mt-1">Demain à 18h00</p>
        </div>

        <div className="bg-bg-1 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-text-muted">
            Réservations ce mois
          </h3>
          <p className="text-2xl font-bold">12</p>
        </div>
      </div>

      <div className="bg-bg-1 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Mes prochains cours</h2>
        {/* Booking list would go here */}
        <p className="text-text-muted">Aucun cours réservé</p>
      </div>
    </div>
  );
}
