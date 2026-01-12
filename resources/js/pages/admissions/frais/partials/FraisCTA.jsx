import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FraisCTA() {
    return (
        <div className="mt-20 bg-gradient-to-br from-belgYellow via-belgRed to-belgBlack rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white/10"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-4">
                    Questions sur les frais ?
                </h3>
                <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                    Notre service administratif est disponible pour vous accompagner dans votre démarche d'admission 
                    et répondre à toutes vos questions sur nos frais de scolarité.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button
                        size="lg"
                        className="bg-white text-belgBlack hover:bg-gray-100 hover:text-belgBlack border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                    >
                        Prendre rendez-vous
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent text-white border-white hover:bg-white hover:text-belgBlack transition-all duration-300 hover:scale-105"
                    >
                        Télécharger la documentation
                    </Button>
                </div>
            </div>
        </div>
    );
}
