import { Renderer, ElementRef, NgZone } from '@angular/core';
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * @docs-private
 */
export declare class MdInkBar {
    private _renderer;
    private _elementRef;
    private _ngZone;
    constructor(_renderer: Renderer, _elementRef: ElementRef, _ngZone: NgZone);
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */
    alignToElement(element: HTMLElement): void;
    /** Shows the ink bar. */
    show(): void;
    /** Hides the ink bar. */
    hide(): void;
    /**
     * Generates the pixel distance from the left based on the provided element in string format.
     * @param element
     */
    private _getLeftPosition(element);
    /**
     * Generates the pixel width from the provided element in string format.
     * @param element
     */
    private _getElementWidth(element);
}
