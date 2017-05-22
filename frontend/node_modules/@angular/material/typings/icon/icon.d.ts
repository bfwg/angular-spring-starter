import { ElementRef, OnChanges, OnInit, Renderer, SimpleChange, AfterViewChecked, Optional } from '@angular/core';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MdError } from '../core';
import { MdIconRegistry } from './icon-registry';
/** Exception thrown when an invalid icon name is passed to an md-icon component. */
export declare class MdIconInvalidNameError extends MdError {
    constructor(iconName: string);
}
/**
 * Component to display an icon. It can be used in the following ways:
 * - Specify the svgSrc input to load an SVG icon from a URL. The SVG content is directly inlined
 *   as a child of the <md-icon> component, so that CSS styles can easily be applied to it.
 *   The URL is loaded via an XMLHttpRequest, so it must be on the same domain as the page or its
 *   server must be configured to allow cross-domain requests.
 *   Example:
 *     <md-icon svgSrc="assets/arrow.svg"></md-icon>
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MdIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     <md-icon svgIcon="left-arrow"></md-icon>
 *     <md-icon svgIcon="animals:cat"></md-icon>
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the <md-icon>
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MdIconRegistry.registerFontClassAlias.
 *   Examples:
 *     <md-icon>home</md-icon>
 *     <md-icon fontSet="myfont">sun</md-icon>
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     <md-icon fontSet="fa" fontIcon="alarm"></md-icon>
 */
export declare class MdIcon implements OnChanges, OnInit, AfterViewChecked {
    private _elementRef;
    private _renderer;
    private _mdIconRegistry;
    private _color;
    /** Name of the icon in the SVG icon set. */
    svgIcon: string;
    /** Font set that the icon is a part of. */
    fontSet: string;
    /** Name of an icon within a font set. */
    fontIcon: string;
    /** Alt label to be used for accessibility. */
    alt: string;
    /** Screenreader label for the icon. */
    hostAriaLabel: string;
    /** Color of the icon. */
    color: string;
    private _previousFontSetClass;
    private _previousFontIconClass;
    private _previousAriaLabel;
    constructor(_elementRef: ElementRef, _renderer: Renderer, _mdIconRegistry: MdIconRegistry);
    _updateColor(newColor: string): void;
    _setElementColor(color: string, isAdd: boolean): void;
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws a MdIconInvalidNameError if the name contains two or more ':' separators.
     * Examples:
     *   'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws MdIconInvalidNameError)
     */
    private _splitIconName(iconName);
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    private _updateAriaLabel();
    private _getAriaLabel();
    private _usingFontIcon();
    private _setSvgElement(svg);
    private _updateFontIconClasses();
}
export declare function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry: MdIconRegistry, http: Http, sanitizer: DomSanitizer): MdIconRegistry;
export declare const ICON_REGISTRY_PROVIDER: {
    provide: typeof MdIconRegistry;
    deps: (Optional[] | typeof Http | typeof DomSanitizer)[];
    useFactory: (parentRegistry: MdIconRegistry, http: Http, sanitizer: DomSanitizer) => MdIconRegistry;
};
