export interface EmailButtonOptions {
    /** The URL the button links to */
    url?: string;
    /** The text displayed on the button */
    text?: string;
    /** The alignment of the button */
    alignment?: string;
    /** The width of the button */
    buttonWidth?: string;
    /** The color of the button, no color defaults to newsletter button color setting */
    color?: string;
    /** The style of the button */
    style?: 'fill' | 'outline';
}
export declare function renderEmailButton(buttonOptions?: EmailButtonOptions): string;
//# sourceMappingURL=email-button.d.ts.map