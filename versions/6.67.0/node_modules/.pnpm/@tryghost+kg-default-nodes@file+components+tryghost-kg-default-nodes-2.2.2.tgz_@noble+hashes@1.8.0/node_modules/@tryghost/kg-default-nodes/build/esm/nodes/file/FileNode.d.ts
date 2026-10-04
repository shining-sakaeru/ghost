import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const fileProperties: {
    src: {
        default: string;
        urlType: string;
    };
    fileTitle: {
        default: string;
        wordCount: true;
    };
    fileCaption: {
        default: string;
        wordCount: true;
    };
    fileName: {
        default: string;
    };
    fileSize: {
        default: number;
    };
};
export type FileData = DecoratorNodeData<typeof fileProperties>;
declare const FileNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    src: string;
    fileTitle: string;
    fileCaption: string;
    fileName: string;
    fileSize: number;
}, {
    element: HTMLDivElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class FileNode extends FileNode_base {
    exportJSON(): {
        type: 'file';
        version: number;
        src: string;
        fileTitle: string;
        fileCaption: string;
        fileName: string;
        fileSize: number;
    };
    static importDOM(): {
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
    get formattedFileSize(): string;
}
export declare function $isFileNode(node: unknown): node is FileNode;
export declare const $createFileNode: (dataset?: FileData) => FileNode;
export {};
//# sourceMappingURL=FileNode.d.ts.map