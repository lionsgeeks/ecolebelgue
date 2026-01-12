import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function StandardsTab() {
    return (
        <div className="space-y-12">
            {/* Droit de première inscription */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-belgBlack mb-4">Droit de première inscription</h3>
                <p className="text-gray-600 mb-6">Payable à l'inscription, une seule fois pour toute la scolarité</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 font-semibold">NON REMBOURSABLE</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">30 000 MAD : classe d'accueil</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">40 000 MAD : autres niveaux</p>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-belgYellow/10 rounded-lg">
                    <p className="font-semibold text-belgBlack mb-2">Fratrie :</p>
                    <ul className="space-y-1 text-gray-700">
                        <li>• −20% pour le 2ᵉ enfant</li>
                        <li>• −50% à partir du 3ᵉ</li>
                    </ul>
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
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">47,060</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Primaire</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">56,070</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Secondaire inférieur (S1, S2, S3)</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">65,400</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b border-gray-200">Secondaire supérieur (S4, S5, S6)</td>
                                <td className="text-right p-4 font-semibold text-belgBlack border-b border-gray-200">68,580</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Réinscription */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-belgBlack mb-4">Réinscription</h3>
                <p className="text-gray-600 mb-6">Payable en avril à partir de la 2ᵉ année</p>
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">Maternelle : 5,000 MAD</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">Primaire : 6,000 MAD</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-belgBlack">Secondaire : 7,000 MAD</p>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold">Non remboursable</p>
                </div>
            </div>
        </div>
    );
}
