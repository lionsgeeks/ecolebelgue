import { useState } from 'react';
import { ChevronDown, Shield, Lightbulb, TrendingUp, GraduationCap } from 'lucide-react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

const cards = [
    {
        id: 1,
        icon: Shield,
        title: 'Une Garantie Solide et Rare',
        shortDescription: 'Par obligation légale, nos enseignants et nos directions sont tous des pédagogues certifiés, formés en Belgique et diplômés de l\'enseignement supérieur belge.',
        fullContent: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    Dans l'enseignement belge francophone, la qualification des enseignants n'est pas une promesse. C'est une exigence réglementaire.
                </p>
                <p>
                    Concrètement, cela signifie que nos enseignants et nos directions sont :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>pédagogues certifiés,</li>
                    <li>formés en Belgique,</li>
                    <li>diplômés de l'enseignement supérieur belge.</li>
                </ul>
                <p>
                    Cette qualification n'est pas optionnelle, ne dépend pas d'une politique interne. Elle s'impose durablement à nos écoles et est contrôlée.
                </p>
            </div>
        ),
    },
    {
        id: 2,
        icon: Lightbulb,
        title: 'Une pédagogie active et stimulante',
        shortDescription: 'Nous déployons une pédagogie active qui accorde une place centrale à l\'expérience, au mouvement, à l\'observation et au raisonnement.',
        fullContent: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    Enseigner ne se résume pas à suivre un programme. Cela suppose avant tout de comprendre comment un enfant apprend. L'enfant n'apprend pas par accumulation de contenu. L'enfant apprend par l'action, l'expérience et le raisonnement.
                </p>
                <p>
                    Notre pédagogie s'appuie sur cette réalité.
                </p>
                <p>
                    Dans nos écoles, notre approche pédagogique repose sur :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>une attention fine portée au développement cognitif, émotionnel et moteur de l'enfant,</li>
                    <li>des situations d'apprentissage qui relient le concret à l'abstrait,</li>
                    <li>une pédagogie active qui accorde une place centrale à l'expérience, au mouvement et à l'observation.</li>
                </ul>
            </div>
        ),
    },
    {
        id: 3,
        icon: TrendingUp,
        title: 'Une vision éducative tranchée',
        shortDescription: 'Notre vision de l\'éducation est fondée sur l\'acquisition de bases disciplinaires solides, de méthodes de travail efficaces et de compétences durables, dans un cadre bienveillant rigoureux.',
        fullContent: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    Notre vision de l'éducation est claire. Elle vise l'acquisition de bases disciplinaires solides, de méthodes de travail rigoureuses, et de repères durables, pour permettre aux élèves de se construire avec exigence, autonomie et confiance.
                </p>
                <p>
                    Elle s'appuie sur un cadre éducatif bienveillant mais rigoureux car pour réussir, l'éducation compte autant que l'instruction.
                </p>
            </div>
        ),
    },
    {
        id: 4,
        icon: GraduationCap,
        title: 'Un Diplôme solide',
        shortDescription: 'Le CESS constitue une base académique solide et internationalement reconnue, ouvrant tout l\'éventail des possibilités d\'études supérieures.',
        fullContent: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    Le CESS, diplôme de fin d'études secondaires de l'enseignement belge francophone, est reconnu au Maroc et partout à l'international.
                </p>
                <p>
                    Le CESS constitue une base académique solide, ouvrant tout l'éventail de possibilités d'études supérieures :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>établissements publics ou privés, universités ou grandes écoles,</li>
                    <li>nationales ou internationales,</li>
                    <li>selon les conditions propres à chaque pays et institution</li>
                </ul>
            </div>
        ),
    },
];

export default function PourquoiChoisirSection() {
    const [openCards, setOpenCards] = useState({});

    const toggleCard = (cardId) => {
        setOpenCards((prev) => ({
            ...prev,
            [cardId]: !prev[cardId],
        }));
    };

    return (
        <section className="bg-white py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-belgBlack">
                        Pourquoi choisir nos écoles
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {cards.map((card) => {
                        const Icon = card.icon;
                        const isOpen = openCards[card.id] || false;

                        return (
                            <Collapsible
                                key={card.id}
                                open={isOpen}
                                onOpenChange={() => toggleCard(card.id)}
                            >
                                <div className="group relative h-full flex flex-col overflow-hidden rounded-xl bg-gray-50/50 border border-gray-200 transition-all duration-300 hover:border-belgYellow/50 hover:shadow-lg">
                                    {/* Card Content */}
                                    <div className="flex flex-col flex-1 p-6 md:p-8">
                                        {/* Icon */}
                                        <div className="mb-4 flex justify-center">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-belgBlack/5">
                                                <Icon className="h-8 w-8 text-belgBlack" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="mb-3 text-center text-xl md:text-2xl font-bold text-belgBlack">
                                            {card.title}
                                        </h3>

                                        {/* Short Description */}
                                        <p className="mb-4 text-center text-sm md:text-base leading-relaxed text-gray-700">
                                            {card.shortDescription}
                                        </p>

                                        {/* Lire la suite Button */}
                                        <div className="flex justify-center mt-auto">
                                            <CollapsibleTrigger className="group/button flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-belgYellow hover:bg-gray-50">
                                                <span>Lire la suite</span>
                                                <ChevronDown
                                                    className={`h-4 w-4 transition-transform duration-200 ${
                                                        isOpen ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </CollapsibleTrigger>
                                        </div>

                                        {/* Expanded Content */}
                                        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                                            <div className="mt-6 border-t border-gray-200 pt-6">
                                                {card.fullContent}
                                            </div>
                                        </CollapsibleContent>
                                    </div>
                                </div>
                            </Collapsible>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
