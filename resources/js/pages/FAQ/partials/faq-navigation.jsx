import { useState, useEffect } from 'react';

const sections = [
    { id: 'systeme-belge', label: 'SYSTÈME BELGE ET DIPLÔMES' },
    { id: 'pedagogie', label: 'PÉDAGOGIE ET APPRENTISSAGES' },
    { id: 'enseignants', label: 'ENSEIGNANTS ET ENCADREMENT' },
    { id: 'cadre-climat', label: 'CADRE ET CLIMAT SCOLAIRE' },
    { id: 'organisation', label: 'ORGANISATION DE LA VIE SCOLAIRE' },
    { id: 'admissions', label: 'ADMISSIONS ET INSCRIPTIONS' },
];

export default function FAQNavigation() {
    const [activeSection, setActiveSection] = useState('systeme-belge');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="sticky top-24 hidden lg:block">
            <div className="rounded-xl border-2 border-belg-red/30 bg-white p-6 shadow-lg">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-belgBlack">
                    Navigation
                </h3>
                <nav className="space-y-2">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                                activeSection === section.id
                                    ? 'bg-belgYellow text-belgBlack shadow-md'
                                    : 'text-gray-600 hover:bg-belgYellow/20 hover:text-belgBlack'
                            }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}

