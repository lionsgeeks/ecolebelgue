import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function SchoolLocation({ data }) {
    const [imageError, setImageError] = useState(false);

    const accentColors = {
        blue: {
            bg: 'bg-blue-50',
            border: 'border-blue-100',
            text: 'text-blue-600',
            hover: 'hover:bg-blue-100',
        },
        orange: {
            bg: 'bg-orange-50',
            border: 'border-orange-100',
            text: 'text-orange-600',
            hover: 'hover:bg-orange-100',
        },
    };

    const colors = accentColors[data.accentColor] || accentColors.blue;

    return (
        <div className="group flex flex-col overflow-hidden rounded-none border border-gray-200 bg-white transition-shadow hover:shadow-xl">
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {!imageError && data.image ? (
                    <img
                        src={data.image}
                        alt={`École de ${data.name}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                        <MapPin className="h-16 w-16 text-gray-300" />
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-8">
                {/* Title */}
                <h2 className="mb-6 text-3xl font-light tracking-tight text-gray-900">
                    {data.name}
                </h2>

                {/* Address */}
                <div className="mb-8 border-l-2 border-gray-200 pl-4">
                    <p className="text-sm leading-relaxed text-gray-600">
                        {data.address}
                    </p>
                </div>

                {/* Contact Info */}
                <div className="mb-8 space-y-6">
                    {/* Emails */}
                    <div>
                        {data.emails.map((emailItem, index) => (
                            <a
                                key={index}
                                href={`mailto:${emailItem.email}`}
                                className="group mb-3 flex items-center justify-between border-b border-gray-100 py-3 text-sm transition-colors hover:border-gray-200"
                            >
                                <div className="flex items-center space-x-3">
                                    <div
                                        className={`flex h-8 w-8 items-center justify-center rounded-full ${colors.bg} transition-colors ${colors.hover}`}
                                    >
                                        <Mail className={`h-4 w-4 ${colors.text}`} />
                                    </div>
                                    <div>
                                        {emailItem.label && (
                                            <p className="text-xs text-gray-500">
                                                {emailItem.label}
                                            </p>
                                        )}
                                        <p className="font-medium text-gray-900">
                                            {emailItem.email}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400 transition-opacity group-hover:text-gray-600">
                                    →
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Phones */}
                    <div>
                        {data.phones.map((phoneItem, index) => (
                            <div
                                key={index}
                                className="mb-3 flex items-center justify-between border-b border-gray-100 py-3 text-sm"
                            >
                                <div className="flex items-center space-x-3">
                                    <div
                                        className={`flex h-8 w-8 items-center justify-center rounded-full ${colors.bg}`}
                                    >
                                        <Phone className={`h-4 w-4 ${colors.text}`} />
                                    </div>
                                    <div>
                                        {phoneItem.label && (
                                            <p className="text-xs text-gray-500">
                                                {phoneItem.label}
                                            </p>
                                        )}
                                        <a
                                            href={`tel:${(phoneItem.number || phoneItem.numbers || '').replace(/\s/g, '')}`}
                                            className="font-medium text-gray-900 transition-colors hover:text-gray-600"
                                        >
                                            {phoneItem.number || phoneItem.numbers}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map */}
                <div className="mt-auto">
                    <div className="relative aspect-video overflow-hidden border border-gray-200">
                        <iframe
                            src={data.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 h-full w-full"
                            title={`Carte - École de ${data.name}`}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
