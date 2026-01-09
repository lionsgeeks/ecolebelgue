import { Badge } from '@/components/ui/badge';

export default function MissionSection() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 w-64 h-64 bg-[var(--color-belg-yellow)]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-[var(--color-belg-red)]/5 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-belg-black)] mb-6">
                        Former les Leaders de Demain
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Notre mission est de fournir une éducation de qualité supérieure qui prépare les étudiants 
                        aux défis du 21ème siècle avec excellence et innovation.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-[var(--color-belg-yellow)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-belg-black)] mb-2 group-hover:text-[var(--color-belg-red)] transition-colors duration-300">Excellence Académique</h3>
                                    <p className="text-gray-600">Programmes rigoureux et enseignants qualifiés</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-[var(--color-belg-red)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-belg-black)] mb-2 group-hover:text-[var(--color-belg-yellow)] transition-colors duration-300">Innovation Pédagogique</h3>
                                    <p className="text-gray-600">Méthodes d'enseignement modernes et adaptées</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-[var(--color-belg-yellow)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-belg-black)] mb-2 group-hover:text-[var(--color-belg-red)] transition-colors duration-300">Ouverture Internationale</h3>
                                    <p className="text-gray-600">Perspectives globales et multiculturelles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-belg-yellow)] to-[var(--color-belg-red)] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=center" 
                            alt="Students learning" 
                            className="relative rounded-2xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
