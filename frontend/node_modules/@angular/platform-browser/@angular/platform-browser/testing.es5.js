import { PLATFORM_INITIALIZER, platformCore, createPlatformFactory, NgZone, APP_ID, NgModule } from '@angular/core';
import { ɵBrowserDomAdapter, AnimationDriver, ɵELEMENT_PROBE_PROVIDERS, BrowserModule, ɵgetDOM } from '@angular/platform-browser';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = self;
    } else {
        globalScope = global;
    }
} else {
    globalScope = window;
}
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
const _global = globalScope;
// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert = function assert(condition) {
    // TODO: to be fixed properly via #2830, noop for now
};

let browserDetection;
class BrowserDetection {
    get _ua() {
        if (typeof this._overrideUa === 'string') {
            return this._overrideUa;
        }
        return ɵgetDOM() ? ɵgetDOM().getUserAgent() : '';
    }
    static setup() {
        browserDetection = new BrowserDetection(null);
    }
    constructor(ua) {
        this._overrideUa = ua;
    }
    get isFirefox() {
        return this._ua.indexOf('Firefox') > -1;
    }
    get isAndroid() {
        return this._ua.indexOf('Mozilla/5.0') > -1 && this._ua.indexOf('Android') > -1 && this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Chrome') == -1 && this._ua.indexOf('IEMobile') == -1;
    }
    get isEdge() {
        return this._ua.indexOf('Edge') > -1;
    }
    get isIE() {
        return this._ua.indexOf('Trident') > -1;
    }
    get isWebkit() {
        return this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Edge') == -1 && this._ua.indexOf('IEMobile') == -1;
    }
    get isIOS7() {
        return (this._ua.indexOf('iPhone OS 7') > -1 || this._ua.indexOf('iPad OS 7') > -1) && this._ua.indexOf('IEMobile') == -1;
    }
    get isSlow() {
        return this.isAndroid || this.isIE || this.isIOS7;
    }
    // The Intl API is only natively supported in Chrome, Firefox, IE11 and Edge.
    // This detector is needed in tests to make the difference between:
    // 1) IE11/Edge: they have a native Intl API, but with some discrepancies
    // 2) IE9/IE10: they use the polyfill, and so no discrepancies
    get supportsNativeIntlApi() {
        return !!_global.Intl && _global.Intl !== _global.IntlPolyfill;
    }
    get isChromeDesktop() {
        return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Mobile Safari') == -1 && this._ua.indexOf('Edge') == -1;
    }
    // "Old Chrome" means Chrome 3X, where there are some discrepancies in the Intl API.
    // Android 4.4 and 5.X have such browsers by default (respectively 30 and 39).
    get isOldChrome() {
        return this._ua.indexOf('Chrome') > -1 && this._ua.indexOf('Chrome/3') > -1 && this._ua.indexOf('Edge') == -1;
    }
}
BrowserDetection.setup();
function createNgZone() {
    return new NgZone({ enableLongStackTrace: true });
}

function initBrowserTests() {
    ɵBrowserDomAdapter.makeCurrent();
    BrowserDetection.setup();
}
const _TEST_BROWSER_PLATFORM_PROVIDERS = [{ provide: PLATFORM_INITIALIZER, useValue: initBrowserTests, multi: true }];
/**
 * Platform for testing
 *
 * @stable
 */
const platformBrowserTesting = createPlatformFactory(platformCore, 'browserTesting', _TEST_BROWSER_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @stable
 */
class BrowserTestingModule {}
BrowserTestingModule.decorators = [{ type: NgModule, args: [{
        exports: [BrowserModule],
        providers: [{ provide: APP_ID, useValue: 'a' }, ɵELEMENT_PROBE_PROVIDERS, { provide: NgZone, useFactory: createNgZone }, { provide: AnimationDriver, useValue: AnimationDriver.NOOP }]
    }] }];
/** @nocollapse */
BrowserTestingModule.ctorParameters = () => [];

export { platformBrowserTesting, BrowserTestingModule };
