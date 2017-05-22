(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/http', ['exports', '@angular/core', 'rxjs/Observable', '@angular/platform-browser'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/core'), require('rxjs/Observable'), require('@angular/platform-browser'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.core, global.Rx, global.ng.platformBrowser);
        global.ng = global.ng || {};
        global.ng.http = mod.exports;
    }
})(this, function (exports, _core, _Observable, _platformBrowser) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ɵd = exports.ɵc = exports.ɵb = exports.ɵe = exports.ɵa = exports.ɵg = exports.VERSION = exports.URLSearchParams = exports.QueryEncoder = exports.Response = exports.Request = exports.XSRFStrategy = exports.ConnectionBackend = exports.Connection = exports.JsonpModule = exports.HttpModule = exports.Jsonp = exports.Http = exports.Headers = exports.ResponseType = exports.ResponseContentType = exports.RequestMethod = exports.ReadyState = exports.ResponseOptions = exports.BaseResponseOptions = exports.RequestOptions = exports.BaseRequestOptions = exports.XHRConnection = exports.XHRBackend = exports.CookieXSRFStrategy = exports.JSONPConnection = exports.JSONPBackend = exports.BrowserXhr = undefined;

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

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

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

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

    var BrowserXhr = function () {
        function BrowserXhr() {
            _classCallCheck(this, BrowserXhr);
        }
        /**
         * @return {?}
         */


        _createClass(BrowserXhr, [{
            key: 'build',
            value: function build() {
                return new XMLHttpRequest();
            }
        }]);

        return BrowserXhr;
    }();

    BrowserXhr.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () {
        return [];
    };

    var RequestMethod = {};
    RequestMethod.Get = 0;
    RequestMethod.Post = 1;
    RequestMethod.Put = 2;
    RequestMethod.Delete = 3;
    RequestMethod.Options = 4;
    RequestMethod.Head = 5;
    RequestMethod.Patch = 6;
    RequestMethod[RequestMethod.Get] = "Get";
    RequestMethod[RequestMethod.Post] = "Post";
    RequestMethod[RequestMethod.Put] = "Put";
    RequestMethod[RequestMethod.Delete] = "Delete";
    RequestMethod[RequestMethod.Options] = "Options";
    RequestMethod[RequestMethod.Head] = "Head";
    RequestMethod[RequestMethod.Patch] = "Patch";
    var ReadyState = {};
    ReadyState.Unsent = 0;
    ReadyState.Open = 1;
    ReadyState.HeadersReceived = 2;
    ReadyState.Loading = 3;
    ReadyState.Done = 4;
    ReadyState.Cancelled = 5;
    ReadyState[ReadyState.Unsent] = "Unsent";
    ReadyState[ReadyState.Open] = "Open";
    ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
    ReadyState[ReadyState.Loading] = "Loading";
    ReadyState[ReadyState.Done] = "Done";
    ReadyState[ReadyState.Cancelled] = "Cancelled";
    var ResponseType = {};
    ResponseType.Basic = 0;
    ResponseType.Cors = 1;
    ResponseType.Default = 2;
    ResponseType.Error = 3;
    ResponseType.Opaque = 4;
    ResponseType[ResponseType.Basic] = "Basic";
    ResponseType[ResponseType.Cors] = "Cors";
    ResponseType[ResponseType.Default] = "Default";
    ResponseType[ResponseType.Error] = "Error";
    ResponseType[ResponseType.Opaque] = "Opaque";
    var ContentType = {};
    ContentType.NONE = 0;
    ContentType.JSON = 1;
    ContentType.FORM = 2;
    ContentType.FORM_DATA = 3;
    ContentType.TEXT = 4;
    ContentType.BLOB = 5;
    ContentType.ARRAY_BUFFER = 6;
    ContentType[ContentType.NONE] = "NONE";
    ContentType[ContentType.JSON] = "JSON";
    ContentType[ContentType.FORM] = "FORM";
    ContentType[ContentType.FORM_DATA] = "FORM_DATA";
    ContentType[ContentType.TEXT] = "TEXT";
    ContentType[ContentType.BLOB] = "BLOB";
    ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
    var ResponseContentType = {};
    ResponseContentType.Text = 0;
    ResponseContentType.Json = 1;
    ResponseContentType.ArrayBuffer = 2;
    ResponseContentType.Blob = 3;
    ResponseContentType[ResponseContentType.Text] = "Text";
    ResponseContentType[ResponseContentType.Json] = "Json";
    ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
    ResponseContentType[ResponseContentType.Blob] = "Blob";

    /**
     * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
     * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
     *
     * The only known difference between this `Headers` implementation and the spec is the
     * lack of an `entries` method.
     *
     * ### Example
     *
     * ```
     * import {Headers} from '\@angular/http';
     *
     * var firstHeaders = new Headers();
     * firstHeaders.append('Content-Type', 'image/jpeg');
     * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
     *
     * // Create headers from Plain Old JavaScript Object
     * var secondHeaders = new Headers({
     *   'X-My-Custom-Header': 'Angular'
     * });
     * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
     *
     * var thirdHeaders = new Headers(secondHeaders);
     * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
     * ```
     *
     * \@experimental
     */

    var Headers = function () {
        /**
         * @param {?=} headers
         */
        function Headers(headers) {
            var _this = this;

            _classCallCheck(this, Headers);

            /** @internal header names are lower case */
            this._headers = new Map();
            /** @internal map lower case names to actual names */
            this._normalizedNames = new Map();
            if (!headers) {
                return;
            }
            if (headers instanceof Headers) {
                headers.forEach(function (values, name) {
                    values.forEach(function (value) {
                        return _this.append(name, value);
                    });
                });
                return;
            }
            Object.keys(headers).forEach(function (name) {
                var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
                _this.delete(name);
                values.forEach(function (value) {
                    return _this.append(name, value);
                });
            });
        }
        /**
         * Returns a new Headers instance from the given DOMString of Response Headers
         * @param {?} headersString
         * @return {?}
         */


        _createClass(Headers, [{
            key: 'append',
            value: function append(name, value) {
                var /** @type {?} */values = this.getAll(name);
                if (values === null) {
                    this.set(name, value);
                } else {
                    values.push(value);
                }
            }
        }, {
            key: 'delete',
            value: function _delete(name) {
                var /** @type {?} */lcName = name.toLowerCase();
                this._normalizedNames.delete(lcName);
                this._headers.delete(lcName);
            }
        }, {
            key: 'forEach',
            value: function forEach(fn) {
                var _this2 = this;

                this._headers.forEach(function (values, lcName) {
                    return fn(values, _this2._normalizedNames.get(lcName), _this2._headers);
                });
            }
        }, {
            key: 'get',
            value: function get(name) {
                var /** @type {?} */values = this.getAll(name);
                if (values === null) {
                    return null;
                }
                return values.length > 0 ? values[0] : null;
            }
        }, {
            key: 'has',
            value: function has(name) {
                return this._headers.has(name.toLowerCase());
            }
        }, {
            key: 'keys',
            value: function keys() {
                return Array.from(this._normalizedNames.values());
            }
        }, {
            key: 'set',
            value: function set(name, value) {
                if (Array.isArray(value)) {
                    if (value.length) {
                        this._headers.set(name.toLowerCase(), [value.join(',')]);
                    }
                } else {
                    this._headers.set(name.toLowerCase(), [value]);
                }
                this.mayBeSetNormalizedName(name);
            }
        }, {
            key: 'values',
            value: function values() {
                return Array.from(this._headers.values());
            }
        }, {
            key: 'toJSON',
            value: function toJSON() {
                var _this3 = this;

                var /** @type {?} */serialized = {};
                this._headers.forEach(function (values, name) {
                    var /** @type {?} */split = [];
                    values.forEach(function (v) {
                        return split.push.apply(split, _toConsumableArray(v.split(',')));
                    });
                    serialized[_this3._normalizedNames.get(name)] = split;
                });
                return serialized;
            }
        }, {
            key: 'getAll',
            value: function getAll(name) {
                return this.has(name) ? this._headers.get(name.toLowerCase()) : null;
            }
        }, {
            key: 'entries',
            value: function entries() {
                throw new Error('"entries" method is not implemented on Headers class');
            }
        }, {
            key: 'mayBeSetNormalizedName',
            value: function mayBeSetNormalizedName(name) {
                var /** @type {?} */lcName = name.toLowerCase();
                if (!this._normalizedNames.has(lcName)) {
                    this._normalizedNames.set(lcName, name);
                }
            }
        }], [{
            key: 'fromResponseHeaderString',
            value: function fromResponseHeaderString(headersString) {
                var /** @type {?} */headers = new Headers();
                headersString.split('\n').forEach(function (line) {
                    var /** @type {?} */index = line.indexOf(':');
                    if (index > 0) {
                        var /** @type {?} */name = line.slice(0, index);
                        var /** @type {?} */value = line.slice(index + 1).trim();
                        headers.set(name, value);
                    }
                });
                return headers;
            }
        }]);

        return Headers;
    }();

    var ResponseOptions = function () {
        /**
         * @param {?=} __0
         */
        function ResponseOptions() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                body = _ref.body,
                status = _ref.status,
                headers = _ref.headers,
                statusText = _ref.statusText,
                type = _ref.type,
                url = _ref.url;

            _classCallCheck(this, ResponseOptions);

            this.body = body != null ? body : null;
            this.status = status != null ? status : null;
            this.headers = headers != null ? headers : null;
            this.statusText = statusText != null ? statusText : null;
            this.type = type != null ? type : null;
            this.url = url != null ? url : null;
        }
        /**
         * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
         * override
         * existing values. This method will not change the values of the instance on which it is being
         * called.
         *
         * This may be useful when sharing a base `ResponseOptions` object inside tests,
         * where certain properties may change from test to test.
         *
         * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
         *
         * ```typescript
         * import {ResponseOptions, Response} from '\@angular/http';
         *
         * var options = new ResponseOptions({
         *   body: {name: 'Jeff'}
         * });
         * var res = new Response(options.merge({
         *   url: 'https://google.com'
         * }));
         * console.log('options.url:', options.url); // null
         * console.log('res.json():', res.json()); // Object {name: "Jeff"}
         * console.log('res.url:', res.url); // https://google.com
         * ```
         * @param {?=} options
         * @return {?}
         */


        _createClass(ResponseOptions, [{
            key: 'merge',
            value: function merge(options) {
                return new ResponseOptions({
                    body: options && options.body != null ? options.body : this.body,
                    status: options && options.status != null ? options.status : this.status,
                    headers: options && options.headers != null ? options.headers : this.headers,
                    statusText: options && options.statusText != null ? options.statusText : this.statusText,
                    type: options && options.type != null ? options.type : this.type,
                    url: options && options.url != null ? options.url : this.url
                });
            }
        }]);

        return ResponseOptions;
    }();

    var BaseResponseOptions = function (_ResponseOptions) {
        _inherits(BaseResponseOptions, _ResponseOptions);

        function BaseResponseOptions() {
            _classCallCheck(this, BaseResponseOptions);

            return _possibleConstructorReturn(this, (BaseResponseOptions.__proto__ || Object.getPrototypeOf(BaseResponseOptions)).call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }));
        }

        return BaseResponseOptions;
    }(ResponseOptions);

    BaseResponseOptions.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () {
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
     * Abstract class from which real backends are derived.
     *
     * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
     * {\@link Request}.
     *
     * \@experimental
     * @abstract
     */

    var ConnectionBackend = function () {
        function ConnectionBackend() {
            _classCallCheck(this, ConnectionBackend);
        }

        _createClass(ConnectionBackend, [{
            key: 'createConnection',
            value: function createConnection(request) {}
        }]);

        return ConnectionBackend;
    }();

    var Connection = function Connection() {
        _classCallCheck(this, Connection);
    };

    var XSRFStrategy = function () {
        function XSRFStrategy() {
            _classCallCheck(this, XSRFStrategy);
        }

        _createClass(XSRFStrategy, [{
            key: 'configureRequest',
            value: function configureRequest(req) {}
        }]);

        return XSRFStrategy;
    }();

    /**
     * @param {?} method
     * @return {?}
     */
    function normalizeMethodName(method) {
        if (typeof method !== 'string') return method;
        switch (method.toUpperCase()) {
            case 'GET':
                return RequestMethod.Get;
            case 'POST':
                return RequestMethod.Post;
            case 'PUT':
                return RequestMethod.Put;
            case 'DELETE':
                return RequestMethod.Delete;
            case 'OPTIONS':
                return RequestMethod.Options;
            case 'HEAD':
                return RequestMethod.Head;
            case 'PATCH':
                return RequestMethod.Patch;
        }
        throw new Error('Invalid request method. The method "' + method + '" is not supported.');
    }
    var /** @type {?} */isSuccess = function isSuccess(status) {
        return status >= 200 && status < 300;
    };
    /**
     * @param {?} xhr
     * @return {?}
     */
    function getResponseURL(xhr) {
        if ('responseURL' in xhr) {
            return xhr.responseURL;
        }
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
            return xhr.getResponseHeader('X-Request-URL');
        }
        return;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    function stringToArrayBuffer(input) {
        var /** @type {?} */view = new Uint16Array(input.length);
        for (var /** @type {?} */i = 0, /** @type {?} */strLen = input.length; i < strLen; i++) {
            view[i] = input.charCodeAt(i);
        }
        return view.buffer;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @param {?=} rawParams
     * @return {?}
     */
    function paramParser() {
        var rawParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var /** @type {?} */map = new Map();
        if (rawParams.length > 0) {
            var /** @type {?} */params = rawParams.split('&');
            params.forEach(function (param) {
                var /** @type {?} */eqIdx = param.indexOf('=');

                var _ref2 = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)],
                    _ref3 = _slicedToArray(_ref2, 2),
                    key = _ref3[0],
                    val = _ref3[1];

                var /** @type {?} */list = map.get(key) || [];
                list.push(val);
                map.set(key, list);
            });
        }
        return map;
    }
    /**
     * \@experimental
     *
     */

    var QueryEncoder = function () {
        function QueryEncoder() {
            _classCallCheck(this, QueryEncoder);
        }

        _createClass(QueryEncoder, [{
            key: 'encodeKey',
            value: function encodeKey(k) {
                return standardEncoding(k);
            }
        }, {
            key: 'encodeValue',
            value: function encodeValue(v) {
                return standardEncoding(v);
            }
        }]);

        return QueryEncoder;
    }();

    /**
     * @param {?} v
     * @return {?}
     */
    function standardEncoding(v) {
        return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
    }
    /**
     * Map-like representation of url search parameters, based on
     * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
     * with several extensions for merging URLSearchParams objects:
     *   - setAll()
     *   - appendAll()
     *   - replaceAll()
     *
     * This class accepts an optional second parameter of ${\@link QueryEncoder},
     * which is used to serialize parameters before making a request. By default,
     * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
     * and then un-encodes certain characters that are allowed to be part of the query
     * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
     *
     * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
     *
     * If the set of allowed query characters is not acceptable for a particular backend,
     * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
     *
     * ```
     * import {URLSearchParams, QueryEncoder} from '\@angular/http';
     * class MyQueryEncoder extends QueryEncoder {
     *   encodeKey(k: string): string {
     *     return myEncodingFunction(k);
     *   }
     *
     *   encodeValue(v: string): string {
     *     return myEncodingFunction(v);
     *   }
     * }
     *
     * let params = new URLSearchParams('', new MyQueryEncoder());
     * ```
     * \@experimental
     */

    var URLSearchParams = function () {
        /**
         * @param {?=} rawParams
         * @param {?=} queryEncoder
         */
        function URLSearchParams() {
            var rawParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var queryEncoder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new QueryEncoder();

            _classCallCheck(this, URLSearchParams);

            this.rawParams = rawParams;
            this.queryEncoder = queryEncoder;
            this.paramsMap = paramParser(rawParams);
        }
        /**
         * @return {?}
         */


        _createClass(URLSearchParams, [{
            key: 'clone',
            value: function clone() {
                var /** @type {?} */clone = new URLSearchParams('', this.queryEncoder);
                clone.appendAll(this);
                return clone;
            }
        }, {
            key: 'has',
            value: function has(param) {
                return this.paramsMap.has(param);
            }
        }, {
            key: 'get',
            value: function get(param) {
                var /** @type {?} */storedParam = this.paramsMap.get(param);
                return Array.isArray(storedParam) ? storedParam[0] : null;
            }
        }, {
            key: 'getAll',
            value: function getAll(param) {
                return this.paramsMap.get(param) || [];
            }
        }, {
            key: 'set',
            value: function set(param, val) {
                if (val === void 0 || val === null) {
                    this.delete(param);
                    return;
                }
                var /** @type {?} */list = this.paramsMap.get(param) || [];
                list.length = 0;
                list.push(val);
                this.paramsMap.set(param, list);
            }
        }, {
            key: 'setAll',
            value: function setAll(searchParams) {
                var _this5 = this;

                searchParams.paramsMap.forEach(function (value, param) {
                    var /** @type {?} */list = _this5.paramsMap.get(param) || [];
                    list.length = 0;
                    list.push(value[0]);
                    _this5.paramsMap.set(param, list);
                });
            }
        }, {
            key: 'append',
            value: function append(param, val) {
                if (val === void 0 || val === null) return;
                var /** @type {?} */list = this.paramsMap.get(param) || [];
                list.push(val);
                this.paramsMap.set(param, list);
            }
        }, {
            key: 'appendAll',
            value: function appendAll(searchParams) {
                var _this6 = this;

                searchParams.paramsMap.forEach(function (value, param) {
                    var /** @type {?} */list = _this6.paramsMap.get(param) || [];
                    for (var /** @type {?} */i = 0; i < value.length; ++i) {
                        list.push(value[i]);
                    }
                    _this6.paramsMap.set(param, list);
                });
            }
        }, {
            key: 'replaceAll',
            value: function replaceAll(searchParams) {
                var _this7 = this;

                searchParams.paramsMap.forEach(function (value, param) {
                    var /** @type {?} */list = _this7.paramsMap.get(param) || [];
                    list.length = 0;
                    for (var /** @type {?} */i = 0; i < value.length; ++i) {
                        list.push(value[i]);
                    }
                    _this7.paramsMap.set(param, list);
                });
            }
        }, {
            key: 'toString',
            value: function toString() {
                var _this8 = this;

                var /** @type {?} */paramsList = [];
                this.paramsMap.forEach(function (values, k) {
                    values.forEach(function (v) {
                        return paramsList.push(_this8.queryEncoder.encodeKey(k) + '=' + _this8.queryEncoder.encodeValue(v));
                    });
                });
                return paramsList.join('&');
            }
        }, {
            key: 'delete',
            value: function _delete(param) {
                this.paramsMap.delete(param);
            }
        }]);

        return URLSearchParams;
    }();

    var Body = function () {
        function Body() {
            _classCallCheck(this, Body);
        }

        _createClass(Body, [{
            key: 'json',
            value: function json() {
                if (typeof this._body === 'string') {
                    return JSON.parse( /** @type {?} */this._body);
                }
                if (this._body instanceof ArrayBuffer) {
                    return JSON.parse(this.text());
                }
                return this._body;
            }
        }, {
            key: 'text',
            value: function text() {
                if (this._body instanceof URLSearchParams) {
                    return this._body.toString();
                }
                if (this._body instanceof ArrayBuffer) {
                    return String.fromCharCode.apply(null, new Uint16Array( /** @type {?} */this._body));
                }
                if (this._body == null) {
                    return '';
                }
                if (_typeof(this._body) === 'object') {
                    return JSON.stringify(this._body, null, 2);
                }
                return this._body.toString();
            }
        }, {
            key: 'arrayBuffer',
            value: function arrayBuffer() {
                if (this._body instanceof ArrayBuffer) {
                    return this._body;
                }
                return stringToArrayBuffer(this.text());
            }
        }, {
            key: 'blob',
            value: function blob() {
                if (this._body instanceof Blob) {
                    return this._body;
                }
                if (this._body instanceof ArrayBuffer) {
                    return new Blob([this._body]);
                }
                throw new Error('The request body isn\'t either a blob or an array buffer');
            }
        }]);

        return Body;
    }();

    var Response = function (_Body) {
        _inherits(Response, _Body);

        /**
         * @param {?} responseOptions
         */
        function Response(responseOptions) {
            _classCallCheck(this, Response);

            var _this9 = _possibleConstructorReturn(this, (Response.__proto__ || Object.getPrototypeOf(Response)).call(this));

            _this9._body = responseOptions.body;
            _this9.status = responseOptions.status;
            _this9.ok = _this9.status >= 200 && _this9.status <= 299;
            _this9.statusText = responseOptions.statusText;
            _this9.headers = responseOptions.headers;
            _this9.type = responseOptions.type;
            _this9.url = responseOptions.url;
            return _this9;
        }
        /**
         * @return {?}
         */


        _createClass(Response, [{
            key: 'toString',
            value: function toString() {
                return 'Response with status: ' + this.status + ' ' + this.statusText + ' for URL: ' + this.url;
            }
        }]);

        return Response;
    }(Body);

    var /** @type {?} */_nextRequestId = 0;
    var /** @type {?} */JSONP_HOME = '__ng_jsonp__';
    var /** @type {?} */_jsonpConnections = null;
    /**
     * @return {?}
     */
    function _getJsonpConnections() {
        var /** @type {?} */w = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' ? window : {};
        if (_jsonpConnections === null) {
            _jsonpConnections = w[JSONP_HOME] = {};
        }
        return _jsonpConnections;
    }

    var BrowserJsonp = function () {
        function BrowserJsonp() {
            _classCallCheck(this, BrowserJsonp);
        }

        _createClass(BrowserJsonp, [{
            key: 'build',
            value: function build(url) {
                var /** @type {?} */node = document.createElement('script');
                node.src = url;
                return node;
            }
        }, {
            key: 'nextRequestID',
            value: function nextRequestID() {
                return '__req' + _nextRequestId++;
            }
        }, {
            key: 'requestCallback',
            value: function requestCallback(id) {
                return JSONP_HOME + '.' + id + '.finished';
            }
        }, {
            key: 'exposeConnection',
            value: function exposeConnection(id, connection) {
                var /** @type {?} */connections = _getJsonpConnections();
                connections[id] = connection;
            }
        }, {
            key: 'removeConnection',
            value: function removeConnection(id) {
                var /** @type {?} */connections = _getJsonpConnections();
                connections[id] = null;
            }
        }, {
            key: 'send',
            value: function send(node) {
                document.body.appendChild( /** @type {?} */node);
            }
        }, {
            key: 'cleanup',
            value: function cleanup(node) {
                if (node.parentNode) {
                    node.parentNode.removeChild( /** @type {?} */node);
                }
            }
        }]);

        return BrowserJsonp;
    }();

    BrowserJsonp.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = function () {
        return [];
    };

    var /** @type {?} */JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
    var /** @type {?} */JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
    /**
     * Abstract base class for an in-flight JSONP request.
     *
     * \@experimental
     * @abstract
     */

    var JSONPConnection = function () {
        function JSONPConnection() {
            _classCallCheck(this, JSONPConnection);
        }

        _createClass(JSONPConnection, [{
            key: 'finished',
            value: function finished(data) {}
        }]);

        return JSONPConnection;
    }();

    var JSONPConnection_ = function (_JSONPConnection) {
        _inherits(JSONPConnection_, _JSONPConnection);

        /**
         * @param {?} req
         * @param {?} _dom
         * @param {?=} baseResponseOptions
         */
        function JSONPConnection_(req, _dom, baseResponseOptions) {
            _classCallCheck(this, JSONPConnection_);

            var _this10 = _possibleConstructorReturn(this, (JSONPConnection_.__proto__ || Object.getPrototypeOf(JSONPConnection_)).call(this));

            _this10._dom = _dom;
            _this10.baseResponseOptions = baseResponseOptions;
            _this10._finished = false;
            if (req.method !== RequestMethod.Get) {
                throw new TypeError(JSONP_ERR_WRONG_METHOD);
            }
            _this10.request = req;
            _this10.response = new _Observable.Observable(function (responseObserver) {
                _this10.readyState = ReadyState.Loading;
                var id = _this10._id = _dom.nextRequestID();
                _dom.exposeConnection(id, _this10);
                // Workaround Dart
                // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
                var callback = _dom.requestCallback(_this10._id);
                var url = req.url;
                if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                    url = url.replace('=JSONP_CALLBACK&', '=' + callback + '&');
                } else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                    url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ('=' + callback);
                }
                var script = _this10._script = _dom.build(url);
                var onLoad = function onLoad(event) {
                    if (_this10.readyState === ReadyState.Cancelled) return;
                    _this10.readyState = ReadyState.Done;
                    _dom.cleanup(script);
                    if (!_this10._finished) {
                        var _responseOptions = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                        if (baseResponseOptions) {
                            _responseOptions = baseResponseOptions.merge(_responseOptions);
                        }
                        responseObserver.error(new Response(_responseOptions));
                        return;
                    }
                    var responseOptions = new ResponseOptions({ body: _this10._responseData, url: url });
                    if (_this10.baseResponseOptions) {
                        responseOptions = _this10.baseResponseOptions.merge(responseOptions);
                    }
                    responseObserver.next(new Response(responseOptions));
                    responseObserver.complete();
                };
                var onError = function onError(error) {
                    if (_this10.readyState === ReadyState.Cancelled) return;
                    _this10.readyState = ReadyState.Done;
                    _dom.cleanup(script);
                    var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                    if (baseResponseOptions) {
                        responseOptions = baseResponseOptions.merge(responseOptions);
                    }
                    responseObserver.error(new Response(responseOptions));
                };
                script.addEventListener('load', onLoad);
                script.addEventListener('error', onError);
                _dom.send(script);
                return function () {
                    _this10.readyState = ReadyState.Cancelled;
                    script.removeEventListener('load', onLoad);
                    script.removeEventListener('error', onError);
                    _this10._dom.cleanup(script);
                };
            });
            return _this10;
        }
        /**
         * @param {?=} data
         * @return {?}
         */


        _createClass(JSONPConnection_, [{
            key: 'finished',
            value: function finished(data) {
                // Don't leak connections
                this._finished = true;
                this._dom.removeConnection(this._id);
                if (this.readyState === ReadyState.Cancelled) return;
                this._responseData = data;
            }
        }]);

        return JSONPConnection_;
    }(JSONPConnection);

    var JSONPBackend = function (_ConnectionBackend) {
        _inherits(JSONPBackend, _ConnectionBackend);

        function JSONPBackend() {
            _classCallCheck(this, JSONPBackend);

            return _possibleConstructorReturn(this, (JSONPBackend.__proto__ || Object.getPrototypeOf(JSONPBackend)).apply(this, arguments));
        }

        return JSONPBackend;
    }(ConnectionBackend);

    var JSONPBackend_ = function (_JSONPBackend) {
        _inherits(JSONPBackend_, _JSONPBackend);

        /**
         * @param {?} _browserJSONP
         * @param {?} _baseResponseOptions
         */
        function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
            _classCallCheck(this, JSONPBackend_);

            var _this12 = _possibleConstructorReturn(this, (JSONPBackend_.__proto__ || Object.getPrototypeOf(JSONPBackend_)).call(this));

            _this12._browserJSONP = _browserJSONP;
            _this12._baseResponseOptions = _baseResponseOptions;
            return _this12;
        }
        /**
         * @param {?} request
         * @return {?}
         */


        _createClass(JSONPBackend_, [{
            key: 'createConnection',
            value: function createConnection(request) {
                return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
            }
        }]);

        return JSONPBackend_;
    }(JSONPBackend);

    JSONPBackend_.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    JSONPBackend_.ctorParameters = function () {
        return [{ type: BrowserJsonp }, { type: ResponseOptions }];
    };

    var /** @type {?} */XSSI_PREFIX = /^\)\]\}',?\n/;
    /**
     * Creates connections using `XMLHttpRequest`. Given a fully-qualified
     * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
     * request.
     *
     * This class would typically not be created or interacted with directly inside applications, though
     * the {\@link MockConnection} may be interacted with in tests.
     *
     * \@experimental
     */

    var XHRConnection = function () {
        /**
         * @param {?} req
         * @param {?} browserXHR
         * @param {?=} baseResponseOptions
         */
        function XHRConnection(req, browserXHR, baseResponseOptions) {
            var _this13 = this;

            _classCallCheck(this, XHRConnection);

            this.request = req;
            this.response = new _Observable.Observable(function (responseObserver) {
                var _xhr = browserXHR.build();
                _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
                if (req.withCredentials != null) {
                    _xhr.withCredentials = req.withCredentials;
                }
                // load event handler
                var onLoad = function onLoad() {
                    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                    var status = _xhr.status === 1223 ? 204 : _xhr.status;
                    var body = null;
                    // HTTP 204 means no content
                    if (status !== 204) {
                        // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                        // response/responseType properties were introduced in ResourceLoader Level2 spec
                        // (supported by IE10)
                        body = typeof _xhr.response === 'undefined' ? _xhr.responseText : _xhr.response;
                        // Implicitly strip a potential XSSI prefix.
                        if (typeof body === 'string') {
                            body = body.replace(XSSI_PREFIX, '');
                        }
                    }
                    // fix status code when it is 0 (0 status is undocumented).
                    // Occurs when accessing file resources or on Android 4.1 stock browser
                    // while retrieving files from application cache.
                    if (status === 0) {
                        status = body ? 200 : 0;
                    }
                    var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                    // IE 9 does not provide the way to get URL of response
                    var url = getResponseURL(_xhr) || req.url;
                    var statusText = _xhr.statusText || 'OK';
                    var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                    if (baseResponseOptions != null) {
                        responseOptions = baseResponseOptions.merge(responseOptions);
                    }
                    var response = new Response(responseOptions);
                    response.ok = isSuccess(status);
                    if (response.ok) {
                        responseObserver.next(response);
                        // TODO(gdi2290): defer complete if array buffer until done
                        responseObserver.complete();
                        return;
                    }
                    responseObserver.error(response);
                };
                // error event handler
                var onError = function onError(err) {
                    var responseOptions = new ResponseOptions({
                        body: err,
                        type: ResponseType.Error,
                        status: _xhr.status,
                        statusText: _xhr.statusText
                    });
                    if (baseResponseOptions != null) {
                        responseOptions = baseResponseOptions.merge(responseOptions);
                    }
                    responseObserver.error(new Response(responseOptions));
                };
                _this13.setDetectedContentType(req, _xhr);
                if (req.headers == null) {
                    req.headers = new Headers();
                }
                if (!req.headers.has('Accept')) {
                    req.headers.append('Accept', 'application/json, text/plain, */*');
                }
                req.headers.forEach(function (values, name) {
                    return _xhr.setRequestHeader(name, values.join(','));
                });
                // Select the correct buffer type to store the response
                if (req.responseType != null && _xhr.responseType != null) {
                    switch (req.responseType) {
                        case ResponseContentType.ArrayBuffer:
                            _xhr.responseType = 'arraybuffer';
                            break;
                        case ResponseContentType.Json:
                            _xhr.responseType = 'json';
                            break;
                        case ResponseContentType.Text:
                            _xhr.responseType = 'text';
                            break;
                        case ResponseContentType.Blob:
                            _xhr.responseType = 'blob';
                            break;
                        default:
                            throw new Error('The selected responseType is not supported');
                    }
                }
                _xhr.addEventListener('load', onLoad);
                _xhr.addEventListener('error', onError);
                _xhr.send(_this13.request.getBody());
                return function () {
                    _xhr.removeEventListener('load', onLoad);
                    _xhr.removeEventListener('error', onError);
                    _xhr.abort();
                };
            });
        }
        /**
         * @param {?} req
         * @param {?} _xhr
         * @return {?}
         */


        _createClass(XHRConnection, [{
            key: 'setDetectedContentType',
            value: function setDetectedContentType(req /** TODO Request */, _xhr /** XMLHttpRequest */) {
                // Skip if a custom Content-Type header is provided
                if (req.headers != null && req.headers.get('Content-Type') != null) {
                    return;
                }
                // Set the detected content type
                switch (req.contentType) {
                    case ContentType.NONE:
                        break;
                    case ContentType.JSON:
                        _xhr.setRequestHeader('content-type', 'application/json');
                        break;
                    case ContentType.FORM:
                        _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                        break;
                    case ContentType.TEXT:
                        _xhr.setRequestHeader('content-type', 'text/plain');
                        break;
                    case ContentType.BLOB:
                        var /** @type {?} */blob = req.blob();
                        if (blob.type) {
                            _xhr.setRequestHeader('content-type', blob.type);
                        }
                        break;
                }
            }
        }]);

        return XHRConnection;
    }();

    var CookieXSRFStrategy = function () {
        /**
         * @param {?=} _cookieName
         * @param {?=} _headerName
         */
        function CookieXSRFStrategy() {
            var _cookieName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'XSRF-TOKEN';

            var _headerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'X-XSRF-TOKEN';

            _classCallCheck(this, CookieXSRFStrategy);

            this._cookieName = _cookieName;
            this._headerName = _headerName;
        }
        /**
         * @param {?} req
         * @return {?}
         */


        _createClass(CookieXSRFStrategy, [{
            key: 'configureRequest',
            value: function configureRequest(req) {
                var /** @type {?} */xsrfToken = (0, _platformBrowser.ɵgetDOM)().getCookie(this._cookieName);
                if (xsrfToken) {
                    req.headers.set(this._headerName, xsrfToken);
                }
            }
        }]);

        return CookieXSRFStrategy;
    }();

    var XHRBackend = function () {
        /**
         * @param {?} _browserXHR
         * @param {?} _baseResponseOptions
         * @param {?} _xsrfStrategy
         */
        function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
            _classCallCheck(this, XHRBackend);

            this._browserXHR = _browserXHR;
            this._baseResponseOptions = _baseResponseOptions;
            this._xsrfStrategy = _xsrfStrategy;
        }
        /**
         * @param {?} request
         * @return {?}
         */


        _createClass(XHRBackend, [{
            key: 'createConnection',
            value: function createConnection(request) {
                this._xsrfStrategy.configureRequest(request);
                return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
            }
        }]);

        return XHRBackend;
    }();

    XHRBackend.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () {
        return [{ type: BrowserXhr }, { type: ResponseOptions }, { type: XSRFStrategy }];
    };

    /**
     * Creates a request options object to be optionally provided when instantiating a
     * {\@link Request}.
     *
     * This class is based on the `RequestInit` description in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#requestinit).
     *
     * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
     * class, which sub-classes `RequestOptions`.
     *
     * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * var options = new RequestOptions({
     *   method: RequestMethod.Post,
     *   url: 'https://google.com'
     * });
     * var req = new Request(options);
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // https://google.com
     * ```
     *
     * \@experimental
     */

    var RequestOptions = function () {
        _createClass(RequestOptions, [{
            key: 'search',
            get: function get() {
                return this.params;
            },
            set: function set(params) {
                this.params = params;
            }
        }]);

        /**
         * @param {?=} __0
         */
        function RequestOptions() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                method = _ref4.method,
                headers = _ref4.headers,
                body = _ref4.body,
                url = _ref4.url,
                search = _ref4.search,
                params = _ref4.params,
                withCredentials = _ref4.withCredentials,
                responseType = _ref4.responseType;

            _classCallCheck(this, RequestOptions);

            this.method = method != null ? normalizeMethodName(method) : null;
            this.headers = headers != null ? headers : null;
            this.body = body != null ? body : null;
            this.url = url != null ? url : null;
            this.params = this._mergeSearchParams(params || search);
            this.withCredentials = withCredentials != null ? withCredentials : null;
            this.responseType = responseType != null ? responseType : null;
        }
        /**
         * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
         * existing values. This method will not change the values of the instance on which it is being
         * called.
         *
         * Note that `headers` and `search` will override existing values completely if present in
         * the `options` object. If these values should be merged, it should be done prior to calling
         * `merge` on the `RequestOptions` instance.
         *
         * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
         *
         * ```typescript
         * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
         *
         * var options = new RequestOptions({
         *   method: RequestMethod.Post
         * });
         * var req = new Request(options.merge({
         *   url: 'https://google.com'
         * }));
         * console.log('req.method:', RequestMethod[req.method]); // Post
         * console.log('options.url:', options.url); // null
         * console.log('req.url:', req.url); // https://google.com
         * ```
         * @param {?=} options
         * @return {?}
         */


        _createClass(RequestOptions, [{
            key: 'merge',
            value: function merge(options) {
                return new RequestOptions({
                    method: options && options.method != null ? options.method : this.method,
                    headers: options && options.headers != null ? options.headers : new Headers(this.headers),
                    body: options && options.body != null ? options.body : this.body,
                    url: options && options.url != null ? options.url : this.url,
                    params: options && this._mergeSearchParams(options.params || options.search),
                    withCredentials: options && options.withCredentials != null ? options.withCredentials : this.withCredentials,
                    responseType: options && options.responseType != null ? options.responseType : this.responseType
                });
            }
        }, {
            key: '_mergeSearchParams',
            value: function _mergeSearchParams(params) {
                if (!params) return this.params;
                if (params instanceof URLSearchParams) {
                    return params.clone();
                }
                if (typeof params === 'string') {
                    return new URLSearchParams(params);
                }
                return this._parseParams(params);
            }
        }, {
            key: '_parseParams',
            value: function _parseParams() {
                var _this14 = this;

                var objParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var /** @type {?} */params = new URLSearchParams();
                Object.keys(objParams).forEach(function (key) {
                    var /** @type {?} */value = objParams[key];
                    if (Array.isArray(value)) {
                        value.forEach(function (item) {
                            return _this14._appendParam(key, item, params);
                        });
                    } else {
                        _this14._appendParam(key, value, params);
                    }
                });
                return params;
            }
        }, {
            key: '_appendParam',
            value: function _appendParam(key, value, params) {
                if (typeof value !== 'string') {
                    value = JSON.stringify(value);
                }
                params.append(key, value);
            }
        }]);

        return RequestOptions;
    }();

    var BaseRequestOptions = function (_RequestOptions) {
        _inherits(BaseRequestOptions, _RequestOptions);

        function BaseRequestOptions() {
            _classCallCheck(this, BaseRequestOptions);

            return _possibleConstructorReturn(this, (BaseRequestOptions.__proto__ || Object.getPrototypeOf(BaseRequestOptions)).call(this, { method: RequestMethod.Get, headers: new Headers() }));
        }

        return BaseRequestOptions;
    }(RequestOptions);

    BaseRequestOptions.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () {
        return [];
    };

    /**
     * Creates `Request` instances from provided values.
     *
     * The Request's interface is inspired by the Request constructor defined in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#request-class),
     * but is considered a static value whose body can be accessed many times. There are other
     * differences in the implementation, but this is the most significant.
     *
     * `Request` instances are typically created by higher-level classes, like {\@link Http} and
     * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
     * One such example is when creating services that wrap higher-level services, like {\@link Http},
     * where it may be useful to generate a `Request` with arbitrary headers and search params.
     *
     * ```typescript
     * import {Injectable, Injector} from '\@angular/core';
     * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
     *
     * \@Injectable()
     * class AutoAuthenticator {
     *   constructor(public http:Http) {}
     *   request(url:string) {
     *     return this.http.request(new Request({
     *       method: RequestMethod.Get,
     *       url: url,
     *       search: 'password=123'
     *     }));
     *   }
     * }
     *
     * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
     * var authenticator = injector.get(AutoAuthenticator);
     * authenticator.request('people.json').subscribe(res => {
     *   //URL should have included '?password=123'
     *   console.log('people', res.json());
     * });
     * ```
     *
     * \@experimental
     */

    var Request = function (_Body2) {
        _inherits(Request, _Body2);

        /**
         * @param {?} requestOptions
         */
        function Request(requestOptions) {
            _classCallCheck(this, Request);

            var _this16 = _possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).call(this));

            // TODO: assert that url is present
            var url = requestOptions.url;
            _this16.url = requestOptions.url;
            if (requestOptions.params) {
                var params = requestOptions.params.toString();
                if (params.length > 0) {
                    var prefix = '?';
                    if (_this16.url.indexOf('?') != -1) {
                        prefix = _this16.url[_this16.url.length - 1] == '&' ? '' : '&';
                    }
                    // TODO: just delete search-query-looking string in url?
                    _this16.url = url + prefix + params;
                }
            }
            _this16._body = requestOptions.body;
            _this16.method = normalizeMethodName(requestOptions.method);
            // TODO(jeffbcross): implement behavior
            // Defaults to 'omit', consistent with browser
            _this16.headers = new Headers(requestOptions.headers);
            _this16.contentType = _this16.detectContentType();
            _this16.withCredentials = requestOptions.withCredentials;
            _this16.responseType = requestOptions.responseType;
            return _this16;
        }
        /**
         * Returns the content type enum based on header options.
         * @return {?}
         */


        _createClass(Request, [{
            key: 'detectContentType',
            value: function detectContentType() {
                switch (this.headers.get('content-type')) {
                    case 'application/json':
                        return ContentType.JSON;
                    case 'application/x-www-form-urlencoded':
                        return ContentType.FORM;
                    case 'multipart/form-data':
                        return ContentType.FORM_DATA;
                    case 'text/plain':
                    case 'text/html':
                        return ContentType.TEXT;
                    case 'application/octet-stream':
                        return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
                    default:
                        return this.detectContentTypeFromBody();
                }
            }
        }, {
            key: 'detectContentTypeFromBody',
            value: function detectContentTypeFromBody() {
                if (this._body == null) {
                    return ContentType.NONE;
                } else if (this._body instanceof URLSearchParams) {
                    return ContentType.FORM;
                } else if (this._body instanceof FormData) {
                    return ContentType.FORM_DATA;
                } else if (this._body instanceof Blob$1) {
                    return ContentType.BLOB;
                } else if (this._body instanceof ArrayBuffer$1) {
                    return ContentType.ARRAY_BUFFER;
                } else if (this._body && _typeof(this._body) === 'object') {
                    return ContentType.JSON;
                } else {
                    return ContentType.TEXT;
                }
            }
        }, {
            key: 'getBody',
            value: function getBody() {
                switch (this.contentType) {
                    case ContentType.JSON:
                        return this.text();
                    case ContentType.FORM:
                        return this.text();
                    case ContentType.FORM_DATA:
                        return this._body;
                    case ContentType.TEXT:
                        return this.text();
                    case ContentType.BLOB:
                        return this.blob();
                    case ContentType.ARRAY_BUFFER:
                        return this.arrayBuffer();
                    default:
                        return null;
                }
            }
        }]);

        return Request;
    }(Body);

    var /** @type {?} */noop = function noop() {};
    var /** @type {?} */w = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' ? window : noop;
    var /** @type {?} */FormData = w[/** TODO #9100 */'FormData'] || noop;
    var /** @type {?} */Blob$1 = w[/** TODO #9100 */'Blob'] || noop;
    var /** @type {?} */ArrayBuffer$1 = w[/** TODO #9100 */'ArrayBuffer'] || noop;

    /**
     * @param {?} backend
     * @param {?} request
     * @return {?}
     */
    function httpRequest(backend, request) {
        return backend.createConnection(request).response;
    }
    /**
     * @param {?} defaultOpts
     * @param {?} providedOpts
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    function mergeOptions(defaultOpts, providedOpts, method, url) {
        var /** @type {?} */newOptions = defaultOpts;
        if (providedOpts) {
            // Hack so Dart can used named parameters
            return newOptions.merge(new RequestOptions({
                method: providedOpts.method || method,
                url: providedOpts.url || url,
                search: providedOpts.search,
                params: providedOpts.params,
                headers: providedOpts.headers,
                body: providedOpts.body,
                withCredentials: providedOpts.withCredentials,
                responseType: providedOpts.responseType
            }));
        }
        return newOptions.merge(new RequestOptions({ method: method, url: url }));
    }
    /**
     * Performs http requests using `XMLHttpRequest` as the default backend.
     *
     * `Http` is available as an injectable class, with methods to perform http requests. Calling
     * `request` returns an `Observable` which will emit a single {\@link Response} when a
     * response is received.
     *
     * ### Example
     *
     * ```typescript
     * import {Http, HTTP_PROVIDERS} from '\@angular/http';
     * import 'rxjs/add/operator/map'
     * \@Component({
     *   selector: 'http-app',
     *   viewProviders: [HTTP_PROVIDERS],
     *   templateUrl: 'people.html'
     * })
     * class PeopleComponent {
     *   constructor(http: Http) {
     *     http.get('people.json')
     *       // Call map on the response observable to get the parsed people object
     *       .map(res => res.json())
     *       // Subscribe to the observable to get the parsed people object and attach it to the
     *       // component
     *       .subscribe(people => this.people = people);
     *   }
     * }
     * ```
     *
     *
     * ### Example
     *
     * ```
     * http.get('people.json').subscribe((res:Response) => this.people = res.json());
     * ```
     *
     * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
     * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
     * the {\@link XHRBackend} provider, as in the following example:
     *
     * ### Example
     *
     * ```typescript
     * import {BaseRequestOptions, Http} from '\@angular/http';
     * import {MockBackend} from '\@angular/http/testing';
     * var injector = Injector.resolveAndCreate([
     *   BaseRequestOptions,
     *   MockBackend,
     *   {provide: Http, useFactory:
     *       function(backend, defaultOptions) {
     *         return new Http(backend, defaultOptions);
     *       },
     *       deps: [MockBackend, BaseRequestOptions]}
     * ]);
     * var http = injector.get(Http);
     * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
     * ```
     *
     * \@experimental
     */

    var Http = function () {
        /**
         * @param {?} _backend
         * @param {?} _defaultOptions
         */
        function Http(_backend, _defaultOptions) {
            _classCallCheck(this, Http);

            this._backend = _backend;
            this._defaultOptions = _defaultOptions;
        }
        /**
         * Performs any type of http request. First argument is required, and can either be a url or
         * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
         * object can be provided as the 2nd argument. The options object will be merged with the values
         * of {\@link BaseRequestOptions} before performing the request.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */


        _createClass(Http, [{
            key: 'request',
            value: function request(url, options) {
                var /** @type {?} */responseObservable = void 0;
                if (typeof url === 'string') {
                    responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */url)));
                } else if (url instanceof Request) {
                    responseObservable = httpRequest(this._backend, url);
                } else {
                    throw new Error('First argument must be a url string or Request instance.');
                }
                return responseObservable;
            }
        }, {
            key: 'get',
            value: function get(url, options) {
                return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
            }
        }, {
            key: 'post',
            value: function post(url, body, options) {
                return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
            }
        }, {
            key: 'put',
            value: function put(url, body, options) {
                return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
            }
        }, {
            key: 'delete',
            value: function _delete(url, options) {
                return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
            }
        }, {
            key: 'patch',
            value: function patch(url, body, options) {
                return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
            }
        }, {
            key: 'head',
            value: function head(url, options) {
                return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
            }
        }, {
            key: 'options',
            value: function options(url, _options) {
                return this.request(new Request(mergeOptions(this._defaultOptions, _options, RequestMethod.Options, url)));
            }
        }]);

        return Http;
    }();

    Http.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    Http.ctorParameters = function () {
        return [{ type: ConnectionBackend }, { type: RequestOptions }];
    };
    /**
     * \@experimental
     */

    var Jsonp = function (_Http) {
        _inherits(Jsonp, _Http);

        /**
         * @param {?} backend
         * @param {?} defaultOptions
         */
        function Jsonp(backend, defaultOptions) {
            _classCallCheck(this, Jsonp);

            return _possibleConstructorReturn(this, (Jsonp.__proto__ || Object.getPrototypeOf(Jsonp)).call(this, backend, defaultOptions));
        }
        /**
         * Performs any type of http request. First argument is required, and can either be a url or
         * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
         * object can be provided as the 2nd argument. The options object will be merged with the values
         * of {\@link BaseRequestOptions} before performing the request.
         *
         * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
         * supported by all current browsers. Because JSONP creates a `<script>` element with
         * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
         * source could expose your application to XSS risks. Data exposed by JSONP may also be
         * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
         * future security issues (e.g. content sniffing).  For more detail, see the
         * [Security Guide](http://g.co/ng/security).
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */


        _createClass(Jsonp, [{
            key: 'request',
            value: function request(url, options) {
                var /** @type {?} */responseObservable = void 0;
                if (typeof url === 'string') {
                    url = new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */url));
                }
                if (url instanceof Request) {
                    if (url.method !== RequestMethod.Get) {
                        throw new Error('JSONP requests must use GET request method.');
                    }
                    responseObservable = httpRequest(this._backend, url);
                } else {
                    throw new Error('First argument must be a url string or Request instance.');
                }
                return responseObservable;
            }
        }]);

        return Jsonp;
    }(Http);

    Jsonp.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    Jsonp.ctorParameters = function () {
        return [{ type: ConnectionBackend }, { type: RequestOptions }];
    };

    /**
     * @return {?}
     */
    function _createDefaultCookieXSRFStrategy() {
        return new CookieXSRFStrategy();
    }
    /**
     * @param {?} xhrBackend
     * @param {?} requestOptions
     * @return {?}
     */
    function httpFactory(xhrBackend, requestOptions) {
        return new Http(xhrBackend, requestOptions);
    }
    /**
     * @param {?} jsonpBackend
     * @param {?} requestOptions
     * @return {?}
     */
    function jsonpFactory(jsonpBackend, requestOptions) {
        return new Jsonp(jsonpBackend, requestOptions);
    }
    /**
     * The module that includes http's providers
     *
     * \@experimental
     */

    var HttpModule = function HttpModule() {
        _classCallCheck(this, HttpModule);
    };

    HttpModule.decorators = [{ type: _core.NgModule, args: [{
            providers: [
            // TODO(pascal): use factory type annotations once supported in DI
            // issue: https://github.com/angular/angular/issues/3183
            { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] }, BrowserXhr, { provide: RequestOptions, useClass: BaseRequestOptions }, { provide: ResponseOptions, useClass: BaseResponseOptions }, XHRBackend, { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy }]
        }] }];
    /** @nocollapse */
    HttpModule.ctorParameters = function () {
        return [];
    };
    /**
     * The module that includes jsonp's providers
     *
     * \@experimental
     */

    var JsonpModule = function JsonpModule() {
        _classCallCheck(this, JsonpModule);
    };

    JsonpModule.decorators = [{ type: _core.NgModule, args: [{
            providers: [
            // TODO(pascal): use factory type annotations once supported in DI
            // issue: https://github.com/angular/angular/issues/3183
            { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] }, BrowserJsonp, { provide: RequestOptions, useClass: BaseRequestOptions }, { provide: ResponseOptions, useClass: BaseResponseOptions }, { provide: JSONPBackend, useClass: JSONPBackend_ }]
        }] }];
    /** @nocollapse */
    JsonpModule.ctorParameters = function () {
        return [];
    };

    /**
     * @stable
     */
    var /** @type {?} */VERSION = new _core.Version('4.0.0-rc.1');

    exports.BrowserXhr = BrowserXhr;
    exports.JSONPBackend = JSONPBackend;
    exports.JSONPConnection = JSONPConnection;
    exports.CookieXSRFStrategy = CookieXSRFStrategy;
    exports.XHRBackend = XHRBackend;
    exports.XHRConnection = XHRConnection;
    exports.BaseRequestOptions = BaseRequestOptions;
    exports.RequestOptions = RequestOptions;
    exports.BaseResponseOptions = BaseResponseOptions;
    exports.ResponseOptions = ResponseOptions;
    exports.ReadyState = ReadyState;
    exports.RequestMethod = RequestMethod;
    exports.ResponseContentType = ResponseContentType;
    exports.ResponseType = ResponseType;
    exports.Headers = Headers;
    exports.Http = Http;
    exports.Jsonp = Jsonp;
    exports.HttpModule = HttpModule;
    exports.JsonpModule = JsonpModule;
    exports.Connection = Connection;
    exports.ConnectionBackend = ConnectionBackend;
    exports.XSRFStrategy = XSRFStrategy;
    exports.Request = Request;
    exports.Response = Response;
    exports.QueryEncoder = QueryEncoder;
    exports.URLSearchParams = URLSearchParams;
    exports.VERSION = VERSION;
    exports.ɵg = BrowserJsonp;
    exports.ɵa = JSONPBackend_;
    exports.ɵe = Body;
    exports.ɵb = _createDefaultCookieXSRFStrategy;
    exports.ɵc = httpFactory;
    exports.ɵd = jsonpFactory;
});
