import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookMarked, Users, ArrowRight, CheckCircle2, Target, TrendingUp, FileText, Clock, Brain, Award } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import image from '../../../../../../public/assets/images/scolarite/IMG_8210.jpg';

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
                        <div className="relative order-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-belgYellow to-belgRed rounded-2xl transform -rotate-3"></div>
                            <img
                                src={image}
                                alt="Parcours scolaire complet"
                                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                                onError={() => setImageError(true)}
                            />
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
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-belgBlack">
                                        En savoir plus sur l'enseignement secondaire dans nos écoles
                                    </h3>
                                </div>

                                {/* Main Content */}
                                <div className="space-y-8">
                                    {/* Introduction */}
                                    <div className="bg-belgBlack/5 rounded-xl p-6 border-l-4 border-belgBlack">
                                        <p className="text-lg leading-relaxed text-gray-700">
                                            Le secondaire est le temps des choix structurants.
                                        </p>
                                        <p className="text-lg leading-relaxed text-gray-700 mt-4">
                                            C'est à cette étape que les acquis se consolident, que la pensée se structure et que se dessinent les orientations futures.
                                        </p>
                                    </div>

                                    {/* Objectifs */}
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold text-belgBlack flex items-center space-x-2">
                                            <Target className="h-6 w-6 text-belgBlack" />
                                            <span>Notre enseignement secondaire vise :</span>
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {[
                                                { text: 'l\'approfondissement des connaissances académiques', icon: BookMarked, color: 'belgYellow' },
                                                { text: 'le développement de la rigueur intellectuelle', icon: Brain, color: 'belgRed' },
                                                { text: 'la préparation à l\'enseignement supérieur', icon: GraduationCap, color: 'belgBlack' },
                                                { text: 'l\'accompagnement de chaque élève dans la construction de son projet', icon: Target, color: 'belgYellow' },
                                            ].map((item, idx) => {
                                                const IconComponent = item.icon;
                                                const colorClasses = {
                                                    belgYellow: 'bg-belgYellow/10 border-belgYellow',
                                                    belgRed: 'bg-belgRed/10 border-belgRed',
                                                    belgBlack: 'bg-belgBlack/10 border-belgBlack',
                                                };
                                                return (
                                                    <div key={idx} className={`rounded-lg border-2 ${colorClasses[item.color]} p-4`}>
                                                        <div className="flex items-start space-x-3">
                                                            <IconComponent className={`h-5 w-5 ${item.color === 'belgRed' ? 'text-belgRed' : item.color === 'belgBlack' ? 'text-belgBlack' : 'text-belgYellow'} mt-0.5 flex-shrink-0`} />
                                                            <span className="text-gray-700">{item.text}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Ce que l'élève développe */}
                                    <div className="space-y-4 bg-belgRed/5 rounded-xl p-6 border-l-4 border-belgRed">
                                        <h4 className="text-xl font-bold text-belgBlack">Ce que l'élève développe :</h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            Au secondaire, les apprentissages s'inscrivent dans un cadre académique rigoureux.
                                        </p>
                                        <p className="text-gray-700 font-semibold mt-4">Les élèves développent :</p>
                                        <div className="grid md:grid-cols-2 gap-3 mt-4">
                                            {[
                                                'des savoirs solides dans toutes les disciplines fondamentales',
                                                'une capacité d\'analyse et de raisonnement approfondie',
                                                'une maîtrise progressive de l\'abstraction',
                                                'des méthodes de travail adaptées aux exigences de l\'enseignement supérieur',
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-start space-x-2 bg-white rounded-lg p-3">
                                                    <CheckCircle2 className="h-5 w-5 text-belgRed mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Compétences */}
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold text-belgBlack flex items-center space-x-2">
                                            <Award className="h-6 w-6 text-belgYellow" />
                                            <span>Les élèves apprennent à :</span>
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {[
                                                { text: 'organiser leur travail de manière autonome', icon: Clock, color: 'belgYellow' },
                                                { text: 'gérer leur temps et leurs priorités', icon: TrendingUp, color: 'belgRed' },
                                                { text: 'analyser des consignes complexes', icon: Brain, color: 'belgBlack' },
                                                { text: 'argumenter, rédiger et présenter leur raisonnement', icon: FileText, color: 'belgYellow' },
                                            ].map((item, idx) => {
                                                const IconComponent = item.icon;
                                                const colorClasses = {
                                                    belgYellow: 'bg-belgYellow/10 border-belgYellow',
                                                    belgRed: 'bg-belgRed/10 border-belgRed',
                                                    belgBlack: 'bg-belgBlack/10 border-belgBlack',
                                                };
                                                return (
                                                    <div key={idx} className={`rounded-lg border-2 ${colorClasses[item.color]} p-4`}>
                                                        <div className="flex items-start space-x-3">
                                                            <IconComponent className={`h-5 w-5 ${item.color === 'belgRed' ? 'text-belgRed' : item.color === 'belgBlack' ? 'text-belgBlack' : 'text-belgYellow'} mt-0.5 flex-shrink-0`} />
                                                            <span className="text-gray-700">{item.text}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 mt-4 border-l-4 border-belgBlack">
                                            <p className="text-gray-700 font-semibold">
                                                Ces compétences constituent un socle essentiel pour la réussite universitaire, quelle que soit la filière choisie.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    );
}
