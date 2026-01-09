import { Link } from '@inertiajs/react';
import {
    Facebook,
    Instagram,
    Linkedin,
    Globe,
    MapPin,
    Mail,
    Shield,
    Phone,
    Building2,
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative w-full bg-black">
            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1 - Logo and Main Info */}
                    <div className="lg:col-span-1">
                        <Link
                            href="/"
                            className="mb-6 inline-block transition-opacity hover:opacity-80"
                        >
                            <img
                                src="/logo.png"
                                alt="EBM Logo"
                                className="h-14 w-auto  "
                            />
                        </Link>
                        <div className="space-y-3">
                            <p className="text-sm font-semibold uppercase tracking-wider text-white">
                                WALLONIE - BRUXELLES
                            </p>
                            <p className="text-sm leading-relaxed text-gray-300">
                                Établissements scolaires Belges au Maroc
                            </p>
                            <p className="text-xs leading-relaxed text-gray-400">
                                Programme d'enseignement de la Fédération
                                Wallonie-Bruxelles
                            </p>
                        </div>
                    </div>

                    {/* Column 2 - Institutional Partners */}
                    <div className="lg:col-span-1">
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                            Partenaires institutionnels
                        </h3>
                        <div className="flex items-center justify-center rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                            <img
                                src="/assets/images/partners/partners.png"
                                alt="Partenaires institutionnels"
                                className="h-auto w-full max-w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Column 3 - Quick Links */}
                    <div className="lg:col-span-1">
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                            Liens rapides
                        </h3>
                        <nav className="space-y-3">
                            <Link
                                href="/contact"
                                className="block text-sm text-gray-300 transition-colors hover:text-white"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/faq"
                                className="block text-sm text-gray-300 transition-colors hover:text-white"
                            >
                                FAQ
                            </Link>
                            <Link
                                href="/privacy"
                                className="block text-sm text-gray-300 transition-colors hover:text-white"
                            >
                                Politique de confidentialité
                            </Link>
                            <Link
                                href="/admissions"
                                className="block text-sm text-gray-300 transition-colors hover:text-white"
                            >
                                Admissions
                            </Link>
                        </nav>
                    </div>

                    {/* Column 4 - Social Media */}
                    <div className="lg:col-span-1">
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                            Suivez-nous
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-11 w-11 items-center justify-center rounded-lg bg-belgBlack transition-all hover:scale-105 hover:shadow-md"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5 text-white" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-11 w-11 items-center justify-center rounded-lg bg-belgYellow transition-all hover:scale-105 hover:shadow-md"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5 text-belgBlack" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-11 w-11 items-center justify-center rounded-lg bg-belgRed transition-all hover:scale-105 hover:shadow-md"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5 text-white" />
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="group flex h-11 w-11 items-center justify-center rounded-lg border-2 border-gray-300 bg-white transition-all hover:scale-105 hover:border-gray-400 hover:shadow-md"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5 text-gray-700" />
                            </a>
                        </div>
                        <div className="mt-6 space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                                <Phone className="h-4 w-4" />
                                <span>+212 XXX XXX XXX</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                                <Mail className="h-4 w-4" />
                                <span>contact@ecolebelge.ma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-black">
                <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-gray-400 md:flex-row">
                        <p>
                            © {new Date().getFullYear()} Établissements scolaires
                            Belges au Maroc. Tous droits réservés.
                        </p>
                        <p className="text-gray-500">
                            Base de données neutralisée pour les tests : aucun
                            email envoyé, etc.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
