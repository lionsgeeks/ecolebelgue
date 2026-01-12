import React from 'react';

export default function FraisHeader() {
    return (
        <div className="mb-16">
            <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                    Frais de Scolarité
                </p>
            </div>
            <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl mb-6">
                Structure des Frais
            </h2>
            <div className="max-w-4xl">
                <p className="text-lg leading-relaxed text-gray-700">
                    Découvrez notre structure de frais transparente et adaptée à chaque situation. 
                    Des tarifs clairs et des modalités de paiement flexibles pour faciliter votre parcours.
                </p>
            </div>
        </div>
    );
}
