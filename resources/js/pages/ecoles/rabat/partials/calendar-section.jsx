import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CalendarSection() {
    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-6 text-3xl font-bold text-belgBlack md:text-4xl lg:text-5xl">
                            Calendrier 2025/2026
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-gray-700">
                            Le calendrier des écoles belges au Maroc est établi en tenant compte du calendrier scolaire de la Fédération Wallonie-Bruxelles et des jours fériés marocains.
                        </p>
                        <a
                            href="/assets/pdfs/Calendrier EBM 2025-26.pdf"
                            download="Calendrier EBM 2025-26.pdf"
                        >
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-medium rounded-lg">
                                <Download className="mr-2 h-5 w-5" />
                                Télécharger
                            </Button>
                        </a>
                    </div>

                    {/* Right Column - Calendar Image */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src="/assets/images/calendrier.webp"
                                alt="Calendrier 2025/2026"
                                className="h-[45vh] w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
