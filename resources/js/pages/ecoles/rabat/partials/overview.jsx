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
                            Un campus moderne - Rabat
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                Le campus de Rabat a été inauguré en novembre 2018 par la Princesse
                                Astrid de Belgique. Il accueille actuellement 1050 élèves de 2 ans
                                (accueil) à 17 ans (5ème secondaire). La 6ème secondaire ouvrira en
                                2026-2027.
                            </p>
                            <p>
                                Situé à Hay Riad, le campus s'étend sur 1,5 hectare. Malgré sa
                                localisation en centre-ville, il offre un environnement vert et calme,
                                propice à l'apprentissage et à l'épanouissement des élèves.
                            </p>
                            <p>
                                L'établissement est organisé en deux campus communicants : un campus
                                pour la section fondamentale (maternelle et primaire) et un campus pour
                                la section secondaire. Chaque section dispose de ses propres espaces
                                éducatifs adaptés à l'âge des élèves et aux besoins pédagogiques.
                            </p>
                            <p>
                                Les élèves apprennent dans des classes adaptées, bénéficient de
                                bibliothèques scolaires dédiées par section, et ont accès à des
                                équipements pédagogiques variés. Chaque niveau dispose de cours de
                                récréation distinctes, adaptées aux différents âges, offrant des
                                espaces extérieurs sécurisés pour les activités et la détente.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative h-full">
                        <div className="relative h-full overflow-hidden">
                            <img
                                src="/assets/images/rabat/_MAN0164.jpg"
                                alt="Campus de Rabat"
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
                                <span>Équipements pédagogiques variés</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Cours de récréation distinctes par niveau</span>
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
                                <span>Salle de sport multi-activités</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Terrain de sport extérieur</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Restaurant scolaire</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-belgYellow" />
                                <span>Salle informatique intégrée</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
