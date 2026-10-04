"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_MEMBERS_SEGMENT = exports.FREE_MEMBERS_SEGMENT = exports.PAID_MEMBERS_SEGMENT = exports.ALL_MEMBERS_SEGMENT = void 0;
exports.buildDefaultVisibility = buildDefaultVisibility;
exports.isOldVisibilityFormat = isOldVisibilityFormat;
exports.isVisibilityRestricted = isVisibilityRestricted;
exports.migrateOldVisibilityFormat = migrateOldVisibilityFormat;
exports.renderWithVisibility = renderWithVisibility;
const render_empty_container_js_1 = require("./render-empty-container.js");
exports.ALL_MEMBERS_SEGMENT = 'status:free,status:-free';
exports.PAID_MEMBERS_SEGMENT = 'status:-free'; // paid + comped + gift
exports.FREE_MEMBERS_SEGMENT = 'status:free';
exports.NO_MEMBERS_SEGMENT = '';
const DEFAULT_VISIBILITY = {
    web: {
        nonMember: true,
        memberSegment: exports.ALL_MEMBERS_SEGMENT
    },
    email: {
        memberSegment: exports.ALL_MEMBERS_SEGMENT
    }
};
function isNullish(value) {
    return value === null || value === undefined;
}
// ensure we always work with a deep copy to avoid accidental ref mutations
function buildDefaultVisibility() {
    return JSON.parse(JSON.stringify(DEFAULT_VISIBILITY));
}
function isOldVisibilityFormat(visibility) {
    return !Object.prototype.hasOwnProperty.call(visibility, 'web')
        || !Object.prototype.hasOwnProperty.call(visibility, 'email')
        || !Object.prototype.hasOwnProperty.call(visibility.web ?? {}, 'nonMember')
        || isNullish(visibility.web?.memberSegment)
        || isNullish(visibility.email?.memberSegment);
}
function isVisibilityRestricted(visibility) {
    if (isOldVisibilityFormat(visibility)) {
        visibility = migrateOldVisibilityFormat(visibility);
    }
    return visibility.web?.nonMember === false
        || visibility.web?.memberSegment !== exports.ALL_MEMBERS_SEGMENT
        || visibility.email?.memberSegment !== exports.ALL_MEMBERS_SEGMENT;
}
// old formats...
//
// "segment" only applies to email visibility
// {emailOnly: true/false, segment: ''}
// {showOnWeb: true/false, showOnEmail: true/false, segment: 'status:free,status:-free'}
//
// segment: '' = everyone
// segment: 'status:free' = free members
// segment: 'status:paid' = paid members (incorrect, misses comped + gift)
// segment: 'status:-free' = paid members (correct, includes comped + gift)
// segment: 'status:-free+status:-paid' = no-one (incorrect, misses comped + gift)
//
// new format...
//
// {
//     web: {
//         nonMember: true/false,
//         memberSegment: 'status:free,status:-free'
//     },
//     email: {
//         memberSegment: 'status:free,status:-free'
//     }
// }
//
// memberSegment: '' = no-one
// memberSegment: 'status:free,status:-free' = everyone
// memberSegment: 'status:free' = free members
// memberSegment: 'status:-free' = paid + comped + gift members
function migrateOldVisibilityFormat(visibility) {
    if (!visibility || !isOldVisibilityFormat(visibility)) {
        return visibility;
    }
    // deep clone to avoid mutating the original object
    const newVisibility = JSON.parse(JSON.stringify(visibility));
    // ensure we have expected objects ready to populate
    newVisibility.web ??= {};
    newVisibility.email ??= {};
    // convert web visibility, old formats only had on/off for web visibility rather than specific segments
    if (isNullish(visibility.showOnWeb) && isNullish(visibility.emailOnly)) {
        newVisibility.web = buildDefaultVisibility().web;
    }
    else if (!isNullish(visibility.emailOnly)) {
        newVisibility.web.nonMember = !visibility.emailOnly;
        newVisibility.web.memberSegment = visibility.emailOnly ? exports.NO_MEMBERS_SEGMENT : exports.ALL_MEMBERS_SEGMENT;
    }
    else {
        newVisibility.web.nonMember = visibility.showOnWeb;
        newVisibility.web.memberSegment = visibility.showOnWeb ? exports.ALL_MEMBERS_SEGMENT : exports.NO_MEMBERS_SEGMENT;
    }
    // convert email visibility, taking into account the old (and sometimes incorrect) segment formats
    if (isNullish(visibility.showOnEmail) && isNullish(visibility.emailOnly)) {
        newVisibility.email = buildDefaultVisibility().email;
    }
    else if (visibility.showOnEmail === false) {
        newVisibility.email.memberSegment = exports.NO_MEMBERS_SEGMENT;
    }
    else if (visibility.segment === 'status:-free+status:-paid') {
        newVisibility.email.memberSegment = exports.NO_MEMBERS_SEGMENT;
    }
    else if (visibility.segment === 'status:free') {
        newVisibility.email.memberSegment = exports.FREE_MEMBERS_SEGMENT;
    }
    else if (visibility.segment === 'status:paid' || visibility.segment === 'status:-free') {
        newVisibility.email.memberSegment = exports.PAID_MEMBERS_SEGMENT;
    }
    else if (!visibility.segment) {
        newVisibility.email.memberSegment = exports.ALL_MEMBERS_SEGMENT;
    }
    return newVisibility;
}
function renderWithVisibility(originalRenderOutput, visibility, options) {
    if (!visibility) {
        return originalRenderOutput;
    }
    const { element } = originalRenderOutput;
    if (!element || !('ownerDocument' in element)) {
        return originalRenderOutput;
    }
    const document = element.ownerDocument;
    const content = _getRenderContent(originalRenderOutput);
    const migrated = migrateOldVisibilityFormat(visibility);
    const email = migrated.email ?? { memberSegment: exports.ALL_MEMBERS_SEGMENT };
    const web = migrated.web ?? { nonMember: true, memberSegment: exports.ALL_MEMBERS_SEGMENT };
    if (options.target === 'email') {
        if (email.memberSegment === exports.NO_MEMBERS_SEGMENT) {
            return (0, render_empty_container_js_1.renderEmptyContainer)(document);
        }
        if (email.memberSegment === exports.ALL_MEMBERS_SEGMENT) {
            return originalRenderOutput;
        }
        return _renderWithEmailVisibility(document, content, email);
    }
    const isNotVisibleOnWeb = web.nonMember === false &&
        web.memberSegment === exports.NO_MEMBERS_SEGMENT;
    if (isNotVisibleOnWeb) {
        return (0, render_empty_container_js_1.renderEmptyContainer)(document);
    }
    const hasWebVisibilityRestrictions = web.nonMember !== true ||
        web.memberSegment !== exports.ALL_MEMBERS_SEGMENT;
    if (hasWebVisibilityRestrictions) {
        return _renderWithWebVisibility(document, content, web);
    }
    return originalRenderOutput;
}
/* Private functions -------------------------------------------------------- */
function _getRenderContent({ element, type }) {
    if (type === 'inner') {
        if (element && 'innerHTML' in element) {
            return element.innerHTML;
        }
        return '';
    }
    else if (type === 'value') {
        if (element && 'value' in element && typeof element.value === 'string') {
            return element.value;
        }
        return '';
    }
    else {
        if (element && 'outerHTML' in element) {
            return element.outerHTML;
        }
        return '';
    }
}
function _renderWithEmailVisibility(document, content, emailVisibility) {
    const { memberSegment } = emailVisibility;
    const container = document.createElement('div');
    container.innerHTML = content;
    container.setAttribute('data-gh-segment', memberSegment);
    container.classList.add('kg-visibility-wrapper');
    return { element: container, type: 'html' };
}
function _renderWithWebVisibility(document, content, webVisibility) {
    const { nonMember, memberSegment } = webVisibility;
    const wrappedContent = `\n<!--kg-gated-block:begin nonMember:${nonMember} memberSegment:"${memberSegment}" -->${content}<!--kg-gated-block:end-->\n`;
    const textarea = document.createElement('textarea');
    textarea.value = wrappedContent;
    return { element: textarea, type: 'value' };
}
