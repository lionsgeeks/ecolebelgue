import FAQAccordion from './faq-accordion';

const faqItems = [
    {
        question:
            "Qu'est-ce que l'enseignement belge francophone ?",
        answer: `<p>L'enseignement belge francophone est un système éducatif public officiel, défini et structuré par la Fédération Wallonie-Bruxelles (Autorité belge francophone).</p>
        <p>Il s'inscrit dans le paysage des grands systèmes éducatifs européens.</p>
        <p>Il représente un système international reconnu, qui forme depuis des générations, des élèves poursuivant des études supérieures en Belgique et à l'international.</p>
        <p>Comme tout système d'enseignement, il repose sur deux piliers fondamentaux :</p>
        <ul>
            <li>des programmes d'enseignement officiels, définissant les contenus à apprendre à chaque niveau</li>
            <li>une méthodologie pédagogique, c'est-à-dire la manière dont ces contenus sont transmis et construits avec les élèves.</li>
        </ul>
        <p>Les contenus sont communs à tous les grands systèmes éducatifs, la différence se situe dans la manière d'enseigner.</p>`,
    },
    {
        question:
            'En quoi le système belge est-il différent des autres systèmes internationaux ?',
        answer: `<p>Les grands systèmes éducatifs internationaux partagent des fondements communs : ils transmettent les mêmes savoirs essentiels et préparent les élèves à poursuivre des études supérieures. Les connaissances enseignées, les compétences attendues et les objectifs de fin de cycle sont comparables entre systèmes éducatifs européens et internationaux. Les références académiques sont similaires.</p>
        <p><strong>La différence entre les systèmes ne porte pas sur ce qui est enseigné, mais sur la manière dont les apprentissages sont organisés et transmis.</strong></p>
        <p><strong>La singularité du système belge se situe davantage dans son approche pédagogique.</strong></p>
        <p>Le système belge francophone privilégie :</p>
        <ul>
            <li>la compréhension des notions plutôt que leur simple restitution,</li>
            <li>le raisonnement et la capacité à expliquer,</li>
            <li>la progression structurée des apprentissages dans la durée.</li>
        </ul>
        <p>Les notions sont construites, consolidées et réinvesties à travers une approche spiralaire.</p>`,
    },
    {
        question: "Comment est le niveau académique à l'école belge ?",
        answer: `<p>Le niveau académique est pensé en lien direct avec les exigences des études supérieures.</p>
        <p>L'exigence académique s'inscrit dans une progression cohérente :</p>
        <ul>
            <li>les bases sont solidement construites dès les premières années,</li>
            <li>les notions sont approfondies progressivement,</li>
            <li>les exigences augmentent avec l'âge et la maturité des élèves.</li>
        </ul>
        <p>Dans nos écoles, nous maintenons un haut niveau d'attente en vue de préparer nos élèves non seulement à réussir leurs examens, mais surtout à réussir avec aisance leur parcours d'enseignement supérieur.</p>`,
    },
    {
        question: 'Le CESS est-il reconnu au Maroc ?',
        answer: `<p>Oui, le CESS est reconnu au Maroc.</p>
        <p>Le CESS (Certificat d'Enseignement Secondaire Supérieur) est le diplôme officiel de fin d'études secondaires de l'enseignement belge francophone. Il atteste que l'élève a achevé avec succès un parcours complet d'enseignement secondaire.</p>
        <p><strong>Le CESS est délivré par nos écoles dans le cadre :</strong></p>
        <ul>
            <li><strong>d'un système éducatif officiel, encadré par une autorité éducative reconnue,</strong></li>
            <li><strong>d'établissements scolaires ouverts au Maroc et régis par un Accord bilatéral de coopération.</strong></li>
        </ul>
        <p><strong>Il ne s'agit ni d'un diplôme privé, ni d'un certificat interne à un établissement.</strong></p>
        <p>Concrètement, cela signifie que le CESS délivré par nos écoles permet de poursuivre des études supérieures au Maroc, aussi bien dans l'enseignement public que privé.</p>
        <p>Comme pour tout diplôme étranger, certaines institutions peuvent demander une procédure administrative d'équivalence. Dans ce cas, nos services accompagnent nos lauréats dans la réalisation de cette démarche administrative.</p>`,
    },
    {
        question: "Le CESS est-il reconnu à l'international ?",
        answer: `<p>Oui. Le CESS offre des possibilités de poursuite d'études comparables à celles des autres diplômes officiels européens de fin d'enseignement secondaire.</p>
        <p>Comme pour les autres diplômes de fin de secondaire :</p>
        <ul>
            <li>certains établissements examinent les dossiers,</li>
            <li>certains imposent des conditions particulières,</li>
            <li>certaines filières sont sélectives.</li>
        </ul>
        <p>Le CESS s'inscrit pleinement dans ce fonctionnement international standard.</p>
        <p><strong>Concrètement, le choix de l'enseignement belge ne ferme aucune porte.</strong></p>
        <p>Il permet aux élèves de candidater en Belgique, au Maroc, au Canada, en France, au Royaume uni et plus largement à l'international, selon les règles propres à chaque établissement d'enseignement supérieur.</p>`,
    },
    {
        question:
            "Vers quels types d'études supérieures les élèves peuvent-ils s'orienter après le CESS ?",
        answer: `<p>Les élèves titulaires du CESS s'orientent vers des études supérieures variées, en fonction de leur projet personnel, de leur profil académique et des exigences des établissements choisis.</p>
        <p><strong>Le diplôme ouvre les portes ; le projet et le parcours de l'élève déterminent ensuite les choix possibles.</strong></p>`,
    },
    {
        question:
            'Le CESS permet-il l\'accès aux grandes écoles et aux universités sélectives ?',
        answer: `<p>Oui. Le système belge francophone prépare les élèves à accéder à des filières sélectives, à condition que leur parcours académique, leurs résultats et leur projet personnel correspondent aux exigences de ces formations.</p>
        <p>Les filières sélectives attendent des élèves qu'ils disposent :</p>
        <ul>
            <li>de bases académiques solides,</li>
            <li>d'une grande capacité de raisonnement,</li>
            <li>d'autonomie dans le travail,</li>
            <li>de rigueur intellectuelle,</li>
            <li>et d'une méthodologie efficace.</li>
        </ul>
        <p><strong>À partir de la prochaine rentrée, les écoles belges au Maroc proposeront des cours préparatoires aux concours de médecine, en Belgique et au Maroc.</strong></p>
        <p>Ces cours :</p>
        <ul>
            <li>sont réservés exclusivement aux élèves de sixième secondaire du réseau,</li>
            <li>s'inscrivent dans la continuité du programme officiel,</li>
            <li>permettent une préparation structurée, en lien avec les attentes spécifiques de ces filières.</li>
        </ul>`,
    },
    {
        question:
            'Que se passe-t-il si un élève change de système scolaire en cours de parcours ?',
        answer: `<p>Changer de système scolaire en cours de parcours est une situation possible et vécue dans nos écoles avec plusieurs familles internationales.</p>
        <p>Les transitions entre systèmes éducatifs européens se font sans rupture.</p>
        <p>Un élève qui change de système ne découvre pas des apprentissages totalement nouveaux, mais retrouve des notions déjà abordées, parfois organisées différemment.</p>
        <p>Les éventuelles différences concernent surtout :</p>
        <ul>
            <li>l'ordre dans lequel certaines notions sont abordées,</li>
            <li>la manière de les approfondir,</li>
            <li>les méthodes pédagogiques utilisées.</li>
        </ul>
        <p>Ces écarts peuvent nécessiter un temps d'adaptation, mais ils ne constituent pas un obstacle structurel à la poursuite du parcours.</p>`,
    },
];

export default function SystemeBelgeSection() {
    return (
        <section
            id="systeme-belge"
            className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-lg"
        >
            <div className="mb-8 border-b-4 border-belgYellow pb-4">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-belgBlack">
                    SYSTÈME BELGE ET DIPLÔMES
                </h2>
            </div>
            <FAQAccordion items={faqItems} />
        </section>
    );
}

