import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';

export default function IntroSection() {
    const [imageError, setImageError] = useState(false);
    const [isParcoursModalOpen, setIsParcoursModalOpen] = useState(false);

    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative order-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-belgYellow to-belgRed rounded-2xl transform -rotate-3"></div>
                        {!imageError ? (
                            <img 
                                src="/assets/images/01.jpg" 
                                alt="Parcours scolaire complet" 
                                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className="relative rounded-2xl shadow-2xl w-full h-96 bg-gradient-to-br from-belgYellow/20 to-belgRed/20 flex items-center justify-center">
                                <GraduationCap className="h-24 w-24 text-gray-400" />
                            </div>
                        )}
                    </div>
                    
                    {/* Content */}
                    <div className="order-2 space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed text-gray-700">
                                Nos écoles proposent le parcours éducatif complet de l'enseignement belge francophone, de la maternelle au secondaire.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                De la première scolarisation à la fin du secondaire, chaque étape répond à des objectifs précis, chaque étape prépare la suivante.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                La cohérence et la solidité du parcours scolaire dans nos écoles repose sur la qualification garantie de tous nos enseignants telle qu'exigée par la règlementation de l'enseignement belge francophone, qui impose que tous les enseignants disposent des titres requis belges pour exercer leur métier.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 font-semibold">
                                De ce fait, tous nos enseignants sont diplômés de l'enseignement supérieur belge, spécialisés dans leur domaine d'enseignement et expatriés de Belgique.
                            </p>
                        </div>
                        
                        {/* CTA Button */}
                        <div className="mt-8">
                            <Dialog open={isParcoursModalOpen} onOpenChange={setIsParcoursModalOpen}>
                                <DialogTrigger asChild>
                                    <Button
                                        size="lg"
                                        className="bg-belgBlack hover:bg-belgBlack/90 text-white px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl "
                                    >
                                        <Eye className="mr-2 h-5 w-5" />
                                        Notre parcours scolaire en un coup d'œil
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
                                    <div className="space-y-4 p-6">
                                        <h3 className="text-2xl font-bold text-belgBlack">
                                            Notre parcours scolaire en un coup d'œil
                                        </h3>
                                        <div className="relative rounded-lg overflow-hidden bg-gray-100">
                                            <img
                                                src="/assets/images/orientation.png"
                                                alt="Parcours scolaire complet"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500 text-center">
                                            Image du parcours scolaire complet
                                        </p>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

