import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InstagramSection() {
    const [posts, setPosts] = useState([]);
    const [profileInfo, setProfileInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await fetch('/api/instagram/posts');
                
                if (response.ok) {
                    const data = await response.json();
                    setPosts((data.posts || []).slice(0, 9));
                    setProfileInfo(data.profile || null);
                } else {
                    loadPlaceholderPosts();
                }
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
                loadPlaceholderPosts();
            } finally {
                setLoading(false);
            }
        };

        const loadPlaceholderPosts = () => {
            const imageSources = [
                '/assets/images/home/casa1.JPG',
                '/assets/images/home/casa2.JPG',
                '/assets/images/home/rabat1.JPG',
                '/assets/images/home/rabat2.JPG',
            ];
            
            const placeholderPosts = Array.from({ length: 9 }, (_, i) => ({
                id: i + 1,
                media_url: imageSources[i % imageSources.length],
                media_type: 'IMAGE',
                permalink: 'https://www.instagram.com/ecolesbelgesaumaroc/',
                caption: 'École belge',
                like_count: 0,
                comments_count: 0,
            }));
            
            setPosts(placeholderPosts);
            setProfileInfo({
                username: 'ecolesbelgesaumaroc',
                followers_count: 3931,
                media_count: 357,
            });
        };

        fetchInstagramPosts();
    }, []);

    return (
        <section className="bg-gray-50 py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                {/* Profile Header */}
                <div className="mb-12 flex flex-col items-center gap-6 border-b-2 border-belgBlack pb-8 md:flex-row md:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-belgBlack bg-belgYellow">
                            <Instagram className="h-10 w-10 text-belgBlack" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-belgBlack md:text-4xl">
                                @ecolesbelgesaumaroc
                            </h2>
                            <p className="text-gray-600">
                                Écoles Belges au Maroc
                            </p>
                        </div>
                    </div>
                    
                    {profileInfo && (
                        <div className="flex gap-8 text-center">
                            <div>
                                <div className="text-2xl font-bold text-belgBlack">
                                    {profileInfo.followers_count?.toLocaleString() || '3,931'}
                                </div>
                                <div className="text-sm text-gray-600">followers</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-belgBlack">
                                    {profileInfo.media_count?.toLocaleString() || '357'}
                                </div>
                                <div className="text-sm text-gray-600">posts</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Posts Grid */}
                {loading ? (
                    <div className="grid grid-cols-3 gap-4">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="aspect-square animate-pulse bg-gray-200" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {posts.map((post) => (
                            <a
                                key={post.id}
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-square overflow-hidden bg-gray-200"
                            >
                                <img
                                    src={post.media_url}
                                    alt={post.caption || 'Instagram post'}
                                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                                    loading="lazy"
                                />
                                {(post.media_type === 'VIDEO' || post.media_type === 'REELS') && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                        <div className="rounded-full bg-black/60 p-3">
                                            <Heart className="h-6 w-6 fill-white text-white" />
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-0 flex items-center justify-center gap-6 bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                                    <div className="flex items-center gap-2 text-white">
                                        <Heart className="h-5 w-5 fill-white" />
                                        <span className="font-semibold">
                                            {post.like_count?.toLocaleString() || '0'}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white">
                                        <MessageCircle className="h-5 w-5 fill-white" />
                                        <span className="font-semibold">
                                            {post.comments_count?.toLocaleString() || '0'}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {/* Link to Profile */}
                <div className="mt-12 text-center">
                    <a
                        href="https://www.instagram.com/ecolesbelgesaumaroc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-belgBlack bg-white px-8 py-4 font-semibold text-belgBlack transition-colors hover:bg-belgYellow hover:border-belgYellow"
                    >
                        Voir le profil complet sur Instagram
                        <ExternalLink className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
