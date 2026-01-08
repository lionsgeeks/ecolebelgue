import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
    return (
        <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 w-64 h-64 bg-[var(--color-belg-yellow)]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-[var(--color-belg-red)]/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative container mx-auto max-w-5xl text-center">
                <Badge className="mb-6 bg-[var(--color-belg-yellow)]/10 text-[var(--color-belg-red)] border-[var(--color-belg-yellow)]/20 px-6 py-3 text-sm font-medium shadow-md">
                    Rejoignez-nous
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-belg-black)] mb-6 leading-tight">
                    Prêts à faire partie de notre aventure ?
                </h2>
                <p className="text-gray-600 text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Découvrez comment notre mission peut transformer l'avenir de votre enfant
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button size="lg" className="bg-[var(--color-belg-red)] hover:bg-[var(--color-belg-red)]/90 text-white px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        Prendre rendez-vous
                    </Button>
                    <Button size="lg" variant="outline" className="border-[var(--color-belg-yellow)] text-[var(--color-belg-yellow)] hover:bg-[var(--color-belg-yellow)] hover:text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        Télécharger notre brochure
                    </Button>
                </div>
            </div>
        </section>
    );
}
