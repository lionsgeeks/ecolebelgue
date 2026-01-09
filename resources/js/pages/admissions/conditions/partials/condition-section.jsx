import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import Modal from '@/components/ui/modal';
import { admissionTypes, icons } from '../../data/data';

export default function ConditionSection() {
    const [selectedType, setSelectedType] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const types = admissionTypes;

    const openModal = (type) => {
        setSelectedType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedType(null);
    };

    return (
        <>
            <section className="bg-gray-50 py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                Types d'admission
                            </p>
                        </div>
                        <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                            Types d'admission
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {types.map((type, index) => (
                            <div
                                key={index}
                                onClick={() => openModal(type)}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer transform hover:-translate-y-1 h-full flex flex-col"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-belgYellow/10 border border-belgYellow/20 group-hover:bg-belgYellow/20 transition-colors duration-300">
                                        {React.createElement(icons[type.iconName], { className: "h-8 w-8 text-belgYellow" })}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-belgBlack mb-4">
                                    {type.title}
                                </h3>
                                <div className="flex-1 flex flex-col">
                                    <p className="text-gray-700 leading-relaxed mb-4 flex-1">
                                        {type.description}
                                    </p>
                                    <div className="flex justify-center mt-auto">
                                        <span className="text-belgYellow font-semibold text-sm group-hover:text-belgBlack transition-colors duration-300">
                                            En savoir plus →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="mt-16">
                        <div className="bg-belgBlack rounded-2xl p-12 text-white">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">
                                        Comment postuler ?
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-100 max-w-2xl">
                                        Chaque type d'admission suit une procédure spécifique. 
                                        Contactez notre service des admissions pour connaître les détails 
                                        et les documents requis pour votre situation.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Button
                                        size="lg"
                                        className="bg-belgYellow text-belgBlack hover:bg-belgYellow/90"
                                    >
                                        Contacter les admissions
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
                title={selectedType?.title}
                content={selectedType?.detailedContent}
                image="/assets/images/admissions/modal-bg.jpg"
            />
        </>
    );
}
