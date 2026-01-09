import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';
import FAQNavigation from './partials/faq-navigation';
import SystemeBelgeSection from './partials/systeme-belge-section';
import PedagogieSection from './partials/pedagogie-section';
import EnseignantsSection from './partials/enseignants-section';
import CadreClimatSection from './partials/cadre-climat-section';
import OrganisationSection from './partials/organisation-section';
import AdmissionsSection from './partials/admissions-section';

export default function FAQ() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Banner
                    title="FOIRE AUX QUESTIONS"
                    description="Retrouvez nos réponses à vos questions les plus récurrentes sur le système éducatif belge, la pédagogie, les admissions et bien plus encore."
                    buttonText="Nous contacter"
                    buttonLink="/contact"
                />
                <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                        {/* Navigation Sidebar */}
                        <div className="lg:col-span-1">
                            <FAQNavigation />
                        </div>

                        {/* FAQ Content */}
                        <div className="lg:col-span-3">
                            <div className="space-y-16">
                                <SystemeBelgeSection />
                                <PedagogieSection />
                                <EnseignantsSection />
                                <CadreClimatSection />
                                <OrganisationSection />
                                <AdmissionsSection />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

