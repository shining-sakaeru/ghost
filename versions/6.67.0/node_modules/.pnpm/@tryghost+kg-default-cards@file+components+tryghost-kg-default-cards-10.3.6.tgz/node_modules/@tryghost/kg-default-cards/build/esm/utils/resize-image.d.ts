interface ImageDimensions {
    width: number;
    height: number;
}
interface ResizeOptions {
    width?: number;
    height?: number;
}
export default function resizeImage(image: ImageDimensions, { width: desiredWidth, height: desiredHeight }?: ResizeOptions): ImageDimensions;
export {};
//# sourceMappingURL=resize-image.d.ts.map