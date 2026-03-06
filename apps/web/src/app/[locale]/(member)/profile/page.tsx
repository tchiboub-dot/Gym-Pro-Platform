export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Mon Profil</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-bg-1 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Informations personnelles</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Prénom</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
                defaultValue="Jean"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nom</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
                defaultValue="Dupont"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
                defaultValue="jean@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Téléphone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
                defaultValue="+33 6 12 34 56 78"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-bg-0 font-semibold px-4 py-3 rounded-md transition-colors"
            >
              Enregistrer les modifications
            </button>
          </form>
        </div>

        <div className="bg-bg-1 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Sécurité</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Mot de passe actuel
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-md bg-bg-surface border border-text-muted/20 focus:border-accent focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-bg-0 font-semibold px-4 py-3 rounded-md transition-colors"
            >
              Changer le mot de passe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
