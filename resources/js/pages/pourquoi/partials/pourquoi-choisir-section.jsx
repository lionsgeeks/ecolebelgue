import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function PourquoiChoisirSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-belg-black)] mb-6">
                        Choisir une école engage une trajectoire
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image on left */}
                    <div className="relative order-1 md:order-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-belg-yellow)] to-[var(--color-belg-red)] rounded-2xl transform -rotate-3"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=center" 
                            alt="Students learning" 
                            className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    
                    {/* Text on right */}
                    <div className="order-2 md:order-2">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-[var(--color-belg-yellow)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-belg-black)] mb-2 group-hover:text-[var(--color-belg-red)] transition-colors duration-300">La Solidité du Cadre Éducatif</h3>
                                    <p className="text-gray-600">Un environnement structuré et sécurisant qui favorise l'apprentissage et l'épanouissement de chaque élève.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-[var(--color-belg-red)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-belg-black)] mb-2 group-hover:text-[var(--color-belg-yellow)] transition-colors duration-300">La Pertinence de la Pédagogie Déployée</h3>
                                    <p className="text-gray-600">Des approches pédagogiques modernes et adaptées qui répondent aux besoins spécifiques de chaque élève.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-[var(--color-belg-yellow)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-belg-black)] mb-2 group-hover:text-[var(--color-belg-red)] transition-colors duration-300">La Qualification des Enseignants</h3>
                                    <p className="text-gray-600">Une équipe pédagogique hautement qualifiée, passionnée et engagée dans la réussite de chaque élève.</p>
                                </div>
                            </div>
                            <div className="pt-6">
                                <Button size="lg" className="bg-[var(--color-belg-red)] hover:bg-[var(--color-belg-red)]/90 text-white px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                    En savoir plus
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
