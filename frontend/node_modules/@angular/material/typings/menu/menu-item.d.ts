import { ElementRef, Renderer } from '@angular/core';
import { Focusable } from '../core/a11y/focus-key-manager';
/**
 * This directive is intended to be used inside an md-menu tag.
 * It exists mostly to set the role attribute.
 */
export declare class MdMenuItem implements Focusable {
    private _renderer;
    private _elementRef;
    /** Whether the menu item is disabled */
    private _disabled;
    constructor(_renderer: Renderer, _elementRef: ElementRef);
    /** Focuses the menu item. */
    focus(): void;
    /** Whether the menu item is disabled. */
    disabled: any;
    /** Used to set the `tabindex`. */
    _getTabIndex(): string;
    /** Used to set the HTML `disabled` attribute. Necessary for links to be disabled properly. */
    _getDisabledAttr(): boolean;
    /** Returns the host DOM element. */
    _getHostElement(): HTMLElement;
    /** Prevents the default element actions if it is disabled. */
    _checkDisabled(event: Event): void;
}
