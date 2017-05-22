import { ElementRef, Renderer } from '@angular/core';
export declare class MdToolbarRow {
}
export declare class MdToolbar {
    private elementRef;
    private renderer;
    private _color;
    constructor(elementRef: ElementRef, renderer: Renderer);
    /** The color of the toolbar. Can be primary, accent, or warn. */
    color: string;
    private _updateColor(newColor);
    private _setElementColor(color, isAdd);
}
