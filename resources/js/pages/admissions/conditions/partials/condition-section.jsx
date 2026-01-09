import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, FileText, MessageSquare, Eye, TestTube } from 'lucide-react';
import Modal from '@/components/ui/modal';

export default function ConditionSection() {
    const [selectedType, setSelectedType] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const admissionTypes = [
        {
            title: "a. Admission automatique",
            description: "Pour les fratries d'élèves déjà scolarisés dans nos établissements souhaitant s'inscrire en section maternelle.",
            icon: <Home className="h-8 w-8 text-belgYellow" />,
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
            icon: <FileText className="h-8 w-8 text-belgYellow" />,
            detailedContent: `L'admission sur dossier s'adresse aux enfants :
- Du personnel expatrié des écoles belges au Maroc
- De la Délégation Générale Wallonie-Bruxelles au Maroc
- De l'APEFE (Association pour la Promotion de l'Éducation et de la Formation à l'Étranger)
- De l'Ambassade et des Consulats du Royaume de Belgique au Maroc
- Ayant fréquenté au minimum durant les deux dernières années complètes une école belge francophone à programme et diplôme de la Fédération Wallonie-Bruxelles

Procédure spécifique :
- Dépôt du dossier complet au service des admissions
- Analyse du parcours scolaire antérieur
- Vérification de l'éligibilité selon les critères établis
- Entretien avec la famille si nécessaire

Documents requis :
- Dossier scolaire des deux dernières années
- Attestation de l'établissement d'origine
- Justificatif professionnel des parents
- Certificat de nationalité belge (si applicable)`
        },
        {
            title: "c. Admission sur entretien",
            description: "Procédure spécifique pour les enfants souhaitant s'inscrire en M0 et M1, à l'exception des fratries déjà scolarisées.",
            icon: <MessageSquare className="h-8 w-8 text-belgYellow" />,
            detailedContent: `L'admission sur entretien concerne spécifiquement les enfants souhaitant s'inscrire en :
- M0 (Maternelle 0) - Section des tout-petits
- M1 (Maternelle 1) - Première année de maternelle

Cette procédure exclut les parents de fratries déjà scolarisées qui bénéficient de l'admission automatique.

Déroulement de l'entretien :
- Présentation du projet pédagogique de l'école
- Découverte de l'enfant et de sa famille
- Discussion des attentes et des besoins spécifiques
- Visite des installations si nécessaire
- Réponse à toutes les questions des parents

Objectifs de l'entretien :
- Assurer la compatibilité entre le projet éducatif et les attentes familiales
- Évaluer la capacité d'adaptation de l'enfant
- Présenter l'environnement d'apprentissage
- Établir une relation de confiance avec la famille

Durée approximative : 45 minutes à 1 heure`
        },
        {
            title: "d. Admission sur observation",
            description: "Évaluation en situation de classe réelle pour les enfants visant M2, M3 et P1, hors catégories automatique et dossier.",
            icon: <Eye className="h-8 w-8 text-belgYellow" />,
            detailedContent: `L'admission sur observation s'applique aux enfants souhaitant intégrer :
- M2 (Deuxième année de maternelle)
- M3 (Troisième année de maternelle)  
- P1 (Première année primaire)

Cette procédure exclut les enfants relevant des catégories a (admission automatique) et b (admission sur dossier).

Processus d'observation :
- Session d'observation en classe réelle
- Évaluation de l'adaptation au groupe
- Observation des compétences sociales et cognitives
- Interaction avec les autres élèves
- Évaluation de l'autonomie

Déroulement de la séance :
- Accueil et présentation de l'enfant à la classe
- Participation aux activités pédagogiques
- Observation par l'équipe enseignante
- Temps d'échange avec l'enfant
- Bilan avec les parents à la fin de la séance

Critères d'évaluation :
- Capacité d'intégration sociale
- Niveau de développement adapté à l'âge
- Autonomie dans les activités quotidiennes
- Compatibilité avec le rythme de la classe`
        },
        {
            title: "e. Admission sur test",
            description: "Évaluation des compétences pour les élèves de P2 à S1 ne relevant pas des admissions sur dossier ou observation.",
            icon: <TestTube className="h-8 w-8 text-belgYellow" />,
            detailedContent: `L'admission sur test concerne les élèves souhaitant intégrer :
- P2 à P6 (Deuxième à sixième année primaire)
- S1 (Première année secondaire)

Cette procédure s'adresse aux élèves ne relevant pas des catégories b (admission sur dossier) et d (admission sur observation).

Contenu des tests d'admission :
- Évaluation des compétences fondamentales (français, mathématiques)
- Test de raisonnement logique
- Évaluation de la compréhension orale et écrite
- Exercice de production écrite
- Entretien motivationnel

Préparation aux tests :
- Programme de référence basé sur le curriculum de la Fédération Wallonie-Bruxelles
- Durée totale : environ 3 heures
- Pause prévue entre les épreuves
- Résultats communiqués sous 48 heures

Critères de réussite :
- Niveau requis selon la classe visée
- Potentiel d'adaptation au système éducatif belge
- Motivation et projet personnel de l'élève
- Capacité à suivre le rythme de travail exigé

Après réussite aux tests :
- Proposition d'admission définitive
- Plan d'intégration personnalisé si nécessaire
- Suivi rapproché durant la première année`
        }
    ];

    const openModal = (type) => {
        setSelectedType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedType(null);
    };

    return (
        <>
            <section className="bg-gray-50 py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                Types d'admission
                            </p>
                        </div>
                        <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                            Types d'admission
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {admissionTypes.map((type, index) => (
                            <div
                                key={index}
                                onClick={() => openModal(type)}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer transform hover:-translate-y-1 h-full flex flex-col"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-belgYellow/10 border border-belgYellow/20 group-hover:bg-belgYellow/20 transition-colors duration-300">
                                        {type.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-belgBlack mb-4">
                                    {type.title}
                                </h3>
                                <div className="flex-1 flex flex-col">
                                    <p className="text-gray-700 leading-relaxed mb-4 flex-1">
                                        {type.description}
                                    </p>
                                    <div className="flex justify-center mt-auto">
                                        <span className="text-belgYellow font-semibold text-sm group-hover:text-belgBlack transition-colors duration-300">
                                            En savoir plus →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <div className="bg-belgBlack rounded-2xl p-12 text-white">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">
                                        Comment postuler ?
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-100 max-w-2xl">
                                        Chaque type d'admission suit une procédure spécifique. 
                                        Contactez notre service des admissions pour connaître les détails 
                                        et les documents requis pour votre situation.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Button
                                        size="lg"
                                        className="bg-belgYellow text-belgBlack hover:bg-belgYellow/90"
                                    >
                                        Contacter les admissions
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
                title={selectedType?.title}
                content={selectedType?.detailedContent}
                image="/assets/images/admissions/modal-bg.jpg"
            />
        </>
    );
}
