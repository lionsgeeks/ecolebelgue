import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function SchoolCard({ data }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                {!imageError && data.image ? (
                    <img
                        src={data.image}
                        alt={`École de ${data.name}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <MapPin className="h-20 w-20 text-gray-400" />
                    </div>
                )}
                {/* Belgian Colors Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-belgBlack/20 via-transparent to-belgRed/20"></div>
                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <h2 className="text-3xl font-bold text-white">
                        {data.name}
                    </h2>
                </div>
            </div>

            {/* Content */}
            <div className="p-8">
                {/* Address */}
                <div className="mb-6 flex items-start space-x-3 rounded-lg border-l-4 border-belgYellow bg-belgYellow/5 p-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-belgBlack" />
                    <p className="text-sm leading-relaxed text-gray-700">
                        {data.address}
                    </p>
                </div>

                {/* Emails */}
                <div className="mb-6 space-y-3">
                    {data.emails.map((emailItem, index) => (
                        <a
                            key={index}
                            href={`mailto:${emailItem.email}`}
                            className="group flex items-center justify-between rounded-xl border-2 border-belgYellow bg-belgYellow px-5 py-4 text-belgBlack transition-all hover:scale-[1.02] hover:shadow-lg"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-belgBlack/10">
                                    <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                                </div>
                                <div>
                                    {emailItem.label && (
                                        <p className="text-xs font-medium opacity-80">
                                            {emailItem.label}
                                        </p>
                                    )}
                                    <p className="font-bold">
                                        {emailItem.email}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Phones */}
                <div className="mb-6 space-y-3">
                    {data.phones.map((phoneItem, index) => (
                        <div
                            key={index}
                            className="flex items-start space-x-3 rounded-lg border-l-4 border-belgRed bg-belgRed/5 p-4"
                        >
                            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-belgRed" />
                            <div className="flex-1">
                                {phoneItem.label && (
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        {phoneItem.label}
                                    </p>
                                )}
                                <a
                                    href={`tel:${(phoneItem.number || phoneItem.numbers || '').replace(/\s/g, '')}`}
                                    className="font-semibold text-gray-900 transition-colors hover:text-belgRed"
                                >
                                    {phoneItem.number || phoneItem.numbers}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map */}
                <div className="overflow-hidden rounded-xl border-4 border-belgBlack shadow-lg">
                    {/* Belgian Flag Borders */}
                    <div className="flex h-2">
                        <div className="flex-1 bg-belgBlack"></div>
                        <div className="flex-1 bg-belgYellow"></div>
                        <div className="flex-1 bg-belgRed"></div>
                    </div>
                    <iframe
                        src={data.mapEmbedUrl}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-64 w-full"
                        title={`Carte - École de ${data.name}`}
                    ></iframe>
                    <div className="flex h-2">
                        <div className="flex-1 bg-belgBlack"></div>
                        <div className="flex-1 bg-belgYellow"></div>
                        <div className="flex-1 bg-belgRed"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

