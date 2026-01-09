import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function DemandeSection() {
    return (
        <section id="demande" className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Demande
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                        Demande d'admission
                    </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-belgBlack mb-4">
                                Prêt à rejoindre notre école ?
                            </h3>
                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                Remplissez le formulaire de demande ci-contre pour commencer le processus d'admission. 
                                Notre équipe vous contactera dans les plus brefs délais pour discuter des prochaines étapes.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-belgYellow">
                                        <Mail className="h-6 w-6 text-belgBlack" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-belgBlack mb-2">
                                        Contact par email
                                    </h4>
                                    <p className="text-gray-700">
                                        admissions@ecolebelge.fr
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-belgYellow">
                                        <Phone className="h-6 w-6 text-belgBlack" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-belgBlack mb-2">
                                        Contact téléphonique
                                    </h4>
                                    <p className="text-gray-700">
                                        +33 1 23 45 67 89
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Button
                                size="lg"
                                className="bg-belgBlack text-white hover:bg-belgBlack/90"
                            >
                                Télécharger le formulaire PDF
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-belgBlack text-belgBlack hover:bg-belgBlack hover:text-white"
                            >
                                Prendre rendez-vous
                            </Button>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <form className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom de l'enfant
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-belgYellow focus:border-transparent transition-all duration-200"
                                            placeholder="Entrez le nom de l'enfant"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Prénom de l'enfant
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-belgYellow focus:border-transparent transition-all duration-200"
                                            placeholder="Entrez le prénom de l'enfant"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Date de naissance
                                        </label>
                                        <input 
                                            type="date" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-belgYellow focus:border-transparent transition-all duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Niveau scolaire souhaité
                                        </label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-belgYellow focus:border-transparent transition-all duration-200">
                                            <option value="">Sélectionnez un niveau</option>
                                            <option value="maternelle">Maternelle</option>
                                            <option value="primaire">Primaire</option>
                                            <option value="secondaire">Secondaire</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom du parent/tuteur
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-belgYellow focus:border-transparent transition-all duration-200"
                                        placeholder="Entrez votre nom complet"
                                    />
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-belgYellow focus:border-transparent transition-all duration-200"
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Téléphone
                                        </label>
                                        <input 
                                            type="tel" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-belgYellow focus:border-transparent transition-all duration-200"
                                            placeholder="+33 6 12 34 56 78"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message additionnel
                                    </label>
                                    <textarea 
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-belgYellow focus:border-transparent transition-all duration-200"
                                        placeholder="Toute information supplémentaire que vous souhaitez partager..."
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-belgYellow text-belgBlack hover:bg-belgYellow/90"
                                >
                                    Soumettre la demande
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
