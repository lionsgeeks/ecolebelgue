import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import Modal from '@/components/ui/modal';
import { processusSteps, icons } from '../../data/data';

export default function ProcessusSection() {
    const [selectedStep, setSelectedStep] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const steps = processusSteps;

    const openModal = (step) => {
        setSelectedStep(step);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedStep(null);
    };

    return (
        <>
            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="mb-16">
                        <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                Processus
                            </p>
                        </div>
                        <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl mb-6">
                            Notre processus d'admission
                        </h2>
                        <div className="max-w-4xl">
                            <p className="text-lg leading-relaxed text-gray-700">
                                Notre processus d'admission est conçu pour vous accompagner à chaque étape et assurer une intégration réussie de votre enfant.
                            </p>
                        </div>
                    </div>

                    {/* Steps Cards */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center justify-center ">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group h-full flex flex-col"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-belgYellow/10 border border-belgYellow/20 group-hover:bg-belgYellow/20 transition-colors duration-300">
                                        <div className="text-belgYellow">
                                            {React.createElement(icons[step.iconName], { className: "h-6 w-6" })}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-belgBlack mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                                    {step.shortDescription}
                                </p>
                                <div className="mt-auto">
                                    <Button
                                        onClick={() => openModal(step)}
                                        variant="outline"
                                        size="sm"
                                        className="bg-belgYellow text-belgBlack hover:bg-belgYellow hover:text-belgBlack hover:scale-105 transition-all duration-300 border-belgYellow"
                                    >
                                        En savoir plus
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    {/* <div className="mt-16">
                        <div className="bg-belgBlack rounded-2xl p-12 text-white">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">
                                        Prêt à commencer ?
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-100 max-w-2xl">
                                        Notre équipe est là pour vous guider à chaque étape du processus d'admission. 
                                        Contactez-nous pour démarrer cette belle aventure éducative.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Button
                                        size="lg"
                                        className="bg-belgYellow text-belgBlack hover:bg-belgYellow/90"
                                    >
                                        Démarrer la demande
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={selectedStep?.title}
                content={selectedStep?.detailedContent}
                image="/assets/images/admissions/processus-modal-bg.jpg"
            />
        </>
    );
}
