import React from 'react';
import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';
import FraisSection from './partials/frais-section';

const Frais = () => {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
                {/* Hero Banner */}
                <Banner
                    title="Frais de Scolarité"
                    description="Une structure de frais transparente et adaptée à chaque niveau d'enseignement. Découvrez nos différentes options pour un parcours éducatif d'excellence."
                    buttonText="Consulter les tarifs"
                    buttonLink="#tarifs"
                />

                {/* Main Content */}
                <FraisSection />
            </div>
        </AppLayout>
    );
};

export default Frais;