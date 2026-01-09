import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';
import PourquoiChoisirSection from './partials/pourquoi-choisir-section';
import MissionSection from './partials/mission-section';
import ValeursSection from './partials/valeurs-section';
import AvantagesSection from './partials/avantages-section';
import EcoleDestinationSection from './partials/ecole-destination-section';

export default function Pourquoi() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Banner 
                    title="Choisir une école engage une trajectoire"
                    description="Les conditions réelles dans lesquelles l'enfant apprend sont déterminantes pour la construction de sa personnalité, de son intelligence et de ses savoir-faire."
                />
                <PourquoiChoisirSection />
                <MissionSection />
                <ValeursSection />
                <AvantagesSection />
                <EcoleDestinationSection />
            </div>
        </AppLayout>
    );
}