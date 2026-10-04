"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderEmptyContainer = renderEmptyContainer;
function renderEmptyContainer(document) {
    const emptyContainer = document.createElement('span');
    return { element: emptyContainer, type: 'inner' };
}
