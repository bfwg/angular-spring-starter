import { AfterContentInit, ElementRef, QueryList, TemplateRef } from '@angular/core';
import { MdOption } from '../core';
import { ActiveDescendantKeyManager } from '../core/a11y/activedescendant-key-manager';
export declare type AutocompletePositionY = 'above' | 'below';
export declare class MdAutocomplete implements AfterContentInit {
    /** Manages active item in option list based on key events. */
    _keyManager: ActiveDescendantKeyManager;
    /** Whether the autocomplete panel displays above or below its trigger. */
    positionY: AutocompletePositionY;
    /** Whether the autocomplete panel should be visible, depending on option length. */
    showPanel: boolean;
    template: TemplateRef<any>;
    panel: ElementRef;
    options: QueryList<MdOption>;
    /** Function that maps an option's control value to its display value in the trigger. */
    displayWith: (value: any) => string;
    /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
    id: string;
    ngAfterContentInit(): void;
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display
     * options below the fold, as they are not actually being focused when active.
     */
    _setScrollTop(scrollTop: number): void;
    /** Panel should hide itself when the option list is empty. */
    _setVisibility(): void;
    /** Sets a class on the panel based on its position (used to set y-offset). */
    _getClassList(): {
        'mat-autocomplete-panel-below': boolean;
        'mat-autocomplete-panel-above': boolean;
        'mat-autocomplete-visible': boolean;
        'mat-autocomplete-hidden': boolean;
    };
}
