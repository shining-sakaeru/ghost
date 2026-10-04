import type { ExportDOMOptions } from '../../export-dom.js';
import { type Visibility } from '../../utils/visibility.js';
interface CTADataset {
    layout: string;
    alignment: string;
    textValue: string;
    showButton: boolean;
    showDividers: boolean;
    buttonText: string;
    buttonUrl: string;
    buttonColor: string;
    buttonTextColor: string;
    hasSponsorLabel: boolean;
    backgroundColor: string;
    sponsorLabel: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    linkColor: string;
}
interface CTARenderOptions extends ExportDOMOptions {
    design?: {
        buttonStyle?: 'fill' | 'outline';
        backgroundIsDark?: boolean;
    };
    imageOptimization?: {
        internalImageSizes?: Record<string, {
            width: number;
            height: number;
        }>;
    };
}
interface CTANodeData extends CTADataset {
    visibility?: Visibility;
}
export declare function renderCallToActionNode(node: CTANodeData, options?: CTARenderOptions): import("../../export-dom.js").ExportDOMOutput;
export {};
//# sourceMappingURL=calltoaction-renderer.d.ts.map