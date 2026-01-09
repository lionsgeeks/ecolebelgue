import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, BarChart3, MessageSquare, Lightbulb, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function OrientationSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const orientationPoints = [
        { icon: Eye, title: "Observation du profil de l'élève", color: 'belgYellow' },
        { icon: BarChart3, title: 'Analyse des résultats et intérêts', color: 'belgRed' },
        { icon: MessageSquare, title: 'Dialogue régulier', description: 'Avec élève et famille', color: 'belgBlack' },
        { icon: Lightbulb, title: 'Réflexion sur les poursuites', description: "D'études possibles", color: 'belgYellow' },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-belgBlack mb-6">
                        L'orientation et les choix d'options
                    </h2>
                </div>

                <div className="mb-12 space-y-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <p className="text-lg leading-relaxed text-gray-700">
                            Dans nos écoles, l'orientation se construit progressivement tout au long du parcours secondaire.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Notre accompagnement repose sur :
                        </p>
                    </div>

                    {/* Orientation Points Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        {orientationPoints.map((point, index) => {
                            const IconComponent = point.icon;
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
                                    className={`rounded-xl border-l-4 ${colorClasses[point.color]} p-6 transition-all hover:shadow-lg hover:-translate-y-1`}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`p-3 rounded-lg ${iconColorClasses[point.color]} shrink-0`}>
                                            <IconComponent className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-belgBlack mb-1">
                                                {point.title}
                                            </h4>
                                            {point.description && (
                                                <p className="text-sm text-gray-600">
                                                    {point.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4 text-center">
                        <p className="text-lg leading-relaxed text-gray-700">
                            L'objectif est d'aboutir à un choix cohérent, réfléchi et assumé.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Les options proposées au secondaire permettent aux élèves d'approfondir certains domaines tout en conservant un socle académique solide. Les choix s'effectuent progressivement, avec l'accompagnement des équipes pédagogiques et de nos spécialistes de l'orientation.
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogTrigger asChild>
                                    <Button
                                        size="lg"
                                        className="bg-belgBlack hover:bg-belgBlack/90 text-white px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl "
                                    >
                                <FileText className="mr-2 h-5 w-5" />
                                Consulter les choix d'options d'orientation
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-belgBlack">
                                    Choix d'options d'orientation
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

