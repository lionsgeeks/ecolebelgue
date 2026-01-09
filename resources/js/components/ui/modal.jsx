import { X } from 'lucide-react';
import { Button } from './button';
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, content, image }) {
    useEffect(() => {
        if (isOpen) {
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0px'; // Prevent layout shift
            
            return () => {
                // Restore scrolling when modal is closed
                document.body.style.overflow = 'unset';
                document.body.style.paddingRight = '0px';
            };
        }
    }, [isOpen]);

    const handleBackdropClick = (e) => {
        // Close modal when clicking on the backdrop (outside modal content)
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-[var(--color-belg-black)]">{title}</h3>
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Image at top */}
                    <div className="mb-8">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-64 object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Text content below image */}
                    <div className="prose prose-lg max-w-none">
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            {content.split('\n').map((paragraph, index) => (
                                <p key={index} className="text-base">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 p-6 border-t border-gray-100 bg-white/95 backdrop-blur-sm">
                    <div className="flex justify-end">
                        <Button
                            onClick={onClose}
                            className="px-6 py-2 bg-[var(--color-belg-yellow)] text-black font-semibold hover:bg-[var(--color-belg-yellow)]/90 transition-colors duration-200"
                        >
                            Fermer
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
