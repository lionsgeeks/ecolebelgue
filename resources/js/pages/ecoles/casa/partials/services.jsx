import { Users, UtensilsCrossed, Bus, TreePine } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            id: 'garderie',
            title: 'Garderie',
            icon: Users,
            bgColor: 'bg-belgYellow',
            textColor: 'text-belgBlack',
            description:
                'L\'établissement assure la surveillance des élèves à raison de 30 minutes le matin avant l\'heure de début des cours et de 30 minutes après la fin des cours. Au-delà, une garderie payante est proposée jusqu\'à 18h00. Ce service permet aux élèves de rester à l\'école dans un cadre encadré et sécurisé, sous la responsabilité de l\'établissement.',
        },
        {
            id: 'restauration',
            title: 'Restauration scolaire',
            icon: UtensilsCrossed,
            bgColor: 'bg-orange-500',
            textColor: 'text-white',
            description:
                'Un repas chaud est préparé et servi sur place (entrée, plat, dessert). Ce service de restauration est assuré par un prestataire externe spécialisé, la société ProxyRest, qui prépare et sert les repas. Les menus sont communiqués mensuellement aux parents. La cantine est un service facultatif, proposé sur inscription et payant directement auprès du prestataire.',
        },
        {
            id: 'transport',
            title: 'Transport',
            icon: Bus,
            bgColor: 'bg-blue-600',
            textColor: 'text-white',
            description:
                'Un service de transport scolaire est organisé à l\'école belge de Casablanca. Il est assuré par un prestataire externe spécialisé, la société RUN RUN, qui traite directement avec les parents souhaitant y souscrire. Ce service est payant et contractualisé directement entre les familles et le prestataire.',
        },
        {
            id: 'activites',
            title: 'Activités Extrascolaires',
            icon: TreePine,
            bgColor: 'bg-white',
            textColor: 'text-belgBlack',
            borderColor: 'border-2 border-gray-200',
            description:
                'L\'EBM ExtraClub propose des activités variées, créatives, culturelles et sportives. Les activités extrascolaires ont lieu en fin de journée après les cours ainsi que le mercredi après-midi. La participation aux activités extrascolaires est facultative, payante et se fait sur inscription, selon les modalités communiquées aux familles en début d\'année scolaire.',
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Services
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl">
                        Services et équipements
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className={`${service.bgColor} ${service.textColor} ${service.borderColor || ''} rounded-lg p-8 transition-transform hover:scale-105`}
                            >
                                <div className="mb-6 flex items-center gap-4">
                                    <div
                                        className={`flex h-16 w-16 items-center justify-center rounded-lg ${
                                            service.bgColor === 'bg-white'
                                                ? 'bg-gray-100'
                                                : 'bg-white/20'
                                        }`}
                                    >
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold">{service.title}</h3>
                                </div>
                                <p className="text-lg leading-relaxed opacity-90">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

