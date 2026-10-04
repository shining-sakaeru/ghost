import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const getCards = () => {
    const { cards } = require('@tryghost/kg-default-cards');
    return cards;
};
const getCard = (name) => {
    return getCards().find(card => card.name === name);
};
export { getCard };
