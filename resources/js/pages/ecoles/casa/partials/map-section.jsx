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

                <div className="overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26611.10506027588!2d-7.791316999999999!3d33.517293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda8802f5a91827f%3A0x5d3eb8015090fe93!2sEBM%20%C3%A9tablissements%20scolaires%20Belges%20au%20Maroc!5e0!3m2!1sfr!2sus!4v1768819994101!5m2!1sfr!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}
