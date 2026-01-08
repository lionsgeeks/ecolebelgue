export default function VideoSection() {
    const videos = [
        {
            title: 'Jad nous explique le fonctionnement des écoles belges au Maroc',
            youtubeId: 'BCeAnWl4b_8',
        },
        {
            title: 'Jad vous guide pour découvrir l\'école du dehors de Casablanca',
            youtubeId: 'KdE5q6_kTSk',
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="mb-20">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Vidéos
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                        Tout savoir sur l'école belge
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {videos.map((video, index) => (
                        <div key={index} className="space-y-4">
                            <div className="relative aspect-video w-full overflow-hidden  bg-gray-100">
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1&playsinline=1`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="h-full w-full"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-xl font-bold leading-tight text-belgBlack md:text-2xl">
                                {video.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
