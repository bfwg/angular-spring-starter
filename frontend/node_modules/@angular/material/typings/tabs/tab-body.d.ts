import { EventEmitter, OnInit, ElementRef, ChangeDetectorRef, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { TemplatePortal, PortalHostDirective, Dir, LayoutDirection } from '../core';
import 'rxjs/add/operator/map';
/**
 * These position states are used internally as animation states for the tab body. Setting the
 * position state to left, right, or center will transition the tab body from its current
 * position to its respective state. If there is not current position (void, in the case of a new
 * tab body), then there will be no transition animation to its state.
 *
 * In the case of a new tab body that should immediately be centered with an animating transition,
 * then left-origin-center or right-origin-center can be used, which will use left or right as its
 * psuedo-prior state.
 */
export declare type MdTabBodyPositionState = 'left' | 'center' | 'right' | 'left-origin-center' | 'right-origin-center';
/**
 * The origin state is an internally used state that is set on a new tab body indicating if it
 * began to the left or right of the prior selected index. For example, if the selected index was
 * set to 1, and a new tab is created and selected at index 2, then the tab body would have an
 * origin of right because its index was greater than the prior selected index.
 */
export declare type MdTabBodyOriginState = 'left' | 'right';
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
export declare class MdTabBody implements OnInit, AfterViewChecked, AfterContentChecked {
    private _dir;
    private _elementRef;
    private _changeDetectorRef;
    /** The portal host inside of this container into which the tab body content will be loaded. */
    _portalHost: PortalHostDirective;
    /** Event emitted when the tab begins to animate towards the center as the active tab. */
    onCentering: EventEmitter<number>;
    /** Event emitted when the tab completes its animation towards the center. */
    onCentered: EventEmitter<void>;
    /** The tab body content to display. */
    _content: TemplatePortal;
    /** The shifted index position of the tab body, where zero represents the active center tab. */
    _position: MdTabBodyPositionState;
    position: number;
    /** Whether the element is allowed to be animated. */
    _canBeAnimated: boolean;
    /** The origin position from which this tab should appear when it is centered into view. */
    _origin: MdTabBodyOriginState;
    /** The origin position from which this tab should appear when it is centered into view. */
    origin: number;
    constructor(_dir: Dir, _elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */
    ngOnInit(): void;
    /**
     * After the view has been set, check if the tab content is set to the center and attach the
     * content if it is not already attached.
     */
    ngAfterViewChecked(): void;
    /**
     * After the content has been checked, determines whether the element should be allowed to
     * animate. This has to be limited, because under a specific set of circumstances (see #2151),
     * the animations can be triggered too early, which either crashes Chrome by putting it into an
     * infinite loop (with Angular < 2.3.0) or throws an error because the element doesn't have a
     * computed style (with Angular > 2.3.0). This can alternatively be determined by checking the
     * transform: canBeAnimated = getComputedStyle(element) !== '', however document.contains should
     * be faster since it doesn't cause a reflow.
     *
     * TODO: This can safely be removed after we stop supporting Angular < 2.4.2. The fix landed via
     * https://github.com/angular/angular/commit/21030e9a1cf30e8101399d8535ed72d847a23ba6
     */
    ngAfterContentChecked(): void;
    _onTranslateTabStarted(e: AnimationEvent): void;
    _onTranslateTabComplete(e: AnimationEvent): void;
    /** The text direction of the containing app. */
    _getLayoutDirection(): LayoutDirection;
    /** Whether the provided position state is considered center, regardless of origin. */
    private _isCenterPosition(position);
}
