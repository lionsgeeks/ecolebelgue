import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function TestimonialSection() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-5 md:gap-8">
                    {/* Director Image */}
                    <div className="md:col-span-2">
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 h-full w-full border-4 border-belgYellow" />
                            <img
                                src="/assets/images/home/directeuredu resau.JPG"
                                alt="Axel Bex CHAVAL"
                                className="relative h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="mt-6">
                            <div className="text-xl font-bold text-belgBlack">
                                Axel Bex CHAVAL
                            </div>
                            <div className="mt-1 text-sm text-gray-600">
                                Directeur du Réseau des écoles à
                                programme de la FWB au Maroc
                            </div>
                        </div>
                    </div>

                    {/* Quote Content */}
                    <div className="md:col-span-3">
                        <div className="mb-6">
                            <Quote className="h-12 w-12 text-belgYellow" />
                        </div>
                        <blockquote className="mb-8 text-2xl leading-relaxed text-gray-800 md:text-3xl">
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
                            className="bg-belgYellow text-belgBlack hover:bg-belgYellow/90"
                        >
                            <Link href="/directeur-reseau">
                                Mot du Directeur Réseau
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
