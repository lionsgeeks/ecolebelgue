import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-belg-yellow)] via-[var(--color-belg-red)] to-[var(--color-belg-black)] text-white">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative container mx-auto px-6 py-32">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                        Notre Mission
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
                        Former les leaders de demain avec excellence, innovation et engagement social
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button size="lg" className="bg-white text-[var(--color-belg-red)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            Découvrir nos valeurs
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/50 backdrop-blur-sm text-white hover:bg-white hover:text-[var(--color-belg-red)] px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            Nous contacter
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>
    );
}
