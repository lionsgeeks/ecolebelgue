import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function SchoolsSection() {
    const schools = [
        {
            name: 'École belge de Casablanca',
            image: '/assets/images/home/casa1.JPG',
            description:
                'Située au cœur de Casablanca, notre établissement offre un environnement d\'apprentissage moderne et stimulant. Avec des installations de pointe et un corps enseignant qualifié, nous préparons nos élèves à exceller dans un monde en constante évolution. Notre approche pédagogique allie rigueur académique et bienveillance, créant un cadre propice à l\'épanouissement de chaque élève.',
            link: '/ecoles/casablanca',
        },
        {
            name: 'École belge de Rabat',
            image: '/assets/images/home/rabat2.JPG',
            description:
                'Inaugurée récemment, notre école de Rabat représente l\'avenir de l\'enseignement belge au Maroc. Avec une capacité d\'accueil importante et des infrastructures modernes, nous offrons un programme éducatif complet qui respecte les standards de la Fédération Wallonie-Bruxelles. Notre mission est de former des citoyens du monde, ouverts sur les cultures marocaine et belge.',
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
                            className={`flex flex-col gap-12 md:flex-row md:items-center ${
                                index % 2 === 1 ? 'md:flex-row-reverse' : ''
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
                                <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
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
