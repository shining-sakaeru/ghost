"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderEmailButton = renderEmailButton;
const clsx_1 = __importDefault(require("clsx"));
const color_utils_1 = require("@tryghost/color-utils");
const tagged_template_fns_js_1 = require("../tagged-template-fns.js");
const stylex_js_1 = require("../stylex.js");
const defaultOptions = {
    url: '',
    text: '',
    alignment: '',
    buttonWidth: '',
    color: '',
    style: 'fill'
};
function _getOptions(buttonOptions = {}) {
    // merge with defaults
    // but we don't want undefined values to override default values
    return {
        ...defaultOptions,
        ...Object.fromEntries(Object.entries(buttonOptions).filter(([, value]) => value !== undefined))
    };
}
function renderEmailButton(buttonOptions = {}) {
    const options = _getOptions(buttonOptions);
    const { url, text, alignment, buttonWidth } = options;
    const buttonClasses = _getButtonClasses(options);
    const buttonStyle = _getButtonStyle(options);
    const linkStyle = _getLinkStyle(options);
    return (0, tagged_template_fns_js_1.html) `
        <table class="${buttonClasses}" border="0" cellspacing="0" cellpadding="0"${alignment ? ` align="${alignment}"` : ''}>
            <tbody>
                <tr>
                    <td align="center"${buttonWidth ? ` width="${buttonWidth}"` : ''}${buttonStyle ? ` style="${buttonStyle}"` : ''}>
                        <a href="${url}"${linkStyle ? ` style="${linkStyle}"` : ''}>${text}</a>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}
function _isColoredFill({ color, style }) {
    return Boolean(color) && color !== 'accent' && color !== 'transparent' && style === 'fill';
}
function _isColoredOutline({ color, style }) {
    return Boolean(color) && color !== 'accent' && style === 'outline';
}
function _isValidHexColor(color) {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color);
}
function _getTextColor({ color, style }) {
    if (_isColoredFill({ color, style }) && _isValidHexColor(color)) {
        return (0, color_utils_1.textColorForBackgroundColor)(color).hex();
    }
    return '';
}
function _getButtonClasses({ color }) {
    return (0, clsx_1.default)('btn', color === 'accent' && 'btn-accent');
}
function _getButtonStyle({ color, style }) {
    return (0, stylex_js_1.stylex)(_isColoredFill({ color, style }) && {
        backgroundColor: color
    }, _isColoredOutline({ color, style }) && {
        color: `${color} !important`,
        border: `1px solid ${color}`,
        borderColor: 'currentColor', // match text color in dark mode inversions
        backgroundColor: 'transparent'
    });
}
function _getLinkStyle({ color, style }) {
    const textColor = _getTextColor({ color, style });
    return (0, stylex_js_1.stylex)(_isColoredFill({ color, style }) && textColor && {
        color: `${textColor} !important`
    }, _isColoredOutline({ color, style }) && {
        color: `${color} !important`
    });
}
