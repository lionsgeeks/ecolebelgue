export default function HeroSection() {
    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                Campus
                            </p>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                            Campus de Casablanca
                        </h1>
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
                            <p>
                                Les infrastructures éducatives complètes sont organisées par niveau,
                                chaque section disposant de ses propres espaces éducatifs adaptés à
                                l'âge des élèves et aux besoins pédagogiques.
                            </p>
                            <p>
                                Les espaces d'apprentissage comprennent : des classes adaptées, des
                                bibliothèques scolaires dédiées par section, et des salles
                                informatiques intégrées.
                            </p>
                            <p>
                                Les équipements du campus incluent : une salle de conférence, plusieurs
                                salles polyvalentes (événements, expositions, formations), un centre
                                de formation intégré, une grande salle de sport multi-activités
                                pouvant accueillir jusqu'à 1500 spectateurs, et un restaurant scolaire
                                de grande capacité.
                            </p>
                            <p>
                                L'espace école du dehors favorise l'apprentissage par l'expérience,
                                l'observation et l'action dans un cadre structuré et sécurisé,
                                encourageant le mouvement, l'expérimentation, la vie collective et
                                une relation différente au temps et aux espaces scolaires.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src="/assets/images/casa/EBM-C_0013_1_cropped.jpg"
                                alt="Campus de Casablanca"
                                className="h-full w-full object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

