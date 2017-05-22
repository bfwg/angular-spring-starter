import { QueryList, ElementRef, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdTab } from './tab';
import 'rxjs/add/operator/map';
/** A simple change event emitted on focus or selection changes. */
export declare class MdTabChangeEvent {
    index: number;
    tab: MdTab;
}
/** Possible positions for the tab header. */
export declare type MdTabHeaderPosition = 'above' | 'below';
/**
 * Material design tab-group component.  Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://www.google.com/design/spec/components/tabs.html
 */
export declare class MdTabGroup {
    private _renderer;
    _tabs: QueryList<MdTab>;
    _tabBodyWrapper: ElementRef;
    /** Whether this component has been initialized. */
    private _isInitialized;
    /** The tab index that should be selected after the content has been checked. */
    private _indexToSelect;
    /** Snapshot of the height of the tab body wrapper before another tab is activated. */
    private _tabBodyWrapperHeight;
    /** Whether the tab group should grow to the size of the active tab */
    private _dynamicHeight;
    dynamicHeight: boolean;
    /** @deprecated */
    _dynamicHeightDeprecated: boolean;
    private _selectedIndex;
    /** The index of the active tab. */
    selectedIndex: number;
    /** Position of the tab header. */
    headerPosition: MdTabHeaderPosition;
    /** Output to enable support for two-way binding on ([selectedIndex]) */
    readonly selectedIndexChange: Observable<number>;
    private _onFocusChange;
    /** Event emitted when focus has changed within a tab group. */
    readonly focusChange: Observable<MdTabChangeEvent>;
    private _onSelectChange;
    /** Event emitted when the tab selection has changed. */
    readonly selectChange: Observable<MdTabChangeEvent>;
    private _groupId;
    constructor(_renderer: Renderer);
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */
    ngAfterContentChecked(): void;
    /**
     * Waits one frame for the view to update, then updates the ink bar
     * Note: This must be run outside of the zone or it will create an infinite change detection loop.
     */
    ngAfterViewChecked(): void;
    _focusChanged(index: number): void;
    private _createChangeEvent(index);
    /** Returns a unique id for each tab label element */
    _getTabLabelId(i: number): string;
    /** Returns a unique id for each tab content element */
    _getTabContentId(i: number): string;
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */
    _setTabBodyWrapperHeight(tabHeight: number): void;
    /** Removes the height of the tab body wrapper. */
    _removeTabBodyWrapperHeight(): void;
}
