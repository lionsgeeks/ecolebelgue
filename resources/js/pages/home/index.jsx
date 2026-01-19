import AppLayout from '@/layouts/app-layout';
import HeroSection from './partials/hero-section';
import VideoSection from './partials/video-section';
import StatisticsSection from './partials/statistics-section';
import SchoolsSection from './partials/schools-section';
import InstagramSection from './partials/instagram-section';
import AdmissionModal from './partials/admission-modal';
import PourquoiChoisirSection from './partials/pourquoi-choisir-section';
export default function Home() {
    return (
        <AppLayout>
            <AdmissionModal />
            <HeroSection />
            <SchoolsSection />
            <PourquoiChoisirSection />
            <VideoSection />
            <StatisticsSection />
            <InstagramSection />
        </AppLayout>
    );
}
