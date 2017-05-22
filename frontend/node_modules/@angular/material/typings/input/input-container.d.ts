import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, QueryList, Renderer } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
/** Type for the available floatPlaceholder values. */
export declare type FloatPlaceholderType = 'always' | 'never' | 'auto';
/**
 * The placeholder directive. The content can declare this to implement more
 * complex placeholders.
 */
export declare class MdPlaceholder {
}
/** The hint directive, used to tag content as hint labels (going under the input). */
export declare class MdHint {
    align: 'start' | 'end';
    id: string;
}
/** Directive, used to display a single error message under the input. */
export declare class MdErrorDirective {
}
/** The input prefix. */
export declare class MdPrefix {
}
/** The input suffix. */
export declare class MdSuffix {
}
/** The input directive, used to mark the input that `MdInputContainer` is wrapping. */
export declare class MdInputDirective {
    private _elementRef;
    private _renderer;
    _ngControl: NgControl;
    /** Variables used as cache for getters and setters. */
    private _type;
    private _placeholder;
    private _disabled;
    private _required;
    private _id;
    private _cachedUid;
    /** Whether the element is focused or not. */
    focused: boolean;
    /** Sets the aria-describedby attribute on the input for improved a11y. */
    ariaDescribedby: string;
    /** Whether the element is disabled. */
    disabled: any;
    /** Unique id of the element. */
    id: string;
    /** Placeholder attribute of the element. */
    placeholder: string;
    /** Whether the element is required. */
    required: any;
    /** Input type of the element. */
    type: string;
    /** The input element's value. */
    value: string;
    /**
     * Emits an event when the placeholder changes so that the `md-input-container` can re-validate.
     */
    _placeholderChange: EventEmitter<string>;
    readonly empty: boolean;
    private readonly _uid;
    private _neverEmptyInputTypes;
    constructor(_elementRef: ElementRef, _renderer: Renderer, _ngControl: NgControl);
    /** Focuses the input element. */
    focus(): void;
    _onFocus(): void;
    _onBlur(): void;
    _onInput(): void;
    /** Make sure the input is a supported type. */
    private _validateType();
    private _isNeverEmpty();
    private _isBadInput();
    /** Determines if the component host is a textarea. If not recognizable it returns false. */
    private _isTextarea();
}
/**
 * Component that represents a text input. It encapsulates the <input> HTMLElement and
 * improve on its behaviour, along with styling it according to the Material Design.
 */
export declare class MdInputContainer implements AfterViewInit, AfterContentInit {
    private _changeDetectorRef;
    private _parentForm;
    private _parentFormGroup;
    /** Alignment of the input container's content. */
    align: 'start' | 'end';
    /** Color of the input divider, based on the theme. */
    color: 'primary' | 'accent' | 'warn';
    /** @deprecated Use color instead. */
    dividerColor: "accent" | "primary" | "warn";
    /** Whether the floating label should always float or not. */
    readonly _shouldAlwaysFloat: boolean;
    /** Whether the placeholder can float or not. */
    readonly _canPlaceholderFloat: boolean;
    /** State of the md-hint and md-error animations. */
    _subscriptAnimationState: string;
    /** Text for the input hint. */
    hintLabel: string;
    private _hintLabel;
    _hintLabelId: string;
    /** Whether the placeholder should always float, never float or float as the user types. */
    floatPlaceholder: FloatPlaceholderType;
    private _floatPlaceholder;
    _mdInputChild: MdInputDirective;
    _placeholderChild: MdPlaceholder;
    _errorChildren: QueryList<MdErrorDirective>;
    _hintChildren: QueryList<MdHint>;
    _prefixChildren: QueryList<MdPrefix>;
    _suffixChildren: QueryList<MdSuffix>;
    constructor(_changeDetectorRef: ChangeDetectorRef, _parentForm: NgForm, _parentFormGroup: FormGroupDirective);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    /** Determines whether a class from the NgControl should be forwarded to the host element. */
    _shouldForward(prop: string): boolean;
    /** Whether the input has a placeholder. */
    _hasPlaceholder(): boolean;
    /** Focuses the underlying input. */
    _focusInput(): void;
    /** Whether the input container is in an error state. */
    _isErrorState(): boolean;
    /** Determines whether to display hints or errors. */
    _getDisplayedMessages(): 'error' | 'hint';
    /**
     * Ensure that there is only one placeholder (either `input` attribute or child element with the
     * `md-placeholder` attribute.
     */
    private _validatePlaceholders();
    /**
     * Does any extra processing that is required when handling the hints.
     */
    private _processHints();
    /**
     * Ensure that there is a maximum of one of each `<md-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */
    private _validateHints();
    /**
     * Sets the child input's `aria-describedby` to a space-separated list of the ids
     * of the currently-specified hints, as well as a generated id for the hint label.
     */
    private _syncAriaDescribedby();
}
