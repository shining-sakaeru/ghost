export type { GeneratedDecoratorNode } from './generate-decorator-node.js';
export * from './export-dom.js';
import * as image from './nodes/image/ImageNode.js';
import * as codeblock from './nodes/codeblock/CodeBlockNode.js';
import * as markdown from './nodes/markdown/MarkdownNode.js';
import * as video from './nodes/video/VideoNode.js';
import * as audio from './nodes/audio/AudioNode.js';
import * as callout from './nodes/callout/CalloutNode.js';
import * as callToAction from './nodes/call-to-action/CallToActionNode.js';
import * as aside from './nodes/aside/AsideNode.js';
import * as horizontalrule from './nodes/horizontalrule/HorizontalRuleNode.js';
import * as html from './nodes/html/HtmlNode.js';
import * as toggle from './nodes/toggle/ToggleNode.js';
import * as button from './nodes/button/ButtonNode.js';
import * as bookmark from './nodes/bookmark/BookmarkNode.js';
import * as file from './nodes/file/FileNode.js';
import * as header from './nodes/header/HeaderNode.js';
import * as paywall from './nodes/paywall/PaywallNode.js';
import * as product from './nodes/product/ProductNode.js';
import * as embed from './nodes/embed/EmbedNode.js';
import * as email from './nodes/email/EmailNode.js';
import * as gallery from './nodes/gallery/GalleryNode.js';
import * as emailCta from './nodes/email-cta/EmailCtaNode.js';
import * as signup from './nodes/signup/SignupNode.js';
import * as transistor from './nodes/transistor/TransistorNode.js';
import * as textnode from './nodes/ExtendedTextNode.js';
import * as headingnode from './nodes/ExtendedHeadingNode.js';
import * as quotenode from './nodes/ExtendedQuoteNode.js';
import * as tk from './nodes/TKNode.js';
import * as atLink from './nodes/at-link/index.js';
import * as zwnj from './nodes/zwnj/ZWNJNode.js';
export * from './KoenigDecoratorNode.js';
export * from './nodes/image/ImageNode.js';
export * from './nodes/codeblock/CodeBlockNode.js';
export * from './nodes/markdown/MarkdownNode.js';
export * from './nodes/video/VideoNode.js';
export * from './nodes/audio/AudioNode.js';
export * from './nodes/callout/CalloutNode.js';
export * from './nodes/aside/AsideNode.js';
export * from './nodes/horizontalrule/HorizontalRuleNode.js';
export * from './nodes/html/HtmlNode.js';
export * from './nodes/toggle/ToggleNode.js';
export * from './nodes/button/ButtonNode.js';
export * from './nodes/bookmark/BookmarkNode.js';
export * from './nodes/file/FileNode.js';
export * from './nodes/header/HeaderNode.js';
export * from './nodes/paywall/PaywallNode.js';
export * from './nodes/product/ProductNode.js';
export * from './nodes/embed/EmbedNode.js';
export * from './nodes/email/EmailNode.js';
export * from './nodes/gallery/GalleryNode.js';
export * from './nodes/email-cta/EmailCtaNode.js';
export * from './nodes/signup/SignupNode.js';
export * from './nodes/transistor/TransistorNode.js';
export * from './nodes/call-to-action/CallToActionNode.js';
export * from './nodes/ExtendedTextNode.js';
export * from './nodes/ExtendedHeadingNode.js';
export * from './nodes/ExtendedQuoteNode.js';
export * from './nodes/TKNode.js';
export * from './nodes/at-link/index.js';
export * from './nodes/zwnj/ZWNJNode.js';
export * from './utils/card-widths.js';
import * as visibilityUtils from './utils/visibility.js';
import * as taggedTemplateFns from './utils/tagged-template-fns.js';
import * as replacementStrings from './utils/replacement-strings.js';
import { generateDecoratorNode } from './generate-decorator-node.js';
import { rgbToHex } from './utils/rgb-to-hex.js';
export declare const utils: {
    generateDecoratorNode: typeof generateDecoratorNode;
    visibility: typeof visibilityUtils;
    rgbToHex: typeof rgbToHex;
    taggedTemplateFns: typeof taggedTemplateFns;
    replacementStrings: typeof replacementStrings;
};
export declare const serializers: {
    linebreak: {
        import: {
            br: (node: HTMLElement) => {
                conversion: () => null;
                priority: number;
            } | null;
        };
    };
    paragraph: {
        import: {
            p: (node: HTMLElement) => {
                conversion: () => null;
                priority: number;
            } | null;
        };
    };
};
export declare const DEFAULT_CONFIG: {
    html: {
        import: {
            br: (node: HTMLElement) => {
                conversion: () => null;
                priority: number;
            } | null;
            p: (node: HTMLElement) => {
                conversion: () => null;
                priority: number;
            } | null;
        };
    };
};
export declare const DEFAULT_NODES: (typeof image.ImageNode | typeof codeblock.CodeBlockNode | typeof markdown.MarkdownNode | typeof video.VideoNode | typeof audio.AudioNode | typeof callout.CalloutNode | typeof callToAction.CallToActionNode | typeof aside.AsideNode | typeof horizontalrule.HorizontalRuleNode | typeof html.HtmlNode | typeof toggle.ToggleNode | typeof button.ButtonNode | typeof bookmark.BookmarkNode | typeof file.FileNode | typeof header.HeaderNode | typeof paywall.PaywallNode | typeof product.ProductNode | typeof embed.EmbedNode | typeof email.EmailNode | typeof gallery.GalleryNode | typeof emailCta.EmailCtaNode | typeof signup.SignupNode | typeof transistor.TransistorNode | {
    replace: typeof import("lexical/index.js").TextNode;
    with: (node: import("lexical/index.js").TextNode) => textnode.ExtendedTextNode;
} | typeof textnode.ExtendedTextNode | {
    replace: typeof import("@lexical/rich-text/index.js").HeadingNode;
    with: (node: import("@lexical/rich-text/index.js").HeadingNode) => headingnode.ExtendedHeadingNode;
} | typeof headingnode.ExtendedHeadingNode | {
    replace: typeof import("@lexical/rich-text/index.js").QuoteNode;
    with: () => quotenode.ExtendedQuoteNode;
} | typeof quotenode.ExtendedQuoteNode | typeof tk.TKNode | typeof atLink.AtLinkNode | typeof atLink.AtLinkSearchNode | typeof zwnj.ZWNJNode)[];
//# sourceMappingURL=kg-default-nodes.d.ts.map