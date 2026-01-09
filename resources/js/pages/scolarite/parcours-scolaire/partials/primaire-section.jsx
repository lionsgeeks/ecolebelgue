import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, TrendingUp, Target } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function PrimaireSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const features = [
        { icon: BookOpen, title: 'Savoirs fondamentaux', color: 'belgYellow' },
        { icon: Brain, title: 'Compréhension', color: 'belgRed' },
        { icon: TrendingUp, title: 'Raisonnement', color: 'belgBlack' },
        { icon: Target, title: 'Structuration de la pensée', color: 'belgYellow' },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-belgBlack mb-6">
                        Le primaire : acquérir des bases solides et durables
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Icon/Visual */}
                    <div className="flex items-center justify-center order-1 md:order-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-belgYellow to-belgRed rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-belgYellow via-white to-belgRed rounded-full p-12 shadow-2xl">
                                <BookOpen className="h-32 w-32 text-belgBlack" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-2 md:order-2 space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed text-gray-700">
                                Le primaire construit les outils intellectuels nécessaires pour réussir au secondaire.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Entre 6 et 12 ans, nous poursuivons l'objectif clair : faire acquérir à nos apprenants des bases académiques solides et durables.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Le parcours de l'enseignement primaire met l'accent sur :
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon;
                                const colorClasses = {
                                    belgYellow: 'border-belgYellow bg-belgYellow/5',
                                    belgRed: 'border-belgRed bg-belgRed/5',
                                    belgBlack: 'border-belgBlack bg-belgBlack/5',
                                };
                                const iconColorClasses = {
                                    belgYellow: 'bg-belgYellow text-belgBlack',
                                    belgRed: 'bg-belgRed text-white',
                                    belgBlack: 'bg-belgBlack text-white',
                                };

                                return (
                                    <div
                                        key={index}
                                        className={`rounded-xl border-l-4 ${colorClasses[feature.color]} p-4 transition-all hover:shadow-lg`}
                                    >
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className={`p-2 rounded-lg ${iconColorClasses[feature.color]}`}>
                                                <IconComponent className="h-5 w-5" />
                                            </div>
                                            <span className="font-semibold text-belgBlack text-sm">
                                                {feature.title}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-lg leading-relaxed text-gray-700">
                            Les apprentissages sont consolidés à travers une méthode spiralaire tout au long du parcours.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogTrigger asChild>
                                    <Button
                                        size="lg"
                                        className="bg-belgBlack hover:bg-belgBlack/90 text-white px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl "
                                    >
                                En savoir plus sur l'enseignement primaire dans nos écoles
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-belgBlack">
                                    En savoir plus sur l'enseignement primaire
                                </h3>
                                <div className="text-gray-700 space-y-4">
                                    {/* Contenu à ajouter plus tard */}
                                    <p>Le contenu détaillé sera ajouté prochainement.</p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    );
}

