import { AfterContentInit, ElementRef, Renderer, EventEmitter, OnInit, QueryList, OnDestroy, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UniqueSelectionDispatcher, MdRipple, FocusOriginMonitor } from '../core';
/**
 * Provider Expression that allows md-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
export declare const MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any;
/** Change event object emitted by MdRadio and MdRadioGroup. */
export declare class MdRadioChange {
    /** The MdRadioButton that emits the change event. */
    source: MdRadioButton;
    /** The value of the MdRadioButton. */
    value: any;
}
/**
 * A group of radio buttons. May contain one or more `<md-radio-button>` elements.
 */
export declare class MdRadioGroup implements AfterContentInit, ControlValueAccessor {
    /**
     * Selected value for group. Should equal the value of the selected radio button if there *is*
     * a corresponding radio button with a matching value. If there is *not* such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */
    private _value;
    /** The HTML name attribute applied to radio buttons in this group. */
    private _name;
    /** Disables all individual radio buttons assigned to this group. */
    private _disabled;
    /** The currently selected radio button. Should match value. */
    private _selected;
    /** Whether the `value` has been set to its initial value. */
    private _isInitialized;
    /** The method to be called in order to update ngModel */
    _controlValueAccessorChangeFn: (value: any) => void;
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    onTouched: () => any;
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */
    change: EventEmitter<MdRadioChange>;
    /** Child radio buttons. */
    _radios: QueryList<MdRadioButton>;
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    name: string;
    /**
     * Alignment of the radio-buttons relative to their labels. Can be 'before' or 'after'.
     * @deprecated
     */
    align: 'start' | 'end';
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    labelPosition: 'before' | 'after';
    /** Whether the radio button is disabled. */
    disabled: boolean;
    /** Value of the radio button. */
    value: any;
    _checkSelectedRadioButton(): void;
    /** Whether the radio button is selected. */
    selected: MdRadioButton;
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit(): void;
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch(): void;
    private _updateRadioButtonNames();
    /** Updates the `selected` radio button from the internal _value state. */
    private _updateSelectedRadioFromValue();
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent(): void;
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value: any): void;
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn: (value: any) => void): void;
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn: any): void;
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled: boolean): void;
}
/**
 * A radio-button. May be inside of
 */
export declare class MdRadioButton implements OnInit, AfterViewInit, OnDestroy {
    private _elementRef;
    private _renderer;
    private _focusOriginMonitor;
    private _radioDispatcher;
    /** The unique ID for the radio button. */
    id: string;
    /** Analog to HTML 'name' attribute used to group radios for unique selection. */
    name: string;
    /** Used to set the 'aria-label' attribute on the underlying input element. */
    ariaLabel: string;
    /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
    ariaLabelledby: string;
    /** Whether the ripple effect for this radio button is disabled. */
    disableRipple: boolean;
    /** Whether this radio button is checked. */
    checked: boolean;
    /** The value of this radio button. */
    value: any;
    /**
     * Whether or not the radio-button should appear before or after the label.
     * @deprecated
     */
    align: 'start' | 'end';
    private _labelPosition;
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    labelPosition: 'before' | 'after';
    /** Whether the radio button is disabled. */
    disabled: boolean;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */
    change: EventEmitter<MdRadioChange>;
    /** The parent radio group. May or may not be present. */
    radioGroup: MdRadioGroup;
    /** ID of the native input element inside `<md-radio-button>` */
    readonly inputId: string;
    /** Whether this radio is checked. */
    private _checked;
    /** Whether this radio is disabled. */
    private _disabled;
    /** Value assigned to this radio.*/
    private _value;
    /** Whether the ripple effect on click should be disabled. */
    private _disableRipple;
    /** The child ripple instance. */
    _ripple: MdRipple;
    /** Stream of focus event from the focus origin monitor. */
    private _focusOriginMonitorSubscription;
    /** Reference to the current focus ripple. */
    private _focusedRippleRef;
    /** The native `<input type=radio>` element */
    _inputElement: ElementRef;
    constructor(radioGroup: MdRadioGroup, _elementRef: ElementRef, _renderer: Renderer, _focusOriginMonitor: FocusOriginMonitor, _radioDispatcher: UniqueSelectionDispatcher);
    /** Focuses the radio button. */
    focus(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Dispatch change event with current value. */
    private _emitChangeEvent();
    _isRippleDisabled(): boolean;
    _onInputBlur(): void;
    _onInputClick(event: Event): void;
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     */
    _onInputChange(event: Event): void;
}
