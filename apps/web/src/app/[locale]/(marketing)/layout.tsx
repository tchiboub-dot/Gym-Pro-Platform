export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Navigation would go here */}
      <nav className="fixed top-0 w-full z-50 bg-bg-0/80 backdrop-blur-md border-b border-text-muted/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              Gym<span className="text-accent">Pro</span>
            </div>
            <div className="flex items-center gap-6">
              {/* Nav links would go here */}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">{children}</div>

      {/* Footer would go here */}
      <footer className="bg-bg-1 py-12">
        <div className="container mx-auto px-6">
          <p className="text-center text-text-muted">
            © 2026 Gym Pro Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
