import { Flag, Snowflake, Leaf, TreePine, FileText } from 'lucide-react';

const calendarSections = [
    {
        id: 'rentree',
        title: 'Rentrée Scolaire',
        icon: Flag,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-50',
        events: [
            { date: 'Lundi 25 août', description: 'Rentrée scolaire selon l\'organisation de chaque école' },
        ],
    },
    {
        id: 'trimestre1',
        title: '1er Trimestre',
        icon: Snowflake,
        iconColor: 'text-yellow-600',
        iconBg: 'bg-yellow-50',
        events: [
            { date: 'Vers le vendredi 05 septembre et son lendemain', description: 'Aïd Al Mawlid' },
            { date: 'Du samedi 18 octobre au dimanche 02 novembre inclus', description: 'Congé de détente' },
            { date: 'Lundi 03 novembre', description: 'Reprise des cours' },
            { date: 'Jeudi 06 novembre', description: 'Marche verte' },
            { date: 'Mardi 18 novembre', description: 'Fête de l\'indépendance' },
            { date: 'Du samedi 20 décembre au dimanche 04 janvier inclus', description: 'Vacances d\'hiver' },
        ],
    },
    {
        id: 'trimestre2',
        title: '2nd Trimestre',
        icon: Leaf,
        iconColor: 'text-yellow-600',
        iconBg: 'bg-yellow-50',
        events: [
            { date: 'Lundi 05 janvier', description: 'Reprise des cours' },
            { date: 'Dimanche 11 janvier', description: 'Manifeste de l\'indépendance' },
            { date: 'Mercredi 14 janvier', description: 'Nouvel an Amazigh' },
            { date: 'Du samedi 14 février au dimanche 01 mars inclus', description: 'Congé de détente' },
            { date: 'Lundi 02 mars', description: 'Reprise des cours' },
            { date: 'Vers le vendredi 20 mars et son lendemain', description: 'Fête de l\'Aïd El-Fitr – rupture de jeûne' },
            { date: 'Du samedi 25 avril au dimanche 10 mai inclus', description: 'Vacances de printemps comprenant le vendredi 01er mai (fête du travail)' },
        ],
    },
    {
        id: 'trimestre3',
        title: '3ème Trimestre',
        icon: TreePine,
        iconColor: 'text-yellow-600',
        iconBg: 'bg-yellow-50',
        events: [
            { date: 'Lundi 11 mai', description: 'Reprise des cours' },
            { date: 'Vers le mercredi 27 mai et son lendemain', description: 'Fête de l\'Aïd El Kebir' },
            { date: 'Mardi 16 juin', description: 'Premier Moharem' },
        ],
    },
    {
        id: 'fin-annee',
        title: 'Fin d\'année',
        icon: Flag,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-50',
        events: [
            { date: 'Vendredi 03 juillet', description: 'Dernier jour d\'école' },
            { date: 'Du samedi 04 juillet au dimanche 23 août inclus', description: 'Vacances d\'été' },
        ],
    },
];

const memoEvents = [
    { date: 'Jeudi 30 juillet', description: 'Fête du trône' },
    { date: 'Vendredi 14 août', description: 'Allégeance' },
    { date: 'Jeudi 20 août', description: 'Révolution du Roi et du Peuple' },
    { date: 'Vendredi 21 août', description: 'Fête de la Jeunesse' },
];

export default function CalendarContent() {
    return (
        <div className="space-y-12">
            {/* Download Link */}
            <div className="flex items-center justify-center gap-3 rounded-lg bg-white p-4 border border-gray-200 shadow-sm max-w-2xl mx-auto">
                <FileText className="h-6 w-6 text-belgRed flex-shrink-0" />
                <a
                    href="/assets/pdfs/Calendrier EBM 2025-26.pdf"
                    download="Calendrier EBM 2025-26.pdf"
                    className="text-base font-medium text-belgBlack hover:text-belgRed transition-colors"
                >
                    Télécharger le calendrier 2025/2026 ici
                </a>
            </div>

            {/* Vertical Timeline */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-8">
                {/* Desktop Timeline Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300" style={{ top: '1rem', bottom: '1rem' }}></div>

                {/* Timeline Items */}
                <div className="space-y-0 pt-4">
                    {calendarSections.map((section, index) => (
                        <TimelineItem
                            key={section.id}
                            section={section}
                            isEven={index % 2 === 0}
                            isLast={index === calendarSections.length - 1}
                        />
                    ))}
                </div>
            </div>

            {/* Et pour mémoire section */}
            {/* <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-belgBlack mb-6 text-center">Et pour mémoire :</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {memoEvents.map((event, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="text-sm font-semibold text-belgBlack mb-1">{event.date}</div>
                            <div className="text-sm text-gray-700">{event.description}</div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}

function TimelineItem({ section, isEven, isLast }) {
    const Icon = section.icon;

    return (
        <div className="relative flex items-start pb-12 md:pb-16">
            {/* Mobile: Full width with left padding for icon */}
            {/* Desktop: Left side for even items */}
            {isEven ? (
                <div className="w-full md:w-[calc(50%-0.5rem)] pl-8 md:pl-0 pr-0 md:pr-12">
                    <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-belgBlack mb-4">
                            {section.title}
                        </h3>
                        <ul className="space-y-2.5">
                            {section.events.map((event, index) => (
                                <li key={index} className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    <span className="font-semibold text-belgBlack">{event.date}:</span>{' '}
                                    {event.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="w-0 md:w-[calc(50%-0.5rem)]"></div>
            )}

            {/* Timeline Icon - Center on desktop */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 items-center">
                <div className={`${section.iconBg} rounded-full p-3 border-4 border-white shadow-md`}>
                    <Icon className={`h-6 w-6 ${section.iconColor}`} />
                </div>
            </div>

            {/* Mobile Timeline Icon - Left side */}
            <div className="md:hidden absolute left-0 top-6 z-10">
                <div className={`${section.iconBg} rounded-full p-2 border-2 border-white shadow-md`}>
                    <Icon className={`h-4 w-4 ${section.iconColor}`} />
                </div>
            </div>

            {/* Desktop: Right side for odd items */}
            {!isEven ? (
                <div className="w-full md:w-[calc(50%-0.5rem)] pl-8 md:pl-12 md:ml-auto">
                    <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-belgBlack mb-4">
                            {section.title}
                        </h3>
                        <ul className="space-y-2.5">
                            {section.events.map((event, index) => (
                                <li key={index} className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    <span className="font-semibold text-belgBlack">{event.date}:</span>{' '}
                                    {event.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="w-0 md:w-[calc(50%-0.5rem)]"></div>
            )}

            {/* Mobile Timeline Line */}
            {!isLast && (
                <div className="md:hidden absolute left-3 top-12 w-0.5 h-full bg-gray-300"></div>
            )}
        </div>
    );
}
