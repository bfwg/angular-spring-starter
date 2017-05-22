import { MdDialogRef } from './dialog-ref';
/**
 * Button that will close the current dialog.
 */
export declare class MdDialogClose {
    dialogRef: MdDialogRef<any>;
    /** Screenreader label for the button. */
    ariaLabel: string;
    constructor(dialogRef: MdDialogRef<any>);
}
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
export declare class MdDialogTitle {
}
/**
 * Scrollable content container of a dialog.
 */
export declare class MdDialogContent {
}
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
export declare class MdDialogActions {
}
