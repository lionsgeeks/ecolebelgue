import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function SectionBlock({
    title,
    content,
    image,
    imagePosition = 'left',
}) {
    const [imageError, setImageError] = useState(false);

    return (
        <section className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div
                className={`grid gap-8 md:grid-cols-2 ${
                    imagePosition === 'right' ? 'md:grid-flow-dense' : ''
                }`}
            >
                {/* Image */}
                {image && (
                    <div
                        className={`relative overflow-hidden rounded-xl ${
                            imagePosition === 'right' ? 'md:col-start-2' : ''
                        }`}
                    >
                        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-belgYellow/20 to-belgRed/20">
                            {!imageError ? (
                                <img
                                    src={image}
                                    alt={title}
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center">
                                    <MapPin className="h-16 w-16 text-gray-400" />
                                </div>
                            )}
                            {/* Belgian Colors Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-belgBlack/10 via-transparent to-belgRed/10"></div>
                        </div>
                    </div>
                )}

                {/* Content */}
                <div
                    className={`space-y-4 ${
                        imagePosition === 'right' ? 'md:col-start-1 md:row-start-1' : ''
                    }`}
                >
                    <h2 className="border-b-4 border-belgYellow pb-4 text-3xl font-bold text-belgBlack">
                        {title}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700">
                        {content}
                    </div>
                </div>
            </div>
        </section>
    );
}

