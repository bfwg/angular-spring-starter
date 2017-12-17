/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterContentInit, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { MdInkBar } from '../ink-bar';
import { MdRipple } from '../../core/ripple/index';
import { ViewportRuler } from '../../core/overlay/position/viewport-ruler';
import { Dir, Platform, RippleGlobalOptions } from '../../core';
import 'rxjs/add/operator/auditTime';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
export declare class MdTabNav implements AfterContentInit, OnDestroy {
    private _dir;
    private _ngZone;
    /** Subject that emits when the component has been destroyed. */
    private _onDestroy;
    _activeLinkChanged: boolean;
    _activeLinkElement: ElementRef;
    _inkBar: MdInkBar;
    constructor(_dir: Dir, _ngZone: NgZone);
    /** Notifies the component that the active link has been changed. */
    updateActiveLink(element: ElementRef): void;
    ngAfterContentInit(): void;
    /** Checks if the active link has been changed and, if so, will update the ink bar. */
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    /** Aligns the ink bar to the active link. */
    _alignInkBar(): void;
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
    constructor(_mdTabNavBar: MdTabNav, _elementRef: ElementRef);
}
/**
 * Simple directive that extends the ripple and matches the selector of the MdTabLink. This
 * adds the ripple behavior to nav bar labels.
 */
export declare class MdTabLinkRipple extends MdRipple {
    constructor(elementRef: ElementRef, ngZone: NgZone, ruler: ViewportRuler, platform: Platform, globalOptions: RippleGlobalOptions);
}
