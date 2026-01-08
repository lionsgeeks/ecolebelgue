import AppLayout from '@/layouts/app-layout';
import HeroSection from './partials/hero-section';
import MissionStatement from './partials/mission-statement';
import CoreValues from './partials/core-values';
import StatsSection from './partials/stats-section';
import CtaSection from './partials/cta-section';

export default function Mission() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <HeroSection />
                <MissionStatement />
                <CoreValues />
                <StatsSection />
                <CtaSection />
            </div>
        </AppLayout>
    );
}