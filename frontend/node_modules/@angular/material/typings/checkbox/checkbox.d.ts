import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer, AfterViewInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MdRipple, FocusOriginMonitor } from '../core';
/**
 * Provider Expression that allows md-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export declare const MD_CHECKBOX_CONTROL_VALUE_ACCESSOR: any;
/**
 * Represents the different states that require custom transitions between them.
 * @docs-private
 */
export declare enum TransitionCheckState {
    /** The initial state of the component before any user interaction. */
    Init = 0,
    /** The state representing the component when it's becoming checked. */
    Checked = 1,
    /** The state representing the component when it's becoming unchecked. */
    Unchecked = 2,
    /** The state representing the component when it's becoming indeterminate. */
    Indeterminate = 3,
}
/** Change event object emitted by MdCheckbox. */
export declare class MdCheckboxChange {
    /** The source MdCheckbox of the event. */
    source: MdCheckbox;
    /** The new `checked` value of the checkbox. */
    checked: boolean;
}
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MdCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://www.google.com/design/spec/components/selection-controls.html
 */
export declare class MdCheckbox implements ControlValueAccessor, AfterViewInit, OnDestroy {
    private _renderer;
    private _elementRef;
    private _changeDetectorRef;
    private _focusOriginMonitor;
    /**
     * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will
     * take precedence so this may be omitted.
     */
    ariaLabel: string;
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */
    ariaLabelledby: string;
    /** A unique id for the checkbox. If one is not supplied, it is auto-generated. */
    id: string;
    /** Whether the ripple effect on click should be disabled. */
    private _disableRipple;
    /** Whether the ripple effect for this checkbox is disabled. */
    disableRipple: boolean;
    /** ID of the native input element inside `<md-checkbox>` */
    readonly inputId: string;
    private _required;
    /** Whether the checkbox is required. */
    required: boolean;
    /**
     * Whether or not the checkbox should appear before or after the label.
     * @deprecated
     */
    align: 'start' | 'end';
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
    labelPosition: 'before' | 'after';
    private _disabled;
    /** Whether the checkbox is disabled. */
    disabled: boolean;
    /** Tabindex value that is passed to the underlying input element. */
    tabIndex: number;
    /** Name value will be applied to the input element if present */
    name: string;
    /** Event emitted when the checkbox's `checked` value changes. */
    change: EventEmitter<MdCheckboxChange>;
    /** Event emitted when the checkbox's `indeterminate` value changes. */
    indeterminateChange: EventEmitter<boolean>;
    /** The value attribute of the native input element */
    value: string;
    /** The native `<input type="checkbox"> element */
    _inputElement: ElementRef;
    _ripple: MdRipple;
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */
    onTouched: () => any;
    private _currentAnimationClass;
    private _currentCheckState;
    private _checked;
    private _indeterminate;
    private _color;
    private _controlValueAccessorChangeFn;
    /** Reference to the focused state ripple. */
    private _focusedRipple;
    /** Reference to the focus origin monitor subscription. */
    private _focusedSubscription;
    constructor(_renderer: Renderer, _elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef, _focusOriginMonitor: FocusOriginMonitor);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Whether the checkbox is checked. Note that setting `checked` will immediately set
     * `indeterminate` to false.
     */
    checked: boolean;
    /**
     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
     * checkable items. Note that whenever `checked` is set, indeterminate is immediately set to
     * false. This differs from the web platform in that indeterminate state on native
     * checkboxes is only remove when the user manually checks the checkbox (rather than setting the
     * `checked` property programmatically). However, we feel that this behavior is more accommodating
     * to the way consumers would envision using this component.
     */
    indeterminate: boolean;
    /** The color of the button. Can be `primary`, `accent`, or `warn`. */
    color: string;
    _updateColor(newColor: string): void;
    _setElementColor(color: string, isAdd: boolean): void;
    _isRippleDisabled(): boolean;
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    writeValue(value: any): void;
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param fn Function to be called on change.
     */
    registerOnChange(fn: (value: any) => void): void;
    /**
     * Registers a callback to be triggered when the control has been touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    registerOnTouched(fn: any): void;
    /**
     * Sets the checkbox's disabled state. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the checkbox should be disabled.
     */
    setDisabledState(isDisabled: boolean): void;
    private _transitionCheckState(newState);
    private _emitChangeEvent();
    /** Informs the component when we lose focus in order to style accordingly */
    _onInputBlur(): void;
    /** Toggles the `checked` state of the checkbox. */
    toggle(): void;
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */
    _onInputClick(event: Event): void;
    /** Focuses the checkbox. */
    focus(): void;
    _onInteractionEvent(event: Event): void;
    private _getAnimationClassForCheckStateTransition(oldState, newState);
    /** Fades out the focused state ripple. */
    private _removeFocusedRipple();
}
