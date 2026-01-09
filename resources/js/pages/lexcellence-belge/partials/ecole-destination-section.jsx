import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import image  from '../../../../../public/assets/images/lexcellence-belge/b.jpg';

export default function EcoleDestinationSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white px-6 py-20">
            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 h-64 w-64 rounded-full bg-[var(--color-belg-yellow)]/5 blur-3xl"></div>
                <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-[var(--color-belg-red)]/5 blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-[var(--color-belg-black)] md:text-5xl">
                        Qu'est-ce qu'une école de destination ?
                    </h2>
                </div>

                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Text on left */}
                    <div className="order-1 md:order-1">
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-700">
                                Une école de destination est bien plus qu'un
                                simple établissement d'enseignement. C'est un
                                lieu où chaque élève trouve les conditions
                                optimales pour son épanouissement personnel,
                                intellectuel et social.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Notre approche pédagogique innovante, combinée à
                                un cadre éducatif solide et à des enseignants
                                hautement qualifiés, crée un environnement où
                                l'excellence devient naturelle.
                            </p>
                            <div className="rounded-xl border border-[var(--color-belg-yellow)]/20 bg-white p-6 shadow-lg">
                                <h3 className="mb-3 text-xl font-bold text-[var(--color-belg-black)]">
                                    Notre Engagement
                                </h3>
                                <p className="text-gray-600">
                                    Former des leaders de demain, capables de
                                    s'adapter aux défis du 21ème siècle avec
                                    confiance, créativité et intégrité.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image on right */}
                    <div className="relative order-2 md:order-2">
                        <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-gradient-to-r from-[var(--color-belg-red)] to-[var(--color-belg-yellow)]"></div>
                        <img
                            src={image}
                            alt="Modern school environment"
                            className="relative h-96 w-full rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>

                {/* CTA at the bottom */}
                <div className="mt-16 text-center">
                    <div className="rounded-2xl bg-gradient-to-r from-[var(--color-belg-yellow)]/10 to-[var(--color-belg-red)]/10 p-8">
                        <h3 className="mb-4 text-2xl font-bold text-[var(--color-belg-black)]">
                            Prêt à nous rejoindre ?
                        </h3>
                        <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                            Découvrez comment l'École Belge Maroc peut
                            transformer l'avenir de votre enfant
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href="/ecoles/rabat">
                                <Button
                                    size="lg"
                                    className="px-8 py-3 text-base bg-[var(--color-belg-yellow)] font-semibold text-black shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-[var(--color-belg-yellow)] hover:text-black"
                                >
                                    Visiter l'école de Rabat
                                </Button>
                            </Link>
                            <Link href="/ecoles/casablanca">
                                <Button
                                    size="lg"
                                    className="px-8 py-3 text-base bg-black font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-black hover:text-white"
                                >
                                    Visiter l'école de Casablanca
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
