import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';

export default function ParcoursScolaire() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Banner
                    title="Parcours scolaire (2-18 ans)"
                    description="Un parcours complet et cohérent de la maternelle au secondaire"
                    buttonText="En savoir plus"
                    buttonLink="/maternelle"
                />
                <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
                    <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
                        <p className="text-center text-lg text-gray-600">
                            Contenu à venir...
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

