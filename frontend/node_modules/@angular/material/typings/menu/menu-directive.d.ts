import { AfterContentInit, EventEmitter, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { MenuPositionX, MenuPositionY } from './menu-positions';
import { MdMenuItem } from './menu-item';
import { MdMenuPanel } from './menu-panel';
export declare class MdMenu implements AfterContentInit, MdMenuPanel, OnDestroy {
    private _keyManager;
    /** Subscription to tab events on the menu panel */
    private _tabSubscription;
    /** Config object to be passed into the menu's ngClass */
    _classList: any;
    /** Position of the menu in the X axis. */
    positionX: MenuPositionX;
    /** Position of the menu in the Y axis. */
    positionY: MenuPositionY;
    templateRef: TemplateRef<any>;
    items: QueryList<MdMenuItem>;
    overlapTrigger: boolean;
    constructor(posX: MenuPositionX, posY: MenuPositionY, deprecatedPosX: MenuPositionX, deprecatedPosY: MenuPositionY);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * This method takes classes set on the host md-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @param classes list of class names
     */
    classList: string;
    /** Event emitted when the menu is closed. */
    close: EventEmitter<void>;
    /**
     * Focus the first item in the menu. This method is used by the menu trigger
     * to focus the first item when the menu is opened by the ENTER key.
     */
    focusFirstItem(): void;
    /**
     * This emits a close event to which the trigger is subscribed. When emitted, the
     * trigger will close the menu.
     */
    _emitCloseEvent(): void;
    private _setPositionX(pos);
    private _setPositionY(pos);
    /**
     * It's necessary to set position-based classes to ensure the menu panel animation
     * folds out from the correct direction.
     */
    setPositionClasses(posX: MenuPositionX, posY: MenuPositionY): void;
}
