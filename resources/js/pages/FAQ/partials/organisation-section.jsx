import FAQAccordion from './faq-accordion';

const faqItems = [
    {
        question:
            'Proposez-vous un service de restauration scolaire ?',
        answer: `<p>Oui. Chacune de nos écoles dispose d'un service de restauration scolaire opérationnel tous les jours de classe, à l'exception du mercredi, jour où les élèves n'ont pas cours l'après-midi.</p>
        <p>La restauration est assurée par un prestataire externe spécialisé, la société ProxyRest, qui prépare et sert des repas chauds. Les menus sont communiqués mensuellement aux parents.</p>
        <p>La cantine est un service facultatif, proposé sur inscription et payant directement auprès du prestataire.</p>
        <p>L'élève peut sinon apporter son repas de midi qu'il prendra au restaurant scolaire avec ses camarades, sous la surveillance de l'équipe éducative.</p>`,
    },
    {
        question:
            'Proposez-vous un service de transport scolaire ?',
        answer: `<p>Oui, un service de transport scolaire peut être organisé dans nos écoles en réponse à la demande des familles.</p>
        <p>Actuellement, un service de transport scolaire est opérationnel à l'École belge de Casablanca. Il est assuré par un prestataire externe spécialisé, la société RUN RUN, qui traite directement avec les parents souhaitant y souscrire. Ce service est payant et contractualisé directement entre les familles et le prestataire.</p>
        <p>À l'École belge de Rabat, le transport scolaire n'est pas encore proposé, à la suite d'une consultation des familles indiquant qu'une majorité de parents n'y était pas intéressée.</p>`,
    },
    {
        question:
            'Proposez-vous des activités extrascolaires ?',
        answer: `<p>Oui. Nos écoles proposent un panel varié d'activités extrascolaires, destiné aux élèves de tous les âges, dès la maternelle.</p>
        <p>Les activités couvrent les domaines sportifs, artistiques et culturels. Cette diversité permet à chaque élève de trouver une activité en lien avec ses centres d'intérêt.</p>
        <p>Les activités extrascolaires ont lieu en fin de journée après les cours, ainsi que le mercredi après-midi. Elles sont animées aussi bien par des membres de l'équipe éducative que par des <strong>intervenants externes spécialisés</strong>.</p>
        <p>La participation aux activités extrascolaires est facultative, payante et se fait sur inscription, selon les modalités communiquées aux familles en début d'année scolaire.</p>`,
    },
    {
        question:
            'Quels sont les horaires de la journée scolaire ?',
        answer: `<p>Du lundi au vendredi, les cours débutent à <strong>8h20</strong> pour l'ensemble des sections et se terminent :</p>
        <ul>
            <li>à 15h30, en section fondamentale.</li>
            <li>entre 16h20 et 17h20, en section secondaire.</li>
        </ul>
        <p>Le <strong>mercredi</strong>, les cours se terminent entre 12h30 et 13h00, selon le niveau de l'élève.</p>
        <p>Il n'y a <strong>pas de cours le samedi</strong>.</p>`,
    },
    {
        question:
            'Existe-t-il une garderie ou une étude encadrée avant ou après la classe ?',
        answer: `<p>Il n'existe pas d'étude encadrée au sens académique du terme.</p>
        <p>En revanche, un dispositif d'accueil et de surveillance est prévu pour accompagner les familles en dehors des horaires de cours.</p>
        <p>Une surveillance gratuite est assurée une demi-heure avant le début des cours et une demi-heure après la fin des cours.</p>
        <p>Au-delà de ce créneau, une garderie payante est proposée jusqu'à 18h00. Ce service permet aux élèves de rester à l'école dans un cadre encadré et sécurisé, sous la responsabilité de l'établissement.</p>
        <p>Les modalités pratiques de la garderie sont communiquées aux familles en début d'année scolaire.</p>`,
    },
    {
        question:
            'Quel est le calendrier des vacances scolaires ?',
        answer: `<p>Le calendrier scolaire de nos écoles est aligné sur le calendrier officiel de l'enseignement belge francophone.</p>
        <p>Il est toutefois adapté au contexte local, en tenant compte des jours fériés au Maroc.</p>
        <p>Le calendrier détaillé est communiqué aux familles en début d'année scolaire, afin de leur permettre d'anticiper l'organisation familiale et les périodes de congés.</p>`,
    },
];

export default function OrganisationSection() {
    return (
        <section
            id="organisation"
            className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-lg"
        >
            <div className="mb-8 border-b-4 border-belgYellow pb-4">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-belgBlack">
                    ORGANISATION DE LA VIE SCOLAIRE
                </h2>
            </div>
            <FAQAccordion items={faqItems} />
        </section>
    );
}

