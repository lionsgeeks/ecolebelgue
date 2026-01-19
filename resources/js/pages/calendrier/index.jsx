import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';
import CalendarContent from './partials/calendar-content';

export default function Calendrier() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Banner
                    title="Calendrier 2025-2026"
                    description="Retrouvez ci-dessous notre calendrier de cette année"
                    buttonText="Télécharger le calendrier"
                    buttonLink="#calendrier-content"
                />
                <section id="calendrier-content" className="bg-white py-20 md:py-28">
                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-belgBlack">
                                Calendrier 2025-2026
                            </h2>
                        </div>
                        <CalendarContent />
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
