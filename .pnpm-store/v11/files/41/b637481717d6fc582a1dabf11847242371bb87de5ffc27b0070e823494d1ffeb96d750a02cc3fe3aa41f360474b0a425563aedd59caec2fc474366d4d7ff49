import type { ExportDOMOutput } from '../export-dom.js';
export declare const ALL_MEMBERS_SEGMENT = "status:free,status:-free";
export declare const PAID_MEMBERS_SEGMENT = "status:-free";
export declare const FREE_MEMBERS_SEGMENT = "status:free";
export declare const NO_MEMBERS_SEGMENT = "";
declare const DEFAULT_VISIBILITY: {
    web: {
        nonMember: boolean;
        memberSegment: string;
    };
    email: {
        memberSegment: string;
    };
};
export declare function buildDefaultVisibility(): typeof DEFAULT_VISIBILITY;
export interface Visibility {
    web?: {
        nonMember?: boolean;
        memberSegment?: string;
    };
    email?: {
        memberSegment?: string;
    };
    showOnEmail?: boolean;
    showOnWeb?: boolean;
    emailOnly?: boolean;
    segment?: string;
    [key: string]: unknown;
}
export declare function isOldVisibilityFormat(visibility: Visibility): boolean;
export declare function isVisibilityRestricted(visibility: Visibility): boolean;
export declare function migrateOldVisibilityFormat(visibility: Visibility): any;
export declare function renderWithVisibility(originalRenderOutput: ExportDOMOutput, visibility: Visibility | undefined, options: {
    target?: string;
}): ExportDOMOutput;
export {};
//# sourceMappingURL=visibility.d.ts.map