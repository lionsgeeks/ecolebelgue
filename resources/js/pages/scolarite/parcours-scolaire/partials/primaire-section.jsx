import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, TrendingUp, Target, CheckCircle2, BookText, Calculator, Globe, Lightbulb, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import image from '../../../../../../public/assets/images/scolarite/100.JPG'

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
                    <div className="relative order-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-belgYellow to-belgRed rounded-2xl transform -rotate-3"></div>
                        <img
                            src={image}
                            alt="Parcours scolaire complet"
                            className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                            onError={() => setImageError(true)}
                        />
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
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-belgBlack">
                                        En savoir plus sur l'enseignement primaire dans nos écoles
                                    </h3>
                                </div>

                                {/* Main Content */}
                                <div className="space-y-8">
                                    {/* Introduction */}
                                    <div className="bg-belgYellow/5 rounded-xl p-6 border-l-4 border-belgYellow">
                                        <p className="text-lg leading-relaxed text-gray-700">
                                            Au primaire, l'enfant acquiert les fondamentaux académiques et les méthodes de travail qui conditionneront toute la suite de sa scolarité.
                                        </p>
                                        <p className="text-lg leading-relaxed text-gray-700 mt-4 font-semibold">
                                            Notre objectif au primaire est simple et exigeant : permettre à chaque élève de comprendre, de raisonner et de devenir progressivement autonome dans ses apprentissages, dans un cadre structuré et cohérent.
                                        </p>
                                    </div>

                                    {/* Ce que l'élève apprend */}
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold text-belgBlack flex items-center space-x-2">
                                            <BookOpen className="h-6 w-6 text-belgRed" />
                                            <span>Ce que l'élève apprend :</span>
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {[
                                                { title: 'Lecture et compréhension', desc: 'de textes', icon: BookText, color: 'belgYellow' },
                                                { title: 'Maîtrise progressive', desc: 'de l\'écriture', icon: BookOpen, color: 'belgRed' },
                                                { title: 'Mathématiques', desc: 'raisonnement, logique, résolution de problèmes', icon: Calculator, color: 'belgBlack' },
                                                { title: 'Développement du langage', desc: 'oral et écrit', icon: Users, color: 'belgYellow' },
                                                { title: 'Découverte du monde', desc: 'des sciences et de la culture', icon: Globe, color: 'belgRed' },
                                                { title: 'Apprendre à apprendre', desc: 'comprendre avant de mémoriser, raisonner avant d\'appliquer', icon: Brain, color: 'belgBlack' },
                                            ].map((item, idx) => {
                                                const IconComponent = item.icon;
                                                const colorClasses = {
                                                    belgYellow: 'bg-belgYellow/10 border-belgYellow text-belgBlack',
                                                    belgRed: 'bg-belgRed/10 border-belgRed text-belgRed',
                                                    belgBlack: 'bg-belgBlack/10 border-belgBlack text-belgBlack',
                                                };
                                                return (
                                                    <div key={idx} className={`rounded-lg border-2 ${colorClasses[item.color]} p-4`}>
                                                        <div className="flex items-center space-x-3 mb-2">
                                                            <IconComponent className={`h-5 w-5 ${item.color === 'belgRed' ? 'text-belgRed' : item.color === 'belgBlack' ? 'text-belgBlack' : 'text-belgYellow'}`} />
                                                            <h5 className="font-bold">{item.title}</h5>
                                                        </div>
                                                        <p className="text-sm text-gray-700">{item.desc}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 mt-4 border-l-4 border-belgYellow">
                                            <p className="text-gray-700 italic">
                                                <strong>L'enfant apprend à apprendre, à comprendre avant de mémoriser, à raisonner avant d'appliquer.</strong>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Comment l'élève apprend */}
                                    <div className="space-y-4 bg-belgRed/5 rounded-xl p-6 border-l-4 border-belgRed">
                                        <h4 className="text-xl font-bold text-belgBlack flex items-center space-x-2">
                                            <Lightbulb className="h-6 w-6 text-belgRed" />
                                            <span>Comment l'élève apprend :</span>
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            Dans nos écoles, l'enfant de primaire apprend <strong>en faisant, en manipulant, en réfléchissant et en expliquant</strong>.
                                        </p>
                                        <p className="text-gray-700 font-semibold mt-4">La pédagogie déployée favorise :</p>
                                        <ul className="space-y-3 ml-4 mt-4">
                                            {[
                                                'la compréhension en profondeur',
                                                'le développement de l\'esprit critique et la capacité à expliquer',
                                                'l\'engagement actif de l\'élève',
                                                'le sens donné aux apprentissages',
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <CheckCircle2 className="h-5 w-5 text-belgRed mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
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
