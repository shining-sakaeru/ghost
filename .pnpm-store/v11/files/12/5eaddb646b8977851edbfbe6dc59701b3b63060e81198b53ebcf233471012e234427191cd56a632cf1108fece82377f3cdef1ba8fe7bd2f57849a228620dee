import clsx from 'clsx';
import { textColorForBackgroundColor } from '@tryghost/color-utils';
import { html } from '../tagged-template-fns.js';
import { stylex } from '../stylex.js';
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
export function renderEmailButton(buttonOptions = {}) {
    const options = _getOptions(buttonOptions);
    const { url, text, alignment, buttonWidth } = options;
    const buttonClasses = _getButtonClasses(options);
    const buttonStyle = _getButtonStyle(options);
    const linkStyle = _getLinkStyle(options);
    return html `
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
        return textColorForBackgroundColor(color).hex();
    }
    return '';
}
function _getButtonClasses({ color }) {
    return clsx('btn', color === 'accent' && 'btn-accent');
}
function _getButtonStyle({ color, style }) {
    return stylex(_isColoredFill({ color, style }) && {
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
    return stylex(_isColoredFill({ color, style }) && textColor && {
        color: `${textColor} !important`
    }, _isColoredOutline({ color, style }) && {
        color: `${color} !important`
    });
}
//# sourceMappingURL=email-button.js.map