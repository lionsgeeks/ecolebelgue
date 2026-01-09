import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';
import MaternelleContent from './partials/maternelle-content';

export default function Maternelle() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Banner
                    title="La Maternelle"
                    description="Une décision qui engage toute la trajectoire scolaire"
                    buttonText="Découvrir le parcours scolaire"
                    buttonLink="/parcours-scolaire-2-18-ans"
                />
                <MaternelleContent />
            </div>
        </AppLayout>
    );
}

