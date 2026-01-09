import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import React from 'react';

const Cta = () => {
    return (
        <div className="my-16 text-center">
            <div className="rounded-2xl bg-gradient-to-r from-[var(--color-belg-yellow)]/10 to-[var(--color-belg-red)]/10 p-8">
                <h3 className="mb-4 text-2xl font-bold text-[var(--color-belg-black)]">
                    Prêt à commencer votre demande ?
                </h3>
                <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                    Notre équipe est là pour vous accompagner à chaque étape du processus d'admission.
                    N'hésitez pas à nous contacter pour toute question.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href="/admissions/demande">
                        <Button
                            size="lg"
                            className="px-8 py-3 text-base bg-[var(--color-belg-yellow)] font-semibold text-black shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-[var(--color-belg-yellow)] hover:text-black"
                        >
                            Demande de L'admission
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="px-8 py-3 text-base bg-black font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-black hover:text-white"
                        >
                            Nous Contacter
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cta;