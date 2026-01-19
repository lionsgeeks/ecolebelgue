import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function SchoolsSection() {
    const schools = [
        {
            name: 'École belge de Casablanca',
            image: '/assets/images/home/casa1.JPG',
            description:"Notre école de Casablanca offre un cursus scolaire belge francophone complet, de la classe d’accueil (2 ans) à la dernière année de l’enseignement secondaire (18 ans). La langue d’enseignement est le français. L’arabe, l’anglais et l’espagnol y sont enseignés respectivement à partir de la M3, de la P1 et de la S4. L’école belge de Casablanca organise la cantine, la garderie, le transport et propose un programme varié d’activités extrascolaires pour tous les âges. Implantée à Darbouazza au sein d’un campus de 7,5 hectares, l’école belge de Casablanca accueille ses élèves dans un environnement scolaire ouvert sur la nature, à l’écart de l’agitation urbaine, pensé pour offrir des conditions d’apprentissage à la fois épanouissantes et exigeantes. Aussi, notre établissement de Casablanca dispose d’un espace d’école du dehors déployé sur un terrain de 1,5 hectares, lui permettant d’adopter une pédagogie mixte « indoor/outdoor ».",
            link: '/ecoles/casablanca',
        },
        {
            name: 'École belge de Rabat',
            image: '/assets/images/home/rabat2.JPG',
            description:"Inaugurée en novembre 2018 par Son Altesse Royale la Princesse Astrid de Belgique, notre école de Rabat est implantée au cœur de Hay Riad. Elle accueille cette année 1050 élèves de la classe d’accueil (2ans) à la cinquième année secondaire (17 ans). La sixième année secondaire ouvrira en 2026-2027 pour compléter tout le parcours scolaire de l’enseignement belge francophone. La langue d’enseignement est le français. L’arabe, l’anglais ou le néerlandais et l’espagnol y sont enseignés respectivement à partir de la M3, de la P1 et de la S4. L’école belge de Rabat organise la cantine, la garderie et propose un programme varié d’activités extrascolaires pour tous les âges. L’École belge de Rabat est implantée sur un site de près d’un hectare et demi, qui offre un cadre à la fois urbain, verdoyant et calme, pensé pour répondre aux besoins des élèves à chaque étape de leur scolarité.",
            link: '/ecoles/rabat',
        },
    ];

    return (
        <section className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Nos Écoles
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                        Deux établissements d'excellence
                    </h2>
                </div>

                <div className="space-y-24">
                    {schools.map((school, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-12 md:flex-row md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="flex-1">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={school.image}
                                        alt={school.name}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-6 w-6 text-belgYellow" />
                                    <h3 className="text-3xl font-bold text-belgBlack md:text-4xl">
                                        {school.name}
                                    </h3>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-700 md:text-xl line-clamp-9">
                                    {school.description}
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-belgBlack text-white hover:bg-belgBlack/90"
                                >
                                    <Link href={school.link}>
                                        Plus de détails
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
