import { Users, GraduationCap, UserCheck } from 'lucide-react';

export default function StatisticsSection() {
    const stats = [
        { 
            value: '2 000', 
            label: 'Élèves', 
            icon: Users,
        },
        { 
            value: '118', 
            label: 'Enseignants', 
            icon: GraduationCap,
        },
        { 
            value: '120', 
            label: 'Superviseurs', 
            icon: UserCheck,
        },
    ];

    return (
        <section className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-belgBlack">
                                    <Icon className="h-10 w-10 text-belgBlack" />
                                </div>
                                <div className="mb-3 text-6xl font-bold text-belgBlack md:text-7xl">
                                    {stat.value}
                                </div>
                                <div className="text-xl font-medium text-gray-700 md:text-2xl">
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
