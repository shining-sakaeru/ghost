interface BookmarkMetadata {
    icon?: string;
    title?: string;
    description?: string;
    author?: string;
    publisher?: string;
    thumbnail?: string;
}
export interface BookmarkData {
    url?: string;
    metadata?: BookmarkMetadata;
    caption?: string;
}
declare const BookmarkNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    title: string;
    description: string;
    url: string;
    caption: string;
    author: string;
    publisher: string;
    icon: string;
    thumbnail: string;
}, {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class BookmarkNode extends BookmarkNode_base {
    static importDOM(): {
        figure: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
    constructor({ url, metadata, caption }?: BookmarkData, key?: string);
    getDataset(): Record<string, unknown>;
    static importJSON(serializedNode: Record<string, unknown>): BookmarkNode;
    exportJSON(): {
        type: string;
        version: number;
        url: string;
        metadata: {
            icon: string;
            title: string;
            description: string;
            author: string;
            publisher: string;
            thumbnail: string;
        };
        caption: string;
    };
    isEmpty(): boolean;
}
export declare const $createBookmarkNode: (dataset?: BookmarkData) => BookmarkNode;
export declare function $isBookmarkNode(node: unknown): node is BookmarkNode;
export {};
//# sourceMappingURL=BookmarkNode.d.ts.map