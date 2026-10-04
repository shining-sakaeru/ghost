interface TweetPublicMetrics {
    retweet_count: number;
    like_count: number;
}
interface TweetEntities {
    mentions?: TwitterEntity[];
    urls?: TwitterEntity[];
    hashtags?: TwitterEntity[];
}
interface TweetAttachments {
    media_keys?: string[];
    poll_ids?: string[];
}
interface TweetIncludes {
    media: Array<{
        preview_image_url?: string;
        url?: string;
    }>;
}
interface TweetData {
    id?: string;
    text?: string;
    created_at?: string;
    author_id?: string;
    public_metrics?: TweetPublicMetrics;
    users?: TwitterUser[];
    entities?: TweetEntities;
    attachments?: TweetAttachments;
    includes?: TweetIncludes;
    [key: string]: unknown;
}
interface TwitterNode {
    html: string;
    caption?: string;
    metadata?: {
        tweet_data?: TweetData;
    };
}
interface TwitterUser {
    id: string;
    name?: string;
    username?: string;
    profile_image_url?: string;
}
interface TwitterEntity {
    start: number;
    end: number;
    url?: string;
    display_url?: string;
    username?: string;
    tag?: string;
}
export default function render(node: TwitterNode, document: Document, options: Record<string, unknown>): {
    element: HTMLElement;
    type: 'outer';
};
export {};
//# sourceMappingURL=twitter.d.ts.map