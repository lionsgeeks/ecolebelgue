export default function OverviewSection() {
    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col justify-center h-full">
                        <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                Présentation
                            </p>
                        </div>
                        <h2 className="mb-6 text-3xl font-bold text-belgBlack md:text-4xl lg:text-5xl">
                            Un campus exceptionnel - Casa
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                Situé à Darbouazza, le campus de Casablanca s'étend sur 7,5 hectares
                                et accueille actuellement 940 élèves de 2 ans (accueil) à 18 ans
                                (fin du secondaire).
                            </p>
                            <p>
                                Notre établissement propose un environnement d'apprentissage ouvert
                                et orienté nature, à l'écart de l'agitation urbaine, conçu pour des
                                conditions d'apprentissage épanouissantes et exigeantes.
                            </p>
                            <p>
                                Le campus dispose d'un espace de 1,5 hectare dédié à l'école du
                                dehors, permettant une pédagogie mixte intérieur/extérieur. Cet
                                espace est structuré en zones thématiques : animaux, insectes,
                                météo, aventure, potager, feu de camp, espaces de rassemblement et
                                restauration en plein air.
                            </p>
                            <p>
                                Le campus se trouve en périphérie immédiate de la ville, à environ
                                15 minutes du Morocco Mall, offrant un environnement spacieux, riche
                                en nature, tout en restant facilement accessible.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative h-full">
                        <div className="relative h-full overflow-hidden">
                            <img
                                src="/assets/images/casa/EBM-C_0005_1_cropped.jpg"
                                alt="Campus de Casablanca"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Infrastructure Details */}
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="mb-4 text-2xl font-bold text-belgBlack">
                            Espaces d'apprentissage
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Classes adaptées à chaque niveau</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Bibliothèques scolaires dédiées par section</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Salles informatiques intégrées</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-2xl font-bold text-belgBlack">
                            Équipements du campus
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Salle de conférence et salles polyvalentes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Grande salle de sport (jusqu'à 1500 spectateurs)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Restaurant scolaire de grande capacité</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
