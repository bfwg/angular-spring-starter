(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/platform-browser', ['exports', '@angular/common', '@angular/core'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/common'), require('@angular/core'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.common, global.ng.core);
        global.ng = global.ng || {};
        global.ng.platformBrowser = mod.exports;
    }
})(this, function (exports, _common, _core) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ɵf = exports.ɵe = exports.ɵd = exports.ɵg = exports.ɵh = exports.ɵi = exports.ɵa = exports.ɵc = exports.ɵb = exports.ɵWebAnimationsDriver = exports.ɵSharedStylesHost = exports.ɵDomSharedStylesHost = exports.ɵKeyEventsPlugin = exports.ɵHammerGesturesPlugin = exports.ɵDomEventsPlugin = exports.ɵsplitNamespace = exports.ɵshimHostAttribute = exports.ɵshimContentAttribute = exports.ɵisNamespaced = exports.ɵflattenStyles = exports.ɵNAMESPACE_URIS = exports.ɵDomRootRenderer_ = exports.ɵDomRootRenderer = exports.ɵDomRendererFactoryV2 = exports.ɵsetRootDomAdapter = exports.ɵgetDOM = exports.ɵDomAdapter = exports.ɵELEMENT_PROBE_PROVIDERS = exports.ɵBrowserGetTestability = exports.ɵTRANSITION_ID = exports.ɵBrowserPlatformLocation = exports.ɵBrowserDomAdapter = exports.ɵinitDomAdapter = exports.ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS = exports.ɵBROWSER_SANITIZATION_PROVIDERS = exports.VERSION = exports.DomSanitizer = exports.HammerGestureConfig = exports.HAMMER_GESTURE_CONFIG = exports.EventManager = exports.EVENT_MANAGER_PLUGINS = exports.DOCUMENT = exports.NgProbeToken = exports.By = exports.AnimationDriver = exports.enableDebugTools = exports.disableDebugTools = exports.Title = exports.Meta = exports.platformBrowser = exports.BrowserModule = undefined;

    var core = _interopRequireWildcard(_core);

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
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

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

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

    var NoOpAnimationDriver = function () {
        function NoOpAnimationDriver() {
            _classCallCheck(this, NoOpAnimationDriver);
        }

        _createClass(NoOpAnimationDriver, [{
            key: 'animate',
            value: function animate(element, startingStyles, keyframes, duration, delay, easing) {
                var previousPlayers = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

                return new _core.ɵNoOpAnimationPlayer();
            }
        }]);

        return NoOpAnimationDriver;
    }();

    var AnimationDriver = function () {
        function AnimationDriver() {
            _classCallCheck(this, AnimationDriver);
        }

        _createClass(AnimationDriver, [{
            key: 'animate',
            value: function animate(element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {}
        }]);

        return AnimationDriver;
    }();

    AnimationDriver.NOOP = new NoOpAnimationDriver();

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
    var /** @type {?} */global$1 = globalScope;
    // TODO: remove calls to assert in production environment
    // Note: Can't just export this and import in in other files
    // as `assert` is a reserved keyword in Dart
    global$1.assert = function assert(condition) {
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
    /**
     * @param {?} global
     * @param {?} path
     * @param {?} value
     * @return {?}
     */
    function setValueOnPath(global, path, value) {
        var /** @type {?} */parts = path.split('.');
        var /** @type {?} */obj = global;
        while (parts.length > 1) {
            var /** @type {?} */name = parts.shift();
            if (obj.hasOwnProperty(name) && obj[name] != null) {
                obj = obj[name];
            } else {
                obj = obj[name] = {};
            }
        }
        if (obj === undefined || obj === null) {
            obj = {};
        }
        obj[parts.shift()] = value;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var /** @type {?} */_DOM = null;
    /**
     * @return {?}
     */
    function getDOM() {
        return _DOM;
    }
    /**
     * @param {?} adapter
     * @return {?}
     */
    function setRootDomAdapter(adapter) {
        if (!_DOM) {
            _DOM = adapter;
        }
    }
    /**
     * Provides DOM operations in an environment-agnostic way.
     *
     * \@security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     * @abstract
     */

    var DomAdapter = function () {
        function DomAdapter() {
            _classCallCheck(this, DomAdapter);

            this.resourceLoaderType = null;
        }
        /**
         * @abstract
         * @param {?} element
         * @param {?} name
         * @return {?}
         */


        _createClass(DomAdapter, [{
            key: 'hasProperty',
            value: function hasProperty(element, name) {}
        }, {
            key: 'setProperty',
            value: function setProperty(el, name, value) {}
        }, {
            key: 'getProperty',
            value: function getProperty(el, name) {}
        }, {
            key: 'invoke',
            value: function invoke(el, methodName, args) {}
        }, {
            key: 'logError',
            value: function logError(error) {}
        }, {
            key: 'log',
            value: function log(error) {}
        }, {
            key: 'logGroup',
            value: function logGroup(error) {}
        }, {
            key: 'logGroupEnd',
            value: function logGroupEnd() {}
        }, {
            key: 'parse',
            value: function parse(templateHtml) {}
        }, {
            key: 'querySelector',
            value: function querySelector(el, selector) {}
        }, {
            key: 'querySelectorAll',
            value: function querySelectorAll(el, selector) {}
        }, {
            key: 'on',
            value: function on(el, evt, listener) {}
        }, {
            key: 'onAndCancel',
            value: function onAndCancel(el, evt, listener) {}
        }, {
            key: 'dispatchEvent',
            value: function dispatchEvent(el, evt) {}
        }, {
            key: 'createMouseEvent',
            value: function createMouseEvent(eventType) {}
        }, {
            key: 'createEvent',
            value: function createEvent(eventType) {}
        }, {
            key: 'preventDefault',
            value: function preventDefault(evt) {}
        }, {
            key: 'isPrevented',
            value: function isPrevented(evt) {}
        }, {
            key: 'getInnerHTML',
            value: function getInnerHTML(el) {}
        }, {
            key: 'getTemplateContent',
            value: function getTemplateContent(el) {}
        }, {
            key: 'getOuterHTML',
            value: function getOuterHTML(el) {}
        }, {
            key: 'nodeName',
            value: function nodeName(node) {}
        }, {
            key: 'nodeValue',
            value: function nodeValue(node) {}
        }, {
            key: 'type',
            value: function type(node) {}
        }, {
            key: 'content',
            value: function content(node) {}
        }, {
            key: 'firstChild',
            value: function firstChild(el) {}
        }, {
            key: 'nextSibling',
            value: function nextSibling(el) {}
        }, {
            key: 'parentElement',
            value: function parentElement(el) {}
        }, {
            key: 'childNodes',
            value: function childNodes(el) {}
        }, {
            key: 'childNodesAsList',
            value: function childNodesAsList(el) {}
        }, {
            key: 'clearNodes',
            value: function clearNodes(el) {}
        }, {
            key: 'appendChild',
            value: function appendChild(el, node) {}
        }, {
            key: 'removeChild',
            value: function removeChild(el, node) {}
        }, {
            key: 'replaceChild',
            value: function replaceChild(el, newNode, oldNode) {}
        }, {
            key: 'remove',
            value: function remove(el) {}
        }, {
            key: 'insertBefore',
            value: function insertBefore(parent, ref, node) {}
        }, {
            key: 'insertAllBefore',
            value: function insertAllBefore(parent, ref, nodes) {}
        }, {
            key: 'insertAfter',
            value: function insertAfter(parent, el, node) {}
        }, {
            key: 'setInnerHTML',
            value: function setInnerHTML(el, value) {}
        }, {
            key: 'getText',
            value: function getText(el) {}
        }, {
            key: 'setText',
            value: function setText(el, value) {}
        }, {
            key: 'getValue',
            value: function getValue(el) {}
        }, {
            key: 'setValue',
            value: function setValue(el, value) {}
        }, {
            key: 'getChecked',
            value: function getChecked(el) {}
        }, {
            key: 'setChecked',
            value: function setChecked(el, value) {}
        }, {
            key: 'createComment',
            value: function createComment(text) {}
        }, {
            key: 'createTemplate',
            value: function createTemplate(html) {}
        }, {
            key: 'createElement',
            value: function createElement(tagName, doc) {}
        }, {
            key: 'createElementNS',
            value: function createElementNS(ns, tagName, doc) {}
        }, {
            key: 'createTextNode',
            value: function createTextNode(text, doc) {}
        }, {
            key: 'createScriptTag',
            value: function createScriptTag(attrName, attrValue, doc) {}
        }, {
            key: 'createStyleElement',
            value: function createStyleElement(css, doc) {}
        }, {
            key: 'createShadowRoot',
            value: function createShadowRoot(el) {}
        }, {
            key: 'getShadowRoot',
            value: function getShadowRoot(el) {}
        }, {
            key: 'getHost',
            value: function getHost(el) {}
        }, {
            key: 'getDistributedNodes',
            value: function getDistributedNodes(el) {}
        }, {
            key: 'clone',
            value: function clone( /*<T extends Node>*/node) {}
        }, {
            key: 'getElementsByClassName',
            value: function getElementsByClassName(element, name) {}
        }, {
            key: 'getElementsByTagName',
            value: function getElementsByTagName(element, name) {}
        }, {
            key: 'classList',
            value: function classList(element) {}
        }, {
            key: 'addClass',
            value: function addClass(element, className) {}
        }, {
            key: 'removeClass',
            value: function removeClass(element, className) {}
        }, {
            key: 'hasClass',
            value: function hasClass(element, className) {}
        }, {
            key: 'setStyle',
            value: function setStyle(element, styleName, styleValue) {}
        }, {
            key: 'removeStyle',
            value: function removeStyle(element, styleName) {}
        }, {
            key: 'getStyle',
            value: function getStyle(element, styleName) {}
        }, {
            key: 'hasStyle',
            value: function hasStyle(element, styleName, styleValue) {}
        }, {
            key: 'tagName',
            value: function tagName(element) {}
        }, {
            key: 'attributeMap',
            value: function attributeMap(element) {}
        }, {
            key: 'hasAttribute',
            value: function hasAttribute(element, attribute) {}
        }, {
            key: 'hasAttributeNS',
            value: function hasAttributeNS(element, ns, attribute) {}
        }, {
            key: 'getAttribute',
            value: function getAttribute(element, attribute) {}
        }, {
            key: 'getAttributeNS',
            value: function getAttributeNS(element, ns, attribute) {}
        }, {
            key: 'setAttribute',
            value: function setAttribute(element, name, value) {}
        }, {
            key: 'setAttributeNS',
            value: function setAttributeNS(element, ns, name, value) {}
        }, {
            key: 'removeAttribute',
            value: function removeAttribute(element, attribute) {}
        }, {
            key: 'removeAttributeNS',
            value: function removeAttributeNS(element, ns, attribute) {}
        }, {
            key: 'templateAwareRoot',
            value: function templateAwareRoot(el) {}
        }, {
            key: 'createHtmlDocument',
            value: function createHtmlDocument() {}
        }, {
            key: 'getBoundingClientRect',
            value: function getBoundingClientRect(el) {}
        }, {
            key: 'getTitle',
            value: function getTitle(doc) {}
        }, {
            key: 'setTitle',
            value: function setTitle(doc, newTitle) {}
        }, {
            key: 'elementMatches',
            value: function elementMatches(n, selector) {}
        }, {
            key: 'isTemplateElement',
            value: function isTemplateElement(el) {}
        }, {
            key: 'isTextNode',
            value: function isTextNode(node) {}
        }, {
            key: 'isCommentNode',
            value: function isCommentNode(node) {}
        }, {
            key: 'isElementNode',
            value: function isElementNode(node) {}
        }, {
            key: 'hasShadowRoot',
            value: function hasShadowRoot(node) {}
        }, {
            key: 'isShadowRoot',
            value: function isShadowRoot(node) {}
        }, {
            key: 'importIntoDoc',
            value: function importIntoDoc( /*<T extends Node>*/node) {}
        }, {
            key: 'adoptNode',
            value: function adoptNode( /*<T extends Node>*/node) {}
        }, {
            key: 'getHref',
            value: function getHref(element) {}
        }, {
            key: 'getEventKey',
            value: function getEventKey(event) {}
        }, {
            key: 'resolveAndSetHref',
            value: function resolveAndSetHref(element, baseUrl, href) {}
        }, {
            key: 'supportsDOMEvents',
            value: function supportsDOMEvents() {}
        }, {
            key: 'supportsNativeShadowDOM',
            value: function supportsNativeShadowDOM() {}
        }, {
            key: 'getGlobalEventTarget',
            value: function getGlobalEventTarget(doc, target) {}
        }, {
            key: 'getHistory',
            value: function getHistory() {}
        }, {
            key: 'getLocation',
            value: function getLocation() {}
        }, {
            key: 'getBaseHref',
            value: function getBaseHref(doc) {}
        }, {
            key: 'resetBaseElement',
            value: function resetBaseElement() {}
        }, {
            key: 'getUserAgent',
            value: function getUserAgent() {}
        }, {
            key: 'setData',
            value: function setData(element, name, value) {}
        }, {
            key: 'getComputedStyle',
            value: function getComputedStyle(element) {}
        }, {
            key: 'getData',
            value: function getData(element, name) {}
        }, {
            key: 'setGlobalVar',
            value: function setGlobalVar(name, value) {}
        }, {
            key: 'supportsWebAnimation',
            value: function supportsWebAnimation() {}
        }, {
            key: 'performanceNow',
            value: function performanceNow() {}
        }, {
            key: 'getAnimationPrefix',
            value: function getAnimationPrefix() {}
        }, {
            key: 'getTransitionEnd',
            value: function getTransitionEnd() {}
        }, {
            key: 'supportsAnimation',
            value: function supportsAnimation() {}
        }, {
            key: 'supportsCookies',
            value: function supportsCookies() {}
        }, {
            key: 'getCookie',
            value: function getCookie(name) {}
        }, {
            key: 'setCookie',
            value: function setCookie(name, value) {}
        }, {
            key: 'attrToPropMap',
            get: function get() {
                return this._attrToPropMap;
            },
            set: function set(value) {
                this._attrToPropMap = value;
            }
        }]);

        return DomAdapter;
    }();

    var WebAnimationsPlayer = function () {
        /**
         * @param {?} element
         * @param {?} keyframes
         * @param {?} options
         * @param {?=} previousPlayers
         */
        function WebAnimationsPlayer(element, keyframes, options) {
            var _this = this;

            var previousPlayers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

            _classCallCheck(this, WebAnimationsPlayer);

            this.element = element;
            this.keyframes = keyframes;
            this.options = options;
            this._onDoneFns = [];
            this._onStartFns = [];
            this._onDestroyFns = [];
            this._initialized = false;
            this._finished = false;
            this._started = false;
            this._destroyed = false;
            this.parentPlayer = null;
            this._duration = options['duration'];
            this.previousStyles = {};
            previousPlayers.forEach(function (player) {
                var styles = player._captureStyles();
                Object.keys(styles).forEach(function (prop) {
                    return _this.previousStyles[prop] = styles[prop];
                });
            });
        }
        /**
         * @return {?}
         */


        _createClass(WebAnimationsPlayer, [{
            key: '_onFinish',
            value: function _onFinish() {
                if (!this._finished) {
                    this._finished = true;
                    this._onDoneFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onDoneFns = [];
                }
            }
        }, {
            key: 'init',
            value: function init() {
                var _this2 = this;

                if (this._initialized) return;
                this._initialized = true;
                var /** @type {?} */keyframes = this.keyframes.map(function (styles) {
                    var /** @type {?} */formattedKeyframe = {};
                    Object.keys(styles).forEach(function (prop, index) {
                        var /** @type {?} */value = styles[prop];
                        if (value == _core.AUTO_STYLE) {
                            value = _computeStyle(_this2.element, prop);
                        }
                        if (value != undefined) {
                            formattedKeyframe[prop] = value;
                        }
                    });
                    return formattedKeyframe;
                });
                var /** @type {?} */previousStyleProps = Object.keys(this.previousStyles);
                if (previousStyleProps.length) {
                    var /** @type {?} */startingKeyframe = keyframes[0];
                    var /** @type {?} */missingStyleProps = [];
                    previousStyleProps.forEach(function (prop) {
                        if (!isPresent(startingKeyframe[prop])) {
                            missingStyleProps.push(prop);
                        }
                        startingKeyframe[prop] = _this2.previousStyles[prop];
                    });
                    if (missingStyleProps.length) {
                        var i;

                        (function () {
                            var /** @type {?} */self = _this2;
                            // tslint:disable-next-line

                            var _loop = function _loop() {
                                var /** @type {?} */kf = keyframes[i];
                                // tslint:disable-next-line
                                missingStyleProps.forEach(function (prop) {
                                    kf[prop] = _computeStyle(self.element, prop);
                                });
                            };

                            for ( /** @type {?} */i = 1; i < keyframes.length; i++) {
                                _loop();
                            }
                        })();
                    }
                }
                this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
                this._finalKeyframe = _copyKeyframeStyles(keyframes[keyframes.length - 1]);
                // this is required so that the player doesn't start to animate right away
                this._resetDomPlayerState();
                this._player.addEventListener('finish', function () {
                    return _this2._onFinish();
                });
            }
        }, {
            key: '_triggerWebAnimation',
            value: function _triggerWebAnimation(element, keyframes, options) {
                // jscompiler doesn't seem to know animate is a native property because it's not fully
                // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
                return element['animate'](keyframes, options);
            }
        }, {
            key: 'onStart',
            value: function onStart(fn) {
                this._onStartFns.push(fn);
            }
        }, {
            key: 'onDone',
            value: function onDone(fn) {
                this._onDoneFns.push(fn);
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy(fn) {
                this._onDestroyFns.push(fn);
            }
        }, {
            key: 'play',
            value: function play() {
                this.init();
                if (!this.hasStarted()) {
                    this._onStartFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onStartFns = [];
                    this._started = true;
                }
                this._player.play();
            }
        }, {
            key: 'pause',
            value: function pause() {
                this.init();
                this._player.pause();
            }
        }, {
            key: 'finish',
            value: function finish() {
                this.init();
                this._onFinish();
                this._player.finish();
            }
        }, {
            key: 'reset',
            value: function reset() {
                this._resetDomPlayerState();
                this._destroyed = false;
                this._finished = false;
                this._started = false;
            }
        }, {
            key: '_resetDomPlayerState',
            value: function _resetDomPlayerState() {
                if (this._player) {
                    this._player.cancel();
                }
            }
        }, {
            key: 'restart',
            value: function restart() {
                this.reset();
                this.play();
            }
        }, {
            key: 'hasStarted',
            value: function hasStarted() {
                return this._started;
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (!this._destroyed) {
                    this._resetDomPlayerState();
                    this._onFinish();
                    this._destroyed = true;
                    this._onDestroyFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onDestroyFns = [];
                }
            }
        }, {
            key: 'setPosition',
            value: function setPosition(p) {
                this._player.currentTime = p * this.totalTime;
            }
        }, {
            key: 'getPosition',
            value: function getPosition() {
                return this._player.currentTime / this.totalTime;
            }
        }, {
            key: '_captureStyles',
            value: function _captureStyles() {
                var _this3 = this;

                var /** @type {?} */styles = {};
                if (this.hasStarted()) {
                    Object.keys(this._finalKeyframe).forEach(function (prop) {
                        if (prop != 'offset') {
                            styles[prop] = _this3._finished ? _this3._finalKeyframe[prop] : _computeStyle(_this3.element, prop);
                        }
                    });
                }
                return styles;
            }
        }, {
            key: 'domPlayer',
            get: function get() {
                return this._player;
            }
        }, {
            key: 'totalTime',
            get: function get() {
                return this._duration;
            }
        }]);

        return WebAnimationsPlayer;
    }();

    /**
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    function _computeStyle(element, prop) {
        return getDOM().getComputedStyle(element)[prop];
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    function _copyKeyframeStyles(styles) {
        var /** @type {?} */newStyles = {};
        Object.keys(styles).forEach(function (prop) {
            if (prop != 'offset') {
                newStyles[prop] = styles[prop];
            }
        });
        return newStyles;
    }

    var WebAnimationsDriver = function () {
        function WebAnimationsDriver() {
            _classCallCheck(this, WebAnimationsDriver);
        }

        _createClass(WebAnimationsDriver, [{
            key: 'animate',
            value: function animate(element, startingStyles, keyframes, duration, delay, easing) {
                var previousPlayers = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

                var /** @type {?} */formattedSteps = [];
                var /** @type {?} */startingStyleLookup = {};
                if (isPresent(startingStyles)) {
                    startingStyleLookup = _populateStyles(startingStyles, {});
                }
                keyframes.forEach(function (keyframe) {
                    var /** @type {?} */data = _populateStyles(keyframe.styles, startingStyleLookup);
                    data['offset'] = Math.max(0, Math.min(1, keyframe.offset));
                    formattedSteps.push(data);
                });
                // Styling passed into element.animate() must always be balanced.
                // The special cases below can occur if only style() calls exist
                // within an animation or when a style() calls are used prior
                // to a group() animation being issued or if the renderer is
                // invoked by the user directly.
                if (formattedSteps.length == 0) {
                    formattedSteps = [startingStyleLookup, startingStyleLookup];
                } else if (formattedSteps.length == 1) {
                    var /** @type {?} */start = startingStyleLookup;
                    var /** @type {?} */end = formattedSteps[0];
                    end['offset'] = null;
                    formattedSteps = [start, end];
                }
                var /** @type {?} */playerOptions = {
                    'duration': duration,
                    'delay': delay,
                    'fill': 'both' // we use `both` because it allows for styling at 0% to work with `delay`
                };
                // we check for this to avoid having a null|undefined value be present
                // for the easing (which results in an error for certain browsers #9752)
                if (easing) {
                    playerOptions['easing'] = easing;
                }
                // there may be a chance a NoOp player is returned depending
                // on when the previous animation was cancelled
                previousPlayers = previousPlayers.filter(filterWebAnimationPlayerFn);
                return new WebAnimationsPlayer(element, formattedSteps, playerOptions, /** @type {?} */previousPlayers);
            }
        }]);

        return WebAnimationsDriver;
    }();

    /**
     * @param {?} styles
     * @param {?} defaultStyles
     * @return {?}
     */
    function _populateStyles(styles, defaultStyles) {
        var /** @type {?} */data = {};
        styles.styles.forEach(function (entry) {
            Object.keys(entry).forEach(function (prop) {
                data[prop] = entry[prop];
            });
        });
        Object.keys(defaultStyles).forEach(function (prop) {
            if (!isPresent(data[prop])) {
                data[prop] = defaultStyles[prop];
            }
        });
        return data;
    }
    /**
     * @param {?} player
     * @return {?}
     */
    function filterWebAnimationPlayerFn(player) {
        return player instanceof WebAnimationsPlayer;
    }

    /**
     * Provides DOM operations in any browser environment.
     *
     * \@security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     * @abstract
     */

    var GenericBrowserDomAdapter = function (_DomAdapter) {
        _inherits(GenericBrowserDomAdapter, _DomAdapter);

        function GenericBrowserDomAdapter() {
            _classCallCheck(this, GenericBrowserDomAdapter);

            var _this4 = _possibleConstructorReturn(this, (GenericBrowserDomAdapter.__proto__ || Object.getPrototypeOf(GenericBrowserDomAdapter)).call(this));

            _this4._animationPrefix = null;
            _this4._transitionEnd = null;
            try {
                var element = _this4.createElement('div', document);
                if (isPresent(_this4.getStyle(element, 'animationName'))) {
                    _this4._animationPrefix = '';
                } else {
                    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                    for (var i = 0; i < domPrefixes.length; i++) {
                        if (isPresent(_this4.getStyle(element, domPrefixes[i] + 'AnimationName'))) {
                            _this4._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                            break;
                        }
                    }
                }
                var transEndEventNames = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                };
                Object.keys(transEndEventNames).forEach(function (key) {
                    if (isPresent(_this4.getStyle(element, key))) {
                        _this4._transitionEnd = transEndEventNames[key];
                    }
                });
            } catch (e) {
                _this4._animationPrefix = null;
                _this4._transitionEnd = null;
            }
            return _this4;
        }
        /**
         * @param {?} el
         * @return {?}
         */


        _createClass(GenericBrowserDomAdapter, [{
            key: 'getDistributedNodes',
            value: function getDistributedNodes(el) {
                return el.getDistributedNodes();
            }
        }, {
            key: 'resolveAndSetHref',
            value: function resolveAndSetHref(el, baseUrl, href) {
                el.href = href == null ? baseUrl : baseUrl + '/../' + href;
            }
        }, {
            key: 'supportsDOMEvents',
            value: function supportsDOMEvents() {
                return true;
            }
        }, {
            key: 'supportsNativeShadowDOM',
            value: function supportsNativeShadowDOM() {
                return typeof document.body.createShadowRoot === 'function';
            }
        }, {
            key: 'getAnimationPrefix',
            value: function getAnimationPrefix() {
                return this._animationPrefix ? this._animationPrefix : '';
            }
        }, {
            key: 'getTransitionEnd',
            value: function getTransitionEnd() {
                return this._transitionEnd ? this._transitionEnd : '';
            }
        }, {
            key: 'supportsAnimation',
            value: function supportsAnimation() {
                return isPresent(this._animationPrefix) && isPresent(this._transitionEnd);
            }
        }]);

        return GenericBrowserDomAdapter;
    }(DomAdapter);

    var /** @type {?} */_attrToPropMap = {
        'class': 'className',
        'innerHtml': 'innerHTML',
        'readonly': 'readOnly',
        'tabindex': 'tabIndex'
    };
    var /** @type {?} */DOM_KEY_LOCATION_NUMPAD = 3;
    // Map to convert some key or keyIdentifier values to what will be returned by getEventKey
    var /** @type {?} */_keyMap = {
        // The following values are here for cross-browser compatibility and to match the W3C standard
        // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
        '\b': 'Backspace',
        '\t': 'Tab',
        '\x7F': 'Delete',
        '\x1B': 'Escape',
        'Del': 'Delete',
        'Esc': 'Escape',
        'Left': 'ArrowLeft',
        'Right': 'ArrowRight',
        'Up': 'ArrowUp',
        'Down': 'ArrowDown',
        'Menu': 'ContextMenu',
        'Scroll': 'ScrollLock',
        'Win': 'OS'
    };
    // There is a bug in Chrome for numeric keypad keys:
    // https://code.google.com/p/chromium/issues/detail?id=155654
    // 1, 2, 3 ... are reported as A, B, C ...
    var /** @type {?} */_chromeNumKeyPadMap = {
        'A': '1',
        'B': '2',
        'C': '3',
        'D': '4',
        'E': '5',
        'F': '6',
        'G': '7',
        'H': '8',
        'I': '9',
        'J': '*',
        'K': '+',
        'M': '-',
        'N': '.',
        'O': '/',
        '\x60': '0',
        '\x90': 'NumLock'
    };

    var BrowserDomAdapter = function (_GenericBrowserDomAda) {
        _inherits(BrowserDomAdapter, _GenericBrowserDomAda);

        function BrowserDomAdapter() {
            _classCallCheck(this, BrowserDomAdapter);

            return _possibleConstructorReturn(this, (BrowserDomAdapter.__proto__ || Object.getPrototypeOf(BrowserDomAdapter)).apply(this, arguments));
        }

        _createClass(BrowserDomAdapter, [{
            key: 'parse',
            value: function parse(templateHtml) {
                throw new Error('parse not implemented');
            }
        }, {
            key: 'hasProperty',
            value: function hasProperty(element, name) {
                return name in element;
            }
        }, {
            key: 'setProperty',
            value: function setProperty(el, name, value) {
                el[name] = value;
            }
        }, {
            key: 'getProperty',
            value: function getProperty(el, name) {
                return el[name];
            }
        }, {
            key: 'invoke',
            value: function invoke(el, methodName, args) {
                el[methodName].apply(el, _toConsumableArray(args));
            }
        }, {
            key: 'logError',
            value: function logError(error) {
                if (window.console) {
                    if (console.error) {
                        console.error(error);
                    } else {
                        console.log(error);
                    }
                }
            }
        }, {
            key: 'log',
            value: function log(error) {
                if (window.console) {
                    window.console.log && window.console.log(error);
                }
            }
        }, {
            key: 'logGroup',
            value: function logGroup(error) {
                if (window.console) {
                    window.console.group && window.console.group(error);
                }
            }
        }, {
            key: 'logGroupEnd',
            value: function logGroupEnd() {
                if (window.console) {
                    window.console.groupEnd && window.console.groupEnd();
                }
            }
        }, {
            key: 'querySelector',
            value: function querySelector(el, selector) {
                return el.querySelector(selector);
            }
        }, {
            key: 'querySelectorAll',
            value: function querySelectorAll(el, selector) {
                return el.querySelectorAll(selector);
            }
        }, {
            key: 'on',
            value: function on(el, evt, listener) {
                el.addEventListener(evt, listener, false);
            }
        }, {
            key: 'onAndCancel',
            value: function onAndCancel(el, evt, listener) {
                el.addEventListener(evt, listener, false);
                // Needed to follow Dart's subscription semantic, until fix of
                // https://code.google.com/p/dart/issues/detail?id=17406
                return function () {
                    el.removeEventListener(evt, listener, false);
                };
            }
        }, {
            key: 'dispatchEvent',
            value: function dispatchEvent(el, evt) {
                el.dispatchEvent(evt);
            }
        }, {
            key: 'createMouseEvent',
            value: function createMouseEvent(eventType) {
                var /** @type {?} */evt = document.createEvent('MouseEvent');
                evt.initEvent(eventType, true, true);
                return evt;
            }
        }, {
            key: 'createEvent',
            value: function createEvent(eventType) {
                var /** @type {?} */evt = document.createEvent('Event');
                evt.initEvent(eventType, true, true);
                return evt;
            }
        }, {
            key: 'preventDefault',
            value: function preventDefault(evt) {
                evt.preventDefault();
                evt.returnValue = false;
            }
        }, {
            key: 'isPrevented',
            value: function isPrevented(evt) {
                return evt.defaultPrevented || isPresent(evt.returnValue) && !evt.returnValue;
            }
        }, {
            key: 'getInnerHTML',
            value: function getInnerHTML(el) {
                return el.innerHTML;
            }
        }, {
            key: 'getTemplateContent',
            value: function getTemplateContent(el) {
                return 'content' in el && el instanceof HTMLTemplateElement ? el.content : null;
            }
        }, {
            key: 'getOuterHTML',
            value: function getOuterHTML(el) {
                return el.outerHTML;
            }
        }, {
            key: 'nodeName',
            value: function nodeName(node) {
                return node.nodeName;
            }
        }, {
            key: 'nodeValue',
            value: function nodeValue(node) {
                return node.nodeValue;
            }
        }, {
            key: 'type',
            value: function type(node) {
                return node.type;
            }
        }, {
            key: 'content',
            value: function content(node) {
                if (this.hasProperty(node, 'content')) {
                    return node.content;
                } else {
                    return node;
                }
            }
        }, {
            key: 'firstChild',
            value: function firstChild(el) {
                return el.firstChild;
            }
        }, {
            key: 'nextSibling',
            value: function nextSibling(el) {
                return el.nextSibling;
            }
        }, {
            key: 'parentElement',
            value: function parentElement(el) {
                return el.parentNode;
            }
        }, {
            key: 'childNodes',
            value: function childNodes(el) {
                return el.childNodes;
            }
        }, {
            key: 'childNodesAsList',
            value: function childNodesAsList(el) {
                var /** @type {?} */childNodes = el.childNodes;
                var /** @type {?} */res = new Array(childNodes.length);
                for (var /** @type {?} */i = 0; i < childNodes.length; i++) {
                    res[i] = childNodes[i];
                }
                return res;
            }
        }, {
            key: 'clearNodes',
            value: function clearNodes(el) {
                while (el.firstChild) {
                    el.removeChild(el.firstChild);
                }
            }
        }, {
            key: 'appendChild',
            value: function appendChild(el, node) {
                el.appendChild(node);
            }
        }, {
            key: 'removeChild',
            value: function removeChild(el, node) {
                el.removeChild(node);
            }
        }, {
            key: 'replaceChild',
            value: function replaceChild(el, newChild, oldChild) {
                el.replaceChild(newChild, oldChild);
            }
        }, {
            key: 'remove',
            value: function remove(node) {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                return node;
            }
        }, {
            key: 'insertBefore',
            value: function insertBefore(parent, ref, node) {
                parent.insertBefore(node, ref);
            }
        }, {
            key: 'insertAllBefore',
            value: function insertAllBefore(parent, ref, nodes) {
                nodes.forEach(function (n) {
                    return parent.insertBefore(n, ref);
                });
            }
        }, {
            key: 'insertAfter',
            value: function insertAfter(parent, ref, node) {
                parent.insertBefore(node, ref.nextSibling);
            }
        }, {
            key: 'setInnerHTML',
            value: function setInnerHTML(el, value) {
                el.innerHTML = value;
            }
        }, {
            key: 'getText',
            value: function getText(el) {
                return el.textContent;
            }
        }, {
            key: 'setText',
            value: function setText(el, value) {
                el.textContent = value;
            }
        }, {
            key: 'getValue',
            value: function getValue(el) {
                return el.value;
            }
        }, {
            key: 'setValue',
            value: function setValue(el, value) {
                el.value = value;
            }
        }, {
            key: 'getChecked',
            value: function getChecked(el) {
                return el.checked;
            }
        }, {
            key: 'setChecked',
            value: function setChecked(el, value) {
                el.checked = value;
            }
        }, {
            key: 'createComment',
            value: function createComment(text) {
                return document.createComment(text);
            }
        }, {
            key: 'createTemplate',
            value: function createTemplate(html) {
                var /** @type {?} */t = document.createElement('template');
                t.innerHTML = html;
                return t;
            }
        }, {
            key: 'createElement',
            value: function createElement(tagName) {
                var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
                return doc.createElement(tagName);
            }
        }, {
            key: 'createElementNS',
            value: function createElementNS(ns, tagName) {
                var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

                return doc.createElementNS(ns, tagName);
            }
        }, {
            key: 'createTextNode',
            value: function createTextNode(text) {
                var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
                return doc.createTextNode(text);
            }
        }, {
            key: 'createScriptTag',
            value: function createScriptTag(attrName, attrValue) {
                var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

                var /** @type {?} */el = doc.createElement('SCRIPT');
                el.setAttribute(attrName, attrValue);
                return el;
            }
        }, {
            key: 'createStyleElement',
            value: function createStyleElement(css) {
                var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

                var /** @type {?} */style = doc.createElement('style');
                this.appendChild(style, this.createTextNode(css));
                return style;
            }
        }, {
            key: 'createShadowRoot',
            value: function createShadowRoot(el) {
                return el.createShadowRoot();
            }
        }, {
            key: 'getShadowRoot',
            value: function getShadowRoot(el) {
                return el.shadowRoot;
            }
        }, {
            key: 'getHost',
            value: function getHost(el) {
                return el.host;
            }
        }, {
            key: 'clone',
            value: function clone(node) {
                return node.cloneNode(true);
            }
        }, {
            key: 'getElementsByClassName',
            value: function getElementsByClassName(element, name) {
                return element.getElementsByClassName(name);
            }
        }, {
            key: 'getElementsByTagName',
            value: function getElementsByTagName(element, name) {
                return element.getElementsByTagName(name);
            }
        }, {
            key: 'classList',
            value: function classList(element) {
                return Array.prototype.slice.call(element.classList, 0);
            }
        }, {
            key: 'addClass',
            value: function addClass(element, className) {
                element.classList.add(className);
            }
        }, {
            key: 'removeClass',
            value: function removeClass(element, className) {
                element.classList.remove(className);
            }
        }, {
            key: 'hasClass',
            value: function hasClass(element, className) {
                return element.classList.contains(className);
            }
        }, {
            key: 'setStyle',
            value: function setStyle(element, styleName, styleValue) {
                element.style[styleName] = styleValue;
            }
        }, {
            key: 'removeStyle',
            value: function removeStyle(element, stylename) {
                // IE requires '' instead of null
                // see https://github.com/angular/angular/issues/7916
                element.style[stylename] = '';
            }
        }, {
            key: 'getStyle',
            value: function getStyle(element, stylename) {
                return element.style[stylename];
            }
        }, {
            key: 'hasStyle',
            value: function hasStyle(element, styleName) {
                var styleValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                var /** @type {?} */value = this.getStyle(element, styleName) || '';
                return styleValue ? value == styleValue : value.length > 0;
            }
        }, {
            key: 'tagName',
            value: function tagName(element) {
                return element.tagName;
            }
        }, {
            key: 'attributeMap',
            value: function attributeMap(element) {
                var /** @type {?} */res = new Map();
                var /** @type {?} */elAttrs = element.attributes;
                for (var /** @type {?} */i = 0; i < elAttrs.length; i++) {
                    var /** @type {?} */attrib = elAttrs[i];
                    res.set(attrib.name, attrib.value);
                }
                return res;
            }
        }, {
            key: 'hasAttribute',
            value: function hasAttribute(element, attribute) {
                return element.hasAttribute(attribute);
            }
        }, {
            key: 'hasAttributeNS',
            value: function hasAttributeNS(element, ns, attribute) {
                return element.hasAttributeNS(ns, attribute);
            }
        }, {
            key: 'getAttribute',
            value: function getAttribute(element, attribute) {
                return element.getAttribute(attribute);
            }
        }, {
            key: 'getAttributeNS',
            value: function getAttributeNS(element, ns, name) {
                return element.getAttributeNS(ns, name);
            }
        }, {
            key: 'setAttribute',
            value: function setAttribute(element, name, value) {
                element.setAttribute(name, value);
            }
        }, {
            key: 'setAttributeNS',
            value: function setAttributeNS(element, ns, name, value) {
                element.setAttributeNS(ns, name, value);
            }
        }, {
            key: 'removeAttribute',
            value: function removeAttribute(element, attribute) {
                element.removeAttribute(attribute);
            }
        }, {
            key: 'removeAttributeNS',
            value: function removeAttributeNS(element, ns, name) {
                element.removeAttributeNS(ns, name);
            }
        }, {
            key: 'templateAwareRoot',
            value: function templateAwareRoot(el) {
                return this.isTemplateElement(el) ? this.content(el) : el;
            }
        }, {
            key: 'createHtmlDocument',
            value: function createHtmlDocument() {
                return document.implementation.createHTMLDocument('fakeTitle');
            }
        }, {
            key: 'getBoundingClientRect',
            value: function getBoundingClientRect(el) {
                try {
                    return el.getBoundingClientRect();
                } catch (e) {
                    return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
                }
            }
        }, {
            key: 'getTitle',
            value: function getTitle(doc) {
                return document.title;
            }
        }, {
            key: 'setTitle',
            value: function setTitle(doc, newTitle) {
                document.title = newTitle || '';
            }
        }, {
            key: 'elementMatches',
            value: function elementMatches(n, selector) {
                if (n instanceof HTMLElement) {
                    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
                }
                return false;
            }
        }, {
            key: 'isTemplateElement',
            value: function isTemplateElement(el) {
                return el instanceof HTMLElement && el.nodeName == 'TEMPLATE';
            }
        }, {
            key: 'isTextNode',
            value: function isTextNode(node) {
                return node.nodeType === Node.TEXT_NODE;
            }
        }, {
            key: 'isCommentNode',
            value: function isCommentNode(node) {
                return node.nodeType === Node.COMMENT_NODE;
            }
        }, {
            key: 'isElementNode',
            value: function isElementNode(node) {
                return node.nodeType === Node.ELEMENT_NODE;
            }
        }, {
            key: 'hasShadowRoot',
            value: function hasShadowRoot(node) {
                return isPresent(node.shadowRoot) && node instanceof HTMLElement;
            }
        }, {
            key: 'isShadowRoot',
            value: function isShadowRoot(node) {
                return node instanceof DocumentFragment;
            }
        }, {
            key: 'importIntoDoc',
            value: function importIntoDoc(node) {
                return document.importNode(this.templateAwareRoot(node), true);
            }
        }, {
            key: 'adoptNode',
            value: function adoptNode(node) {
                return document.adoptNode(node);
            }
        }, {
            key: 'getHref',
            value: function getHref(el) {
                return el.href;
            }
        }, {
            key: 'getEventKey',
            value: function getEventKey(event) {
                var /** @type {?} */key = event.key;
                if (isBlank(key)) {
                    key = event.keyIdentifier;
                    // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
                    // Safari cf
                    // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
                    if (isBlank(key)) {
                        return 'Unidentified';
                    }
                    if (key.startsWith('U+')) {
                        key = String.fromCharCode(parseInt(key.substring(2), 16));
                        if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                            // There is a bug in Chrome for numeric keypad keys:
                            // https://code.google.com/p/chromium/issues/detail?id=155654
                            // 1, 2, 3 ... are reported as A, B, C ...
                            key = _chromeNumKeyPadMap[key];
                        }
                    }
                }
                return _keyMap[key] || key;
            }
        }, {
            key: 'getGlobalEventTarget',
            value: function getGlobalEventTarget(doc, target) {
                if (target === 'window') {
                    return window;
                }
                if (target === 'document') {
                    return document;
                }
                if (target === 'body') {
                    return document.body;
                }
            }
        }, {
            key: 'getHistory',
            value: function getHistory() {
                return window.history;
            }
        }, {
            key: 'getLocation',
            value: function getLocation() {
                return window.location;
            }
        }, {
            key: 'getBaseHref',
            value: function getBaseHref(doc) {
                var /** @type {?} */href = getBaseElementHref();
                return isBlank(href) ? null : relativePath(href);
            }
        }, {
            key: 'resetBaseElement',
            value: function resetBaseElement() {
                baseElement = null;
            }
        }, {
            key: 'getUserAgent',
            value: function getUserAgent() {
                return window.navigator.userAgent;
            }
        }, {
            key: 'setData',
            value: function setData(element, name, value) {
                this.setAttribute(element, 'data-' + name, value);
            }
        }, {
            key: 'getData',
            value: function getData(element, name) {
                return this.getAttribute(element, 'data-' + name);
            }
        }, {
            key: 'getComputedStyle',
            value: function (_getComputedStyle) {
                function getComputedStyle(_x4) {
                    return _getComputedStyle.apply(this, arguments);
                }

                getComputedStyle.toString = function () {
                    return _getComputedStyle.toString();
                };

                return getComputedStyle;
            }(function (element) {
                return getComputedStyle(element);
            })
        }, {
            key: 'setGlobalVar',
            value: function setGlobalVar(path, value) {
                setValueOnPath(global$1, path, value);
            }
        }, {
            key: 'supportsWebAnimation',
            value: function supportsWebAnimation() {
                return typeof Element.prototype['animate'] === 'function';
            }
        }, {
            key: 'performanceNow',
            value: function performanceNow() {
                // performance.now() is not available in all browsers, see
                // http://caniuse.com/#search=performance.now
                return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
            }
        }, {
            key: 'supportsCookies',
            value: function supportsCookies() {
                return true;
            }
        }, {
            key: 'getCookie',
            value: function getCookie(name) {
                return parseCookieValue(document.cookie, name);
            }
        }, {
            key: 'setCookie',
            value: function setCookie(name, value) {
                // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
                // not clear other cookies.
                document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
            }
        }, {
            key: 'attrToPropMap',
            get: function get() {
                return _attrToPropMap;
            }
        }], [{
            key: 'makeCurrent',
            value: function makeCurrent() {
                setRootDomAdapter(new BrowserDomAdapter());
            }
        }]);

        return BrowserDomAdapter;
    }(GenericBrowserDomAdapter);

    var /** @type {?} */baseElement = null;
    /**
     * @return {?}
     */
    function getBaseElementHref() {
        if (!baseElement) {
            baseElement = document.querySelector('base');
            if (!baseElement) {
                return null;
            }
        }
        return baseElement.getAttribute('href');
    }
    // based on urlUtils.js in AngularJS 1
    var /** @type {?} */urlParsingNode = void 0;
    /**
     * @param {?} url
     * @return {?}
     */
    function relativePath(url) {
        if (!urlParsingNode) {
            urlParsingNode = document.createElement('a');
        }
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname;
    }
    /**
     * @param {?} cookieStr
     * @param {?} name
     * @return {?}
     */
    function parseCookieValue(cookieStr, name) {
        name = encodeURIComponent(name);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = cookieStr.split(';')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var cookie = _step.value;

                var /** @type {?} */eqIndex = cookie.indexOf('=');

                var _ref = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)],
                    _ref2 = _slicedToArray(_ref, 2),
                    cookieName = _ref2[0],
                    cookieValue = _ref2[1];

                if (cookieName.trim() === name) {
                    return decodeURIComponent(cookieValue);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return null;
    }

    /**
     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
     *
     * Note: Document might not be available in the Application Context when Application and Rendering
     * Contexts are not the same (e.g. when running the application into a Web Worker).
     *
     * @stable
     */
    var /** @type {?} */DOCUMENT = new _core.InjectionToken('DocumentToken');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @return {?}
     */
    function supportsState() {
        return !!window.history.pushState;
    }

    /**
     * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
     * This class should not be used directly by an application developer. Instead, use
     * {\@link Location}.
     */

    var BrowserPlatformLocation = function (_PlatformLocation) {
        _inherits(BrowserPlatformLocation, _PlatformLocation);

        /**
         * @param {?} _doc
         */
        function BrowserPlatformLocation(_doc) {
            _classCallCheck(this, BrowserPlatformLocation);

            var _this6 = _possibleConstructorReturn(this, (BrowserPlatformLocation.__proto__ || Object.getPrototypeOf(BrowserPlatformLocation)).call(this));

            _this6._doc = _doc;
            _this6._init();
            return _this6;
        }
        /**
         * \@internal
         * @return {?}
         */


        _createClass(BrowserPlatformLocation, [{
            key: '_init',
            value: function _init() {
                this._location = getDOM().getLocation();
                this._history = getDOM().getHistory();
            }
        }, {
            key: 'getBaseHrefFromDOM',
            value: function getBaseHrefFromDOM() {
                return getDOM().getBaseHref(this._doc);
            }
        }, {
            key: 'onPopState',
            value: function onPopState(fn) {
                getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
            }
        }, {
            key: 'onHashChange',
            value: function onHashChange(fn) {
                getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
            }
        }, {
            key: 'pushState',
            value: function pushState(state, title, url) {
                if (supportsState()) {
                    this._history.pushState(state, title, url);
                } else {
                    this._location.hash = url;
                }
            }
        }, {
            key: 'replaceState',
            value: function replaceState(state, title, url) {
                if (supportsState()) {
                    this._history.replaceState(state, title, url);
                } else {
                    this._location.hash = url;
                }
            }
        }, {
            key: 'forward',
            value: function forward() {
                this._history.forward();
            }
        }, {
            key: 'back',
            value: function back() {
                this._history.back();
            }
        }, {
            key: 'location',
            get: function get() {
                return this._location;
            }
        }, {
            key: 'pathname',
            get: function get() {
                return this._location.pathname;
            },
            set: function set(newPath) {
                this._location.pathname = newPath;
            }
        }, {
            key: 'search',
            get: function get() {
                return this._location.search;
            }
        }, {
            key: 'hash',
            get: function get() {
                return this._location.hash;
            }
        }]);

        return BrowserPlatformLocation;
    }(_common.PlatformLocation);

    BrowserPlatformLocation.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    BrowserPlatformLocation.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [DOCUMENT] }] }];
    };

    /**
     * A service that can be used to get and add meta tags.
     *
     * \@experimental
     */

    var Meta = function () {
        /**
         * @param {?} _doc
         */
        function Meta(_doc) {
            _classCallCheck(this, Meta);

            this._doc = _doc;
            this._dom = getDOM();
        }
        /**
         * @param {?} tag
         * @param {?=} forceCreation
         * @return {?}
         */


        _createClass(Meta, [{
            key: 'addTag',
            value: function addTag(tag) {
                var forceCreation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                if (!tag) return null;
                return this._getOrCreateElement(tag, forceCreation);
            }
        }, {
            key: 'addTags',
            value: function addTags(tags) {
                var _this7 = this;

                var forceCreation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                if (!tags) return [];
                return tags.reduce(function (result, tag) {
                    if (tag) {
                        result.push(_this7._getOrCreateElement(tag, forceCreation));
                    }
                    return result;
                }, []);
            }
        }, {
            key: 'getTag',
            value: function getTag(attrSelector) {
                if (!attrSelector) return null;
                return this._dom.querySelector(this._doc, 'meta[' + attrSelector + ']');
            }
        }, {
            key: 'getTags',
            value: function getTags(attrSelector) {
                if (!attrSelector) return [];
                var /** @type {?} */list /*NodeList*/ = this._dom.querySelectorAll(this._doc, 'meta[' + attrSelector + ']');
                return list ? [].slice.call(list) : [];
            }
        }, {
            key: 'updateTag',
            value: function updateTag(tag, selector) {
                if (!tag) return null;
                selector = selector || this._parseSelector(tag);
                var /** @type {?} */meta = this.getTag(selector);
                if (meta) {
                    return this._setMetaElementAttributes(tag, meta);
                }
                return this._getOrCreateElement(tag, true);
            }
        }, {
            key: 'removeTag',
            value: function removeTag(attrSelector) {
                this.removeTagElement(this.getTag(attrSelector));
            }
        }, {
            key: 'removeTagElement',
            value: function removeTagElement(meta) {
                if (meta) {
                    this._dom.remove(meta);
                }
            }
        }, {
            key: '_getOrCreateElement',
            value: function _getOrCreateElement(meta) {
                var forceCreation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                if (!forceCreation) {
                    var /** @type {?} */selector = this._parseSelector(meta);
                    var /** @type {?} */elem = this.getTag(selector);
                    // It's allowed to have multiple elements with the same name so it's not enough to
                    // just check that element with the same name already present on the page. We also need to
                    // check if element has tag attributes
                    if (elem && this._containsAttributes(meta, elem)) return elem;
                }
                var /** @type {?} */element = this._dom.createElement('meta');
                this._setMetaElementAttributes(meta, element);
                var /** @type {?} */head = this._dom.getElementsByTagName(this._doc, 'head')[0];
                this._dom.appendChild(head, element);
                return element;
            }
        }, {
            key: '_setMetaElementAttributes',
            value: function _setMetaElementAttributes(tag, el) {
                var _this8 = this;

                Object.keys(tag).forEach(function (prop) {
                    return _this8._dom.setAttribute(el, prop, tag[prop]);
                });
                return el;
            }
        }, {
            key: '_parseSelector',
            value: function _parseSelector(tag) {
                var /** @type {?} */attr = tag.name ? 'name' : 'property';
                return attr + '="' + tag[attr] + '"';
            }
        }, {
            key: '_containsAttributes',
            value: function _containsAttributes(tag, elem) {
                var _this9 = this;

                return Object.keys(tag).every(function (key) {
                    return _this9._dom.getAttribute(elem, key) === tag[key];
                });
            }
        }]);

        return Meta;
    }();

    Meta.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    Meta.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [DOCUMENT] }] }];
    };

    /**
     * An id that identifies a particular application being bootstrapped, that should
     * match across the client/server boundary.
     */
    var /** @type {?} */TRANSITION_ID = new _core.InjectionToken('TRANSITION_ID');
    /**
     * @param {?} transitionId
     * @param {?} document
     * @return {?}
     */
    function bootstrapListenerFactory(transitionId, document) {
        var /** @type {?} */factory = function factory() {
            var /** @type {?} */dom = getDOM();
            var /** @type {?} */styles = Array.prototype.slice.apply(dom.querySelectorAll(document, 'style[ng-transition]'));
            styles.filter(function (el) {
                return dom.getAttribute(el, 'ng-transition') === transitionId;
            }).forEach(function (el) {
                return dom.remove(el);
            });
        };
        return factory;
    }
    var /** @type {?} */SERVER_TRANSITION_PROVIDERS = [{
        provide: _core.APP_INITIALIZER,
        useFactory: bootstrapListenerFactory,
        deps: [TRANSITION_ID, DOCUMENT],
        multi: true
    }];

    var BrowserGetTestability = function () {
        function BrowserGetTestability() {
            _classCallCheck(this, BrowserGetTestability);
        }

        _createClass(BrowserGetTestability, [{
            key: 'addToWindow',
            value: function addToWindow(registry) {
                global$1.getAngularTestability = function (elem) {
                    var findInAncestors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                    var /** @type {?} */testability = registry.findTestabilityInTree(elem, findInAncestors);
                    if (testability == null) {
                        throw new Error('Could not find testability for element.');
                    }
                    return testability;
                };
                global$1.getAllAngularTestabilities = function () {
                    return registry.getAllTestabilities();
                };
                global$1.getAllAngularRootElements = function () {
                    return registry.getAllRootElements();
                };
                var /** @type {?} */whenAllStable = function whenAllStable(callback /** TODO #9100 */) {
                    var /** @type {?} */testabilities = global$1.getAllAngularTestabilities();
                    var /** @type {?} */count = testabilities.length;
                    var /** @type {?} */didWork = false;
                    var /** @type {?} */decrement = function decrement(didWork_ /** TODO #9100 */) {
                        didWork = didWork || didWork_;
                        count--;
                        if (count == 0) {
                            callback(didWork);
                        }
                    };
                    testabilities.forEach(function (testability /** TODO #9100 */) {
                        testability.whenStable(decrement);
                    });
                };
                if (!global$1['frameworkStabilizers']) {
                    global$1['frameworkStabilizers'] = [];
                }
                global$1['frameworkStabilizers'].push(whenAllStable);
            }
        }, {
            key: 'findTestabilityInTree',
            value: function findTestabilityInTree(registry, elem, findInAncestors) {
                if (elem == null) {
                    return null;
                }
                var /** @type {?} */t = registry.getTestability(elem);
                if (isPresent(t)) {
                    return t;
                } else if (!findInAncestors) {
                    return null;
                }
                if (getDOM().isShadowRoot(elem)) {
                    return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
                }
                return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
            }
        }], [{
            key: 'init',
            value: function init() {
                (0, _core.setTestabilityGetter)(new BrowserGetTestability());
            }
        }]);

        return BrowserGetTestability;
    }();

    var Title = function () {
        /**
         * @param {?} _doc
         */
        function Title(_doc) {
            _classCallCheck(this, Title);

            this._doc = _doc;
        }
        /**
         * Get the title of the current HTML document.
         * @return {?}
         */


        _createClass(Title, [{
            key: 'getTitle',
            value: function getTitle() {
                return getDOM().getTitle(this._doc);
            }
        }, {
            key: 'setTitle',
            value: function setTitle(newTitle) {
                getDOM().setTitle(this._doc, newTitle);
            }
        }]);

        return Title;
    }();

    Title.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    Title.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [DOCUMENT] }] }];
    };

    /**
     * Wraps Javascript Objects
     */

    var StringMapWrapper = function () {
        function StringMapWrapper() {
            _classCallCheck(this, StringMapWrapper);
        }

        _createClass(StringMapWrapper, null, [{
            key: 'merge',
            value: function merge(m1, m2) {
                var /** @type {?} */m = {};
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = Object.keys(m1)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var k = _step2.value;

                        m[k] = m1[k];
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = Object.keys(m2)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _k = _step3.value;

                        m[_k] = m2[_k];
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return m;
            }
        }, {
            key: 'equals',
            value: function equals(m1, m2) {
                var /** @type {?} */k1 = Object.keys(m1);
                var /** @type {?} */k2 = Object.keys(m2);
                if (k1.length != k2.length) {
                    return false;
                }
                for (var /** @type {?} */i = 0; i < k1.length; i++) {
                    var /** @type {?} */key = k1[i];
                    if (m1[key] !== m2[key]) {
                        return false;
                    }
                }
                return true;
            }
        }]);

        return StringMapWrapper;
    }();

    /**
     * @stable
     */
    var /** @type {?} */EVENT_MANAGER_PLUGINS = new _core.InjectionToken('EventManagerPlugins');
    /**
     * \@stable
     */

    var EventManager = function () {
        /**
         * @param {?} plugins
         * @param {?} _zone
         */
        function EventManager(plugins, _zone) {
            var _this10 = this;

            _classCallCheck(this, EventManager);

            this._zone = _zone;
            this._eventNameToPlugin = new Map();
            plugins.forEach(function (p) {
                return p.manager = _this10;
            });
            this._plugins = plugins.slice().reverse();
        }
        /**
         * @param {?} element
         * @param {?} eventName
         * @param {?} handler
         * @return {?}
         */


        _createClass(EventManager, [{
            key: 'addEventListener',
            value: function addEventListener(element, eventName, handler) {
                var /** @type {?} */plugin = this._findPluginFor(eventName);
                return plugin.addEventListener(element, eventName, handler);
            }
        }, {
            key: 'addGlobalEventListener',
            value: function addGlobalEventListener(target, eventName, handler) {
                var /** @type {?} */plugin = this._findPluginFor(eventName);
                return plugin.addGlobalEventListener(target, eventName, handler);
            }
        }, {
            key: 'getZone',
            value: function getZone() {
                return this._zone;
            }
        }, {
            key: '_findPluginFor',
            value: function _findPluginFor(eventName) {
                var /** @type {?} */plugin = this._eventNameToPlugin.get(eventName);
                if (plugin) {
                    return plugin;
                }
                var /** @type {?} */plugins = this._plugins;
                for (var /** @type {?} */i = 0; i < plugins.length; i++) {
                    var /** @type {?} */_plugin = plugins[i];
                    if (_plugin.supports(eventName)) {
                        this._eventNameToPlugin.set(eventName, _plugin);
                        return _plugin;
                    }
                }
                throw new Error('No event manager plugin found for event ' + eventName);
            }
        }]);

        return EventManager;
    }();

    EventManager.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    EventManager.ctorParameters = function () {
        return [{ type: Array, decorators: [{ type: _core.Inject, args: [EVENT_MANAGER_PLUGINS] }] }, { type: _core.NgZone }];
    };
    /**
     * @abstract
     */

    var EventManagerPlugin = function () {
        /**
         * @param {?} _doc
         */
        function EventManagerPlugin(_doc) {
            _classCallCheck(this, EventManagerPlugin);

            this._doc = _doc;
        }
        /**
         * @abstract
         * @param {?} eventName
         * @return {?}
         */


        _createClass(EventManagerPlugin, [{
            key: 'supports',
            value: function supports(eventName) {}
        }, {
            key: 'addEventListener',
            value: function addEventListener(element, eventName, handler) {}
        }, {
            key: 'addGlobalEventListener',
            value: function addGlobalEventListener(element, eventName, handler) {
                var /** @type {?} */target = getDOM().getGlobalEventTarget(this._doc, element);
                if (!target) {
                    throw new Error('Unsupported event target ' + target + ' for event ' + eventName);
                }
                return this.addEventListener(target, eventName, handler);
            }
        }]);

        return EventManagerPlugin;
    }();

    var SharedStylesHost = function () {
        function SharedStylesHost() {
            _classCallCheck(this, SharedStylesHost);

            /** @internal */
            this._stylesSet = new Set();
        }
        /**
         * @param {?} styles
         * @return {?}
         */


        _createClass(SharedStylesHost, [{
            key: 'addStyles',
            value: function addStyles(styles) {
                var _this11 = this;

                var /** @type {?} */additions = new Set();
                styles.forEach(function (style) {
                    if (!_this11._stylesSet.has(style)) {
                        _this11._stylesSet.add(style);
                        additions.add(style);
                    }
                });
                this.onStylesAdded(additions);
            }
        }, {
            key: 'onStylesAdded',
            value: function onStylesAdded(additions) {}
        }, {
            key: 'getAllStyles',
            value: function getAllStyles() {
                return Array.from(this._stylesSet);
            }
        }]);

        return SharedStylesHost;
    }();

    SharedStylesHost.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    SharedStylesHost.ctorParameters = function () {
        return [];
    };

    var DomSharedStylesHost = function (_SharedStylesHost) {
        _inherits(DomSharedStylesHost, _SharedStylesHost);

        /**
         * @param {?} _doc
         */
        function DomSharedStylesHost(_doc) {
            _classCallCheck(this, DomSharedStylesHost);

            var _this12 = _possibleConstructorReturn(this, (DomSharedStylesHost.__proto__ || Object.getPrototypeOf(DomSharedStylesHost)).call(this));

            _this12._doc = _doc;
            _this12._hostNodes = new Set();
            _this12._styleNodes = new Set();
            _this12._hostNodes.add(_doc.head);
            return _this12;
        }
        /**
         * @param {?} styles
         * @param {?} host
         * @return {?}
         */


        _createClass(DomSharedStylesHost, [{
            key: '_addStylesToHost',
            value: function _addStylesToHost(styles, host) {
                var _this13 = this;

                styles.forEach(function (style) {
                    var /** @type {?} */styleEl = _this13._doc.createElement('style');
                    styleEl.textContent = style;
                    _this13._styleNodes.add(host.appendChild(styleEl));
                });
            }
        }, {
            key: 'addHost',
            value: function addHost(hostNode) {
                this._addStylesToHost(this._stylesSet, hostNode);
                this._hostNodes.add(hostNode);
            }
        }, {
            key: 'removeHost',
            value: function removeHost(hostNode) {
                this._hostNodes.delete(hostNode);
            }
        }, {
            key: 'onStylesAdded',
            value: function onStylesAdded(additions) {
                var _this14 = this;

                this._hostNodes.forEach(function (hostNode) {
                    return _this14._addStylesToHost(additions, hostNode);
                });
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                this._styleNodes.forEach(function (styleNode) {
                    return getDOM().remove(styleNode);
                });
            }
        }]);

        return DomSharedStylesHost;
    }(SharedStylesHost);

    DomSharedStylesHost.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    DomSharedStylesHost.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [DOCUMENT] }] }];
    };

    var /** @type {?} */NAMESPACE_URIS = {
        'xlink': 'http://www.w3.org/1999/xlink',
        'svg': 'http://www.w3.org/2000/svg',
        'xhtml': 'http://www.w3.org/1999/xhtml',
        'xml': 'http://www.w3.org/XML/1998/namespace'
    };
    var /** @type {?} */TEMPLATE_COMMENT_TEXT = 'template bindings={}';
    var /** @type {?} */TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/;
    /**
     * @abstract
     */

    var DomRootRenderer = function () {
        /**
         * @param {?} document
         * @param {?} eventManager
         * @param {?} sharedStylesHost
         * @param {?} animationDriver
         * @param {?} appId
         */
        function DomRootRenderer(document, eventManager, sharedStylesHost, animationDriver, appId) {
            _classCallCheck(this, DomRootRenderer);

            this.document = document;
            this.eventManager = eventManager;
            this.sharedStylesHost = sharedStylesHost;
            this.animationDriver = animationDriver;
            this.appId = appId;
            this.registeredComponents = new Map();
        }
        /**
         * @param {?} componentProto
         * @return {?}
         */


        _createClass(DomRootRenderer, [{
            key: 'renderComponent',
            value: function renderComponent(componentProto) {
                var /** @type {?} */renderer = this.registeredComponents.get(componentProto.id);
                if (!renderer) {
                    renderer = new DomRenderer(this, componentProto, this.animationDriver, this.appId + '-' + componentProto.id);
                    this.registeredComponents.set(componentProto.id, renderer);
                }
                return renderer;
            }
        }]);

        return DomRootRenderer;
    }();

    var DomRootRenderer_ = function (_DomRootRenderer) {
        _inherits(DomRootRenderer_, _DomRootRenderer);

        /**
         * @param {?} _document
         * @param {?} _eventManager
         * @param {?} sharedStylesHost
         * @param {?} animationDriver
         * @param {?} appId
         */
        function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animationDriver, appId) {
            _classCallCheck(this, DomRootRenderer_);

            var _this15 = _possibleConstructorReturn(this, (DomRootRenderer_.__proto__ || Object.getPrototypeOf(DomRootRenderer_)).call(this, _document, _eventManager, sharedStylesHost, animationDriver, appId));

            throw new Error('RootRenderer is no longer supported. Please use the `RendererFactoryV2` instead!');
            return _this15;
        }

        return DomRootRenderer_;
    }(DomRootRenderer);

    DomRootRenderer_.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    DomRootRenderer_.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [DOCUMENT] }] }, { type: EventManager }, { type: DomSharedStylesHost }, { type: AnimationDriver }, { type: undefined, decorators: [{ type: _core.Inject, args: [_core.APP_ID] }] }];
    };
    var /** @type {?} */DIRECT_DOM_RENDERER = {
        remove: function remove(node) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        },
        appendChild: function appendChild(node, parent) {
            parent.appendChild(node);
        },
        insertBefore: function insertBefore(node, refNode) {
            refNode.parentNode.insertBefore(node, refNode);
        },
        nextSibling: function nextSibling(node) {
            return node.nextSibling;
        },
        parentElement: function parentElement(node) {
            return node.parentNode;
        }
    };

    var DomRenderer = function () {
        /**
         * @param {?} _rootRenderer
         * @param {?} componentProto
         * @param {?} _animationDriver
         * @param {?} styleShimId
         */
        function DomRenderer(_rootRenderer, componentProto, _animationDriver, styleShimId) {
            _classCallCheck(this, DomRenderer);

            this._rootRenderer = _rootRenderer;
            this.componentProto = componentProto;
            this._animationDriver = _animationDriver;
            this.directRenderer = DIRECT_DOM_RENDERER;
            this._styles = flattenStyles(styleShimId, componentProto.styles, []);
            if (componentProto.encapsulation !== _core.ViewEncapsulation.Native) {
                this._rootRenderer.sharedStylesHost.addStyles(this._styles);
            }
            if (this.componentProto.encapsulation === _core.ViewEncapsulation.Emulated) {
                this._contentAttr = shimContentAttribute(styleShimId);
                this._hostAttr = shimHostAttribute(styleShimId);
            } else {
                this._contentAttr = null;
                this._hostAttr = null;
            }
        }
        /**
         * @param {?} selectorOrNode
         * @param {?} debugInfo
         * @return {?}
         */


        _createClass(DomRenderer, [{
            key: 'selectRootElement',
            value: function selectRootElement(selectorOrNode, debugInfo) {
                var /** @type {?} */el = void 0;
                if (typeof selectorOrNode === 'string') {
                    el = this._rootRenderer.document.querySelector(selectorOrNode);
                    if (!el) {
                        throw new Error('The selector "' + selectorOrNode + '" did not match any elements');
                    }
                } else {
                    el = selectorOrNode;
                }
                while (el.firstChild) {
                    el.removeChild(el.firstChild);
                }
                return el;
            }
        }, {
            key: 'createElement',
            value: function createElement(parent, name, debugInfo) {
                var /** @type {?} */el = void 0;
                if (isNamespaced(name)) {
                    var /** @type {?} */nsAndName = splitNamespace(name);
                    el = document.createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]);
                } else {
                    el = document.createElement(name);
                }
                if (this._contentAttr) {
                    el.setAttribute(this._contentAttr, '');
                }
                if (parent) {
                    parent.appendChild(el);
                }
                return el;
            }
        }, {
            key: 'createViewRoot',
            value: function createViewRoot(hostElement) {
                var /** @type {?} */nodesParent = void 0;
                if (this.componentProto.encapsulation === _core.ViewEncapsulation.Native) {
                    nodesParent = hostElement.createShadowRoot();
                    this._rootRenderer.sharedStylesHost.addHost(nodesParent);
                    for (var /** @type {?} */i = 0; i < this._styles.length; i++) {
                        var /** @type {?} */styleEl = document.createElement('style');
                        styleEl.textContent = this._styles[i];
                        nodesParent.appendChild(styleEl);
                    }
                } else {
                    if (this._hostAttr) {
                        hostElement.setAttribute(this._hostAttr, '');
                    }
                    nodesParent = hostElement;
                }
                return nodesParent;
            }
        }, {
            key: 'createTemplateAnchor',
            value: function createTemplateAnchor(parentElement, debugInfo) {
                var /** @type {?} */comment = document.createComment(TEMPLATE_COMMENT_TEXT);
                if (parentElement) {
                    parentElement.appendChild(comment);
                }
                return comment;
            }
        }, {
            key: 'createText',
            value: function createText(parentElement, value, debugInfo) {
                var /** @type {?} */node = document.createTextNode(value);
                if (parentElement) {
                    parentElement.appendChild(node);
                }
                return node;
            }
        }, {
            key: 'projectNodes',
            value: function projectNodes(parentElement, nodes) {
                if (!parentElement) return;
                appendNodes(parentElement, nodes);
            }
        }, {
            key: 'attachViewAfter',
            value: function attachViewAfter(node, viewRootNodes) {
                moveNodesAfterSibling(node, viewRootNodes);
            }
        }, {
            key: 'detachView',
            value: function detachView(viewRootNodes) {
                for (var /** @type {?} */i = 0; i < viewRootNodes.length; i++) {
                    var /** @type {?} */node = viewRootNodes[i];
                    if (node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                }
            }
        }, {
            key: 'destroyView',
            value: function destroyView(hostElement, viewAllNodes) {
                if (this.componentProto.encapsulation === _core.ViewEncapsulation.Native && hostElement) {
                    this._rootRenderer.sharedStylesHost.removeHost(hostElement.shadowRoot);
                }
            }
        }, {
            key: 'listen',
            value: function listen(renderElement, name, callback) {
                return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
            }
        }, {
            key: 'listenGlobal',
            value: function listenGlobal(target, name, callback) {
                return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
            }
        }, {
            key: 'setElementProperty',
            value: function setElementProperty(renderElement, propertyName, propertyValue) {
                renderElement[propertyName] = propertyValue;
            }
        }, {
            key: 'setElementAttribute',
            value: function setElementAttribute(renderElement, attributeName, attributeValue) {
                var /** @type {?} */attrNs = void 0;
                var /** @type {?} */attrNameWithoutNs = attributeName;
                if (isNamespaced(attributeName)) {
                    var /** @type {?} */nsAndName = splitNamespace(attributeName);
                    attrNameWithoutNs = nsAndName[1];
                    attributeName = nsAndName[0] + ':' + nsAndName[1];
                    attrNs = NAMESPACE_URIS[nsAndName[0]];
                }
                if (isPresent(attributeValue)) {
                    if (attrNs) {
                        renderElement.setAttributeNS(attrNs, attributeName, attributeValue);
                    } else {
                        renderElement.setAttribute(attributeName, attributeValue);
                    }
                } else {
                    if (isPresent(attrNs)) {
                        renderElement.removeAttributeNS(attrNs, attrNameWithoutNs);
                    } else {
                        renderElement.removeAttribute(attributeName);
                    }
                }
            }
        }, {
            key: 'setBindingDebugInfo',
            value: function setBindingDebugInfo(renderElement, propertyName, propertyValue) {
                if (renderElement.nodeType === Node.COMMENT_NODE) {
                    var /** @type {?} */existingBindings = renderElement.nodeValue.replace(/\n/g, '').match(TEMPLATE_BINDINGS_EXP);
                    var /** @type {?} */parsedBindings = JSON.parse(existingBindings[1]);
                    parsedBindings[propertyName] = propertyValue;
                    renderElement.nodeValue = TEMPLATE_COMMENT_TEXT.replace('{}', JSON.stringify(parsedBindings, null, 2));
                } else {
                    // Attribute names with `$` (eg `x-y$`) are valid per spec, but unsupported by some browsers
                    propertyName = propertyName.replace(/\$/g, '_');
                    this.setElementAttribute(renderElement, propertyName, propertyValue);
                }
            }
        }, {
            key: 'setElementClass',
            value: function setElementClass(renderElement, className, isAdd) {
                if (isAdd) {
                    renderElement.classList.add(className);
                } else {
                    renderElement.classList.remove(className);
                }
            }
        }, {
            key: 'setElementStyle',
            value: function setElementStyle(renderElement, styleName, styleValue) {
                if (isPresent(styleValue)) {
                    renderElement.style[styleName] = stringify(styleValue);
                } else {
                    // IE requires '' instead of null
                    // see https://github.com/angular/angular/issues/7916
                    renderElement.style[styleName] = '';
                }
            }
        }, {
            key: 'invokeElementMethod',
            value: function invokeElementMethod(renderElement, methodName, args) {
                renderElement[methodName].apply(renderElement, args);
            }
        }, {
            key: 'setText',
            value: function setText(renderNode, text) {
                renderNode.nodeValue = text;
            }
        }, {
            key: 'animate',
            value: function animate(element, startingStyles, keyframes, duration, delay, easing) {
                var previousPlayers = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

                if (this._rootRenderer.document.body.contains(element)) {
                    return this._animationDriver.animate(element, startingStyles, keyframes, duration, delay, easing, previousPlayers);
                }
                return new _core.ɵNoOpAnimationPlayer();
            }
        }]);

        return DomRenderer;
    }();

    /**
     * @param {?} sibling
     * @param {?} nodes
     * @return {?}
     */
    function moveNodesAfterSibling(sibling, nodes) {
        var /** @type {?} */parent = sibling.parentNode;
        if (nodes.length > 0 && parent) {
            var /** @type {?} */nextSibling = sibling.nextSibling;
            if (nextSibling) {
                for (var /** @type {?} */i = 0; i < nodes.length; i++) {
                    parent.insertBefore(nodes[i], nextSibling);
                }
            } else {
                for (var /** @type {?} */_i = 0; _i < nodes.length; _i++) {
                    parent.appendChild(nodes[_i]);
                }
            }
        }
    }
    /**
     * @param {?} parent
     * @param {?} nodes
     * @return {?}
     */
    function appendNodes(parent, nodes) {
        for (var /** @type {?} */i = 0; i < nodes.length; i++) {
            parent.appendChild(nodes[i]);
        }
    }
    /**
     * @param {?} eventHandler
     * @return {?}
     */
    function decoratePreventDefault(eventHandler) {
        return function (event) {
            var /** @type {?} */allowDefaultBehavior = eventHandler(event);
            if (allowDefaultBehavior === false) {
                // TODO(tbosch): move preventDefault into event plugins...
                event.preventDefault();
                event.returnValue = false;
            }
        };
    }
    var /** @type {?} */COMPONENT_REGEX = /%COMP%/g;
    var /** @type {?} */COMPONENT_VARIABLE = '%COMP%';
    var /** @type {?} */HOST_ATTR = '_nghost-' + COMPONENT_VARIABLE;
    var /** @type {?} */CONTENT_ATTR = '_ngcontent-' + COMPONENT_VARIABLE;
    /**
     * @param {?} componentShortId
     * @return {?}
     */
    function shimContentAttribute(componentShortId) {
        return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    /**
     * @param {?} componentShortId
     * @return {?}
     */
    function shimHostAttribute(componentShortId) {
        return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    /**
     * @param {?} compId
     * @param {?} styles
     * @param {?} target
     * @return {?}
     */
    function flattenStyles(compId, styles, target) {
        for (var /** @type {?} */i = 0; i < styles.length; i++) {
            var /** @type {?} */style = styles[i];
            if (Array.isArray(style)) {
                flattenStyles(compId, style, target);
            } else {
                style = style.replace(COMPONENT_REGEX, compId);
                target.push(style);
            }
        }
        return target;
    }
    var /** @type {?} */NS_PREFIX_RE = /^:([^:]+):(.+)$/;
    /**
     * @param {?} name
     * @return {?}
     */
    function isNamespaced(name) {
        return name[0] === ':';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function splitNamespace(name) {
        var /** @type {?} */match = name.match(NS_PREFIX_RE);
        return [match[1], match[2]];
    }

    var DomRendererFactoryV2 = function () {
        /**
         * @param {?} eventManager
         * @param {?} sharedStylesHost
         */
        function DomRendererFactoryV2(eventManager, sharedStylesHost) {
            _classCallCheck(this, DomRendererFactoryV2);

            this.eventManager = eventManager;
            this.sharedStylesHost = sharedStylesHost;
            this.rendererByCompId = new Map();
            this.defaultRenderer = new DefaultDomRendererV2(eventManager);
        }

        _createClass(DomRendererFactoryV2, [{
            key: 'createRenderer',
            value: function createRenderer(element, type) {
                if (!element || !type) {
                    return this.defaultRenderer;
                }
                switch (type.encapsulation) {
                    case _core.ViewEncapsulation.Emulated:
                        {
                            var /** @type {?} */renderer = this.rendererByCompId.get(type.id);
                            if (!renderer) {
                                renderer = new EmulatedEncapsulationDomRendererV2(this.eventManager, this.sharedStylesHost, type);
                                this.rendererByCompId.set(type.id, renderer);
                            }
                            renderer.applyToHost(element);
                            return renderer;
                        }
                    case _core.ViewEncapsulation.Native:
                        return new ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);
                    default:
                        {
                            if (!this.rendererByCompId.has(type.id)) {
                                var /** @type {?} */styles = flattenStyles(type.id, type.styles, []);
                                this.sharedStylesHost.addStyles(styles);
                                this.rendererByCompId.set(type.id, this.defaultRenderer);
                            }
                            return this.defaultRenderer;
                        }
                }
            }
        }]);

        return DomRendererFactoryV2;
    }();

    DomRendererFactoryV2.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    DomRendererFactoryV2.ctorParameters = function () {
        return [{ type: EventManager }, { type: DomSharedStylesHost }];
    };

    var DefaultDomRendererV2 = function () {
        /**
         * @param {?} eventManager
         */
        function DefaultDomRendererV2(eventManager) {
            _classCallCheck(this, DefaultDomRendererV2);

            this.eventManager = eventManager;
            this.data = Object.create(null);
        }
        /**
         * @return {?}
         */


        _createClass(DefaultDomRendererV2, [{
            key: 'destroy',
            value: function destroy() {}
        }, {
            key: 'createElement',
            value: function createElement(name, namespace) {
                if (namespace) {
                    return document.createElementNS(NAMESPACE_URIS[namespace], name);
                }
                return document.createElement(name);
            }
        }, {
            key: 'createComment',
            value: function createComment(value) {
                return document.createComment(value);
            }
        }, {
            key: 'createText',
            value: function createText(value) {
                return document.createTextNode(value);
            }
        }, {
            key: 'appendChild',
            value: function appendChild(parent, newChild) {
                parent.appendChild(newChild);
            }
        }, {
            key: 'insertBefore',
            value: function insertBefore(parent, newChild, refChild) {
                if (parent) {
                    parent.insertBefore(newChild, refChild);
                }
            }
        }, {
            key: 'removeChild',
            value: function removeChild(parent, oldChild) {
                if (parent) {
                    parent.removeChild(oldChild);
                }
            }
        }, {
            key: 'selectRootElement',
            value: function selectRootElement(selectorOrNode) {
                var /** @type {?} */el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) : selectorOrNode;
                if (!el) {
                    throw new Error('The selector "' + selectorOrNode + '" did not match any elements');
                }
                el.textContent = '';
                return el;
            }
        }, {
            key: 'parentNode',
            value: function parentNode(node) {
                return node.parentNode;
            }
        }, {
            key: 'nextSibling',
            value: function nextSibling(node) {
                return node.nextSibling;
            }
        }, {
            key: 'setAttribute',
            value: function setAttribute(el, name, value, namespace) {
                if (namespace) {
                    el.setAttributeNS(NAMESPACE_URIS[namespace], namespace + ':' + name, value);
                } else {
                    el.setAttribute(name, value);
                }
            }
        }, {
            key: 'removeAttribute',
            value: function removeAttribute(el, name, namespace) {
                if (namespace) {
                    el.removeAttributeNS(NAMESPACE_URIS[namespace], name);
                } else {
                    el.removeAttribute(name);
                }
            }
        }, {
            key: 'addClass',
            value: function addClass(el, name) {
                el.classList.add(name);
            }
        }, {
            key: 'removeClass',
            value: function removeClass(el, name) {
                el.classList.remove(name);
            }
        }, {
            key: 'setStyle',
            value: function setStyle(el, style, value, hasVendorPrefix, hasImportant) {
                if (hasVendorPrefix || hasImportant) {
                    el.style.setProperty(style, value, hasImportant ? 'important' : '');
                } else {
                    el.style[style] = value;
                }
            }
        }, {
            key: 'removeStyle',
            value: function removeStyle(el, style, hasVendorPrefix) {
                if (hasVendorPrefix) {
                    el.style.removeProperty(style);
                } else {
                    // IE requires '' instead of null
                    // see https://github.com/angular/angular/issues/7916
                    el.style[style] = '';
                }
            }
        }, {
            key: 'setProperty',
            value: function setProperty(el, name, value) {
                el[name] = value;
            }
        }, {
            key: 'setValue',
            value: function setValue(node, value) {
                node.nodeValue = value;
            }
        }, {
            key: 'listen',
            value: function listen(target, event, callback) {
                if (typeof target === 'string') {
                    return this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback));
                }
                return this.eventManager.addEventListener(target, event, decoratePreventDefault(callback));
            }
        }]);

        return DefaultDomRendererV2;
    }();

    var EmulatedEncapsulationDomRendererV2 = function (_DefaultDomRendererV) {
        _inherits(EmulatedEncapsulationDomRendererV2, _DefaultDomRendererV);

        /**
         * @param {?} eventManager
         * @param {?} sharedStylesHost
         * @param {?} component
         */
        function EmulatedEncapsulationDomRendererV2(eventManager, sharedStylesHost, component) {
            _classCallCheck(this, EmulatedEncapsulationDomRendererV2);

            var _this16 = _possibleConstructorReturn(this, (EmulatedEncapsulationDomRendererV2.__proto__ || Object.getPrototypeOf(EmulatedEncapsulationDomRendererV2)).call(this, eventManager));

            _this16.component = component;
            var styles = flattenStyles(component.id, component.styles, []);
            sharedStylesHost.addStyles(styles);
            _this16.contentAttr = shimContentAttribute(component.id);
            _this16.hostAttr = shimHostAttribute(component.id);
            return _this16;
        }
        /**
         * @param {?} element
         * @return {?}
         */


        _createClass(EmulatedEncapsulationDomRendererV2, [{
            key: 'applyToHost',
            value: function applyToHost(element) {
                _get(EmulatedEncapsulationDomRendererV2.prototype.__proto__ || Object.getPrototypeOf(EmulatedEncapsulationDomRendererV2.prototype), 'setAttribute', this).call(this, element, this.hostAttr, '');
            }
        }, {
            key: 'createElement',
            value: function createElement(parent, name) {
                var /** @type {?} */el = _get(EmulatedEncapsulationDomRendererV2.prototype.__proto__ || Object.getPrototypeOf(EmulatedEncapsulationDomRendererV2.prototype), 'createElement', this).call(this, parent, name);
                _get(EmulatedEncapsulationDomRendererV2.prototype.__proto__ || Object.getPrototypeOf(EmulatedEncapsulationDomRendererV2.prototype), 'setAttribute', this).call(this, el, this.contentAttr, '');
                return el;
            }
        }]);

        return EmulatedEncapsulationDomRendererV2;
    }(DefaultDomRendererV2);

    var ShadowDomRenderer = function (_DefaultDomRendererV2) {
        _inherits(ShadowDomRenderer, _DefaultDomRendererV2);

        /**
         * @param {?} eventManager
         * @param {?} sharedStylesHost
         * @param {?} hostEl
         * @param {?} component
         */
        function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
            _classCallCheck(this, ShadowDomRenderer);

            var _this17 = _possibleConstructorReturn(this, (ShadowDomRenderer.__proto__ || Object.getPrototypeOf(ShadowDomRenderer)).call(this, eventManager));

            _this17.sharedStylesHost = sharedStylesHost;
            _this17.hostEl = hostEl;
            _this17.component = component;
            _this17.shadowRoot = hostEl.createShadowRoot();
            _this17.sharedStylesHost.addHost(_this17.shadowRoot);
            var styles = flattenStyles(component.id, component.styles, []);
            for (var i = 0; i < styles.length; i++) {
                var styleEl = document.createElement('style');
                styleEl.textContent = styles[i];
                _this17.shadowRoot.appendChild(styleEl);
            }
            return _this17;
        }
        /**
         * @param {?} node
         * @return {?}
         */


        _createClass(ShadowDomRenderer, [{
            key: 'nodeOrShadowRoot',
            value: function nodeOrShadowRoot(node) {
                return node === this.hostEl ? this.shadowRoot : node;
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.sharedStylesHost.removeHost(this.shadowRoot);
            }
        }, {
            key: 'appendChild',
            value: function appendChild(parent, newChild) {
                return _get(ShadowDomRenderer.prototype.__proto__ || Object.getPrototypeOf(ShadowDomRenderer.prototype), 'appendChild', this).call(this, this.nodeOrShadowRoot(parent), newChild);
            }
        }, {
            key: 'insertBefore',
            value: function insertBefore(parent, newChild, refChild) {
                return _get(ShadowDomRenderer.prototype.__proto__ || Object.getPrototypeOf(ShadowDomRenderer.prototype), 'insertBefore', this).call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
            }
        }, {
            key: 'removeChild',
            value: function removeChild(parent, oldChild) {
                return _get(ShadowDomRenderer.prototype.__proto__ || Object.getPrototypeOf(ShadowDomRenderer.prototype), 'removeChild', this).call(this, this.nodeOrShadowRoot(parent), oldChild);
            }
        }, {
            key: 'parentNode',
            value: function parentNode(node) {
                return this.nodeOrShadowRoot(_get(ShadowDomRenderer.prototype.__proto__ || Object.getPrototypeOf(ShadowDomRenderer.prototype), 'parentNode', this).call(this, this.nodeOrShadowRoot(node)));
            }
        }]);

        return ShadowDomRenderer;
    }(DefaultDomRendererV2);

    var /** @type {?} */CORE_TOKENS = {
        'ApplicationRef': core.ApplicationRef,
        'NgZone': core.NgZone
    };
    var /** @type {?} */INSPECT_GLOBAL_NAME = 'ng.probe';
    var /** @type {?} */CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
    /**
     * Returns a {\@link DebugElement} for the given native DOM element, or
     * null if the given native element does not have an Angular view associated
     * with it.
     * @param {?} element
     * @return {?}
     */
    function inspectNativeElement(element) {
        return core.getDebugNode(element);
    }
    /**
     * Deprecated. Use the one from '\@angular/core'.
     * @deprecated
     */

    var NgProbeToken =
    /**
     * @param {?} name
     * @param {?} token
     */
    function NgProbeToken(name, token) {
        _classCallCheck(this, NgProbeToken);

        this.name = name;
        this.token = token;
    };

    /**
     * @param {?} rootRenderer
     * @param {?} extraTokens
     * @param {?} coreTokens
     * @return {?}
     */
    function _createConditionalRootRenderer(rootRenderer, extraTokens, coreTokens) {
        return core.isDevMode() ? _createRootRenderer(rootRenderer, (extraTokens || []).concat(coreTokens || [])) : rootRenderer;
    }
    /**
     * @param {?} rootRenderer
     * @param {?} extraTokens
     * @return {?}
     */
    function _createRootRenderer(rootRenderer, extraTokens) {
        getDOM().setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
        getDOM().setGlobalVar(CORE_TOKENS_GLOBAL_NAME, StringMapWrapper.merge(CORE_TOKENS, _ngProbeTokensToMap(extraTokens || [])));
        return new core.ɵDebugDomRootRenderer(rootRenderer);
    }
    /**
     * @param {?} tokens
     * @return {?}
     */
    function _ngProbeTokensToMap(tokens) {
        return tokens.reduce(function (prev, t) {
            return prev[t.name] = t.token, prev;
        }, {});
    }
    /**
     * Providers which support debugging Angular applications (e.g. via `ng.probe`).
     */
    var /** @type {?} */ELEMENT_PROBE_PROVIDERS = [{
        provide: core.RootRenderer,
        useFactory: _createConditionalRootRenderer,
        deps: [DomRootRenderer, [NgProbeToken, new core.Optional()], [core.NgProbeToken, new core.Optional()]]
    }];

    var DomEventsPlugin = function (_EventManagerPlugin) {
        _inherits(DomEventsPlugin, _EventManagerPlugin);

        /**
         * @param {?} doc
         */
        function DomEventsPlugin(doc) {
            _classCallCheck(this, DomEventsPlugin);

            return _possibleConstructorReturn(this, (DomEventsPlugin.__proto__ || Object.getPrototypeOf(DomEventsPlugin)).call(this, doc));
        }
        /**
         * @param {?} eventName
         * @return {?}
         */


        _createClass(DomEventsPlugin, [{
            key: 'supports',
            value: function supports(eventName) {
                return true;
            }
        }, {
            key: 'addEventListener',
            value: function addEventListener(element, eventName, handler) {
                element.addEventListener(eventName, /** @type {?} */handler, false);
                return function () {
                    return element.removeEventListener(eventName, /** @type {?} */handler, false);
                };
            }
        }]);

        return DomEventsPlugin;
    }(EventManagerPlugin);

    DomEventsPlugin.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    DomEventsPlugin.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [DOCUMENT] }] }];
    };

    var /** @type {?} */EVENT_NAMES = {
        // pan
        'pan': true,
        'panstart': true,
        'panmove': true,
        'panend': true,
        'pancancel': true,
        'panleft': true,
        'panright': true,
        'panup': true,
        'pandown': true,
        // pinch
        'pinch': true,
        'pinchstart': true,
        'pinchmove': true,
        'pinchend': true,
        'pinchcancel': true,
        'pinchin': true,
        'pinchout': true,
        // press
        'press': true,
        'pressup': true,
        // rotate
        'rotate': true,
        'rotatestart': true,
        'rotatemove': true,
        'rotateend': true,
        'rotatecancel': true,
        // swipe
        'swipe': true,
        'swipeleft': true,
        'swiperight': true,
        'swipeup': true,
        'swipedown': true,
        // tap
        'tap': true
    };
    /**
     * A DI token that you can use to provide{@link HammerGestureConfig} to Angular. Use it to configure
     * Hammer gestures.
     *
     * @experimental
     */
    var /** @type {?} */HAMMER_GESTURE_CONFIG = new _core.InjectionToken('HammerGestureConfig');
    /**
     * \@experimental
     */

    var HammerGestureConfig = function () {
        function HammerGestureConfig() {
            _classCallCheck(this, HammerGestureConfig);

            this.events = [];
            this.overrides = {};
        }
        /**
         * @param {?} element
         * @return {?}
         */


        _createClass(HammerGestureConfig, [{
            key: 'buildHammer',
            value: function buildHammer(element) {
                var /** @type {?} */mc = new Hammer(element);
                mc.get('pinch').set({ enable: true });
                mc.get('rotate').set({ enable: true });
                for (var /** @type {?} */eventName in this.overrides) {
                    mc.get(eventName).set(this.overrides[eventName]);
                }
                return mc;
            }
        }]);

        return HammerGestureConfig;
    }();

    HammerGestureConfig.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    HammerGestureConfig.ctorParameters = function () {
        return [];
    };

    var HammerGesturesPlugin = function (_EventManagerPlugin2) {
        _inherits(HammerGesturesPlugin, _EventManagerPlugin2);

        /**
         * @param {?} doc
         * @param {?} _config
         */
        function HammerGesturesPlugin(doc, _config) {
            _classCallCheck(this, HammerGesturesPlugin);

            var _this19 = _possibleConstructorReturn(this, (HammerGesturesPlugin.__proto__ || Object.getPrototypeOf(HammerGesturesPlugin)).call(this, doc));

            _this19._config = _config;
            return _this19;
        }
        /**
         * @param {?} eventName
         * @return {?}
         */


        _createClass(HammerGesturesPlugin, [{
            key: 'supports',
            value: function supports(eventName) {
                if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
                    return false;
                }
                if (!window.Hammer) {
                    throw new Error('Hammer.js is not loaded, can not bind ' + eventName + ' event');
                }
                return true;
            }
        }, {
            key: 'addEventListener',
            value: function addEventListener(element, eventName, handler) {
                var _this20 = this;

                var /** @type {?} */zone = this.manager.getZone();
                eventName = eventName.toLowerCase();
                return zone.runOutsideAngular(function () {
                    // Creating the manager bind events, must be done outside of angular
                    var /** @type {?} */mc = _this20._config.buildHammer(element);
                    var /** @type {?} */callback = function callback(eventObj) {
                        zone.runGuarded(function () {
                            handler(eventObj);
                        });
                    };
                    mc.on(eventName, callback);
                    return function () {
                        return mc.off(eventName, callback);
                    };
                });
            }
        }, {
            key: 'isCustomEvent',
            value: function isCustomEvent(eventName) {
                return this._config.events.indexOf(eventName) > -1;
            }
        }]);

        return HammerGesturesPlugin;
    }(EventManagerPlugin);

    HammerGesturesPlugin.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    HammerGesturesPlugin.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [DOCUMENT] }] }, { type: HammerGestureConfig, decorators: [{ type: _core.Inject, args: [HAMMER_GESTURE_CONFIG] }] }];
    };

    var /** @type {?} */MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
    var /** @type {?} */MODIFIER_KEY_GETTERS = {
        'alt': function alt(event) {
            return event.altKey;
        },
        'control': function control(event) {
            return event.ctrlKey;
        },
        'meta': function meta(event) {
            return event.metaKey;
        },
        'shift': function shift(event) {
            return event.shiftKey;
        }
    };
    /**
     * \@experimental
     */

    var KeyEventsPlugin = function (_EventManagerPlugin3) {
        _inherits(KeyEventsPlugin, _EventManagerPlugin3);

        /**
         * @param {?} doc
         */
        function KeyEventsPlugin(doc) {
            _classCallCheck(this, KeyEventsPlugin);

            return _possibleConstructorReturn(this, (KeyEventsPlugin.__proto__ || Object.getPrototypeOf(KeyEventsPlugin)).call(this, doc));
        }
        /**
         * @param {?} eventName
         * @return {?}
         */


        _createClass(KeyEventsPlugin, [{
            key: 'supports',
            value: function supports(eventName) {
                return KeyEventsPlugin.parseEventName(eventName) != null;
            }
        }, {
            key: 'addEventListener',
            value: function addEventListener(element, eventName, handler) {
                var /** @type {?} */parsedEvent = KeyEventsPlugin.parseEventName(eventName);
                var /** @type {?} */outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
                return this.manager.getZone().runOutsideAngular(function () {
                    return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
                });
            }
        }], [{
            key: 'parseEventName',
            value: function parseEventName(eventName) {
                var /** @type {?} */parts = eventName.toLowerCase().split('.');
                var /** @type {?} */domEventName = parts.shift();
                if (parts.length === 0 || !(domEventName === 'keydown' || domEventName === 'keyup')) {
                    return null;
                }
                var /** @type {?} */key = KeyEventsPlugin._normalizeKey(parts.pop());
                var /** @type {?} */fullKey = '';
                MODIFIER_KEYS.forEach(function (modifierName) {
                    var /** @type {?} */index = parts.indexOf(modifierName);
                    if (index > -1) {
                        parts.splice(index, 1);
                        fullKey += modifierName + '.';
                    }
                });
                fullKey += key;
                if (parts.length != 0 || key.length === 0) {
                    // returning null instead of throwing to let another plugin process the event
                    return null;
                }
                var /** @type {?} */result = {};
                result['domEventName'] = domEventName;
                result['fullKey'] = fullKey;
                return result;
            }
        }, {
            key: 'getEventFullKey',
            value: function getEventFullKey(event) {
                var /** @type {?} */fullKey = '';
                var /** @type {?} */key = getDOM().getEventKey(event);
                key = key.toLowerCase();
                if (key === ' ') {
                    key = 'space'; // for readability
                } else if (key === '.') {
                    key = 'dot'; // because '.' is used as a separator in event names
                }
                MODIFIER_KEYS.forEach(function (modifierName) {
                    if (modifierName != key) {
                        var /** @type {?} */modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                        if (modifierGetter(event)) {
                            fullKey += modifierName + '.';
                        }
                    }
                });
                fullKey += key;
                return fullKey;
            }
        }, {
            key: 'eventCallback',
            value: function eventCallback(fullKey, handler, zone) {
                return function (event /** TODO #9100 */) {
                    if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
                        zone.runGuarded(function () {
                            return handler(event);
                        });
                    }
                };
            }
        }, {
            key: '_normalizeKey',
            value: function _normalizeKey(keyName) {
                // TODO: switch to a Map if the mapping grows too much
                switch (keyName) {
                    case 'esc':
                        return 'escape';
                    default:
                        return keyName;
                }
            }
        }]);

        return KeyEventsPlugin;
    }(EventManagerPlugin);

    KeyEventsPlugin.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    KeyEventsPlugin.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [DOCUMENT] }] }];
    };

    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * This regular expression matches a subset of URLs that will not cause script
     * execution if used in URL context within a HTML document. Specifically, this
     * regular expression matches if (comment from here on and regex copied from
     * Soy's EscapingConventions):
     * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
     * (2) or no protocol.  A protocol must be followed by a colon. The below
     *     allows that by allowing colons only after one of the characters [/?#].
     *     A colon after a hash (#) must be in the fragment.
     *     Otherwise, a colon after a (?) must be in a query.
     *     Otherwise, a colon after a single solidus (/) must be in a path.
     *     Otherwise, a colon after a double solidus (//) must be in the authority
     *     (before port).
     *
     * The pattern disallows &, used in HTML entity declarations before
     * one of the characters in [/?#]. This disallows HTML entities used in the
     * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
     * It also disallows HTML entities in the first path part of a relative path,
     * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
     * that. More importantly, it disallows masking of a colon,
     * e.g. "javascript&#58;...".
     *
     * This regular expression was taken from the Closure sanitization library.
     */
    var /** @type {?} */SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
    /** A pattern that matches safe data URLs. Only matches image, video and audio types. */
    var /** @type {?} */DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    /**
     * @param {?} url
     * @return {?}
     */
    function sanitizeUrl(url) {
        url = String(url);
        if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN)) return url;
        if ((0, _core.isDevMode)()) {
            getDOM().log('WARNING: sanitizing unsafe URL value ' + url + ' (see http://g.co/ng/security#xss)');
        }
        return 'unsafe:' + url;
    }
    /**
     * @param {?} srcset
     * @return {?}
     */
    function sanitizeSrcset(srcset) {
        srcset = String(srcset);
        return srcset.split(',').map(function (srcset) {
            return sanitizeUrl(srcset.trim());
        }).join(', ');
    }

    /** A <body> element that can be safely used to parse untrusted HTML. Lazily initialized below. */
    var /** @type {?} */inertElement = null;
    /** Lazily initialized to make sure the DOM adapter gets set before use. */
    var /** @type {?} */DOM = null;
    /**
     * Returns an HTML element that is guaranteed to not execute code when creating elements in it.
     * @return {?}
     */
    function getInertElement() {
        if (inertElement) return inertElement;
        DOM = getDOM();
        // Prefer using <template> element if supported.
        var /** @type {?} */templateEl = DOM.createElement('template');
        if ('content' in templateEl) return templateEl;
        var /** @type {?} */doc = DOM.createHtmlDocument();
        inertElement = DOM.querySelector(doc, 'body');
        if (inertElement == null) {
            // usually there should be only one body element in the document, but IE doesn't have any, so we
            // need to create one.
            var /** @type {?} */html = DOM.createElement('html', doc);
            inertElement = DOM.createElement('body', doc);
            DOM.appendChild(html, inertElement);
            DOM.appendChild(doc, html);
        }
        return inertElement;
    }
    /**
     * @param {?} tags
     * @return {?}
     */
    function tagSet(tags) {
        var /** @type {?} */res = {};
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = tags.split(',')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var t = _step4.value;

                res[t] = true;
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        return res;
    }
    /**
     * @param {...?} sets
     * @return {?}
     */
    function merge() {
        var /** @type {?} */res = {};

        for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
            sets[_key] = arguments[_key];
        }

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = sets[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var s = _step5.value;

                for (var /** @type {?} */v in s) {
                    if (s.hasOwnProperty(v)) res[v] = true;
                }
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }

        return res;
    }
    // Good source of info about elements and attributes
    // http://dev.w3.org/html5/spec/Overview.html#semantics
    // http://simon.html5.org/html-elements
    // Safe Void Elements - HTML5
    // http://dev.w3.org/html5/spec/Overview.html#void-elements
    var /** @type {?} */VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
    // Elements that you can, intentionally, leave open (and which close themselves)
    // http://dev.w3.org/html5/spec/Overview.html#optional-tags
    var /** @type {?} */OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
    var /** @type {?} */OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
    var /** @type {?} */OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
    // Safe Block Elements - HTML5
    var /** @type {?} */BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' + 'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' + 'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
    // Inline Elements - HTML5
    var /** @type {?} */INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' + 'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' + 'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
    var /** @type {?} */VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
    // Attributes that have href and hence need to be sanitized
    var /** @type {?} */URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
    // Attributes that have special href set hence need to be sanitized
    var /** @type {?} */SRCSET_ATTRS = tagSet('srcset');
    var /** @type {?} */HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' + 'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' + 'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' + 'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' + 'valign,value,vspace,width');
    // NB: This currently conciously doesn't support SVG. SVG sanitization has had several security
    // issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
    // innerHTML is required, SVG attributes should be added here.
    // NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
    // can be sanitized, but they increase security surface area without a legitimate use case, so they
    // are left out here.
    var /** @type {?} */VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
    /**
     * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
     * attributes.
     */

    var SanitizingHtmlSerializer = function () {
        function SanitizingHtmlSerializer() {
            _classCallCheck(this, SanitizingHtmlSerializer);

            this.sanitizedSomething = false;
            this.buf = [];
        }
        /**
         * @param {?} el
         * @return {?}
         */


        _createClass(SanitizingHtmlSerializer, [{
            key: 'sanitizeChildren',
            value: function sanitizeChildren(el) {
                // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
                // However this code never accesses properties off of `document` before deleting its contents
                // again, so it shouldn't be vulnerable to DOM clobbering.
                var /** @type {?} */current = el.firstChild;
                while (current) {
                    if (DOM.isElementNode(current)) {
                        this.startElement( /** @type {?} */current);
                    } else if (DOM.isTextNode(current)) {
                        this.chars(DOM.nodeValue(current));
                    } else {
                        // Strip non-element, non-text nodes.
                        this.sanitizedSomething = true;
                    }
                    if (DOM.firstChild(current)) {
                        current = DOM.firstChild(current);
                        continue;
                    }
                    while (current) {
                        // Leaving the element. Walk up and to the right, closing tags as we go.
                        if (DOM.isElementNode(current)) {
                            this.endElement( /** @type {?} */current);
                        }
                        if (DOM.nextSibling(current)) {
                            current = DOM.nextSibling(current);
                            break;
                        }
                        current = DOM.parentElement(current);
                    }
                }
                return this.buf.join('');
            }
        }, {
            key: 'startElement',
            value: function startElement(element) {
                var _this22 = this;

                var /** @type {?} */tagName = DOM.nodeName(element).toLowerCase();
                if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
                    this.sanitizedSomething = true;
                    return;
                }
                this.buf.push('<');
                this.buf.push(tagName);
                DOM.attributeMap(element).forEach(function (value, attrName) {
                    var /** @type {?} */lower = attrName.toLowerCase();
                    if (!VALID_ATTRS.hasOwnProperty(lower)) {
                        _this22.sanitizedSomething = true;
                        return;
                    }
                    // TODO(martinprobst): Special case image URIs for data:image/...
                    if (URI_ATTRS[lower]) value = sanitizeUrl(value);
                    if (SRCSET_ATTRS[lower]) value = sanitizeSrcset(value);
                    _this22.buf.push(' ');
                    _this22.buf.push(attrName);
                    _this22.buf.push('="');
                    _this22.buf.push(encodeEntities(value));
                    _this22.buf.push('"');
                });
                this.buf.push('>');
            }
        }, {
            key: 'endElement',
            value: function endElement(current) {
                var /** @type {?} */tagName = DOM.nodeName(current).toLowerCase();
                if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
                    this.buf.push('</');
                    this.buf.push(tagName);
                    this.buf.push('>');
                }
            }
        }, {
            key: 'chars',
            value: function chars(_chars /** TODO #9100 */) {
                this.buf.push(encodeEntities(_chars));
            }
        }]);

        return SanitizingHtmlSerializer;
    }();

    // Regular Expressions for parsing tags and attributes
    var /** @type {?} */SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    // ! to ~ is the ASCII range.
    var /** @type {?} */NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
    /**
     * Escapes all potentially dangerous characters, so that the
     * resulting string can be safely inserted into attribute or
     * element text.
     * @param {?} value
     * @return {?}
     */
    function encodeEntities(value) {
        return value.replace(/&/g, '&amp;').replace(SURROGATE_PAIR_REGEXP, function (match) {
            var /** @type {?} */hi = match.charCodeAt(0);
            var /** @type {?} */low = match.charCodeAt(1);
            return '&#' + ((hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000) + ';';
        }).replace(NON_ALPHANUMERIC_REGEXP, function (match) {
            return '&#' + match.charCodeAt(0) + ';';
        }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    /**
     * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
     * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo').
     *
     * This is undesirable since we don't want to allow any of these custom attributes. This method
     * strips them all.
     * @param {?} el
     * @return {?}
     */
    function stripCustomNsAttrs(el) {
        DOM.attributeMap(el).forEach(function (_, attrName) {
            if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
                DOM.removeAttribute(el, attrName);
            }
        });
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = DOM.childNodesAsList(el)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var n = _step6.value;

                if (DOM.isElementNode(n)) stripCustomNsAttrs( /** @type {?} */n);
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
    }
    /**
     * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
     * the DOM in a browser environment.
     * @param {?} defaultDoc
     * @param {?} unsafeHtmlInput
     * @return {?}
     */
    function sanitizeHtml(defaultDoc, unsafeHtmlInput) {
        try {
            var /** @type {?} */containerEl = getInertElement();
            // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
            var /** @type {?} */unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
            // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
            // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
            var /** @type {?} */mXSSAttempts = 5;
            var /** @type {?} */parsedHtml = unsafeHtml;
            do {
                if (mXSSAttempts === 0) {
                    throw new Error('Failed to sanitize html because the input is unstable');
                }
                mXSSAttempts--;
                unsafeHtml = parsedHtml;
                DOM.setInnerHTML(containerEl, unsafeHtml);
                if (defaultDoc.documentMode) {
                    // strip custom-namespaced attributes on IE<=11
                    stripCustomNsAttrs(containerEl);
                }
                parsedHtml = DOM.getInnerHTML(containerEl);
            } while (unsafeHtml !== parsedHtml);
            var /** @type {?} */sanitizer = new SanitizingHtmlSerializer();
            var /** @type {?} */safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl) || containerEl);
            // Clear out the body element.
            var /** @type {?} */parent = DOM.getTemplateContent(containerEl) || containerEl;
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = DOM.childNodesAsList(parent)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var child = _step7.value;

                    DOM.removeChild(parent, child);
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            if ((0, _core.isDevMode)() && sanitizer.sanitizedSomething) {
                DOM.log('WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).');
            }
            return safeHtml;
        } catch (e) {
            // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
            inertElement = null;
            throw e;
        }
    }

    /**
     * Regular expression for safe style values.
     *
     * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
     *
     * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
     * font-family) and hence could allow multiple values to get injected, but that should pose no risk
     * of XSS.
     *
     * The function expression checks only for XSS safety, not for CSS validity.
     *
     * This regular expression was taken from the Closure sanitization library, and augmented for
     * transformation values.
     */
    var /** @type {?} */VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
    var /** @type {?} */TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
    var /** @type {?} */COLOR_FNS = '(?:rgb|hsl)a?';
    var /** @type {?} */GRADIENTS = '(?:repeating-)?(?:linear|radial)-gradient';
    var /** @type {?} */CSS3_FNS = '(?:calc|attr)';
    var /** @type {?} */FN_ARGS = '\\([-0-9.%, #a-zA-Z]+\\)';
    var /** @type {?} */SAFE_STYLE_VALUE = new RegExp('^(' + VALUES + '|' + ('(?:' + TRANSFORMATION_FNS + '|' + COLOR_FNS + '|' + GRADIENTS + '|' + CSS3_FNS + ')') + (FN_ARGS + ')$'), 'g');
    /**
     * Matches a `url(...)` value with an arbitrary argument as long as it does
     * not contain parentheses.
     *
     * The URL value still needs to be sanitized separately.
     *
     * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
     * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
     * by observing whether scroll bars are displayed, or character ranges used by a font face
     * definition.
     *
     * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
     * binding a URL value without further cooperation from the page will cause an information leak, and
     * if so, it is just a leak, not a full blown XSS vulnerability.
     *
     * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
     * code is permissive and allows URLs that sanitize otherwise.
     */
    var /** @type {?} */URL_RE = /^url\(([^)]+)\)$/;
    /**
     * Checks that quotes (" and ') are properly balanced inside a string. Assumes
     * that neither escape (\) nor any other character that could result in
     * breaking out of a string parsing context are allowed;
     * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
     *
     * This code was taken from the Closure sanitization library.
     * @param {?} value
     * @return {?}
     */
    function hasBalancedQuotes(value) {
        var /** @type {?} */outsideSingle = true;
        var /** @type {?} */outsideDouble = true;
        for (var /** @type {?} */i = 0; i < value.length; i++) {
            var /** @type {?} */c = value.charAt(i);
            if (c === '\'' && outsideDouble) {
                outsideSingle = !outsideSingle;
            } else if (c === '"' && outsideSingle) {
                outsideDouble = !outsideDouble;
            }
        }
        return outsideSingle && outsideDouble;
    }
    /**
     * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
     * value) and returns a value that is safe to use in a browser environment.
     * @param {?} value
     * @return {?}
     */
    function sanitizeStyle(value) {
        value = String(value).trim(); // Make sure it's actually a string.
        if (!value) return '';
        // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
        // reasoning behind this.
        var /** @type {?} */urlMatch = value.match(URL_RE);
        if (urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1] || value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
            return value; // Safe style values.
        }
        if ((0, _core.isDevMode)()) {
            getDOM().log('WARNING: sanitizing unsafe style value ' + value + ' (see http://g.co/ng/security#xss).');
        }
        return 'unsafe';
    }

    /**
     * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
     * values to be safe to use in the different DOM contexts.
     *
     * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
     * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
     * the website.
     *
     * In specific situations, it might be necessary to disable sanitization, for example if the
     * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
     * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
     * methods, and then binding to that value from the template.
     *
     * These situations should be very rare, and extraordinary care must be taken to avoid creating a
     * Cross Site Scripting (XSS) security bug!
     *
     * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
     * close as possible to the source of the value, to make it easy to verify no security bug is
     * created by its use.
     *
     * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
     * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
     * code. The sanitizer leaves safe values intact.
     *
     * \@security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
     * sanitization for the value passed in. Carefully check and audit all values and code paths going
     * into this call. Make sure any user data is appropriately escaped for this security context.
     * For more detail, see the [Security Guide](http://g.co/ng/security).
     *
     * \@stable
     * @abstract
     */

    var DomSanitizer = function () {
        function DomSanitizer() {
            _classCallCheck(this, DomSanitizer);
        }

        _createClass(DomSanitizer, [{
            key: 'sanitize',
            value: function sanitize(context, value) {}
        }, {
            key: 'bypassSecurityTrustHtml',
            value: function bypassSecurityTrustHtml(value) {}
        }, {
            key: 'bypassSecurityTrustStyle',
            value: function bypassSecurityTrustStyle(value) {}
        }, {
            key: 'bypassSecurityTrustScript',
            value: function bypassSecurityTrustScript(value) {}
        }, {
            key: 'bypassSecurityTrustUrl',
            value: function bypassSecurityTrustUrl(value) {}
        }, {
            key: 'bypassSecurityTrustResourceUrl',
            value: function bypassSecurityTrustResourceUrl(value) {}
        }]);

        return DomSanitizer;
    }();

    var DomSanitizerImpl = function (_DomSanitizer) {
        _inherits(DomSanitizerImpl, _DomSanitizer);

        /**
         * @param {?} _doc
         */
        function DomSanitizerImpl(_doc) {
            _classCallCheck(this, DomSanitizerImpl);

            var _this23 = _possibleConstructorReturn(this, (DomSanitizerImpl.__proto__ || Object.getPrototypeOf(DomSanitizerImpl)).call(this));

            _this23._doc = _doc;
            return _this23;
        }
        /**
         * @param {?} ctx
         * @param {?} value
         * @return {?}
         */


        _createClass(DomSanitizerImpl, [{
            key: 'sanitize',
            value: function sanitize(ctx, value) {
                if (value == null) return null;
                switch (ctx) {
                    case _core.SecurityContext.NONE:
                        return value;
                    case _core.SecurityContext.HTML:
                        if (value instanceof SafeHtmlImpl) return value.changingThisBreaksApplicationSecurity;
                        this.checkNotSafeValue(value, 'HTML');
                        return sanitizeHtml(this._doc, String(value));
                    case _core.SecurityContext.STYLE:
                        if (value instanceof SafeStyleImpl) return value.changingThisBreaksApplicationSecurity;
                        this.checkNotSafeValue(value, 'Style');
                        return sanitizeStyle(value);
                    case _core.SecurityContext.SCRIPT:
                        if (value instanceof SafeScriptImpl) return value.changingThisBreaksApplicationSecurity;
                        this.checkNotSafeValue(value, 'Script');
                        throw new Error('unsafe value used in a script context');
                    case _core.SecurityContext.URL:
                        if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
                            // Allow resource URLs in URL contexts, they are strictly more trusted.
                            return value.changingThisBreaksApplicationSecurity;
                        }
                        this.checkNotSafeValue(value, 'URL');
                        return sanitizeUrl(String(value));
                    case _core.SecurityContext.RESOURCE_URL:
                        if (value instanceof SafeResourceUrlImpl) {
                            return value.changingThisBreaksApplicationSecurity;
                        }
                        this.checkNotSafeValue(value, 'ResourceURL');
                        throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
                    default:
                        throw new Error('Unexpected SecurityContext ' + ctx + ' (see http://g.co/ng/security#xss)');
                }
            }
        }, {
            key: 'checkNotSafeValue',
            value: function checkNotSafeValue(value, expectedType) {
                if (value instanceof SafeValueImpl) {
                    throw new Error('Required a safe ' + expectedType + ', got a ' + value.getTypeName() + ' ' + '(see http://g.co/ng/security#xss)');
                }
            }
        }, {
            key: 'bypassSecurityTrustHtml',
            value: function bypassSecurityTrustHtml(value) {
                return new SafeHtmlImpl(value);
            }
        }, {
            key: 'bypassSecurityTrustStyle',
            value: function bypassSecurityTrustStyle(value) {
                return new SafeStyleImpl(value);
            }
        }, {
            key: 'bypassSecurityTrustScript',
            value: function bypassSecurityTrustScript(value) {
                return new SafeScriptImpl(value);
            }
        }, {
            key: 'bypassSecurityTrustUrl',
            value: function bypassSecurityTrustUrl(value) {
                return new SafeUrlImpl(value);
            }
        }, {
            key: 'bypassSecurityTrustResourceUrl',
            value: function bypassSecurityTrustResourceUrl(value) {
                return new SafeResourceUrlImpl(value);
            }
        }]);

        return DomSanitizerImpl;
    }(DomSanitizer);

    DomSanitizerImpl.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    DomSanitizerImpl.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Inject, args: [DOCUMENT] }] }];
    };
    /**
     * @abstract
     */

    var SafeValueImpl = function () {
        /**
         * @param {?} changingThisBreaksApplicationSecurity
         */
        function SafeValueImpl(changingThisBreaksApplicationSecurity) {
            _classCallCheck(this, SafeValueImpl);

            this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
            // empty
        }
        /**
         * @abstract
         * @return {?}
         */


        _createClass(SafeValueImpl, [{
            key: 'getTypeName',
            value: function getTypeName() {}
        }, {
            key: 'toString',
            value: function toString() {
                return 'SafeValue must use [property]=binding: ' + this.changingThisBreaksApplicationSecurity + ' (see http://g.co/ng/security#xss)';
            }
        }]);

        return SafeValueImpl;
    }();

    var SafeHtmlImpl = function (_SafeValueImpl) {
        _inherits(SafeHtmlImpl, _SafeValueImpl);

        function SafeHtmlImpl() {
            _classCallCheck(this, SafeHtmlImpl);

            return _possibleConstructorReturn(this, (SafeHtmlImpl.__proto__ || Object.getPrototypeOf(SafeHtmlImpl)).apply(this, arguments));
        }

        _createClass(SafeHtmlImpl, [{
            key: 'getTypeName',
            value: function getTypeName() {
                return 'HTML';
            }
        }]);

        return SafeHtmlImpl;
    }(SafeValueImpl);

    var SafeStyleImpl = function (_SafeValueImpl2) {
        _inherits(SafeStyleImpl, _SafeValueImpl2);

        function SafeStyleImpl() {
            _classCallCheck(this, SafeStyleImpl);

            return _possibleConstructorReturn(this, (SafeStyleImpl.__proto__ || Object.getPrototypeOf(SafeStyleImpl)).apply(this, arguments));
        }

        _createClass(SafeStyleImpl, [{
            key: 'getTypeName',
            value: function getTypeName() {
                return 'Style';
            }
        }]);

        return SafeStyleImpl;
    }(SafeValueImpl);

    var SafeScriptImpl = function (_SafeValueImpl3) {
        _inherits(SafeScriptImpl, _SafeValueImpl3);

        function SafeScriptImpl() {
            _classCallCheck(this, SafeScriptImpl);

            return _possibleConstructorReturn(this, (SafeScriptImpl.__proto__ || Object.getPrototypeOf(SafeScriptImpl)).apply(this, arguments));
        }

        _createClass(SafeScriptImpl, [{
            key: 'getTypeName',
            value: function getTypeName() {
                return 'Script';
            }
        }]);

        return SafeScriptImpl;
    }(SafeValueImpl);

    var SafeUrlImpl = function (_SafeValueImpl4) {
        _inherits(SafeUrlImpl, _SafeValueImpl4);

        function SafeUrlImpl() {
            _classCallCheck(this, SafeUrlImpl);

            return _possibleConstructorReturn(this, (SafeUrlImpl.__proto__ || Object.getPrototypeOf(SafeUrlImpl)).apply(this, arguments));
        }

        _createClass(SafeUrlImpl, [{
            key: 'getTypeName',
            value: function getTypeName() {
                return 'URL';
            }
        }]);

        return SafeUrlImpl;
    }(SafeValueImpl);

    var SafeResourceUrlImpl = function (_SafeValueImpl5) {
        _inherits(SafeResourceUrlImpl, _SafeValueImpl5);

        function SafeResourceUrlImpl() {
            _classCallCheck(this, SafeResourceUrlImpl);

            return _possibleConstructorReturn(this, (SafeResourceUrlImpl.__proto__ || Object.getPrototypeOf(SafeResourceUrlImpl)).apply(this, arguments));
        }

        _createClass(SafeResourceUrlImpl, [{
            key: 'getTypeName',
            value: function getTypeName() {
                return 'ResourceURL';
            }
        }]);

        return SafeResourceUrlImpl;
    }(SafeValueImpl);

    var /** @type {?} */INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{ provide: _core.PLATFORM_ID, useValue: _common.ɵPLATFORM_BROWSER_ID }, { provide: _core.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true }, { provide: _common.PlatformLocation, useClass: BrowserPlatformLocation }, { provide: DOCUMENT, useFactory: _document, deps: [] }];
    /**
     * @security Replacing built-in sanitization providers exposes the application to XSS risks.
     * Attacker-controlled data introduced by an unsanitized provider could expose your
     * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
     * @experimental
     */
    var /** @type {?} */BROWSER_SANITIZATION_PROVIDERS = [{ provide: _core.Sanitizer, useExisting: DomSanitizer }, { provide: DomSanitizer, useClass: DomSanitizerImpl }];
    /**
     * @stable
     */
    var /** @type {?} */platformBrowser = (0, _core.createPlatformFactory)(_core.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
    /**
     * @return {?}
     */
    function initDomAdapter() {
        BrowserDomAdapter.makeCurrent();
        BrowserGetTestability.init();
    }
    /**
     * @return {?}
     */
    function errorHandler() {
        return new _core.ErrorHandler();
    }
    /**
     * @return {?}
     */
    function _document() {
        return document;
    }
    /**
     * @return {?}
     */
    function _resolveDefaultAnimationDriver() {
        if (getDOM().supportsWebAnimation()) {
            return new WebAnimationsDriver();
        }
        return AnimationDriver.NOOP;
    }
    /**
     * The ng module for the browser.
     *
     * \@stable
     */

    var BrowserModule = function () {
        /**
         * @param {?} parentModule
         */
        function BrowserModule(parentModule) {
            _classCallCheck(this, BrowserModule);

            if (parentModule) {
                throw new Error('BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.');
            }
        }
        /**
         * Configures a browser-based application to transition from a server-rendered app, if
         * one is present on the page. The specified parameters must include an application id,
         * which must match between the client and server applications.
         *
         * \@experimental
         * @param {?} params
         * @return {?}
         */


        _createClass(BrowserModule, null, [{
            key: 'withServerTransition',
            value: function withServerTransition(params) {
                return {
                    ngModule: BrowserModule,
                    providers: [{ provide: _core.APP_ID, useValue: params.appId }, { provide: TRANSITION_ID, useExisting: _core.APP_ID }, SERVER_TRANSITION_PROVIDERS]
                };
            }
        }]);

        return BrowserModule;
    }();

    BrowserModule.decorators = [{ type: _core.NgModule, args: [{
            providers: [BROWSER_SANITIZATION_PROVIDERS, { provide: _core.ErrorHandler, useFactory: errorHandler, deps: [] }, { provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true }, { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true }, { provide: EVENT_MANAGER_PLUGINS, useClass: HammerGesturesPlugin, multi: true }, { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }, { provide: DomRootRenderer, useClass: DomRootRenderer_ }, { provide: _core.RootRenderer, useExisting: DomRootRenderer }, DomRendererFactoryV2, { provide: _core.RendererFactoryV2, useExisting: DomRendererFactoryV2 }, { provide: SharedStylesHost, useExisting: DomSharedStylesHost }, { provide: AnimationDriver, useFactory: _resolveDefaultAnimationDriver }, DomSharedStylesHost, _core.Testability, EventManager, ELEMENT_PROBE_PROVIDERS, Meta, Title],
            exports: [_common.CommonModule, _core.ApplicationModule]
        }] }];
    /** @nocollapse */
    BrowserModule.ctorParameters = function () {
        return [{ type: BrowserModule, decorators: [{ type: _core.Optional }, { type: _core.SkipSelf }] }];
    };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * JS version of browser APIs. This library can only run in the browser.
     */
    var /** @type {?} */win = typeof window !== 'undefined' && window || {};

    var ChangeDetectionPerfRecord =
    /**
     * @param {?} msPerTick
     * @param {?} numTicks
     */
    function ChangeDetectionPerfRecord(msPerTick, numTicks) {
        _classCallCheck(this, ChangeDetectionPerfRecord);

        this.msPerTick = msPerTick;
        this.numTicks = numTicks;
    };

    var AngularProfiler = function () {
        /**
         * @param {?} ref
         */
        function AngularProfiler(ref) {
            _classCallCheck(this, AngularProfiler);

            this.appRef = ref.injector.get(_core.ApplicationRef);
        }
        /**
         * Exercises change detection in a loop and then prints the average amount of
         * time in milliseconds how long a single round of change detection takes for
         * the current state of the UI. It runs a minimum of 5 rounds for a minimum
         * of 500 milliseconds.
         *
         * Optionally, a user may pass a `config` parameter containing a map of
         * options. Supported options are:
         *
         * `record` (boolean) - causes the profiler to record a CPU profile while
         * it exercises the change detector. Example:
         *
         * ```
         * ng.profiler.timeChangeDetection({record: true})
         * ```
         * @param {?} config
         * @return {?}
         */


        _createClass(AngularProfiler, [{
            key: 'timeChangeDetection',
            value: function timeChangeDetection(config) {
                var /** @type {?} */record = config && config['record'];
                var /** @type {?} */profileName = 'Change Detection';
                // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
                var /** @type {?} */isProfilerAvailable = isPresent(win.console.profile);
                if (record && isProfilerAvailable) {
                    win.console.profile(profileName);
                }
                var /** @type {?} */start = getDOM().performanceNow();
                var /** @type {?} */numTicks = 0;
                while (numTicks < 5 || getDOM().performanceNow() - start < 500) {
                    this.appRef.tick();
                    numTicks++;
                }
                var /** @type {?} */end = getDOM().performanceNow();
                if (record && isProfilerAvailable) {
                    // need to cast to <any> because type checker thinks there's no argument
                    // while in fact there is:
                    //
                    // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
                    win.console.profileEnd(profileName);
                }
                var /** @type {?} */msPerTick = (end - start) / numTicks;
                win.console.log('ran ' + numTicks + ' change detection cycles');
                win.console.log(msPerTick.toFixed(2) + ' ms per check');
                return new ChangeDetectionPerfRecord(msPerTick, numTicks);
            }
        }]);

        return AngularProfiler;
    }();

    var /** @type {?} */PROFILER_GLOBAL_NAME = 'ng.profiler';
    /**
     * Enabled Angular debug tools that are accessible via your browser's
     * developer console.
     *
     * Usage:
     *
     * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
     * 1. Type `ng.` (usually the console will show auto-complete suggestion)
     * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
     *    then hit Enter.
     *
     * \@experimental All debugging apis are currently experimental.
     * @param {?} ref
     * @return {?}
     */
    function enableDebugTools(ref) {
        getDOM().setGlobalVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
        return ref;
    }
    /**
     * Disables Angular tools.
     *
     * \@experimental All debugging apis are currently experimental.
     * @return {?}
     */
    function disableDebugTools() {
        getDOM().setGlobalVar(PROFILER_GLOBAL_NAME, null);
    }

    /**
     * Predicates for use with {\@link DebugElement}'s query functions.
     *
     * \@experimental All debugging apis are currently experimental.
     */

    var By = function () {
        function By() {
            _classCallCheck(this, By);
        }

        _createClass(By, null, [{
            key: 'all',
            value: function all() {
                return function (debugElement) {
                    return true;
                };
            }
        }, {
            key: 'css',
            value: function css(selector) {
                return function (debugElement) {
                    return isPresent(debugElement.nativeElement) ? getDOM().elementMatches(debugElement.nativeElement, selector) : false;
                };
            }
        }, {
            key: 'directive',
            value: function directive(type) {
                return function (debugElement) {
                    return debugElement.providerTokens.indexOf(type) !== -1;
                };
            }
        }]);

        return By;
    }();

    /**
     * @stable
     */
    var /** @type {?} */VERSION = new _core.Version('4.0.0-rc.1');

    exports.BrowserModule = BrowserModule;
    exports.platformBrowser = platformBrowser;
    exports.Meta = Meta;
    exports.Title = Title;
    exports.disableDebugTools = disableDebugTools;
    exports.enableDebugTools = enableDebugTools;
    exports.AnimationDriver = AnimationDriver;
    exports.By = By;
    exports.NgProbeToken = NgProbeToken;
    exports.DOCUMENT = DOCUMENT;
    exports.EVENT_MANAGER_PLUGINS = EVENT_MANAGER_PLUGINS;
    exports.EventManager = EventManager;
    exports.HAMMER_GESTURE_CONFIG = HAMMER_GESTURE_CONFIG;
    exports.HammerGestureConfig = HammerGestureConfig;
    exports.DomSanitizer = DomSanitizer;
    exports.VERSION = VERSION;
    exports.ɵBROWSER_SANITIZATION_PROVIDERS = BROWSER_SANITIZATION_PROVIDERS;
    exports.ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS = INTERNAL_BROWSER_PLATFORM_PROVIDERS;
    exports.ɵinitDomAdapter = initDomAdapter;
    exports.ɵBrowserDomAdapter = BrowserDomAdapter;
    exports.ɵBrowserPlatformLocation = BrowserPlatformLocation;
    exports.ɵTRANSITION_ID = TRANSITION_ID;
    exports.ɵBrowserGetTestability = BrowserGetTestability;
    exports.ɵELEMENT_PROBE_PROVIDERS = ELEMENT_PROBE_PROVIDERS;
    exports.ɵDomAdapter = DomAdapter;
    exports.ɵgetDOM = getDOM;
    exports.ɵsetRootDomAdapter = setRootDomAdapter;
    exports.ɵDomRendererFactoryV2 = DomRendererFactoryV2;
    exports.ɵDomRootRenderer = DomRootRenderer;
    exports.ɵDomRootRenderer_ = DomRootRenderer_;
    exports.ɵNAMESPACE_URIS = NAMESPACE_URIS;
    exports.ɵflattenStyles = flattenStyles;
    exports.ɵisNamespaced = isNamespaced;
    exports.ɵshimContentAttribute = shimContentAttribute;
    exports.ɵshimHostAttribute = shimHostAttribute;
    exports.ɵsplitNamespace = splitNamespace;
    exports.ɵDomEventsPlugin = DomEventsPlugin;
    exports.ɵHammerGesturesPlugin = HammerGesturesPlugin;
    exports.ɵKeyEventsPlugin = KeyEventsPlugin;
    exports.ɵDomSharedStylesHost = DomSharedStylesHost;
    exports.ɵSharedStylesHost = SharedStylesHost;
    exports.ɵWebAnimationsDriver = WebAnimationsDriver;
    exports.ɵb = _document;
    exports.ɵc = _resolveDefaultAnimationDriver;
    exports.ɵa = errorHandler;
    exports.ɵi = GenericBrowserDomAdapter;
    exports.ɵh = SERVER_TRANSITION_PROVIDERS;
    exports.ɵg = bootstrapListenerFactory;
    exports.ɵd = _createConditionalRootRenderer;
    exports.ɵe = EventManagerPlugin;
    exports.ɵf = DomSanitizerImpl;
});
