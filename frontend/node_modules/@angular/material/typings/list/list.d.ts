import { QueryList, ElementRef, OpaqueToken, Renderer, AfterContentInit } from '@angular/core';
import { MdLine } from '../core';
export declare class MdListDivider {
}
/**
 * Token used to inject the list type into child MdListItem components so they can know whether
 * they're in a nav list (and thus should use an MdRipple).
 */
export declare const LIST_TYPE_TOKEN: OpaqueToken;
export declare class MdList {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdListCssMatStyler {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdNavListCssMatStyler {
}
/**
 * Directive to set the ListType token to NAV_LIST_TYPE.
 */
export declare class MdNavListTokenSetter {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdDividerCssMatStyler {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdListAvatarCssMatStyler {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdListIconCssMatStyler {
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdListSubheaderCssMatStyler {
}
export declare class MdListItem implements AfterContentInit {
    private _renderer;
    private _element;
    private _listType;
    /**
     * Whether the ripple effect on click should be disabled. This applies only to list items that
     * are children of an md-nav-list; md-list items never have ripples.
     */
    disableRipple: boolean;
    _hasFocus: boolean;
    private _lineSetter;
    _lines: QueryList<MdLine>;
    _hasAvatar: MdListAvatarCssMatStyler;
    constructor(_renderer: Renderer, _element: ElementRef, _listType: string);
    ngAfterContentInit(): void;
    /** Whether this list item should show a ripple effect when clicked.  */
    isRippleEnabled(): boolean;
    _handleFocus(): void;
    _handleBlur(): void;
}
