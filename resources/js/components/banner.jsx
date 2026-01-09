import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function Banner({ title, description, buttonText = "Découvrir nos valeurs", buttonLink = "#valeurs" }) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-belg-black)] via-[var(--color-belg-yellow)] to-[var(--color-belg-red)] text-white">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 h-64 w-64 animate-pulse rounded-full bg-white/5 blur-2xl"></div>
            </div>
            <div className="relative container mx-auto flex h-[60vh] items-center justify-center px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-3xl leading-tight font-bold tracking-tight md:text-5xl">
                        {title}
                    </h1>
                    <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-light text-white/95 md:text-xl">
                        {description}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href={buttonLink}>
                            <Button
                                size="lg"
                                className="bg-white  px-8 py-3 text-base font-semibold text-[var(--color-belg-red)] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                            >
                                {buttonText}
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/50 px-8 py-3 text-base font-semibold text-black shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-[var(--color-belg-red)] hover:shadow-xl"
                            >
                                Nous contacter
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>
    );
}
