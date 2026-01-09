import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, FileText, Eye, CheckCircle, MessageSquare, Home } from 'lucide-react';
import Modal from '@/components/ui/modal';

export default function ProcessusSection() {
    const [selectedStep, setSelectedStep] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const steps = [
        {
            number: "01",
            title: "Premier contact",
            shortDescription: "Découverte de notre école et prise de contact initial",
            icon: <Users className="h-6 w-6" />,
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
            title: "Dépôt du dossier",
            shortDescription: "Soumission de votre candidature via la plateforme Eduka",
            icon: <FileText className="h-6 w-6" />,
            hasButton: true,
            detailedContent: `Les familles déposent un dossier de candidature via la plateforme Eduka. Cette étape permet d'évaluer le parcours scolaire de l'enfant, de préparer les étapes ultérieures et d'organiser les évaluations ou observations nécessaires.

**Dépôt d'un dossier de candidature :**

La soumission du dossier est une étape formelle qui déclenche officiellement votre processus d'admission.

**Comment déposer votre dossier :**

1. **Accès à la plateforme Eduka** :
   - Créez votre compte parent sur educa.ma
   - Remplissez le formulaire de pré-inscription en ligne
   - Téléchargez tous les documents requis

2. **Documents à fournir:**
   - Certificat de naissance de l'enfant
   - Photos d'identité récentes (4)
   - Dossier scolaire des 2 dernières années
   - Bulletins scolaires détaillés
   - Attestation de scolarité en cours
   - Justificatif de domicile des parents
   - Copie de la carte d'identité des parents

3. **Frais de dossier :**
   - 500 MAD non remboursables
   - Paiement sécurisé en ligne
   - Confirmation immédiate de réception

**À quoi s'attendre après le dépôt :**
- Accusé de réception dans les 24h
- Vérification administrative du dossier (2-3 jours)
- Convocation pour les étapes suivantes
- Attribution d'un numéro de suivi

**Conseils pour un dossier complet :**
- Préparez tous les documents à l'avance
- Scannez les documents en haute qualité
- Vérifiez que toutes les informations sont exactes
- N'hésitez pas à nous contacter pour toute question

Le dépôt du dossier est le point de départ officiel de votre parcours vers l'admission dans notre école.`
        },
        {
            number: "03",
            title: "Entretien familial",
            shortDescription: "Discussion approfondie avec les parents pour mieux vous connaître",
            icon: <MessageSquare className="h-6 w-6" />,
            detailedContent: `Cette étape essentielle comporte un entretien approfondi avec les parents pour présenter le projet éducatif, comprendre le profil et le parcours potentiel de l'enfant, connaître les attentes familiales et répondre aux questions des parents.

**Entretien individuel avec les familles :**

L'entretien est un moment d'échange privilégié qui permet de créer une relation de confiance et de s'assurer de la compatibilité entre votre famille et notre établissement.

**Déroulement de l'entretien (45-60 minutes) :**

1. **Présentation de notre école (15 minutes)**
   - Notre projet pédagogique et nos valeurs
   - Notre approche de l'enseignement
   - Nos spécificités et nos atouts
   - La vie quotidienne à l'école

2. **Découverte de votre famille (20 minutes)**
   - Parcours scolaire antérieur de l'enfant
   - Personnalité et centres d'intérêt
   - Vos attentes et vos objectifs
   - Votre projet éducatif familial

3. **Échange et questions (15-20 minutes)**
   - Réponses à toutes vos interrogations
   - Discussion sur l'intégration future
   - Présentation des prochaines étapes
   - Clarification des aspects pratiques

**Qui participe à l'entretien ?**
- Les deux parents (ou tuteurs légaux)
- L'enfant (selon son âge et sa maturité)
- Le directeur ou le responsable pédagogique
- Un membre du service des admissions

**Comment se préparer :**
- Réfléchissez à vos questions importantes
- Préparez-vous à parler de votre enfant
- Envisagez vos objectifs éducatifs
- Notez vos préoccupations particulières

**Objectifs de l'entretien :**
- Assurer la compatibilité mutuelle
- Évaluer l'adhésion au projet éducatif
- Créer une relation de confiance
- Préparer une intégration réussie

Cet entretien est une étape fondamentale pour construire un partenariat éducatif solide entre votre famille et notre école.`
        },
        {
            number: "04",
            title: "Observation",
            shortDescription: "Évaluation de l'enfant dans un contexte d'apprentissage",
            icon: <Eye className="h-6 w-6" />,
            detailedContent: `Selon l'âge et le niveau de l'enfant, cette étape prend différentes formes pour évaluer son adaptation et son développement.

**Observation de l'enfant et analyse pédagogique :**

Cette étape permet à notre équipe pédagogique d'évaluer la capacité d'adaptation de votre enfant à notre environnement d'apprentissage.

**Modalités selon l'âge :**

**M0 et M1 (Maternelle 0 et 1) :**
- Rencontre parents-enfant à l'école sur rendez-vous
- Durée : 30-45 minutes
- Observation en milieu ludique et sécurisé
- Évaluation de l'autonomie et de la socialisation
- Interaction avec d'autres enfants si possible

**M2 à P1 (Maternelle 2 à Primaire 1) :**
- Observation de l'enfant en classe réelle
- Durée : 2-3 heures pendant une matinée scolaire
- Participation aux activités pédagogiques
- Évaluation des compétences sociales et cognitives
- Adaptation au rythme et au groupe

**P2 à S1+ (Primaire 2 et plus) :**
- Analyse des compétences nécessaires
- Évaluation formelle des acquis
- Tests d'adaptation au niveau scolaire
- Entretien avec l'enfant
- Durée : 2-3 heures

**Écoles officielles Fédération Wallonie-Bruxelles :**
- Analyse basée sur les bulletins scolaires
- Évaluation du dossier scolaire complet
- Pas d'observation directe nécessaire
- Validation du niveau scolaire

**Critères d'évaluation :**
- Capacité d'intégration sociale
- Niveau de développement adapté
- Autonomie dans les activités
- Compatibilité avec notre rythme
- Potentiel d'épanouissement

**Résultats de l'observation :**
- Bilan détaillé transmis aux parents
- Recommandations pédagogiques
- Validation du niveau d'admission
- Plan d'intégration personnalisé si nécessaire

Cette observation n'est pas un examen, mais une évaluation bienveillante pour assurer le meilleur accueil à votre enfant.`
        },
        {
            number: "05",
            title: "Décision",
            shortDescription: "Communication officielle de la décision d'admission",
            icon: <CheckCircle className="h-6 w-6" />,
            detailedContent: `Après l'entretien avec les parents et l'analyse du profil pédagogique, le comité d'admission décide de l'admission et communique sa décision par email aux parents.

**Décision d'admission :**

Cette étape marque le point culminant de votre processus d'admission avec une décision finale basée sur une évaluation complète.

**Processus de décision :**

1. **Analyse complète du dossier**
   - Revue de tous les éléments évalués
   - Synthèse des observations et entretiens
   - Vérification de la compatibilité globale
   - Évaluation des places disponibles

2. **Réunion du comité d'admission**
   - Composition : Directeur, responsables pédagogiques, service admissions
   - Discussion de chaque candidature
   - Prise de décision collégiale
   - Validation finale

3. **Critères de décision**
   - Adéquation avec le projet éducatif
   - Capacité d'intégration de l'enfant
   - Disponibilité des places dans la classe
   - Équilibre des classes
   - Potentiel d'épanouissement

**Communication de la décision :**

- **Délai** : Sous 7 jours après la dernière évaluation
- **Canal** : Email officiel avec décision motivée
- **Contenu** : Décision, motifs, prochaines étapes
- **Suivi** : Téléphone pour questions éventuelles

**Types de décisions possibles :**

1. **Admission confirmée**
   - Proposition formelle d'inscription
   - Délai pour accepter (généralement 15 jours)
   - Instructions pour finalisation

2. **Admission sur liste d'attente**
   - Place non disponible immédiatement
   - Position sur la liste d'attente
   - Délais prévisionnels

3. **Non-admission**
   - Motivation détaillée
   - Recommandations alternatives
   - Possibilité de recandidature

**Après une admission positive :**
- Acceptation formelle par les parents
- Paiement des frais d'inscription
- Finalisation administrative
- Préparation de la rentrée

Notre décision est toujours prise dans l'intérêt supérieur de l'enfant et de l'établissement.`
        },
        {
            number: "06",
            title: "Échange parents",
            shortDescription: "Session d'information avec les familles des enfants admis",
            icon: <Calendar className="h-6 w-6" />,
            detailedContent: `Une session d'échange est organisée avec les parents des enfants admis pour partager les observations, répondre aux dernières questions et établir un cadre clair pour le futur parcours scolaire de l'enfant.

**Temps d'échange avec les parents des enfants admis :**

Cette étape prépare l'intégration réussie de votre enfant en créant un cadre de collaboration clair entre votre famille et notre école.

**Objectifs de la session :**

1. **Partage des observations**
   - Bilan détaillé des évaluations
   - Points forts de votre enfant
   - Axes de développement identifiés
   - Recommandations pédagogiques

2. **Réponses aux questions finales**
   - Dernières interrogations des parents
   - Clarifications pratiques
   - Préparation à la rentrée
   - Aspect logistique et organisationnel

3. **Établissement du cadre pédagogique**
   - Objectifs pour la première année
   - Suivi et communication
   - Rôle des parents et de l'école
   - Calendrier des rencontres

**Déroulement de la session (2 heures) :**

**Partie 1 : Bilan individuel (45 minutes)**
- Présentation des résultats des évaluations
- Discussion du profil de votre enfant
- Recommandations personnalisées
- Questions-réponses

**Partie 2 : Information collective (45 minutes)**
- Présentation de l'année scolaire
- Calendrier important
- Règlement intérieur
- Vie scolaire et périscolaire

**Partie 3 : Échange et réseautage (30 minutes)**
- Rencontre avec d'autres parents
- Échange d'expériences
- Création de liens
- Boissons légères

**Thèmes abordés :**
- Programme pédagogique de l'année
- Intégration et adaptation
- Communication école-famille
- Activités périscolaires
- Repas et transport
- Santé et sécurité
- Devoirs et suivi

**Participants attendus :**
- Les deux parents (ou tuteurs légaux)
- L'enfant (selon l'âge)
- L'équipe pédagogique de référence
- Le directeur
- Le service des admissions

**Documents fournis :**
- Guide de la rentrée
- Calendrier scolaire
- Liste de fournitures
- Règlement intérieur
- Contacts utiles

Cette session est une étape clé pour démarrer sereinement cette nouvelle aventure éducative ensemble.`
        },
        {
            number: "07",
            title: "Inscription finale",
            shortDescription: "Finalisation administrative et confirmation de l'inscription",
            icon: <Home className="h-6 w-6" />,
            detailedContent: `Dernière étape où la famille est invitée à confirmer l'inscription, compléter les formalités administratives et procéder au paiement des frais requis. L'inscription devient définitive après cette étape.

**Confirmation d'inscription :**

Cette étape finale formalise l'admission de votre enfant et prépare son intégration dans notre école.

**Processus de confirmation :**

1. **Acceptation de l'offre d'admission**
   - Signature du contrat d'inscription
   - Acceptation du règlement intérieur
   - Engagement sur les frais de scolarité
   - Délai de réponse : 15 jours

2. **Finalisation administrative**
   - Complétion du dossier d'inscription
   - Fourniture des documents manquants
   - Création du dossier scolaire
   - Attribution de la classe et du groupe

3. **Paiement des frais**
   - Frais d'inscription : 5 000 MAD
   - Premier trimestre de scolarité
   - Modalités de paiement disponibles
   - Confirmation financière

**Documents requis pour la finalisation :**

- **Documents administratifs :**
  - Extrait de naissance original
  - Carnet de vaccination à jour
  - Certificat médical de scolarité
  - Attestation d'assurance scolaire

- **Documents scolaires :**
  - Dossier de transfert (si applicable)
  - Bulletins des années précédentes
  - Certificat de radiation (si transfert)

- **Documents parents :**
  - Copies des cartes d'identité
  - Justificatif de domicile récent
  - Autorisation de sortie du territoire
  - Informations d'urgence

**Calendrier de la finalisation :**

- **Juin-Juillet** : Finalisation pour la rentrée de septembre
- **Août** : Dernières inscriptions selon disponibilité
- **En cours d'année** : Inscriptions immédiates après validation

**Après la confirmation :**

1. **Préparation de la rentrée**
   - Communication de la classe et du professeur
   - Liste des fournitures scolaires
   - Planning de la rentrée
   - Informations pratiques

2. **Intégration progressive**
   - Visite de la classe avant la rentrée
   - Rencontre avec l'enseignant
   - Integration aux activités d'été
   - Préparation psychologique

3. **Suivi personnalisé**
   - Point de contact désigné
   - Réunion parents-professeurs
   - Adaptation personnalisée
   - Évaluation après 3 mois

**Ce que comprend votre inscription :**
- Scolarité complète pour l'année
- Manuels scolaires et fournitures de base
- Accès aux installations sportives et culturelles
- Assurance scolaire couvrant les activités
- Suivi pédagogique personnalisé
- Participation aux événements scolaires

**Modalités de paiement :**
- Virement bancaire
- Chèque certifié
- Espèces (sur place)
- Échelonnement possible sur demande

Une fois cette étape complétée, votre enfant est officiellement inscrit dans notre école et nous nous engageons à lui offrir la meilleure éducation possible dans un environnement bienveillant et stimulant.`
        }
    ];

    const openModal = (step) => {
        setSelectedStep(step);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedStep(null);
    };

    return (
        <>
            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="mb-16">
                        <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                Processus
                            </p>
                        </div>
                        <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl mb-6">
                            Notre processus d'admission
                        </h2>
                        <div className="max-w-4xl">
                            <p className="text-lg leading-relaxed text-gray-700 mb-4">
                                Choisir une école, c'est bien plus qu'une simple rentrée scolaire. C'est s'engager dans une trajectoire éducative, une méthode et une vision à long terme.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Notre processus d'admission est conçu pour vous accompagner à chaque étape et assurer une intégration réussie de votre enfant.
                            </p>
                        </div>
                    </div>

                    {/* Steps Cards */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center justify-center ">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group h-full flex flex-col"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-belgYellow/10 border border-belgYellow/20 group-hover:bg-belgYellow/20 transition-colors duration-300">
                                        <div className="text-belgYellow">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-belgBlack mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                                    {step.shortDescription}
                                </p>
                                <div className="mt-auto">
                                    <Button
                                        onClick={() => openModal(step)}
                                        variant="outline"
                                        size="sm"
                                        className="bg-belgYellow text-belgBlack hover:bg-belgYellow hover:text-belgBlack hover:scale-105 transition-all duration-300 border-belgYellow"
                                    >
                                        En savoir plus
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16">
                        <div className="bg-belgBlack rounded-2xl p-12 text-white">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">
                                        Prêt à commencer ?
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-100 max-w-2xl">
                                        Notre équipe est là pour vous guider à chaque étape du processus d'admission. 
                                        Contactez-nous pour démarrer cette belle aventure éducative.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Button
                                        size="lg"
                                        className="bg-belgYellow text-belgBlack hover:bg-belgYellow/90"
                                    >
                                        Démarrer la demande
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={selectedStep?.title}
                content={selectedStep?.detailedContent}
                image="/assets/images/admissions/processus-modal-bg.jpg"
            />
        </>
    );
}
