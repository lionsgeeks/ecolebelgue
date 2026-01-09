import FAQAccordion from './faq-accordion';

const faqItems = [
    {
        question:
            'Est-ce que tous vos enseignants sont diplômés et certifiés ?',
        answer: `<p>Oui.</p>
        <p><strong>La qualification de nos enseignants n'est pas une option ni une promesse : c'est une obligation réglementaire qui s'applique à toutes les écoles d'enseignement belge francophone.</strong></p>
        <p>Cette exigence s'applique à l'ensemble des niveaux, de la maternelle au secondaire, et concerne également les fonctions de coordination et de direction pédagogique.</p>
        <p>Nos enseignants sont formés en Belgique, au sein de l'enseignement supérieur belge, dans les filières qui préparent spécifiquement au métier d'enseignant.</p>
        <p>De ce fait, nos équipes pédagogiques sont expatriées de Belgique (hors professeurs de LCA, native speakers…). Ils maîtrisent les programmes officiels belges, mais aussi les méthodes pédagogiques qui y sont associées.</p>
        <p>Cette formation initiale est déterminante : elle ne porte pas uniquement sur ce qu'il faut enseigner, mais aussi sur comment les élèves apprennent, comment structurer les apprentissages, évaluer, accompagner et ajuster les pratiques.</p>`,
    },
    {
        question:
            "Qu'est-ce qui garantit le niveau de qualification des enseignants dans le temps ?",
        answer: `<p>Le niveau de qualification de nos enseignants ne repose pas sur un choix interne ou une promesse d'établissement.</p>
        <p>Il est encadré par un cadre réglementaire précis, propre à l'enseignement belge francophone.</p>
        <p>Concrètement :</p>
        <ul>
            <li>les titres et diplômes requis pour enseigner sont définis officiellement,</li>
            <li>ils sont <strong>vérifiés</strong> pour chaque enseignant,</li>
            <li>le respect de ces exigences est <strong>contrôlé</strong>.</li>
        </ul>`,
    },
    {
        question:
            'Quel est concrètement le rôle de la direction pédagogique au quotidien ?',
        answer: `<p>La direction pédagogique joue un rôle <strong>central</strong> dans le fonctionnement quotidien de l'école.</p>
        <p>Elle est responsable :</p>
        <ul>
            <li>de la <strong>cohérence pédagogique</strong> sur l'ensemble du parcours scolaire,</li>
            <li>du <strong>pilotage des pratiques d'enseignement</strong>,</li>
            <li>de l'accompagnement et du suivi des équipes enseignantes.</li>
        </ul>
        <p>Concrètement, la direction pédagogique :</p>
        <ul>
            <li>veille au <strong>respect des programmes officiels</strong> et du cadre éducatif,</li>
            <li>observe et évalue les pratiques de classe,</li>
            <li>accompagne les enseignants dans leur travail,</li>
            <li>assure une <strong>continuité pédagogique</strong> entre les niveaux et les sections.</li>
        </ul>
        <p>Elle constitue un <strong>point de référence</strong> pour les enseignants, mais aussi pour les familles, lorsqu'une question concerne le parcours scolaire ou l'organisation pédagogique.</p>`,
    },
];

export default function EnseignantsSection() {
    return (
        <section
            id="enseignants"
            className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-lg"
        >
            <div className="mb-8 border-b-4 border-belgYellow pb-4">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-belgBlack">
                    ENSEIGNANTS ET ENCADREMENT
                </h2>
            </div>
            <FAQAccordion items={faqItems} />
        </section>
    );
}

