import { ElementRef, OnInit } from '@angular/core';
/**
 * Directive to automatically resize a textarea to fit its content.
 */
export declare class MdTextareaAutosize implements OnInit {
    private _elementRef;
    /** Minimum number of rows for this textarea. */
    minRows: number;
    mdAutosizeMinRows: number;
    /** Maximum number of rows for this textarea. */
    maxRows: number;
    mdAutosizeMaxRows: number;
    /** Cached height of a textarea with a single row. */
    private _cachedLineHeight;
    constructor(_elementRef: ElementRef);
    /** The minimum height of the textarea as determined by minRows. */
    readonly _minHeight: string;
    /** The maximum height of the textarea as determined by maxRows. */
    readonly _maxHeight: string;
    ngOnInit(): void;
    /**
     * Cache the height of a single-row textarea.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    private _cacheTextareaLineHeight();
    /** Resize the textarea to fit its content. */
    resizeToFitContent(): void;
}
