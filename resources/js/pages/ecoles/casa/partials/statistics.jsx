import { Users, GraduationCap, Globe } from 'lucide-react';

export default function StatisticsSection() {
    const stats = [
        {
            value: '935',
            label: 'Élèves',
            icon: Users,
            bgColor: 'bg-blue-600',
            textColor: 'text-white',
        },
        {
            value: '58',
            label: 'Enseignants',
            icon: GraduationCap,
            bgColor: 'bg-gray-100',
            textColor: 'text-belgBlack',
        },
        {
            value: '58',
            label: 'Expatriés',
            icon: Globe,
            bgColor: 'bg-belgYellow',
            textColor: 'text-belgBlack',
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-4 md:grid-cols-3">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`${stat.bgColor} ${stat.textColor} rounded-lg p-8 text-center transition-transform hover:scale-105`}
                            >
                                <div className="mb-4 flex justify-center">
                                    <Icon className="h-12 w-12" />
                                </div>
                                <div className="mb-2 text-5xl font-bold md:text-6xl">
                                    {stat.value}
                                </div>
                                <div className="text-lg font-semibold uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

