import React from 'react';
import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';
import ProcessusSection from './partials/processus-section';
import ConditionSection from './partials/condition-section';
import DemandeSection from './partials/demande-section';

export default function Admissions() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Banner 
                    title="Admissions"
                    description="Découvrez notre processus d'admission et rejoignez une école d'excellence qui forme les leaders de demain."
                    buttonText="Commencer la demande"
                    buttonLink="#demande"
                />
                <ProcessusSection />
                <ConditionSection />
                <DemandeSection />
            </div>
        </AppLayout>
    );
}
