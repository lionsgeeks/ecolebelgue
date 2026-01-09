import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function EcoleDestinationSection() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 w-64 h-64 bg-[var(--color-belg-yellow)]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-[var(--color-belg-red)]/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-belg-black)] mb-6">
                        Qu'est-ce qu'une école de destination ?
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text on left */}
                    <div className="order-1 md:order-1">
                        <div className="space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Une école de destination est bien plus qu'un simple établissement d'enseignement. C'est un lieu où chaque élève trouve les conditions optimales pour son épanouissement personnel, intellectuel et social.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Notre approche pédagogique innovante, combinée à un cadre éducatif solide et à des enseignants hautement qualifiés, crée un environnement où l'excellence devient naturelle.
                            </p>
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-[var(--color-belg-yellow)]/20">
                                <h3 className="text-xl font-bold text-[var(--color-belg-black)] mb-3">Notre Engagement</h3>
                                <p className="text-gray-600">
                                    Former des leaders de demain, capables de s'adapter aux défis du 21ème siècle avec confiance, créativité et intégrité.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image on right */}
                    <div className="relative order-2 md:order-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-belg-red)] to-[var(--color-belg-yellow)] rounded-2xl transform rotate-3"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&crop=center" 
                            alt="Modern school environment" 
                            className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                
                {/* CTA at the bottom */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-[var(--color-belg-yellow)]/10 to-[var(--color-belg-red)]/10 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-[var(--color-belg-black)] mb-4">
                            Prêt à nous rejoindre ?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Découvrez comment l'École Belge Maroc peut transformer l'avenir de votre enfant
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-[var(--color-belg-red)] hover:bg-[var(--color-belg-red)]/90 text-white px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                Prendre rendez-vous
                            </Button>
                            <Button size="lg" variant="outline" className="border-[var(--color-belg-yellow)] text-[var(--color-belg-yellow)] hover:bg-[var(--color-belg-yellow)] hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                Visiter l'école
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
