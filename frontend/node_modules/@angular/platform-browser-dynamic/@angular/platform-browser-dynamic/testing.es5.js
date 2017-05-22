import { platformCoreDynamicTesting } from '@angular/compiler/testing';
import { createPlatformFactory, NgModule, Injectable, Inject } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { ɵgetDOM, DOCUMENT } from '@angular/platform-browser';

/**
 * A DOM based implementation of the TestComponentRenderer.
 */
class DOMTestComponentRenderer extends TestComponentRenderer {
    constructor(_doc /** TODO #9100 */) {
        super();
        this._doc = _doc; /** TODO #9100 */
    }
    insertRootElement(rootElId) {
        const rootEl = ɵgetDOM().firstChild(ɵgetDOM().content(ɵgetDOM().createTemplate(`<div id="${rootElId}"></div>`)));
        // TODO(juliemr): can/should this be optional?
        const oldRoots = ɵgetDOM().querySelectorAll(this._doc, '[id^=root]');
        for (let i = 0; i < oldRoots.length; i++) {
            ɵgetDOM().remove(oldRoots[i]);
        }
        ɵgetDOM().appendChild(this._doc.body, rootEl);
    }
}
DOMTestComponentRenderer.decorators = [{ type: Injectable }];
/** @nocollapse */
DOMTestComponentRenderer.ctorParameters = () => [{ type: undefined, decorators: [{ type: Inject, args: [DOCUMENT] }] }];

/**
 * @stable
 */
const platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @stable
 */
class BrowserDynamicTestingModule {}
BrowserDynamicTestingModule.decorators = [{ type: NgModule, args: [{
        exports: [BrowserTestingModule],
        providers: [{ provide: TestComponentRenderer, useClass: DOMTestComponentRenderer }]
    }] }];
/** @nocollapse */
BrowserDynamicTestingModule.ctorParameters = () => [];

export { platformBrowserDynamicTesting, BrowserDynamicTestingModule, DOMTestComponentRenderer as ɵDOMTestComponentRenderer };
