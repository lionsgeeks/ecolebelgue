import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Baby, Sparkles, Users, Heart, CheckCircle2, Shield, Clock, BookOpen, Lightbulb, Target, GraduationCap } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import image from '../../../../../../public/assets/images/scolarite/EBM-C_0344.jpg'

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
                                En savoir plus sur la maternelle dans nos écoles
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold italic text-belgBlack">
                                        En savoir plus sur la maternelle dans nos écoles
                                    </h3>
                                </div>

                                {/* Main Content */}
                                <div className="space-y-8">
                                    {/* Introduction */}
                                    <div className="bg-belgYellow/5 rounded-xl p-6 border-l-4 border-belgYellow">
                                        <p className="text-lg font-bold text-belgBlack leading-relaxed">
                                            Nous portons la conviction que la qualité de la maternelle repose sur deux piliers fondamentaux : la formation et l'expertise des enseignants ; un cadre sécurisant et structurant.
                                        </p>
                                    </div>

                                    {/* Nos enseignants */}
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold text-belgBlack flex items-center space-x-2">
                                            <GraduationCap className="h-6 w-6 text-belgYellow" />
                                            <span>Nos enseignants de maternelle :</span>
                                        </h4>
                                        <ul className="space-y-3 ml-4">
                                            {[
                                                { text: 'sont formés spécifiquement à la petite enfance', icon: Users, color: 'belgYellow' },
                                                { text: 'connaissent les étapes du développement de l\'enfant', icon: Target, color: 'belgRed' },
                                                { text: 'savent observer, accompagner et ajuster les apprentissages', icon: Lightbulb, color: 'belgBlack' },
                                            ].map((item, idx) => {
                                                const IconComponent = item.icon;
                                                const colorClasses = {
                                                    belgYellow: 'text-belgYellow',
                                                    belgRed: 'text-belgRed',
                                                    belgBlack: 'text-belgBlack',
                                                };
                                                return (
                                                    <li key={idx} className="flex items-start space-x-3">
                                                        <CheckCircle2 className={`h-5 w-5 ${colorClasses[item.color]} mt-0.5 flex-shrink-0`} />
                                                        <span className="text-gray-700">{item.text}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            Cette expertise permet d'accompagner chaque enfant avec justesse, sans pression inutile, tout en préparant progressivement la suite du parcours scolaire.
                                        </p>
                                    </div>

                                    {/* Cadre éducatif */}
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold text-belgBlack flex items-center space-x-2">
                                            <Shield className="h-6 w-6 text-belgRed" />
                                            <span>Notre cadre éducatif en maternelle</span>
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            Dans nos écoles le cadre posé en maternelle vise à rassurer l'enfant, lui donner des repères et lui permettre d'entrer sereinement dans les apprentissages.
                                        </p>
                                        <p className="text-gray-700 font-semibold mt-4">Ce cadre repose sur :</p>
                                        <div className="grid md:grid-cols-2 gap-3 mt-4">
                                            {[
                                                'des routines claires',
                                                'des règles adaptées à l\'âge',
                                                'un environnement calme et structuré',
                                                'une relation éducative fondée sur la confiance et le respect',
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-start space-x-2 bg-gray-50 rounded-lg p-3">
                                                    <CheckCircle2 className="h-5 w-5 text-belgYellow mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Ce qui se passe concrètement */}
                                    <div className="space-y-4 bg-belgRed/5 rounded-xl p-6 border-l-4 border-belgRed">
                                        <h4 className="text-lg font-bold text-belgBlack">Ce qui se passe concrètement :</h4>
                                        <ul className="space-y-2 ml-4">
                                            {[
                                                'journées structurées, rythmées et sécurisantes',
                                                'alternance entre activités guidées, temps d\'exploration et jeux éducatifs',
                                                'apprentissages en petits groupes et en collectif',
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <Clock className="h-5 w-5 text-belgRed mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Ce que l'enfant apprend */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-bold text-belgBlack">Ce que l'enfant apprend :</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {[
                                                { title: 'Langage oral', desc: 'riche et structuré', icon: BookOpen, color: 'belgYellow' },
                                                { title: 'Premières notions', desc: 'logiques et mathématiques', icon: Sparkles, color: 'belgRed' },
                                                { title: 'Motricité', desc: 'coordination, repérage dans l\'espace', icon: Target, color: 'belgBlack' },
                                                { title: 'Socialisation', desc: 'respect des règles, autonomie', icon: Users, color: 'belgYellow' },
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
                                    </div>

                                    {/* Comment l'enfant apprend */}
                                    <div className="space-y-4 bg-gray-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-belgBlack">Comment l'enfant apprend :</h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            En maternelle, l'enfant apprend avant tout <strong className="text-belgBlack">par l'action, le langage et l'expérience</strong>.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Les apprentissages s'appuient sur des situations concrètes qui lui permettent de comprendre, d'expérimenter et de structurer progressivement sa pensée.
                                        </p>
                                        <p className="text-gray-700 font-semibold mt-4">Concrètement :</p>
                                        <ul className="space-y-2 ml-4 mt-4">
                                            {[
                                                'l\'enfant manipule, observe, expérimente',
                                                'il développe son langage oral, base de tous les apprentissages futurs',
                                                'il apprend à se repérer dans le temps, l\'espace et la relation à l\'autre',
                                                'il commence à structurer sa réflexion et son attention',
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <CheckCircle2 className="h-5 w-5 text-belgYellow mt-0.5 flex-shrink-0" />
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
