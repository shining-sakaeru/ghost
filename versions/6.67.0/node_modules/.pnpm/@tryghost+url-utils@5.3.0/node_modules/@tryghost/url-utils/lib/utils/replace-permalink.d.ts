interface PermalinkResource {
    published_at?: string | number | Date | null;
    primary_author?: {
        slug: string;
    } | null;
    primary_tag?: {
        slug: string;
    } | null;
    slug: string;
    id: string;
}
/**
 * creates the url path for a post based on blog timezone and permalink pattern
 */
declare function replacePermalink(permalink: string, resource: PermalinkResource, timezone?: string): string;
export default replacePermalink;
