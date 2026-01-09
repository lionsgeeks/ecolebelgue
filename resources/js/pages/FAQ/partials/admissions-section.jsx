import FAQAccordion from './faq-accordion';

const faqItems = [
    {
        question:
            "À partir de quel âge peut-on inscrire un enfant ?",
        answer: `<p>Nos écoles accueillent les enfants <strong>à partir de 2 ans révolus</strong>, en classe d'accueil.</p>
        <p>Les admissions sont possibles ensuite <strong>à tous les niveaux jusqu'en 1ère secondaire (S1)</strong>, sous réserve des places disponibles.</p>`,
    },
    {
        question: 'Les places sont-elles limitées ?',
        answer: `<p>Oui. Les effectifs sont volontairement limités par classe, afin de garantir un encadrement de qualité et un environnement d'apprentissage favorable.</p>
        <p>Les effectifs sont plafonnés à 26 élèves par classe en moyenne.</p>`,
    },
    {
        question: 'Quelle est procédure d\'admission ?',
        answer: `<p>L'admission dans nos écoles s'inscrit dans une démarche structurée et progressive. Elle se déroule en plusieurs étapes :</p>
        <ol>
            <li><strong>Premier contact et prise d'information</strong>
            <ul>
                <li>Les familles sont invitées à s'informer sur nos écoles via notre site web puis peuvent échanger avec notre service admissions en guise de premier contact.</li>
            </ul>
            </li>
            <li><strong>Dépôt d'un dossier de candidature</strong>
            <ul>
                <li>La candidature est introduite via notre plateforme EduKa.</li>
            </ul>
            </li>
            <li><strong>Entretien individuel avec la famille</strong>
            <ul>
                <li>Cet échange permet de mieux comprendre le profil de l'enfant et de s'assurer d'une adhésion des familles au projet éducatif de l'école.</li>
            </ul>
            </li>
            <li><strong>Évaluation ou observation pédagogique de l'élève</strong>
            <ul>
                <li>Selon l'âge et le niveau, l'élève fait l'objet d'une observation en situation de classe ou d'une analyse pédagogique.</li>
            </ul>
            </li>
            <li><strong>Décision d'admission</strong>
            <ul>
                <li>La décision est communiquée par écrit aux familles.</li>
            </ul>
            </li>
            <li><strong>Feedback pédagogique et échange avec l'école</strong> (pour les élèves admis)
            <ul>
                <li>Un retour pédagogique est proposé afin d'accompagner l'intégration de l'élève.</li>
            </ul>
            </li>
            <li><strong>Confirmation de l'inscription</strong>
            <ul>
                <li>Les familles confirment ensuite l'inscription selon les modalités communiquées.</li>
            </ul>
            </li>
        </ol>`,
    },
    {
        question: "Y a-t-il des tests d'admission ?",
        answer: `<p>Il n'y a pas de "tests" au sens sélectif ou compétitif du terme. Cette étape est pensée dans l'intérêt de l'enfant et du groupe classe qu'il intègrerait.</p>
        <p>Selon l'âge et le niveau de l'enfant, nous procédons à une <strong>observation ou une analyse pédagogique</strong> :</p>
        <ul>
            <li>en maternelle, il s'agit d'une observation pédagogique en situation de classe, visant principalement à apprécier le potentiel d'adaptation de l'enfant au cadre scolaire ;</li>
            <li>à partir du <strong>primaire</strong>, un diagnostic pédagogique est effectué afin d'évaluer les acquis scolaires et le profil de l'enfant</li>
        </ul>
        <p>Ces évaluations ne sont ni compétitives ni élitistes : elles servent à garantir une intégration sereine et cohérente.</p>`,
    },
    {
        question:
            'Comment se déroule un entretien avec la famille ?',
        answer: `<p>L'entretien est un temps d'échange individuel entre la famille et l'école.</p>
        <p>Il permet de mieux comprendre le profil et les besoins de l'enfant, de présenter clairement notre projet éducatif et d'échanger sur les attentes de la famille ainsi que sur sa vision de l'éducation.</p>
        <p><strong>Cet entretien est avant tout un moment de dialogue et de clarification mutuelle.</strong> Il permet à l'école de s'assurer que le projet éducatif proposé correspond aux attentes de la famille, et à la famille de vérifier que l'école répond pleinement à ce qu'elle recherche pour le parcours scolaire de son enfant.</p>
        <p>Il constitue une étape essentielle pour poser les bases d'une relation de confiance, fondée sur une compréhension partagée et un engagement réciproque sur la durée.</p>`,
    },
    {
        question:
            'À quel moment faut-il entamer les démarches ?',
        answer: `<p>Pour l'année scolaire <strong>2026-2027</strong>, la période de dépôt des dossiers de candidature est fixée <strong>du 19 janvier 2026 au 7 mars 2026</strong>.</p>
        <p>L'ensemble des étapes du processus est détaillé dans un <strong>calendrier d'admission précis</strong>, consultable à tout moment dans la rubrique <em>Admissions</em> du site.</p>`,
    },
    {
        question: "Est-il possible de visiter l'école ?",
        answer: `<p>Oui. Les visites s'inscrivent dans le cadre de la procédure d'admission et sont proposées aux familles ayant engagé une démarche de candidature.</p>
        <p>Ce choix permet de privilégier des échanges de qualité, dans un cadre respectueux du fonctionnement de l'école et des élèves.</p>
        <p>Il n'y a pas de visites « libres » ou de journées portes ouvertes au grand public.</p>`,
    },
];

export default function AdmissionsSection() {
    return (
        <section
            id="admissions"
            className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-lg"
        >
            <div className="mb-8 border-b-4 border-belgYellow pb-4">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-belgBlack">
                    ADMISSIONS ET INSCRIPTIONS
                </h2>
            </div>
            <FAQAccordion items={faqItems} />
        </section>
    );
}

