import { TemplatePortal } from '../core/portal/portal';
import { ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { MdTabLabel } from './tab-label';
export declare class MdTab implements OnInit {
    private _viewContainerRef;
    /** Content for the tab label given by <ng-template md-tab-label>. */
    templateLabel: MdTabLabel;
    /** Template inside the MdTab view that contains an <ng-content>. */
    _content: TemplateRef<any>;
    /** The plain text label for the tab, used when there is no template label. */
    textLabel: string;
    /** The portal that will be the hosted content of the tab */
    private _contentPortal;
    readonly content: TemplatePortal;
    /**
     * The relatively indexed position where 0 represents the center, negative is left, and positive
     * represents the right.
     */
    position: number;
    /**
     * The initial relatively index origin of the tab if it was created and selected after there
     * was already a selected tab. Provides context of what position the tab should originate from.
     */
    origin: number;
    private _disabled;
    /** Whether the tab is disabled */
    disabled: boolean;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
}
