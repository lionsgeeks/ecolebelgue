import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, BarChart3, MessageSquare, Lightbulb, FileText, GraduationCap, Award, Scroll, ArrowRight, Baby, BookOpen, GraduationCap as Cap, TrendingUp } from 'lucide-react';
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
                        <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-y-auto p-0 bg-gradient-to-br from-gray-50 to-white">
                            <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-belgBlack mb-2">
                                        Notre parcours scolaire
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600">
                                        Aperçu du parcours éducatif de la maternelle au secondaire
                                    </p>
                                </div>

                                {/* Main Diagram Container */}
                                <div className="relative bg-white rounded-2xl shadow-xl p-4 md:p-6 border-2 border-gray-100">
                                    {/* Level 1: Enseignement Sections */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        {/* Enseignement Fondamental */}
                                        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 shadow-lg">
                                            <div className="absolute -top-3 left-6 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                                ENSEIGNEMENT FONDAMENTAL
                                            </div>
                                            <div className="mt-4 text-center">
                                                <GraduationCap className="h-12 w-12 mx-auto text-blue-600 mb-3" />
                                                <p className="text-sm text-blue-800 font-medium">
                                                    De 2 à 11 ans
                                                </p>
                                            </div>
                                        </div>

                                        {/* Enseignement Secondaire */}
                                        <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200 shadow-lg">
                                            <div className="absolute -top-3 left-6 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                                ENSEIGNEMENT SECONDAIRE
                                            </div>
                                            <div className="mt-4 text-center">
                                                <Cap className="h-12 w-12 mx-auto text-purple-600 mb-3" />
                                                <p className="text-sm text-purple-800 font-medium">
                                                    De 12 à 17 ans
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Level 2: Formation Types */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-belgYellow/20 rounded-xl p-5 border-2 border-belgYellow/40 shadow-md">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <BookOpen className="h-6 w-6 text-belgBlack" />
                                                <h4 className="font-bold text-belgBlack text-lg">FORMATION COMMUNE</h4>
                                            </div>
                                            <p className="text-sm text-gray-700">
                                                Socle commun pour tous les élèves
                                            </p>
                                        </div>
                                        <div className="bg-belgRed/20 rounded-xl p-5 border-2 border-belgRed/40 shadow-md">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <TrendingUp className="h-6 w-6 text-belgRed" />
                                                <h4 className="font-bold text-belgRed text-lg">FORMATION COMMUNE + OPTIONS</h4>
                                            </div>
                                            <p className="text-sm text-gray-700">
                                                Spécialisation selon les intérêts et aptitudes
                                            </p>
                                        </div>
                                    </div>

                                    {/* Level 3: Educational Stages */}
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        {[
                                            { name: 'Maternelle', icon: Baby, color: 'belgYellow', bg: 'bg-belgYellow/10', border: 'border-belgYellow' },
                                            { name: 'Primaire', icon: BookOpen, color: 'belgRed', bg: 'bg-belgRed/10', border: 'border-belgRed' },
                                            { name: 'Secondaire', icon: Cap, color: 'belgBlack', bg: 'bg-belgBlack/10', border: 'border-belgBlack' },
                                        ].map((stage, idx) => {
                                            const IconComponent = stage.icon;
                                            return (
                                                <div key={idx} className={`${stage.bg} rounded-xl p-4 border-2 ${stage.border} text-center shadow-sm hover:shadow-md transition-shadow`}>
                                                    <IconComponent className={`h-8 w-8 mx-auto mb-2 text-${stage.color}`} />
                                                    <h5 className="font-bold text-belgBlack text-sm">{stage.name}</h5>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Level 4: Detailed Stages Grid */}
                                    <div className="space-y-6">
                                        {/* Maternelle Stages */}
                                        <div className="space-y-3">
                                            <h5 className="font-bold text-belgBlack text-lg flex items-center space-x-2">
                                                <Baby className="h-5 w-5 text-belgYellow" />
                                                <span>Maternelle</span>
                                            </h5>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                {[
                                                    { code: 'CA', age: '2 ans', label: 'Classe d\'accueil' },
                                                    { code: 'M1', age: '3 ans', label: '1ère maternelle' },
                                                    { code: 'M2', age: '4 ans', label: '2ème maternelle' },
                                                    { code: 'M3', age: '5 ans', label: '3ème maternelle' },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="bg-belgYellow/10 border-2 border-belgYellow/40 rounded-lg p-4 text-center hover:bg-belgYellow/20 transition-colors shadow-sm">
                                                        <div className="font-bold text-belgBlack text-lg mb-1">{item.code}</div>
                                                        <div className="text-sm font-semibold text-belgBlack">{item.age}</div>
                                                        <div className="text-xs text-gray-600 mt-1">{item.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Primaire Stages */}
                                        <div className="space-y-3">
                                            <h5 className="font-bold text-belgBlack text-lg flex items-center space-x-2">
                                                <BookOpen className="h-5 w-5 text-belgRed" />
                                                <span>Primaire</span>
                                            </h5>
                                            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                                                {[
                                                    { code: 'P1', age: '6 ans' },
                                                    { code: 'P2', age: '7 ans' },
                                                    { code: 'P3', age: '8 ans' },
                                                    { code: 'P4', age: '9 ans' },
                                                    { code: 'P5', age: '10 ans' },
                                                    { code: 'P6', age: '11 ans' },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="bg-belgRed/10 border-2 border-belgRed/40 rounded-lg p-4 text-center hover:bg-belgRed/20 transition-colors shadow-sm">
                                                        <div className="font-bold text-belgBlack text-lg mb-1">{item.code}</div>
                                                        <div className="text-sm font-semibold text-belgBlack">{item.age}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Secondaire Stages */}
                                        <div className="space-y-3">
                                            <h5 className="font-bold text-belgBlack text-lg flex items-center space-x-2">
                                                <Cap className="h-5 w-5 text-belgBlack" />
                                                <span>Secondaire</span>
                                            </h5>
                                            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                                                {[
                                                    { code: 'S1', age: '12 ans' },
                                                    { code: 'S2', age: '13 ans' },
                                                    { code: 'S3', age: '14 ans' },
                                                    { code: 'S4', age: '15 ans' },
                                                    { code: 'S5', age: '16 ans' },
                                                    { code: 'S6', age: '17 ans' },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="bg-belgBlack/10 border-2 border-belgBlack/40 rounded-lg p-4 text-center hover:bg-belgBlack/20 transition-colors shadow-sm">
                                                        <div className="font-bold text-white text-lg mb-1 bg-belgBlack/20 rounded px-2 py-1 inline-block">{item.code}</div>
                                                        <div className="text-sm font-semibold text-belgBlack mt-2">{item.age}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Certifications Section */}
                                    <div className="mt-10 pt-8 border-t-4 border-gray-200">
                                        <h5 className="font-bold text-belgBlack text-xl text-center mb-6 flex items-center justify-center space-x-2">
                                            <Award className="h-6 w-6 text-belgYellow" />
                                            <span>Certifications</span>
                                        </h5>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[
                                                { 
                                                    name: 'CEP', 
                                                    fullName: 'Certificat d\'études primaires', 
                                                    stage: 'P6 (11 ans)',
                                                    color: 'belgYellow',
                                                    icon: Scroll
                                                },
                                                { 
                                                    name: 'CE1D', 
                                                    fullName: 'Certificat d\'études du 1er degré de l\'enseignement secondaire', 
                                                    stage: 'S2 (13 ans)',
                                                    color: 'belgRed',
                                                    icon: Award
                                                },
                                                { 
                                                    name: 'CESS', 
                                                    fullName: 'Certificat d\'enseignement secondaire supérieur', 
                                                    stage: 'S6 (17 ans)',
                                                    color: 'belgBlack',
                                                    icon: GraduationCap
                                                },
                                            ].map((cert, idx) => {
                                                const IconComponent = cert.icon;
                                                const colorClasses = {
                                                    belgYellow: { bg: 'bg-belgYellow', border: 'border-belgYellow', text: 'text-belgBlack' },
                                                    belgRed: { bg: 'bg-belgRed', border: 'border-belgRed', text: 'text-white' },
                                                    belgBlack: { bg: 'bg-belgBlack', border: 'border-belgBlack', text: 'text-white' },
                                                };
                                                const colors = colorClasses[cert.color];
                                                
                                                return (
                                                    <div key={idx} className={`relative ${colors.bg}/10 border-2 ${colors.border} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                                                        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.bg} ${colors.text} rounded-full p-3 shadow-lg`}>
                                                            <IconComponent className="h-6 w-6" />
                                                        </div>
                                                        <div className="mt-6 text-center">
                                                            <div className={`font-bold text-2xl mb-2 ${colors.text} bg-white/50 rounded-lg px-3 py-1 inline-block`}>
                                                                {cert.name}
                                                            </div>
                                                            <p className="text-sm text-gray-700 font-medium mb-2">
                                                                {cert.fullName}
                                                            </p>
                                                            <div className="flex items-center justify-center space-x-2 text-xs text-gray-600">
                                                                <ArrowRight className="h-4 w-4" />
                                                                <span>Obtenu à {cert.stage}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
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

