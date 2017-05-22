(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/common', ['exports', '@angular/core'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/core'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.core);
        global.ng = global.ng || {};
        global.ng.common = mod.exports;
    }
})(this, function (exports, _core) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ɵd = exports.ɵb = exports.ɵa = exports.ɵc = exports.Location = exports.PathLocationStrategy = exports.HashLocationStrategy = exports.APP_BASE_HREF = exports.LocationStrategy = exports.PlatformLocation = exports.VERSION = exports.isPlatformWorkerUi = exports.isPlatformWorkerApp = exports.isPlatformServer = exports.isPlatformBrowser = exports.ɵPLATFORM_WORKER_UI_ID = exports.ɵPLATFORM_WORKER_APP_ID = exports.ɵPLATFORM_SERVER_ID = exports.ɵPLATFORM_BROWSER_ID = exports.TitleCasePipe = exports.UpperCasePipe = exports.SlicePipe = exports.PercentPipe = exports.DecimalPipe = exports.CurrencyPipe = exports.LowerCasePipe = exports.JsonPipe = exports.I18nSelectPipe = exports.I18nPluralPipe = exports.DatePipe = exports.AsyncPipe = exports.NgComponentOutlet = exports.NgTemplateOutlet = exports.NgSwitchDefault = exports.NgSwitchCase = exports.NgSwitch = exports.NgStyle = exports.NgPluralCase = exports.NgPlural = exports.NgIf = exports.NgForOf = exports.NgFor = exports.NgClass = exports.CommonModule = exports.NgLocalization = exports.NgLocaleLocalization = undefined;

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
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

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

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

    var PlatformLocation = function () {
        function PlatformLocation() {
            _classCallCheck(this, PlatformLocation);
        }

        _createClass(PlatformLocation, [{
            key: 'getBaseHrefFromDOM',
            value: function getBaseHrefFromDOM() {}
        }, {
            key: 'onPopState',
            value: function onPopState(fn) {}
        }, {
            key: 'onHashChange',
            value: function onHashChange(fn) {}
        }, {
            key: 'replaceState',
            value: function replaceState(state, title, url) {}
        }, {
            key: 'pushState',
            value: function pushState(state, title, url) {}
        }, {
            key: 'forward',
            value: function forward() {}
        }, {
            key: 'back',
            value: function back() {}
        }, {
            key: 'pathname',
            get: function get() {
                return null;
            }
        }, {
            key: 'search',
            get: function get() {
                return null;
            }
        }, {
            key: 'hash',
            get: function get() {
                return null;
            }
        }]);

        return PlatformLocation;
    }();

    var LocationStrategy = function () {
        function LocationStrategy() {
            _classCallCheck(this, LocationStrategy);
        }

        _createClass(LocationStrategy, [{
            key: 'path',
            value: function path(includeHash) {}
        }, {
            key: 'prepareExternalUrl',
            value: function prepareExternalUrl(internal) {}
        }, {
            key: 'pushState',
            value: function pushState(state, title, url, queryParams) {}
        }, {
            key: 'replaceState',
            value: function replaceState(state, title, url, queryParams) {}
        }, {
            key: 'forward',
            value: function forward() {}
        }, {
            key: 'back',
            value: function back() {}
        }, {
            key: 'onPopState',
            value: function onPopState(fn) {}
        }, {
            key: 'getBaseHref',
            value: function getBaseHref() {}
        }]);

        return LocationStrategy;
    }();

    /**
     * The `APP_BASE_HREF` token represents the base href to be used with the
     * {@link PathLocationStrategy}.
     *
     * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
     * representing the URL prefix that should be preserved when generating and recognizing
     * URLs.
     *
     * ### Example
     *
     * ```typescript
     * import {Component, NgModule} from '@angular/core';
     * import {APP_BASE_HREF} from '@angular/common';
     *
     * @NgModule({
     *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
     * })
     * class AppModule {}
     * ```
     *
     * @stable
     */
    var /** @type {?} */APP_BASE_HREF = new _core.InjectionToken('appBaseHref');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var /** @type {?} */globalScope = void 0;
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
    var /** @type {?} */_global = globalScope;
    /**
     * @param {?} type
     * @return {?}
     */
    function getTypeNameForDebugging(type) {
        return type['name'] || (typeof type === 'undefined' ? 'undefined' : _typeof(type));
    }
    // TODO: remove calls to assert in production environment
    // Note: Can't just export this and import in in other files
    // as `assert` is a reserved keyword in Dart
    _global.assert = function assert(condition) {
        // TODO: to be fixed properly via #2830, noop for now
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    function isPresent(obj) {
        return obj != null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isBlank(obj) {
        return obj == null;
    }
    /**
     * @param {?} token
     * @return {?}
     */
    function stringify(token) {
        if (typeof token === 'string') {
            return token;
        }
        if (token == null) {
            return '' + token;
        }
        if (token.overriddenName) {
            return '' + token.overriddenName;
        }
        if (token.name) {
            return '' + token.name;
        }
        var /** @type {?} */res = token.toString();
        var /** @type {?} */newLineIndex = res.indexOf('\n');
        return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
    }

    var NumberWrapper = function () {
        function NumberWrapper() {
            _classCallCheck(this, NumberWrapper);
        }

        _createClass(NumberWrapper, null, [{
            key: 'parseIntAutoRadix',
            value: function parseIntAutoRadix(text) {
                var /** @type {?} */result = parseInt(text);
                if (isNaN(result)) {
                    throw new Error('Invalid integer literal when parsing ' + text);
                }
                return result;
            }
        }, {
            key: 'isNumeric',
            value: function isNumeric(value) {
                return !isNaN(value - parseFloat(value));
            }
        }]);

        return NumberWrapper;
    }();

    /**
     * @param {?} o
     * @return {?}
     */
    function isJsObject(o) {
        return o !== null && (typeof o === 'function' || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object');
    }
    var /** @type {?} */_symbolIterator = null;
    /**
     * @return {?}
     */
    function getSymbolIterator() {
        if (!_symbolIterator) {
            if (globalScope.Symbol && Symbol.iterator) {
                _symbolIterator = Symbol.iterator;
            } else {
                // es6-shim specific logic
                var /** @type {?} */keys = Object.getOwnPropertyNames(Map.prototype);
                for (var /** @type {?} */i = 0; i < keys.length; ++i) {
                    var /** @type {?} */key = keys[i];
                    if (key !== 'entries' && key !== 'size' && Map.prototype[key] === Map.prototype['entries']) {
                        _symbolIterator = key;
                    }
                }
            }
        }
        return _symbolIterator;
    }

    /**
     * \@whatItDoes `Location` is a service that applications can use to interact with a browser's URL.
     * \@description
     * Depending on which {\@link LocationStrategy} is used, `Location` will either persist
     * to the URL's path or the URL's hash segment.
     *
     * Note: it's better to use {\@link Router#navigate} service to trigger route changes. Use
     * `Location` only if you need to interact with or create normalized URLs outside of
     * routing.
     *
     * `Location` is responsible for normalizing the URL against the application's base href.
     * A normalized URL is absolute from the URL host, includes the application's base href, and has no
     * trailing slash:
     * - `/my/app/user/123` is normalized
     * - `my/app/user/123` **is not** normalized
     * - `/my/app/user/123/` **is not** normalized
     *
     * ### Example
     * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
     * \@stable
     */

    var Location = function () {
        /**
         * @param {?} platformStrategy
         */
        function Location(platformStrategy) {
            var _this = this;

            _classCallCheck(this, Location);

            /** @internal */
            this._subject = new _core.EventEmitter();
            this._platformStrategy = platformStrategy;
            var browserBaseHref = this._platformStrategy.getBaseHref();
            this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
            this._platformStrategy.onPopState(function (ev) {
                _this._subject.emit({
                    'url': _this.path(true),
                    'pop': true,
                    'type': ev.type
                });
            });
        }
        /**
         * @param {?=} includeHash
         * @return {?}
         */


        _createClass(Location, [{
            key: 'path',
            value: function path() {
                var includeHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                return this.normalize(this._platformStrategy.path(includeHash));
            }
        }, {
            key: 'isCurrentPathEqualTo',
            value: function isCurrentPathEqualTo(path) {
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

                return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
            }
        }, {
            key: 'normalize',
            value: function normalize(url) {
                return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
            }
        }, {
            key: 'prepareExternalUrl',
            value: function prepareExternalUrl(url) {
                if (url && url[0] !== '/') {
                    url = '/' + url;
                }
                return this._platformStrategy.prepareExternalUrl(url);
            }
        }, {
            key: 'go',
            value: function go(path) {
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

                this._platformStrategy.pushState(null, '', path, query);
            }
        }, {
            key: 'replaceState',
            value: function replaceState(path) {
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

                this._platformStrategy.replaceState(null, '', path, query);
            }
        }, {
            key: 'forward',
            value: function forward() {
                this._platformStrategy.forward();
            }
        }, {
            key: 'back',
            value: function back() {
                this._platformStrategy.back();
            }
        }, {
            key: 'subscribe',
            value: function subscribe(onNext) {
                var onThrow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var onReturn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
            }
        }], [{
            key: 'normalizeQueryParams',
            value: function normalizeQueryParams(params) {
                return params && params[0] !== '?' ? '?' + params : params;
            }
        }, {
            key: 'joinWithSlash',
            value: function joinWithSlash(start, end) {
                if (start.length == 0) {
                    return end;
                }
                if (end.length == 0) {
                    return start;
                }
                var /** @type {?} */slashes = 0;
                if (start.endsWith('/')) {
                    slashes++;
                }
                if (end.startsWith('/')) {
                    slashes++;
                }
                if (slashes == 2) {
                    return start + end.substring(1);
                }
                if (slashes == 1) {
                    return start + end;
                }
                return start + '/' + end;
            }
        }, {
            key: 'stripTrailingSlash',
            value: function stripTrailingSlash(url) {
                return url.replace(/\/$/, '');
            }
        }]);

        return Location;
    }();

    Location.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    Location.ctorParameters = function () {
        return [{ type: LocationStrategy }];
    };
    /**
     * @param {?} baseHref
     * @param {?} url
     * @return {?}
     */
    function _stripBaseHref(baseHref, url) {
        return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    function _stripIndexHtml(url) {
        return url.replace(/\/index.html$/, '');
    }

    /**
     * \@whatItDoes Use URL hash for storing application location data.
     * \@description
     * `HashLocationStrategy` is a {\@link LocationStrategy} used to configure the
     * {\@link Location} service to represent its state in the
     * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
     * of the browser's URL.
     *
     * For instance, if you call `location.go('/foo')`, the browser's URL will become
     * `example.com#/foo`.
     *
     * ### Example
     *
     * {\@example common/location/ts/hash_location_component.ts region='LocationComponent'}
     *
     * \@stable
     */

    var HashLocationStrategy = function (_LocationStrategy) {
        _inherits(HashLocationStrategy, _LocationStrategy);

        /**
         * @param {?} _platformLocation
         * @param {?=} _baseHref
         */
        function HashLocationStrategy(_platformLocation, _baseHref) {
            _classCallCheck(this, HashLocationStrategy);

            var _this2 = _possibleConstructorReturn(this, (HashLocationStrategy.__proto__ || Object.getPrototypeOf(HashLocationStrategy)).call(this));

            _this2._platformLocation = _platformLocation;
            _this2._baseHref = '';
            if (isPresent(_baseHref)) {
                _this2._baseHref = _baseHref;
            }
            return _this2;
        }
        /**
         * @param {?} fn
         * @return {?}
         */


        _createClass(HashLocationStrategy, [{
            key: 'onPopState',
            value: function onPopState(fn) {
                this._platformLocation.onPopState(fn);
                this._platformLocation.onHashChange(fn);
            }
        }, {
            key: 'getBaseHref',
            value: function getBaseHref() {
                return this._baseHref;
            }
        }, {
            key: 'path',
            value: function path() {
                var includeHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                // the hash value is always prefixed with a `#`
                // and if it is empty then it will stay empty
                var /** @type {?} */path = this._platformLocation.hash;
                if (!isPresent(path)) path = '#';
                return path.length > 0 ? path.substring(1) : path;
            }
        }, {
            key: 'prepareExternalUrl',
            value: function prepareExternalUrl(internal) {
                var /** @type {?} */url = Location.joinWithSlash(this._baseHref, internal);
                return url.length > 0 ? '#' + url : url;
            }
        }, {
            key: 'pushState',
            value: function pushState(state, title, path, queryParams) {
                var /** @type {?} */url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
                if (url.length == 0) {
                    url = this._platformLocation.pathname;
                }
                this._platformLocation.pushState(state, title, url);
            }
        }, {
            key: 'replaceState',
            value: function replaceState(state, title, path, queryParams) {
                var /** @type {?} */url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
                if (url.length == 0) {
                    url = this._platformLocation.pathname;
                }
                this._platformLocation.replaceState(state, title, url);
            }
        }, {
            key: 'forward',
            value: function forward() {
                this._platformLocation.forward();
            }
        }, {
            key: 'back',
            value: function back() {
                this._platformLocation.back();
            }
        }]);

        return HashLocationStrategy;
    }(LocationStrategy);

    HashLocationStrategy.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    HashLocationStrategy.ctorParameters = function () {
        return [{ type: PlatformLocation }, { type: undefined, decorators: [{ type: _core.Optional }, { type: _core.Inject, args: [APP_BASE_HREF] }] }];
    };

    /**
     * \@whatItDoes Use URL for storing application location data.
     * \@description
     * `PathLocationStrategy` is a {\@link LocationStrategy} used to configure the
     * {\@link Location} service to represent its state in the
     * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
     * browser's URL.
     *
     * If you're using `PathLocationStrategy`, you must provide a {\@link APP_BASE_HREF}
     * or add a base element to the document. This URL prefix that will be preserved
     * when generating and recognizing URLs.
     *
     * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * Similarly, if you add `<base href='/my/app'/>` to the document and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * ### Example
     *
     * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
     *
     * \@stable
     */

    var PathLocationStrategy = function (_LocationStrategy2) {
        _inherits(PathLocationStrategy, _LocationStrategy2);

        /**
         * @param {?} _platformLocation
         * @param {?=} href
         */
        function PathLocationStrategy(_platformLocation, href) {
            _classCallCheck(this, PathLocationStrategy);

            var _this3 = _possibleConstructorReturn(this, (PathLocationStrategy.__proto__ || Object.getPrototypeOf(PathLocationStrategy)).call(this));

            _this3._platformLocation = _platformLocation;
            if (isBlank(href)) {
                href = _this3._platformLocation.getBaseHrefFromDOM();
            }
            if (isBlank(href)) {
                throw new Error('No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.');
            }
            _this3._baseHref = href;
            return _this3;
        }
        /**
         * @param {?} fn
         * @return {?}
         */


        _createClass(PathLocationStrategy, [{
            key: 'onPopState',
            value: function onPopState(fn) {
                this._platformLocation.onPopState(fn);
                this._platformLocation.onHashChange(fn);
            }
        }, {
            key: 'getBaseHref',
            value: function getBaseHref() {
                return this._baseHref;
            }
        }, {
            key: 'prepareExternalUrl',
            value: function prepareExternalUrl(internal) {
                return Location.joinWithSlash(this._baseHref, internal);
            }
        }, {
            key: 'path',
            value: function path() {
                var includeHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                var /** @type {?} */pathname = this._platformLocation.pathname + Location.normalizeQueryParams(this._platformLocation.search);
                var /** @type {?} */hash = this._platformLocation.hash;
                return hash && includeHash ? '' + pathname + hash : pathname;
            }
        }, {
            key: 'pushState',
            value: function pushState(state, title, url, queryParams) {
                var /** @type {?} */externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
                this._platformLocation.pushState(state, title, externalUrl);
            }
        }, {
            key: 'replaceState',
            value: function replaceState(state, title, url, queryParams) {
                var /** @type {?} */externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
                this._platformLocation.replaceState(state, title, externalUrl);
            }
        }, {
            key: 'forward',
            value: function forward() {
                this._platformLocation.forward();
            }
        }, {
            key: 'back',
            value: function back() {
                this._platformLocation.back();
            }
        }]);

        return PathLocationStrategy;
    }(LocationStrategy);

    PathLocationStrategy.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    PathLocationStrategy.ctorParameters = function () {
        return [{ type: PlatformLocation }, { type: undefined, decorators: [{ type: _core.Optional }, { type: _core.Inject, args: [APP_BASE_HREF] }] }];
    };

    /**
     * \@experimental
     * @abstract
     */

    var NgLocalization = function () {
        function NgLocalization() {
            _classCallCheck(this, NgLocalization);
        }

        _createClass(NgLocalization, [{
            key: 'getPluralCategory',
            value: function getPluralCategory(value) {}
        }]);

        return NgLocalization;
    }();

    /**
     * Returns the plural category for a given value.
     * - "=value" when the case exists,
     * - the plural category otherwise
     *
     * \@internal
     * @param {?} value
     * @param {?} cases
     * @param {?} ngLocalization
     * @return {?}
     */
    function getPluralCategory(value, cases, ngLocalization) {
        var /** @type {?} */key = '=' + value;
        if (cases.indexOf(key) > -1) {
            return key;
        }
        key = ngLocalization.getPluralCategory(value);
        if (cases.indexOf(key) > -1) {
            return key;
        }
        if (cases.indexOf('other') > -1) {
            return 'other';
        }
        throw new Error('No plural message found for value "' + value + '"');
    }
    /**
     * Returns the plural case based on the locale
     *
     * \@experimental
     */

    var NgLocaleLocalization = function (_NgLocalization) {
        _inherits(NgLocaleLocalization, _NgLocalization);

        /**
         * @param {?} locale
         */
        function NgLocaleLocalization(locale) {
            _classCallCheck(this, NgLocaleLocalization);

            var _this4 = _possibleConstructorReturn(this, (NgLocaleLocalization.__proto__ || Object.getPrototypeOf(NgLocaleLocalization)).call(this));

            _this4.locale = locale;
            return _this4;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(NgLocaleLocalization, [{
            key: 'getPluralCategory',
            value: function getPluralCategory(value) {
                var /** @type {?} */plural = getPluralCase(this.locale, value);
                switch (plural) {
                    case Plural.Zero:
                        return 'zero';
                    case Plural.One:
                        return 'one';
                    case Plural.Two:
                        return 'two';
                    case Plural.Few:
                        return 'few';
                    case Plural.Many:
                        return 'many';
                    default:
                        return 'other';
                }
            }
        }]);

        return NgLocaleLocalization;
    }(NgLocalization);

    NgLocaleLocalization.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgLocaleLocalization.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [_core.LOCALE_ID] }] }];
    };
    var Plural = {};
    Plural.Zero = 0;
    Plural.One = 1;
    Plural.Two = 2;
    Plural.Few = 3;
    Plural.Many = 4;
    Plural.Other = 5;
    Plural[Plural.Zero] = "Zero";
    Plural[Plural.One] = "One";
    Plural[Plural.Two] = "Two";
    Plural[Plural.Few] = "Few";
    Plural[Plural.Many] = "Many";
    Plural[Plural.Other] = "Other";
    /**
     * Returns the plural case based on the locale
     *
     * \@experimental
     * @param {?} locale
     * @param {?} nLike
     * @return {?}
     */
    function getPluralCase(locale, nLike) {
        // TODO(vicb): lazy compute
        if (typeof nLike === 'string') {
            nLike = parseInt( /** @type {?} */nLike, 10);
        }
        var /** @type {?} */n = nLike;
        var /** @type {?} */nDecimal = n.toString().replace(/^[^.]*\.?/, '');
        var /** @type {?} */i = Math.floor(Math.abs(n));
        var /** @type {?} */v = nDecimal.length;
        var /** @type {?} */f = parseInt(nDecimal, 10);
        var /** @type {?} */t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
        var /** @type {?} */lang = locale.split('-')[0].toLowerCase();
        switch (lang) {
            case 'af':
            case 'asa':
            case 'az':
            case 'bem':
            case 'bez':
            case 'bg':
            case 'brx':
            case 'ce':
            case 'cgg':
            case 'chr':
            case 'ckb':
            case 'ee':
            case 'el':
            case 'eo':
            case 'es':
            case 'eu':
            case 'fo':
            case 'fur':
            case 'gsw':
            case 'ha':
            case 'haw':
            case 'hu':
            case 'jgo':
            case 'jmc':
            case 'ka':
            case 'kk':
            case 'kkj':
            case 'kl':
            case 'ks':
            case 'ksb':
            case 'ky':
            case 'lb':
            case 'lg':
            case 'mas':
            case 'mgo':
            case 'ml':
            case 'mn':
            case 'nb':
            case 'nd':
            case 'ne':
            case 'nn':
            case 'nnh':
            case 'nyn':
            case 'om':
            case 'or':
            case 'os':
            case 'ps':
            case 'rm':
            case 'rof':
            case 'rwk':
            case 'saq':
            case 'seh':
            case 'sn':
            case 'so':
            case 'sq':
            case 'ta':
            case 'te':
            case 'teo':
            case 'tk':
            case 'tr':
            case 'ug':
            case 'uz':
            case 'vo':
            case 'vun':
            case 'wae':
            case 'xog':
                if (n === 1) return Plural.One;
                return Plural.Other;
            case 'agq':
            case 'bas':
            case 'cu':
            case 'dav':
            case 'dje':
            case 'dua':
            case 'dyo':
            case 'ebu':
            case 'ewo':
            case 'guz':
            case 'kam':
            case 'khq':
            case 'ki':
            case 'kln':
            case 'kok':
            case 'ksf':
            case 'lrc':
            case 'lu':
            case 'luo':
            case 'luy':
            case 'mer':
            case 'mfe':
            case 'mgh':
            case 'mua':
            case 'mzn':
            case 'nmg':
            case 'nus':
            case 'qu':
            case 'rn':
            case 'rw':
            case 'sbp':
            case 'twq':
            case 'vai':
            case 'yav':
            case 'yue':
            case 'zgh':
            case 'ak':
            case 'ln':
            case 'mg':
            case 'pa':
            case 'ti':
                if (n === Math.floor(n) && n >= 0 && n <= 1) return Plural.One;
                return Plural.Other;
            case 'am':
            case 'as':
            case 'bn':
            case 'fa':
            case 'gu':
            case 'hi':
            case 'kn':
            case 'mr':
            case 'zu':
                if (i === 0 || n === 1) return Plural.One;
                return Plural.Other;
            case 'ar':
                if (n === 0) return Plural.Zero;
                if (n === 1) return Plural.One;
                if (n === 2) return Plural.Two;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10) return Plural.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99) return Plural.Many;
                return Plural.Other;
            case 'ast':
            case 'ca':
            case 'de':
            case 'en':
            case 'et':
            case 'fi':
            case 'fy':
            case 'gl':
            case 'it':
            case 'nl':
            case 'sv':
            case 'sw':
            case 'ur':
            case 'yi':
                if (i === 1 && v === 0) return Plural.One;
                return Plural.Other;
            case 'be':
                if (n % 10 === 1 && !(n % 100 === 11)) return Plural.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14)) return Plural.Few;
                if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14) return Plural.Many;
                return Plural.Other;
            case 'br':
                if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91)) return Plural.One;
                if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92)) return Plural.Two;
                if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) && !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 || n % 100 >= 90 && n % 100 <= 99)) return Plural.Few;
                if (!(n === 0) && n % 1e6 === 0) return Plural.Many;
                return Plural.Other;
            case 'bs':
            case 'hr':
            case 'sr':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11)) return Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14) || f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 && !(f % 100 >= 12 && f % 100 <= 14)) return Plural.Few;
                return Plural.Other;
            case 'cs':
            case 'sk':
                if (i === 1 && v === 0) return Plural.One;
                if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0) return Plural.Few;
                if (!(v === 0)) return Plural.Many;
                return Plural.Other;
            case 'cy':
                if (n === 0) return Plural.Zero;
                if (n === 1) return Plural.One;
                if (n === 2) return Plural.Two;
                if (n === 3) return Plural.Few;
                if (n === 6) return Plural.Many;
                return Plural.Other;
            case 'da':
                if (n === 1 || !(t === 0) && (i === 0 || i === 1)) return Plural.One;
                return Plural.Other;
            case 'dsb':
            case 'hsb':
                if (v === 0 && i % 100 === 1 || f % 100 === 1) return Plural.One;
                if (v === 0 && i % 100 === 2 || f % 100 === 2) return Plural.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4) return Plural.Few;
                return Plural.Other;
            case 'ff':
            case 'fr':
            case 'hy':
            case 'kab':
                if (i === 0 || i === 1) return Plural.One;
                return Plural.Other;
            case 'fil':
                if (v === 0 && (i === 1 || i === 2 || i === 3) || v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) || !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9)) return Plural.One;
                return Plural.Other;
            case 'ga':
                if (n === 1) return Plural.One;
                if (n === 2) return Plural.Two;
                if (n === Math.floor(n) && n >= 3 && n <= 6) return Plural.Few;
                if (n === Math.floor(n) && n >= 7 && n <= 10) return Plural.Many;
                return Plural.Other;
            case 'gd':
                if (n === 1 || n === 11) return Plural.One;
                if (n === 2 || n === 12) return Plural.Two;
                if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19)) return Plural.Few;
                return Plural.Other;
            case 'gv':
                if (v === 0 && i % 10 === 1) return Plural.One;
                if (v === 0 && i % 10 === 2) return Plural.Two;
                if (v === 0 && (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80)) return Plural.Few;
                if (!(v === 0)) return Plural.Many;
                return Plural.Other;
            case 'he':
                if (i === 1 && v === 0) return Plural.One;
                if (i === 2 && v === 0) return Plural.Two;
                if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0) return Plural.Many;
                return Plural.Other;
            case 'is':
                if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0)) return Plural.One;
                return Plural.Other;
            case 'ksh':
                if (n === 0) return Plural.Zero;
                if (n === 1) return Plural.One;
                return Plural.Other;
            case 'kw':
            case 'naq':
            case 'se':
            case 'smn':
                if (n === 1) return Plural.One;
                if (n === 2) return Plural.Two;
                return Plural.Other;
            case 'lag':
                if (n === 0) return Plural.Zero;
                if ((i === 0 || i === 1) && !(n === 0)) return Plural.One;
                return Plural.Other;
            case 'lt':
                if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19)) return Plural.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 && !(n % 100 >= 11 && n % 100 <= 19)) return Plural.Few;
                if (!(f === 0)) return Plural.Many;
                return Plural.Other;
            case 'lv':
            case 'prg':
                if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 || v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19) return Plural.Zero;
                if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) || !(v === 2) && f % 10 === 1) return Plural.One;
                return Plural.Other;
            case 'mk':
                if (v === 0 && i % 10 === 1 || f % 10 === 1) return Plural.One;
                return Plural.Other;
            case 'mt':
                if (n === 1) return Plural.One;
                if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10) return Plural.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19) return Plural.Many;
                return Plural.Other;
            case 'pl':
                if (i === 1 && v === 0) return Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14)) return Plural.Few;
                if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 || v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 || v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14) return Plural.Many;
                return Plural.Other;
            case 'pt':
                if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2)) return Plural.One;
                return Plural.Other;
            case 'ro':
                if (i === 1 && v === 0) return Plural.One;
                if (!(v === 0) || n === 0 || !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19) return Plural.Few;
                return Plural.Other;
            case 'ru':
            case 'uk':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11)) return Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14)) return Plural.Few;
                if (v === 0 && i % 10 === 0 || v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 || v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14) return Plural.Many;
                return Plural.Other;
            case 'shi':
                if (i === 0 || n === 1) return Plural.One;
                if (n === Math.floor(n) && n >= 2 && n <= 10) return Plural.Few;
                return Plural.Other;
            case 'si':
                if (n === 0 || n === 1 || i === 0 && f === 1) return Plural.One;
                return Plural.Other;
            case 'sl':
                if (v === 0 && i % 100 === 1) return Plural.One;
                if (v === 0 && i % 100 === 2) return Plural.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0)) return Plural.Few;
                return Plural.Other;
            case 'tzm':
                if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99) return Plural.One;
                return Plural.Other;
            default:
                return Plural.Other;
        }
    }

    /**
     * @param {?} obj
     * @return {?}
     */
    function isListLikeIterable(obj) {
        if (!isJsObject(obj)) return false;
        return Array.isArray(obj) || !(obj instanceof Map) && getSymbolIterator() in obj; // JS Iterable have a Symbol.iterator prop
    }

    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Adds and removes CSS classes on an HTML element.
     *
     * \@howToUse
     * ```
     *     <some-element [ngClass]="'first second'">...</some-element>
     *
     *     <some-element [ngClass]="['first', 'second']">...</some-element>
     *
     *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
     *
     *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
     *
     *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
     * ```
     *
     * \@description
     *
     * The CSS classes are updated as follows, depending on the type of the expression evaluation:
     * - `string` - the CSS classes listed in the string (space delimited) are added,
     * - `Array` - the CSS classes declared as Array elements are added,
     * - `Object` - keys are CSS classes that get added when the expression given in the value
     *              evaluates to a truthy value, otherwise they are removed.
     *
     * \@stable
     */

    var NgClass = function () {
        /**
         * @param {?} _iterableDiffers
         * @param {?} _keyValueDiffers
         * @param {?} _ngEl
         * @param {?} _renderer
         */
        function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
            _classCallCheck(this, NgClass);

            this._iterableDiffers = _iterableDiffers;
            this._keyValueDiffers = _keyValueDiffers;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this._initialClasses = [];
        }
        /**
         * @param {?} v
         * @return {?}
         */


        _createClass(NgClass, [{
            key: 'ngDoCheck',
            value: function ngDoCheck() {
                if (this._iterableDiffer) {
                    var /** @type {?} */iterableChanges = this._iterableDiffer.diff( /** @type {?} */this._rawClass);
                    if (iterableChanges) {
                        this._applyIterableChanges(iterableChanges);
                    }
                } else if (this._keyValueDiffer) {
                    var /** @type {?} */keyValueChanges = this._keyValueDiffer.diff( /** @type {?} */this._rawClass);
                    if (keyValueChanges) {
                        this._applyKeyValueChanges(keyValueChanges);
                    }
                }
            }
        }, {
            key: '_cleanupClasses',
            value: function _cleanupClasses(rawClassVal) {
                this._applyClasses(rawClassVal, true);
                this._applyInitialClasses(false);
            }
        }, {
            key: '_applyKeyValueChanges',
            value: function _applyKeyValueChanges(changes) {
                var _this5 = this;

                changes.forEachAddedItem(function (record) {
                    return _this5._toggleClass(record.key, record.currentValue);
                });
                changes.forEachChangedItem(function (record) {
                    return _this5._toggleClass(record.key, record.currentValue);
                });
                changes.forEachRemovedItem(function (record) {
                    if (record.previousValue) {
                        _this5._toggleClass(record.key, false);
                    }
                });
            }
        }, {
            key: '_applyIterableChanges',
            value: function _applyIterableChanges(changes) {
                var _this6 = this;

                changes.forEachAddedItem(function (record) {
                    if (typeof record.item === 'string') {
                        _this6._toggleClass(record.item, true);
                    } else {
                        throw new Error('NgClass can only toggle CSS classes expressed as strings, got ' + stringify(record.item));
                    }
                });
                changes.forEachRemovedItem(function (record) {
                    return _this6._toggleClass(record.item, false);
                });
            }
        }, {
            key: '_applyInitialClasses',
            value: function _applyInitialClasses(isCleanup) {
                var _this7 = this;

                this._initialClasses.forEach(function (klass) {
                    return _this7._toggleClass(klass, !isCleanup);
                });
            }
        }, {
            key: '_applyClasses',
            value: function _applyClasses(rawClassVal, isCleanup) {
                var _this8 = this;

                if (rawClassVal) {
                    if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                        rawClassVal.forEach(function (klass) {
                            return _this8._toggleClass(klass, !isCleanup);
                        });
                    } else {
                        Object.keys(rawClassVal).forEach(function (klass) {
                            if (rawClassVal[klass] != null) _this8._toggleClass(klass, !isCleanup);
                        });
                    }
                }
            }
        }, {
            key: '_toggleClass',
            value: function _toggleClass(klass, enabled) {
                var _this9 = this;

                klass = klass.trim();
                if (klass) {
                    klass.split(/\s+/g).forEach(function (klass) {
                        _this9._renderer.setElementClass(_this9._ngEl.nativeElement, klass, !!enabled);
                    });
                }
            }
        }, {
            key: 'klass',
            set: function set(v) {
                this._applyInitialClasses(true);
                this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
                this._applyInitialClasses(false);
                this._applyClasses(this._rawClass, false);
            }
        }, {
            key: 'ngClass',
            set: function set(v) {
                this._cleanupClasses(this._rawClass);
                this._iterableDiffer = null;
                this._keyValueDiffer = null;
                this._rawClass = typeof v === 'string' ? v.split(/\s+/) : v;
                if (this._rawClass) {
                    if (isListLikeIterable(this._rawClass)) {
                        this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
                    } else {
                        this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
                    }
                }
            }
        }]);

        return NgClass;
    }();

    NgClass.decorators = [{ type: _core.Directive, args: [{ selector: '[ngClass]' }] }];
    /** @nocollapse */
    NgClass.ctorParameters = function () {
        return [{ type: _core.IterableDiffers }, { type: _core.KeyValueDiffers }, { type: _core.ElementRef }, { type: _core.Renderer }];
    };
    NgClass.propDecorators = {
        'klass': [{ type: _core.Input, args: ['class'] }],
        'ngClass': [{ type: _core.Input }]
    };

    /**
     * Instantiates a single {\@link Component} type and inserts its Host View into current View.
     * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
     *
     * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
     * any existing component will get destroyed.
     *
     * ### Fine tune control
     *
     * You can control the component creation process by using the following optional attributes:
     *
     * * `ngComponentOutletInjector`: Optional custom {\@link Injector} that will be used as parent for
     * the Component. Defaults to the injector of the current view container.
     *
     * * `ngComponentOutletProviders`: Optional injectable objects ({\@link Provider}) that are visible
     * to the component.
     *
     * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
     * section of the component, if exists.
     *
     * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
     * module, then load a component from that module.
     *
     * ### Syntax
     *
     * Simple
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
     * ```
     *
     * Customized injector/content
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   injector: injectorExpression;
     *                                   content: contentNodesExpression;">
     * </ng-container>
     * ```
     *
     * Customized ngModuleFactory
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   ngModuleFactory: moduleFactory;">
     * </ng-container>
     * ```
     * # Example
     *
     * {\@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
     *
     * A more complete example with additional options:
     *
     * {\@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
     * A more complete example with ngModuleFactory:
     *
     * {\@example common/ngComponentOutlet/ts/module.ts region='NgModuleFactoryExample'}
     *
     * \@experimental
     */

    var NgComponentOutlet = function () {
        /**
         * @param {?} _viewContainerRef
         */
        function NgComponentOutlet(_viewContainerRef) {
            _classCallCheck(this, NgComponentOutlet);

            this._viewContainerRef = _viewContainerRef;
            this._componentRef = null;
            this._moduleRef = null;
        }
        /**
         * @param {?} changes
         * @return {?}
         */


        _createClass(NgComponentOutlet, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                if (this._componentRef) {
                    this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
                }
                this._viewContainerRef.clear();
                this._componentRef = null;
                if (this.ngComponentOutlet) {
                    var /** @type {?} */injector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
                    if (changes.ngComponentOutletNgModuleFactory) {
                        if (this._moduleRef) this._moduleRef.destroy();
                        if (this.ngComponentOutletNgModuleFactory) {
                            this._moduleRef = this.ngComponentOutletNgModuleFactory.create(injector);
                        } else {
                            this._moduleRef = null;
                        }
                    }
                    if (this._moduleRef) {
                        injector = this._moduleRef.injector;
                    }
                    var /** @type {?} */componentFactory = injector.get(_core.ComponentFactoryResolver).resolveComponentFactory(this.ngComponentOutlet);
                    this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, injector, this.ngComponentOutletContent);
                }
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                if (this._moduleRef) this._moduleRef.destroy();
            }
        }]);

        return NgComponentOutlet;
    }();

    NgComponentOutlet.decorators = [{ type: _core.Directive, args: [{ selector: '[ngComponentOutlet]' }] }];
    /** @nocollapse */
    NgComponentOutlet.ctorParameters = function () {
        return [{ type: _core.ViewContainerRef }];
    };
    NgComponentOutlet.propDecorators = {
        'ngComponentOutlet': [{ type: _core.Input }],
        'ngComponentOutletInjector': [{ type: _core.Input }],
        'ngComponentOutletContent': [{ type: _core.Input }],
        'ngComponentOutletNgModuleFactory': [{ type: _core.Input }]
    };

    var NgForOfRow = function () {
        /**
         * @param {?} $implicit
         * @param {?} index
         * @param {?} count
         */
        function NgForOfRow($implicit, index, count) {
            _classCallCheck(this, NgForOfRow);

            this.$implicit = $implicit;
            this.index = index;
            this.count = count;
        }
        /**
         * @return {?}
         */


        _createClass(NgForOfRow, [{
            key: 'first',
            get: function get() {
                return this.index === 0;
            }
        }, {
            key: 'last',
            get: function get() {
                return this.index === this.count - 1;
            }
        }, {
            key: 'even',
            get: function get() {
                return this.index % 2 === 0;
            }
        }, {
            key: 'odd',
            get: function get() {
                return !this.even;
            }
        }]);

        return NgForOfRow;
    }();

    var NgForOf = function () {
        /**
         * @param {?} _viewContainer
         * @param {?} _template
         * @param {?} _differs
         */
        function NgForOf(_viewContainer, _template, _differs) {
            _classCallCheck(this, NgForOf);

            this._viewContainer = _viewContainer;
            this._template = _template;
            this._differs = _differs;
            this._differ = null;
        }
        /**
         * @param {?} fn
         * @return {?}
         */


        _createClass(NgForOf, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                if ('ngForOf' in changes) {
                    // React on ngForOf changes only once all inputs have been initialized
                    var /** @type {?} */value = changes['ngForOf'].currentValue;
                    if (!this._differ && value) {
                        try {
                            this._differ = this._differs.find(value).create(this.ngForTrackBy);
                        } catch (e) {
                            throw new Error('Cannot find a differ supporting object \'' + value + '\' of type \'' + getTypeNameForDebugging(value) + '\'. NgFor only supports binding to Iterables such as Arrays.');
                        }
                    }
                }
            }
        }, {
            key: 'ngDoCheck',
            value: function ngDoCheck() {
                if (this._differ) {
                    var /** @type {?} */changes = this._differ.diff(this.ngForOf);
                    if (changes) this._applyChanges(changes);
                }
            }
        }, {
            key: '_applyChanges',
            value: function _applyChanges(changes) {
                var _this10 = this;

                var /** @type {?} */insertTuples = [];
                changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
                    if (item.previousIndex == null) {
                        var /** @type {?} */view = _this10._viewContainer.createEmbeddedView(_this10._template, new NgForOfRow(null, null, null), currentIndex);
                        var /** @type {?} */tuple = new RecordViewTuple(item, view);
                        insertTuples.push(tuple);
                    } else if (currentIndex == null) {
                        _this10._viewContainer.remove(adjustedPreviousIndex);
                    } else {
                        var /** @type {?} */_view = _this10._viewContainer.get(adjustedPreviousIndex);
                        _this10._viewContainer.move(_view, currentIndex);
                        var /** @type {?} */_tuple = new RecordViewTuple(item, /** @type {?} */_view);
                        insertTuples.push(_tuple);
                    }
                });
                for (var /** @type {?} */i = 0; i < insertTuples.length; i++) {
                    this._perViewChange(insertTuples[i].view, insertTuples[i].record);
                }
                for (var /** @type {?} */_i = 0, /** @type {?} */ilen = this._viewContainer.length; _i < ilen; _i++) {
                    var /** @type {?} */viewRef = this._viewContainer.get(_i);
                    viewRef.context.index = _i;
                    viewRef.context.count = ilen;
                }
                changes.forEachIdentityChange(function (record) {
                    var /** @type {?} */viewRef = _this10._viewContainer.get(record.currentIndex);
                    viewRef.context.$implicit = record.item;
                });
            }
        }, {
            key: '_perViewChange',
            value: function _perViewChange(view, record) {
                view.context.$implicit = record.item;
            }
        }, {
            key: 'ngForTrackBy',
            set: function set(fn) {
                if ((0, _core.isDevMode)() && fn != null && typeof fn !== 'function') {
                    // TODO(vicb): use a log service once there is a public one available
                    if (console && console.warn) {
                        console.warn('trackBy must be a function, but received ' + JSON.stringify(fn) + '. ' + 'See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.');
                    }
                }
                this._trackByFn = fn;
            },
            get: function get() {
                return this._trackByFn;
            }
        }, {
            key: 'ngForTemplate',
            set: function set(value) {
                // TODO(TS2.1): make TemplateRef<Partial<NgForRowOf<T>>> once we move to TS v2.1
                // The current type is too restrictive; a template that just uses index, for example,
                // should be acceptable.
                if (value) {
                    this._template = value;
                }
            }
        }]);

        return NgForOf;
    }();

    NgForOf.decorators = [{ type: _core.Directive, args: [{ selector: '[ngFor][ngForOf]' }] }];
    /** @nocollapse */
    NgForOf.ctorParameters = function () {
        return [{ type: _core.ViewContainerRef }, { type: _core.TemplateRef }, { type: _core.IterableDiffers }];
    };
    NgForOf.propDecorators = {
        'ngForOf': [{ type: _core.Input }],
        'ngForTrackBy': [{ type: _core.Input }],
        'ngForTemplate': [{ type: _core.Input }]
    };

    var RecordViewTuple =
    /**
     * @param {?} record
     * @param {?} view
     */
    function RecordViewTuple(record, view) {
        _classCallCheck(this, RecordViewTuple);

        this.record = record;
        this.view = view;
    };

    /**
     * @deprecated from v4.0.0 - Use NgForOf instead.
     */
    var /** @type {?} */NgFor = NgForOf;

    /**
     * Conditionally includes a template based on the value of an `expression`.
     *
     * `ngIf` evaluates the `expression` and then renders the `then` or `else` template in its place
     * when expression is truthy or falsy respectively. Typically the:
     *  - `then` template is the inline template of `ngIf` unless bound to a different value.
     *  - `else` template is blank unless it is bound.
     *
     * # Most common usage
     *
     * The most common usage of the `ngIf` directive is to conditionally show the inline template as
     * seen in this example:
     * {\@example common/ngIf/ts/module.ts region='NgIfSimple'}
     *
     * # Showing an alternative template using `else`
     *
     * If it is necessary to display a template when the `expression` is falsy use the `else` template
     * binding as shown. Note that the `else` binding points to a `<ng-template>` labeled `#elseBlock`.
     * The template can be defined anywhere in the component view but is typically placed right after
     * `ngIf` for readability.
     *
     * {\@example common/ngIf/ts/module.ts region='NgIfElse'}
     *
     * # Using non-inlined `then` template
     *
     * Usually the `then` template is the inlined template of the `ngIf`, but it can be changed using
     * a binding (just like `else`). Because `then` and `else` are bindings, the template references can
     * change at runtime as shown in this example.
     *
     * {\@example common/ngIf/ts/module.ts region='NgIfThenElse'}
     *
     * # Storing conditional result in a variable
     *
     * A common pattern is that we need to show a set of properties from the same object. If the
     * object is undefined, then we have to use the safe-traversal-operator `?.` to guard against
     * dereferencing a `null` value. This is especially the case when waiting on async data such as
     * when using the `async` pipe as shown in folowing example:
     *
     * ```
     * Hello {{ (userStream|async)?.last }}, {{ (userStream|async)?.first }}!
     * ```
     *
     * There are several inefficiencies in the above example:
     *  - We create multiple subscriptions on `userStream`. One for each `async` pipe, or two in the
     *    example above.
     *  - We cannot display an alternative screen while waiting for the data to arrive asynchronously.
     *  - We have to use the safe-traversal-operator `?.` to access properties, which is cumbersome.
     *  - We have to place the `async` pipe in parenthesis.
     *
     * A better way to do this is to use `ngIf` and store the result of the condition in a local
     * variable as shown in the the example below:
     *
     * {\@example common/ngIf/ts/module.ts region='NgIfLet'}
     *
     * Notice that:
     *  - We use only one `async` pipe and hence only one subscription gets created.
     *  - `ngIf` stores the result of the `userStream|async` in the local variable `user`.
     *  - The local `user` can then be bound repeatedly in a more efficient way.
     *  - No need to use the safe-traversal-operator `?.` to access properties as `ngIf` will only
     *    display the data if `userStream` returns a value.
     *  - We can display an alternative template while waiting for the data.
     *
     * ### Syntax
     *
     * Simple form:
     * - `<div *ngIf="condition">...</div>`
     * - `<div template="ngIf condition">...</div>`
     * - `<ng-template [ngIf]="condition"><div>...</div></ng-template>`
     *
     * Form with an else block:
     * ```
     * <div *ngIf="condition; else elseBlock">...</div>
     * <ng-template #elseBlock>...</ng-template>
     * ```
     *
     * Form with a `then` and `else` block:
     * ```
     * <div *ngIf="condition; then thenBlock else elseBlock"></div>
     * <ng-template #thenBlock>...</ng-template>
     * <ng-template #elseBlock>...</ng-template>
     * ```
     *
     * Form with storing the value locally:
     * ```
     * <div *ngIf="condition; else elseBlock; let value">{{value}}</div>
     * <ng-template #elseBlock>...</ng-template>
     * ```
     *
     * \@stable
     */

    var NgIf = function () {
        /**
         * @param {?} _viewContainer
         * @param {?} templateRef
         */
        function NgIf(_viewContainer, templateRef) {
            _classCallCheck(this, NgIf);

            this._viewContainer = _viewContainer;
            this._context = new NgIfContext();
            this._thenTemplateRef = null;
            this._elseTemplateRef = null;
            this._thenViewRef = null;
            this._elseViewRef = null;
            this._thenTemplateRef = templateRef;
        }
        /**
         * @param {?} condition
         * @return {?}
         */


        _createClass(NgIf, [{
            key: '_updateView',
            value: function _updateView() {
                if (this._context.$implicit) {
                    if (!this._thenViewRef) {
                        this._viewContainer.clear();
                        this._elseViewRef = null;
                        if (this._thenTemplateRef) {
                            this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
                        }
                    }
                } else {
                    if (!this._elseViewRef) {
                        this._viewContainer.clear();
                        this._thenViewRef = null;
                        if (this._elseTemplateRef) {
                            this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
                        }
                    }
                }
            }
        }, {
            key: 'ngIf',
            set: function set(condition) {
                this._context.$implicit = condition;
                this._updateView();
            }
        }, {
            key: 'ngIfThen',
            set: function set(templateRef) {
                this._thenTemplateRef = templateRef;
                this._thenViewRef = null; // clear previous view if any.
                this._updateView();
            }
        }, {
            key: 'ngIfElse',
            set: function set(templateRef) {
                this._elseTemplateRef = templateRef;
                this._elseViewRef = null; // clear previous view if any.
                this._updateView();
            }
        }]);

        return NgIf;
    }();

    NgIf.decorators = [{ type: _core.Directive, args: [{ selector: '[ngIf]' }] }];
    /** @nocollapse */
    NgIf.ctorParameters = function () {
        return [{ type: _core.ViewContainerRef }, { type: _core.TemplateRef }];
    };
    NgIf.propDecorators = {
        'ngIf': [{ type: _core.Input }],
        'ngIfThen': [{ type: _core.Input }],
        'ngIfElse': [{ type: _core.Input }]
    };

    var NgIfContext = function NgIfContext() {
        _classCallCheck(this, NgIfContext);

        this.$implicit = null;
    };

    var SwitchView = function () {
        /**
         * @param {?} _viewContainerRef
         * @param {?} _templateRef
         */
        function SwitchView(_viewContainerRef, _templateRef) {
            _classCallCheck(this, SwitchView);

            this._viewContainerRef = _viewContainerRef;
            this._templateRef = _templateRef;
            this._created = false;
        }
        /**
         * @return {?}
         */


        _createClass(SwitchView, [{
            key: 'create',
            value: function create() {
                this._created = true;
                this._viewContainerRef.createEmbeddedView(this._templateRef);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this._created = false;
                this._viewContainerRef.clear();
            }
        }, {
            key: 'enforceState',
            value: function enforceState(created) {
                if (created && !this._created) {
                    this.create();
                } else if (!created && this._created) {
                    this.destroy();
                }
            }
        }]);

        return SwitchView;
    }();

    var NgSwitch = function () {
        function NgSwitch() {
            _classCallCheck(this, NgSwitch);

            this._defaultUsed = false;
            this._caseCount = 0;
            this._lastCaseCheckIndex = 0;
            this._lastCasesMatched = false;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */


        _createClass(NgSwitch, [{
            key: '_addCase',
            value: function _addCase() {
                return this._caseCount++;
            }
        }, {
            key: '_addDefault',
            value: function _addDefault(view) {
                if (!this._defaultViews) {
                    this._defaultViews = [];
                }
                this._defaultViews.push(view);
            }
        }, {
            key: '_matchCase',
            value: function _matchCase(value) {
                var /** @type {?} */matched = value == this._ngSwitch;
                this._lastCasesMatched = this._lastCasesMatched || matched;
                this._lastCaseCheckIndex++;
                if (this._lastCaseCheckIndex === this._caseCount) {
                    this._updateDefaultCases(!this._lastCasesMatched);
                    this._lastCaseCheckIndex = 0;
                    this._lastCasesMatched = false;
                }
                return matched;
            }
        }, {
            key: '_updateDefaultCases',
            value: function _updateDefaultCases(useDefault) {
                if (this._defaultViews && useDefault !== this._defaultUsed) {
                    this._defaultUsed = useDefault;
                    for (var /** @type {?} */i = 0; i < this._defaultViews.length; i++) {
                        var /** @type {?} */defaultView = this._defaultViews[i];
                        defaultView.enforceState(useDefault);
                    }
                }
            }
        }, {
            key: 'ngSwitch',
            set: function set(newValue) {
                this._ngSwitch = newValue;
                if (this._caseCount === 0) {
                    this._updateDefaultCases(true);
                }
            }
        }]);

        return NgSwitch;
    }();

    NgSwitch.decorators = [{ type: _core.Directive, args: [{ selector: '[ngSwitch]' }] }];
    /** @nocollapse */
    NgSwitch.ctorParameters = function () {
        return [];
    };
    NgSwitch.propDecorators = {
        'ngSwitch': [{ type: _core.Input }]
    };
    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Creates a view that will be added/removed from the parent {\@link NgSwitch} when the
     *             given expression evaluate to respectively the same/different value as the switch
     *             expression.
     *
     * \@howToUse
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     * </container-element>
     * ```
     * \@description
     *
     * Insert the sub-tree when the expression evaluates to the same value as the enclosing switch
     * expression.
     *
     * If multiple match expressions match the switch expression value, all of them are displayed.
     *
     * See {\@link NgSwitch} for more details and example.
     *
     * \@stable
     */

    var NgSwitchCase = function () {
        /**
         * @param {?} viewContainer
         * @param {?} templateRef
         * @param {?} ngSwitch
         */
        function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
            _classCallCheck(this, NgSwitchCase);

            this.ngSwitch = ngSwitch;
            ngSwitch._addCase();
            this._view = new SwitchView(viewContainer, templateRef);
        }
        /**
         * @return {?}
         */


        _createClass(NgSwitchCase, [{
            key: 'ngDoCheck',
            value: function ngDoCheck() {
                this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
            }
        }]);

        return NgSwitchCase;
    }();

    NgSwitchCase.decorators = [{ type: _core.Directive, args: [{ selector: '[ngSwitchCase]' }] }];
    /** @nocollapse */
    NgSwitchCase.ctorParameters = function () {
        return [{ type: _core.ViewContainerRef }, { type: _core.TemplateRef }, { type: NgSwitch, decorators: [{ type: _core.Host }] }];
    };
    NgSwitchCase.propDecorators = {
        'ngSwitchCase': [{ type: _core.Input }]
    };
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Creates a view that is added to the parent {\@link NgSwitch} when no case expressions
     * match the
     *             switch expression.
     *
     * \@howToUse
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *   <some-other-element *ngSwitchDefault>...</some-other-element>
     * </container-element>
     * ```
     *
     * \@description
     *
     * Insert the sub-tree when no case expressions evaluate to the same value as the enclosing switch
     * expression.
     *
     * See {\@link NgSwitch} for more details and example.
     *
     * \@stable
     */

    var NgSwitchDefault =
    /**
     * @param {?} viewContainer
     * @param {?} templateRef
     * @param {?} ngSwitch
     */
    function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
        _classCallCheck(this, NgSwitchDefault);

        ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
    };

    NgSwitchDefault.decorators = [{ type: _core.Directive, args: [{ selector: '[ngSwitchDefault]' }] }];
    /** @nocollapse */
    NgSwitchDefault.ctorParameters = function () {
        return [{ type: _core.ViewContainerRef }, { type: _core.TemplateRef }, { type: NgSwitch, decorators: [{ type: _core.Host }] }];
    };

    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
     *
     * \@howToUse
     * ```
     * <some-element [ngPlural]="value">
     *   <template ngPluralCase="=0">there is nothing</template>
     *   <template ngPluralCase="=1">there is one</template>
     *   <template ngPluralCase="few">there are a few</template>
     * </some-element>
     * ```
     *
     * \@description
     *
     * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
     * that match the switch expression's pluralization category.
     *
     * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
     * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
     * expression:
     * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
     *   matches the switch expression exactly,
     * - otherwise, the view will be treated as a "category match", and will only display if exact
     *   value matches aren't found and the value maps to its category for the defined locale.
     *
     * See http://cldr.unicode.org/index/cldr-spec/plural-rules
     *
     * \@experimental
     */

    var NgPlural = function () {
        /**
         * @param {?} _localization
         */
        function NgPlural(_localization) {
            _classCallCheck(this, NgPlural);

            this._localization = _localization;
            this._caseViews = {};
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(NgPlural, [{
            key: 'addCase',
            value: function addCase(value, switchView) {
                this._caseViews[value] = switchView;
            }
        }, {
            key: '_updateView',
            value: function _updateView() {
                this._clearViews();
                var /** @type {?} */cases = Object.keys(this._caseViews);
                var /** @type {?} */key = getPluralCategory(this._switchValue, cases, this._localization);
                this._activateView(this._caseViews[key]);
            }
        }, {
            key: '_clearViews',
            value: function _clearViews() {
                if (this._activeView) this._activeView.destroy();
            }
        }, {
            key: '_activateView',
            value: function _activateView(view) {
                if (view) {
                    this._activeView = view;
                    this._activeView.create();
                }
            }
        }, {
            key: 'ngPlural',
            set: function set(value) {
                this._switchValue = value;
                this._updateView();
            }
        }]);

        return NgPlural;
    }();

    NgPlural.decorators = [{ type: _core.Directive, args: [{ selector: '[ngPlural]' }] }];
    /** @nocollapse */
    NgPlural.ctorParameters = function () {
        return [{ type: NgLocalization }];
    };
    NgPlural.propDecorators = {
        'ngPlural': [{ type: _core.Input }]
    };
    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Creates a view that will be added/removed from the parent {\@link NgPlural} when the
     *             given expression matches the plural expression according to CLDR rules.
     *
     * \@howToUse
     * ```
     * <some-element [ngPlural]="value">
     *   <template ngPluralCase="=0">...</template>
     *   <template ngPluralCase="other">...</template>
     * </some-element>
     * ```
     *
     * See {\@link NgPlural} for more details and example.
     *
     * \@experimental
     */

    var NgPluralCase =
    /**
     * @param {?} value
     * @param {?} template
     * @param {?} viewContainer
     * @param {?} ngPlural
     */
    function NgPluralCase(value, template, viewContainer, ngPlural) {
        _classCallCheck(this, NgPluralCase);

        this.value = value;
        var isANumber = !isNaN(Number(value));
        ngPlural.addCase(isANumber ? '=' + value : value, new SwitchView(viewContainer, template));
    };

    NgPluralCase.decorators = [{ type: _core.Directive, args: [{ selector: '[ngPluralCase]' }] }];
    /** @nocollapse */
    NgPluralCase.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Attribute, args: ['ngPluralCase'] }] }, { type: _core.TemplateRef }, { type: _core.ViewContainerRef }, { type: NgPlural, decorators: [{ type: _core.Host }] }];
    };

    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Update an HTML element styles.
     *
     * \@howToUse
     * ```
     * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
     *
     * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
     *
     * <some-element [ngStyle]="objExp">...</some-element>
     * ```
     *
     * \@description
     *
     * The styles are updated according to the value of the expression evaluation:
     * - keys are style names with an optional `.<unit>` suffix (ie 'top.px', 'font-style.em'),
     * - values are the values assigned to those properties (expressed in the given unit).
     *
     * \@stable
     */

    var NgStyle = function () {
        /**
         * @param {?} _differs
         * @param {?} _ngEl
         * @param {?} _renderer
         */
        function NgStyle(_differs, _ngEl, _renderer) {
            _classCallCheck(this, NgStyle);

            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
        }
        /**
         * @param {?} v
         * @return {?}
         */


        _createClass(NgStyle, [{
            key: 'ngDoCheck',
            value: function ngDoCheck() {
                if (this._differ) {
                    var /** @type {?} */changes = this._differ.diff(this._ngStyle);
                    if (changes) {
                        this._applyChanges(changes);
                    }
                }
            }
        }, {
            key: '_applyChanges',
            value: function _applyChanges(changes) {
                var _this11 = this;

                changes.forEachRemovedItem(function (record) {
                    return _this11._setStyle(record.key, null);
                });
                changes.forEachAddedItem(function (record) {
                    return _this11._setStyle(record.key, record.currentValue);
                });
                changes.forEachChangedItem(function (record) {
                    return _this11._setStyle(record.key, record.currentValue);
                });
            }
        }, {
            key: '_setStyle',
            value: function _setStyle(nameAndUnit, value) {
                var _nameAndUnit$split = nameAndUnit.split('.'),
                    _nameAndUnit$split2 = _slicedToArray(_nameAndUnit$split, 2),
                    name = _nameAndUnit$split2[0],
                    unit = _nameAndUnit$split2[1];

                value = value != null && unit ? '' + value + unit : value;
                this._renderer.setElementStyle(this._ngEl.nativeElement, name, /** @type {?} */value);
            }
        }, {
            key: 'ngStyle',
            set: function set(v) {
                this._ngStyle = v;
                if (!this._differ && v) {
                    this._differ = this._differs.find(v).create();
                }
            }
        }]);

        return NgStyle;
    }();

    NgStyle.decorators = [{ type: _core.Directive, args: [{ selector: '[ngStyle]' }] }];
    /** @nocollapse */
    NgStyle.ctorParameters = function () {
        return [{ type: _core.KeyValueDiffers }, { type: _core.ElementRef }, { type: _core.Renderer }];
    };
    NgStyle.propDecorators = {
        'ngStyle': [{ type: _core.Input }]
    };

    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Inserts an embedded view from a prepared `TemplateRef`
     *
     * \@howToUse
     * ```
     * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
     * ```
     *
     * \@description
     *
     * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
     * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
     * by the local template `let` declarations.
     *
     * Note: using the key `$implicit` in the context object will set it's value as default.
     *
     * # Example
     *
     * {\@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
     *
     * \@experimental
     */

    var NgTemplateOutlet = function () {
        /**
         * @param {?} _viewContainerRef
         */
        function NgTemplateOutlet(_viewContainerRef) {
            _classCallCheck(this, NgTemplateOutlet);

            this._viewContainerRef = _viewContainerRef;
        }
        /**
         * @deprecated v4.0.0 - Renamed to ngTemplateOutletContext.
         * @param {?} context
         * @return {?}
         */


        _createClass(NgTemplateOutlet, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                if (this._viewRef) {
                    this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
                }
                if (this.ngTemplateOutlet) {
                    this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext);
                }
            }
        }, {
            key: 'ngOutletContext',
            set: function set(context) {
                this.ngTemplateOutletContext = context;
            }
        }]);

        return NgTemplateOutlet;
    }();

    NgTemplateOutlet.decorators = [{ type: _core.Directive, args: [{ selector: '[ngTemplateOutlet]' }] }];
    /** @nocollapse */
    NgTemplateOutlet.ctorParameters = function () {
        return [{ type: _core.ViewContainerRef }];
    };
    NgTemplateOutlet.propDecorators = {
        'ngTemplateOutletContext': [{ type: _core.Input }],
        'ngTemplateOutlet': [{ type: _core.Input }],
        'ngOutletContext': [{ type: _core.Input }]
    };

    /**
     * A collection of Angular directives that are likely to be used in each and every Angular
     * application.
     */
    var /** @type {?} */COMMON_DIRECTIVES = [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase];

    /**
     * @param {?} type
     * @param {?} value
     * @return {?}
     */
    function invalidPipeArgumentError(type, value) {
        return Error('InvalidPipeArgument: \'' + value + '\' for pipe \'' + stringify(type) + '\'');
    }

    var ObservableStrategy = function () {
        function ObservableStrategy() {
            _classCallCheck(this, ObservableStrategy);
        }

        _createClass(ObservableStrategy, [{
            key: 'createSubscription',
            value: function createSubscription(async, updateLatestValue) {
                return async.subscribe({ next: updateLatestValue, error: function error(e) {
                        throw e;
                    } });
            }
        }, {
            key: 'dispose',
            value: function dispose(subscription) {
                subscription.unsubscribe();
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy(subscription) {
                subscription.unsubscribe();
            }
        }]);

        return ObservableStrategy;
    }();

    var PromiseStrategy = function () {
        function PromiseStrategy() {
            _classCallCheck(this, PromiseStrategy);
        }

        _createClass(PromiseStrategy, [{
            key: 'createSubscription',
            value: function createSubscription(async, updateLatestValue) {
                return async.then(updateLatestValue, function (e) {
                    throw e;
                });
            }
        }, {
            key: 'dispose',
            value: function dispose(subscription) {}
        }, {
            key: 'onDestroy',
            value: function onDestroy(subscription) {}
        }]);

        return PromiseStrategy;
    }();

    var /** @type {?} */_promiseStrategy = new PromiseStrategy();
    var /** @type {?} */_observableStrategy = new ObservableStrategy();
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Unwraps a value from an asynchronous primitive.
     * \@howToUse `observable_or_promise_expression | async`
     * \@description
     * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
     * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
     * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
     * potential memory leaks.
     *
     *
     * ## Examples
     *
     * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
     * promise.
     *
     * {\@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
     *
     * It's also possible to use `async` with Observables. The example below binds the `time` Observable
     * to the view. The Observable continuously updates the view with the current time.
     *
     * {\@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
     *
     * \@stable
     */

    var AsyncPipe = function () {
        /**
         * @param {?} _ref
         */
        function AsyncPipe(_ref) {
            _classCallCheck(this, AsyncPipe);

            this._ref = _ref;
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
            this._strategy = null;
        }
        /**
         * @return {?}
         */


        _createClass(AsyncPipe, [{
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                if (this._subscription) {
                    this._dispose();
                }
            }
        }, {
            key: 'transform',
            value: function transform(obj) {
                if (!this._obj) {
                    if (obj) {
                        this._subscribe(obj);
                    }
                    this._latestReturnedValue = this._latestValue;
                    return this._latestValue;
                }
                if (obj !== this._obj) {
                    this._dispose();
                    return this.transform( /** @type {?} */obj);
                }
                if (this._latestValue === this._latestReturnedValue) {
                    return this._latestReturnedValue;
                }
                this._latestReturnedValue = this._latestValue;
                return _core.WrappedValue.wrap(this._latestValue);
            }
        }, {
            key: '_subscribe',
            value: function _subscribe(obj) {
                var _this12 = this;

                this._obj = obj;
                this._strategy = this._selectStrategy(obj);
                this._subscription = this._strategy.createSubscription(obj, function (value) {
                    return _this12._updateLatestValue(obj, value);
                });
            }
        }, {
            key: '_selectStrategy',
            value: function _selectStrategy(obj) {
                if ((0, _core.ɵisPromise)(obj)) {
                    return _promiseStrategy;
                }
                if ((0, _core.ɵisObservable)(obj)) {
                    return _observableStrategy;
                }
                throw invalidPipeArgumentError(AsyncPipe, obj);
            }
        }, {
            key: '_dispose',
            value: function _dispose() {
                this._strategy.dispose(this._subscription);
                this._latestValue = null;
                this._latestReturnedValue = null;
                this._subscription = null;
                this._obj = null;
            }
        }, {
            key: '_updateLatestValue',
            value: function _updateLatestValue(async, value) {
                if (async === this._obj) {
                    this._latestValue = value;
                    this._ref.markForCheck();
                }
            }
        }]);

        return AsyncPipe;
    }();

    AsyncPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'async', pure: false }] }];
    /** @nocollapse */
    AsyncPipe.ctorParameters = function () {
        return [{ type: _core.ChangeDetectorRef }];
    };

    /**
     * Transforms text to lowercase.
     *
     * {\@example  common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe' }
     *
     * \@stable
     */

    var LowerCasePipe = function () {
        function LowerCasePipe() {
            _classCallCheck(this, LowerCasePipe);
        }

        _createClass(LowerCasePipe, [{
            key: 'transform',
            value: function transform(value) {
                if (!value) return value;
                if (typeof value !== 'string') {
                    throw invalidPipeArgumentError(LowerCasePipe, value);
                }
                return value.toLowerCase();
            }
        }]);

        return LowerCasePipe;
    }();

    LowerCasePipe.decorators = [{ type: _core.Pipe, args: [{ name: 'lowercase' }] }];
    /** @nocollapse */
    LowerCasePipe.ctorParameters = function () {
        return [];
    };
    /**
     * Helper method to transform a single word to titlecase.
     *
     * \@stable
     * @param {?} word
     * @return {?}
     */
    function titleCaseWord(word) {
        if (!word) return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
    /**
     * Transforms text to titlecase.
     *
     * \@stable
     */

    var TitleCasePipe = function () {
        function TitleCasePipe() {
            _classCallCheck(this, TitleCasePipe);
        }

        _createClass(TitleCasePipe, [{
            key: 'transform',
            value: function transform(value) {
                if (!value) return value;
                if (typeof value !== 'string') {
                    throw invalidPipeArgumentError(TitleCasePipe, value);
                }
                return value.split(/\b/g).map(function (word) {
                    return titleCaseWord(word);
                }).join('');
            }
        }]);

        return TitleCasePipe;
    }();

    TitleCasePipe.decorators = [{ type: _core.Pipe, args: [{ name: 'titlecase' }] }];
    /** @nocollapse */
    TitleCasePipe.ctorParameters = function () {
        return [];
    };
    /**
     * Transforms text to uppercase.
     *
     * \@stable
     */

    var UpperCasePipe = function () {
        function UpperCasePipe() {
            _classCallCheck(this, UpperCasePipe);
        }

        _createClass(UpperCasePipe, [{
            key: 'transform',
            value: function transform(value) {
                if (!value) return value;
                if (typeof value !== 'string') {
                    throw invalidPipeArgumentError(UpperCasePipe, value);
                }
                return value.toUpperCase();
            }
        }]);

        return UpperCasePipe;
    }();

    UpperCasePipe.decorators = [{ type: _core.Pipe, args: [{ name: 'uppercase' }] }];
    /** @nocollapse */
    UpperCasePipe.ctorParameters = function () {
        return [];
    };

    var NumberFormatStyle = {};
    NumberFormatStyle.Decimal = 0;
    NumberFormatStyle.Percent = 1;
    NumberFormatStyle.Currency = 2;
    NumberFormatStyle[NumberFormatStyle.Decimal] = "Decimal";
    NumberFormatStyle[NumberFormatStyle.Percent] = "Percent";
    NumberFormatStyle[NumberFormatStyle.Currency] = "Currency";

    var NumberFormatter = function () {
        function NumberFormatter() {
            _classCallCheck(this, NumberFormatter);
        }

        _createClass(NumberFormatter, null, [{
            key: 'format',
            value: function format(num, locale, style) {
                var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                    minimumIntegerDigits = _ref2.minimumIntegerDigits,
                    minimumFractionDigits = _ref2.minimumFractionDigits,
                    maximumFractionDigits = _ref2.maximumFractionDigits,
                    currency = _ref2.currency,
                    _ref2$currencyAsSymbo = _ref2.currencyAsSymbol,
                    currencyAsSymbol = _ref2$currencyAsSymbo === undefined ? false : _ref2$currencyAsSymbo;

                var /** @type {?} */options = {
                    minimumIntegerDigits: minimumIntegerDigits,
                    minimumFractionDigits: minimumFractionDigits,
                    maximumFractionDigits: maximumFractionDigits,
                    style: NumberFormatStyle[style].toLowerCase()
                };
                if (style == NumberFormatStyle.Currency) {
                    options.currency = currency;
                    options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
                }
                return new Intl.NumberFormat(locale, options).format(num);
            }
        }]);

        return NumberFormatter;
    }();

    var /** @type {?} */DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
    var /** @type {?} */PATTERN_ALIASES = {
        // Keys are quoted so they do not get renamed during closure compilation.
        'yMMMdjms': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1), digitCondition('hour', 1), digitCondition('minute', 1), digitCondition('second', 1)])),
        'yMdjm': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1), digitCondition('hour', 1), digitCondition('minute', 1)])),
        'yMMMMEEEEd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4), digitCondition('day', 1)])),
        'yMMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
        'yMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
        'yMd': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
        'jms': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
        'jm': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
    };
    var /** @type {?} */DATE_FORMATS = {
        // Keys are quoted so they do not get renamed.
        'yyyy': datePartGetterFactory(digitCondition('year', 4)),
        'yy': datePartGetterFactory(digitCondition('year', 2)),
        'y': datePartGetterFactory(digitCondition('year', 1)),
        'MMMM': datePartGetterFactory(nameCondition('month', 4)),
        'MMM': datePartGetterFactory(nameCondition('month', 3)),
        'MM': datePartGetterFactory(digitCondition('month', 2)),
        'M': datePartGetterFactory(digitCondition('month', 1)),
        'LLLL': datePartGetterFactory(nameCondition('month', 4)),
        'L': datePartGetterFactory(nameCondition('month', 1)),
        'dd': datePartGetterFactory(digitCondition('day', 2)),
        'd': datePartGetterFactory(digitCondition('day', 1)),
        'HH': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
        'H': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
        'hh': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
        'h': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        'jj': datePartGetterFactory(digitCondition('hour', 2)),
        'j': datePartGetterFactory(digitCondition('hour', 1)),
        'mm': digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
        'm': datePartGetterFactory(digitCondition('minute', 1)),
        'ss': digitModifier(datePartGetterFactory(digitCondition('second', 2))),
        's': datePartGetterFactory(digitCondition('second', 1)),
        // while ISO 8601 requires fractions to be prefixed with `.` or `,`
        // we can be just safely rely on using `sss` since we currently don't support single or two digit
        // fractions
        'sss': datePartGetterFactory(digitCondition('second', 3)),
        'EEEE': datePartGetterFactory(nameCondition('weekday', 4)),
        'EEE': datePartGetterFactory(nameCondition('weekday', 3)),
        'EE': datePartGetterFactory(nameCondition('weekday', 2)),
        'E': datePartGetterFactory(nameCondition('weekday', 1)),
        'a': hourClockExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        'Z': timeZoneGetter('short'),
        'z': timeZoneGetter('long'),
        'ww': datePartGetterFactory({}),
        // first Thursday of the year. not support ?
        'w': datePartGetterFactory({}),
        // of the year not support ?
        'G': datePartGetterFactory(nameCondition('era', 1)),
        'GG': datePartGetterFactory(nameCondition('era', 2)),
        'GGG': datePartGetterFactory(nameCondition('era', 3)),
        'GGGG': datePartGetterFactory(nameCondition('era', 4))
    };
    /**
     * @param {?} inner
     * @return {?}
     */
    function digitModifier(inner) {
        return function (date, locale) {
            var /** @type {?} */result = inner(date, locale);
            return result.length == 1 ? '0' + result : result;
        };
    }
    /**
     * @param {?} inner
     * @return {?}
     */
    function hourClockExtractor(inner) {
        return function (date, locale) {
            return inner(date, locale).split(' ')[1];
        };
    }
    /**
     * @param {?} inner
     * @return {?}
     */
    function hourExtractor(inner) {
        return function (date, locale) {
            return inner(date, locale).split(' ')[0];
        };
    }
    /**
     * @param {?} date
     * @param {?} locale
     * @param {?} options
     * @return {?}
     */
    function intlDateFormat(date, locale, options) {
        return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
    }
    /**
     * @param {?} timezone
     * @return {?}
     */
    function timeZoneGetter(timezone) {
        // To workaround `Intl` API restriction for single timezone let format with 24 hours
        var /** @type {?} */options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
        return function (date, locale) {
            var /** @type {?} */result = intlDateFormat(date, locale, options);
            // Then extract first 3 letters that related to hours
            return result ? result.substring(3) : '';
        };
    }
    /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    function hour12Modify(options, value) {
        options.hour12 = value;
        return options;
    }
    /**
     * @param {?} prop
     * @param {?} len
     * @return {?}
     */
    function digitCondition(prop, len) {
        var /** @type {?} */result = {};
        result[prop] = len === 2 ? '2-digit' : 'numeric';
        return result;
    }
    /**
     * @param {?} prop
     * @param {?} len
     * @return {?}
     */
    function nameCondition(prop, len) {
        var /** @type {?} */result = {};
        if (len < 4) {
            result[prop] = len > 1 ? 'short' : 'narrow';
        } else {
            result[prop] = 'long';
        }
        return result;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    function combine(options) {
        return Object.assign.apply(Object, [{}].concat(_toConsumableArray(options)));
    }
    /**
     * @param {?} ret
     * @return {?}
     */
    function datePartGetterFactory(ret) {
        return function (date, locale) {
            return intlDateFormat(date, locale, ret);
        };
    }
    var /** @type {?} */DATE_FORMATTER_CACHE = new Map();
    /**
     * @param {?} format
     * @param {?} date
     * @param {?} locale
     * @return {?}
     */
    function dateFormatter(format, date, locale) {
        var /** @type {?} */fn = PATTERN_ALIASES[format];
        if (fn) return fn(date, locale);
        var /** @type {?} */cacheKey = format;
        var /** @type {?} */parts = DATE_FORMATTER_CACHE.get(cacheKey);
        if (!parts) {
            parts = [];
            var /** @type {?} */match = void 0;
            DATE_FORMATS_SPLIT.exec(format);
            while (format) {
                match = DATE_FORMATS_SPLIT.exec(format);
                if (match) {
                    parts = parts.concat(match.slice(1));
                    format = parts.pop();
                } else {
                    parts.push(format);
                    format = null;
                }
            }
            DATE_FORMATTER_CACHE.set(cacheKey, parts);
        }
        return parts.reduce(function (text, part) {
            var /** @type {?} */fn = DATE_FORMATS[part];
            return text + (fn ? fn(date, locale) : partToTime(part));
        }, '');
    }
    /**
     * @param {?} part
     * @return {?}
     */
    function partToTime(part) {
        return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
    }

    var DateFormatter = function () {
        function DateFormatter() {
            _classCallCheck(this, DateFormatter);
        }

        _createClass(DateFormatter, null, [{
            key: 'format',
            value: function format(date, locale, pattern) {
                return dateFormatter(pattern, date, locale);
            }
        }]);

        return DateFormatter;
    }();

    var /** @type {?} */ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Formats a date according to locale rules.
     * \@howToUse `date_expression | date[:format]`
     * \@description
     *
     * Where:
     * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
     * (https://www.w3.org/TR/NOTE-datetime).
     * - `format` indicates which date/time components to include. The format can be predefined as
     *   shown below or custom as shown in the table.
     *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
     *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
     *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
     *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
     *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
     *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
     *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
     *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
     *
     *
     *  | Component | Symbol | Narrow | Short Form   | Long Form         | Numeric   | 2-digit   |
     *  |-----------|:------:|--------|--------------|-------------------|-----------|-----------|
     *  | era       |   G    | G (A)  | GGG (AD)     | GGGG (Anno Domini)| -         | -         |
     *  | year      |   y    | -      | -            | -                 | y (2015)  | yy (15)   |
     *  | month     |   M    | L (S)  | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
     *  | day       |   d    | -      | -            | -                 | d (3)     | dd (03)   |
     *  | weekday   |   E    | E (S)  | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
     *  | hour      |   j    | -      | -            | -                 | j (13)    | jj (13)   |
     *  | hour12    |   h    | -      | -            | -                 | h (1 PM)  | hh (01 PM)|
     *  | hour24    |   H    | -      | -            | -                 | H (13)    | HH (13)   |
     *  | minute    |   m    | -      | -            | -                 | m (5)     | mm (05)   |
     *  | second    |   s    | -      | -            | -                 | s (9)     | ss (09)   |
     *  | timezone  |   z    | -      | -            | z (Pacific Standard Time)| -  | -         |
     *  | timezone  |   Z    | -      | Z (GMT-8:00) | -                 | -         | -         |
     *  | timezone  |   a    | -      | a (PM)       | -                 | -         | -         |
     *
     * In javascript, only the components specified will be respected (not the ordering,
     * punctuations, ...) and details of the formatting will be dependent on the locale.
     *
     * Timezone of the formatted text will be the local system timezone of the end-user's machine.
     *
     * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
     * applied and the formatted text will have the same day, month and year of the expression.
     *
     * WARNINGS:
     * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
     *   Instead users should treat the date as an immutable object and change the reference when the
     *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
     *   which would be an expensive operation).
     * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
     *   browsers.
     *
     * ### Examples
     *
     * Assuming `dateObj` is (year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11)
     * in the _local_ time and locale is 'en-US':
     *
     * ```
     *     {{ dateObj | date }}               // output is 'Jun 15, 2015'
     *     {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
     *     {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
     *     {{ dateObj | date:'mmss' }}        // output is '43:11'
     * ```
     *
     * {\@example common/pipes/ts/date_pipe.ts region='DatePipe'}
     *
     * \@stable
     */

    var DatePipe = function () {
        /**
         * @param {?} _locale
         */
        function DatePipe(_locale) {
            _classCallCheck(this, DatePipe);

            this._locale = _locale;
        }
        /**
         * @param {?} value
         * @param {?=} pattern
         * @return {?}
         */


        _createClass(DatePipe, [{
            key: 'transform',
            value: function transform(value) {
                var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mediumDate';

                var /** @type {?} */date = void 0;
                if (isBlank$1(value) || value !== value) return null;
                if (typeof value === 'string') {
                    value = value.trim();
                }
                if (isDate(value)) {
                    date = value;
                } else if (NumberWrapper.isNumeric(value)) {
                    date = new Date(parseFloat(value));
                } else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
                    var _value$split$map = value.split('-').map(function (val) {
                        return parseInt(val, 10);
                    }),
                        _value$split$map2 = _slicedToArray(_value$split$map, 3),
                        y = _value$split$map2[0],
                        m = _value$split$map2[1],
                        d = _value$split$map2[2];

                    date = new Date(y, m - 1, d);
                } else {
                    date = new Date(value);
                }
                if (!isDate(date)) {
                    var /** @type {?} */match = void 0;
                    if (typeof value === 'string' && (match = value.match(ISO8601_DATE_REGEX))) {
                        date = isoStringToDate(match);
                    } else {
                        throw invalidPipeArgumentError(DatePipe, value);
                    }
                }
                return DateFormatter.format(date, this._locale, DatePipe._ALIASES[pattern] || pattern);
            }
        }]);

        return DatePipe;
    }();

    /** @internal */
    DatePipe._ALIASES = {
        'medium': 'yMMMdjms',
        'short': 'yMdjm',
        'fullDate': 'yMMMMEEEEd',
        'longDate': 'yMMMMd',
        'mediumDate': 'yMMMd',
        'shortDate': 'yMd',
        'mediumTime': 'jms',
        'shortTime': 'jm'
    };
    DatePipe.decorators = [{ type: _core.Pipe, args: [{ name: 'date', pure: true }] }];
    /** @nocollapse */
    DatePipe.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [_core.LOCALE_ID] }] }];
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    function isBlank$1(obj) {
        return obj == null || obj === '';
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isDate(obj) {
        return obj instanceof Date && !isNaN(obj.valueOf());
    }
    /**
     * @param {?} match
     * @return {?}
     */
    function isoStringToDate(match) {
        var /** @type {?} */date = new Date(0);
        var /** @type {?} */tzHour = 0;
        var /** @type {?} */tzMin = 0;
        var /** @type {?} */dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
        var /** @type {?} */timeSetter = match[8] ? date.setUTCHours : date.setHours;
        if (match[9]) {
            tzHour = toInt(match[9] + match[10]);
            tzMin = toInt(match[9] + match[11]);
        }
        dateSetter.call(date, toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
        var /** @type {?} */h = toInt(match[4] || '0') - tzHour;
        var /** @type {?} */m = toInt(match[5] || '0') - tzMin;
        var /** @type {?} */s = toInt(match[6] || '0');
        var /** @type {?} */ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
        timeSetter.call(date, h, m, s, ms);
        return date;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function toInt(str) {
        return parseInt(str, 10);
    }

    var /** @type {?} */_INTERPOLATION_REGEXP = /#/g;
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Maps a value to a string that pluralizes the value according to locale rules.
     * \@howToUse `expression | i18nPlural:mapping`
     * \@description
     *
     *  Where:
     *  - `expression` is a number.
     *  - `mapping` is an object that mimics the ICU format, see
     *    http://userguide.icu-project.org/formatparse/messages
     *
     *  ## Example
     *
     * {\@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
     *
     * \@experimental
     */

    var I18nPluralPipe = function () {
        /**
         * @param {?} _localization
         */
        function I18nPluralPipe(_localization) {
            _classCallCheck(this, I18nPluralPipe);

            this._localization = _localization;
        }
        /**
         * @param {?} value
         * @param {?} pluralMap
         * @return {?}
         */


        _createClass(I18nPluralPipe, [{
            key: 'transform',
            value: function transform(value, pluralMap) {
                if (value == null) return '';
                if ((typeof pluralMap === 'undefined' ? 'undefined' : _typeof(pluralMap)) !== 'object' || pluralMap === null) {
                    throw invalidPipeArgumentError(I18nPluralPipe, pluralMap);
                }
                var /** @type {?} */key = getPluralCategory(value, Object.keys(pluralMap), this._localization);
                return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
            }
        }]);

        return I18nPluralPipe;
    }();

    I18nPluralPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'i18nPlural', pure: true }] }];
    /** @nocollapse */
    I18nPluralPipe.ctorParameters = function () {
        return [{ type: NgLocalization }];
    };

    /**
     * \@ngModule CommonModule
     * \@whatItDoes Generic selector that displays the string that matches the current value.
     * \@howToUse `expression | i18nSelect:mapping`
     * \@description
     *
     *  Where `mapping` is an object that indicates the text that should be displayed
     *  for different values of the provided `expression`.
     *  If none of the keys of the mapping match the value of the `expression`, then the content
     *  of the `other` key is returned when present, otherwise an empty string is returned.
     *
     *  ## Example
     *
     * {\@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
     *
     *  \@experimental
     */

    var I18nSelectPipe = function () {
        function I18nSelectPipe() {
            _classCallCheck(this, I18nSelectPipe);
        }

        _createClass(I18nSelectPipe, [{
            key: 'transform',
            value: function transform(value, mapping) {
                if (value == null) return '';
                if ((typeof mapping === 'undefined' ? 'undefined' : _typeof(mapping)) !== 'object' || typeof value !== 'string') {
                    throw invalidPipeArgumentError(I18nSelectPipe, mapping);
                }
                if (mapping.hasOwnProperty(value)) {
                    return mapping[value];
                }
                if (mapping.hasOwnProperty('other')) {
                    return mapping['other'];
                }
                return '';
            }
        }]);

        return I18nSelectPipe;
    }();

    I18nSelectPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'i18nSelect', pure: true }] }];
    /** @nocollapse */
    I18nSelectPipe.ctorParameters = function () {
        return [];
    };

    /**
     * \@ngModule CommonModule
     * \@whatItDoes Converts value into JSON string.
     * \@howToUse `expression | json`
     * \@description
     *
     * Converts value into string using `JSON.stringify`. Useful for debugging.
     *
     * ### Example
     * {\@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
     *
     * \@stable
     */

    var JsonPipe = function () {
        function JsonPipe() {
            _classCallCheck(this, JsonPipe);
        }

        _createClass(JsonPipe, [{
            key: 'transform',
            value: function transform(value) {
                return JSON.stringify(value, null, 2);
            }
        }]);

        return JsonPipe;
    }();

    JsonPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'json', pure: false }] }];
    /** @nocollapse */
    JsonPipe.ctorParameters = function () {
        return [];
    };

    var /** @type {?} */_NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
    /**
     * @param {?} pipe
     * @param {?} locale
     * @param {?} value
     * @param {?} style
     * @param {?} digits
     * @param {?=} currency
     * @param {?=} currencyAsSymbol
     * @return {?}
     */
    function formatNumber(pipe, locale, value, style, digits) {
        var currency = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var currencyAsSymbol = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

        if (value == null) return null;
        // Convert strings to numbers
        value = typeof value === 'string' && NumberWrapper.isNumeric(value) ? +value : value;
        if (typeof value !== 'number') {
            throw invalidPipeArgumentError(pipe, value);
        }
        var /** @type {?} */minInt = void 0;
        var /** @type {?} */minFraction = void 0;
        var /** @type {?} */maxFraction = void 0;
        if (style !== NumberFormatStyle.Currency) {
            // rely on Intl default for currency
            minInt = 1;
            minFraction = 0;
            maxFraction = 3;
        }
        if (digits) {
            var /** @type {?} */parts = digits.match(_NUMBER_FORMAT_REGEXP);
            if (parts === null) {
                throw new Error(digits + ' is not a valid digit info for number pipes');
            }
            if (parts[1] != null) {
                minInt = NumberWrapper.parseIntAutoRadix(parts[1]);
            }
            if (parts[3] != null) {
                minFraction = NumberWrapper.parseIntAutoRadix(parts[3]);
            }
            if (parts[5] != null) {
                maxFraction = NumberWrapper.parseIntAutoRadix(parts[5]);
            }
        }
        return NumberFormatter.format( /** @type {?} */value, locale, style, {
            minimumIntegerDigits: minInt,
            minimumFractionDigits: minFraction,
            maximumFractionDigits: maxFraction,
            currency: currency,
            currencyAsSymbol: currencyAsSymbol
        });
    }
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Formats a number according to locale rules.
     * \@howToUse `number_expression | number[:digitInfo]`
     *
     * Formats a number as text. Group sizing and separator and other locale-specific
     * configurations are based on the active locale.
     *
     * where `expression` is a number:
     *  - `digitInfo` is a `string` which has a following format: <br>
     *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
     *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
     *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
     *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
     *
     * For more information on the acceptable range for each of these numbers and other
     * details see your native internationalization library.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See {\@linkDocs guide/browser-support} for details.
     *
     * ### Example
     *
     * {\@example common/pipes/ts/number_pipe.ts region='NumberPipe'}
     *
     * \@stable
     */

    var DecimalPipe = function () {
        /**
         * @param {?} _locale
         */
        function DecimalPipe(_locale) {
            _classCallCheck(this, DecimalPipe);

            this._locale = _locale;
        }
        /**
         * @param {?} value
         * @param {?=} digits
         * @return {?}
         */


        _createClass(DecimalPipe, [{
            key: 'transform',
            value: function transform(value) {
                var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                return formatNumber(DecimalPipe, this._locale, value, NumberFormatStyle.Decimal, digits);
            }
        }]);

        return DecimalPipe;
    }();

    DecimalPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'number' }] }];
    /** @nocollapse */
    DecimalPipe.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [_core.LOCALE_ID] }] }];
    };
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Formats a number as a percentage according to locale rules.
     * \@howToUse `number_expression | percent[:digitInfo]`
     *
     * \@description
     *
     * Formats a number as percentage.
     *
     * - `digitInfo` See {\@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See {\@linkDocs guide/browser-support} for details.
     *
     * ### Example
     *
     * {\@example common/pipes/ts/number_pipe.ts region='PercentPipe'}
     *
     * \@stable
     */

    var PercentPipe = function () {
        /**
         * @param {?} _locale
         */
        function PercentPipe(_locale) {
            _classCallCheck(this, PercentPipe);

            this._locale = _locale;
        }
        /**
         * @param {?} value
         * @param {?=} digits
         * @return {?}
         */


        _createClass(PercentPipe, [{
            key: 'transform',
            value: function transform(value) {
                var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                return formatNumber(PercentPipe, this._locale, value, NumberFormatStyle.Percent, digits);
            }
        }]);

        return PercentPipe;
    }();

    PercentPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'percent' }] }];
    /** @nocollapse */
    PercentPipe.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [_core.LOCALE_ID] }] }];
    };
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Formats a number as currency using locale rules.
     * \@howToUse `number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]`
     * \@description
     *
     * Use `currency` to format a number as currency.
     *
     * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
     *    as `USD` for the US dollar and `EUR` for the euro.
     * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
     *   - `true`: use symbol (e.g. `$`).
     *   - `false`(default): use code (e.g. `USD`).
     * - `digitInfo` See {\@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See {\@linkDocs guide/browser-support} for details.
     *
     * ### Example
     *
     * {\@example common/pipes/ts/number_pipe.ts region='CurrencyPipe'}
     *
     * \@stable
     */

    var CurrencyPipe = function () {
        /**
         * @param {?} _locale
         */
        function CurrencyPipe(_locale) {
            _classCallCheck(this, CurrencyPipe);

            this._locale = _locale;
        }
        /**
         * @param {?} value
         * @param {?=} currencyCode
         * @param {?=} symbolDisplay
         * @param {?=} digits
         * @return {?}
         */


        _createClass(CurrencyPipe, [{
            key: 'transform',
            value: function transform(value) {
                var currencyCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'USD';
                var symbolDisplay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var digits = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

                return formatNumber(CurrencyPipe, this._locale, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
            }
        }]);

        return CurrencyPipe;
    }();

    CurrencyPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'currency' }] }];
    /** @nocollapse */
    CurrencyPipe.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [_core.LOCALE_ID] }] }];
    };

    /**
     * \@ngModule CommonModule
     * \@whatItDoes Creates a new List or String containing a subset (slice) of the elements.
     * \@howToUse `array_or_string_expression | slice:start[:end]`
     * \@description
     *
     * Where the input expression is a `List` or `String`, and:
     * - `start`: The starting index of the subset to return.
     *   - **a positive integer**: return the item at `start` index and all items after
     *     in the list or string expression.
     *   - **a negative integer**: return the item at `start` index from the end and all items after
     *     in the list or string expression.
     *   - **if positive and greater than the size of the expression**: return an empty list or string.
     *   - **if negative and greater than the size of the expression**: return entire list or string.
     * - `end`: The ending index of the subset to return.
     *   - **omitted**: return all items until the end.
     *   - **if positive**: return all items before `end` index of the list or string.
     *   - **if negative**: return all items before `end` index from the end of the list or string.
     *
     * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
     * and `String.prototype.slice()`.
     *
     * When operating on a [List], the returned list is always a copy even when all
     * the elements are being returned.
     *
     * When operating on a blank value, the pipe returns the blank value.
     *
     * ## List Example
     *
     * This `ngFor` example:
     *
     * {\@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
     *
     * produces the following:
     *
     *     <li>b</li>
     *     <li>c</li>
     *
     * ## String Examples
     *
     * {\@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
     *
     * \@stable
     */

    var SlicePipe = function () {
        function SlicePipe() {
            _classCallCheck(this, SlicePipe);
        }

        _createClass(SlicePipe, [{
            key: 'transform',
            value: function transform(value, start, end) {
                if (value == null) return value;
                if (!this.supports(value)) {
                    throw invalidPipeArgumentError(SlicePipe, value);
                }
                return value.slice(start, end);
            }
        }, {
            key: 'supports',
            value: function supports(obj) {
                return typeof obj === 'string' || Array.isArray(obj);
            }
        }]);

        return SlicePipe;
    }();

    SlicePipe.decorators = [{ type: _core.Pipe, args: [{ name: 'slice', pure: false }] }];
    /** @nocollapse */
    SlicePipe.ctorParameters = function () {
        return [];
    };

    /**
     * A collection of Angular pipes that are likely to be used in each and every application.
     */
    var /** @type {?} */COMMON_PIPES = [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe];

    /**
     * The module that includes all the basic Angular directives like {\@link NgIf}, {\@link NgForOf}, ...
     *
     * \@stable
     */

    var CommonModule = function CommonModule() {
        _classCallCheck(this, CommonModule);
    };

    CommonModule.decorators = [{ type: _core.NgModule, args: [{
            declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
            exports: [COMMON_DIRECTIVES, COMMON_PIPES],
            providers: [{ provide: NgLocalization, useClass: NgLocaleLocalization }]
        }] }];
    /** @nocollapse */
    CommonModule.ctorParameters = function () {
        return [];
    };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var /** @type {?} */PLATFORM_BROWSER_ID = 'browser';
    var /** @type {?} */PLATFORM_SERVER_ID = 'server';
    var /** @type {?} */PLATFORM_WORKER_APP_ID = 'browserWorkerApp';
    var /** @type {?} */PLATFORM_WORKER_UI_ID = 'browserWorkerUi';
    /**
     * Returns whether a platform id represents a browser platform.
     * \@experimental
     * @param {?} platformId
     * @return {?}
     */
    function isPlatformBrowser(platformId) {
        return platformId === PLATFORM_BROWSER_ID;
    }
    /**
     * Returns whether a platform id represents a server platform.
     * \@experimental
     * @param {?} platformId
     * @return {?}
     */
    function isPlatformServer(platformId) {
        return platformId === PLATFORM_SERVER_ID;
    }
    /**
     * Returns whether a platform id represents a web worker app platform.
     * \@experimental
     * @param {?} platformId
     * @return {?}
     */
    function isPlatformWorkerApp(platformId) {
        return platformId === PLATFORM_WORKER_APP_ID;
    }
    /**
     * Returns whether a platform id represents a web worker UI platform.
     * \@experimental
     * @param {?} platformId
     * @return {?}
     */
    function isPlatformWorkerUi(platformId) {
        return platformId === PLATFORM_WORKER_UI_ID;
    }

    /**
     * @stable
     */
    var /** @type {?} */VERSION = new _core.Version('4.0.0-rc.1');

    exports.NgLocaleLocalization = NgLocaleLocalization;
    exports.NgLocalization = NgLocalization;
    exports.CommonModule = CommonModule;
    exports.NgClass = NgClass;
    exports.NgFor = NgFor;
    exports.NgForOf = NgForOf;
    exports.NgIf = NgIf;
    exports.NgPlural = NgPlural;
    exports.NgPluralCase = NgPluralCase;
    exports.NgStyle = NgStyle;
    exports.NgSwitch = NgSwitch;
    exports.NgSwitchCase = NgSwitchCase;
    exports.NgSwitchDefault = NgSwitchDefault;
    exports.NgTemplateOutlet = NgTemplateOutlet;
    exports.NgComponentOutlet = NgComponentOutlet;
    exports.AsyncPipe = AsyncPipe;
    exports.DatePipe = DatePipe;
    exports.I18nPluralPipe = I18nPluralPipe;
    exports.I18nSelectPipe = I18nSelectPipe;
    exports.JsonPipe = JsonPipe;
    exports.LowerCasePipe = LowerCasePipe;
    exports.CurrencyPipe = CurrencyPipe;
    exports.DecimalPipe = DecimalPipe;
    exports.PercentPipe = PercentPipe;
    exports.SlicePipe = SlicePipe;
    exports.UpperCasePipe = UpperCasePipe;
    exports.TitleCasePipe = TitleCasePipe;
    exports.ɵPLATFORM_BROWSER_ID = PLATFORM_BROWSER_ID;
    exports.ɵPLATFORM_SERVER_ID = PLATFORM_SERVER_ID;
    exports.ɵPLATFORM_WORKER_APP_ID = PLATFORM_WORKER_APP_ID;
    exports.ɵPLATFORM_WORKER_UI_ID = PLATFORM_WORKER_UI_ID;
    exports.isPlatformBrowser = isPlatformBrowser;
    exports.isPlatformServer = isPlatformServer;
    exports.isPlatformWorkerApp = isPlatformWorkerApp;
    exports.isPlatformWorkerUi = isPlatformWorkerUi;
    exports.VERSION = VERSION;
    exports.PlatformLocation = PlatformLocation;
    exports.LocationStrategy = LocationStrategy;
    exports.APP_BASE_HREF = APP_BASE_HREF;
    exports.HashLocationStrategy = HashLocationStrategy;
    exports.PathLocationStrategy = PathLocationStrategy;
    exports.Location = Location;
    exports.ɵc = COMMON_DIRECTIVES;
    exports.ɵa = NgForOfRow;
    exports.ɵb = NgIfContext;
    exports.ɵd = COMMON_PIPES;
});
