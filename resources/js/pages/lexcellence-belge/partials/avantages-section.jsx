import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AvantagesSection() {
    const avantages = [
        {
            title: "Excellence Académique",
            description: "Des programmes reconnus qui ouvrent les portes des meilleures universités et carrières.",
            icon: "🎓"
        },
        {
            title: "Encadrement Personnalisé",
            description: "Un suivi individualisé qui garantit la réussite et l'épanouissement de chaque élève.",
            icon: "👥"
        },
        {
            title: "Infrastructure Moderne",
            description: "Des équipements de pointe pour un apprentissage dans des conditions optimales.",
            icon: "🏫"
        },
        {
            title: "Ouverture Internationale",
            description: "Des échanges et partenariats qui préparent à un monde globalisé.",
            icon: "🌍"
        },
        {
            title: "Développement Complet",
            description: "Un équilibre entre excellence académique, sport et activités culturelles.",
            icon: "⚖"
        },
        {
            title: "Réseau d'Anciens",
            description: "Une communauté solidaire qui accompagne bien au-delà des années d'études.",
            icon: "🤝"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-belg-black)] mb-6">
                        Pourquoi Nous Choisir
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Les bénéfices concrets qui font la différence dans le parcours éducatif de votre enfant
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {avantages.map((avantage, index) => (
                        <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                            <CardHeader className="text-center pb-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-belg-yellow)]/10 to-[var(--color-belg-red)]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-4xl mb-2">{avantage.icon}</div>
                                </div>
                                <CardTitle className="text-xl font-bold text-[var(--color-belg-black)] mb-2">{avantage.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 leading-relaxed">
                                    {avantage.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
