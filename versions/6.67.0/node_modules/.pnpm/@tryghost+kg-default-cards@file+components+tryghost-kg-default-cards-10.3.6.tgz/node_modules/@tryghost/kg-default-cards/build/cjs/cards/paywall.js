"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paywallCard = {
    name: 'paywall',
    type: 'dom',
    render({ env: { dom } }) {
        return dom.createComment('members-only');
    },
};
exports.default = paywallCard;
