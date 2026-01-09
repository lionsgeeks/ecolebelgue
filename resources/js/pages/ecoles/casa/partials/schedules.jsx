import { Clock } from 'lucide-react';

export default function SchedulesSection() {
    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Clock className="h-32 w-32 text-gray-300" />
                            </div>
                            <img
                                src="/assets/images/casa/IMG-20231114-WA0019.jpg"
                                alt="Horaires"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="flex flex-col justify-center order-1 lg:order-2">
                        <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                Organisation
                            </p>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold text-belgBlack md:text-5xl">
                            Horaires
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                L'école belge de Casablanca organise son enseignement du lundi au
                                vendredi. Le mercredi, les cours prennent fin à la mi-journée.
                            </p>
                            <p>
                                Les horaires sont adaptés à chaque section.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

