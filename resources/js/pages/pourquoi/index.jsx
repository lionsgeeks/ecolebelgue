import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';
import PourquoiChoisirSection from '@/pages/lexcellence-belge/partials/pourquoi-choisir-section';
import MissionSection from '@/pages/lexcellence-belge/partials/mission-section';
import ValeursSection from '@/pages/lexcellence-belge/partials/valeurs-section';
import AvantagesSection from '@/pages/lexcellence-belge/partials/avantages-section';
import EcoleDestinationSection from '@/pages/lexcellence-belge/partials/ecole-destination-section';

export default function Pourquoi() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Banner
                    title="Pourquoi choisir nos écoles ?"
                    description="Les conditions réelles dans lesquelles l'enfant apprend sont déterminantes pour la construction de sa personnalité, de son intelligence et de ses savoir-faire."
                    buttonText="Découvrir nos valeurs"
                    buttonLink="#valeurs"
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

