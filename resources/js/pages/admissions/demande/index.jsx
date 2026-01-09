import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Calendar } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';
import Modal from '@/components/ui/modal';
import Banner from '@/components/banner';
import { demandeSteps, features, schoolLevels, icons } from '../data/data';

// Import admission images
import admissionImage from '../../../../../public/assets/images/admissions/EBM-C_0344.jpg';
import fresqueImage from '../../../../../public/assets/images/admissions/EBM-C_0345.jpg';
import partnershipImage from '../../../../../public/assets/images/admissions/EBM-C_0355.jpg';

export default function DemandeAdmission() {
    const [selectedStep, setSelectedStep] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (step) => {
        setSelectedStep(step);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedStep(null);
    };

    const openTableModal = () => {
        setSelectedStep({
            title: "Tableau des Niveaux",
            content: `**Tableau de Correspondance des Niveaux**

| Âge | Niveau Belge | Équivalence |
|-----|-------------|-------------|
| 4-5 ans | M1 | Maternelle 1 |
| 5-6 ans | M2 | Maternelle 2 |
| 6-7 ans | M3 | Maternelle 3 |
| 7-8 ans | P1 | Primaire 1 |
| 8-9 ans | P2 | Primaire 2 |
| 9-10 ans | P3 | Primaire 3 |
| 10-11 ans | P4 | Primaire 4 |
| 11-12 ans | P5 | Primaire 5 |
| 12-13 ans | P6 | Primaire 6 |
| 13-14 ans | S1 | Secondaire 1 |
| 14-15 ans | S2 | Secondaire 2 |
| 15-16 ans | S3 | Secondaire 3 |
| 16-17 ans | S4 | Secondaire 4 |
| 17-18 ans | S5 | Secondaire 5 |
| 18-19 ans | S6 | Secondaire 6 |

**Notes importantes :**
- L'admission en maternelle est possible dès 4 ans révolus
- Des tests de positionnement peuvent être requis pour certains niveaux
- Notre équipe pédagogique vous accompagnera dans le choix du niveau approprié`
        });
        setIsModalOpen(true);
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
                {/* Hero Banner */}
                <Banner
                    title="Demande d'Admission"
                    description="Rejoignez notre école d'excellence. Un processus d'admission simple et transparent pour garantir la meilleure intégration de votre enfant."
                    buttonText="Commencer ma demande"
                    buttonLink="#formulaire"
                />

                {/* School Levels Section */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <div className="mb-6 inline-block border-l-4 border-belgYellow pl-4">
                                <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                    Niveaux Scolaires
                                </p>
                            </div>
                            <h2 className="text-4xl font-bold text-belgBlack md:text-5xl">
                                Découvrez nos niveaux d'enseignement
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
                                De la maternelle au secondaire, nous offrons un parcours éducatif complet adapté à chaque âge.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {schoolLevels.map((level, index) => (
                                <div key={index} className="bg-belgYellow/10 rounded-2xl p-6 border border-belgYellow/20">
                                    <div className="mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-belgYellow text-belgBlack font-bold text-lg">
                                            {level.code}
                                        </div>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-belgBlack">{level.title}</h3>
                                    <p className="text-gray-700 mb-4">{level.age}</p>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {level.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>• {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Button
                                onClick={openTableModal}
                                size="lg"
                                className="bg-belgBlack text-white border-belgBlack hover:bg-belgBlack hover:text-white hover:scale-105 transition-all duration-300"
                            >
                                <Calendar className="mr-2 h-5 w-5" />
                                Voir le tableau des niveaux détaillé
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Visual Showcase Section */}
                <section className="py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <div className="mb-6 inline-block border-l-4 border-belgYellow pl-4">
                                <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                    Notre École
                                </p>
                            </div>
                            <h2 className="text-4xl font-bold text-belgBlack md:text-5xl">
                                Découvrez notre environnement d'apprentissage
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
                                Un lieu d'excellence où chaque élève peut s'épanouir dans un cadre stimulant et bienveillant.
                            </p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-3">
                            <div className="overflow-hidden rounded-2xl shadow-lg">
                                <img 
                                    src={admissionImage} 
                                    alt="École Belge de Rabat - Vue 1"
                                    className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="bg-white p-6">
                                    <h3 className="mb-2 text-xl font-bold text-belgBlack">Notre Campus</h3>
                                    <p className="text-gray-600">Un environnement moderne et accueillant conçu pour l'apprentissage et l'épanouissement.</p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl shadow-lg">
                                <img 
                                    src={fresqueImage} 
                                    alt="École Belge de Rabat - Vue 2"
                                    className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="bg-white p-6">
                                    <h3 className="mb-2 text-xl font-bold text-belgBlack">Salles de Classe</h3>
                                    <p className="text-gray-600">Des espaces d'apprentissage modernes équipés pour une pédagogie innovante.</p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl shadow-lg">
                                <img 
                                    src={partnershipImage} 
                                    alt="École Belge de Rabat - Vue 3"
                                    className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="bg-white p-6">
                                    <h3 className="mb-2 text-xl font-bold text-belgBlack">Projets Éducatifs</h3>
                                    <p className="text-gray-600">Des activités et projets qui favorisent la créativité et l'esprit d'équipe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="formulaire" className="py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <div className="mb-6 inline-block border-l-4 border-belgYellow pl-4">
                                <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                    Processus
                                </p>
                            </div>
                            <h2 className="text-4xl font-bold text-belgBlack md:text-5xl">
                                Votre parcours d'admission en 3 étapes
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
                                Un processus d'admission conçu pour être transparent, efficace et accompagné à chaque étape.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {demandeSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Step Number and Icon */}
                                        <div className={`${step.color} p-8 lg:w-1/3`}>
                                            <div className="text-white">
                                                <div className="mb-4 text-4xl font-bold opacity-50">
                                                    {step.number}
                                                </div>
                                                <div className="mb-6">
                                                    {React.createElement(icons[step.iconName], { className: "h-8 w-8" })}
                                                </div>
                                                <h3 className="text-2xl font-bold leading-tight">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-8">
                                            <p className="mb-6 text-lg text-gray-700">
                                                {step.shortDescription}
                                            </p>
                                            
                                            <div className="flex flex-wrap gap-4">
                                                <Button
                                                    onClick={() => openModal(step)}
                                                    variant="outline"
                                                    size="lg"
                                                    className="bg-belgYellow text-belgBlack border-belgYellow hover:bg-belgYellow hover:text-belgBlack hover:scale-105 transition-all duration-300"
                                                >
                                                    <Eye className="mr-2 h-5 w-5" />
                                                    Détails complets
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="my-16 text-center">
                            <div className="rounded-2xl bg-gradient-to-r from-[var(--color-belg-yellow)]/10 to-[var(--color-belg-red)]/10 p-8">
                                <h3 className="mb-4 text-2xl font-bold text-[var(--color-belg-black)]">
                                    Prêt à commencer votre demande ?
                                </h3>
                                <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                                    Notre équipe est là pour vous accompagner à chaque étape du processus d'admission.
                                    N'hésitez pas à nous contacter pour toute question.
                                </p>
                                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                    <Link href="/formulaire-admission">
                                        <Button
                                            size="lg"
                                            className="px-8 py-3 text-base bg-[var(--color-belg-yellow)] font-semibold text-black shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-[var(--color-belg-yellow)] hover:text-black"
                                        >
                                            Accéder au formulaire
                                        </Button>
                                    </Link>
                                    <Link href="/contact">
                                        <Button
                                            size="lg"
                                            className="px-8 py-3 text-base bg-black font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-black hover:text-white"
                                        >
                                            Nous Contacter
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* <section className="py-24 bg-belgBlack text-white">
                    <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
                        <h2 className="mb-6 text-4xl font-bold">
                            Prêt à commencer votre demande ?
                        </h2>
                        <p className="mb-8 text-xl leading-relaxed text-gray-100">
                            Notre équipe d'admissions est à votre disposition pour vous accompagner dans chaque étape du processus. 
                            N'hésitez pas à nous contacter pour toute question.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button
                                size="lg"
                                className="bg-belgYellow text-belgBlack hover:bg-belgYellow hover:text-belgBlack hover:scale-105 transition-all duration-300"
                            >
                                Commencer ma demande
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-belgBlack text-white border-belgBlack hover:bg-belgBlack hover:text-white hover:scale-105 transition-all duration-300"
                            >
                                Nous contacter
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Modal */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={selectedStep?.title}
                    content={selectedStep?.detailedContent || selectedStep?.content}
                    image="/assets/images/admissions/demande-modal-bg.jpg"
                />
            </div>
        </AppLayout>
    );
}
