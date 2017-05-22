import { OverlayRef } from '../core';
import { Observable } from 'rxjs/Observable';
import { MdSnackBarContainer } from './snack-bar-container';
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */
export declare class MdSnackBarRef<T> {
    private _overlayRef;
    private _instance;
    /** The instance of the component making up the content of the snack bar. */
    readonly instance: T;
    /**
     * The instance of the component making up the content of the snack bar.
     * @docs-private
     */
    containerInstance: MdSnackBarContainer;
    /** Subject for notifying the user that the snack bar has closed. */
    private _afterClosed;
    /** Subject for notifying the user that the snack bar has opened and appeared. */
    private _afterOpened;
    /** Subject for notifying the user that the snack bar action was called. */
    private _onAction;
    constructor(instance: T, containerInstance: MdSnackBarContainer, _overlayRef: OverlayRef);
    /** Dismisses the snack bar. */
    dismiss(): void;
    /** Marks the snackbar action clicked. */
    _action(): void;
    /** Marks the snackbar as opened */
    _open(): void;
    /** Cleans up the DOM after closing. */
    private _finishDismiss();
    /** Gets an observable that is notified when the snack bar is finished closing. */
    afterDismissed(): Observable<void>;
    /** Gets an observable that is notified when the snack bar has opened and appeared. */
    afterOpened(): Observable<void>;
    /** Gets an observable that is notified when the snack bar action is called. */
    onAction(): Observable<void>;
}
