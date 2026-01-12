import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

export default function BelgesTab() {
    return (
        <div className="space-y-12">
            {/* Droit de première inscription */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-belgBlack mb-4">Droit de première inscription</h3>
                <p className="text-gray-600 mb-6">Payable à l'inscription, une seule fois pour toute la scolarité</p>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">7,000 MAD : classe d'accueil</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">10,000 MAD : autres niveaux</p>
                    </div>
                </div>
            </div>

            {/* Frais de scolarité annuels */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-belgBlack mb-4">Frais de scolarité annuels (Minerval)</h3>
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
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">37,520</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Primaire</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">44,410</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Secondaire inférieur (S1, S2, S3)</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">51,520</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Secondaire supérieur (S4, S5, S6)</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">54,700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Notes */}
            <div className="bg-belgYellow/10 rounded-2xl p-8 border border-belgYellow/20">
                <h3 className="text-xl font-bold text-belgBlack mb-4 flex items-center">
                    <Info className="h-6 w-6 mr-2 text-belgYellow" />
                    Note
                </h3>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-belgYellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>Le droit annuel de réinscription est exigible uniquement s'il est pris en charge par l'employeur</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-belgYellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>Pour validation d'inscription d'un élève belge : paiement équivalent aux droits annuels de réinscription (déduit du 1er trimestre)</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
