"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isUnsplashImage;
function isUnsplashImage(url) {
    return /images\.unsplash\.com/.test(url);
}
