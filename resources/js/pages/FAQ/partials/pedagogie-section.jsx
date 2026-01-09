import FAQAccordion from './faq-accordion';

const faqItems = [
    {
        question: 'Quelle est la philosophie pédagogique des écoles belges ?',
        answer: `<p>La pédagogie de l'enseignement belge francophone repose sur un principe central : apprendre en comprenant.</p>
        <p>Les programmes officiels définissent précisément ce que les élèves doivent maîtriser (connaissances, compétences, savoir-faire), tout en laissant aux enseignants la responsabilité de choisir les méthodes pédagogiques les plus adaptées pour y parvenir.</p>
        <p>La pédagogie dans nos écoles n'est pas une approche unique imposée mais un cadre méthodologique cohérent et réfléchi, fondé sur l'expérience de terrain et sur les sciences de l'éducation.</p>`,
    },
    {
        question: "Qu'entend-on par pédagogie active ?",
        answer: `<p>Par pédagogie active, on entend une manière d'enseigner dans laquelle l'élève n'est pas seulement récepteur, mais acteur de ses apprentissages.</p>
        <p>Concrètement, cela signifie que les élèves apprennent :</p>
        <ul>
            <li>en manipulant, en expérimentant et en observant,</li>
            <li>en résolvant des situations-problèmes,</li>
            <li>en mettant en lien ce qu'ils font avec ce qu'ils comprennent,</li>
            <li>en verbalisant leur raisonnement.</li>
        </ul>
        <p>La pédagogie active ne consiste pas à « faire à la place de l'élève », ni à laisser l'élève seul face à ses apprentissages. Elle repose sur des situations construites par l'enseignant avec des objectifs précis et un guidage progressif.</p>`,
    },
    {
        question: 'Comment apprend-on concrètement dans les classes ?',
        answer: `<p>Dans nos écoles, les apprentissages s'appuient sur :</p>
        <ul>
            <li>des situations concrètes, proches du réel,</li>
            <li>des manipulations, expérimentations et mises en action,</li>
        </ul>
        <p>un travail progressif qui mène du concret vers l'abstrait.</p>
        <p>Concrètement en classe, les notions sont introduites par l'observation, l'expérience ou la résolution de problèmes et le raisonnement est construit étape par étape.</p>
        <p>Cette démarche permet aux élèves de comprendre ce qu'ils apprennent, de mieux mémoriser sur le long terme et de développer des compétences transférables (raisonner, analyser, structurer sa pensée).</p>`,
    },
    {
        question: 'Comment sont évalués les élèves ?',
        answer: `<p>Dans l'enseignement belge francophone, l'évaluation poursuit <strong>deux objectifs distincts</strong>, selon les moments du parcours scolaire.</p>
        <p><strong>1. Les évaluations formatives :</strong> elles servent à apprendre et progresser.</p>
        <ul>
            <li>Elles permettent à l'enseignant d'identifier ce qui est compris ou non.</li>
            <li>Les points de cette évaluation ne sont pas pris en compte dans le bulletin.</li>
            <li>Elles donnent des repères clairs à l'élève pour corriger, consolider et avancer.</li>
        </ul>
        <p>Ces évaluations sont fréquentes, surtout aux premières étapes de l'apprentissage.</p>
        <p><strong>2. Les évaluations certificatives :</strong> elles servent à valider officiellement les acquis.</p>
        <ul>
            <li>Elles portent sur des compétences et des connaissances déjà travaillées en classe.</li>
            <li>Elles comptent dans l'évaluation globale et sont prises en compte dans la décision de passage ou de certification.</li>
            <li>Elles sont organisées à des moments précis du parcours.</li>
        </ul>
        <p>L'évaluation prend en compte : la compréhension des notions, la capacité à raisonner, l'aptitude à appliquer les apprentissages dans des situations variées.</p>`,
    },
    {
        question: 'Y a-t-il des devoirs à la maison ?',
        answer: `<p>À l'école fondamentale, les devoirs :</p>
        <ul>
            <li>sont limités en quantité,</li>
            <li>ont pour objectif de consolider ce qui a été compris en classe,</li>
            <li>ne visent pas à introduire de nouvelles notions.</li>
        </ul>
        <p>L'essentiel des apprentissages se fait en classe, avec l'accompagnement de l'enseignant. Les devoirs servent surtout à développer l'autonomie, installer des habitudes de travail et renforcer les acquis, sans surcharge.</p>
        <p>Au secondaire, le travail personnel augmente progressivement, afin de préparer les élèves :</p>
        <ul>
            <li>à organiser leur travail,</li>
            <li>à gérer leur temps,</li>
            <li>à répondre aux exigences de l'enseignement supérieur.</li>
        </ul>`,
    },
    {
        question:
            "L'exigence académique est-elle compatible avec un cadre bienveillant ?",
        answer: `<p>Exigence académique et bienveillance ne s'opposent pas : elles se complètent.</p>
        <p>L'exigence porte sur la maîtrise des apprentissages, la solidité des bases, la progression de chaque élève et le respect d'un cadre éducatif structuré.</p>
        <p>La bienveillance, quant à elle, se traduit par une attention portée à chaque enfant et des actions exclusivement fondées sur l'intérêt de l'enfant.</p>
        <p>Pour nous la bienveillance va de pair avec l'exigence académique permettant de former des élèves sérieux, confiants, solides, capables de s'engager durablement dans leurs apprentissages.</p>`,
    },
];

export default function PedagogieSection() {
    return (
        <section
            id="pedagogie"
            className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-lg"
        >
            <div className="mb-8 border-b-4 border-belgYellow pb-4">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-belgBlack">
                    PÉDAGOGIE ET APPRENTISSAGES
                </h2>
            </div>
            <FAQAccordion items={faqItems} />
        </section>
    );
}

