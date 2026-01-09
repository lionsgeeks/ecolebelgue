import FAQAccordion from './faq-accordion';

const faqItems = [
    {
        question: 'Quel est le climat éducatif dans les écoles ?',
        answer: `<p>Dans nos écoles nous ciblons un climat rassurant et stimulant, propice aux apprentissages et au développement de la personne de chacun des élèves.</p>
        <p>Le climat éducatif de nos écoles repose sur un équilibre clair entre exigence, bienveillance et sécurité.</p>
        <p>Les équipes éducatives veillent à instaurer une atmosphère de confiance et de sérénité, tout en maintenant un cadre éducatif solide qui permet à chaque élève de se construire avec repères, exigence et stabilité.</p>`,
    },
    {
        question:
            'Quelle place est donnée au respect, au cadre et aux règles ?',
        answer: `<p>Le respect, le cadre et les règles occupent une place centrale dans le fonctionnement de nos écoles.</p>
        <p>Les règles ne sont pas posées comme des contraintes arbitraires, mais comme des repères éducatifs qui permettent de sécuriser les élèves, de favoriser le vivre-ensemble, de créer des conditions propices aux apprentissages.</p>
        <p>Le respect concerne à la fois : le respect des adultes, le respect entre élèves, le respect de soi et du travail scolaire.</p>`,
    },
    {
        question: 'Comment sont gérées les situations de conflit ?',
        answer: `<p>La priorité est toujours de comprendre les faits, d'écouter les élèves concernés, de rétablir un climat serein et sécurisant.</p>
        <p>Selon la nature de la situation, la gestion du conflit reposera sur un dialogue encadré par un membre de l'équipe éducative ou sur des mesures éducatives en conformité avec notre règlement d'ordre intérieur.</p>
        <p>Lorsque la situation l'exige, les familles sont associées afin d'assurer une cohérence éducative entre l'école et le cadre familial.</p>`,
    },
    {
        question:
            'Quelle relation entretenez-vous avec les parents ?',
        answer: `<p>Nous portons la conviction que la réussite scolaire d'un enfant repose sur une cohérence éducative entre l'école et la famille. Les parents sont donc considérés comme des partenaires essentiels du parcours scolaire de leur enfant.</p>
        <p>Notre relation avec les parents s'appuie sur :</p>
        <ul>
            <li>une communication régulière et transparente,</li>
            <li>des échanges formalisés avec les équipes éducatives,</li>
            <li>un cadre de collaboration respectueux des rôles de chacun.</li>
        </ul>
        <p>Les enseignants et les directions sont disponibles pour échanger lorsque cela est nécessaire, dans un esprit de dialogue constructif et centré sur l'intérêt de l'élève.</p>`,
    },
];

export default function CadreClimatSection() {
    return (
        <section
            id="cadre-climat"
            className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-lg"
        >
            <div className="mb-8 border-b-4 border-belgYellow pb-4">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-belgBlack">
                    CADRE ET CLIMAT SCOLAIRE
                </h2>
            </div>
            <FAQAccordion items={faqItems} />
        </section>
    );
}

