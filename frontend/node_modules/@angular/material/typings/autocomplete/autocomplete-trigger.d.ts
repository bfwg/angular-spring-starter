import { ElementRef, NgZone, OnDestroy, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Overlay } from '../core';
import { MdAutocomplete } from './autocomplete';
import { Observable } from 'rxjs/Observable';
import { MdOptionSelectionChange, MdOption } from '../core/option/option';
import { Dir } from '../core/rtl/dir';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import { MdInputContainer } from '../input/input-container';
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the scrollTop of the panel. Because we are not
 * actually focusing the active item, scroll must be handled manually.
 */
/** The height of each autocomplete option. */
export declare const AUTOCOMPLETE_OPTION_HEIGHT = 48;
/** The total height of the autocomplete panel. */
export declare const AUTOCOMPLETE_PANEL_HEIGHT = 256;
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */
export declare const MD_AUTOCOMPLETE_VALUE_ACCESSOR: any;
export declare class MdAutocompleteTrigger implements ControlValueAccessor, OnDestroy {
    private _element;
    private _overlay;
    private _viewContainerRef;
    private _dir;
    private _zone;
    private _inputContainer;
    private _overlayRef;
    private _portal;
    private _panelOpen;
    /** The subscription to positioning changes in the autocomplete panel. */
    private _panelPositionSubscription;
    private _positionStrategy;
    /** Stream of blur events that should close the panel. */
    private _blurStream;
    /** Whether or not the placeholder state is being overridden. */
    private _manuallyFloatingPlaceholder;
    /** View -> model callback called when value changes */
    _onChange: (value: any) => void;
    /** View -> model callback called when autocomplete has been touched */
    _onTouched: () => void;
    autocomplete: MdAutocomplete;
    /** Property with mat- prefix for no-conflict mode. */
    _matAutocomplete: MdAutocomplete;
    constructor(_element: ElementRef, _overlay: Overlay, _viewContainerRef: ViewContainerRef, _dir: Dir, _zone: NgZone, _inputContainer: MdInputContainer);
    ngOnDestroy(): void;
    readonly panelOpen: boolean;
    /** Opens the autocomplete suggestion panel. */
    openPanel(): void;
    /** Closes the autocomplete suggestion panel. */
    closePanel(): void;
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     */
    readonly panelClosingActions: Observable<MdOptionSelectionChange>;
    /** Stream of autocomplete option selections. */
    readonly optionSelections: Observable<MdOptionSelectionChange>;
    /** The currently active option, coerced to MdOption type. */
    readonly activeOption: MdOption;
    /**
     * Sets the autocomplete's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    writeValue(value: any): void;
    /**
     * Saves a callback function to be invoked when the autocomplete's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn: (value: any) => {}): void;
    /**
     * Saves a callback function to be invoked when the autocomplete is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn: () => {}): void;
    _handleKeydown(event: KeyboardEvent): void;
    _handleInput(event: KeyboardEvent): void;
    _handleBlur(newlyFocusedTag: string): void;
    /**
     * In "auto" mode, the placeholder will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the placeholder until the panel can be closed.
     */
    private _floatPlaceholder();
    /** If the placeholder has been manually elevated, return it to its normal state. */
    private _resetPlaceholder();
    /**
     * Given that we are not actually focusing active options, we must manually adjust scroll
     * to reveal options below the fold. First, we find the offset of the option from the top
     * of the panel. The new scrollTop will be that offset - the panel height + the option
     * height, so the active option will be just visible at the bottom of the panel.
     */
    private _scrollToOption();
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    private _subscribeToClosingActions();
    /** Destroys the autocomplete suggestion panel. */
    private _destroyPanel();
    private _setTriggerValue(value);
    /**
    * This method closes the panel, and if a value is specified, also sets the associated
    * control to that value. It will also mark the control as dirty if this interaction
    * stemmed from the user.
    */
    private _setValueAndClose(event);
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    private _clearPreviousSelectedOption(skip);
    private _createOverlay();
    private _getOverlayConfig();
    private _getOverlayPosition();
    /**
     * This method subscribes to position changes in the autocomplete panel, so the panel's
     * y-offset can be adjusted to match the new position.
     */
    private _subscribeToPositionChanges(strategy);
    /** Returns the width of the input element, so the panel width can match it. */
    private _getHostWidth();
    /** Reset active item to null so arrow events will activate the correct options.*/
    private _resetActiveItem();
    /**
     * Resets the active item and re-calculates alignment of the panel in case its size
     * has changed due to fewer or greater number of options.
     */
    private _resetPanel();
}
