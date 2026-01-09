export default function GallerySection() {
    const images = [
        {
            src: '/assets/images/casa/EBM-C_0013_1_cropped.jpg',
            alt: 'Vue extérieure du campus',
        },
        {
            src: '/assets/images/casa/EBM-C_0053_1_cropped.jpg',
            alt: 'Bâtiment principal',
        },
        {
            src: '/assets/images/casa/EBM-C_0012_1_cropped.jpg',
            alt: 'Bibliothèque et espaces d\'étude',
        },
        {
            src: '/assets/images/casa/EBM-C_0005_1_cropped.jpg',
            alt: 'Salle de classe',
        },
        {
            src: '/assets/images/casa/EBM-C_0007_1_cropped.jpg',
            alt: 'Gymnase et installations sportives',
        },
        {
            src: '/assets/images/casa/EBM-C_0010_1_cropped.jpg',
            alt: 'Événements et cérémonies',
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Découvrir
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl">
                        Galerie du campus
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

