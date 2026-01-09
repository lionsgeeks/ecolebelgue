import image from '../../../../../public/assets/images/lexcellence-belge/4.jpg';

export default function MissionSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white px-6 py-20">
            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 h-64 w-64 rounded-full bg-[var(--color-belg-yellow)]/5 blur-3xl"></div>
                <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-[var(--color-belg-red)]/5 blur-3xl"></div>
            </div>
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-[var(--color-belg-black)] md:text-5xl">
                        Former les Leaders de Demain
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                        Notre mission est de fournir une éducation de qualité
                        supérieure qui prépare les étudiants aux défis du 21ème
                        siècle avec excellence et innovation.
                    </p>
                </div>
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <div className="space-y-6">
                            <div className="group flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-belg-yellow)] transition-transform duration-300 group-hover:scale-110">
                                    <svg
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-[var(--color-belg-black)] transition-colors duration-300 group-hover:text-[var(--color-belg-red)]">
                                        Excellence Académique
                                    </h3>
                                    <p className="text-gray-600">
                                        Programmes rigoureux et enseignants
                                        qualifiés
                                    </p>
                                </div>
                            </div>
                            <div className="group flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-belg-red)] transition-transform duration-300 group-hover:scale-110">
                                    <svg
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-[var(--color-belg-black)] transition-colors duration-300 group-hover:text-[var(--color-belg-yellow)]">
                                        Innovation Pédagogique
                                    </h3>
                                    <p className="text-gray-600">
                                        Méthodes d'enseignement modernes et
                                        adaptées
                                    </p>
                                </div>
                            </div>
                            <div className="group flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-belg-yellow)] transition-transform duration-300 group-hover:scale-110">
                                    <svg
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-[var(--color-belg-black)] transition-colors duration-300 group-hover:text-[var(--color-belg-red)]">
                                        Ouverture Internationale
                                    </h3>
                                    <p className="text-gray-600">
                                        Perspectives globales et
                                        multiculturelles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-gradient-to-r from-[var(--color-belg-yellow)] to-[var(--color-belg-red)] transition-transform duration-300 group-hover:rotate-6"></div>
                        <img
                            src={image}
                            alt="Students learning"
                            className="relative h-96 w-full rounded-2xl object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
