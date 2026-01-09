import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { useState } from 'react';

export default function AvantagesSection() {
    const [selectedModal, setSelectedModal] = useState(null);

    const avantages = [
        {
            title: "Une Garantie Solide et Rare",
            description: "Par obligation légale, nos enseignants et nos directions sont tous des pédagogues certifiés, formés en Belgique et diplômés de l'enseignement supérieur belge.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "yellow",
            fullContent: "Dans l'enseignement belge francophone, la qualification des enseignants n'est pas une promesse. C'est une exigence réglementaire.\n\nConcrètement, cela signifie que nos enseignants et nos directions sont :\n\n* pédagogues certifiés,\n* formés en Belgique,\n* diplômés de l'enseignement supérieur belge.\n\nCette qualification n'est pas optionnelle, ne dépend pas d'une politique interne. Elle s'impose à tous et garantit la qualité et la cohérence de l'encadrement pédagogique.",
            image: "/assets/images/lexcellence-belge/4.jpg"
        },
        {
            title: "Une pédagogie active et stimulante",
            description: "Nous déployons une pédagogie active qui accorde une place centrale à l'expérience, au mouvement, à l'observation et au raisonnement.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            color: "red",
            fullContent: "Nous savons comment un enfant apprend.\n\nNous déployons une pédagogie active qui accorde une place centrale à l'expérience, au mouvement, à l'observation et au raisonnement.\n\nChez nous, l'élève apprend par l'action. Il est placé au cœur de sa formation et construit ses savoirs par des activités concrètes qui lui donnent l'envie d'apprendre.",
            image: "/assets/images/lexcellence-belge/b.jpg"
        },
        {
            title: "Une vision éducative tranchée",
            description: "Notre vision de l'éducation est fondée sur l'acquisition de bases disciplinaires solides, de méthodes de travail efficaces et de compétences durables, dans un cadre bienveillant rigoureux.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "yellow",
            fullContent: "Notre vision de l'éducation est fondée sur l'acquisition de bases disciplinaires solides, de méthodes de travail efficaces et de compétences durables, dans un cadre bienveillant rigoureux.\n\nNous visons l'excellence sans tomber dans l'élitisme. Nous préparons les élèves à la réalité du monde d'aujourd'hui et de demain.",
            image: "/assets/images/lexcellence-belge/Notre projet pédagogique _ Bannière.jpg"
        },
        {
            title: "Un Diplôme solide",
            description: "Le CESS constitue une base académique solide et internationalement reconnue, ouvrant tout l'éventail des possibilités d'études supérieures.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "red",
            fullContent: "Le CESS que nos élèves obtiennent est un diplôme reconnu au Maroc comme à l'international.\n\nIl constitue une base académique solide et internationalement reconnue, ouvrant tout l'éventail des possibilités d'études supérieures.\n\nNos élèves peuvent ainsi poursuivre leurs études où ils le souhaitent, avec la garantie d'un diplôme de valeur.",
            image: "/assets/images/lexcellence-belge/4.jpg"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-belg-black)] mb-6">
                        Pourquoi Nous Choisir
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Les bénéfices concrets qui font la différence dans le parcours éducatif de votre enfant
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {avantages.map((avantage, index) => (
                        <div key={index} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100">
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${
                                avantage.color === 'yellow' 
                                    ? 'from-[var(--color-belg-yellow)] via-transparent to-[var(--color-belg-yellow)]' 
                                    : 'from-[var(--color-belg-red)] via-transparent to-[var(--color-belg-red)]'
                            } opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                            
                            {/* Card Content */}
                            <div className="relative p-8">
                                {/* Icon Section */}
                                <div className="flex items-center mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                                        avantage.color === 'yellow' 
                                            ? 'from-[var(--color-belg-yellow)]/20 to-[var(--color-belg-yellow)]/10' 
                                            : 'from-[var(--color-belg-red)]/20 to-[var(--color-belg-red)]/10'
                                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <div className={avantage.color === 'yellow' ? 'text-[var(--color-belg-yellow)]' : 'text-[var(--color-belg-red)]'}>
                                            {avantage.icon}
                                        </div>
                                    </div>
                                    <div className={`ml-4 w-px h-12 ${
                                        avantage.color === 'yellow' ? 'bg-[var(--color-belg-yellow)]/30' : 'bg-[var(--color-belg-red)]/30'
                                    }`}></div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-[var(--color-belg-black)] mb-4 group-hover:text-[var(--color-belg-red)] transition-colors duration-300">
                                    {avantage.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                                    {avantage.description}
                                </p>

                                {/* Button */}
                                <div className="flex items-center justify-between">
                                    <div className={`flex-1 h-px ${
                                        avantage.color === 'yellow' ? 'bg-[var(--color-belg-yellow)]/30' : 'bg-[var(--color-belg-red)]/30'
                                    }`}></div>
                                    <Button
                                        onClick={() => setSelectedModal(avantage)}
                                        size="sm"
                                        className="ml-4 transition-all duration-300 hover:scale-105 bg-[var(--color-belg-yellow)] hover:bg-[var(--color-belg-yellow)] text-black hover:text-black shadow-lg hover:shadow-xl"
                                    >
                                        Lire plus
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={!!selectedModal}
                onClose={() => setSelectedModal(null)}
                title={selectedModal?.title || ''}
                content={selectedModal?.fullContent || ''}
                image={selectedModal?.image || ''}
            />
        </section>
    );
}
