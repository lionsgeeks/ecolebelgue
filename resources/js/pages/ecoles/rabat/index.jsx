import AppLayout from '@/layouts/app-layout';
import HeroSection from './partials/hero';
import OverviewSection from './partials/overview';
import StatisticsSection from './partials/statistics';
import SchedulesSection from './partials/schedules';
import CurriculumSection from './partials/curriculum';
import CalendarSection from './partials/calendar-section';
import GallerySection from './partials/gallery';
import ServicesSection from './partials/services';
import MapSection from './partials/map-section';

export default function Rabat() {
    return (
        <AppLayout>
            <HeroSection />
            <OverviewSection />
            <StatisticsSection />
            <SchedulesSection />
            <CurriculumSection />
            <CalendarSection />
            <GallerySection />
            <ServicesSection />
            <MapSection />
        </AppLayout>
    );
}

