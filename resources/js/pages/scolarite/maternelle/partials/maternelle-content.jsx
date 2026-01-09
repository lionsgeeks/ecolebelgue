import SectionBlock from './section-block';
import QuoteBlock from './quote-block';

const sections = [
    {
        title: "La maternelle n'est pas une parenthèse",
        content: (
            <>
                <p>
                    La maternelle est parfois perçue comme une étape douce et
                    transitoire, presque facultative.
                </p>
                <p className="font-semibold">
                    <strong>
                        Dans la réalité, c'est l'un des moments les plus
                        déterminants du parcours scolaire.
                    </strong>
                </p>
                <p>
                    C'est à cet âge que se construisent des fondations invisibles
                    mais essentielles :
                </p>
                <ul className="ml-6 list-disc space-y-2">
                    <li>le langage et la structuration de la pensée,</li>
                    <li>la capacité à se concentrer,</li>
                    <li>le rapport à l'effort,</li>
                    <li>
                        la manière d'entrer dans les exigences scolaires futures.
                    </li>
                </ul>
            </>
        ),
        image: '/assets/images/maternelle.jpg',
        imagePosition: 'right',
    },
    {
        title:
            'Pourquoi la qualification des enseignants est décisive dès la maternelle',
        content: (
            <>
                <p>En maternelle, l'enjeu n'est pas d'"enseigner plus tôt".</p>
                <p>L'enjeu est de savoir quoi observer, quoi structurer, quoi accompagner, au bon moment.</p>
                <p>Cela suppose une formation solide et spécifique.</p>
                <p className="font-semibold">
                    <strong>
                        Notre école garantit que 100 % des enseignants en
                        maternelle sont diplômés, formés et certifiés en Belgique,
                        selon des référentiels pédagogiques exigeants, centrés sur :
                    </strong>
                </p>
                <ul className="ml-6 list-disc space-y-2">
                    <li>le développement global de l'enfant,</li>
                    <li>l'observation fine des acquisitions,</li>
                    <li>la construction progressive des apprentissages,</li>
                    <li>
                        le respect du rythme individuel sans renoncer aux
                        exigences.
                    </li>
                </ul>
                <p>Cette qualification homogène permet :</p>
                <ul className="ml-6 list-disc space-y-2">
                    <li>une lecture précise des besoins de chaque enfant,</li>
                    <li>des interventions pédagogiques ajustées,</li>
                    <li>une continuité claire avec le primaire.</li>
                </ul>
            </>
        ),
        image: null,
    },
    {
        title: 'Apprendre en maternelle : notre approche',
        content: (
            <>
                <p>
                    En maternelle, les apprentissages durables se construisent
                    lorsque l'enfant peut :
                </p>
                <ul className="ml-6 list-disc space-y-2">
                    <li>expérimenter,</li>
                    <li>manipuler,</li>
                    <li>bouger,</li>
                    <li>observer,</li>
                    <li>mettre du sens sur ce qu'il vit.</li>
                </ul>
                <p className="font-semibold">
                    <strong>Notre approche pédagogique est fondée sur :</strong>
                </p>
                <ul className="ml-6 list-disc space-y-2">
                    <li>le lien entre le concret et l'abstrait,</li>
                    <li>des situations d'apprentissage actives,</li>
                    <li>
                        une progression structurée et respectueuse du développement
                        de l'enfant.
                    </li>
                </ul>
                <p>Cette approche permet notamment :</p>
                <ul className="ml-6 list-disc space-y-2">
                    <li>
                        de renforcer l'attention et l'engagement des enfants,
                    </li>
                    <li>
                        de développer le langage à partir de situations vécues,
                    </li>
                    <li>de consolider les notions par l'expérience,</li>
                    <li>
                        de respecter le besoin naturel de mouvement à cet âge.
                    </li>
                </ul>
                <p>
                    Dans ce cadre, le mouvement et l'expérience ne sont pas des
                    "pauses", ils font partie intégrante du processus
                    d'apprentissage.
                </p>
            </>
        ),
        image: null,
    },
    {
        title: 'Une continuité pensée dès la maternelle',
        content: (
            <>
                <p>
                    La maternelle dans notre école n'est pas conçue comme un cycle
                    isolé.
                </p>
                <p>
                    Elle s'inscrit dans une{' '}
                    <strong>vision globale du parcours scolaire</strong>, de la
                    maternelle au secondaire.
                </p>
                <p>Cela se traduit par :</p>
                <ul className="ml-6 list-disc space-y-2">
                    <li>
                        une culture pédagogique commune à tous les niveaux,
                    </li>
                    <li>des exigences cohérentes et progressives,</li>
                    <li>une transition fluide vers le primaire,</li>
                    <li>une stabilité dans les méthodes et les repères.</li>
                </ul>
            </>
        ),
        image: null,
    },
    {
        title: 'Le parcours d admission en maternelle',
        content: (
            <>
                <p>
                    Parce que la décision est engageante, notre processus
                    d'admission se veut <strong>clair, progressif et respectueux</strong>.
                </p>
                <p>Il comprend généralement :</p>
                <ol className="ml-6 list-decimal space-y-2">
                    <li>un échange approfondi avec les parents,</li>
                    <li>
                        une observation de l'enfant dans un cadre adapté.
                    </li>
                </ol>
                <p>Ce processus vise à :</p>
                <ul className="ml-6 list-disc space-y-2">
                    <li>
                        s'assurer de l'adéquation entre le projet de l'école et les
                        attentes de la famille,
                    </li>
                    <li>accompagner une décision éclairée,</li>
                    <li>poser les bases d'une relation de confiance.</li>
                </ul>
            </>
        ),
        image: null,
    },
];

const quotes = [
    {
        text: 'Ces fondations ne se rattrapent pas facilement plus tard, elles conditionnent la manière dont l\'enfant abordera le primaire, puis le secondaire.',
    },
    {
        text: "Ce n'est pas une promesse, c'est une garantie structurelle.",
    },
];

export default function MaternelleContent() {
    return (
        <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
            <div className="space-y-16">
                {sections.map((section, index) => (
                    <div key={index}>
                        {index === 0 && quotes[0] && (
                            <QuoteBlock text={quotes[0].text} />
                        )}
                        <SectionBlock
                            title={section.title}
                            content={section.content}
                            image={section.image}
                            imagePosition={section.imagePosition}
                        />
                        {index === 1 && quotes[1] && (
                            <QuoteBlock text={quotes[1].text} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

