export default function ClassesPage() {
  return (
    <main className="py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-6">Nos Cours</h1>
        <p className="text-xl text-center text-text-muted mb-16">
          Découvrez notre large gamme de cours collectifs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Class cards would go here */}
        </div>
      </div>
    </main>
  );
}
