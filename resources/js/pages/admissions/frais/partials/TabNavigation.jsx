import React from 'react';
import { Users, FileText, CreditCard } from 'lucide-react';

export default function TabNavigation({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'standards', label: 'Tarifs standards', icon: Users },
        { id: 'belges', label: 'Tarifs Enfants Belges', icon: FileText },
        { id: 'reduits', label: 'Tarifs Réduits', icon: CreditCard }
    ];

    return (
        <div className="mb-12">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-1 overflow-x-auto">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm transition-all duration-200 whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'border-belgYellow text-belgBlack bg-belgYellow/5'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                <Icon className="h-5 w-5" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
