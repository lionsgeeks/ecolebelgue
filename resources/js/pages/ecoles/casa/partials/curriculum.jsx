import { BookOpen, Building2 } from 'lucide-react';

export default function CurriculumSection() {
    const sections = [
        {
            id: 'fondamentale',
            title: 'Section fondamentale',
            icon: BookOpen,
            bgColor: 'bg-blue-600',
            textColor: 'text-white',
            schedules: [
                { level: 'Ouverture', times: ['07h45 Ouverture des portes de l\'école'] },
                { level: 'Début des cours', times: ['08h25 Début des cours / 8h50 en section maternelle'] },
                { level: 'Fin des cours', times: ['15h30 Fin des cours'] },
                { level: 'Fermeture', times: ['17h00 Fermeture des portes de l\'école'] },
                { level: 'Mercredi', times: ['Mercredi fin des cours à 12h10 en maternelle', 'Mercredi fin des cours à 13h00 en primaire'] },
            ],
        },
        {
            id: 'secondaire',
            title: 'Section secondaire',
            icon: Building2,
            bgColor: 'bg-orange-500',
            textColor: 'text-white',
            schedules: [
                { level: 'Début des cours', times: ['08h25 Début des cours'] },
                { level: 'Fin des cours', times: ['16h30 Fin des cours'] },
                { level: 'Horaires spéciaux', times: ['Les mardis et jeudis les élèves du dernier degré terminent les cours à 17h20'] },
                { level: 'Mercredi', times: ['Le mercredi les cours se terminent à 13h00'] },
            ],
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Programmes
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl">
                        Sections d'enseignement
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={section.id}
                                className={`${section.bgColor} ${section.textColor} rounded-lg p-8`}
                            >
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold">{section.title}</h3>
                                </div>
                                <div className="space-y-6">
                                    {section.schedules.map((schedule, index) => (
                                        <div key={index}>
                                            <h4 className="mb-2 text-lg font-semibold">
                                                {schedule.level}
                                            </h4>
                                            <ul className="space-y-1">
                                                {schedule.times.map((time, timeIndex) => (
                                                    <li key={timeIndex} className="flex items-center gap-2">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                                                        <span>{time}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

