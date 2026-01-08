import AppLayout from '@/layouts/app-layout';
import HeroSection from './partials/hero-section';
import VideoSection from './partials/video-section';
import StatisticsSection from './partials/statistics-section';
import SchoolsSection from './partials/schools-section';
import InstagramSection from './partials/instagram-section';

export default function Home() {
    return (
        <AppLayout>
            <HeroSection />
            <SchoolsSection />
            <VideoSection />
            <StatisticsSection />
            <InstagramSection />
        </AppLayout>
    );
}
