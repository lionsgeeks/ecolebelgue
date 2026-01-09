import AppLayout from '@/layouts/app-layout';
import SchoolLocation from './partials/school-location';

export default function Contact() {
    const casablancaData = {
        name: 'Casablanca',
        address: "Route d'Azemmour, Km 13 Ouled Azzouz",
        emails: [
            {
                label: 'Section fondamentale',
                email: 'fondamental@ecolebelge.org',
            },
            {
                label: 'Section secondaire',
                email: 'secondaire@ecolebelge.org',
            },
        ],
        phones: [
            {
                label: 'Section fondamentale',
                numbers: '+212 522 64 12 12 / +212 673 22 64 64',
            },
            { label: 'Section secondaire', number: '+212 522 92 03 03' },
        ],
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-7.623456789012345!3d33.52345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzI0LjQiTiA3wrAzNycyNC40Ilc!5e0!3m2!1sfr!2sma!4v1234567890123!5m2!1sfr!2sma',
        image: '/assets/images/casablanca-school.jpg',
        accentColor: 'blue',
    };

    const rabatData = {
        name: 'Rabat',
        address: 'Avenue Sophora, Hay Riad - Secteur 23 - 10110 Rabat',
        emails: [{ label: 'Email', email: 'ebmrabat@ecolebelge.org' }],
        phones: [{ label: 'Téléphone', number: '+212 537 717 278' }],
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-6.823456789012345!3d33.97345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzI0LjQiTiA2wrA0OScyNC40Ilc!5e0!3m2!1sfr!2sma!4v1234567890124!5m2!1sfr!2sma',
        image: '/assets/images/rabat-school.jpg',
        accentColor: 'orange',
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-white">
                {/* Minimal Hero */}
                <div className="border-b border-gray-100 bg-white py-24">
                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <h1 className="mb-4 text-5xl font-light tracking-tight text-gray-900 md:text-6xl">
                                Contact
                            </h1>
                            <p className="text-lg font-light text-gray-600">
                                Connectez-vous avec nos établissements à
                                Casablanca et Rabat
                            </p>
                        </div>
                    </div>
                </div>

                {/* Schools Grid */}
                <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                        <SchoolLocation data={casablancaData} />
                        <SchoolLocation data={rabatData} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
