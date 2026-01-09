import { Users, FileText, Upload, Home, GraduationCap, Globe, Clock, Shield, Calendar } from 'lucide-react';

// Icon components - these will be imported and used in the components
export const icons = {
    Users,
    FileText,
    Upload,
    Home,
    GraduationCap,
    Globe,
    Clock,
    Shield,
    Calendar
};

// Demande Admission Steps Data
export const demandeSteps = [
    {
        number: "01",
        title: "Formulaire de demande",
        shortDescription: "Remplissez notre formulaire en ligne pour commencer votre parcours d'admission",
        iconName: "Users",
        color: "bg-belgYellow",
        detailedContent: `**Étape 1 : Formulaire de demande d'admission**

Commencez votre parcours en remplissant notre formulaire de demande d'admission en ligne.

**Avantages du formulaire en ligne :**
- Traitement rapide de votre demande
- Suivi en temps réel du statut
- Communication directe avec notre équipe
- Accès à toutes les informations nécessaires

**Pour les familles du réseau des écoles belges :**
Une procédure simplifiée est disponible pour les frères et sœurs déjà scolarisés dans notre réseau.

**Comment procéder :**
1. Accédez à notre plateforme sécurisée
2. Complétez toutes les sections requises
3. Téléchargez les documents nécessaires
4. Soumettez votre demande
5. Recevez un accusé de réception immédiat

Cette première étape est cruciale pour démarrer officiellement votre processus d'admission.`
    },
    {
        number: "02",
        title: "Préparation du dossier",
        shortDescription: "Rassemblez tous les documents requis pour votre dossier d'admission",
        iconName: "FileText",
        color: "bg-belgRed",
        detailedContent: `**Étape 2 : Préparation complète du dossier**

Préparez soigneusement tous les documents requis pour assurer le traitement rapide de votre demande.

**Documents essentiels requis :**

**Pour tous les candidats :**
- Photo d'identité récente (format portrait, fond clair)
- Copie CIN ou passeport des parents/tuteurs légaux
- Certificat de naissance de l'enfant

**Selon le niveau scolaire :**
- **Maternelle M3 et plus** : Certificat de scolarité récent
- **Primaire P2 et plus** : Bulletins des 2 dernières années
- **Secondaire** : Dossier scolaire complet des 3 dernières années

**Pour ressortissants belges :**
- Copie passeport belge
- Attestation de sécurité sociale belge

**Conseils de préparation :**
- Scannez tous les documents en haute qualité
- Utilisez le format PDF A4 pour tous les fichiers
- Assurez-vous que toutes les informations sont lisibles
- Vérifiez la validité des dates sur les documents
- Organisez vos fichiers par catégorie

**Format et taille des fichiers :**
- PDF obligatoire (sauf pour les photos)
- Taille maximale : 5 Mo par fichier
- Résolution minimale : 300 dpi pour les scans

Une préparation minutieuse garantit un traitement rapide et efficace de votre dossier.`
    },
    {
        number: "03",
        title: "Dépôt via portail Eduka",
        shortDescription: "Téléversez votre dossier finalisé sur votre portail parent Eduka",
        iconName: "Upload",
        color: "bg-belgBlack",
        detailedContent: `**Étape 3 : Dépôt final du dossier**

Finalisez votre demande en téléversant tous vos documents sur le portail parent Eduka.

**Instructions de téléversement :**

**Accès au portail :**
1. Connectez-vous à votre compte parent Eduka
2. Accédez à la section "Admissions"
3. Sélectionnez "Nouvelle demande d'admission"
4. Suivez les étapes guidées

**Format des documents :**
- Tous les documents (sauf photo) : PDF A4
- Photos : JPEG ou PNG, haute résolution
- Nom des fichiers : clair et descriptif
- Aucun mot de passe sur les fichiers

**Étapes de validation :**

**Phase 1 : Vérification automatique (24-48h)**
- Contrôle de la complétude du dossier
- Validation des formats de fichiers
- Confirmation de réception

**Phase 2 : Examen administratif (3-5 jours)**
- Vérification des informations
- Analyse des documents
- Préparation pour l'étape suivante

**Phase 3 : Communication des résultats**
- Accusé de réception officiel
- Invitation à l'entretien (si dossier complet)
- Instructions pour les prochaines étapes

**Suivi de votre demande :**
- Notifications par email à chaque étape
- Statut en temps réel sur le portail
- Contact direct avec le service des admissions
- Possibilité de poser des questions en ligne

**Après le dépôt :**
- Conservez une copie de tous vos documents
- Notez votre numéro de suivi
- Préparez-vous pour l'entretien éventuel
- Consultez régulièrement votre portail

Une fois votre dossier validé, vous serez contacté rapidement pour la suite du processus d'admission.`
    }
];

// Features Data
export const features = [
    {
        iconName: "Clock",
        title: "Traitement rapide",
        description: "Votre demande est traitée sous 7 jours ouvrables"
    },
    {
        iconName: "Shield",
        title: "Sécurisé",
        description: "Plateforme sécurisée pour vos données personnelles"
    },
    {
        iconName: "Calendar",
        title: "Suivi en temps réel",
        description: "Consultez l'état de votre demande à tout moment"
    }
];

// Processus Steps Data (for conditions page)
export const processusSteps = [
    {
        number: "01",
        title: "Premier contact",
        shortDescription: "Découverte de notre école et prise de contact initial",
        iconName: "Users",
        detailedContent: `Les familles sont invitées à visiter notre site web (www.ecolebelge.org) et à contacter le service des admissions pour toute question initiale.

**Premier contact et prise d'informations :**

Cette première étape est cruciale pour établir une première connexion avec notre établissement. Nous vous invitons à :

- **Explorer notre site web** : Découvrez en détail notre projet éducatif, nos valeurs, nos programmes et la vie quotidienne au sein de notre école
- **Contacter le service des admissions** : Notre équipe est à votre disposition pour répondre à toutes vos questions par téléphone ou par email
- **Obtenir notre documentation** : Recevez notre brochure d'information détaillée et les formulaires de pré-inscription
- **Planifier une visite** : Organisez un rendez-vous pour visiter nos installations et rencontrer notre équipe pédagogique

**Ce que vous découvrirez :**
- Notre philosophie éducative basée sur le système belge
- Nos infrastructures modernes et adaptées aux enfants
- Notre corps enseignant qualifié et engagé
- Nos activités périscolaires et notre vie associative
- Nos tarifs et nos possibilités de bourses

**Contactez-nous :**
- Téléphone : +33 1 23 45 67 89
- Email : admissions@ecolebelge.fr
- Adresse : 123 Rue de l'Éducation, Casablanca

Cette première étape est sans engagement et vous permet de vous faire une opinion éclairée sur notre établissement.`
    },
    {
        number: "02",
        title: "Évaluation",
        shortDescription: "Évaluation personnalisée pour déterminer le niveau approprié",
        iconName: "GraduationCap",
        detailedContent: `Une évaluation personnalisée est organisée pour déterminer le niveau scolaire le plus adapté à votre enfant.

**Processus d'évaluation :**

**Tests de positionnement :**
- Évaluation des compétences fondamentales
- Tests adaptés à chaque niveau scolaire
- Analyse des acquis et des besoins spécifiques
- Détermination du niveau de classe approprié

**Entretien avec l'équipe pédagogique :**
- Discussion avec les parents sur le parcours de l'enfant
- Présentation des attentes et des objectifs pédagogiques
- Réponses à toutes vos questions sur notre programme
- Évaluation de la compatibilité avec notre projet éducatif

**Critères d'évaluation :**
- Niveau de maîtrise des compétences requises
- Capacité d'adaptation à notre système éducatif
- Motivation et intérêt pour l'apprentissage
- Compatibilité avec notre environnement scolaire

**Résultats de l'évaluation :**
- Proposition d'admission dans le niveau approprié
- Recommandations personnalisées si nécessaire
- Plan d'intégration adapté aux besoins de l'enfant
- Suivi personnalisé pendant la période d'adaptation

Cette étape garantit une intégration réussie et un parcours éducatif optimal pour votre enfant.`
    },
    {
        number: "03",
        title: "Décision finale",
        shortDescription: "Communication de la décision d'admission et préparation de l'intégration",
        iconName: "Globe",
        detailedContent: `Après l'évaluation complète, une décision finale est communiquée aux familles.

**Processus de décision :**

**Analyse complète du dossier :**
- Revue des résultats de l'évaluation
- Vérification de la compatibilité avec notre projet éducatif
- Évaluation des places disponibles dans le niveau concerné
- Consultation de l'équipe pédagogique et administrative

**Types de décisions :**
- **Admission acceptée** : Proposition formelle d'inscription
- **Admission conditionnelle** : Sous réserve de documents complémentaires
- **Liste d'attente** : En cas de saturation du niveau demandé
- **Non-admission** : Avec explications et recommandations alternatives

**Communication de la décision :**
- Notification officielle par email
- Lettre d'admission ou de refus détaillée
- Instructions pour les prochaines étapes si accepté
- Possibilité de discussion en cas de refus

**Après l'acceptation :**
- Confirmation de l'inscription dans les délais impartis
- Préparation des documents administratifs finaux
- Planification de l'intégration et de la rentrée
- Contact avec le professeur principal et l'administration

**Support pour l'intégration :**
- Session d'accueil pour les nouveaux élèves et parents
- Programme d'intégration personnalisé
- Suivi rapproché pendant les premières semaines
- Support continu tout au long de l'année scolaire

Notre objectif est d'assurer une transition harmonieuse et une intégration réussie pour chaque nouvel élève.`
    }
];

// Admission Types Data (for conditions page)
export const admissionTypes = [
    {
        title: "a. Admission automatique",
        description: "Pour les fratries d'élèves déjà scolarisés dans nos établissements souhaitant s'inscrire en section maternelle.",
        iconName: "Home",
        detailedContent: `Cette admission concerne les fratries d'élèves déjà scolarisés dans nos établissements qui souhaitent s'inscrire en section maternelle.

Avantages de l'admission automatique :
- Priorité dans le processus d'admission
- Simplification des démarches administratives
- Garantie de place sous réserve de disponibilité
- Accompagnement personnalisé pour l'intégration

Documents requis :
- Certificat de naissance de l'enfant
- Justificatif de scolarité du frère ou de la sœur
- Formulaire d'inscription complété
- Photos d'identité récentes

Le processus d'admission automatique est conçu pour faciliter l'intégration des familles ayant déjà des enfants dans notre établissement, assurant ainsi une continuité éducative harmonieuse.`
    },
    {
        title: "b. Admission sur dossier",
        description: "Destinée aux enfants du personnel expatrié, des institutions belges et aux élèves issus d'écoles belges francophones.",
        iconName: "FileText",
        detailedContent: `L'admission sur dossier s'adresse aux enfants :
- Du personnel expatrié des écoles belges au Maroc
- De la Délégation Générale Wallonie-Bruxelles au Maroc
- De l'APEFE (Association pour la Promotion de l'Éducation et de la Formation à l'Étranger)
- De l'Ambassade et des Consulats du Royaume de Belgique au Maroc

Procédure spécifique :
- Examen approfondi du dossier scolaire antérieur
- Vérification de la compatibilité avec notre système éducatif
- Entretien avec la famille et l'enfant
- Évaluation personnalisée si nécessaire

Documents complémentaires requis :
- Diplômes et certificats scolaires précédents
- Attestations de scolarité des établissements belges
- Lettres de recommandation (si applicable)
- Preuve du statut du parent (personnel expatrié, institution belge)

Cette filière d'admission garantit une continuité éducative pour les familles mobiles et maintient les standards d'excellence de notre réseau d'écoles belges.`
    },
    {
        title: "c. Admission sur test",
        description: "Ouverte à tous les autres candidats après évaluation de leur niveau et de leur motivation.",
        iconName: "GraduationCap",
        detailedContent: `L'admission sur test est accessible à tous les candidats ne relevant pas des deux premières catégories.

Processus d'évaluation :
- Tests de connaissances générales
- Évaluation des compétences linguistiques (français)
- Tests de raisonnement logique et mathématique
- Entretien motivationnel avec l'enfant et les parents

Critères d'évaluation :
- Niveau académique compatible avec notre programme
- Capacité d'adaptation à notre méthodologie pédagogique
- Motivation et projet personnel de l'élève
- Adéquation avec les valeurs de notre établissement

Préparation recommandée :
- Révision des fondamentaux du programme précédent
- Pratique régulière de la langue française
- Familiarisation avec les tests d'aptitude
- Préparation de l'entretien motivationnel

Calendrier des tests :
- Sessions organisées périodiquement tout au long de l'année
- Inscription préalable obligatoire
- Communication des résultats sous 15 jours
- Possibilité de repasser les tests en cas d'échec

Cette voie d'admission permet d'identifier les élèves les plus prometteurs et de garantir la diversité et l'excellence au sein de notre communauté scolaire.`
    }
];

// School Levels Data
export const schoolLevels = [
    {
        code: "M0",
        title: "Maternelle",
        age: "4-7 ans",
        features: [
            "Apprentissage par le jeu",
            "Développement psychomoteur",
            "Socialisation progressive"
        ]
    },
    {
        code: "P1",
        title: "Primaire",
        age: "8-13 ans",
        features: [
            "Apprentissages fondamentaux",
            "Méthode belge reconnue",
            "Développement de l'autonomie"
        ]
    },
    {
        code: "S1",
        title: "Secondaire",
        age: "14 ans et plus",
        features: [
            "Enseignement spécialisé",
            "Préparation aux études supérieures",
            "Accompagnement personnalisé"
        ]
    }
];