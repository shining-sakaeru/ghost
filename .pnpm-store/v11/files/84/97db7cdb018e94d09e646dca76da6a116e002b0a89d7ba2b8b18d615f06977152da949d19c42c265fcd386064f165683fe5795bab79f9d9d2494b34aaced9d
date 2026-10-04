/* eslint-disable ghost/filenames/match-exported-class */
import { parseHTML } from 'linkedom';
// HTML5 void elements that should be self-closing
const VOID_ELEMENTS = new Set([
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
]);
/**
 * Parse HTML fragment without document wrapper
 */
export function parseFragment(html) {
    const { document } = parseHTML(`<!DOCTYPE html><html><body>${html || ''}</body></html>`);
    const body = document.body;
    return {
        document,
        body,
        $(selector, context = body) {
            return Array.from(context.querySelectorAll(selector));
        },
        html() {
            return serializeChildren(body);
        },
        text() {
            /* c8 ignore next -- defensive fallback for null textContent */
            return body.textContent || '';
        },
        close() {
            // No-op for linkedom (lightweight, no resources to release)
        }
    };
}
/**
 * Parse HTML, run a callback with the parsed fragment, then auto-close.
 */
export function processFragment(html, fn) {
    const parsed = parseFragment(html);
    try {
        return fn(parsed);
    }
    finally {
        parsed.close();
    }
}
/**
 * Async version of processFragment for callbacks that need to await.
 */
export async function processFragmentAsync(html, fn) {
    const parsed = parseFragment(html);
    try {
        return await fn(parsed);
    }
    finally {
        parsed.close();
    }
}
/**
 * Escape HTML attribute value
 */
function escapeAttr(value) {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
/**
 * Serialize an element to HTML5-compliant string
 * Handles void elements (self-closing) and non-void elements correctly
 */
export function serializeNode(node) {
    if (!node) {
        return '';
    }
    // Text node
    if (node.nodeType === 3) {
        /* c8 ignore next -- defensive fallback for null textContent */
        return (node.textContent || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\u00a0/g, '&nbsp;');
    }
    // Comment node
    if (node.nodeType === 8) {
        /* c8 ignore next -- defensive fallback for null comment data */
        return `<!--${node.data || ''}-->`;
    }
    // Element node
    if (node.nodeType === 1) {
        const element = node;
        const tagName = element.tagName.toLowerCase();
        let attrs = '';
        for (const attribute of element.attributes) {
            if (attribute.value === '') {
                attrs += ` ${attribute.name}`;
            }
            else {
                attrs += ` ${attribute.name}="${escapeAttr(attribute.value)}"`;
            }
        }
        // Void elements - self-closing
        if (VOID_ELEMENTS.has(tagName)) {
            return `<${tagName}${attrs}>`;
        }
        // Non-void elements - always have closing tag
        const children = serializeChildren(element);
        return `<${tagName}${attrs}>${children}</${tagName}>`;
    }
    // Document fragment
    if (node.nodeType === 11) {
        return serializeChildren(node);
    }
    return '';
}
/**
 * Serialize children of a node
 */
export function serializeChildren(node) {
    if (!node) {
        return '';
    }
    let html = '';
    for (const child of node.childNodes) {
        html += serializeNode(child);
    }
    return html;
}
/**
 * Parse an HTML string into a DocumentFragment
 */
function htmlToFragment(doc, html) {
    const temp = doc.createElement('template');
    temp.innerHTML = html;
    const fragment = doc.createDocumentFragment();
    for (const child of Array.from(temp.content.childNodes)) {
        fragment.appendChild(child);
    }
    return fragment;
}
/**
 * Replace an element with new HTML content
 */
export function replaceWith(el, content) {
    if (!el || !el.parentNode) {
        return;
    }
    if (typeof content === 'string') {
        el.parentNode.replaceChild(htmlToFragment(el.ownerDocument, content), el);
    }
    else if (content && content.nodeType) {
        el.parentNode.replaceChild(content, el);
    }
}
/**
 * Insert content before an element
 */
export function insertBefore(el, content) {
    if (!el || !el.parentNode) {
        return;
    }
    if (typeof content === 'string') {
        el.parentNode.insertBefore(htmlToFragment(el.ownerDocument, content), el);
    }
    else if (content && content.nodeType) {
        el.parentNode.insertBefore(content, el);
    }
}
/**
 * Insert content after an element
 */
export function insertAfter(el, content) {
    if (!el || !el.parentNode) {
        return;
    }
    if (typeof content === 'string') {
        el.parentNode.insertBefore(htmlToFragment(el.ownerDocument, content), el.nextSibling);
    }
    else if (content && content.nodeType) {
        el.parentNode.insertBefore(content, el.nextSibling);
    }
}
/**
 * Wrap an element with a wrapper element
 */
export function wrap(el, wrapper) {
    if (!el || !el.parentNode) {
        return null;
    }
    let wrapperEl;
    if (typeof wrapper === 'string') {
        const temp = el.ownerDocument.createElement('template');
        temp.innerHTML = wrapper;
        wrapperEl = temp.content.firstElementChild;
    }
    else {
        wrapperEl = wrapper;
    }
    if (!wrapperEl) {
        return null;
    }
    el.parentNode.insertBefore(wrapperEl, el);
    wrapperEl.appendChild(el);
    return wrapperEl;
}
/**
 * Create an element with optional attributes
 */
export function createElement(document, tagName, attrs = {}) {
    const el = document.createElement(tagName);
    for (const [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, value);
    }
    return el;
}
/**
 * Get or set attribute value (returns empty string if not found, like Cheerio)
 */
export function attr(el, name, value) {
    if (!el) {
        return '';
    }
    if (value !== undefined) {
        el.setAttribute(name, value);
        return;
    }
    return el.getAttribute(name) || '';
}
/**
 * Check if element matches selector
 */
export function is(el, selector) {
    if (!el || typeof el.matches !== 'function') {
        return false;
    }
    return el.matches(selector);
}
/**
 * Get all parent elements matching selector
 */
export function parents(el, selector) {
    const result = [];
    let current = el ? el.parentElement : null;
    while (current) {
        if (!selector || current.matches(selector)) {
            result.push(current);
        }
        current = current.parentElement;
    }
    return result;
}
/**
 * Get the last (furthest) parent matching selector
 */
export function lastParent(el, selector) {
    const allParents = parents(el, selector);
    return allParents.length > 0 ? allParents[allParents.length - 1] : null;
}
/**
 * Set CSS style property on element
 */
export function setStyle(el, property, value) {
    if (!el || !el.style) {
        return;
    }
    el.style.setProperty(property, value);
}
/**
 * Check if a node is a comment node
 */
export function isComment(node) {
    return node !== null && node !== undefined && node.nodeType === 8;
}
/**
 * Get comment node data
 */
export function getCommentData(node) {
    if (isComment(node)) {
        return node.data || '';
    }
    return '';
}
