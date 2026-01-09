import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ValeursSection() {
    const valeurs = [
        {
            title: "La Solidité du Cadre Éducatif",
            description: "Un environnement structuré et sécurisant qui favorise l'apprentissage et l'épanouissement de chaque élève.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            color: "yellow"
        },
        {
            title: "La Pertinence de la Pédagogie Déployée",
            description: "Des approches pédagogiques modernes et adaptées qui répondent aux besoins spécifiques de chaque élève.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            color: "red"
        },
        {
            title: "La Qualification des Enseignants",
            description: "Une équipe pédagogique hautement qualifiée, passionnée et engagée dans la réussite de chaque élève.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: "yellow"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-belg-black)] mb-6">
                        Trois Fondations Essentielles
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Les piliers qui garantissent une éducation d'excellence et un avenir prometteur
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {valeurs.map((valeur, index) => (
                        <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                            <CardHeader className="text-center pb-4">
                                <div className={`w-20 h-20 bg-gradient-to-br ${
                                    valeur.color === 'yellow' 
                                        ? 'from-[var(--color-belg-yellow)]/20 to-[var(--color-belg-yellow)]/10' 
                                        : 'from-[var(--color-belg-red)]/20 to-[var(--color-belg-red)]/10'
                                } rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={valeur.color === 'yellow' ? 'text-[var(--color-belg-yellow)]' : 'text-[var(--color-belg-red)]'}>
                                        {valeur.icon}
                                    </div>
                                </div>
                                <CardTitle className="text-xl font-bold text-[var(--color-belg-black)] mb-2">{valeur.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 leading-relaxed">
                                    {valeur.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
