export interface FactoryOptions {
    siteUrl?: string;
    [key: string]: unknown;
}
export interface CardPayload {
    [key: string]: unknown;
}
export interface CardTransformOptions {
    assetsOnly?: boolean;
    siteUrl?: string;
    [key: string]: unknown;
}
export interface DomNode {
    nodeType?: number;
    nodeValue?: string;
    appendChild?(child: unknown): void;
    [key: string]: unknown;
}
export interface DomProvider {
    createComment(text: string): DomNode;
    createDocumentFragment(): DomNode;
    createElement?(tag: string): DomNode;
    createTextNode?(text: string): DomNode;
    [key: string]: unknown;
}
export interface CardRenderEnv {
    dom: DomProvider;
    [key: string]: unknown;
}
export interface CardRenderArgs {
    env: CardRenderEnv;
    payload: CardPayload;
    options?: Record<string, unknown>;
}
export interface CardDefinition {
    name: string;
    type: string;
    config?: {
        commentWrapper?: boolean;
    };
    render(args: CardRenderArgs): DomNode;
    absoluteToRelative?(payload: CardPayload, options: CardTransformOptions): CardPayload;
    relativeToAbsolute?(payload: CardPayload, options: CardTransformOptions): CardPayload;
    toTransformReady?(payload: CardPayload, options: CardTransformOptions): CardPayload;
}
export declare class CardFactory {
    factoryOptions: FactoryOptions;
    constructor(options?: FactoryOptions);
    createCard(card: CardDefinition): {
        name: string;
        type: string;
        factoryOptions: FactoryOptions;
        render({ env, payload, options }: CardRenderArgs): DomNode;
        absoluteToRelative(payload: CardPayload, _options?: CardTransformOptions): CardPayload;
        relativeToAbsolute(payload: CardPayload, _options?: CardTransformOptions): CardPayload;
        toTransformReady(payload: CardPayload, _options?: CardTransformOptions): CardPayload;
    };
}
//# sourceMappingURL=CardFactory.d.ts.map