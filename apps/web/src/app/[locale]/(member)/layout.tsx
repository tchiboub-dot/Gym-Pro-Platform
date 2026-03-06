export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-0">
      <aside className="fixed top-0 left-0 h-full w-64 bg-bg-1 border-r border-text-muted/10 p-6">
        <div className="text-2xl font-bold mb-8">
          Gym<span className="text-accent">Pro</span>
        </div>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-2 rounded-md hover:bg-bg-surface">
            Tableau de bord
          </a>
          <a href="#" className="block px-4 py-2 rounded-md hover:bg-bg-surface">
            Mes réservations
          </a>
          <a href="#" className="block px-4 py-2 rounded-md hover:bg-bg-surface">
            Facturation
          </a>
          <a href="#" className="block px-4 py-2 rounded-md hover:bg-bg-surface">
            Profil
          </a>
        </nav>
      </aside>

      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}
