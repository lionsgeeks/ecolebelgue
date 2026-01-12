import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

export default function ReduitsTab() {
    return (
        <div className="space-y-12">
            {/* Droit de première inscription */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-belgBlack mb-4">Droit de première inscription</h3>
                <p className="text-gray-600 mb-6">Payable à l'inscription, une seule fois pour toute la scolarité</p>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">18,000 MAD : classe d'accueil</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">24,000 MAD : autres niveaux</p>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-belgYellow/10 rounded-lg">
                    <p className="font-semibold text-belgBlack mb-2">Enfants belges :</p>
                    <ul className="space-y-1 text-gray-700">
                        <li>• 7,000 MAD : classe d'accueil</li>
                        <li>• 10,000 MAD : autres niveaux</li>
                    </ul>
                </div>
            </div>

            {/* Frais de scolarité annuels */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-belgBlack mb-4">Frais de scolarité annuels (Minerval) - Tarif réduit</h3>
                <p className="text-gray-600 mb-6">Payables en 3 fois trimestriellement</p>
                
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-belgYellow/10">
                                <th className="text-left p-4 font-semibold text-belgBlack border-b-2 border-belgYellow">Niveau scolaire</th>
                                <th className="text-right p-4 font-semibold text-belgBlack border-b-2 border-belgYellow">Montant annuel (MAD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Maternelle</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">28,236</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Primaire</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">33,642</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Secondaire inférieur (S1, S2, S3)</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">39,240</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Secondaire supérieur (S4, S5, S6)</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">41,148</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Réinscription */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-belgBlack mb-4">Réinscription</h3>
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">Maternelle : 3,000 MAD</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">Primaire : 3,600 MAD</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">Secondaire : 4,200 MAD</p>
                    </div>
                </div>
            </div>

            {/* Conditions */}
            <div className="bg-belgRed/10 rounded-2xl p-8 border border-belgRed/20">
                <h3 className="text-xl font-bold text-belgBlack mb-4 flex items-center">
                    <Info className="h-6 w-6 mr-2 text-belgRed" />
                    Conditions
                </h3>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-belgRed mr-2 mt-0.5 flex-shrink-0" />
                        <span>Places limitées selon quota</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-belgRed mr-2 mt-0.5 flex-shrink-0" />
                        <span>Demande obligatoire via formulaire d'admission</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-belgRed mr-2 mt-0.5 flex-shrink-0" />
                        <span>Dossier justificatif requis</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-belgRed mr-2 mt-0.5 flex-shrink-0" />
                        <span>Paiement des droits de réinscription pour élèves belges si non pris en charge par l'employeur</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
