export interface ParsedFragment {
    document: Document;
    body: HTMLElement;
    $(selector: string, context?: Element): Element[];
    html(): string;
    text(): string;
    close(): void;
}
/**
 * Parse HTML fragment without document wrapper
 */
export declare function parseFragment(html: string | null): ParsedFragment;
/**
 * Parse HTML, run a callback with the parsed fragment, then auto-close.
 */
export declare function processFragment<T>(html: string | null, fn: (parsed: ParsedFragment) => T): T;
/**
 * Async version of processFragment for callbacks that need to await.
 */
export declare function processFragmentAsync<T>(html: string | null, fn: (parsed: ParsedFragment) => Promise<T>): Promise<T>;
/**
 * Serialize an element to HTML5-compliant string
 * Handles void elements (self-closing) and non-void elements correctly
 */
export declare function serializeNode(node: Node | null): string;
/**
 * Serialize children of a node
 */
export declare function serializeChildren(node: Node | null): string;
/**
 * Replace an element with new HTML content
 */
export declare function replaceWith(el: Element | null, content: string | Node): void;
/**
 * Insert content before an element
 */
export declare function insertBefore(el: Element | null, content: string | Node): void;
/**
 * Insert content after an element
 */
export declare function insertAfter(el: Element | null, content: string | Node): void;
/**
 * Wrap an element with a wrapper element
 */
export declare function wrap(el: Element | null, wrapper: string | Element): Element | null;
/**
 * Create an element with optional attributes
 */
export declare function createElement(document: Document, tagName: string, attrs?: Record<string, string>): Element;
/**
 * Get or set attribute value (returns empty string if not found, like Cheerio)
 */
export declare function attr(el: Element | null, name: string, value?: string): string | undefined;
/**
 * Check if element matches selector
 */
export declare function is(el: Element | null, selector: string): boolean;
/**
 * Get all parent elements matching selector
 */
export declare function parents(el: Element | null, selector?: string): Element[];
/**
 * Get the last (furthest) parent matching selector
 */
export declare function lastParent(el: Element | null, selector: string): Element | null;
/**
 * Set CSS style property on element
 */
export declare function setStyle(el: HTMLElement | null, property: string, value: string): void;
/**
 * Check if a node is a comment node
 */
export declare function isComment(node: Node | null | undefined): boolean;
/**
 * Get comment node data
 */
export declare function getCommentData(node: Node | null): string;
