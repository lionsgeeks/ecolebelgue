<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class InstagramController extends Controller
{
    /**
     * Fetch Instagram posts using Instagram Graph API
     * 
     * Requires:
     * - Instagram Business Account
     * - Facebook App with Instagram Basic Display or Graph API
     * - Access Token in .env: INSTAGRAM_ACCESS_TOKEN
     * - Instagram User ID in .env: INSTAGRAM_USER_ID (optional, can use 'me')
     */
    public function getPosts(Request $request): JsonResponse
    {
        try {
            $accessToken = config('services.instagram.access_token');
            $userId = config('services.instagram.user_id', 'me');
            
            // If no access token configured, return placeholder data
            if (!$accessToken) {
                return $this->getPlaceholderData();
            }

            // Cache the response for 1 hour to avoid rate limiting
            $cacheKey = 'instagram_posts_' . $userId;
            
            return Cache::remember($cacheKey, 3600, function () use ($accessToken, $userId) {
                // Fetch media posts (includes images, videos, carousels)
                $mediaResponse = Http::get("https://graph.instagram.com/{$userId}/media", [
                    'fields' => 'id,media_type,media_url,permalink,caption,like_count,comments_count,timestamp,thumbnail_url',
                    'access_token' => $accessToken,
                    'limit' => 25, // Fetch more to combine with reels
                ]);

                // Fetch reels separately
                $reelsResponse = Http::get("https://graph.instagram.com/{$userId}/reels", [
                    'fields' => 'id,media_type,media_url,permalink,caption,like_count,comments_count,timestamp,thumbnail_url',
                    'access_token' => $accessToken,
                    'limit' => 25,
                ]);

                $allPosts = [];
                
                // Combine regular media and reels
                if ($mediaResponse->successful()) {
                    $mediaData = $mediaResponse->json();
                    $mediaPosts = $mediaData['data'] ?? [];
                    foreach ($mediaPosts as $post) {
                        $allPosts[] = $post;
                    }
                }
                
                if ($reelsResponse->successful()) {
                    $reelsData = $reelsResponse->json();
                    $reels = $reelsData['data'] ?? [];
                    foreach ($reels as $reel) {
                        // Mark as REELS type
                        $reel['media_type'] = 'REELS';
                        $allPosts[] = $reel;
                    }
                }

                if (empty($allPosts)) {
                    Log::error('Instagram API Error', [
                        'media_status' => $mediaResponse->status(),
                        'reels_status' => $reelsResponse->status(),
                    ]);
                    return $this->getPlaceholderData();
                }

                // Sort by timestamp (newest first) and take latest 9
                usort($allPosts, function ($a, $b) {
                    $timeA = strtotime($a['timestamp'] ?? '0');
                    $timeB = strtotime($b['timestamp'] ?? '0');
                    return $timeB - $timeA;
                });
                
                $posts = array_slice($allPosts, 0, 9);

                // Fetch profile information
                $profileResponse = Http::get("https://graph.instagram.com/{$userId}", [
                    'fields' => 'username,account_type,media_count',
                    'access_token' => $accessToken,
                ]);

                $profileData = $profileResponse->json();
                
                // Get followers count (requires Instagram Graph API with permissions)
                $insightsResponse = Http::get("https://graph.instagram.com/{$userId}/insights", [
                    'metric' => 'follower_count',
                    'period' => 'lifetime',
                    'access_token' => $accessToken,
                ]);

                $followersCount = 0;
                if ($insightsResponse->successful()) {
                    $insightsData = $insightsResponse->json();
                    $followersCount = $insightsData['data'][0]['values'][0]['value'] ?? 0;
                }

                // Format posts data and handle different media types
                $formattedPosts = array_map(function ($post) use ($accessToken) {
                    $mediaType = $post['media_type'] ?? 'IMAGE';
                    $mediaUrl = $post['media_url'] ?? $post['thumbnail_url'] ?? '';
                    
                    // For CAROUSEL_ALBUM, get the first child media
                    if ($mediaType === 'CAROUSEL_ALBUM') {
                        $childrenResponse = Http::get("https://graph.instagram.com/{$post['id']}/children", [
                            'fields' => 'media_url,media_type,thumbnail_url',
                            'access_token' => $accessToken,
                        ]);
                        
                        if ($childrenResponse->successful()) {
                            $childrenData = $childrenResponse->json();
                            $firstChild = $childrenData['data'][0] ?? null;
                            if ($firstChild) {
                                $mediaUrl = $firstChild['media_url'] ?? $firstChild['thumbnail_url'] ?? $mediaUrl;
                                $mediaType = $firstChild['media_type'] ?? $mediaType;
                            }
                        }
                    }
                    
                    return [
                        'id' => $post['id'],
                        'media_url' => $mediaUrl,
                        'media_type' => $mediaType,
                        'permalink' => $post['permalink'] ?? '',
                        'caption' => $this->extractCaption($post['caption'] ?? ''),
                        'like_count' => $post['like_count'] ?? 0,
                        'comments_count' => $post['comments_count'] ?? 0,
                        'timestamp' => $post['timestamp'] ?? '',
                    ];
                }, $posts);
                
                // Limit to 9 posts
                $formattedPosts = array_slice($formattedPosts, 0, 9);

                $profile = [
                    'username' => $profileData['username'] ?? 'ecolesbelgesaumaroc',
                    'followers_count' => $followersCount,
                    'media_count' => $profileData['media_count'] ?? count($posts),
                ];

                return response()->json([
                    'posts' => $formattedPosts,
                    'profile' => $profile,
                ]);
            });
            
        } catch (\Exception $e) {
            Log::error('Instagram API Exception', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);
            
            return $this->getPlaceholderData();
        }
    }

    /**
     * Extract clean caption text (remove hashtags if needed, limit length)
     */
    private function extractCaption(string $caption, int $maxLength = 100): string
    {
        if (empty($caption)) {
            return '';
        }

        // Remove excessive hashtags and mentions for cleaner display
        $caption = preg_replace('/#\w+/', '', $caption);
        $caption = trim($caption);

        if (strlen($caption) > $maxLength) {
            return substr($caption, 0, $maxLength) . '...';
        }

        return $caption;
    }

    /**
     * Return empty data when API is not configured or fails
     * This ensures only real Instagram images are shown
     */
    private function getPlaceholderData(): JsonResponse
    {
        // Return empty posts array - real Instagram images will be shown when API is configured
        $profile = [
            'username' => 'ecolesbelgesaumaroc',
            'followers_count' => 3931,
            'media_count' => 357,
        ];

        return response()->json([
            'posts' => [],
            'profile' => $profile,
        ]);
    }
}
