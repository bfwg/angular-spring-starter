/**
 * @license Angular v4.0.0-rc.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/platform-browser-dynamic/testing', ['exports', '@angular/compiler/testing', '@angular/core', '@angular/core/testing', '@angular/platform-browser-dynamic', '@angular/platform-browser/testing', '@angular/platform-browser'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/compiler/testing'), require('@angular/core'), require('@angular/core/testing'), require('@angular/platform-browser-dynamic'), require('@angular/platform-browser/testing'), require('@angular/platform-browser'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.compiler.testing, global.ng.core, global.ng.core.testing, global.ng.platformBrowserDynamic, global.ng.platformBrowser.testing, global.ng.platformBrowser);
        global.ng = global.ng || {};
        global.ng.platformBrowserDynamic = global.ng.platformBrowserDynamic || {};
        global.ng.platformBrowserDynamic.testing = mod.exports;
    }
})(this, function (exports, _testing, _core, _testing2, _platformBrowserDynamic, _testing3, _platformBrowser) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ɵDOMTestComponentRenderer = exports.BrowserDynamicTestingModule = exports.platformBrowserDynamicTesting = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var DOMTestComponentRenderer = function (_TestComponentRendere) {
        _inherits(DOMTestComponentRenderer, _TestComponentRendere);

        function DOMTestComponentRenderer(_doc /** TODO #9100 */) {
            _classCallCheck(this, DOMTestComponentRenderer);

            var _this = _possibleConstructorReturn(this, (DOMTestComponentRenderer.__proto__ || Object.getPrototypeOf(DOMTestComponentRenderer)).call(this));

            _this._doc = _doc; /** TODO #9100 */
            return _this;
        }

        _createClass(DOMTestComponentRenderer, [{
            key: 'insertRootElement',
            value: function insertRootElement(rootElId) {
                var rootEl = (0, _platformBrowser.ɵgetDOM)().firstChild((0, _platformBrowser.ɵgetDOM)().content((0, _platformBrowser.ɵgetDOM)().createTemplate('<div id="' + rootElId + '"></div>')));
                // TODO(juliemr): can/should this be optional?
                var oldRoots = (0, _platformBrowser.ɵgetDOM)().querySelectorAll(this._doc, '[id^=root]');
                for (var i = 0; i < oldRoots.length; i++) {
                    (0, _platformBrowser.ɵgetDOM)().remove(oldRoots[i]);
                }
                (0, _platformBrowser.ɵgetDOM)().appendChild(this._doc.body, rootEl);
            }
        }]);

        return DOMTestComponentRenderer;
    }(_testing2.TestComponentRenderer);

    DOMTestComponentRenderer.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    DOMTestComponentRenderer.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [_platformBrowser.DOCUMENT] }] }];
    };

    /**
     * @stable
     */
    var platformBrowserDynamicTesting = (0, _core.createPlatformFactory)(_testing.platformCoreDynamicTesting, 'browserDynamicTesting', _platformBrowserDynamic.ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
    /**
     * NgModule for testing.
     *
     * @stable
     */

    var BrowserDynamicTestingModule = function BrowserDynamicTestingModule() {
        _classCallCheck(this, BrowserDynamicTestingModule);
    };

    BrowserDynamicTestingModule.decorators = [{ type: _core.NgModule, args: [{
            exports: [_testing3.BrowserTestingModule],
            providers: [{ provide: _testing2.TestComponentRenderer, useClass: DOMTestComponentRenderer }]
        }] }];
    /** @nocollapse */
    BrowserDynamicTestingModule.ctorParameters = function () {
        return [];
    };

    exports.platformBrowserDynamicTesting = platformBrowserDynamicTesting;
    exports.BrowserDynamicTestingModule = BrowserDynamicTestingModule;
    exports.ɵDOMTestComponentRenderer = DOMTestComponentRenderer;
});
