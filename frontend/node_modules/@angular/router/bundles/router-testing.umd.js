/**
 * @license Angular v4.0.0-rc.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/router/testing', ['exports', '@angular/common', '@angular/common/testing', '@angular/core', '@angular/router'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/common'), require('@angular/common/testing'), require('@angular/core'), require('@angular/router'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.common, global.ng.common.testing, global.ng.core, global.ng.router);
        global.ng = global.ng || {};
        global.ng.router = global.ng.router || {};
        global.ng.router.testing = mod.exports;
    }
})(this, function (exports, _common, _testing, _core, _router) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.RouterTestingModule = exports.setupTestingRouter = exports.SpyNgModuleFactoryLoader = undefined;

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

    var SpyNgModuleFactoryLoader = function () {
        function SpyNgModuleFactoryLoader(compiler) {
            _classCallCheck(this, SpyNgModuleFactoryLoader);

            this.compiler = compiler;
            /**
             * @docsNotRequired
             */
            this._stubbedModules = {};
        }
        /**
         * @docsNotRequired
         */


        _createClass(SpyNgModuleFactoryLoader, [{
            key: 'load',
            value: function load(path) {
                if (this._stubbedModules[path]) {
                    return this._stubbedModules[path];
                } else {
                    return Promise.reject(new Error('Cannot find module ' + path));
                }
            }
        }, {
            key: 'stubbedModules',
            set: function set(modules) {
                var res = {};
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(modules)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var t = _step.value;

                        res[t] = this.compiler.compileModuleAsync(modules[t]);
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

                this._stubbedModules = res;
            },
            get: function get() {
                return this._stubbedModules;
            }
        }]);

        return SpyNgModuleFactoryLoader;
    }();

    SpyNgModuleFactoryLoader.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    SpyNgModuleFactoryLoader.ctorParameters = function () {
        return [{ type: _core.Compiler }];
    };
    /**
     * Router setup factory function used for testing.
     *
     * @stable
     */
    function setupTestingRouter(urlSerializer, outletMap, location, loader, compiler, injector, routes, urlHandlingStrategy) {
        var router = new _router.Router(null, urlSerializer, outletMap, location, injector, loader, compiler, (0, _router.ɵflatten)(routes));
        if (urlHandlingStrategy) {
            router.urlHandlingStrategy = urlHandlingStrategy;
        }
        return router;
    }
    /**
     * @whatItDoes Sets up the router to be used for testing.
     *
     * @howToUse
     *
     * ```
     * beforeEach(() => {
     *   TestBed.configureTestModule({
     *     imports: [
     *       RouterTestingModule.withRoutes(
     *         [{path: '', component: BlankCmp}, {path: 'simple', component: SimpleCmp}])]
     *       )
     *     ]
     *   });
     * });
     * ```
     *
     * @description
     *
     * The modules sets up the router to be used for testing.
     * It provides spy implementations of {@link Location}, {@link LocationStrategy}, and {@link
     * NgModuleFactoryLoader}.
     *
     * @stable
     */

    var RouterTestingModule = function () {
        function RouterTestingModule() {
            _classCallCheck(this, RouterTestingModule);
        }

        _createClass(RouterTestingModule, null, [{
            key: 'withRoutes',
            value: function withRoutes(routes) {
                return { ngModule: RouterTestingModule, providers: [(0, _router.provideRoutes)(routes)] };
            }
        }]);

        return RouterTestingModule;
    }();

    RouterTestingModule.decorators = [{ type: _core.NgModule, args: [{
            exports: [_router.RouterModule],
            providers: [_router.ɵROUTER_PROVIDERS, { provide: _common.Location, useClass: _testing.SpyLocation }, { provide: _common.LocationStrategy, useClass: _testing.MockLocationStrategy }, { provide: _core.NgModuleFactoryLoader, useClass: SpyNgModuleFactoryLoader }, {
                provide: _router.Router,
                useFactory: setupTestingRouter,
                deps: [_router.UrlSerializer, _router.RouterOutletMap, _common.Location, _core.NgModuleFactoryLoader, _core.Compiler, _core.Injector, _router.ROUTES, [_router.UrlHandlingStrategy, new _core.Optional()]]
            }, { provide: _router.PreloadingStrategy, useExisting: _router.NoPreloading }, (0, _router.provideRoutes)([])]
        }] }];
    /** @nocollapse */
    RouterTestingModule.ctorParameters = function () {
        return [];
    };

    exports.SpyNgModuleFactoryLoader = SpyNgModuleFactoryLoader;
    exports.setupTestingRouter = setupTestingRouter;
    exports.RouterTestingModule = RouterTestingModule;
});
