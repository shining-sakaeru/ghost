/**
 * Check if a string is a valid HTTP or HTTPS URL.
 *
 * @param url - URL to validate
 * @returns True if URL is valid and uses http/https protocol
 */
export declare const isValid: (url?: string) => boolean;
/**
 * Extract the domain from a URL, stripping the www. prefix.
 *
 * @param url - Full URL
 * @returns Domain without www.
 */
export declare const getDomain: (url: string) => string;
