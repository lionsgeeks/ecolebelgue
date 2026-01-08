import { Users, GraduationCap, UserCheck, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function StatisticsSection() {
    const stats = [
        { 
            value: '2 000', 
            label: 'Élèves', 
            icon: Users,
        },
        { 
            value: '118', 
            label: 'Enseignants', 
            icon: GraduationCap,
        },
        { 
            value: '120', 
            label: 'Superviseurs', 
            icon: UserCheck,
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-32 md:py-40">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-20 lg:grid-cols-12">
                    {/* Testimonial - Left Side */}
                    <div className="lg:col-span-7">
                        <div className="max-w-2xl">
                            <div className="mb-8 flex items-center gap-4">
                                <img
                                    src="/assets/images/home/directeuredu resau.JPG"
                                    alt="Axel Bex CHAVAL"
                                    className="h-20 w-20 rounded-full object-cover ring-2 ring-gray-200"
                                    loading="lazy"
                                />
                                <div>
                                    <div className="text-xl font-bold text-belgBlack">
                                        Axel Bex CHAVAL
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Directeur du Réseau des écoles à
                                        programme de la FWB au Maroc
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <Quote className="h-8 w-8 text-belgYellow" />
                            </div>

                            <blockquote className="mb-10 text-2xl leading-relaxed text-gray-900 md:text-3xl">
                                Depuis 2014, nos établissements proposent un
                                enseignement fidèle aux programmes et aux
                                méthodes pédagogiques de la Fédération
                                Wallonie-Bruxelles. Nous y faisons vivre la
                                richesse de la rencontre entre le Royaume du
                                Maroc et la Belgique francophone.
                            </blockquote>

                            <Button
                                asChild
                                size="lg"
                                className="bg-belgBlack text-white hover:bg-belgBlack/90"
                            >
                                <Link href="/directeur-reseau">
                                    Mot du Directeur Réseau
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Statistics - Right Side */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <div className="mb-8">
                                <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                    Nos chiffres
                                </div>
                                <h2 className="text-3xl font-bold text-belgBlack md:text-4xl">
                                    Excellence en chiffres
                                </h2>
                            </div>
                            <div className="space-y-6">
                                {stats.map((stat, index) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200">
                                                <Icon className="h-5 w-5 text-belgBlack" />
                                            </div>
                                            <div>
                                                <div className="mb-1 text-3xl font-bold leading-none text-belgBlack md:text-4xl">
                                                    {stat.value}
                                                </div>
                                                <div className="text-base font-medium text-gray-700">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
