import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Home, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import AppLayout from '@/layouts/app-layout';
import { initializeTheme } from '@/hooks/use-appearance';

export default function Error404() {
    // Force light mode on 404 page
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.colorScheme = 'light';
            localStorage.setItem('appearance', 'light');
        }
    }, []);

    return (
        <AppLayout>
            <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-16 md:py-24">
                <div className="mx-auto w-full max-w-2xl text-center">
                    {/* 404 Number with Belgian Colors */}
                    <div className="mb-8">
                        <h1 className="text-9xl font-extrabold md:text-[12rem]">
                            <span className="text-belgBlack">4</span>
                            <span className="text-belgYellow">0</span>
                            <span className="text-belgRed">4</span>
                        </h1>
                    </div>

                    {/* Belgian Flag Stripes Decoration */}
                    <div className="mb-8 flex justify-center">
                        <div className="flex h-2 w-64 overflow-hidden rounded">
                            <div className="h-full w-1/3 bg-belgBlack" />
                            <div className="h-full w-1/3 bg-belgYellow" />
                            <div className="h-full w-1/3 bg-belgRed" />
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-8">
                        <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                Page introuvable
                            </p>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold text-belgBlack md:text-4xl lg:text-5xl">
                            Oups ! Cette page n'existe pas
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                            La page que vous recherchez a peut-être été déplacée, supprimée ou
                            n'existe tout simplement pas.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-belgYellow text-belgBlack hover:bg-belgYellow/90 px-8 py-6 text-lg font-semibold"
                        >
                            <Link href="/">
                                <Home className="mr-2 h-5 w-5" />
                                Retour à l'accueil
                            </Link>
                        </Button>
                    </div>

                 
                </div>
            </div>
        </AppLayout>
    );
}

