import React, { useState } from 'react';
import StandardsTab from './StandardsTab';
import BelgesTab from './BelgesTab';
import ReduitsTab from './ReduitsTab';
import TabNavigation from './TabNavigation';
import FraisHeader from './FraisHeader';
import FraisCTA from './FraisCTA';

export default function FraisSection() {
    const [activeTab, setActiveTab] = useState('standards');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'standards':
                return <StandardsTab />;
            case 'belges':
                return <BelgesTab />;
            case 'reduits':
                return <ReduitsTab />;
            default:
                return <StandardsTab />;
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                {/* Header */}
                <FraisHeader />

                {/* Tab Navigation */}
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Tab Content */}
                <div className="min-h-[600px]">
                    {renderTabContent()}
                </div>

                {/* Bottom CTA Section */}
                {/* <FraisCTA /> */}
            </div>
        </section>
    );
}
