import { ComponentRef, NgZone, OnDestroy, Renderer, ElementRef, EventEmitter } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { BasePortalHost, ComponentPortal, PortalHostDirective, TemplatePortal } from '../core';
import { MdDialogConfig } from './dialog-config';
import { FocusTrapFactory } from '../core/a11y/focus-trap';
import 'rxjs/add/operator/first';
/** Possible states for the dialog container animation. */
export declare type MdDialogContainerAnimationState = 'void' | 'enter' | 'exit' | 'exit-start';
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * @docs-private
 */
export declare class MdDialogContainer extends BasePortalHost implements OnDestroy {
    private _ngZone;
    private _renderer;
    private _elementRef;
    private _focusTrapFactory;
    /** The portal host inside of this container into which the dialog content will be loaded. */
    _portalHost: PortalHostDirective;
    /** The class that traps and manages focus within the dialog. */
    private _focusTrap;
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */
    private _elementFocusedBeforeDialogWasOpened;
    /** The dialog configuration. */
    dialogConfig: MdDialogConfig;
    /** State of the dialog animation. */
    _state: MdDialogContainerAnimationState;
    /** Emits the current animation state whenever it changes. */
    _onAnimationStateChange: EventEmitter<MdDialogContainerAnimationState>;
    constructor(_ngZone: NgZone, _renderer: Renderer, _elementRef: ElementRef, _focusTrapFactory: FocusTrapFactory);
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachTemplatePortal(portal: TemplatePortal): Map<string, any>;
    /**
     * Moves the focus inside the focus trap.
     * @private
     */
    private _trapFocus();
    /**
     * Kicks off the leave animation.
     * @docs-private
     */
    _exit(): void;
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @docs-private
     */
    _onAnimationDone(event: AnimationEvent): void;
    ngOnDestroy(): void;
}
