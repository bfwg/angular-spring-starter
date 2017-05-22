import { ElementRef, OnDestroy, Renderer } from '@angular/core';
import { FocusOriginMonitor } from '../core';
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdButtonCssMatStyler {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdRaisedButtonCssMatStyler {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdIconButtonCssMatStyler {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdFabCssMatStyler {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdMiniFabCssMatStyler {
}
/**
 * Material design button.
 */
export declare class MdButton implements OnDestroy {
    private _elementRef;
    private _renderer;
    private _focusOriginMonitor;
    private _color;
    /** Whether the button is round. */
    _isRoundButton: boolean;
    /** Whether the button is icon button. */
    _isIconButton: boolean;
    /** Whether the ripple effect on click should be disabled. */
    private _disableRipple;
    private _disabled;
    /** Whether the ripple effect for this button is disabled. */
    disableRipple: boolean;
    /** Whether the button is disabled. */
    disabled: boolean;
    constructor(_elementRef: ElementRef, _renderer: Renderer, _focusOriginMonitor: FocusOriginMonitor);
    ngOnDestroy(): void;
    /** The color of the button. Can be `primary`, `accent`, or `warn`. */
    color: string;
    _updateColor(newColor: string): void;
    _setElementColor(color: string, isAdd: boolean): void;
    /** Focuses the button. */
    focus(): void;
    _getHostElement(): any;
    _isRippleDisabled(): boolean;
    /**
     * Gets whether the button has one of the given attributes
     * with either an 'md-' or 'mat-' prefix.
     */
    _hasAttributeWithPrefix(...unprefixedAttributeNames: string[]): boolean;
}
/**
 * Raised Material design button.
 */
export declare class MdAnchor extends MdButton {
    constructor(elementRef: ElementRef, renderer: Renderer, focusOriginMonitor: FocusOriginMonitor);
    /** @docs-private */
    readonly tabIndex: number;
    readonly _isAriaDisabled: string;
    _haltDisabledEvents(event: Event): void;
}
