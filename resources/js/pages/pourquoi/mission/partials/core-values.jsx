import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CoreValues() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-[var(--color-belg-yellow)]/10 text-[var(--color-belg-red)] border-[var(--color-belg-yellow)]/20 px-4 py-2">
                        Nos Piliers
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-belg-black)] mb-6">
                        Les fondations de notre mission
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Six piliers essentiels qui guident notre action quotidienne et façonnent l'expérience éducative
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                        <CardHeader className="text-center pb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-belg-yellow)]/20 to-[var(--color-belg-yellow)]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-[var(--color-belg-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--color-belg-black)] mb-2">Excellence Académique</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-gray-600 leading-relaxed">
                                Maintenir les plus hauts standards académiques à travers des programmes rigoureux 
                                et des enseignants qualifiés.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                        <CardHeader className="text-center pb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-belg-red)]/20 to-[var(--color-belg-red)]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-[var(--color-belg-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--color-belg-black)] mb-2">Communauté Engagée</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-gray-600 leading-relaxed">
                                Construire une communauté solidaire où élèves, parents et enseignants collaborent 
                                pour la réussite de chacun.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                        <CardHeader className="text-center pb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-belg-yellow)]/20 to-[var(--color-belg-yellow)]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-[var(--color-belg-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--color-belg-black)] mb-2">Innovation</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-gray-600 leading-relaxed">
                                Intégrer les technologies et méthodes pédagogiques innovantes pour préparer 
                                les élèves au monde de demain.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                        <CardHeader className="text-center pb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-belg-red)]/20 to-[var(--color-belg-red)]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-[var(--color-belg-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--color-belg-black)] mb-2">Ouverture Mondiale</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-gray-600 leading-relaxed">
                                Développer une perspective internationale à travers des échanges culturels et 
                                des langues étrangères.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                        <CardHeader className="text-center pb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-belg-yellow)]/20 to-[var(--color-belg-yellow)]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-[var(--color-belg-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--color-belg-black)] mb-2">Bien-être</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-gray-600 leading-relaxed">
                                Assurer le bien-être physique et mental des élèves dans un environnement 
                                safe et bienveillant.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                        <CardHeader className="text-center pb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-belg-red)]/20 to-[var(--color-belg-red)]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-[var(--color-belg-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--color-belg-black)] mb-2">Développement Durable</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-gray-600 leading-relaxed">
                                Promouvoir la conscience écologique et les pratiques durables 
                                pour préserver notre planète.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
