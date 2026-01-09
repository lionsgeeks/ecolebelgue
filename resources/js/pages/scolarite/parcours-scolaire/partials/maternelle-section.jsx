import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Baby, Sparkles, Users, Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function MaternelleSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-belgBlack mb-6">
                        La maternelle : poser des fondations solides
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed text-gray-700">
                                Les premières années posent les bases de tout le parcours scolaire.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                De 3 à 6 ans, l'enjeu est fondamental : construire les bases cognitives, langagières, sociales et émotionnelles sur lesquelles reposera toute la suite du parcours.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Dans nos écoles, l'enseignement en maternelle :
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="rounded-xl border-l-4 border-belgYellow bg-belgYellow/5 p-4">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="p-2 bg-belgYellow rounded-lg">
                                        <Sparkles className="h-5 w-5 text-belgBlack" />
                                    </div>
                                    <span className="font-semibold text-belgBlack">Pédagogie active</span>
                                </div>
                            </div>
                            <div className="rounded-xl border-l-4 border-belgRed bg-belgRed/5 p-4">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="p-2 bg-belgRed rounded-lg">
                                        <Users className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="font-semibold text-belgBlack">Enseignants qualifiés</span>
                                </div>
                            </div>
                            <div className="rounded-xl border-l-4 border-belgBlack bg-belgBlack/5 p-4 col-span-2">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="p-2 bg-belgBlack rounded-lg">
                                        <Heart className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="font-semibold text-belgBlack">Respect du rythme individuel</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-gray-700 italic">
                            C'est à ce stade que se construisent la confiance, la curiosité, la relation au savoir et le plaisir d'apprendre.
                        </p>
                    </div>

                    {/* Icon/Visual */}
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-belgYellow to-belgRed rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-belgYellow via-white to-belgRed rounded-full p-12 shadow-2xl">
                                <Baby className="h-32 w-32 text-belgBlack" />
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
                                En savoir plus sur la maternelle dans nos écoles
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-belgBlack">
                                    En savoir plus sur la maternelle
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

