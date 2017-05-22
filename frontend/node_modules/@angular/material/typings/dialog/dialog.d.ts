import { Injector, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Overlay, ComponentType } from '../core';
import { MdDialogConfig } from './dialog-config';
import { MdDialogRef } from './dialog-ref';
import 'rxjs/add/operator/first';
/**
 * Service to open Material Design modal dialogs.
 */
export declare class MdDialog {
    private _overlay;
    private _injector;
    private _parentDialog;
    private _openDialogsAtThisLevel;
    private _afterAllClosedAtThisLevel;
    private _afterOpenAtThisLevel;
    private _boundKeydown;
    /** Keeps track of the currently-open dialogs. */
    readonly _openDialogs: MdDialogRef<any>[];
    /** Subject for notifying the user that a dialog has opened. */
    readonly _afterOpen: Subject<MdDialogRef<any>>;
    /** Subject for notifying the user that all open dialogs have finished closing. */
    readonly _afterAllClosed: Subject<void>;
    /** Gets an observable that is notified when a dialog has been opened. */
    afterOpen: Observable<MdDialogRef<any>>;
    /** Gets an observable that is notified when all open dialog have finished closing. */
    afterAllClosed: Observable<void>;
    constructor(_overlay: Overlay, _injector: Injector, _parentDialog: MdDialog);
    /**
     * Opens a modal dialog containing the given component.
     * @param componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */
    open<T>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: MdDialogConfig): MdDialogRef<T>;
    /**
     * Closes all of the currently-open dialogs.
     */
    closeAll(): void;
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param config The dialog configuration.
     * @returns A promise resolving to the OverlayRef for the created overlay.
     */
    private _createOverlay(config);
    /**
     * Creates an overlay state from a dialog config.
     * @param dialogConfig The dialog configuration.
     * @returns The overlay configuration.
     */
    private _getOverlayState(dialogConfig);
    /**
     * Attaches an MdDialogContainer to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */
    private _attachDialogContainer(overlay, config);
    /**
     * Attaches the user-provided component to the already-created MdDialogContainer.
     * @param componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param dialogContainer Reference to the wrapping MdDialogContainer.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @param config The dialog configuration.
     * @returns A promise resolving to the MdDialogRef that should be returned to the user.
     */
    private _attachDialogContent<T>(componentOrTemplateRef, dialogContainer, overlayRef, config);
    /**
     * Removes a dialog from the array of open dialogs.
     * @param dialogRef Dialog to be removed.
     */
    private _removeOpenDialog(dialogRef);
    /**
     * Handles global key presses while there are open dialogs. Closes the
     * top dialog when the user presses escape.
     */
    private _handleKeydown(event);
}
