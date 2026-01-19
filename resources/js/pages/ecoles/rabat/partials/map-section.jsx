export default function MapSection() {
    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Localisation
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                        Notre emplacement
                    </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Map */}
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105912.68137040957!2d-6.862579!3d33.94701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7137da71fa147%3A0x1f8d67a737a63770!2sEcole%20belge%20de%20Rabat!5e0!3m2!1sfr!2sus!4v1768820037898!5m2!1sfr!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        />
                    </div>

                    {/* Certificate */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                                Certification
                            </p>
                        </div>
                        <h3 className="mb-6 text-3xl font-bold text-belgBlack md:text-4xl">
                            Certificat Cambridge
                        </h3>
                        <div className="overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/assets/images/Cambridge Certificate 14614-1.webp"
                                alt="Certificat Cambridge"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
