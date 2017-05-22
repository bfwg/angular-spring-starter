(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/router', ['exports', '@angular/common', '@angular/core', 'rxjs/BehaviorSubject', 'rxjs/Subject', 'rxjs/observable/from', 'rxjs/observable/of', 'rxjs/operator/concatMap', 'rxjs/operator/every', 'rxjs/operator/first', 'rxjs/operator/map', 'rxjs/operator/mergeMap', 'rxjs/operator/reduce', 'rxjs/Observable', 'rxjs/operator/catch', 'rxjs/operator/concatAll', 'rxjs/util/EmptyError', 'rxjs/observable/fromPromise', 'rxjs/operator/last', 'rxjs/operator/mergeAll', '@angular/platform-browser', 'rxjs/operator/filter'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs/BehaviorSubject'), require('rxjs/Subject'), require('rxjs/observable/from'), require('rxjs/observable/of'), require('rxjs/operator/concatMap'), require('rxjs/operator/every'), require('rxjs/operator/first'), require('rxjs/operator/map'), require('rxjs/operator/mergeMap'), require('rxjs/operator/reduce'), require('rxjs/Observable'), require('rxjs/operator/catch'), require('rxjs/operator/concatAll'), require('rxjs/util/EmptyError'), require('rxjs/observable/fromPromise'), require('rxjs/operator/last'), require('rxjs/operator/mergeAll'), require('@angular/platform-browser'), require('rxjs/operator/filter'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.common, global.ng.core, global.Rx, global.Rx, global.Rx.Observable, global.Rx.Observable, global.Rx.Observable.prototype, global.Rx.Observable.prototype, global.Rx.Observable.prototype, global.Rx.Observable.prototype, global.Rx.Observable.prototype, global.Rx.Observable.prototype, global.Rx, global.Rx.Observable.prototype, global.Rx.Observable.prototype, global.Rx, global.Rx.Observable, global.Rx.Observable.prototype, global.Rx.Observable.prototype, global.ng.platformBrowser, global.Rx.Observable.prototype);
        global.ng = global.ng || {};
        global.ng.router = mod.exports;
    }
})(this, function (exports, _common, _core, _BehaviorSubject, _Subject, _from, _of, _concatMap, _every, _first, _map, _mergeMap, _reduce, _Observable, _catch2, _concatAll, _EmptyError, _fromPromise, _last, _mergeAll, _platformBrowser, _filter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ɵj = exports.ɵi = exports.ɵe = exports.ɵb = exports.ɵf = exports.ɵh = exports.ɵc = exports.ɵd = exports.ɵg = exports.ɵa = exports.ɵflatten = exports.ɵROUTER_PROVIDERS = exports.VERSION = exports.UrlTree = exports.UrlSerializer = exports.UrlSegmentGroup = exports.UrlSegment = exports.DefaultUrlSerializer = exports.UrlHandlingStrategy = exports.PRIMARY_OUTLET = exports.RouterStateSnapshot = exports.RouterState = exports.ActivatedRouteSnapshot = exports.ActivatedRoute = exports.RouterPreloader = exports.PreloadingStrategy = exports.PreloadAllModules = exports.NoPreloading = exports.RouterOutletMap = exports.provideRoutes = exports.RouterModule = exports.ROUTER_INITIALIZER = exports.ROUTER_CONFIGURATION = exports.ROUTES = exports.Router = exports.RouteReuseStrategy = exports.RoutesRecognized = exports.RouteConfigLoadStart = exports.RouteConfigLoadEnd = exports.NavigationStart = exports.NavigationError = exports.NavigationEnd = exports.NavigationCancel = exports.RouterOutlet = exports.RouterLinkActive = exports.RouterLinkWithHref = exports.RouterLink = undefined;

    var l = _interopRequireWildcard(_last);

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

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

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
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
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

    var NavigationStart = function () {
        /**
         * @param {?} id
         * @param {?} url
         */
        function NavigationStart(id, url) {
            _classCallCheck(this, NavigationStart);

            this.id = id;
            this.url = url;
        }
        /**
         * \@docsNotRequired
         * @return {?}
         */


        _createClass(NavigationStart, [{
            key: 'toString',
            value: function toString() {
                return 'NavigationStart(id: ' + this.id + ', url: \'' + this.url + '\')';
            }
        }]);

        return NavigationStart;
    }();

    var NavigationEnd = function () {
        /**
         * @param {?} id
         * @param {?} url
         * @param {?} urlAfterRedirects
         */
        function NavigationEnd(id, url, urlAfterRedirects) {
            _classCallCheck(this, NavigationEnd);

            this.id = id;
            this.url = url;
            this.urlAfterRedirects = urlAfterRedirects;
        }
        /**
         * \@docsNotRequired
         * @return {?}
         */


        _createClass(NavigationEnd, [{
            key: 'toString',
            value: function toString() {
                return 'NavigationEnd(id: ' + this.id + ', url: \'' + this.url + '\', urlAfterRedirects: \'' + this.urlAfterRedirects + '\')';
            }
        }]);

        return NavigationEnd;
    }();

    var NavigationCancel = function () {
        /**
         * @param {?} id
         * @param {?} url
         * @param {?} reason
         */
        function NavigationCancel(id, url, reason) {
            _classCallCheck(this, NavigationCancel);

            this.id = id;
            this.url = url;
            this.reason = reason;
        }
        /**
         * \@docsNotRequired
         * @return {?}
         */


        _createClass(NavigationCancel, [{
            key: 'toString',
            value: function toString() {
                return 'NavigationCancel(id: ' + this.id + ', url: \'' + this.url + '\')';
            }
        }]);

        return NavigationCancel;
    }();

    var NavigationError = function () {
        /**
         * @param {?} id
         * @param {?} url
         * @param {?} error
         */
        function NavigationError(id, url, error) {
            _classCallCheck(this, NavigationError);

            this.id = id;
            this.url = url;
            this.error = error;
        }
        /**
         * \@docsNotRequired
         * @return {?}
         */


        _createClass(NavigationError, [{
            key: 'toString',
            value: function toString() {
                return 'NavigationError(id: ' + this.id + ', url: \'' + this.url + '\', error: ' + this.error + ')';
            }
        }]);

        return NavigationError;
    }();

    var RoutesRecognized = function () {
        /**
         * @param {?} id
         * @param {?} url
         * @param {?} urlAfterRedirects
         * @param {?} state
         */
        function RoutesRecognized(id, url, urlAfterRedirects, state) {
            _classCallCheck(this, RoutesRecognized);

            this.id = id;
            this.url = url;
            this.urlAfterRedirects = urlAfterRedirects;
            this.state = state;
        }
        /**
         * \@docsNotRequired
         * @return {?}
         */


        _createClass(RoutesRecognized, [{
            key: 'toString',
            value: function toString() {
                return 'RoutesRecognized(id: ' + this.id + ', url: \'' + this.url + '\', urlAfterRedirects: \'' + this.urlAfterRedirects + '\', state: ' + this.state + ')';
            }
        }]);

        return RoutesRecognized;
    }();

    var RouteConfigLoadStart = function () {
        /**
         * @param {?} route
         */
        function RouteConfigLoadStart(route) {
            _classCallCheck(this, RouteConfigLoadStart);

            this.route = route;
        }
        /**
         * @return {?}
         */


        _createClass(RouteConfigLoadStart, [{
            key: 'toString',
            value: function toString() {
                return 'RouteConfigLoadStart(path: ' + this.route.path + ')';
            }
        }]);

        return RouteConfigLoadStart;
    }();

    var RouteConfigLoadEnd = function () {
        /**
         * @param {?} route
         */
        function RouteConfigLoadEnd(route) {
            _classCallCheck(this, RouteConfigLoadEnd);

            this.route = route;
        }
        /**
         * @return {?}
         */


        _createClass(RouteConfigLoadEnd, [{
            key: 'toString',
            value: function toString() {
                return 'RouteConfigLoadEnd(path: ' + this.route.path + ')';
            }
        }]);

        return RouteConfigLoadEnd;
    }();

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @whatItDoes Name of the primary outlet.
     *
     * @stable
     */
    var /** @type {?} */PRIMARY_OUTLET = 'primary';
    var /** @type {?} */NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';
    /**
     * @param {?} message
     * @return {?}
     */
    function navigationCancelingError(message) {
        var /** @type {?} */error = Error('NavigationCancelingError: ' + message);
        error[NAVIGATION_CANCELING_ERROR] = true;
        return error;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    function isNavigationCancelingError(error) {
        return error[NAVIGATION_CANCELING_ERROR];
    }
    /**
     * @param {?} segments
     * @param {?} segmentGroup
     * @param {?} route
     * @return {?}
     */
    function defaultUrlMatcher(segments, segmentGroup, route) {
        var /** @type {?} */path = route.path;
        var /** @type {?} */parts = path.split('/');
        var /** @type {?} */posParams = {};
        var /** @type {?} */consumed = [];
        var /** @type {?} */currentIndex = 0;
        for (var /** @type {?} */i = 0; i < parts.length; ++i) {
            if (currentIndex >= segments.length) return null;
            var /** @type {?} */current = segments[currentIndex];
            var /** @type {?} */p = parts[i];
            var /** @type {?} */isPosParam = p.startsWith(':');
            if (!isPosParam && p !== current.path) return null;
            if (isPosParam) {
                posParams[p.substring(1)] = current;
            }
            consumed.push(current);
            currentIndex++;
        }
        if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || currentIndex < segments.length)) {
            return null;
        } else {
            return { consumed: consumed, posParams: posParams };
        }
    }

    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function shallowEqualArrays(a, b) {
        if (a.length !== b.length) return false;
        for (var /** @type {?} */i = 0; i < a.length; ++i) {
            if (!shallowEqual(a[i], b[i])) return false;
        }
        return true;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function shallowEqual(a, b) {
        var /** @type {?} */k1 = Object.keys(a);
        var /** @type {?} */k2 = Object.keys(b);
        if (k1.length != k2.length) {
            return false;
        }
        var /** @type {?} */key = void 0;
        for (var /** @type {?} */i = 0; i < k1.length; i++) {
            key = k1[i];
            if (a[key] !== b[key]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} a
     * @return {?}
     */
    function flatten(a) {
        var /** @type {?} */target = [];
        for (var /** @type {?} */i = 0; i < a.length; ++i) {
            for (var /** @type {?} */j = 0; j < a[i].length; ++j) {
                target.push(a[i][j]);
            }
        }
        return target;
    }
    /**
     * @param {?} a
     * @return {?}
     */
    function last(a) {
        return a.length > 0 ? a[a.length - 1] : null;
    }
    /**
     * @param {?} m1
     * @param {?} m2
     * @return {?}
     */
    function merge(m1, m2) {
        var /** @type {?} */m = {};
        for (var /** @type {?} */attr in m1) {
            if (m1.hasOwnProperty(attr)) {
                m[attr] = m1[attr];
            }
        }
        for (var /** @type {?} */_attr in m2) {
            if (m2.hasOwnProperty(_attr)) {
                m[_attr] = m2[_attr];
            }
        }
        return m;
    }
    /**
     * @param {?} map
     * @param {?} callback
     * @return {?}
     */
    function forEach(map, callback) {
        for (var /** @type {?} */prop in map) {
            if (map.hasOwnProperty(prop)) {
                callback(map[prop], prop);
            }
        }
    }
    /**
     * @param {?} obj
     * @param {?} fn
     * @return {?}
     */
    function waitForMap(obj, fn) {
        var /** @type {?} */waitFor = [];
        var /** @type {?} */res = {};
        forEach(obj, function (a, k) {
            if (k === PRIMARY_OUTLET) {
                waitFor.push(_map.map.call(fn(k, a), function (_) {
                    res[k] = _;
                    return _;
                }));
            }
        });
        forEach(obj, function (a, k) {
            if (k !== PRIMARY_OUTLET) {
                waitFor.push(_map.map.call(fn(k, a), function (_) {
                    res[k] = _;
                    return _;
                }));
            }
        });
        if (waitFor.length > 0) {
            var /** @type {?} */concatted$ = _concatAll.concatAll.call(_of.of.apply(undefined, waitFor));
            var /** @type {?} */last$ = l.last.call(concatted$);
            return _map.map.call(last$, function () {
                return res;
            });
        }
        return (0, _of.of)(res);
    }
    /**
     * @param {?} observables
     * @return {?}
     */
    function andObservables(observables) {
        var /** @type {?} */merged$ = _mergeAll.mergeAll.call(observables);
        return _every.every.call(merged$, function (result) {
            return result === true;
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function wrapIntoObservable(value) {
        if ((0, _core.ɵisObservable)(value)) {
            return value;
        }
        if ((0, _core.ɵisPromise)(value)) {
            return (0, _fromPromise.fromPromise)(value);
        }
        return (0, _of.of)(value);
    }

    /**
     * @docsNotRequired
     * @experimental
     */
    var /** @type {?} */ROUTES = new _core.InjectionToken('ROUTES');

    var LoadedRouterConfig =
    /**
     * @param {?} routes
     * @param {?} injector
     * @param {?} factoryResolver
     * @param {?} injectorFactory
     */
    function LoadedRouterConfig(routes, injector, factoryResolver, injectorFactory) {
        _classCallCheck(this, LoadedRouterConfig);

        this.routes = routes;
        this.injector = injector;
        this.factoryResolver = factoryResolver;
        this.injectorFactory = injectorFactory;
    };

    var RouterConfigLoader = function () {
        /**
         * @param {?} loader
         * @param {?} compiler
         * @param {?=} onLoadStartListener
         * @param {?=} onLoadEndListener
         */
        function RouterConfigLoader(loader, compiler, onLoadStartListener, onLoadEndListener) {
            _classCallCheck(this, RouterConfigLoader);

            this.loader = loader;
            this.compiler = compiler;
            this.onLoadStartListener = onLoadStartListener;
            this.onLoadEndListener = onLoadEndListener;
        }
        /**
         * @param {?} parentInjector
         * @param {?} route
         * @return {?}
         */


        _createClass(RouterConfigLoader, [{
            key: 'load',
            value: function load(parentInjector, route) {
                var _this = this;

                if (this.onLoadStartListener) {
                    this.onLoadStartListener(route);
                }
                var /** @type {?} */moduleFactory$ = this.loadModuleFactory(route.loadChildren);
                return _map.map.call(moduleFactory$, function (factory) {
                    if (_this.onLoadEndListener) {
                        _this.onLoadEndListener(route);
                    }
                    var /** @type {?} */module = factory.create(parentInjector);
                    var /** @type {?} */injectorFactory = function injectorFactory(parent) {
                        return factory.create(parent).injector;
                    };
                    return new LoadedRouterConfig(flatten(module.injector.get(ROUTES)), module.injector, module.componentFactoryResolver, injectorFactory);
                });
            }
        }, {
            key: 'loadModuleFactory',
            value: function loadModuleFactory(loadChildren) {
                var _this2 = this;

                if (typeof loadChildren === 'string') {
                    return (0, _fromPromise.fromPromise)(this.loader.load(loadChildren));
                } else {
                    var /** @type {?} */offlineMode = this.compiler instanceof _core.Compiler;
                    return _mergeMap.mergeMap.call(wrapIntoObservable(loadChildren()), function (t) {
                        return offlineMode ? (0, _of.of)( /** @type {?} */t) : (0, _fromPromise.fromPromise)(_this2.compiler.compileModuleAsync(t));
                    });
                }
            }
        }]);

        return RouterConfigLoader;
    }();

    /**
     * @return {?}
     */
    function createEmptyUrlTree() {
        return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
    }
    /**
     * @param {?} container
     * @param {?} containee
     * @param {?} exact
     * @return {?}
     */
    function containsTree(container, containee, exact) {
        if (exact) {
            return equalQueryParams(container.queryParams, containee.queryParams) && equalSegmentGroups(container.root, containee.root);
        }
        return containsQueryParams(container.queryParams, containee.queryParams) && containsSegmentGroup(container.root, containee.root);
    }
    /**
     * @param {?} container
     * @param {?} containee
     * @return {?}
     */
    function equalQueryParams(container, containee) {
        return shallowEqual(container, containee);
    }
    /**
     * @param {?} container
     * @param {?} containee
     * @return {?}
     */
    function equalSegmentGroups(container, containee) {
        if (!equalPath(container.segments, containee.segments)) return false;
        if (container.numberOfChildren !== containee.numberOfChildren) return false;
        for (var /** @type {?} */c in containee.children) {
            if (!container.children[c]) return false;
            if (!equalSegmentGroups(container.children[c], containee.children[c])) return false;
        }
        return true;
    }
    /**
     * @param {?} container
     * @param {?} containee
     * @return {?}
     */
    function containsQueryParams(container, containee) {
        return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every(function (key) {
            return containee[key] === container[key];
        });
    }
    /**
     * @param {?} container
     * @param {?} containee
     * @return {?}
     */
    function containsSegmentGroup(container, containee) {
        return containsSegmentGroupHelper(container, containee, containee.segments);
    }
    /**
     * @param {?} container
     * @param {?} containee
     * @param {?} containeePaths
     * @return {?}
     */
    function containsSegmentGroupHelper(container, containee, containeePaths) {
        if (container.segments.length > containeePaths.length) {
            var /** @type {?} */current = container.segments.slice(0, containeePaths.length);
            if (!equalPath(current, containeePaths)) return false;
            if (containee.hasChildren()) return false;
            return true;
        } else if (container.segments.length === containeePaths.length) {
            if (!equalPath(container.segments, containeePaths)) return false;
            for (var /** @type {?} */c in containee.children) {
                if (!container.children[c]) return false;
                if (!containsSegmentGroup(container.children[c], containee.children[c])) return false;
            }
            return true;
        } else {
            var /** @type {?} */_current = containeePaths.slice(0, container.segments.length);
            var /** @type {?} */next = containeePaths.slice(container.segments.length);
            if (!equalPath(container.segments, _current)) return false;
            if (!container.children[PRIMARY_OUTLET]) return false;
            return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
        }
    }
    /**
     * \@whatItDoes Represents the parsed URL.
     *
     * \@howToUse
     *
     * ```
     * \@Component({templateUrl:'template.html'})
     * class MyComponent {
     *   constructor(router: Router) {
     *     const tree: UrlTree =
     *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
     *     const f = tree.fragment; // return 'fragment'
     *     const q = tree.queryParams; // returns {debug: 'true'}
     *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
     *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
     *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
     *     g.children['support'].segments; // return 1 segment 'help'
     *   }
     * }
     * ```
     *
     * \@description
     *
     * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
     * serialized tree.
     * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
     *
     * \@stable
     */

    var UrlTree = function () {
        /**
         * \@internal
         * @param {?} root
         * @param {?} queryParams
         * @param {?} fragment
         */
        function UrlTree(root, queryParams, fragment) {
            _classCallCheck(this, UrlTree);

            this.root = root;
            this.queryParams = queryParams;
            this.fragment = fragment;
        }
        /**
         * \@docsNotRequired
         * @return {?}
         */


        _createClass(UrlTree, [{
            key: 'toString',
            value: function toString() {
                return new DefaultUrlSerializer().serialize(this);
            }
        }]);

        return UrlTree;
    }();

    var UrlSegmentGroup = function () {
        /**
         * @param {?} segments
         * @param {?} children
         */
        function UrlSegmentGroup(segments, children) {
            var _this3 = this;

            _classCallCheck(this, UrlSegmentGroup);

            this.segments = segments;
            this.children = children;
            /** The parent node in the url tree */
            this.parent = null;
            forEach(children, function (v, k) {
                return v.parent = _this3;
            });
        }
        /**
         * Wether the segment has child segments
         * @return {?}
         */


        _createClass(UrlSegmentGroup, [{
            key: 'hasChildren',
            value: function hasChildren() {
                return this.numberOfChildren > 0;
            }
        }, {
            key: 'toString',
            value: function toString() {
                return serializePaths(this);
            }
        }, {
            key: 'numberOfChildren',
            get: function get() {
                return Object.keys(this.children).length;
            }
        }]);

        return UrlSegmentGroup;
    }();

    var UrlSegment = function () {
        /**
         * @param {?} path
         * @param {?} parameters
         */
        function UrlSegment(path, parameters) {
            _classCallCheck(this, UrlSegment);

            this.path = path;
            this.parameters = parameters;
        }
        /**
         * \@docsNotRequired
         * @return {?}
         */


        _createClass(UrlSegment, [{
            key: 'toString',
            value: function toString() {
                return serializePath(this);
            }
        }]);

        return UrlSegment;
    }();

    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function equalSegments(a, b) {
        if (a.length !== b.length) return false;
        for (var /** @type {?} */i = 0; i < a.length; ++i) {
            if (a[i].path !== b[i].path) return false;
            if (!shallowEqual(a[i].parameters, b[i].parameters)) return false;
        }
        return true;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function equalPath(a, b) {
        if (a.length !== b.length) return false;
        for (var /** @type {?} */i = 0; i < a.length; ++i) {
            if (a[i].path !== b[i].path) return false;
        }
        return true;
    }
    /**
     * @param {?} segment
     * @param {?} fn
     * @return {?}
     */
    function mapChildrenIntoArray(segment, fn) {
        var /** @type {?} */res = [];
        forEach(segment.children, function (child, childOutlet) {
            if (childOutlet === PRIMARY_OUTLET) {
                res = res.concat(fn(child, childOutlet));
            }
        });
        forEach(segment.children, function (child, childOutlet) {
            if (childOutlet !== PRIMARY_OUTLET) {
                res = res.concat(fn(child, childOutlet));
            }
        });
        return res;
    }
    /**
     * \@whatItDoes Serializes and deserializes a URL string into a URL tree.
     *
     * \@description The url serialization strategy is customizable. You can
     * make all URLs case insensitive by providing a custom UrlSerializer.
     *
     * See {\@link DefaultUrlSerializer} for an example of a URL serializer.
     *
     * \@stable
     * @abstract
     */

    var UrlSerializer = function () {
        function UrlSerializer() {
            _classCallCheck(this, UrlSerializer);
        }

        _createClass(UrlSerializer, [{
            key: 'parse',
            value: function parse(url) {}
        }, {
            key: 'serialize',
            value: function serialize(tree) {}
        }]);

        return UrlSerializer;
    }();

    var DefaultUrlSerializer = function () {
        function DefaultUrlSerializer() {
            _classCallCheck(this, DefaultUrlSerializer);
        }

        _createClass(DefaultUrlSerializer, [{
            key: 'parse',
            value: function parse(url) {
                var /** @type {?} */p = new UrlParser(url);
                return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
            }
        }, {
            key: 'serialize',
            value: function serialize(tree) {
                var /** @type {?} */segment = '/' + serializeSegment(tree.root, true);
                var /** @type {?} */query = serializeQueryParams(tree.queryParams);
                var /** @type {?} */fragment = tree.fragment !== null && tree.fragment !== undefined ? '#' + encodeURI(tree.fragment) : '';
                return '' + segment + query + fragment;
            }
        }]);

        return DefaultUrlSerializer;
    }();

    /**
     * @param {?} segment
     * @return {?}
     */
    function serializePaths(segment) {
        return segment.segments.map(function (p) {
            return serializePath(p);
        }).join('/');
    }
    /**
     * @param {?} segment
     * @param {?} root
     * @return {?}
     */
    function serializeSegment(segment, root) {
        if (segment.hasChildren() && root) {
            var /** @type {?} */primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : '';
            var /** @type {?} */children = [];
            forEach(segment.children, function (v, k) {
                if (k !== PRIMARY_OUTLET) {
                    children.push(k + ':' + serializeSegment(v, false));
                }
            });
            if (children.length > 0) {
                return primary + '(' + children.join('//') + ')';
            } else {
                return '' + primary;
            }
        } else if (segment.hasChildren() && !root) {
            var /** @type {?} */_children = mapChildrenIntoArray(segment, function (v, k) {
                if (k === PRIMARY_OUTLET) {
                    return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
                } else {
                    return [k + ':' + serializeSegment(v, false)];
                }
            });
            return serializePaths(segment) + '/(' + _children.join('//') + ')';
        } else {
            return serializePaths(segment);
        }
    }
    /**
     * @param {?} s
     * @return {?}
     */
    function encode(s) {
        return encodeURIComponent(s);
    }
    /**
     * @param {?} s
     * @return {?}
     */
    function decode(s) {
        return decodeURIComponent(s);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    function serializePath(path) {
        return '' + encode(path.path) + serializeParams(path.parameters);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function serializeParams(params) {
        return pairs(params).map(function (p) {
            return ';' + encode(p.first) + '=' + encode(p.second);
        }).join('');
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function serializeQueryParams(params) {
        var /** @type {?} */strParams = Object.keys(params).map(function (name) {
            var /** @type {?} */value = params[name];
            return Array.isArray(value) ? value.map(function (v) {
                return encode(name) + '=' + encode(v);
            }).join('&') : encode(name) + '=' + encode(value);
        });
        return strParams.length ? '?' + strParams.join("&") : '';
    }

    var Pair =
    /**
     * @param {?} first
     * @param {?} second
     */
    function Pair(first, second) {
        _classCallCheck(this, Pair);

        this.first = first;
        this.second = second;
    };

    /**
     * @param {?} obj
     * @return {?}
     */
    function pairs(obj) {
        var /** @type {?} */res = [];
        for (var /** @type {?} */prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                res.push(new Pair(prop, obj[prop]));
            }
        }
        return res;
    }
    var /** @type {?} */SEGMENT_RE = /^[^\/()?;=&#]+/;
    /**
     * @param {?} str
     * @return {?}
     */
    function matchSegments(str) {
        SEGMENT_RE.lastIndex = 0;
        var /** @type {?} */match = str.match(SEGMENT_RE);
        return match ? match[0] : '';
    }
    var /** @type {?} */QUERY_PARAM_RE = /^[^=?&#]+/;
    /**
     * @param {?} str
     * @return {?}
     */
    function matchQueryParams(str) {
        QUERY_PARAM_RE.lastIndex = 0;
        var /** @type {?} */match = str.match(SEGMENT_RE);
        return match ? match[0] : '';
    }
    var /** @type {?} */QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
    /**
     * @param {?} str
     * @return {?}
     */
    function matchUrlQueryParamValue(str) {
        QUERY_PARAM_VALUE_RE.lastIndex = 0;
        var /** @type {?} */match = str.match(QUERY_PARAM_VALUE_RE);
        return match ? match[0] : '';
    }

    var UrlParser = function () {
        /**
         * @param {?} url
         */
        function UrlParser(url) {
            _classCallCheck(this, UrlParser);

            this.url = url;
            this.remaining = url;
        }
        /**
         * @param {?} str
         * @return {?}
         */


        _createClass(UrlParser, [{
            key: 'peekStartsWith',
            value: function peekStartsWith(str) {
                return this.remaining.startsWith(str);
            }
        }, {
            key: 'capture',
            value: function capture(str) {
                if (!this.remaining.startsWith(str)) {
                    throw new Error('Expected "' + str + '".');
                }
                this.remaining = this.remaining.substring(str.length);
            }
        }, {
            key: 'parseRootSegment',
            value: function parseRootSegment() {
                if (this.remaining.startsWith('/')) {
                    this.capture('/');
                }
                if (this.remaining === '' || this.remaining.startsWith('?') || this.remaining.startsWith('#')) {
                    return new UrlSegmentGroup([], {});
                }
                return new UrlSegmentGroup([], this.parseChildren());
            }
        }, {
            key: 'parseChildren',
            value: function parseChildren() {
                if (this.remaining.length == 0) {
                    return {};
                }
                if (this.peekStartsWith('/')) {
                    this.capture('/');
                }
                var /** @type {?} */paths = [];
                if (!this.peekStartsWith('(')) {
                    paths.push(this.parseSegments());
                }
                while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
                    this.capture('/');
                    paths.push(this.parseSegments());
                }
                var /** @type {?} */children = {};
                if (this.peekStartsWith('/(')) {
                    this.capture('/');
                    children = this.parseParens(true);
                }
                var /** @type {?} */res = {};
                if (this.peekStartsWith('(')) {
                    res = this.parseParens(false);
                }
                if (paths.length > 0 || Object.keys(children).length > 0) {
                    res[PRIMARY_OUTLET] = new UrlSegmentGroup(paths, children);
                }
                return res;
            }
        }, {
            key: 'parseSegments',
            value: function parseSegments() {
                var /** @type {?} */path = matchSegments(this.remaining);
                if (path === '' && this.peekStartsWith(';')) {
                    throw new Error('Empty path url segment cannot have parameters: \'' + this.remaining + '\'.');
                }
                this.capture(path);
                var /** @type {?} */matrixParams = {};
                if (this.peekStartsWith(';')) {
                    matrixParams = this.parseMatrixParams();
                }
                return new UrlSegment(decode(path), matrixParams);
            }
        }, {
            key: 'parseQueryParams',
            value: function parseQueryParams() {
                var /** @type {?} */params = {};
                if (this.peekStartsWith('?')) {
                    this.capture('?');
                    this.parseQueryParam(params);
                    while (this.remaining.length > 0 && this.peekStartsWith('&')) {
                        this.capture('&');
                        this.parseQueryParam(params);
                    }
                }
                return params;
            }
        }, {
            key: 'parseFragment',
            value: function parseFragment() {
                if (this.peekStartsWith('#')) {
                    return decodeURI(this.remaining.substring(1));
                }
                return null;
            }
        }, {
            key: 'parseMatrixParams',
            value: function parseMatrixParams() {
                var /** @type {?} */params = {};
                while (this.remaining.length > 0 && this.peekStartsWith(';')) {
                    this.capture(';');
                    this.parseParam(params);
                }
                return params;
            }
        }, {
            key: 'parseParam',
            value: function parseParam(params) {
                var /** @type {?} */key = matchSegments(this.remaining);
                if (!key) {
                    return;
                }
                this.capture(key);
                var /** @type {?} */value = '';
                if (this.peekStartsWith('=')) {
                    this.capture('=');
                    var /** @type {?} */valueMatch = matchSegments(this.remaining);
                    if (valueMatch) {
                        value = valueMatch;
                        this.capture(value);
                    }
                }
                params[decode(key)] = decode(value);
            }
        }, {
            key: 'parseQueryParam',
            value: function parseQueryParam(params) {
                var /** @type {?} */key = matchQueryParams(this.remaining);
                if (!key) {
                    return;
                }
                this.capture(key);
                var /** @type {?} */value = '';
                if (this.peekStartsWith('=')) {
                    this.capture('=');
                    var /** @type {?} */valueMatch = matchUrlQueryParamValue(this.remaining);
                    if (valueMatch) {
                        value = valueMatch;
                        this.capture(value);
                    }
                }
                var /** @type {?} */decodedKey = decode(key);
                var /** @type {?} */decodedVal = decode(value);
                if (params.hasOwnProperty(decodedKey)) {
                    // Append to existing values
                    var /** @type {?} */currentVal = params[decodedKey];
                    if (!Array.isArray(currentVal)) {
                        currentVal = [currentVal];
                        params[decodedKey] = currentVal;
                    }
                    currentVal.push(decodedVal);
                } else {
                    // Create a new value
                    params[decodedKey] = decodedVal;
                }
            }
        }, {
            key: 'parseParens',
            value: function parseParens(allowPrimary) {
                var /** @type {?} */segments = {};
                this.capture('(');
                while (!this.peekStartsWith(')') && this.remaining.length > 0) {
                    var /** @type {?} */path = matchSegments(this.remaining);
                    var /** @type {?} */next = this.remaining[path.length];
                    // if is is not one of these characters, then the segment was unescaped
                    // or the group was not closed
                    if (next !== '/' && next !== ')' && next !== ';') {
                        throw new Error('Cannot parse url \'' + this.url + '\'');
                    }
                    var /** @type {?} */outletName = void 0;
                    if (path.indexOf(':') > -1) {
                        outletName = path.substr(0, path.indexOf(':'));
                        this.capture(outletName);
                        this.capture(':');
                    } else if (allowPrimary) {
                        outletName = PRIMARY_OUTLET;
                    }
                    var /** @type {?} */children = this.parseChildren();
                    segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
                    if (this.peekStartsWith('//')) {
                        this.capture('//');
                    }
                }
                this.capture(')');
                return segments;
            }
        }]);

        return UrlParser;
    }();

    var NoMatch =
    /**
     * @param {?=} segmentGroup
     */
    function NoMatch() {
        var segmentGroup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, NoMatch);

        this.segmentGroup = segmentGroup;
    };

    var AbsoluteRedirect =
    /**
     * @param {?} urlTree
     */
    function AbsoluteRedirect(urlTree) {
        _classCallCheck(this, AbsoluteRedirect);

        this.urlTree = urlTree;
    };

    /**
     * @param {?} segmentGroup
     * @return {?}
     */
    function noMatch(segmentGroup) {
        return new _Observable.Observable(function (obs) {
            return obs.error(new NoMatch(segmentGroup));
        });
    }
    /**
     * @param {?} newTree
     * @return {?}
     */
    function absoluteRedirect(newTree) {
        return new _Observable.Observable(function (obs) {
            return obs.error(new AbsoluteRedirect(newTree));
        });
    }
    /**
     * @param {?} redirectTo
     * @return {?}
     */
    function namedOutletsRedirect(redirectTo) {
        return new _Observable.Observable(function (obs) {
            return obs.error(new Error('Only absolute redirects can have named outlets. redirectTo: \'' + redirectTo + '\''));
        });
    }
    /**
     * @param {?} route
     * @return {?}
     */
    function canLoadFails(route) {
        return new _Observable.Observable(function (obs) {
            return obs.error(navigationCancelingError('Cannot load children because the guard of the route "path: \'' + route.path + '\'" returned false'));
        });
    }
    /**
     * @param {?} injector
     * @param {?} configLoader
     * @param {?} urlSerializer
     * @param {?} urlTree
     * @param {?} config
     * @return {?}
     */
    function applyRedirects(injector, configLoader, urlSerializer, urlTree, config) {
        return new ApplyRedirects(injector, configLoader, urlSerializer, urlTree, config).apply();
    }

    var ApplyRedirects = function () {
        /**
         * @param {?} injector
         * @param {?} configLoader
         * @param {?} urlSerializer
         * @param {?} urlTree
         * @param {?} config
         */
        function ApplyRedirects(injector, configLoader, urlSerializer, urlTree, config) {
            _classCallCheck(this, ApplyRedirects);

            this.injector = injector;
            this.configLoader = configLoader;
            this.urlSerializer = urlSerializer;
            this.urlTree = urlTree;
            this.config = config;
            this.allowRedirects = true;
        }
        /**
         * @return {?}
         */


        _createClass(ApplyRedirects, [{
            key: 'apply',
            value: function apply() {
                var _this4 = this;

                var /** @type {?} */expanded$ = this.expandSegmentGroup(this.injector, this.config, this.urlTree.root, PRIMARY_OUTLET);
                var /** @type {?} */urlTrees$ = _map.map.call(expanded$, function (rootSegmentGroup) {
                    return _this4.createUrlTree(rootSegmentGroup, _this4.urlTree.queryParams, _this4.urlTree.fragment);
                });
                return _catch2._catch.call(urlTrees$, function (e) {
                    if (e instanceof AbsoluteRedirect) {
                        // after an absolute redirect we do not apply any more redirects!
                        _this4.allowRedirects = false;
                        // we need to run matching, so we can fetch all lazy-loaded modules
                        return _this4.match(e.urlTree);
                    }
                    if (e instanceof NoMatch) {
                        throw _this4.noMatchError(e);
                    }
                    throw e;
                });
            }
        }, {
            key: 'match',
            value: function match(tree) {
                var _this5 = this;

                var /** @type {?} */expanded$ = this.expandSegmentGroup(this.injector, this.config, tree.root, PRIMARY_OUTLET);
                var /** @type {?} */mapped$ = _map.map.call(expanded$, function (rootSegmentGroup) {
                    return _this5.createUrlTree(rootSegmentGroup, tree.queryParams, tree.fragment);
                });
                return _catch2._catch.call(mapped$, function (e) {
                    if (e instanceof NoMatch) {
                        throw _this5.noMatchError(e);
                    }
                    throw e;
                });
            }
        }, {
            key: 'noMatchError',
            value: function noMatchError(e) {
                return new Error('Cannot match any routes. URL Segment: \'' + e.segmentGroup + '\'');
            }
        }, {
            key: 'createUrlTree',
            value: function createUrlTree(rootCandidate, queryParams, fragment) {
                var /** @type {?} */root = rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], _defineProperty({}, PRIMARY_OUTLET, rootCandidate)) : rootCandidate;
                return new UrlTree(root, queryParams, fragment);
            }
        }, {
            key: 'expandSegmentGroup',
            value: function expandSegmentGroup(injector, routes, segmentGroup, outlet) {
                if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
                    return _map.map.call(this.expandChildren(injector, routes, segmentGroup), function (children) {
                        return new UrlSegmentGroup([], children);
                    });
                }
                return this.expandSegment(injector, segmentGroup, routes, segmentGroup.segments, outlet, true);
            }
        }, {
            key: 'expandChildren',
            value: function expandChildren(injector, routes, segmentGroup) {
                var _this6 = this;

                return waitForMap(segmentGroup.children, function (childOutlet, child) {
                    return _this6.expandSegmentGroup(injector, routes, child, childOutlet);
                });
            }
        }, {
            key: 'expandSegment',
            value: function expandSegment(injector, segmentGroup, routes, segments, outlet, allowRedirects) {
                var _this7 = this;

                var /** @type {?} */routes$ = _of.of.apply(undefined, _toConsumableArray(routes));
                var /** @type {?} */processedRoutes$ = _map.map.call(routes$, function (r) {
                    var /** @type {?} */expanded$ = _this7.expandSegmentAgainstRoute(injector, segmentGroup, routes, r, segments, outlet, allowRedirects);
                    return _catch2._catch.call(expanded$, function (e) {
                        if (e instanceof NoMatch) {
                            return (0, _of.of)(null);
                        }
                        throw e;
                    });
                });
                var /** @type {?} */concattedProcessedRoutes$ = _concatAll.concatAll.call(processedRoutes$);
                var /** @type {?} */first$ = _first.first.call(concattedProcessedRoutes$, function (s) {
                    return !!s;
                });
                return _catch2._catch.call(first$, function (e, _) {
                    if (e instanceof _EmptyError.EmptyError) {
                        if (_this7.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                            return (0, _of.of)(new UrlSegmentGroup([], {}));
                        }
                        throw new NoMatch(segmentGroup);
                    }
                    throw e;
                });
            }
        }, {
            key: 'noLeftoversInUrl',
            value: function noLeftoversInUrl(segmentGroup, segments, outlet) {
                return segments.length === 0 && !segmentGroup.children[outlet];
            }
        }, {
            key: 'expandSegmentAgainstRoute',
            value: function expandSegmentAgainstRoute(injector, segmentGroup, routes, route, paths, outlet, allowRedirects) {
                if (getOutlet$1(route) !== outlet) {
                    return noMatch(segmentGroup);
                }
                if (route.redirectTo !== undefined && !(allowRedirects && this.allowRedirects)) {
                    return noMatch(segmentGroup);
                }
                if (route.redirectTo === undefined) {
                    return this.matchSegmentAgainstRoute(injector, segmentGroup, route, paths);
                }
                return this.expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, paths, outlet);
            }
        }, {
            key: 'expandSegmentAgainstRouteUsingRedirect',
            value: function expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet) {
                if (route.path === '**') {
                    return this.expandWildCardWithParamsAgainstRouteUsingRedirect(injector, routes, route, outlet);
                }
                return this.expandRegularSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet);
            }
        }, {
            key: 'expandWildCardWithParamsAgainstRouteUsingRedirect',
            value: function expandWildCardWithParamsAgainstRouteUsingRedirect(injector, routes, route, outlet) {
                var _this8 = this;

                var /** @type {?} */newTree = this.applyRedirectCommands([], route.redirectTo, {});
                if (route.redirectTo.startsWith('/')) {
                    return absoluteRedirect(newTree);
                }
                return _mergeMap.mergeMap.call(this.lineralizeSegments(route, newTree), function (newSegments) {
                    var /** @type {?} */group = new UrlSegmentGroup(newSegments, {});
                    return _this8.expandSegment(injector, group, routes, newSegments, outlet, false);
                });
            }
        }, {
            key: 'expandRegularSegmentAgainstRouteUsingRedirect',
            value: function expandRegularSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet) {
                var _this9 = this;

                var _match = match(segmentGroup, route, segments),
                    matched = _match.matched,
                    consumedSegments = _match.consumedSegments,
                    lastChild = _match.lastChild,
                    positionalParamSegments = _match.positionalParamSegments;

                if (!matched) return noMatch(segmentGroup);
                var /** @type {?} */newTree = this.applyRedirectCommands(consumedSegments, route.redirectTo, /** @type {?} */positionalParamSegments);
                if (route.redirectTo.startsWith('/')) {
                    return absoluteRedirect(newTree);
                }
                return _mergeMap.mergeMap.call(this.lineralizeSegments(route, newTree), function (newSegments) {
                    return _this9.expandSegment(injector, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
                });
            }
        }, {
            key: 'matchSegmentAgainstRoute',
            value: function matchSegmentAgainstRoute(injector, rawSegmentGroup, route, segments) {
                var _this10 = this;

                if (route.path === '**') {
                    if (route.loadChildren) {
                        return _map.map.call(this.configLoader.load(injector, route), function (cfg) {
                            route._loadedConfig = cfg;
                            return new UrlSegmentGroup(segments, {});
                        });
                    }
                    return (0, _of.of)(new UrlSegmentGroup(segments, {}));
                }

                var _match2 = match(rawSegmentGroup, route, segments),
                    matched = _match2.matched,
                    consumedSegments = _match2.consumedSegments,
                    lastChild = _match2.lastChild;

                if (!matched) return noMatch(rawSegmentGroup);
                var /** @type {?} */rawSlicedSegments = segments.slice(lastChild);
                var /** @type {?} */childConfig$ = this.getChildConfig(injector, route);
                return _mergeMap.mergeMap.call(childConfig$, function (routerConfig) {
                    var /** @type {?} */childInjector = routerConfig.injector;
                    var /** @type {?} */childConfig = routerConfig.routes;

                    var _split = split(rawSegmentGroup, consumedSegments, rawSlicedSegments, childConfig),
                        segmentGroup = _split.segmentGroup,
                        slicedSegments = _split.slicedSegments;

                    if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                        var /** @type {?} */_expanded$ = _this10.expandChildren(childInjector, childConfig, segmentGroup);
                        return _map.map.call(_expanded$, function (children) {
                            return new UrlSegmentGroup(consumedSegments, children);
                        });
                    }
                    if (childConfig.length === 0 && slicedSegments.length === 0) {
                        return (0, _of.of)(new UrlSegmentGroup(consumedSegments, {}));
                    }
                    var /** @type {?} */expanded$ = _this10.expandSegment(childInjector, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, true);
                    return _map.map.call(expanded$, function (cs) {
                        return new UrlSegmentGroup(consumedSegments.concat(cs.segments), cs.children);
                    });
                });
            }
        }, {
            key: 'getChildConfig',
            value: function getChildConfig(injector, route) {
                var _this11 = this;

                if (route.children) {
                    return (0, _of.of)(new LoadedRouterConfig(route.children, injector, null, null));
                }
                if (route.loadChildren) {
                    return _mergeMap.mergeMap.call(runGuards(injector, route), function (shouldLoad) {
                        if (shouldLoad) {
                            return route._loadedConfig ? (0, _of.of)(route._loadedConfig) : _map.map.call(_this11.configLoader.load(injector, route), function (cfg) {
                                route._loadedConfig = cfg;
                                return cfg;
                            });
                        }
                        return canLoadFails(route);
                    });
                }
                return (0, _of.of)(new LoadedRouterConfig([], injector, null, null));
            }
        }, {
            key: 'lineralizeSegments',
            value: function lineralizeSegments(route, urlTree) {
                var /** @type {?} */res = [];
                var /** @type {?} */c = urlTree.root;
                while (true) {
                    res = res.concat(c.segments);
                    if (c.numberOfChildren === 0) {
                        return (0, _of.of)(res);
                    }
                    if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
                        return namedOutletsRedirect(route.redirectTo);
                    }
                    c = c.children[PRIMARY_OUTLET];
                }
            }
        }, {
            key: 'applyRedirectCommands',
            value: function applyRedirectCommands(segments, redirectTo, posParams) {
                return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
            }
        }, {
            key: 'applyRedirectCreatreUrlTree',
            value: function applyRedirectCreatreUrlTree(redirectTo, urlTree, segments, posParams) {
                var /** @type {?} */newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
                return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
            }
        }, {
            key: 'createQueryParams',
            value: function createQueryParams(redirectToParams, actualParams) {
                var /** @type {?} */res = {};
                forEach(redirectToParams, function (v, k) {
                    res[k] = v.startsWith(':') ? actualParams[v.substring(1)] : v;
                });
                return res;
            }
        }, {
            key: 'createSegmentGroup',
            value: function createSegmentGroup(redirectTo, group, segments, posParams) {
                var _this12 = this;

                var /** @type {?} */updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
                var /** @type {?} */children = {};
                forEach(group.children, function (child, name) {
                    children[name] = _this12.createSegmentGroup(redirectTo, child, segments, posParams);
                });
                return new UrlSegmentGroup(updatedSegments, children);
            }
        }, {
            key: 'createSegments',
            value: function createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
                var _this13 = this;

                return redirectToSegments.map(function (s) {
                    return s.path.startsWith(':') ? _this13.findPosParam(redirectTo, s, posParams) : _this13.findOrReturn(s, actualSegments);
                });
            }
        }, {
            key: 'findPosParam',
            value: function findPosParam(redirectTo, redirectToUrlSegment, posParams) {
                var /** @type {?} */pos = posParams[redirectToUrlSegment.path.substring(1)];
                if (!pos) throw new Error('Cannot redirect to \'' + redirectTo + '\'. Cannot find \'' + redirectToUrlSegment.path + '\'.');
                return pos;
            }
        }, {
            key: 'findOrReturn',
            value: function findOrReturn(redirectToUrlSegment, actualSegments) {
                var /** @type {?} */idx = 0;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = actualSegments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var s = _step.value;

                        if (s.path === redirectToUrlSegment.path) {
                            actualSegments.splice(idx);
                            return s;
                        }
                        idx++;
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

                return redirectToUrlSegment;
            }
        }]);

        return ApplyRedirects;
    }();

    /**
     * @param {?} injector
     * @param {?} route
     * @return {?}
     */
    function runGuards(injector, route) {
        var /** @type {?} */canLoad = route.canLoad;
        if (!canLoad || canLoad.length === 0) return (0, _of.of)(true);
        var /** @type {?} */obs = _map.map.call((0, _from.from)(canLoad), function (c) {
            var /** @type {?} */guard = injector.get(c);
            return wrapIntoObservable(guard.canLoad ? guard.canLoad(route) : guard(route));
        });
        return andObservables(obs);
    }
    /**
     * @param {?} segmentGroup
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    function match(segmentGroup, route, segments) {
        var /** @type {?} */noMatch = { matched: false, consumedSegments: /** @type {?} */[], lastChild: 0, positionalParamSegments: {} };
        if (route.path === '') {
            if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
                return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
            }
            return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        var /** @type {?} */matcher = route.matcher || defaultUrlMatcher;
        var /** @type {?} */res = matcher(segments, segmentGroup, route);
        if (!res) return noMatch;
        return {
            matched: true,
            consumedSegments: res.consumed,
            lastChild: res.consumed.length,
            positionalParamSegments: res.posParams
        };
    }
    /**
     * @param {?} segmentGroup
     * @param {?} consumedSegments
     * @param {?} slicedSegments
     * @param {?} config
     * @return {?}
     */
    function split(segmentGroup, consumedSegments, slicedSegments, config) {
        if (slicedSegments.length > 0 && containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
            var /** @type {?} */s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
            return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
        }
        if (slicedSegments.length === 0 && containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
            var /** @type {?} */_s = new UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
            return { segmentGroup: mergeTrivialChildren(_s), slicedSegments: slicedSegments };
        }
        return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
    }
    /**
     * @param {?} s
     * @return {?}
     */
    function mergeTrivialChildren(s) {
        if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
            var /** @type {?} */c = s.children[PRIMARY_OUTLET];
            return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
        }
        return s;
    }
    /**
     * @param {?} segmentGroup
     * @param {?} slicedSegments
     * @param {?} routes
     * @param {?} children
     * @return {?}
     */
    function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
        var /** @type {?} */res = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = routes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var r = _step2.value;

                if (emptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet$1(r)]) {
                    res[getOutlet$1(r)] = new UrlSegmentGroup([], {});
                }
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

        return merge(children, res);
    }
    /**
     * @param {?} routes
     * @param {?} primarySegmentGroup
     * @return {?}
     */
    function createChildrenForEmptySegments(routes, primarySegmentGroup) {
        var /** @type {?} */res = {};
        res[PRIMARY_OUTLET] = primarySegmentGroup;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = routes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var r = _step3.value;

                if (r.path === '' && getOutlet$1(r) !== PRIMARY_OUTLET) {
                    res[getOutlet$1(r)] = new UrlSegmentGroup([], {});
                }
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

        return res;
    }
    /**
     * @param {?} segmentGroup
     * @param {?} slicedSegments
     * @param {?} routes
     * @return {?}
     */
    function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, routes) {
        return routes.filter(function (r) {
            return emptyPathRedirect(segmentGroup, slicedSegments, r) && getOutlet$1(r) !== PRIMARY_OUTLET;
        }).length > 0;
    }
    /**
     * @param {?} segmentGroup
     * @param {?} slicedSegments
     * @param {?} routes
     * @return {?}
     */
    function containsEmptyPathRedirects(segmentGroup, slicedSegments, routes) {
        return routes.filter(function (r) {
            return emptyPathRedirect(segmentGroup, slicedSegments, r);
        }).length > 0;
    }
    /**
     * @param {?} segmentGroup
     * @param {?} slicedSegments
     * @param {?} r
     * @return {?}
     */
    function emptyPathRedirect(segmentGroup, slicedSegments, r) {
        if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full') {
            return false;
        }
        return r.path === '' && r.redirectTo !== undefined;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    function getOutlet$1(route) {
        return route.outlet ? route.outlet : PRIMARY_OUTLET;
    }

    /**
     * @param {?} config
     * @param {?=} parentPath
     * @return {?}
     */
    function validateConfig(config) {
        var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        // forEach doesn't iterate undefined values
        for (var /** @type {?} */i = 0; i < config.length; i++) {
            var /** @type {?} */route = config[i];
            var /** @type {?} */fullPath = getFullPath(parentPath, route);
            validateNode(route, fullPath);
        }
    }
    /**
     * @param {?} route
     * @param {?} fullPath
     * @return {?}
     */
    function validateNode(route, fullPath) {
        if (!route) {
            throw new Error('\n      Invalid configuration of route \'' + fullPath + '\': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: \'\', redirectTo: \'/dashboard\', pathMatch: \'full\' },\n        { path: \'dashboard\',  component: DashboardComponent },, << two commas\n        { path: \'detail/:id\', component: HeroDetailComponent }\n      ];\n    ');
        }
        if (Array.isArray(route)) {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': Array cannot be specified');
        }
        if (!route.component && route.outlet && route.outlet !== PRIMARY_OUTLET) {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': a componentless route cannot have a named outlet set');
        }
        if (route.redirectTo && route.children) {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': redirectTo and children cannot be used together');
        }
        if (route.redirectTo && route.loadChildren) {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': redirectTo and loadChildren cannot be used together');
        }
        if (route.children && route.loadChildren) {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': children and loadChildren cannot be used together');
        }
        if (route.redirectTo && route.component) {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': redirectTo and component cannot be used together');
        }
        if (route.path && route.matcher) {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': path and matcher cannot be used together');
        }
        if (route.redirectTo === void 0 && !route.component && !route.children && !route.loadChildren) {
            throw new Error('Invalid configuration of route \'' + fullPath + '\'. One of the following must be provided: component, redirectTo, children or loadChildren');
        }
        if (route.path === void 0 && route.matcher === void 0) {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': routes must have either a path or a matcher specified');
        }
        if (typeof route.path === 'string' && route.path.charAt(0) === '/') {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': path cannot start with a slash');
        }
        if (route.path === '' && route.redirectTo !== void 0 && route.pathMatch === void 0) {
            var /** @type {?} */exp = 'The default value of \'pathMatch\' is \'prefix\', but often the intent is to use \'full\'.';
            throw new Error('Invalid configuration of route \'{path: "' + fullPath + '", redirectTo: "' + route.redirectTo + '"}\': please provide \'pathMatch\'. ' + exp);
        }
        if (route.pathMatch !== void 0 && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
            throw new Error('Invalid configuration of route \'' + fullPath + '\': pathMatch can only be set to \'prefix\' or \'full\'');
        }
        if (route.children) {
            validateConfig(route.children, fullPath);
        }
    }
    /**
     * @param {?} parentPath
     * @param {?} currentRoute
     * @return {?}
     */
    function getFullPath(parentPath, currentRoute) {
        if (!currentRoute) {
            return parentPath;
        }
        if (!parentPath && !currentRoute.path) {
            return '';
        } else if (parentPath && !currentRoute.path) {
            return parentPath + '/';
        } else if (!parentPath && currentRoute.path) {
            return currentRoute.path;
        } else {
            return parentPath + '/' + currentRoute.path;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var Tree = function () {
        /**
         * @param {?} root
         */
        function Tree(root) {
            _classCallCheck(this, Tree);

            this._root = root;
        }
        /**
         * @return {?}
         */


        _createClass(Tree, [{
            key: 'parent',
            value: function parent(t) {
                var /** @type {?} */p = this.pathFromRoot(t);
                return p.length > 1 ? p[p.length - 2] : null;
            }
        }, {
            key: 'children',
            value: function children(t) {
                var /** @type {?} */n = findNode(t, this._root);
                return n ? n.children.map(function (t) {
                    return t.value;
                }) : [];
            }
        }, {
            key: 'firstChild',
            value: function firstChild(t) {
                var /** @type {?} */n = findNode(t, this._root);
                return n && n.children.length > 0 ? n.children[0].value : null;
            }
        }, {
            key: 'siblings',
            value: function siblings(t) {
                var /** @type {?} */p = findPath(t, this._root, []);
                if (p.length < 2) return [];
                var /** @type {?} */c = p[p.length - 2].children.map(function (c) {
                    return c.value;
                });
                return c.filter(function (cc) {
                    return cc !== t;
                });
            }
        }, {
            key: 'pathFromRoot',
            value: function pathFromRoot(t) {
                return findPath(t, this._root, []).map(function (s) {
                    return s.value;
                });
            }
        }, {
            key: 'root',
            get: function get() {
                return this._root.value;
            }
        }]);

        return Tree;
    }();

    /**
     * @param {?} expected
     * @param {?} c
     * @return {?}
     */
    function findNode(expected, c) {
        if (expected === c.value) return c;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = c.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var cc = _step4.value;

                var /** @type {?} */r = findNode(expected, cc);
                if (r) return r;
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

        return null;
    }
    /**
     * @param {?} expected
     * @param {?} c
     * @param {?} collected
     * @return {?}
     */
    function findPath(expected, c, collected) {
        collected.push(c);
        if (expected === c.value) return collected;
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = c.children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var cc = _step5.value;

                var /** @type {?} */cloned = collected.slice(0);
                var /** @type {?} */r = findPath(expected, cc, cloned);
                if (r.length > 0) return r;
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

        return [];
    }

    var TreeNode = function () {
        /**
         * @param {?} value
         * @param {?} children
         */
        function TreeNode(value, children) {
            _classCallCheck(this, TreeNode);

            this.value = value;
            this.children = children;
        }
        /**
         * @return {?}
         */


        _createClass(TreeNode, [{
            key: 'toString',
            value: function toString() {
                return 'TreeNode(' + this.value + ')';
            }
        }]);

        return TreeNode;
    }();

    var RouterState = function (_Tree) {
        _inherits(RouterState, _Tree);

        /**
         * \@internal
         * @param {?} root
         * @param {?} snapshot
         */
        function RouterState(root, snapshot) {
            _classCallCheck(this, RouterState);

            var _this14 = _possibleConstructorReturn(this, (RouterState.__proto__ || Object.getPrototypeOf(RouterState)).call(this, root));

            _this14.snapshot = snapshot;
            setRouterStateSnapshot(_this14, root);
            return _this14;
        }
        /**
         * @return {?}
         */


        _createClass(RouterState, [{
            key: 'toString',
            value: function toString() {
                return this.snapshot.toString();
            }
        }]);

        return RouterState;
    }(Tree);

    /**
     * @param {?} urlTree
     * @param {?} rootComponent
     * @return {?}
     */
    function createEmptyState(urlTree, rootComponent) {
        var /** @type {?} */snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
        var /** @type {?} */emptyUrl = new _BehaviorSubject.BehaviorSubject([new UrlSegment('', {})]);
        var /** @type {?} */emptyParams = new _BehaviorSubject.BehaviorSubject({});
        var /** @type {?} */emptyData = new _BehaviorSubject.BehaviorSubject({});
        var /** @type {?} */emptyQueryParams = new _BehaviorSubject.BehaviorSubject({});
        var /** @type {?} */fragment = new _BehaviorSubject.BehaviorSubject('');
        var /** @type {?} */activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
        activated.snapshot = snapshot.root;
        return new RouterState(new TreeNode(activated, []), snapshot);
    }
    /**
     * @param {?} urlTree
     * @param {?} rootComponent
     * @return {?}
     */
    function createEmptyStateSnapshot(urlTree, rootComponent) {
        var /** @type {?} */emptyParams = {};
        var /** @type {?} */emptyData = {};
        var /** @type {?} */emptyQueryParams = {};
        var /** @type {?} */fragment = '';
        var /** @type {?} */activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, {});
        return new RouterStateSnapshot('', new TreeNode(activated, []));
    }
    /**
     * \@whatItDoes Contains the information about a route associated with a component loaded in an
     * outlet.
     * An `ActivatedRoute` can also be used to traverse the router state tree.
     *
     * \@howToUse
     *
     * ```
     * \@Component({...})
     * class MyComponent {
     *   constructor(route: ActivatedRoute) {
     *     const id: Observable<string> = route.params.map(p => p.id);
     *     const url: Observable<string> = route.url.map(segments => segments.join(''));
     *     // route.data includes both `data` and `resolve`
     *     const user = route.data.map(d => d.user);
     *   }
     * }
     * ```
     *
     * \@stable
     */

    var ActivatedRoute = function () {
        /**
         * \@internal
         * @param {?} url
         * @param {?} params
         * @param {?} queryParams
         * @param {?} fragment
         * @param {?} data
         * @param {?} outlet
         * @param {?} component
         * @param {?} futureSnapshot
         */
        function ActivatedRoute(url, params, queryParams, fragment, data, outlet, component, futureSnapshot) {
            _classCallCheck(this, ActivatedRoute);

            this.url = url;
            this.params = params;
            this.queryParams = queryParams;
            this.fragment = fragment;
            this.data = data;
            this.outlet = outlet;
            this.component = component;
            this._futureSnapshot = futureSnapshot;
        }
        /**
         * The configuration used to match this route
         * @return {?}
         */


        _createClass(ActivatedRoute, [{
            key: 'toString',
            value: function toString() {
                return this.snapshot ? this.snapshot.toString() : 'Future(' + this._futureSnapshot + ')';
            }
        }, {
            key: 'routeConfig',
            get: function get() {
                return this._futureSnapshot.routeConfig;
            }
        }, {
            key: 'root',
            get: function get() {
                return this._routerState.root;
            }
        }, {
            key: 'parent',
            get: function get() {
                return this._routerState.parent(this);
            }
        }, {
            key: 'firstChild',
            get: function get() {
                return this._routerState.firstChild(this);
            }
        }, {
            key: 'children',
            get: function get() {
                return this._routerState.children(this);
            }
        }, {
            key: 'pathFromRoot',
            get: function get() {
                return this._routerState.pathFromRoot(this);
            }
        }]);

        return ActivatedRoute;
    }();

    /**
     * \@internal
     * @param {?} route
     * @return {?}
     */
    function inheritedParamsDataResolve(route) {
        var /** @type {?} */pathToRoot = route.pathFromRoot;
        var /** @type {?} */inhertingStartingFrom = pathToRoot.length - 1;
        while (inhertingStartingFrom >= 1) {
            var /** @type {?} */current = pathToRoot[inhertingStartingFrom];
            var /** @type {?} */parent = pathToRoot[inhertingStartingFrom - 1];
            // current route is an empty path => inherits its parent's params and data
            if (current.routeConfig && current.routeConfig.path === '') {
                inhertingStartingFrom--;
            } else if (!parent.component) {
                inhertingStartingFrom--;
            } else {
                break;
            }
        }
        return pathToRoot.slice(inhertingStartingFrom).reduce(function (res, curr) {
            var /** @type {?} */params = merge(res.params, curr.params);
            var /** @type {?} */data = merge(res.data, curr.data);
            var /** @type {?} */resolve = merge(res.resolve, curr._resolvedData);
            return { params: params, data: data, resolve: resolve };
        }, /** @type {?} */{ params: {}, data: {}, resolve: {} });
    }
    /**
     * \@whatItDoes Contains the information about a route associated with a component loaded in an
     * outlet
     * at a particular moment in time. ActivatedRouteSnapshot can also be used to traverse the router
     * state tree.
     *
     * \@howToUse
     *
     * ```
     * \@Component({templateUrl:'./my-component.html'})
     * class MyComponent {
     *   constructor(route: ActivatedRoute) {
     *     const id: string = route.snapshot.params.id;
     *     const url: string = route.snapshot.url.join('');
     *     const user = route.snapshot.data.user;
     *   }
     * }
     * ```
     *
     * \@stable
     */

    var ActivatedRouteSnapshot = function () {
        /**
         * \@internal
         * @param {?} url
         * @param {?} params
         * @param {?} queryParams
         * @param {?} fragment
         * @param {?} data
         * @param {?} outlet
         * @param {?} component
         * @param {?} routeConfig
         * @param {?} urlSegment
         * @param {?} lastPathIndex
         * @param {?} resolve
         */
        function ActivatedRouteSnapshot(url, params, queryParams, fragment, data, outlet, component, routeConfig, urlSegment, lastPathIndex, resolve) {
            _classCallCheck(this, ActivatedRouteSnapshot);

            this.url = url;
            this.params = params;
            this.queryParams = queryParams;
            this.fragment = fragment;
            this.data = data;
            this.outlet = outlet;
            this.component = component;
            this._routeConfig = routeConfig;
            this._urlSegment = urlSegment;
            this._lastPathIndex = lastPathIndex;
            this._resolve = resolve;
        }
        /**
         * The configuration used to match this route
         * @return {?}
         */


        _createClass(ActivatedRouteSnapshot, [{
            key: 'toString',
            value: function toString() {
                var /** @type {?} */url = this.url.map(function (segment) {
                    return segment.toString();
                }).join('/');
                var /** @type {?} */matched = this._routeConfig ? this._routeConfig.path : '';
                return 'Route(url:\'' + url + '\', path:\'' + matched + '\')';
            }
        }, {
            key: 'routeConfig',
            get: function get() {
                return this._routeConfig;
            }
        }, {
            key: 'root',
            get: function get() {
                return this._routerState.root;
            }
        }, {
            key: 'parent',
            get: function get() {
                return this._routerState.parent(this);
            }
        }, {
            key: 'firstChild',
            get: function get() {
                return this._routerState.firstChild(this);
            }
        }, {
            key: 'children',
            get: function get() {
                return this._routerState.children(this);
            }
        }, {
            key: 'pathFromRoot',
            get: function get() {
                return this._routerState.pathFromRoot(this);
            }
        }]);

        return ActivatedRouteSnapshot;
    }();

    var RouterStateSnapshot = function (_Tree2) {
        _inherits(RouterStateSnapshot, _Tree2);

        /**
         * \@internal
         * @param {?} url
         * @param {?} root
         */
        function RouterStateSnapshot(url, root) {
            _classCallCheck(this, RouterStateSnapshot);

            var _this15 = _possibleConstructorReturn(this, (RouterStateSnapshot.__proto__ || Object.getPrototypeOf(RouterStateSnapshot)).call(this, root));

            _this15.url = url;
            setRouterStateSnapshot(_this15, root);
            return _this15;
        }
        /**
         * @return {?}
         */


        _createClass(RouterStateSnapshot, [{
            key: 'toString',
            value: function toString() {
                return serializeNode(this._root);
            }
        }]);

        return RouterStateSnapshot;
    }(Tree);

    /**
     * @param {?} state
     * @param {?} node
     * @return {?}
     */
    function setRouterStateSnapshot(state, node) {
        node.value._routerState = state;
        node.children.forEach(function (c) {
            return setRouterStateSnapshot(state, c);
        });
    }
    /**
     * @param {?} node
     * @return {?}
     */
    function serializeNode(node) {
        var /** @type {?} */c = node.children.length > 0 ? ' { ' + node.children.map(serializeNode).join(", ") + ' } ' : '';
        return '' + node.value + c;
    }
    /**
     * The expectation is that the activate route is created with the right set of parameters.
     * So we push new values into the observables only when they are not the initial values.
     * And we detect that by checking if the snapshot field is set.
     * @param {?} route
     * @return {?}
     */
    function advanceActivatedRoute(route) {
        if (route.snapshot) {
            var /** @type {?} */currentSnapshot = route.snapshot;
            route.snapshot = route._futureSnapshot;
            if (!shallowEqual(currentSnapshot.queryParams, route._futureSnapshot.queryParams)) {
                route.queryParams.next(route._futureSnapshot.queryParams);
            }
            if (currentSnapshot.fragment !== route._futureSnapshot.fragment) {
                route.fragment.next(route._futureSnapshot.fragment);
            }
            if (!shallowEqual(currentSnapshot.params, route._futureSnapshot.params)) {
                route.params.next(route._futureSnapshot.params);
            }
            if (!shallowEqualArrays(currentSnapshot.url, route._futureSnapshot.url)) {
                route.url.next(route._futureSnapshot.url);
            }
            if (!equalParamsAndUrlSegments(currentSnapshot, route._futureSnapshot)) {
                route.data.next(route._futureSnapshot.data);
            }
        } else {
            route.snapshot = route._futureSnapshot;
            // this is for resolved data
            route.data.next(route._futureSnapshot.data);
        }
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function equalParamsAndUrlSegments(a, b) {
        var /** @type {?} */equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
        var /** @type {?} */parentsMismatch = !a.parent !== !b.parent;
        return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
    }

    /**
     * @param {?} routeReuseStrategy
     * @param {?} curr
     * @param {?} prevState
     * @return {?}
     */
    function createRouterState(routeReuseStrategy, curr, prevState) {
        var /** @type {?} */root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
        return new RouterState(root, curr);
    }
    /**
     * @param {?} routeReuseStrategy
     * @param {?} curr
     * @param {?=} prevState
     * @return {?}
     */
    function createNode(routeReuseStrategy, curr, prevState) {
        // reuse an activated route that is currently displayed on the screen
        if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
            var /** @type {?} */value = prevState.value;
            value._futureSnapshot = curr.value;
            var /** @type {?} */children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
            return new TreeNode(value, children);
        } else if (routeReuseStrategy.retrieve(curr.value)) {
            var /** @type {?} */_tree = routeReuseStrategy.retrieve(curr.value).route;
            setFutureSnapshotsOfActivatedRoutes(curr, _tree);
            return _tree;
        } else {
            var /** @type {?} */_value = createActivatedRoute(curr.value);
            var /** @type {?} */_children2 = curr.children.map(function (c) {
                return createNode(routeReuseStrategy, c);
            });
            return new TreeNode(_value, _children2);
        }
    }
    /**
     * @param {?} curr
     * @param {?} result
     * @return {?}
     */
    function setFutureSnapshotsOfActivatedRoutes(curr, result) {
        if (curr.value.routeConfig !== result.value.routeConfig) {
            throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
        }
        if (curr.children.length !== result.children.length) {
            throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
        }
        result.value._futureSnapshot = curr.value;
        for (var /** @type {?} */i = 0; i < curr.children.length; ++i) {
            setFutureSnapshotsOfActivatedRoutes(curr.children[i], result.children[i]);
        }
    }
    /**
     * @param {?} routeReuseStrategy
     * @param {?} curr
     * @param {?} prevState
     * @return {?}
     */
    function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
        return curr.children.map(function (child) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = prevState.children[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var p = _step6.value;

                    if (routeReuseStrategy.shouldReuseRoute(p.value.snapshot, child.value)) {
                        return createNode(routeReuseStrategy, child, p);
                    }
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

            return createNode(routeReuseStrategy, child);
        });
    }
    /**
     * @param {?} c
     * @return {?}
     */
    function createActivatedRoute(c) {
        return new ActivatedRoute(new _BehaviorSubject.BehaviorSubject(c.url), new _BehaviorSubject.BehaviorSubject(c.params), new _BehaviorSubject.BehaviorSubject(c.queryParams), new _BehaviorSubject.BehaviorSubject(c.fragment), new _BehaviorSubject.BehaviorSubject(c.data), c.outlet, c.component, c);
    }

    /**
     * @param {?} route
     * @param {?} urlTree
     * @param {?} commands
     * @param {?} queryParams
     * @param {?} fragment
     * @return {?}
     */
    function _createUrlTree(route, urlTree, commands, queryParams, fragment) {
        if (commands.length === 0) {
            return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
        }
        var /** @type {?} */nav = computeNavigation(commands);
        if (nav.toRoot()) {
            return tree(urlTree.root, new UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
        }
        var /** @type {?} */startingPosition = findStartingPosition(nav, urlTree, route);
        var /** @type {?} */segmentGroup = startingPosition.processChildren ? updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, nav.commands) : updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, nav.commands);
        return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
    }
    /**
     * @param {?} command
     * @return {?}
     */
    function isMatrixParams(command) {
        return (typeof command === 'undefined' ? 'undefined' : _typeof(command)) === 'object' && command != null && !command.outlets && !command.segmentPath;
    }
    /**
     * @param {?} oldSegmentGroup
     * @param {?} newSegmentGroup
     * @param {?} urlTree
     * @param {?} queryParams
     * @param {?} fragment
     * @return {?}
     */
    function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
        if (urlTree.root === oldSegmentGroup) {
            return new UrlTree(newSegmentGroup, stringify(queryParams), fragment);
        }
        return new UrlTree(replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), stringify(queryParams), fragment);
    }
    /**
     * @param {?} current
     * @param {?} oldSegment
     * @param {?} newSegment
     * @return {?}
     */
    function replaceSegment(current, oldSegment, newSegment) {
        var /** @type {?} */children = {};
        forEach(current.children, function (c, outletName) {
            if (c === oldSegment) {
                children[outletName] = newSegment;
            } else {
                children[outletName] = replaceSegment(c, oldSegment, newSegment);
            }
        });
        return new UrlSegmentGroup(current.segments, children);
    }

    var Navigation = function () {
        /**
         * @param {?} isAbsolute
         * @param {?} numberOfDoubleDots
         * @param {?} commands
         */
        function Navigation(isAbsolute, numberOfDoubleDots, commands) {
            _classCallCheck(this, Navigation);

            this.isAbsolute = isAbsolute;
            this.numberOfDoubleDots = numberOfDoubleDots;
            this.commands = commands;
            if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
                throw new Error('Root segment cannot have matrix parameters');
            }
            var cmdWithOutlet = commands.find(function (c) {
                return (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && c != null && c.outlets;
            });
            if (cmdWithOutlet && cmdWithOutlet !== last(commands)) {
                throw new Error('{outlets:{}} has to be the last command');
            }
        }
        /**
         * @return {?}
         */


        _createClass(Navigation, [{
            key: 'toRoot',
            value: function toRoot() {
                return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
            }
        }]);

        return Navigation;
    }();

    /**
     * Transforms commands to a normalized `Navigation`
     * @param {?} commands
     * @return {?}
     */
    function computeNavigation(commands) {
        if (typeof commands[0] === 'string' && commands.length === 1 && commands[0] === '/') {
            return new Navigation(true, 0, commands);
        }
        var /** @type {?} */numberOfDoubleDots = 0;
        var /** @type {?} */isAbsolute = false;
        var /** @type {?} */res = commands.reduce(function (res, cmd, cmdIdx) {
            if ((typeof cmd === 'undefined' ? 'undefined' : _typeof(cmd)) === 'object' && cmd != null) {
                if (cmd.outlets) {
                    var /** @type {?} */outlets = {};
                    forEach(cmd.outlets, function (commands, name) {
                        outlets[name] = typeof commands === 'string' ? commands.split('/') : commands;
                    });
                    return [].concat(_toConsumableArray(res), [{ outlets: outlets }]);
                }
                if (cmd.segmentPath) {
                    return [].concat(_toConsumableArray(res), [cmd.segmentPath]);
                }
            }
            if (!(typeof cmd === 'string')) {
                return [].concat(_toConsumableArray(res), [cmd]);
            }
            if (cmdIdx === 0) {
                cmd.split('/').forEach(function (urlPart, partIndex) {
                    if (partIndex == 0 && urlPart === '.') {} else if (partIndex == 0 && urlPart === '') {
                        isAbsolute = true;
                    } else if (urlPart === '..') {
                        numberOfDoubleDots++;
                    } else if (urlPart != '') {
                        res.push(urlPart);
                    }
                });
                return res;
            }
            return [].concat(_toConsumableArray(res), [cmd]);
        }, []);
        return new Navigation(isAbsolute, numberOfDoubleDots, res);
    }

    var Position =
    /**
     * @param {?} segmentGroup
     * @param {?} processChildren
     * @param {?} index
     */
    function Position(segmentGroup, processChildren, index) {
        _classCallCheck(this, Position);

        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
    };

    /**
     * @param {?} nav
     * @param {?} tree
     * @param {?} route
     * @return {?}
     */
    function findStartingPosition(nav, tree, route) {
        if (nav.isAbsolute) {
            return new Position(tree.root, true, 0);
        }
        if (route.snapshot._lastPathIndex === -1) {
            return new Position(route.snapshot._urlSegment, true, 0);
        }
        var /** @type {?} */modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
        var /** @type {?} */index = route.snapshot._lastPathIndex + modifier;
        return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, nav.numberOfDoubleDots);
    }
    /**
     * @param {?} group
     * @param {?} index
     * @param {?} numberOfDoubleDots
     * @return {?}
     */
    function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
        var /** @type {?} */g = group;
        var /** @type {?} */ci = index;
        var /** @type {?} */dd = numberOfDoubleDots;
        while (dd > ci) {
            dd -= ci;
            g = g.parent;
            if (!g) {
                throw new Error('Invalid number of \'../\'');
            }
            ci = g.segments.length;
        }
        return new Position(g, false, ci - dd);
    }
    /**
     * @param {?} command
     * @return {?}
     */
    function getPath(command) {
        if ((typeof command === 'undefined' ? 'undefined' : _typeof(command)) === 'object' && command != null && command.outlets) {
            return command.outlets[PRIMARY_OUTLET];
        }
        return '' + command;
    }
    /**
     * @param {?} commands
     * @return {?}
     */
    function getOutlets(commands) {
        if (!(_typeof(commands[0]) === 'object')) return _defineProperty({}, PRIMARY_OUTLET, commands);
        if (commands[0].outlets === undefined) return _defineProperty({}, PRIMARY_OUTLET, commands);
        return commands[0].outlets;
    }
    /**
     * @param {?} segmentGroup
     * @param {?} startIndex
     * @param {?} commands
     * @return {?}
     */
    function updateSegmentGroup(segmentGroup, startIndex, commands) {
        if (!segmentGroup) {
            segmentGroup = new UrlSegmentGroup([], {});
        }
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
        }
        var /** @type {?} */m = prefixedWith(segmentGroup, startIndex, commands);
        var /** @type {?} */slicedCommands = commands.slice(m.commandIndex);
        if (m.match && m.pathIndex < segmentGroup.segments.length) {
            var /** @type {?} */g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
            g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
            return updateSegmentGroupChildren(g, 0, slicedCommands);
        } else if (m.match && slicedCommands.length === 0) {
            return new UrlSegmentGroup(segmentGroup.segments, {});
        } else if (m.match && !segmentGroup.hasChildren()) {
            return createNewSegmentGroup(segmentGroup, startIndex, commands);
        } else if (m.match) {
            return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
        } else {
            return createNewSegmentGroup(segmentGroup, startIndex, commands);
        }
    }
    /**
     * @param {?} segmentGroup
     * @param {?} startIndex
     * @param {?} commands
     * @return {?}
     */
    function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
        if (commands.length === 0) {
            return new UrlSegmentGroup(segmentGroup.segments, {});
        } else {
            var /** @type {?} */outlets = getOutlets(commands);
            var /** @type {?} */children = {};
            forEach(outlets, function (commands, outlet) {
                if (commands !== null) {
                    children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
                }
            });
            forEach(segmentGroup.children, function (child, childOutlet) {
                if (outlets[childOutlet] === undefined) {
                    children[childOutlet] = child;
                }
            });
            return new UrlSegmentGroup(segmentGroup.segments, children);
        }
    }
    /**
     * @param {?} segmentGroup
     * @param {?} startIndex
     * @param {?} commands
     * @return {?}
     */
    function prefixedWith(segmentGroup, startIndex, commands) {
        var /** @type {?} */currentCommandIndex = 0;
        var /** @type {?} */currentPathIndex = startIndex;
        var /** @type {?} */noMatch = { match: false, pathIndex: 0, commandIndex: 0 };
        while (currentPathIndex < segmentGroup.segments.length) {
            if (currentCommandIndex >= commands.length) return noMatch;
            var /** @type {?} */path = segmentGroup.segments[currentPathIndex];
            var /** @type {?} */curr = getPath(commands[currentCommandIndex]);
            var /** @type {?} */next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
            if (currentPathIndex > 0 && curr === undefined) break;
            if (curr && next && (typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object' && next.outlets === undefined) {
                if (!compare(curr, next, path)) return noMatch;
                currentCommandIndex += 2;
            } else {
                if (!compare(curr, {}, path)) return noMatch;
                currentCommandIndex++;
            }
            currentPathIndex++;
        }
        return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
    }
    /**
     * @param {?} segmentGroup
     * @param {?} startIndex
     * @param {?} commands
     * @return {?}
     */
    function createNewSegmentGroup(segmentGroup, startIndex, commands) {
        var /** @type {?} */paths = segmentGroup.segments.slice(0, startIndex);
        var /** @type {?} */i = 0;
        while (i < commands.length) {
            if (_typeof(commands[i]) === 'object' && commands[i].outlets !== undefined) {
                var /** @type {?} */children = createNewSegmentChildren(commands[i].outlets);
                return new UrlSegmentGroup(paths, children);
            }
            // if we start with an object literal, we need to reuse the path part from the segment
            if (i === 0 && isMatrixParams(commands[0])) {
                var /** @type {?} */p = segmentGroup.segments[startIndex];
                paths.push(new UrlSegment(p.path, commands[0]));
                i++;
                continue;
            }
            var /** @type {?} */curr = getPath(commands[i]);
            var /** @type {?} */next = i < commands.length - 1 ? commands[i + 1] : null;
            if (curr && next && isMatrixParams(next)) {
                paths.push(new UrlSegment(curr, stringify(next)));
                i += 2;
            } else {
                paths.push(new UrlSegment(curr, {}));
                i++;
            }
        }
        return new UrlSegmentGroup(paths, {});
    }
    /**
     * @param {?} outlets
     * @return {?}
     */
    function createNewSegmentChildren(outlets) {
        var /** @type {?} */children = {};
        forEach(outlets, function (commands, outlet) {
            if (commands !== null) {
                children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
            }
        });
        return children;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function stringify(params) {
        var /** @type {?} */res = {};
        forEach(params, function (v, k) {
            return res[k] = '' + v;
        });
        return res;
    }
    /**
     * @param {?} path
     * @param {?} params
     * @param {?} segment
     * @return {?}
     */
    function compare(path, params, segment) {
        return path == segment.path && shallowEqual(params, segment.parameters);
    }

    var NoMatch$1 = function NoMatch$1() {
        _classCallCheck(this, NoMatch$1);
    };

    /**
     * @param {?} rootComponentType
     * @param {?} config
     * @param {?} urlTree
     * @param {?} url
     * @return {?}
     */
    function recognize(rootComponentType, config, urlTree, url) {
        return new Recognizer(rootComponentType, config, urlTree, url).recognize();
    }

    var Recognizer = function () {
        /**
         * @param {?} rootComponentType
         * @param {?} config
         * @param {?} urlTree
         * @param {?} url
         */
        function Recognizer(rootComponentType, config, urlTree, url) {
            _classCallCheck(this, Recognizer);

            this.rootComponentType = rootComponentType;
            this.config = config;
            this.urlTree = urlTree;
            this.url = url;
        }
        /**
         * @return {?}
         */


        _createClass(Recognizer, [{
            key: 'recognize',
            value: function recognize() {
                try {
                    var /** @type {?} */rootSegmentGroup = split$1(this.urlTree.root, [], [], this.config).segmentGroup;
                    var /** @type {?} */children = this.processSegmentGroup(this.config, rootSegmentGroup, PRIMARY_OUTLET);
                    var /** @type {?} */root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, this.urlTree.root, -1, {});
                    var /** @type {?} */rootNode = new TreeNode(root, children);
                    var /** @type {?} */routeState = new RouterStateSnapshot(this.url, rootNode);
                    this.inheriteParamsAndData(routeState._root);
                    return (0, _of.of)(routeState);
                } catch (e) {
                    return new _Observable.Observable(function (obs) {
                        return obs.error(e);
                    });
                }
            }
        }, {
            key: 'inheriteParamsAndData',
            value: function inheriteParamsAndData(routeNode) {
                var _this16 = this;

                var /** @type {?} */route = routeNode.value;
                var /** @type {?} */i = inheritedParamsDataResolve(route);
                route.params = Object.freeze(i.params);
                route.data = Object.freeze(i.data);
                routeNode.children.forEach(function (n) {
                    return _this16.inheriteParamsAndData(n);
                });
            }
        }, {
            key: 'processSegmentGroup',
            value: function processSegmentGroup(config, segmentGroup, outlet) {
                if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
                    return this.processChildren(config, segmentGroup);
                } else {
                    return this.processSegment(config, segmentGroup, segmentGroup.segments, outlet);
                }
            }
        }, {
            key: 'processChildren',
            value: function processChildren(config, segmentGroup) {
                var _this17 = this;

                var /** @type {?} */children = mapChildrenIntoArray(segmentGroup, function (child, childOutlet) {
                    return _this17.processSegmentGroup(config, child, childOutlet);
                });
                checkOutletNameUniqueness(children);
                sortActivatedRouteSnapshots(children);
                return children;
            }
        }, {
            key: 'processSegment',
            value: function processSegment(config, segmentGroup, segments, outlet) {
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = config[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var r = _step7.value;

                        try {
                            return this.processSegmentAgainstRoute(r, segmentGroup, segments, outlet);
                        } catch (e) {
                            if (!(e instanceof NoMatch$1)) throw e;
                        }
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

                if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                    return [];
                } else {
                    throw new NoMatch$1();
                }
            }
        }, {
            key: 'noLeftoversInUrl',
            value: function noLeftoversInUrl(segmentGroup, segments, outlet) {
                return segments.length === 0 && !segmentGroup.children[outlet];
            }
        }, {
            key: 'processSegmentAgainstRoute',
            value: function processSegmentAgainstRoute(route, rawSegment, segments, outlet) {
                if (route.redirectTo) throw new NoMatch$1();
                if ((route.outlet ? route.outlet : PRIMARY_OUTLET) !== outlet) throw new NoMatch$1();
                if (route.path === '**') {
                    var /** @type {?} */params = segments.length > 0 ? last(segments).parameters : {};
                    var /** @type {?} */_snapshot = new ActivatedRouteSnapshot(segments, params, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
                    return [new TreeNode(_snapshot, [])];
                }

                var _match$ = match$1(rawSegment, route, segments),
                    consumedSegments = _match$.consumedSegments,
                    parameters = _match$.parameters,
                    lastChild = _match$.lastChild;

                var /** @type {?} */rawSlicedSegments = segments.slice(lastChild);
                var /** @type {?} */childConfig = getChildConfig(route);

                var _split$ = split$1(rawSegment, consumedSegments, rawSlicedSegments, childConfig),
                    segmentGroup = _split$.segmentGroup,
                    slicedSegments = _split$.slicedSegments;

                var /** @type {?} */snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
                if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                    var /** @type {?} */children = this.processChildren(childConfig, segmentGroup);
                    return [new TreeNode(snapshot, children)];
                } else if (childConfig.length === 0 && slicedSegments.length === 0) {
                    return [new TreeNode(snapshot, [])];
                } else {
                    var /** @type {?} */_children3 = this.processSegment(childConfig, segmentGroup, slicedSegments, PRIMARY_OUTLET);
                    return [new TreeNode(snapshot, _children3)];
                }
            }
        }]);

        return Recognizer;
    }();

    /**
     * @param {?} nodes
     * @return {?}
     */
    function sortActivatedRouteSnapshots(nodes) {
        nodes.sort(function (a, b) {
            if (a.value.outlet === PRIMARY_OUTLET) return -1;
            if (b.value.outlet === PRIMARY_OUTLET) return 1;
            return a.value.outlet.localeCompare(b.value.outlet);
        });
    }
    /**
     * @param {?} route
     * @return {?}
     */
    function getChildConfig(route) {
        if (route.children) {
            return route.children;
        } else if (route.loadChildren) {
            return route._loadedConfig.routes;
        } else {
            return [];
        }
    }
    /**
     * @param {?} segmentGroup
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    function match$1(segmentGroup, route, segments) {
        if (route.path === '') {
            if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
                throw new NoMatch$1();
            } else {
                return { consumedSegments: [], lastChild: 0, parameters: {} };
            }
        }
        var /** @type {?} */matcher = route.matcher || defaultUrlMatcher;
        var /** @type {?} */res = matcher(segments, segmentGroup, route);
        if (!res) throw new NoMatch$1();
        var /** @type {?} */posParams = {};
        forEach(res.posParams, function (v, k) {
            posParams[k] = v.path;
        });
        var /** @type {?} */parameters = merge(posParams, res.consumed[res.consumed.length - 1].parameters);
        return { consumedSegments: res.consumed, lastChild: res.consumed.length, parameters: parameters };
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    function checkOutletNameUniqueness(nodes) {
        var /** @type {?} */names = {};
        nodes.forEach(function (n) {
            var /** @type {?} */routeWithSameOutletName = names[n.value.outlet];
            if (routeWithSameOutletName) {
                var /** @type {?} */p = routeWithSameOutletName.url.map(function (s) {
                    return s.toString();
                }).join('/');
                var /** @type {?} */c = n.value.url.map(function (s) {
                    return s.toString();
                }).join('/');
                throw new Error('Two segments cannot have the same outlet name: \'' + p + '\' and \'' + c + '\'.');
            }
            names[n.value.outlet] = n.value;
        });
    }
    /**
     * @param {?} segmentGroup
     * @return {?}
     */
    function getSourceSegmentGroup(segmentGroup) {
        var /** @type {?} */s = segmentGroup;
        while (s._sourceSegment) {
            s = s._sourceSegment;
        }
        return s;
    }
    /**
     * @param {?} segmentGroup
     * @return {?}
     */
    function getPathIndexShift(segmentGroup) {
        var /** @type {?} */s = segmentGroup;
        var /** @type {?} */res = s._segmentIndexShift ? s._segmentIndexShift : 0;
        while (s._sourceSegment) {
            s = s._sourceSegment;
            res += s._segmentIndexShift ? s._segmentIndexShift : 0;
        }
        return res - 1;
    }
    /**
     * @param {?} segmentGroup
     * @param {?} consumedSegments
     * @param {?} slicedSegments
     * @param {?} config
     * @return {?}
     */
    function split$1(segmentGroup, consumedSegments, slicedSegments, config) {
        if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
            var /** @type {?} */s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
            s._sourceSegment = segmentGroup;
            s._segmentIndexShift = consumedSegments.length;
            return { segmentGroup: s, slicedSegments: [] };
        } else if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
            var /** @type {?} */_s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
            _s2._sourceSegment = segmentGroup;
            _s2._segmentIndexShift = consumedSegments.length;
            return { segmentGroup: _s2, slicedSegments: slicedSegments };
        } else {
            var /** @type {?} */_s3 = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
            _s3._sourceSegment = segmentGroup;
            _s3._segmentIndexShift = consumedSegments.length;
            return { segmentGroup: _s3, slicedSegments: slicedSegments };
        }
    }
    /**
     * @param {?} segmentGroup
     * @param {?} slicedSegments
     * @param {?} routes
     * @param {?} children
     * @return {?}
     */
    function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
        var /** @type {?} */res = {};
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
            for (var _iterator8 = routes[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var r = _step8.value;

                if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet$2(r)]) {
                    var /** @type {?} */s = new UrlSegmentGroup([], {});
                    s._sourceSegment = segmentGroup;
                    s._segmentIndexShift = segmentGroup.segments.length;
                    res[getOutlet$2(r)] = s;
                }
            }
        } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                    _iterator8.return();
                }
            } finally {
                if (_didIteratorError8) {
                    throw _iteratorError8;
                }
            }
        }

        return merge(children, res);
    }
    /**
     * @param {?} segmentGroup
     * @param {?} consumedSegments
     * @param {?} routes
     * @param {?} primarySegment
     * @return {?}
     */
    function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
        var /** @type {?} */res = {};
        res[PRIMARY_OUTLET] = primarySegment;
        primarySegment._sourceSegment = segmentGroup;
        primarySegment._segmentIndexShift = consumedSegments.length;
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
            for (var _iterator9 = routes[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var r = _step9.value;

                if (r.path === '' && getOutlet$2(r) !== PRIMARY_OUTLET) {
                    var /** @type {?} */s = new UrlSegmentGroup([], {});
                    s._sourceSegment = segmentGroup;
                    s._segmentIndexShift = consumedSegments.length;
                    res[getOutlet$2(r)] = s;
                }
            }
        } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion9 && _iterator9.return) {
                    _iterator9.return();
                }
            } finally {
                if (_didIteratorError9) {
                    throw _iteratorError9;
                }
            }
        }

        return res;
    }
    /**
     * @param {?} segmentGroup
     * @param {?} slicedSegments
     * @param {?} routes
     * @return {?}
     */
    function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
        return routes.filter(function (r) {
            return emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet$2(r) !== PRIMARY_OUTLET;
        }).length > 0;
    }
    /**
     * @param {?} segmentGroup
     * @param {?} slicedSegments
     * @param {?} routes
     * @return {?}
     */
    function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
        return routes.filter(function (r) {
            return emptyPathMatch(segmentGroup, slicedSegments, r);
        }).length > 0;
    }
    /**
     * @param {?} segmentGroup
     * @param {?} slicedSegments
     * @param {?} r
     * @return {?}
     */
    function emptyPathMatch(segmentGroup, slicedSegments, r) {
        if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full') return false;
        return r.path === '' && r.redirectTo === undefined;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    function getOutlet$2(route) {
        return route.outlet ? route.outlet : PRIMARY_OUTLET;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    function getData(route) {
        return route.data ? route.data : {};
    }
    /**
     * @param {?} route
     * @return {?}
     */
    function getResolve(route) {
        return route.resolve ? route.resolve : {};
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@whatItDoes Contains all the router outlets created in a component.
     *
     * \@stable
     */

    var RouterOutletMap = function () {
        function RouterOutletMap() {
            _classCallCheck(this, RouterOutletMap);

            /** @internal */
            this._outlets = {};
        }
        /**
         * Adds an outlet to this map.
         * @param {?} name
         * @param {?} outlet
         * @return {?}
         */


        _createClass(RouterOutletMap, [{
            key: 'registerOutlet',
            value: function registerOutlet(name, outlet) {
                this._outlets[name] = outlet;
            }
        }, {
            key: 'removeOutlet',
            value: function removeOutlet(name) {
                this._outlets[name] = undefined;
            }
        }]);

        return RouterOutletMap;
    }();

    var UrlHandlingStrategy = function () {
        function UrlHandlingStrategy() {
            _classCallCheck(this, UrlHandlingStrategy);
        }

        _createClass(UrlHandlingStrategy, [{
            key: 'shouldProcessUrl',
            value: function shouldProcessUrl(url) {}
        }, {
            key: 'extract',
            value: function extract(url) {}
        }, {
            key: 'merge',
            value: function merge(newUrlPart, rawUrl) {}
        }]);

        return UrlHandlingStrategy;
    }();

    var DefaultUrlHandlingStrategy = function () {
        function DefaultUrlHandlingStrategy() {
            _classCallCheck(this, DefaultUrlHandlingStrategy);
        }

        _createClass(DefaultUrlHandlingStrategy, [{
            key: 'shouldProcessUrl',
            value: function shouldProcessUrl(url) {
                return true;
            }
        }, {
            key: 'extract',
            value: function extract(url) {
                return url;
            }
        }, {
            key: 'merge',
            value: function merge(newUrlPart, wholeUrl) {
                return newUrlPart;
            }
        }]);

        return DefaultUrlHandlingStrategy;
    }();

    /**
     * @param {?} error
     * @return {?}
     */
    function defaultErrorHandler(error) {
        throw error;
    }
    /**
     * Does not detach any subtrees. Reuses routes as long as their route config is the same.
     */

    var DefaultRouteReuseStrategy = function () {
        function DefaultRouteReuseStrategy() {
            _classCallCheck(this, DefaultRouteReuseStrategy);
        }

        _createClass(DefaultRouteReuseStrategy, [{
            key: 'shouldDetach',
            value: function shouldDetach(route) {
                return false;
            }
        }, {
            key: 'store',
            value: function store(route, detachedTree) {}
        }, {
            key: 'shouldAttach',
            value: function shouldAttach(route) {
                return false;
            }
        }, {
            key: 'retrieve',
            value: function retrieve(route) {
                return null;
            }
        }, {
            key: 'shouldReuseRoute',
            value: function shouldReuseRoute(future, curr) {
                return future.routeConfig === curr.routeConfig;
            }
        }]);

        return DefaultRouteReuseStrategy;
    }();

    var Router = function () {
        /**
         * @param {?} rootComponentType
         * @param {?} urlSerializer
         * @param {?} outletMap
         * @param {?} location
         * @param {?} injector
         * @param {?} loader
         * @param {?} compiler
         * @param {?} config
         */
        function Router(rootComponentType, urlSerializer, outletMap, location, injector, loader, compiler, config) {
            var _this18 = this;

            _classCallCheck(this, Router);

            this.rootComponentType = rootComponentType;
            this.urlSerializer = urlSerializer;
            this.outletMap = outletMap;
            this.location = location;
            this.injector = injector;
            this.config = config;
            this.navigations = new _BehaviorSubject.BehaviorSubject(null);
            this.routerEvents = new _Subject.Subject();
            this.navigationId = 0;
            /**
             * Error handler that is invoked when a navigation errors.
             *
             * See {@link ErrorHandler} for more information.
             */
            this.errorHandler = defaultErrorHandler;
            /**
             * Indicates if at least one navigation happened.
             */
            this.navigated = false;
            /**
             * Extracts and merges URLs. Used for AngularJS to Angular migrations.
             */
            this.urlHandlingStrategy = new DefaultUrlHandlingStrategy();
            this.routeReuseStrategy = new DefaultRouteReuseStrategy();
            var onLoadStart = function onLoadStart(r) {
                return _this18.triggerEvent(new RouteConfigLoadStart(r));
            };
            var onLoadEnd = function onLoadEnd(r) {
                return _this18.triggerEvent(new RouteConfigLoadEnd(r));
            };
            this.resetConfig(config);
            this.currentUrlTree = createEmptyUrlTree();
            this.rawUrlTree = this.currentUrlTree;
            this.configLoader = new RouterConfigLoader(loader, compiler, onLoadStart, onLoadEnd);
            this.currentRouterState = createEmptyState(this.currentUrlTree, this.rootComponentType);
            this.processNavigations();
        }
        /**
         * \@internal
         * TODO: this should be removed once the constructor of the router made internal
         * @param {?} rootComponentType
         * @return {?}
         */


        _createClass(Router, [{
            key: 'resetRootComponentType',
            value: function resetRootComponentType(rootComponentType) {
                this.rootComponentType = rootComponentType;
                // TODO: vsavkin router 4.0 should make the root component set to null
                // this will simplify the lifecycle of the router.
                this.currentRouterState.root.component = this.rootComponentType;
            }
        }, {
            key: 'initialNavigation',
            value: function initialNavigation() {
                this.setUpLocationChangeListener();
                if (this.navigationId === 0) {
                    this.navigateByUrl(this.location.path(true), { replaceUrl: true });
                }
            }
        }, {
            key: 'setUpLocationChangeListener',
            value: function setUpLocationChangeListener() {
                var _this19 = this;

                // Zone.current.wrap is needed because of the issue with RxJS scheduler,
                // which does not work properly with zone.js in IE and Safari
                if (!this.locationSubscription) {
                    this.locationSubscription = this.location.subscribe(Zone.current.wrap(function (change) {
                        var /** @type {?} */rawUrlTree = _this19.urlSerializer.parse(change['url']);
                        var /** @type {?} */source = change['type'] === 'popstate' ? 'popstate' : 'hashchange';
                        setTimeout(function () {
                            _this19.scheduleNavigation(rawUrlTree, source, { replaceUrl: true });
                        }, 0);
                    }));
                }
            }
        }, {
            key: 'triggerEvent',
            value: function triggerEvent(e) {
                this.routerEvents.next(e);
            }
        }, {
            key: 'resetConfig',
            value: function resetConfig(config) {
                validateConfig(config);
                this.config = config;
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                this.dispose();
            }
        }, {
            key: 'dispose',
            value: function dispose() {
                if (this.locationSubscription) {
                    this.locationSubscription.unsubscribe();
                    this.locationSubscription = null;
                }
            }
        }, {
            key: 'createUrlTree',
            value: function createUrlTree(commands) {
                var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    relativeTo = _ref4.relativeTo,
                    queryParams = _ref4.queryParams,
                    fragment = _ref4.fragment,
                    preserveQueryParams = _ref4.preserveQueryParams,
                    queryParamsHandling = _ref4.queryParamsHandling,
                    preserveFragment = _ref4.preserveFragment;

                if ((0, _core.isDevMode)() && preserveQueryParams && console && console.warn) {
                    console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
                }
                var /** @type {?} */a = relativeTo || this.routerState.root;
                var /** @type {?} */f = preserveFragment ? this.currentUrlTree.fragment : fragment;
                var /** @type {?} */q = null;
                if (queryParamsHandling) {
                    switch (queryParamsHandling) {
                        case 'merge':
                            q = merge(this.currentUrlTree.queryParams, queryParams);
                            break;
                        case 'preserve':
                            q = this.currentUrlTree.queryParams;
                            break;
                        default:
                            q = queryParams;
                    }
                } else {
                    q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams;
                }
                return _createUrlTree(a, this.currentUrlTree, commands, q, f);
            }
        }, {
            key: 'navigateByUrl',
            value: function navigateByUrl(url) {
                var extras = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { skipLocationChange: false };

                var /** @type {?} */urlTree = url instanceof UrlTree ? url : this.parseUrl(url);
                var /** @type {?} */mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
                return this.scheduleNavigation(mergedTree, 'imperative', extras);
            }
        }, {
            key: 'navigate',
            value: function navigate(commands) {
                var extras = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { skipLocationChange: false };

                validateCommands(commands);
                if (_typeof(extras.queryParams) === 'object' && extras.queryParams !== null) {
                    extras.queryParams = this.removeEmptyProps(extras.queryParams);
                }
                return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
            }
        }, {
            key: 'serializeUrl',
            value: function serializeUrl(url) {
                return this.urlSerializer.serialize(url);
            }
        }, {
            key: 'parseUrl',
            value: function parseUrl(url) {
                return this.urlSerializer.parse(url);
            }
        }, {
            key: 'isActive',
            value: function isActive(url, exact) {
                if (url instanceof UrlTree) {
                    return containsTree(this.currentUrlTree, url, exact);
                } else {
                    var /** @type {?} */urlTree = this.urlSerializer.parse(url);
                    return containsTree(this.currentUrlTree, urlTree, exact);
                }
            }
        }, {
            key: 'removeEmptyProps',
            value: function removeEmptyProps(params) {
                return Object.keys(params).reduce(function (result, key) {
                    var /** @type {?} */value = params[key];
                    if (value !== null && value !== undefined) {
                        result[key] = value;
                    }
                    return result;
                }, {});
            }
        }, {
            key: 'processNavigations',
            value: function processNavigations() {
                var _this20 = this;

                _concatMap.concatMap.call(this.navigations, function (nav) {
                    if (nav) {
                        _this20.executeScheduledNavigation(nav);
                        // a failed navigation should not stop the router from processing
                        // further navigations => the catch
                        return nav.promise.catch(function () {});
                    } else {
                        return (0, _of.of)(null);
                    }
                }).subscribe(function () {});
            }
        }, {
            key: 'scheduleNavigation',
            value: function scheduleNavigation(rawUrl, source, extras) {
                var /** @type {?} */lastNavigation = this.navigations.value;
                // If the user triggers a navigation imperatively (e.g., by using navigateByUrl),
                // and that navigation results in 'replaceState' that leads to the same URL,
                // we should skip those.
                if (lastNavigation && source !== 'imperative' && lastNavigation.source === 'imperative' && lastNavigation.rawUrl.toString() === rawUrl.toString()) {
                    return null; // return value is not used
                }
                // Because of a bug in IE and Edge, the location class fires two events (popstate and
                // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
                // flicker.
                if (lastNavigation && source == 'hashchange' && lastNavigation.source === 'popstate' && lastNavigation.rawUrl.toString() === rawUrl.toString()) {
                    return null; // return value is not used
                }
                var /** @type {?} */resolve = null;
                var /** @type {?} */reject = null;
                var /** @type {?} */promise = new Promise(function (res, rej) {
                    resolve = res;
                    reject = rej;
                });
                var /** @type {?} */id = ++this.navigationId;
                this.navigations.next({ id: id, source: source, rawUrl: rawUrl, extras: extras, resolve: resolve, reject: reject, promise: promise });
                // Make sure that the error is propagated even though `processNavigations` catch
                // handler does not rethrow
                return promise.catch(function (e) {
                    return Promise.reject(e);
                });
            }
        }, {
            key: 'executeScheduledNavigation',
            value: function executeScheduledNavigation(_ref5) {
                var _this21 = this;

                var id = _ref5.id,
                    rawUrl = _ref5.rawUrl,
                    extras = _ref5.extras,
                    resolve = _ref5.resolve,
                    reject = _ref5.reject;

                var /** @type {?} */url = this.urlHandlingStrategy.extract(rawUrl);
                var /** @type {?} */urlTransition = !this.navigated || url.toString() !== this.currentUrlTree.toString();
                if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(rawUrl)) {
                    this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
                    Promise.resolve().then(function (_) {
                        return _this21.runNavigate(url, rawUrl, extras.skipLocationChange, extras.replaceUrl, id, null);
                    }).then(resolve, reject);
                } else if (urlTransition && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                    this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
                    Promise.resolve().then(function (_) {
                        return _this21.runNavigate(url, rawUrl, false, false, id, createEmptyState(url, _this21.rootComponentType).snapshot);
                    }).then(resolve, reject);
                } else {
                    this.rawUrlTree = rawUrl;
                    resolve(null);
                }
            }
        }, {
            key: 'runNavigate',
            value: function runNavigate(url, rawUrl, shouldPreventPushState, shouldReplaceUrl, id, precreatedState) {
                var _this22 = this;

                if (id !== this.navigationId) {
                    this.location.go(this.urlSerializer.serialize(this.currentUrlTree));
                    this.routerEvents.next(new NavigationCancel(id, this.serializeUrl(url), 'Navigation ID ' + id + ' is not equal to the current navigation id ' + this.navigationId));
                    return Promise.resolve(false);
                }
                return new Promise(function (resolvePromise, rejectPromise) {
                    // create an observable of the url and route state snapshot
                    // this operation do not result in any side effects
                    var /** @type {?} */urlAndSnapshot$ = void 0;
                    if (!precreatedState) {
                        var /** @type {?} */redirectsApplied$ = applyRedirects(_this22.injector, _this22.configLoader, _this22.urlSerializer, url, _this22.config);
                        urlAndSnapshot$ = _mergeMap.mergeMap.call(redirectsApplied$, function (appliedUrl) {
                            return _map.map.call(recognize(_this22.rootComponentType, _this22.config, appliedUrl, _this22.serializeUrl(appliedUrl)), function (snapshot) {
                                _this22.routerEvents.next(new RoutesRecognized(id, _this22.serializeUrl(url), _this22.serializeUrl(appliedUrl), snapshot));
                                return { appliedUrl: appliedUrl, snapshot: snapshot };
                            });
                        });
                    } else {
                        urlAndSnapshot$ = (0, _of.of)({ appliedUrl: url, snapshot: precreatedState });
                    }
                    // run preactivation: guards and data resolvers
                    var /** @type {?} */preActivation = void 0;
                    var /** @type {?} */preactivationTraverse$ = _map.map.call(urlAndSnapshot$, function (_ref6) {
                        var appliedUrl = _ref6.appliedUrl,
                            snapshot = _ref6.snapshot;

                        preActivation = new PreActivation(snapshot, _this22.currentRouterState.snapshot, _this22.injector);
                        preActivation.traverse(_this22.outletMap);
                        return { appliedUrl: appliedUrl, snapshot: snapshot };
                    });
                    var /** @type {?} */preactivationCheckGuards = _mergeMap.mergeMap.call(preactivationTraverse$, function (_ref7) {
                        var appliedUrl = _ref7.appliedUrl,
                            snapshot = _ref7.snapshot;

                        if (_this22.navigationId !== id) return (0, _of.of)(false);
                        return _map.map.call(preActivation.checkGuards(), function (shouldActivate) {
                            return { appliedUrl: appliedUrl, snapshot: snapshot, shouldActivate: shouldActivate };
                        });
                    });
                    var /** @type {?} */preactivationResolveData$ = _mergeMap.mergeMap.call(preactivationCheckGuards, function (p) {
                        if (_this22.navigationId !== id) return (0, _of.of)(false);
                        if (p.shouldActivate) {
                            return _map.map.call(preActivation.resolveData(), function () {
                                return p;
                            });
                        } else {
                            return (0, _of.of)(p);
                        }
                    });
                    // create router state
                    // this operation has side effects => route state is being affected
                    var /** @type {?} */routerState$ = _map.map.call(preactivationResolveData$, function (_ref8) {
                        var appliedUrl = _ref8.appliedUrl,
                            snapshot = _ref8.snapshot,
                            shouldActivate = _ref8.shouldActivate;

                        if (shouldActivate) {
                            var /** @type {?} */state = createRouterState(_this22.routeReuseStrategy, snapshot, _this22.currentRouterState);
                            return { appliedUrl: appliedUrl, state: state, shouldActivate: shouldActivate };
                        } else {
                            return { appliedUrl: appliedUrl, state: null, shouldActivate: shouldActivate };
                        }
                    });
                    // applied the new router state
                    // this operation has side effects
                    var /** @type {?} */navigationIsSuccessful = void 0;
                    var /** @type {?} */storedState = _this22.currentRouterState;
                    var /** @type {?} */storedUrl = _this22.currentUrlTree;
                    routerState$.forEach(function (_ref9) {
                        var appliedUrl = _ref9.appliedUrl,
                            state = _ref9.state,
                            shouldActivate = _ref9.shouldActivate;

                        if (!shouldActivate || id !== _this22.navigationId) {
                            navigationIsSuccessful = false;
                            return;
                        }
                        _this22.currentUrlTree = appliedUrl;
                        _this22.rawUrlTree = _this22.urlHandlingStrategy.merge(_this22.currentUrlTree, rawUrl);
                        _this22.currentRouterState = state;
                        if (!shouldPreventPushState) {
                            var /** @type {?} */path = _this22.urlSerializer.serialize(_this22.rawUrlTree);
                            if (_this22.location.isCurrentPathEqualTo(path) || shouldReplaceUrl) {
                                _this22.location.replaceState(path);
                            } else {
                                _this22.location.go(path);
                            }
                        }
                        new ActivateRoutes(_this22.routeReuseStrategy, state, storedState).activate(_this22.outletMap);
                        navigationIsSuccessful = true;
                    }).then(function () {
                        if (navigationIsSuccessful) {
                            _this22.navigated = true;
                            _this22.routerEvents.next(new NavigationEnd(id, _this22.serializeUrl(url), _this22.serializeUrl(_this22.currentUrlTree)));
                            resolvePromise(true);
                        } else {
                            _this22.resetUrlToCurrentUrlTree();
                            _this22.routerEvents.next(new NavigationCancel(id, _this22.serializeUrl(url), ''));
                            resolvePromise(false);
                        }
                    }, function (e) {
                        if (isNavigationCancelingError(e)) {
                            _this22.resetUrlToCurrentUrlTree();
                            _this22.navigated = true;
                            _this22.routerEvents.next(new NavigationCancel(id, _this22.serializeUrl(url), e.message));
                            resolvePromise(false);
                        } else {
                            _this22.routerEvents.next(new NavigationError(id, _this22.serializeUrl(url), e));
                            try {
                                resolvePromise(_this22.errorHandler(e));
                            } catch (ee) {
                                rejectPromise(ee);
                            }
                        }
                        _this22.currentRouterState = storedState;
                        _this22.currentUrlTree = storedUrl;
                        _this22.rawUrlTree = _this22.urlHandlingStrategy.merge(_this22.currentUrlTree, rawUrl);
                        _this22.location.replaceState(_this22.serializeUrl(_this22.rawUrlTree));
                    });
                });
            }
        }, {
            key: 'resetUrlToCurrentUrlTree',
            value: function resetUrlToCurrentUrlTree() {
                var /** @type {?} */path = this.urlSerializer.serialize(this.rawUrlTree);
                this.location.replaceState(path);
            }
        }, {
            key: 'routerState',
            get: function get() {
                return this.currentRouterState;
            }
        }, {
            key: 'url',
            get: function get() {
                return this.serializeUrl(this.currentUrlTree);
            }
        }, {
            key: 'events',
            get: function get() {
                return this.routerEvents;
            }
        }]);

        return Router;
    }();

    var CanActivate = function () {
        /**
         * @param {?} path
         */
        function CanActivate(path) {
            _classCallCheck(this, CanActivate);

            this.path = path;
        }
        /**
         * @return {?}
         */


        _createClass(CanActivate, [{
            key: 'route',
            get: function get() {
                return this.path[this.path.length - 1];
            }
        }]);

        return CanActivate;
    }();

    var CanDeactivate =
    /**
     * @param {?} component
     * @param {?} route
     */
    function CanDeactivate(component, route) {
        _classCallCheck(this, CanDeactivate);

        this.component = component;
        this.route = route;
    };

    var PreActivation = function () {
        /**
         * @param {?} future
         * @param {?} curr
         * @param {?} injector
         */
        function PreActivation(future, curr, injector) {
            _classCallCheck(this, PreActivation);

            this.future = future;
            this.curr = curr;
            this.injector = injector;
            this.checks = [];
        }
        /**
         * @param {?} parentOutletMap
         * @return {?}
         */


        _createClass(PreActivation, [{
            key: 'traverse',
            value: function traverse(parentOutletMap) {
                var /** @type {?} */futureRoot = this.future._root;
                var /** @type {?} */currRoot = this.curr ? this.curr._root : null;
                this.traverseChildRoutes(futureRoot, currRoot, parentOutletMap, [futureRoot.value]);
            }
        }, {
            key: 'checkGuards',
            value: function checkGuards() {
                var _this23 = this;

                if (this.checks.length === 0) return (0, _of.of)(true);
                var /** @type {?} */checks$ = (0, _from.from)(this.checks);
                var /** @type {?} */runningChecks$ = _mergeMap.mergeMap.call(checks$, function (s) {
                    if (s instanceof CanActivate) {
                        return andObservables((0, _from.from)([_this23.runCanActivateChild(s.path), _this23.runCanActivate(s.route)]));
                    } else if (s instanceof CanDeactivate) {
                        // workaround https://github.com/Microsoft/TypeScript/issues/7271
                        var /** @type {?} */s2 = s;
                        return _this23.runCanDeactivate(s2.component, s2.route);
                    } else {
                        throw new Error('Cannot be reached');
                    }
                });
                return _every.every.call(runningChecks$, function (result) {
                    return result === true;
                });
            }
        }, {
            key: 'resolveData',
            value: function resolveData() {
                var _this24 = this;

                if (this.checks.length === 0) return (0, _of.of)(null);
                var /** @type {?} */checks$ = (0, _from.from)(this.checks);
                var /** @type {?} */runningChecks$ = _concatMap.concatMap.call(checks$, function (s) {
                    if (s instanceof CanActivate) {
                        return _this24.runResolve(s.route);
                    } else {
                        return (0, _of.of)(null);
                    }
                });
                return _reduce.reduce.call(runningChecks$, function (_, __) {
                    return _;
                });
            }
        }, {
            key: 'traverseChildRoutes',
            value: function traverseChildRoutes(futureNode, currNode, outletMap, futurePath) {
                var _this25 = this;

                var /** @type {?} */prevChildren = nodeChildrenAsMap(currNode);
                futureNode.children.forEach(function (c) {
                    _this25.traverseRoutes(c, prevChildren[c.value.outlet], outletMap, futurePath.concat([c.value]));
                    delete prevChildren[c.value.outlet];
                });
                forEach(prevChildren, function (v, k) {
                    return _this25.deactiveRouteAndItsChildren(v, outletMap._outlets[k]);
                });
            }
        }, {
            key: 'traverseRoutes',
            value: function traverseRoutes(futureNode, currNode, parentOutletMap, futurePath) {
                var /** @type {?} */future = futureNode.value;
                var /** @type {?} */curr = currNode ? currNode.value : null;
                var /** @type {?} */outlet = parentOutletMap ? parentOutletMap._outlets[futureNode.value.outlet] : null;
                // reusing the node
                if (curr && future._routeConfig === curr._routeConfig) {
                    if (this.shouldRunGuardsAndResolvers(curr, future, future._routeConfig.runGuardsAndResolvers)) {
                        this.checks.push(new CanDeactivate(outlet.component, curr), new CanActivate(futurePath));
                    } else {
                        // we need to set the data
                        future.data = curr.data;
                        future._resolvedData = curr._resolvedData;
                    }
                    // If we have a component, we need to go through an outlet.
                    if (future.component) {
                        this.traverseChildRoutes(futureNode, currNode, outlet ? outlet.outletMap : null, futurePath);
                    } else {
                        this.traverseChildRoutes(futureNode, currNode, parentOutletMap, futurePath);
                    }
                } else {
                    if (curr) {
                        this.deactiveRouteAndItsChildren(currNode, outlet);
                    }
                    this.checks.push(new CanActivate(futurePath));
                    // If we have a component, we need to go through an outlet.
                    if (future.component) {
                        this.traverseChildRoutes(futureNode, null, outlet ? outlet.outletMap : null, futurePath);
                    } else {
                        this.traverseChildRoutes(futureNode, null, parentOutletMap, futurePath);
                    }
                }
            }
        }, {
            key: 'shouldRunGuardsAndResolvers',
            value: function shouldRunGuardsAndResolvers(curr, future, mode) {
                switch (mode) {
                    case 'always':
                        return true;
                    case 'paramsOrQueryParamsChange':
                        return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
                    case 'paramsChange':
                    default:
                        return !equalParamsAndUrlSegments(curr, future);
                }
            }
        }, {
            key: 'deactiveRouteAndItsChildren',
            value: function deactiveRouteAndItsChildren(route, outlet) {
                var _this26 = this;

                var /** @type {?} */prevChildren = nodeChildrenAsMap(route);
                var /** @type {?} */r = route.value;
                forEach(prevChildren, function (v, k) {
                    if (!r.component) {
                        _this26.deactiveRouteAndItsChildren(v, outlet);
                    } else if (!!outlet) {
                        _this26.deactiveRouteAndItsChildren(v, outlet.outletMap._outlets[k]);
                    } else {
                        _this26.deactiveRouteAndItsChildren(v, null);
                    }
                });
                if (!r.component) {
                    this.checks.push(new CanDeactivate(null, r));
                } else if (outlet && outlet.isActivated) {
                    this.checks.push(new CanDeactivate(outlet.component, r));
                } else {
                    this.checks.push(new CanDeactivate(null, r));
                }
            }
        }, {
            key: 'runCanActivate',
            value: function runCanActivate(future) {
                var _this27 = this;

                var /** @type {?} */canActivate = future._routeConfig ? future._routeConfig.canActivate : null;
                if (!canActivate || canActivate.length === 0) return (0, _of.of)(true);
                var /** @type {?} */obs = _map.map.call((0, _from.from)(canActivate), function (c) {
                    var /** @type {?} */guard = _this27.getToken(c, future);
                    var /** @type {?} */observable = void 0;
                    if (guard.canActivate) {
                        observable = wrapIntoObservable(guard.canActivate(future, _this27.future));
                    } else {
                        observable = wrapIntoObservable(guard(future, _this27.future));
                    }
                    return _first.first.call(observable);
                });
                return andObservables(obs);
            }
        }, {
            key: 'runCanActivateChild',
            value: function runCanActivateChild(path) {
                var _this28 = this;

                var /** @type {?} */future = path[path.length - 1];
                var /** @type {?} */canActivateChildGuards = path.slice(0, path.length - 1).reverse().map(function (p) {
                    return _this28.extractCanActivateChild(p);
                }).filter(function (_) {
                    return _ !== null;
                });
                return andObservables(_map.map.call((0, _from.from)(canActivateChildGuards), function (d) {
                    var /** @type {?} */obs = _map.map.call((0, _from.from)(d.guards), function (c) {
                        var /** @type {?} */guard = _this28.getToken(c, d.node);
                        var /** @type {?} */observable = void 0;
                        if (guard.canActivateChild) {
                            observable = wrapIntoObservable(guard.canActivateChild(future, _this28.future));
                        } else {
                            observable = wrapIntoObservable(guard(future, _this28.future));
                        }
                        return _first.first.call(observable);
                    });
                    return andObservables(obs);
                }));
            }
        }, {
            key: 'extractCanActivateChild',
            value: function extractCanActivateChild(p) {
                var /** @type {?} */canActivateChild = p._routeConfig ? p._routeConfig.canActivateChild : null;
                if (!canActivateChild || canActivateChild.length === 0) return null;
                return { node: p, guards: canActivateChild };
            }
        }, {
            key: 'runCanDeactivate',
            value: function runCanDeactivate(component, curr) {
                var _this29 = this;

                var /** @type {?} */canDeactivate = curr && curr._routeConfig ? curr._routeConfig.canDeactivate : null;
                if (!canDeactivate || canDeactivate.length === 0) return (0, _of.of)(true);
                var /** @type {?} */canDeactivate$ = _mergeMap.mergeMap.call((0, _from.from)(canDeactivate), function (c) {
                    var /** @type {?} */guard = _this29.getToken(c, curr);
                    var /** @type {?} */observable = void 0;
                    if (guard.canDeactivate) {
                        observable = wrapIntoObservable(guard.canDeactivate(component, curr, _this29.curr, _this29.future));
                    } else {
                        observable = wrapIntoObservable(guard(component, curr, _this29.curr, _this29.future));
                    }
                    return _first.first.call(observable);
                });
                return _every.every.call(canDeactivate$, function (result) {
                    return result === true;
                });
            }
        }, {
            key: 'runResolve',
            value: function runResolve(future) {
                var /** @type {?} */resolve = future._resolve;
                return _map.map.call(this.resolveNode(resolve, future), function (resolvedData) {
                    future._resolvedData = resolvedData;
                    future.data = merge(future.data, inheritedParamsDataResolve(future).resolve);
                    return null;
                });
            }
        }, {
            key: 'resolveNode',
            value: function resolveNode(resolve, future) {
                var _this30 = this;

                return waitForMap(resolve, function (k, v) {
                    var /** @type {?} */resolver = _this30.getToken(v, future);
                    return resolver.resolve ? wrapIntoObservable(resolver.resolve(future, _this30.future)) : wrapIntoObservable(resolver(future, _this30.future));
                });
            }
        }, {
            key: 'getToken',
            value: function getToken(token, snapshot) {
                var /** @type {?} */config = closestLoadedConfig(snapshot);
                var /** @type {?} */injector = config ? config.injector : this.injector;
                return injector.get(token);
            }
        }]);

        return PreActivation;
    }();

    var ActivateRoutes = function () {
        /**
         * @param {?} routeReuseStrategy
         * @param {?} futureState
         * @param {?} currState
         */
        function ActivateRoutes(routeReuseStrategy, futureState, currState) {
            _classCallCheck(this, ActivateRoutes);

            this.routeReuseStrategy = routeReuseStrategy;
            this.futureState = futureState;
            this.currState = currState;
        }
        /**
         * @param {?} parentOutletMap
         * @return {?}
         */


        _createClass(ActivateRoutes, [{
            key: 'activate',
            value: function activate(parentOutletMap) {
                var /** @type {?} */futureRoot = this.futureState._root;
                var /** @type {?} */currRoot = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(futureRoot, currRoot, parentOutletMap);
                advanceActivatedRoute(this.futureState.root);
                this.activateChildRoutes(futureRoot, currRoot, parentOutletMap);
            }
        }, {
            key: 'deactivateChildRoutes',
            value: function deactivateChildRoutes(futureNode, currNode, outletMap) {
                var _this31 = this;

                var /** @type {?} */prevChildren = nodeChildrenAsMap(currNode);
                futureNode.children.forEach(function (c) {
                    _this31.deactivateRoutes(c, prevChildren[c.value.outlet], outletMap);
                    delete prevChildren[c.value.outlet];
                });
                forEach(prevChildren, function (v, k) {
                    return _this31.deactiveRouteAndItsChildren(v, outletMap);
                });
            }
        }, {
            key: 'activateChildRoutes',
            value: function activateChildRoutes(futureNode, currNode, outletMap) {
                var _this32 = this;

                var /** @type {?} */prevChildren = nodeChildrenAsMap(currNode);
                futureNode.children.forEach(function (c) {
                    _this32.activateRoutes(c, prevChildren[c.value.outlet], outletMap);
                });
            }
        }, {
            key: 'deactivateRoutes',
            value: function deactivateRoutes(futureNode, currNode, parentOutletMap) {
                var /** @type {?} */future = futureNode.value;
                var /** @type {?} */curr = currNode ? currNode.value : null;
                // reusing the node
                if (future === curr) {
                    // If we have a normal route, we need to go through an outlet.
                    if (future.component) {
                        var /** @type {?} */outlet = getOutlet(parentOutletMap, future);
                        this.deactivateChildRoutes(futureNode, currNode, outlet.outletMap);
                    } else {
                        this.deactivateChildRoutes(futureNode, currNode, parentOutletMap);
                    }
                } else {
                    if (curr) {
                        this.deactiveRouteAndItsChildren(currNode, parentOutletMap);
                    }
                }
            }
        }, {
            key: 'activateRoutes',
            value: function activateRoutes(futureNode, currNode, parentOutletMap) {
                var /** @type {?} */future = futureNode.value;
                var /** @type {?} */curr = currNode ? currNode.value : null;
                // reusing the node
                if (future === curr) {
                    // advance the route to push the parameters
                    advanceActivatedRoute(future);
                    // If we have a normal route, we need to go through an outlet.
                    if (future.component) {
                        var /** @type {?} */outlet = getOutlet(parentOutletMap, future);
                        this.activateChildRoutes(futureNode, currNode, outlet.outletMap);
                    } else {
                        this.activateChildRoutes(futureNode, currNode, parentOutletMap);
                    }
                } else {
                    // if we have a normal route, we need to advance the route
                    // and place the component into the outlet. After that recurse.
                    if (future.component) {
                        advanceActivatedRoute(future);
                        var /** @type {?} */_outlet = getOutlet(parentOutletMap, futureNode.value);
                        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
                            var /** @type {?} */stored = this.routeReuseStrategy.retrieve(future.snapshot);
                            this.routeReuseStrategy.store(future.snapshot, null);
                            _outlet.attach(stored.componentRef, stored.route.value);
                            advanceActivatedRouteNodeAndItsChildren(stored.route);
                        } else {
                            var /** @type {?} */outletMap = new RouterOutletMap();
                            this.placeComponentIntoOutlet(outletMap, future, _outlet);
                            this.activateChildRoutes(futureNode, null, outletMap);
                        }
                    } else {
                        advanceActivatedRoute(future);
                        this.activateChildRoutes(futureNode, null, parentOutletMap);
                    }
                }
            }
        }, {
            key: 'placeComponentIntoOutlet',
            value: function placeComponentIntoOutlet(outletMap, future, outlet) {
                var /** @type {?} */resolved = [{ provide: ActivatedRoute, useValue: future }, {
                    provide: RouterOutletMap,
                    useValue: outletMap
                }];
                var /** @type {?} */config = parentLoadedConfig(future.snapshot);
                var /** @type {?} */resolver = null;
                var /** @type {?} */injector = null;
                if (config) {
                    injector = config.injectorFactory(outlet.locationInjector);
                    resolver = config.factoryResolver;
                    resolved.push({ provide: _core.ComponentFactoryResolver, useValue: resolver });
                } else {
                    injector = outlet.locationInjector;
                    resolver = outlet.locationFactoryResolver;
                }
                outlet.activate(future, resolver, injector, _core.ReflectiveInjector.resolve(resolved), outletMap);
            }
        }, {
            key: 'deactiveRouteAndItsChildren',
            value: function deactiveRouteAndItsChildren(route, parentOutletMap) {
                if (this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
                    this.detachAndStoreRouteSubtree(route, parentOutletMap);
                } else {
                    this.deactiveRouteAndOutlet(route, parentOutletMap);
                }
            }
        }, {
            key: 'detachAndStoreRouteSubtree',
            value: function detachAndStoreRouteSubtree(route, parentOutletMap) {
                var /** @type {?} */outlet = getOutlet(parentOutletMap, route.value);
                var /** @type {?} */componentRef = outlet.detach();
                this.routeReuseStrategy.store(route.value.snapshot, { componentRef: componentRef, route: route });
            }
        }, {
            key: 'deactiveRouteAndOutlet',
            value: function deactiveRouteAndOutlet(route, parentOutletMap) {
                var _this33 = this;

                var /** @type {?} */prevChildren = nodeChildrenAsMap(route);
                var /** @type {?} */outlet = null;
                // getOutlet throws when cannot find the right outlet,
                // which can happen if an outlet was in an NgIf and was removed
                try {
                    outlet = getOutlet(parentOutletMap, route.value);
                } catch (e) {
                    return;
                }
                var /** @type {?} */childOutletMap = outlet.outletMap;
                forEach(prevChildren, function (v, k) {
                    if (route.value.component) {
                        _this33.deactiveRouteAndItsChildren(v, childOutletMap);
                    } else {
                        _this33.deactiveRouteAndItsChildren(v, parentOutletMap);
                    }
                });
                if (outlet && outlet.isActivated) {
                    outlet.deactivate();
                }
            }
        }]);

        return ActivateRoutes;
    }();

    /**
     * @param {?} node
     * @return {?}
     */
    function advanceActivatedRouteNodeAndItsChildren(node) {
        advanceActivatedRoute(node.value);
        node.children.forEach(advanceActivatedRouteNodeAndItsChildren);
    }
    /**
     * @param {?} snapshot
     * @return {?}
     */
    function parentLoadedConfig(snapshot) {
        var /** @type {?} */s = snapshot.parent;
        while (s) {
            var /** @type {?} */c = s._routeConfig;
            if (c && c._loadedConfig) return c._loadedConfig;
            if (c && c.component) return null;
            s = s.parent;
        }
        return null;
    }
    /**
     * @param {?} snapshot
     * @return {?}
     */
    function closestLoadedConfig(snapshot) {
        if (!snapshot) return null;
        var /** @type {?} */s = snapshot.parent;
        while (s) {
            var /** @type {?} */c = s._routeConfig;
            if (c && c._loadedConfig) return c._loadedConfig;
            s = s.parent;
        }
        return null;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    function nodeChildrenAsMap(node) {
        return node ? node.children.reduce(function (m, c) {
            m[c.value.outlet] = c;
            return m;
        }, {}) : {};
    }
    /**
     * @param {?} outletMap
     * @param {?} route
     * @return {?}
     */
    function getOutlet(outletMap, route) {
        var /** @type {?} */outlet = outletMap._outlets[route.outlet];
        if (!outlet) {
            var /** @type {?} */componentName = route.component.name;
            if (route.outlet === PRIMARY_OUTLET) {
                throw new Error('Cannot find primary outlet to load \'' + componentName + '\'');
            } else {
                throw new Error('Cannot find the outlet ' + route.outlet + ' to load \'' + componentName + '\'');
            }
        }
        return outlet;
    }
    /**
     * @param {?} commands
     * @return {?}
     */
    function validateCommands(commands) {
        for (var /** @type {?} */i = 0; i < commands.length; i++) {
            var /** @type {?} */cmd = commands[i];
            if (cmd == null) {
                throw new Error('The requested path contains ' + cmd + ' segment at index ' + i);
            }
        }
    }

    /**
     * \@whatItDoes Lets you link to specific parts of your app.
     *
     * \@howToUse
     *
     * Consider the following route configuration:
     * `[{ path: 'user/:name', component: UserCmp }]`
     *
     * When linking to this `user/:name` route, you can write:
     * `<a routerLink='/user/bob'>link to user component</a>`
     *
     * \@description
     *
     * The RouterLink directives let you link to specific parts of your app.
     *
     * When the link is static, you can use the directive as follows:
     * `<a routerLink="/user/bob">link to user component</a>`
     *
     * If you use dynamic values to generate the link, you can pass an array of path
     * segments, followed by the params for each segment.
     *
     * For instance `['/team', teamId, 'user', userName, {details: true}]`
     * means that we want to generate a link to `/team/11/user/bob;details=true`.
     *
     * Multiple static segments can be merged into one
     * (e.g., `['/team/11/user', userName, {details: true}]`).
     *
     * The first segment name can be prepended with `/`, `./`, or `../`:
     * * If the first segment begins with `/`, the router will look up the route from the root of the
     *   app.
     * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
     *   instead look in the children of the current activated route.
     * * And if the first segment begins with `../`, the router will go up one level.
     *
     * You can set query params and fragment as follows:
     *
     * ```
     * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
     *   link to user component
     * </a>
     * ```
     * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
     *
     * (Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
     * directive to preserve the current query params and fragment:
     *
     * ```
     * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
     *   link to user component
     * </a>
     * ```
     *
     * You can tell the directive to how to handle queryParams, available options are:
     *  - 'merge' merge the queryParams into the current queryParams
     *  - 'preserve' prserve the current queryParams
     *  - default / '' use the queryParams only
     *  same options for {\@link NavigationExtras.queryParamsHandling}
     *
     * ```
     * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
     *   link to user component
     * </a>
     * ```
     *
     * The router link directive always treats the provided input as a delta to the current url.
     *
     * For instance, if the current url is `/user/(box//aux:team)`.
     *
     * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
     * `/user/(jim//aux:team)`.
     *
     * \@ngModule RouterModule
     *
     * See {\@link Router.createUrlTree} for more information.
     *
     * \@stable
     */

    var RouterLink = function () {
        /**
         * @param {?} router
         * @param {?} route
         * @param {?} tabIndex
         * @param {?} renderer
         * @param {?} el
         */
        function RouterLink(router, route, tabIndex, renderer, el) {
            _classCallCheck(this, RouterLink);

            this.router = router;
            this.route = route;
            this.commands = [];
            if (tabIndex == null) {
                renderer.setElementAttribute(el.nativeElement, 'tabindex', '0');
            }
        }
        /**
         * @param {?} commands
         * @return {?}
         */


        _createClass(RouterLink, [{
            key: 'onClick',
            value: function onClick() {
                var /** @type {?} */extras = {
                    skipLocationChange: attrBoolValue(this.skipLocationChange),
                    replaceUrl: attrBoolValue(this.replaceUrl)
                };
                this.router.navigateByUrl(this.urlTree, extras);
                return true;
            }
        }, {
            key: 'routerLink',
            set: function set(commands) {
                if (commands != null) {
                    this.commands = Array.isArray(commands) ? commands : [commands];
                } else {
                    this.commands = [];
                }
            }
        }, {
            key: 'preserveQueryParams',
            set: function set(value) {
                if ((0, _core.isDevMode)() && console && console.warn) {
                    console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
                }
                this.preserve = value;
            }
        }, {
            key: 'urlTree',
            get: function get() {
                return this.router.createUrlTree(this.commands, {
                    relativeTo: this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    preserveQueryParams: attrBoolValue(this.preserve),
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: attrBoolValue(this.preserveFragment)
                });
            }
        }]);

        return RouterLink;
    }();

    RouterLink.decorators = [{ type: _core.Directive, args: [{ selector: ':not(a)[routerLink]' }] }];
    /** @nocollapse */
    RouterLink.ctorParameters = function () {
        return [{ type: Router }, { type: ActivatedRoute }, { type: undefined, decorators: [{ type: _core.Attribute, args: ['tabindex'] }] }, { type: _core.Renderer }, { type: _core.ElementRef }];
    };
    RouterLink.propDecorators = {
        'queryParams': [{ type: _core.Input }],
        'fragment': [{ type: _core.Input }],
        'queryParamsHandling': [{ type: _core.Input }],
        'preserveFragment': [{ type: _core.Input }],
        'skipLocationChange': [{ type: _core.Input }],
        'replaceUrl': [{ type: _core.Input }],
        'routerLink': [{ type: _core.Input }],
        'preserveQueryParams': [{ type: _core.Input }],
        'onClick': [{ type: _core.HostListener, args: ['click'] }]
    };
    /**
     * \@whatItDoes Lets you link to specific parts of your app.
     *
     * See {\@link RouterLink} for more information.
     *
     * \@ngModule RouterModule
     *
     * \@stable
     */

    var RouterLinkWithHref = function () {
        /**
         * @param {?} router
         * @param {?} route
         * @param {?} locationStrategy
         */
        function RouterLinkWithHref(router, route, locationStrategy) {
            var _this34 = this;

            _classCallCheck(this, RouterLinkWithHref);

            this.router = router;
            this.route = route;
            this.locationStrategy = locationStrategy;
            this.commands = [];
            this.subscription = router.events.subscribe(function (s) {
                if (s instanceof NavigationEnd) {
                    _this34.updateTargetUrlAndHref();
                }
            });
        }
        /**
         * @param {?} commands
         * @return {?}
         */


        _createClass(RouterLinkWithHref, [{
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                this.updateTargetUrlAndHref();
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                this.subscription.unsubscribe();
            }
        }, {
            key: 'onClick',
            value: function onClick(button, ctrlKey, metaKey) {
                if (button !== 0 || ctrlKey || metaKey) {
                    return true;
                }
                if (typeof this.target === 'string' && this.target != '_self') {
                    return true;
                }
                var /** @type {?} */extras = {
                    skipLocationChange: attrBoolValue(this.skipLocationChange),
                    replaceUrl: attrBoolValue(this.replaceUrl)
                };
                this.router.navigateByUrl(this.urlTree, extras);
                return false;
            }
        }, {
            key: 'updateTargetUrlAndHref',
            value: function updateTargetUrlAndHref() {
                this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
            }
        }, {
            key: 'routerLink',
            set: function set(commands) {
                if (commands != null) {
                    this.commands = Array.isArray(commands) ? commands : [commands];
                } else {
                    this.commands = [];
                }
            }
        }, {
            key: 'preserveQueryParams',
            set: function set(value) {
                if ((0, _core.isDevMode)() && console && console.warn) {
                    console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
                }
                this.preserve = value;
            }
        }, {
            key: 'urlTree',
            get: function get() {
                return this.router.createUrlTree(this.commands, {
                    relativeTo: this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    preserveQueryParams: attrBoolValue(this.preserve),
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: attrBoolValue(this.preserveFragment)
                });
            }
        }]);

        return RouterLinkWithHref;
    }();

    RouterLinkWithHref.decorators = [{ type: _core.Directive, args: [{ selector: 'a[routerLink]' }] }];
    /** @nocollapse */
    RouterLinkWithHref.ctorParameters = function () {
        return [{ type: Router }, { type: ActivatedRoute }, { type: _common.LocationStrategy }];
    };
    RouterLinkWithHref.propDecorators = {
        'target': [{ type: _core.HostBinding, args: ['attr.target'] }, { type: _core.Input }],
        'queryParams': [{ type: _core.Input }],
        'fragment': [{ type: _core.Input }],
        'queryParamsHandling': [{ type: _core.Input }],
        'preserveFragment': [{ type: _core.Input }],
        'skipLocationChange': [{ type: _core.Input }],
        'replaceUrl': [{ type: _core.Input }],
        'href': [{ type: _core.HostBinding }],
        'routerLink': [{ type: _core.Input }],
        'preserveQueryParams': [{ type: _core.Input }],
        'onClick': [{ type: _core.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey']] }]
    };
    /**
     * @param {?} s
     * @return {?}
     */
    function attrBoolValue(s) {
        return s === '' || !!s;
    }

    /**
     * \@whatItDoes Lets you add a CSS class to an element when the link's route becomes active.
     *
     * \@howToUse
     *
     * ```
     * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
     * ```
     *
     * \@description
     *
     * The RouterLinkActive directive lets you add a CSS class to an element when the link's route
     * becomes active.
     *
     * Consider the following example:
     *
     * ```
     * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
     * ```
     *
     * When the url is either '/user' or '/user/bob', the active-link class will
     * be added to the `a` tag. If the url changes, the class will be removed.
     *
     * You can set more than one class, as follows:
     *
     * ```
     * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
     * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
     * ```
     *
     * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
     * only when the url matches the link exactly.
     *
     * ```
     * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
     * true}">Bob</a>
     * ```
     *
     * You can assign the RouterLinkActive instance to a template variable and directly check
     * the `isActive` status.
     * ```
     * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
     *   Bob {{ rla.isActive ? '(already open)' : ''}}
     * </a>
     * ```
     *
     * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
     *
     * ```
     * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
     *   <a routerLink="/user/jim">Jim</a>
     *   <a routerLink="/user/bob">Bob</a>
     * </div>
     * ```
     *
     * This will set the active-link class on the div tag if the url is either '/user/jim' or
     * '/user/bob'.
     *
     * \@ngModule RouterModule
     *
     * \@stable
     */

    var RouterLinkActive = function () {
        /**
         * @param {?} router
         * @param {?} element
         * @param {?} renderer
         * @param {?} cdr
         */
        function RouterLinkActive(router, element, renderer, cdr) {
            var _this35 = this;

            _classCallCheck(this, RouterLinkActive);

            this.router = router;
            this.element = element;
            this.renderer = renderer;
            this.cdr = cdr;
            this.classes = [];
            this.active = false;
            this.routerLinkActiveOptions = { exact: false };
            this.subscription = router.events.subscribe(function (s) {
                if (s instanceof NavigationEnd) {
                    _this35.update();
                }
            });
        }
        /**
         * @return {?}
         */


        _createClass(RouterLinkActive, [{
            key: 'ngAfterContentInit',
            value: function ngAfterContentInit() {
                var _this36 = this;

                this.links.changes.subscribe(function (_) {
                    return _this36.update();
                });
                this.linksWithHrefs.changes.subscribe(function (_) {
                    return _this36.update();
                });
                this.update();
            }
        }, {
            key: 'ngOnChanges',
            value: function ngOnChanges(changes) {
                this.update();
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                this.subscription.unsubscribe();
            }
        }, {
            key: 'update',
            value: function update() {
                var _this37 = this;

                if (!this.links || !this.linksWithHrefs || !this.router.navigated) return;
                var /** @type {?} */hasActiveLinks = this.hasActiveLinks();
                // react only when status has changed to prevent unnecessary dom updates
                if (this.active !== hasActiveLinks) {
                    this.active = hasActiveLinks;
                    this.classes.forEach(function (c) {
                        return _this37.renderer.setElementClass(_this37.element.nativeElement, c, hasActiveLinks);
                    });
                    this.cdr.detectChanges();
                }
            }
        }, {
            key: 'isLinkActive',
            value: function isLinkActive(router) {
                var _this38 = this;

                return function (link) {
                    return router.isActive(link.urlTree, _this38.routerLinkActiveOptions.exact);
                };
            }
        }, {
            key: 'hasActiveLinks',
            value: function hasActiveLinks() {
                return this.links.some(this.isLinkActive(this.router)) || this.linksWithHrefs.some(this.isLinkActive(this.router));
            }
        }, {
            key: 'isActive',
            get: function get() {
                return this.active;
            }
        }, {
            key: 'routerLinkActive',
            set: function set(data) {
                var /** @type {?} */classes = Array.isArray(data) ? data : data.split(' ');
                this.classes = classes.filter(function (c) {
                    return !!c;
                });
            }
        }]);

        return RouterLinkActive;
    }();

    RouterLinkActive.decorators = [{ type: _core.Directive, args: [{
            selector: '[routerLinkActive]',
            exportAs: 'routerLinkActive'
        }] }];
    /** @nocollapse */
    RouterLinkActive.ctorParameters = function () {
        return [{ type: Router }, { type: _core.ElementRef }, { type: _core.Renderer }, { type: _core.ChangeDetectorRef }];
    };
    RouterLinkActive.propDecorators = {
        'links': [{ type: _core.ContentChildren, args: [RouterLink, { descendants: true }] }],
        'linksWithHrefs': [{ type: _core.ContentChildren, args: [RouterLinkWithHref, { descendants: true }] }],
        'routerLinkActiveOptions': [{ type: _core.Input }],
        'routerLinkActive': [{ type: _core.Input }]
    };

    /**
     * \@whatItDoes Acts as a placeholder that Angular dynamically fills based on the current router
     * state.
     *
     * \@howToUse
     *
     * ```
     * <router-outlet></router-outlet>
     * <router-outlet name='left'></router-outlet>
     * <router-outlet name='right'></router-outlet>
     * ```
     *
     * A router outlet will emit an activate event any time a new component is being instantiated,
     * and a deactivate event when it is being destroyed.
     *
     * ```
     * <router-outlet
     *   (activate)='onActivate($event)'
     *   (deactivate)='onDeactivate($event)'></router-outlet>
     * ```
     * \@ngModule RouterModule
     *
     * \@stable
     */

    var RouterOutlet = function () {
        /**
         * @param {?} parentOutletMap
         * @param {?} location
         * @param {?} resolver
         * @param {?} name
         */
        function RouterOutlet(parentOutletMap, location, resolver, name) {
            _classCallCheck(this, RouterOutlet);

            this.parentOutletMap = parentOutletMap;
            this.location = location;
            this.resolver = resolver;
            this.name = name;
            this.activateEvents = new _core.EventEmitter();
            this.deactivateEvents = new _core.EventEmitter();
            parentOutletMap.registerOutlet(name ? name : PRIMARY_OUTLET, this);
        }
        /**
         * @return {?}
         */


        _createClass(RouterOutlet, [{
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                this.parentOutletMap.removeOutlet(this.name ? this.name : PRIMARY_OUTLET);
            }
        }, {
            key: 'detach',
            value: function detach() {
                if (!this.activated) throw new Error('Outlet is not activated');
                this.location.detach();
                var /** @type {?} */r = this.activated;
                this.activated = null;
                this._activatedRoute = null;
                return r;
            }
        }, {
            key: 'attach',
            value: function attach(ref, activatedRoute) {
                this.activated = ref;
                this._activatedRoute = activatedRoute;
                this.location.insert(ref.hostView);
            }
        }, {
            key: 'deactivate',
            value: function deactivate() {
                if (this.activated) {
                    var /** @type {?} */c = this.component;
                    this.activated.destroy();
                    this.activated = null;
                    this._activatedRoute = null;
                    this.deactivateEvents.emit(c);
                }
            }
        }, {
            key: 'activate',
            value: function activate(activatedRoute, resolver, injector, providers, outletMap) {
                if (this.isActivated) {
                    throw new Error('Cannot activate an already activated outlet');
                }
                this.outletMap = outletMap;
                this._activatedRoute = activatedRoute;
                var /** @type {?} */snapshot = activatedRoute._futureSnapshot;
                var /** @type {?} */component = snapshot._routeConfig.component;
                var /** @type {?} */factory = resolver.resolveComponentFactory(component);
                var /** @type {?} */inj = _core.ReflectiveInjector.fromResolvedProviders(providers, injector);
                this.activated = this.location.createComponent(factory, this.location.length, inj, []);
                this.activated.changeDetectorRef.detectChanges();
                this.activateEvents.emit(this.activated.instance);
            }
        }, {
            key: 'locationInjector',
            get: function get() {
                return this.location.injector;
            }
        }, {
            key: 'locationFactoryResolver',
            get: function get() {
                return this.resolver;
            }
        }, {
            key: 'isActivated',
            get: function get() {
                return !!this.activated;
            }
        }, {
            key: 'component',
            get: function get() {
                if (!this.activated) throw new Error('Outlet is not activated');
                return this.activated.instance;
            }
        }, {
            key: 'activatedRoute',
            get: function get() {
                if (!this.activated) throw new Error('Outlet is not activated');
                return this._activatedRoute;
            }
        }]);

        return RouterOutlet;
    }();

    RouterOutlet.decorators = [{ type: _core.Directive, args: [{ selector: 'router-outlet' }] }];
    /** @nocollapse */
    RouterOutlet.ctorParameters = function () {
        return [{ type: RouterOutletMap }, { type: _core.ViewContainerRef }, { type: _core.ComponentFactoryResolver }, { type: undefined, decorators: [{ type: _core.Attribute, args: ['name'] }] }];
    };
    RouterOutlet.propDecorators = {
        'activateEvents': [{ type: _core.Output, args: ['activate'] }],
        'deactivateEvents': [{ type: _core.Output, args: ['deactivate'] }]
    };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@whatItDoes Provides a way to customize when activated routes get reused.
     *
     * \@experimental
     * @abstract
     */

    var RouteReuseStrategy = function () {
        function RouteReuseStrategy() {
            _classCallCheck(this, RouteReuseStrategy);
        }

        _createClass(RouteReuseStrategy, [{
            key: 'shouldDetach',
            value: function shouldDetach(route) {}
        }, {
            key: 'store',
            value: function store(route, handle) {}
        }, {
            key: 'shouldAttach',
            value: function shouldAttach(route) {}
        }, {
            key: 'retrieve',
            value: function retrieve(route) {}
        }, {
            key: 'shouldReuseRoute',
            value: function shouldReuseRoute(future, curr) {}
        }]);

        return RouteReuseStrategy;
    }();

    var PreloadingStrategy = function () {
        function PreloadingStrategy() {
            _classCallCheck(this, PreloadingStrategy);
        }

        _createClass(PreloadingStrategy, [{
            key: 'preload',
            value: function preload(route, fn) {}
        }]);

        return PreloadingStrategy;
    }();

    var PreloadAllModules = function () {
        function PreloadAllModules() {
            _classCallCheck(this, PreloadAllModules);
        }

        _createClass(PreloadAllModules, [{
            key: 'preload',
            value: function preload(route, fn) {
                return _catch2._catch.call(fn(), function () {
                    return (0, _of.of)(null);
                });
            }
        }]);

        return PreloadAllModules;
    }();

    var NoPreloading = function () {
        function NoPreloading() {
            _classCallCheck(this, NoPreloading);
        }

        _createClass(NoPreloading, [{
            key: 'preload',
            value: function preload(route, fn) {
                return (0, _of.of)(null);
            }
        }]);

        return NoPreloading;
    }();

    var RouterPreloader = function () {
        /**
         * @param {?} router
         * @param {?} moduleLoader
         * @param {?} compiler
         * @param {?} injector
         * @param {?} preloadingStrategy
         */
        function RouterPreloader(router, moduleLoader, compiler, injector, preloadingStrategy) {
            _classCallCheck(this, RouterPreloader);

            this.router = router;
            this.injector = injector;
            this.preloadingStrategy = preloadingStrategy;
            var onStartLoad = function onStartLoad(r) {
                return router.triggerEvent(new RouteConfigLoadStart(r));
            };
            var onEndLoad = function onEndLoad(r) {
                return router.triggerEvent(new RouteConfigLoadEnd(r));
            };
            this.loader = new RouterConfigLoader(moduleLoader, compiler, onStartLoad, onEndLoad);
        }

        _createClass(RouterPreloader, [{
            key: 'setUpPreloading',
            value: function setUpPreloading() {
                var _this39 = this;

                var /** @type {?} */navigations = _filter.filter.call(this.router.events, function (e) {
                    return e instanceof NavigationEnd;
                });
                this.subscription = _concatMap.concatMap.call(navigations, function () {
                    return _this39.preload();
                }).subscribe(function () {});
            }
        }, {
            key: 'preload',
            value: function preload() {
                return this.processRoutes(this.injector, this.router.config);
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                this.subscription.unsubscribe();
            }
        }, {
            key: 'processRoutes',
            value: function processRoutes(injector, routes) {
                var /** @type {?} */res = [];
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                    for (var _iterator10 = routes[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                        var c = _step10.value;

                        // we already have the config loaded, just recurse
                        if (c.loadChildren && !c.canLoad && c._loadedConfig) {
                            var /** @type {?} */childConfig = c._loadedConfig;
                            res.push(this.processRoutes(childConfig.injector, childConfig.routes));
                        } else if (c.loadChildren && !c.canLoad) {
                            res.push(this.preloadConfig(injector, c));
                        } else if (c.children) {
                            res.push(this.processRoutes(injector, c.children));
                        }
                    }
                } catch (err) {
                    _didIteratorError10 = true;
                    _iteratorError10 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
                            _iterator10.return();
                        }
                    } finally {
                        if (_didIteratorError10) {
                            throw _iteratorError10;
                        }
                    }
                }

                return _mergeAll.mergeAll.call((0, _from.from)(res));
            }
        }, {
            key: 'preloadConfig',
            value: function preloadConfig(injector, route) {
                var _this40 = this;

                return this.preloadingStrategy.preload(route, function () {
                    var /** @type {?} */loaded = _this40.loader.load(injector, route);
                    return _mergeMap.mergeMap.call(loaded, function (config) {
                        var /** @type {?} */c = route;
                        c._loadedConfig = config;
                        return _this40.processRoutes(config.injector, config.routes);
                    });
                });
            }
        }]);

        return RouterPreloader;
    }();

    RouterPreloader.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    RouterPreloader.ctorParameters = function () {
        return [{ type: Router }, { type: _core.NgModuleFactoryLoader }, { type: _core.Compiler }, { type: _core.Injector }, { type: PreloadingStrategy }];
    };

    /**
     * @whatItDoes Contains a list of directives
     * @stable
     */
    var /** @type {?} */ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive];
    /**
     * @whatItDoes Is used in DI to configure the router.
     * @stable
     */
    var /** @type {?} */ROUTER_CONFIGURATION = new _core.InjectionToken('ROUTER_CONFIGURATION');
    /**
     * @docsNotRequired
     */
    var /** @type {?} */ROUTER_FORROOT_GUARD = new _core.InjectionToken('ROUTER_FORROOT_GUARD');
    var /** @type {?} */ROUTER_PROVIDERS = [_common.Location, { provide: UrlSerializer, useClass: DefaultUrlSerializer }, {
        provide: Router,
        useFactory: setupRouter,
        deps: [_core.ApplicationRef, UrlSerializer, RouterOutletMap, _common.Location, _core.Injector, _core.NgModuleFactoryLoader, _core.Compiler, ROUTES, ROUTER_CONFIGURATION, [UrlHandlingStrategy, new _core.Optional()], [RouteReuseStrategy, new _core.Optional()]]
    }, RouterOutletMap, { provide: ActivatedRoute, useFactory: rootRoute, deps: [Router] }, { provide: _core.NgModuleFactoryLoader, useClass: _core.SystemJsNgModuleLoader }, RouterPreloader, NoPreloading, PreloadAllModules, { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } }];
    /**
     * @return {?}
     */
    function routerNgProbeToken() {
        return new _core.NgProbeToken('Router', Router);
    }
    /**
     * \@whatItDoes Adds router directives and providers.
     *
     * \@howToUse
     *
     * RouterModule can be imported multiple times: once per lazily-loaded bundle.
     * Since the router deals with a global shared resource--location, we cannot have
     * more than one router service active.
     *
     * That is why there are two ways to create the module: `RouterModule.forRoot` and
     * `RouterModule.forChild`.
     *
     * * `forRoot` creates a module that contains all the directives, the given routes, and the router
     *   service itself.
     * * `forChild` creates a module that contains all the directives and the given routes, but does not
     *   include the router service.
     *
     * When registered at the root, the module should be used as follows
     *
     * ```
     * \@NgModule({
     *   imports: [RouterModule.forRoot(ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * For submodules and lazy loaded submodules the module should be used as follows:
     *
     * ```
     * \@NgModule({
     *   imports: [RouterModule.forChild(ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * \@description
     *
     * Managing state transitions is one of the hardest parts of building applications. This is
     * especially true on the web, where you also need to ensure that the state is reflected in the URL.
     * In addition, we often want to split applications into multiple bundles and load them on demand.
     * Doing this transparently is not trivial.
     *
     * The Angular router solves these problems. Using the router, you can declaratively specify
     * application states, manage state transitions while taking care of the URL, and load bundles on
     * demand.
     *
     * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
     * overview of how the router should be used.
     *
     * \@stable
     */

    var RouterModule = function () {
        /**
         * @param {?} guard
         */
        function RouterModule(guard) {
            _classCallCheck(this, RouterModule);
        }
        /**
         * Creates a module with all the router providers and directives. It also optionally sets up an
         * application listener to perform an initial navigation.
         *
         * Options:
         * * `enableTracing` makes the router log all its internal events to the console.
         * * `useHash` enables the location strategy that uses the URL fragment instead of the history
         * API.
         * * `initialNavigation` disables the initial navigation.
         * * `errorHandler` provides a custom error handler.
         * @param {?} routes
         * @param {?=} config
         * @return {?}
         */


        _createClass(RouterModule, null, [{
            key: 'forRoot',
            value: function forRoot(routes, config) {
                return {
                    ngModule: RouterModule,
                    providers: [ROUTER_PROVIDERS, provideRoutes(routes), {
                        provide: ROUTER_FORROOT_GUARD,
                        useFactory: provideForRootGuard,
                        deps: [[Router, new _core.Optional(), new _core.SkipSelf()]]
                    }, { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} }, {
                        provide: _common.LocationStrategy,
                        useFactory: provideLocationStrategy,
                        deps: [_common.PlatformLocation, [new _core.Inject(_common.APP_BASE_HREF), new _core.Optional()], ROUTER_CONFIGURATION]
                    }, {
                        provide: PreloadingStrategy,
                        useExisting: config && config.preloadingStrategy ? config.preloadingStrategy : NoPreloading
                    }, { provide: _core.NgProbeToken, multi: true, useFactory: routerNgProbeToken }, provideRouterInitializer()]
                };
            }
        }, {
            key: 'forChild',
            value: function forChild(routes) {
                return { ngModule: RouterModule, providers: [provideRoutes(routes)] };
            }
        }]);

        return RouterModule;
    }();

    RouterModule.decorators = [{ type: _core.NgModule, args: [{ declarations: ROUTER_DIRECTIVES, exports: ROUTER_DIRECTIVES }] }];
    /** @nocollapse */
    RouterModule.ctorParameters = function () {
        return [{ type: undefined, decorators: [{ type: _core.Optional }, { type: _core.Inject, args: [ROUTER_FORROOT_GUARD] }] }];
    };
    /**
     * @param {?} platformLocationStrategy
     * @param {?} baseHref
     * @param {?=} options
     * @return {?}
     */
    function provideLocationStrategy(platformLocationStrategy, baseHref) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return options.useHash ? new _common.HashLocationStrategy(platformLocationStrategy, baseHref) : new _common.PathLocationStrategy(platformLocationStrategy, baseHref);
    }
    /**
     * @param {?} router
     * @return {?}
     */
    function provideForRootGuard(router) {
        if (router) {
            throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
        }
        return 'guarded';
    }
    /**
     * \@whatItDoes Registers routes.
     *
     * \@howToUse
     *
     * ```
     * \@NgModule({
     *   imports: [RouterModule.forChild(ROUTES)],
     *   providers: [provideRoutes(EXTRA_ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * \@stable
     * @param {?} routes
     * @return {?}
     */
    function provideRoutes(routes) {
        return [{ provide: _core.ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: routes }, { provide: ROUTES, multi: true, useValue: routes }];
    }
    /**
     * @param {?} ref
     * @param {?} urlSerializer
     * @param {?} outletMap
     * @param {?} location
     * @param {?} injector
     * @param {?} loader
     * @param {?} compiler
     * @param {?} config
     * @param {?=} opts
     * @param {?=} urlHandlingStrategy
     * @param {?=} routeReuseStrategy
     * @return {?}
     */
    function setupRouter(ref, urlSerializer, outletMap, location, injector, loader, compiler, config) {
        var opts = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {};
        var urlHandlingStrategy = arguments[9];
        var routeReuseStrategy = arguments[10];

        var /** @type {?} */router = new Router(null, urlSerializer, outletMap, location, injector, loader, compiler, flatten(config));
        if (urlHandlingStrategy) {
            router.urlHandlingStrategy = urlHandlingStrategy;
        }
        if (routeReuseStrategy) {
            router.routeReuseStrategy = routeReuseStrategy;
        }
        if (opts.errorHandler) {
            router.errorHandler = opts.errorHandler;
        }
        if (opts.enableTracing) {
            var /** @type {?} */dom = (0, _platformBrowser.ɵgetDOM)();
            router.events.subscribe(function (e) {
                dom.logGroup('Router Event: ' + e.constructor.name);
                dom.log(e.toString());
                dom.log(e);
                dom.logGroupEnd();
            });
        }
        return router;
    }
    /**
     * @param {?} router
     * @return {?}
     */
    function rootRoute(router) {
        return router.routerState.root;
    }
    /**
     * @param {?} router
     * @param {?} ref
     * @param {?} preloader
     * @param {?} opts
     * @return {?}
     */
    function initialRouterNavigation(router, ref, preloader, opts) {
        return function (bootstrappedComponentRef) {
            if (bootstrappedComponentRef !== ref.components[0]) {
                return;
            }
            router.resetRootComponentType(ref.componentTypes[0]);
            preloader.setUpPreloading();
            if (opts.initialNavigation === false) {
                router.setUpLocationChangeListener();
            } else {
                router.initialNavigation();
            }
        };
    }
    /**
     * A token for the router initializer that will be called after the app is bootstrapped.
     *
     * @experimental
     */
    var /** @type {?} */ROUTER_INITIALIZER = new _core.InjectionToken('Router Initializer');
    /**
     * @return {?}
     */
    function provideRouterInitializer() {
        return [{
            provide: ROUTER_INITIALIZER,
            useFactory: initialRouterNavigation,
            deps: [Router, _core.ApplicationRef, RouterPreloader, ROUTER_CONFIGURATION]
        }, { provide: _core.APP_BOOTSTRAP_LISTENER, multi: true, useExisting: ROUTER_INITIALIZER }];
    }

    /**
     * @stable
     */
    var /** @type {?} */VERSION = new _core.Version('4.0.0-rc.1');

    exports.RouterLink = RouterLink;
    exports.RouterLinkWithHref = RouterLinkWithHref;
    exports.RouterLinkActive = RouterLinkActive;
    exports.RouterOutlet = RouterOutlet;
    exports.NavigationCancel = NavigationCancel;
    exports.NavigationEnd = NavigationEnd;
    exports.NavigationError = NavigationError;
    exports.NavigationStart = NavigationStart;
    exports.RouteConfigLoadEnd = RouteConfigLoadEnd;
    exports.RouteConfigLoadStart = RouteConfigLoadStart;
    exports.RoutesRecognized = RoutesRecognized;
    exports.RouteReuseStrategy = RouteReuseStrategy;
    exports.Router = Router;
    exports.ROUTES = ROUTES;
    exports.ROUTER_CONFIGURATION = ROUTER_CONFIGURATION;
    exports.ROUTER_INITIALIZER = ROUTER_INITIALIZER;
    exports.RouterModule = RouterModule;
    exports.provideRoutes = provideRoutes;
    exports.RouterOutletMap = RouterOutletMap;
    exports.NoPreloading = NoPreloading;
    exports.PreloadAllModules = PreloadAllModules;
    exports.PreloadingStrategy = PreloadingStrategy;
    exports.RouterPreloader = RouterPreloader;
    exports.ActivatedRoute = ActivatedRoute;
    exports.ActivatedRouteSnapshot = ActivatedRouteSnapshot;
    exports.RouterState = RouterState;
    exports.RouterStateSnapshot = RouterStateSnapshot;
    exports.PRIMARY_OUTLET = PRIMARY_OUTLET;
    exports.UrlHandlingStrategy = UrlHandlingStrategy;
    exports.DefaultUrlSerializer = DefaultUrlSerializer;
    exports.UrlSegment = UrlSegment;
    exports.UrlSegmentGroup = UrlSegmentGroup;
    exports.UrlSerializer = UrlSerializer;
    exports.UrlTree = UrlTree;
    exports.VERSION = VERSION;
    exports.ɵROUTER_PROVIDERS = ROUTER_PROVIDERS;
    exports.ɵflatten = flatten;
    exports.ɵa = ROUTER_FORROOT_GUARD;
    exports.ɵg = initialRouterNavigation;
    exports.ɵd = provideForRootGuard;
    exports.ɵc = provideLocationStrategy;
    exports.ɵh = provideRouterInitializer;
    exports.ɵf = rootRoute;
    exports.ɵb = routerNgProbeToken;
    exports.ɵe = setupRouter;
    exports.ɵi = Tree;
    exports.ɵj = TreeNode;
});
