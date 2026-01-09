import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[85vh] w-full overflow-hidden">
            {/* Full Background Image */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/images/home/casa2.JPG')",
                    }}
                />
                <div className="absolute inset-0 bg-belgBlack/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-[85vh] flex-col justify-center px-4 py-20 md:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-5xl">
                    <div className="mb-8 inline-block border-l-4 border-belgYellow pl-6">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgYellow">
                            Établissements scolaires Belges
                        </p>
                    </div>
                    
                    <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
                        Excellence académique
                        <br />
                        <span className="text-belgYellow">au cœur du Maroc</span>
                    </h1>
                    
                    <p className="mb-12 max-w-2xl text-xl leading-relaxed text-gray-100 md:text-2xl">
                        Un enseignement belge reconnu, des écoles du Monde, une excellence académique et une ambiance de quartier.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-belgYellow text-belgBlack hover:bg-belgYellow/90 px-8 py-6 text-lg"
                        >
                            <Link href="/admissions">
                                Découvrir nos écoles
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="text-black hover:bg-white/10 px-8 py-6 text-lg"
                        >
                            <Link href="/contact">Nous contacter</Link>
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <ChevronDown className="h-6 w-6 animate-bounce text-white" />
                </div>
            </div>
        </section>
    );
}
