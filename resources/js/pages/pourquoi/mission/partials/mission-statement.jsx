export default function MissionStatement() {
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-12 h-1 bg-[var(--color-belg-yellow)]"></div>
                            <span className="text-[var(--color-belg-red)] font-semibold uppercase tracking-wide">Notre Vision</span>
                        </div>
                        <h2 className="text-4xl font-bold text-[var(--color-belg-black)] mb-6">
                            Excellence éducative pour un avenir brillant
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Notre mission est de fournir une éducation de qualité supérieure qui prépare les étudiants 
                            aux défis du 21ème siècle. Nous nous engageons à cultiver un environnement d'apprentissage 
                            stimulant où chaque élève peut s'épanouir académiquement, personnellement et socialement.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-belg-yellow)] flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <p className="text-gray-700">
                                    <strong>Innovation pédagogique</strong> - Méthodes d'enseignement modernes et adaptées
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-belg-yellow)] flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <p className="text-gray-700">
                                    <strong>Accompagnement personnalisé</strong> - Suivi individualisé de chaque élève
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-belg-yellow)] flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <p className="text-gray-700">
                                    <strong>Ouverture internationale</strong> - Perspectives globales et multiculturelles
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-belg-yellow)] to-[var(--color-belg-red)] rounded-2xl transform rotate-3"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=center" 
                            alt="Students learning" 
                            className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
