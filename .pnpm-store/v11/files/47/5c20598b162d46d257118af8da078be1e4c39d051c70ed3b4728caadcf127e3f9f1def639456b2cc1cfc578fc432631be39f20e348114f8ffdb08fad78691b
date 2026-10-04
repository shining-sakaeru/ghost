type SerializableNode = {
    readonly nodeType: number;
    readonly nodeName: string;
    readonly nodeValue: string | null;
    readonly nextSibling: SerializableNode | null;
    readonly firstChild: SerializableNode | null;
};
type Card = {
    name: string;
    render: (args: unknown) => SerializableNode;
};
declare const getCard: (name: string) => Card;
export { getCard };
