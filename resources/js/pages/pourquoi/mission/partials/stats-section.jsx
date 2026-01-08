export default function StatsSection() {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-[var(--color-belg-black)] to-[var(--color-belg-black)] text-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Notre Impact en Chiffres</h2>
                    <p className="text-gray-300 text-lg">Des résultats qui parlent d'eux-mêmes</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-5xl font-bold text-[var(--color-belg-yellow)] mb-2">95%</div>
                        <p className="text-gray-300">Taux de réussite</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-[var(--color-belg-yellow)] mb-2">1500+</div>
                        <p className="text-gray-300">Élèves formés</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-[var(--color-belg-yellow)] mb-2">50+</div>
                        <p className="text-gray-300">Partenariats internationaux</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-[var(--color-belg-yellow)] mb-2">15</div>
                        <p className="text-gray-300">Années d'excellence</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
