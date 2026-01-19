import { X, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AdmissionModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if modal should be shown (first visit or page reload on home page)
        const hasSeenModal = sessionStorage.getItem('admission-modal-seen');
        
        // Show modal if not seen in this session
        if (!hasSeenModal) {
            setIsOpen(true);
            sessionStorage.setItem('admission-modal-seen', 'true');
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <div
                className="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
                style={{ maxHeight: 'calc(100vh - 2rem)' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative triangles in top right */}
                <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-belgRed" />
                    <div className="absolute top-8 right-8 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-belgBlack" />
                    <div className="absolute top-16 right-16 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-white" />
                </div>

                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center bg-belgYellow rounded hover:bg-belgYellow/90 transition-colors shadow-md"
                    aria-label="Fermer"
                >
                    <X className="h-5 w-5 text-belgBlack font-bold" strokeWidth={3} />
                </button>

                {/* Content - No scroll, all visible */}
                <div className="flex-1 p-5 md:p-6">
                    {/* Logo Section */}
                    <div className="mb-3 text-center relative z-10">
                        <div className="inline-flex items-center justify-center mb-2">
                            <img
                                src="/assets/images/logo.png"
                                alt="EBM Logo"
                                className="h-16 w-16 md:h-20 md:w-20 object-contain"
                            />
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold text-belgBlack mb-1 tracking-tight">
                            WALLONIE - BRUXELLES
                        </h1>
                        <p className="text-xs md:text-sm text-belgBlack mb-0.5 font-medium">
                            Établissements scolaires Belges au Maroc
                        </p>
                        <p className="text-xs text-belgBlack">
                            Programme d'enseignement de la Fédération Wallonie-Bruxelles
                        </p>
                    </div>

                    {/* Title Section */}
                    <div className="mb-3 text-center">
                        <h2 className="text-lg md:text-xl font-bold text-belgBlack mb-1.5 tracking-tight">
                            COMMUNIQUÉ OFFICIEL
                        </h2>
                        <h3 className="text-sm md:text-base font-bold text-belgRed">
                            ADMISSIONS 2026-2027 / ÉCOLES BELGES AU MAROC
                        </h3>
                    </div>

                    {/* Content Text */}
                    <div className="space-y-2 text-gray-800 leading-tight mb-3 text-xs md:text-sm">
                        <p>
                            Les Écoles belges à programme d'enseignement de la Fédération Wallonie-Bruxelles au Maroc informent les familles de l'ouverture, à compter du lundi 19 janvier 2026, de la période de dépôt des candidatures à l'admission pour l'année scolaire 2026–2027.
                        </p>
                        <p>
                            Les demandes d'admission s'effectuent <strong className="font-bold text-belgBlack">exclusivement en ligne, durant la période du 19 janvier 2026 au 28 février 2026.</strong>
                        </p>
                        <p>
                            Nos établissements mettent en œuvre une procédure d'admission structurée par étapes, visant à s'assurer de la cohérence entre le projet éducatif de l'école et la vision éducative des familles ainsi qu'à vérifier les conditions d'une intégration harmonieuse de chaque élève.
                        </p>
                        <p>
                            L'ensemble des informations relatives à notre processus d'admission est disponible sur notre site web officiel : <strong className="font-bold text-belgBlack">www.ecolebelge.org</strong>
                        </p>
                        <p>
                            Pour toute information complémentaire, le service des admissions est à la disposition des familles :
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
                            <Mail className="h-3.5 w-3.5 text-belgRed flex-shrink-0" />
                            <span className="text-belgBlack">Email :</span>
                            <a
                                href="mailto:admissions@ecolebelge.org"
                                className="text-belgBlack hover:text-belgRed transition-colors font-medium"
                            >
                                admissions@ecolebelge.org
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
                            <Phone className="h-3.5 w-3.5 text-belgRed flex-shrink-0" />
                            <span className="text-belgBlack">Tél :</span>
                            <a
                                href="tel:+212537717278"
                                className="text-belgBlack hover:text-belgRed transition-colors font-medium"
                            >
                                +212 537 71 72 78
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
