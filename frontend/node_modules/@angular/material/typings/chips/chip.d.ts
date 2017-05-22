import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer } from '@angular/core';
import { Focusable } from '../core/a11y/focus-key-manager';
export interface MdChipEvent {
    chip: MdChip;
}
/**
 * Material design styled Chip component. Used inside the MdChipList component.
 */
export declare class MdChip implements Focusable, OnInit, OnDestroy {
    protected _renderer: Renderer;
    protected _elementRef: ElementRef;
    /** Whether or not the chip is disabled. Disabled chips cannot be focused. */
    protected _disabled: boolean;
    /** Whether or not the chip is selected. */
    protected _selected: boolean;
    /** The palette color of selected chips. */
    protected _color: string;
    /** Emitted when the chip is focused. */
    onFocus: EventEmitter<MdChipEvent>;
    /** Emitted when the chip is selected. */
    select: EventEmitter<MdChipEvent>;
    /** Emitted when the chip is deselected. */
    deselect: EventEmitter<MdChipEvent>;
    /** Emitted when the chip is destroyed. */
    destroy: EventEmitter<MdChipEvent>;
    constructor(_renderer: Renderer, _elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Whether or not the chip is disabled. */
    /** Sets the disabled state of the chip. */
    disabled: boolean;
    /** A String representation of the current disabled state. */
    readonly _isAriaDisabled: string;
    /** Whether or not this chip is selected. */
    selected: boolean;
    /**
     * Toggles the current selected state of this chip.
     * @return Whether the chip is selected.
     */
    toggleSelected(): boolean;
    /** The color of the chip. Can be `primary`, `accent`, or `warn`. */
    color: string;
    /** Allows for programmatic focusing of the chip. */
    focus(): void;
    /** Ensures events fire properly upon click. */
    _handleClick(event: Event): void;
    /** Initializes the appropriate CSS classes based on the chip type (basic or standard). */
    private _addDefaultCSSClass();
    /** Updates the private _color variable and the native element. */
    private _updateColor(newColor);
    /** Sets the mat-color on the native element. */
    private _setElementColor(color, isAdd);
}
