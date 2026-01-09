import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookMarked, Users, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function SecondaireSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const features = [
        { icon: BookMarked, title: 'Tronc commun solide', description: 'Pour tous sur tout le parcours', color: 'belgYellow' },
        { icon: Users, title: 'Choix progressif', description: "D'options", color: 'belgRed' },
        { icon: ArrowRight, title: 'Préparation méthodologique', description: "À l'enseignement supérieur", color: 'belgBlack' },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-belgBlack mb-6">
                        L'enseignement secondaire : préparer l'avenir
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed text-gray-700">
                                Le secondaire marque une nouvelle étape : les apprentissages s'approfondissent, les exigences augmentent et la réflexion sur l'orientation s'installe progressivement.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Dans nos écoles, le secondaire n'est pas une spécialisation précoce, mais une structuration progressive avec :
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 gap-4 mt-8">
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
                                        className={`rounded-xl border-l-4 ${colorClasses[feature.color]} p-5 transition-all hover:shadow-lg`}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-lg ${iconColorClasses[feature.color]}`}>
                                                <IconComponent className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-belgBlack mb-1">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-lg leading-relaxed text-gray-700 font-semibold">
                            Le parcours secondaire prépare concrètement aux exigences de l'enseignement supérieur.
                        </p>
                    </div>

                    {/* Icon/Visual */}
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-belgYellow to-belgRed rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-belgYellow via-white to-belgRed rounded-full p-12 shadow-2xl">
                                <GraduationCap className="h-32 w-32 text-belgBlack" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogTrigger asChild>
                                    <Button
                                        size="lg"
                                        className="bg-belgYellow hover:bg-belgYellow/90 text-belgBlack px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl "
                                    >
                                En savoir plus sur l'enseignement secondaire dans nos écoles
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-belgBlack">
                                    En savoir plus sur l'enseignement secondaire
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

