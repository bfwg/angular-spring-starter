import { ElementRef, NgZone, OnDestroy } from '@angular/core';
import { MdInkBar } from '../ink-bar';
import { MdRipple } from '../../core/ripple/index';
import { ViewportRuler } from '../../core/overlay/position/viewport-ruler';
import { RippleGlobalOptions, Dir } from '../../core';
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
export declare class MdTabNavBar implements OnDestroy {
    private _dir;
    private _directionChange;
    _activeLinkChanged: boolean;
    _activeLinkElement: ElementRef;
    _inkBar: MdInkBar;
    constructor(_dir: Dir);
    /** Notifies the component that the active link has been changed. */
    updateActiveLink(element: ElementRef): void;
    /** Checks if the active link has been changed and, if so, will update the ink bar. */
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    /** Aligns the ink bar to the active link. */
    private _alignInkBar();
}
/**
 * Link inside of a `md-tab-nav-bar`.
 */
export declare class MdTabLink {
    private _mdTabNavBar;
    private _elementRef;
    private _isActive;
    /** Whether the link is active. */
    active: boolean;
    constructor(_mdTabNavBar: MdTabNavBar, _elementRef: ElementRef);
}
/**
 * Simple directive that extends the ripple and matches the selector of the MdTabLink. This
 * adds the ripple behavior to nav bar labels.
 */
export declare class MdTabLinkRipple extends MdRipple {
    constructor(elementRef: ElementRef, ngZone: NgZone, ruler: ViewportRuler, globalOptions: RippleGlobalOptions);
}
