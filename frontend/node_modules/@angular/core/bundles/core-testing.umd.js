/**
 * @license Angular v4.0.0-rc.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/core/testing', ['exports', '@angular/core'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/core'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.core);
        global.ng = global.ng || {};
        global.ng.core = global.ng.core || {};
        global.ng.core.testing = mod.exports;
    }
})(this, function (exports, _core) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ɵTestingCompilerFactory = exports.ɵTestingCompiler = exports.ɵMockAnimationPlayer = exports.__core_private_testing_placeholder__ = exports.withModule = exports.InjectSetupWrapper = exports.inject = exports.getTestBed = exports.TestBed = exports.ComponentFixtureNoNgZone = exports.ComponentFixtureAutoDetect = exports.TestComponentRenderer = exports.flushMicrotasks = exports.discardPeriodicTasks = exports.tick = exports.fakeAsync = exports.resetFakeAsyncZone = exports.ComponentFixture = exports.async = undefined;

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

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _global = typeof window === 'undefined' ? global : window;
    /**
     * Wraps a test function in an asynchronous test zone. The test will automatically
     * complete when all asynchronous calls within this zone are done. Can be used
     * to wrap an {@link inject} call.
     *
     * Example:
     *
     * ```
     * it('...', async(inject([AClass], (object) => {
     *   object.doSomething.then(() => {
     *     expect(...);
     *   })
     * });
     * ```
     *
     * @stable
     */
    function async(fn) {
        // If we're running using the Jasmine test framework, adapt to call the 'done'
        // function when asynchronous activity is finished.
        if (_global.jasmine) {
            // Not using an arrow function to preserve context passed from call site
            return function (done) {
                if (!done) {
                    // if we run beforeEach in @angular/core/testing/testing_internal then we get no done
                    // fake it here and assume sync.
                    done = function done() {};
                    done.fail = function (e) {
                        throw e;
                    };
                }
                runInTestZone(fn, this, done, function (err) {
                    if (typeof err === 'string') {
                        return done.fail(new Error(err));
                    } else {
                        done.fail(err);
                    }
                });
            };
        }
        // Otherwise, return a promise which will resolve when asynchronous activity
        // is finished. This will be correctly consumed by the Mocha framework with
        // it('...', async(myFn)); or can be used in a custom framework.
        // Not using an arrow function to preserve context passed from call site
        return function () {
            var _this = this;

            return new Promise(function (finishCallback, failCallback) {
                runInTestZone(fn, _this, finishCallback, failCallback);
            });
        };
    }
    function runInTestZone(fn, context, finishCallback, failCallback) {
        var currentZone = Zone.current;
        var AsyncTestZoneSpec = Zone['AsyncTestZoneSpec'];
        if (AsyncTestZoneSpec === undefined) {
            throw new Error('AsyncTestZoneSpec is needed for the async() test helper but could not be found. ' + 'Please make sure that your environment includes zone.js/dist/async-test.js');
        }
        var ProxyZoneSpec = Zone['ProxyZoneSpec'];
        if (ProxyZoneSpec === undefined) {
            throw new Error('ProxyZoneSpec is needed for the async() test helper but could not be found. ' + 'Please make sure that your environment includes zone.js/dist/proxy.js');
        }
        var proxyZoneSpec = ProxyZoneSpec.get();
        ProxyZoneSpec.assertPresent();
        // We need to create the AsyncTestZoneSpec outside the ProxyZone.
        // If we do it in ProxyZone then we will get to infinite recursion.
        var proxyZone = Zone.current.getZoneWith('ProxyZoneSpec');
        var previousDelegate = proxyZoneSpec.getDelegate();
        proxyZone.parent.run(function () {
            var testZoneSpec = new AsyncTestZoneSpec(function () {
                // Need to restore the original zone.
                currentZone.run(function () {
                    if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                        // Only reset the zone spec if it's sill this one. Otherwise, assume it's OK.
                        proxyZoneSpec.setDelegate(previousDelegate);
                    }
                    finishCallback();
                });
            }, function (error) {
                // Need to restore the original zone.
                currentZone.run(function () {
                    if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                        // Only reset the zone spec if it's sill this one. Otherwise, assume it's OK.
                        proxyZoneSpec.setDelegate(previousDelegate);
                    }
                    failCallback(error);
                });
            }, 'test');
            proxyZoneSpec.setDelegate(testZoneSpec);
        });
        return Zone.current.runGuarded(fn, context);
    }

    function scheduleMicroTask(fn) {
        Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
    }
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
        var res = token.toString();
        var newLineIndex = res.indexOf('\n');
        return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
    }

    /**
     * Fixture for debugging and testing a component.
     *
     * @stable
     */

    var ComponentFixture = function () {
        function ComponentFixture(componentRef, ngZone, _autoDetect) {
            var _this2 = this;

            _classCallCheck(this, ComponentFixture);

            this.componentRef = componentRef;
            this.ngZone = ngZone;
            this._autoDetect = _autoDetect;
            this._isStable = true;
            this._isDestroyed = false;
            this._promise = null;
            this._onUnstableSubscription = null;
            this._onStableSubscription = null;
            this._onMicrotaskEmptySubscription = null;
            this._onErrorSubscription = null;
            this.changeDetectorRef = componentRef.changeDetectorRef;
            this.elementRef = componentRef.location;
            this.debugElement = (0, _core.getDebugNode)(this.elementRef.nativeElement);
            this.componentInstance = componentRef.instance;
            this.nativeElement = this.elementRef.nativeElement;
            this.componentRef = componentRef;
            this.ngZone = ngZone;
            if (ngZone != null) {
                this._onUnstableSubscription = ngZone.onUnstable.subscribe({ next: function next() {
                        _this2._isStable = false;
                    } });
                this._onMicrotaskEmptySubscription = ngZone.onMicrotaskEmpty.subscribe({
                    next: function next() {
                        if (_this2._autoDetect) {
                            // Do a change detection run with checkNoChanges set to true to check
                            // there are no changes on the second run.
                            _this2.detectChanges(true);
                        }
                    }
                });
                this._onStableSubscription = ngZone.onStable.subscribe({
                    next: function next() {
                        _this2._isStable = true;
                        // Check whether there is a pending whenStable() completer to resolve.
                        if (_this2._promise !== null) {
                            // If so check whether there are no pending macrotasks before resolving.
                            // Do this check in the next tick so that ngZone gets a chance to update the state of
                            // pending macrotasks.
                            scheduleMicroTask(function () {
                                if (!_this2.ngZone.hasPendingMacrotasks) {
                                    if (_this2._promise !== null) {
                                        _this2._resolve(true);
                                        _this2._resolve = null;
                                        _this2._promise = null;
                                    }
                                }
                            });
                        }
                    }
                });
                this._onErrorSubscription = ngZone.onError.subscribe({ next: function next(error) {
                        throw error;
                    } });
            }
        }

        _createClass(ComponentFixture, [{
            key: '_tick',
            value: function _tick(checkNoChanges) {
                this.changeDetectorRef.detectChanges();
                if (checkNoChanges) {
                    this.checkNoChanges();
                }
            }
        }, {
            key: 'detectChanges',
            value: function detectChanges() {
                var _this3 = this;

                var checkNoChanges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                if (this.ngZone != null) {
                    // Run the change detection inside the NgZone so that any async tasks as part of the change
                    // detection are captured by the zone and can be waited for in isStable.
                    this.ngZone.run(function () {
                        _this3._tick(checkNoChanges);
                    });
                } else {
                    // Running without zone. Just do the change detection.
                    this._tick(checkNoChanges);
                }
            }
        }, {
            key: 'checkNoChanges',
            value: function checkNoChanges() {
                this.changeDetectorRef.checkNoChanges();
            }
        }, {
            key: 'autoDetectChanges',
            value: function autoDetectChanges() {
                var autoDetect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                if (this.ngZone == null) {
                    throw new Error('Cannot call autoDetectChanges when ComponentFixtureNoNgZone is set');
                }
                this._autoDetect = autoDetect;
                this.detectChanges();
            }
        }, {
            key: 'isStable',
            value: function isStable() {
                return this._isStable && !this.ngZone.hasPendingMacrotasks;
            }
        }, {
            key: 'whenStable',
            value: function whenStable() {
                var _this4 = this;

                if (this.isStable()) {
                    return Promise.resolve(false);
                } else if (this._promise !== null) {
                    return this._promise;
                } else {
                    this._promise = new Promise(function (res) {
                        _this4._resolve = res;
                    });
                    return this._promise;
                }
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (!this._isDestroyed) {
                    this.componentRef.destroy();
                    if (this._onUnstableSubscription != null) {
                        this._onUnstableSubscription.unsubscribe();
                        this._onUnstableSubscription = null;
                    }
                    if (this._onStableSubscription != null) {
                        this._onStableSubscription.unsubscribe();
                        this._onStableSubscription = null;
                    }
                    if (this._onMicrotaskEmptySubscription != null) {
                        this._onMicrotaskEmptySubscription.unsubscribe();
                        this._onMicrotaskEmptySubscription = null;
                    }
                    if (this._onErrorSubscription != null) {
                        this._onErrorSubscription.unsubscribe();
                        this._onErrorSubscription = null;
                    }
                    this._isDestroyed = true;
                }
            }
        }]);

        return ComponentFixture;
    }();

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var FakeAsyncTestZoneSpec = Zone['FakeAsyncTestZoneSpec'];
    var ProxyZoneSpec = Zone['ProxyZoneSpec'];
    var _fakeAsyncTestZoneSpec = null;
    /**
     * Clears out the shared fake async zone for a test.
     * To be called in a global `beforeEach`.
     *
     * @experimental
     */
    function resetFakeAsyncZone() {
        _fakeAsyncTestZoneSpec = null;
        ProxyZoneSpec.assertPresent().resetDelegate();
    }
    var _inFakeAsyncCall = false;
    /**
     * Wraps a function to be executed in the fakeAsync zone:
     * - microtasks are manually executed by calling `flushMicrotasks()`,
     * - timers are synchronous, `tick()` simulates the asynchronous passage of time.
     *
     * If there are any pending timers at the end of the function, an exception will be thrown.
     *
     * Can be used to wrap inject() calls.
     *
     * ## Example
     *
     * {@example testing/ts/fake_async.ts region='basic'}
     *
     * @param fn
     * @returns {Function} The function wrapped to be executed in the fakeAsync zone
     *
     * @experimental
     */
    function fakeAsync(fn) {
        // Not using an arrow function to preserve context passed from call site
        return function () {
            var proxyZoneSpec = ProxyZoneSpec.assertPresent();
            if (_inFakeAsyncCall) {
                throw new Error('fakeAsync() calls can not be nested');
            }
            _inFakeAsyncCall = true;
            try {
                if (!_fakeAsyncTestZoneSpec) {
                    if (proxyZoneSpec.getDelegate() instanceof FakeAsyncTestZoneSpec) {
                        throw new Error('fakeAsync() calls can not be nested');
                    }
                    _fakeAsyncTestZoneSpec = new FakeAsyncTestZoneSpec();
                }
                var res = void 0;
                var lastProxyZoneSpec = proxyZoneSpec.getDelegate();
                proxyZoneSpec.setDelegate(_fakeAsyncTestZoneSpec);
                try {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    res = fn.apply(this, args);
                    flushMicrotasks();
                } finally {
                    proxyZoneSpec.setDelegate(lastProxyZoneSpec);
                }
                if (_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length > 0) {
                    throw new Error(_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length + ' ' + 'periodic timer(s) still in the queue.');
                }
                if (_fakeAsyncTestZoneSpec.pendingTimers.length > 0) {
                    throw new Error(_fakeAsyncTestZoneSpec.pendingTimers.length + ' timer(s) still in the queue.');
                }
                return res;
            } finally {
                _inFakeAsyncCall = false;
                resetFakeAsyncZone();
            }
        };
    }
    function _getFakeAsyncZoneSpec() {
        if (_fakeAsyncTestZoneSpec == null) {
            throw new Error('The code should be running in the fakeAsync zone to call this function');
        }
        return _fakeAsyncTestZoneSpec;
    }
    /**
     * Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
     *
     * The microtasks queue is drained at the very start of this function and after any timer callback
     * has been executed.
     *
     * ## Example
     *
     * {@example testing/ts/fake_async.ts region='basic'}
     *
     * @experimental
     */
    function tick() {
        var millis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        _getFakeAsyncZoneSpec().tick(millis);
    }
    /**
     * Discard all remaining periodic tasks.
     *
     * @experimental
     */
    function discardPeriodicTasks() {
        var zoneSpec = _getFakeAsyncZoneSpec();
        var pendingTimers = zoneSpec.pendingPeriodicTimers;
        zoneSpec.pendingPeriodicTimers.length = 0;
    }
    /**
     * Flush any pending microtasks.
     *
     * @experimental
     */
    function flushMicrotasks() {
        _getFakeAsyncZoneSpec().flushMicrotasks();
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Injectable completer that allows signaling completion of an asynchronous test. Used internally.
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var AsyncTestCompleter = function () {
        function AsyncTestCompleter() {
            var _this5 = this;

            _classCallCheck(this, AsyncTestCompleter);

            this._promise = new Promise(function (res, rej) {
                _this5._resolve = res;
                _this5._reject = rej;
            });
        }

        _createClass(AsyncTestCompleter, [{
            key: 'done',
            value: function done(value) {
                this._resolve(value);
            }
        }, {
            key: 'fail',
            value: function fail(error, stackTrace) {
                this._reject(error);
            }
        }, {
            key: 'promise',
            get: function get() {
                return this._promise;
            }
        }]);

        return AsyncTestCompleter;
    }();

    function unimplemented() {
        throw Error('unimplemented');
    }
    /**
     * Special interface to the compiler only used by testing
     *
     * @experimental
     */

    var TestingCompiler = function (_Compiler) {
        _inherits(TestingCompiler, _Compiler);

        function TestingCompiler() {
            _classCallCheck(this, TestingCompiler);

            return _possibleConstructorReturn(this, (TestingCompiler.__proto__ || Object.getPrototypeOf(TestingCompiler)).apply(this, arguments));
        }

        _createClass(TestingCompiler, [{
            key: 'overrideModule',
            value: function overrideModule(module, overrides) {
                throw unimplemented();
            }
        }, {
            key: 'overrideDirective',
            value: function overrideDirective(directive, overrides) {
                throw unimplemented();
            }
        }, {
            key: 'overrideComponent',
            value: function overrideComponent(component, overrides) {
                throw unimplemented();
            }
        }, {
            key: 'overridePipe',
            value: function overridePipe(directive, overrides) {
                throw unimplemented();
            }
        }, {
            key: 'injector',
            get: function get() {
                throw unimplemented();
            }
        }]);

        return TestingCompiler;
    }(_core.Compiler);

    var TestingCompilerFactory = function TestingCompilerFactory() {
        _classCallCheck(this, TestingCompilerFactory);
    };

    var UNDEFINED = new Object();
    /**
     * An abstract class for inserting the root test component element in a platform independent way.
     *
     * @experimental
     */

    var TestComponentRenderer = function () {
        function TestComponentRenderer() {
            _classCallCheck(this, TestComponentRenderer);
        }

        _createClass(TestComponentRenderer, [{
            key: 'insertRootElement',
            value: function insertRootElement(rootElementId) {}
        }]);

        return TestComponentRenderer;
    }();

    var _nextRootElementId = 0;
    /**
     * @experimental
     */
    var ComponentFixtureAutoDetect = new _core.InjectionToken('ComponentFixtureAutoDetect');
    /**
     * @experimental
     */
    var ComponentFixtureNoNgZone = new _core.InjectionToken('ComponentFixtureNoNgZone');
    /**
     * @whatItDoes Configures and initializes environment for unit testing and provides methods for
     * creating components and services in unit tests.
     * @description
     *
     * TestBed is the primary api for writing unit tests for Angular applications and libraries.
     *
     * @stable
     */

    var TestBed = function () {
        function TestBed() {
            _classCallCheck(this, TestBed);

            this._instantiated = false;
            this._compiler = null;
            this._moduleRef = null;
            this._moduleWithComponentFactories = null;
            this._compilerOptions = [];
            this._moduleOverrides = [];
            this._componentOverrides = [];
            this._directiveOverrides = [];
            this._pipeOverrides = [];
            this._providers = [];
            this._declarations = [];
            this._imports = [];
            this._schemas = [];
            this._activeFixtures = [];
            this.platform = null;
            this.ngModule = null;
        }
        /**
         * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
         * angular module. These are common to every test in the suite.
         *
         * This may only be called once, to set up the common providers for the current test
         * suite on the current platform. If you absolutely need to change the providers,
         * first use `resetTestEnvironment`.
         *
         * Test modules and platforms for individual platforms are available from
         * '@angular/<platform_name>/testing'.
         *
         * @experimental
         */


        _createClass(TestBed, [{
            key: 'initTestEnvironment',
            value: function initTestEnvironment(ngModule, platform) {
                if (this.platform || this.ngModule) {
                    throw new Error('Cannot set base providers because it has already been called');
                }
                this.platform = platform;
                this.ngModule = ngModule;
            }
        }, {
            key: 'resetTestEnvironment',
            value: function resetTestEnvironment() {
                this.resetTestingModule();
                this.platform = null;
                this.ngModule = null;
            }
        }, {
            key: 'resetTestingModule',
            value: function resetTestingModule() {
                this._compiler = null;
                this._moduleOverrides = [];
                this._componentOverrides = [];
                this._directiveOverrides = [];
                this._pipeOverrides = [];
                this._moduleRef = null;
                this._moduleWithComponentFactories = null;
                this._compilerOptions = [];
                this._providers = [];
                this._declarations = [];
                this._imports = [];
                this._schemas = [];
                this._instantiated = false;
                this._activeFixtures.forEach(function (fixture) {
                    return fixture.destroy();
                });
                this._activeFixtures = [];
            }
        }, {
            key: 'configureCompiler',
            value: function configureCompiler(config) {
                this._assertNotInstantiated('TestBed.configureCompiler', 'configure the compiler');
                this._compilerOptions.push(config);
            }
        }, {
            key: 'configureTestingModule',
            value: function configureTestingModule(moduleDef) {
                this._assertNotInstantiated('TestBed.configureTestingModule', 'configure the test module');
                if (moduleDef.providers) {
                    var _providers;

                    (_providers = this._providers).push.apply(_providers, _toConsumableArray(moduleDef.providers));
                }
                if (moduleDef.declarations) {
                    var _declarations;

                    (_declarations = this._declarations).push.apply(_declarations, _toConsumableArray(moduleDef.declarations));
                }
                if (moduleDef.imports) {
                    var _imports;

                    (_imports = this._imports).push.apply(_imports, _toConsumableArray(moduleDef.imports));
                }
                if (moduleDef.schemas) {
                    var _schemas;

                    (_schemas = this._schemas).push.apply(_schemas, _toConsumableArray(moduleDef.schemas));
                }
            }
        }, {
            key: 'compileComponents',
            value: function compileComponents() {
                var _this7 = this;

                if (this._moduleWithComponentFactories || this._instantiated) {
                    return Promise.resolve(null);
                }
                var moduleType = this._createCompilerAndModule();
                return this._compiler.compileModuleAndAllComponentsAsync(moduleType).then(function (moduleAndComponentFactories) {
                    _this7._moduleWithComponentFactories = moduleAndComponentFactories;
                });
            }
        }, {
            key: '_initIfNeeded',
            value: function _initIfNeeded() {
                if (this._instantiated) {
                    return;
                }
                if (!this._moduleWithComponentFactories) {
                    try {
                        var moduleType = this._createCompilerAndModule();
                        this._moduleWithComponentFactories = this._compiler.compileModuleAndAllComponentsSync(moduleType);
                    } catch (e) {
                        if (getComponentType(e)) {
                            throw new Error('This test module uses the component ' + stringify(getComponentType(e)) + ' which is using a "templateUrl" or "styleUrls", but they were never compiled. ' + 'Please call "TestBed.compileComponents" before your test.');
                        } else {
                            throw e;
                        }
                    }
                }
                var ngZone = new _core.NgZone({ enableLongStackTrace: true });
                var ngZoneInjector = _core.ReflectiveInjector.resolveAndCreate([{ provide: _core.NgZone, useValue: ngZone }], this.platform.injector);
                this._moduleRef = this._moduleWithComponentFactories.ngModuleFactory.create(ngZoneInjector);
                this._instantiated = true;
            }
        }, {
            key: '_createCompilerAndModule',
            value: function _createCompilerAndModule() {
                var _this8 = this;

                var providers = this._providers.concat([{ provide: TestBed, useValue: this }]);
                var declarations = this._declarations;
                var imports = [this.ngModule, this._imports];
                var schemas = this._schemas;

                var DynamicTestModule = function DynamicTestModule() {
                    _classCallCheck(this, DynamicTestModule);
                };

                DynamicTestModule.decorators = [{ type: _core.NgModule, args: [{ providers: providers, declarations: declarations, imports: imports, schemas: schemas }] }];
                /** @nocollapse */
                DynamicTestModule.ctorParameters = function () {
                    return [];
                };
                var compilerFactory = this.platform.injector.get(TestingCompilerFactory);
                this._compiler = compilerFactory.createTestingCompiler(this._compilerOptions.concat([{ useDebug: true }]));
                this._moduleOverrides.forEach(function (entry) {
                    return _this8._compiler.overrideModule(entry[0], entry[1]);
                });
                this._componentOverrides.forEach(function (entry) {
                    return _this8._compiler.overrideComponent(entry[0], entry[1]);
                });
                this._directiveOverrides.forEach(function (entry) {
                    return _this8._compiler.overrideDirective(entry[0], entry[1]);
                });
                this._pipeOverrides.forEach(function (entry) {
                    return _this8._compiler.overridePipe(entry[0], entry[1]);
                });
                return DynamicTestModule;
            }
        }, {
            key: '_assertNotInstantiated',
            value: function _assertNotInstantiated(methodName, methodDescription) {
                if (this._instantiated) {
                    throw new Error('Cannot ' + methodDescription + ' when the test module has already been instantiated. ' + ('Make sure you are not using `inject` before `' + methodName + '`.'));
                }
            }
        }, {
            key: 'get',
            value: function get(token) {
                var notFoundValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core.Injector.THROW_IF_NOT_FOUND;

                this._initIfNeeded();
                if (token === TestBed) {
                    return this;
                }
                // Tests can inject things from the ng module and from the compiler,
                // but the ng module can't inject things from the compiler and vice versa.
                var result = this._moduleRef.injector.get(token, UNDEFINED);
                return result === UNDEFINED ? this._compiler.injector.get(token, notFoundValue) : result;
            }
        }, {
            key: 'execute',
            value: function execute(tokens, fn, context) {
                var _this9 = this;

                this._initIfNeeded();
                var params = tokens.map(function (t) {
                    return _this9.get(t);
                });
                return fn.apply(context, params);
            }
        }, {
            key: 'overrideModule',
            value: function overrideModule(ngModule, override) {
                this._assertNotInstantiated('overrideModule', 'override module metadata');
                this._moduleOverrides.push([ngModule, override]);
            }
        }, {
            key: 'overrideComponent',
            value: function overrideComponent(component, override) {
                this._assertNotInstantiated('overrideComponent', 'override component metadata');
                this._componentOverrides.push([component, override]);
            }
        }, {
            key: 'overrideDirective',
            value: function overrideDirective(directive, override) {
                this._assertNotInstantiated('overrideDirective', 'override directive metadata');
                this._directiveOverrides.push([directive, override]);
            }
        }, {
            key: 'overridePipe',
            value: function overridePipe(pipe, override) {
                this._assertNotInstantiated('overridePipe', 'override pipe metadata');
                this._pipeOverrides.push([pipe, override]);
            }
        }, {
            key: 'createComponent',
            value: function createComponent(component) {
                var _this10 = this;

                this._initIfNeeded();
                var componentFactory = this._moduleWithComponentFactories.componentFactories.find(function (compFactory) {
                    return compFactory.componentType === component;
                });
                if (!componentFactory) {
                    throw new Error('Cannot create the component ' + stringify(component) + ' as it was not imported into the testing module!');
                }
                var noNgZone = this.get(ComponentFixtureNoNgZone, false);
                var autoDetect = this.get(ComponentFixtureAutoDetect, false);
                var ngZone = noNgZone ? null : this.get(_core.NgZone, null);
                var testComponentRenderer = this.get(TestComponentRenderer);
                var rootElId = 'root' + _nextRootElementId++;
                testComponentRenderer.insertRootElement(rootElId);
                var initComponent = function initComponent() {
                    var componentRef = componentFactory.create(_this10, [], '#' + rootElId);
                    return new ComponentFixture(componentRef, ngZone, autoDetect);
                };
                var fixture = !ngZone ? initComponent() : ngZone.run(initComponent);
                this._activeFixtures.push(fixture);
                return fixture;
            }
        }], [{
            key: 'initTestEnvironment',
            value: function initTestEnvironment(ngModule, platform) {
                var testBed = getTestBed();
                testBed.initTestEnvironment(ngModule, platform);
                return testBed;
            }
        }, {
            key: 'resetTestEnvironment',
            value: function resetTestEnvironment() {
                getTestBed().resetTestEnvironment();
            }
        }, {
            key: 'resetTestingModule',
            value: function resetTestingModule() {
                getTestBed().resetTestingModule();
                return TestBed;
            }
        }, {
            key: 'configureCompiler',
            value: function configureCompiler(config) {
                getTestBed().configureCompiler(config);
                return TestBed;
            }
        }, {
            key: 'configureTestingModule',
            value: function configureTestingModule(moduleDef) {
                getTestBed().configureTestingModule(moduleDef);
                return TestBed;
            }
        }, {
            key: 'compileComponents',
            value: function compileComponents() {
                return getTestBed().compileComponents();
            }
        }, {
            key: 'overrideModule',
            value: function overrideModule(ngModule, override) {
                getTestBed().overrideModule(ngModule, override);
                return TestBed;
            }
        }, {
            key: 'overrideComponent',
            value: function overrideComponent(component, override) {
                getTestBed().overrideComponent(component, override);
                return TestBed;
            }
        }, {
            key: 'overrideDirective',
            value: function overrideDirective(directive, override) {
                getTestBed().overrideDirective(directive, override);
                return TestBed;
            }
        }, {
            key: 'overridePipe',
            value: function overridePipe(pipe, override) {
                getTestBed().overridePipe(pipe, override);
                return TestBed;
            }
        }, {
            key: 'overrideTemplate',
            value: function overrideTemplate(component, template) {
                getTestBed().overrideComponent(component, { set: { template: template, templateUrl: null } });
                return TestBed;
            }
        }, {
            key: 'get',
            value: function get(token) {
                var notFoundValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core.Injector.THROW_IF_NOT_FOUND;

                return getTestBed().get(token, notFoundValue);
            }
        }, {
            key: 'createComponent',
            value: function createComponent(component) {
                return getTestBed().createComponent(component);
            }
        }]);

        return TestBed;
    }();

    var _testBed = null;
    /**
     * @experimental
     */
    function getTestBed() {
        return _testBed = _testBed || new TestBed();
    }
    /**
     * Allows injecting dependencies in `beforeEach()` and `it()`.
     *
     * Example:
     *
     * ```
     * beforeEach(inject([Dependency, AClass], (dep, object) => {
     *   // some code that uses `dep` and `object`
     *   // ...
     * }));
     *
     * it('...', inject([AClass], (object) => {
     *   object.doSomething();
     *   expect(...);
     * })
     * ```
     *
     * Notes:
     * - inject is currently a function because of some Traceur limitation the syntax should
     * eventually
     *   becomes `it('...', @Inject (object: AClass, async: AsyncTestCompleter) => { ... });`
     *
     * @stable
     */
    function _inject(tokens, fn) {
        var testBed = getTestBed();
        if (tokens.indexOf(AsyncTestCompleter) >= 0) {
            // Not using an arrow function to preserve context passed from call site
            return function () {
                var _this11 = this;

                // Return an async test method that returns a Promise if AsyncTestCompleter is one of
                // the injected tokens.
                return testBed.compileComponents().then(function () {
                    var completer = testBed.get(AsyncTestCompleter);
                    testBed.execute(tokens, fn, _this11);
                    return completer.promise;
                });
            };
        } else {
            // Not using an arrow function to preserve context passed from call site
            return function () {
                return testBed.execute(tokens, fn, this);
            };
        }
    }
    /**
     * @experimental
     */

    var InjectSetupWrapper = function () {
        function InjectSetupWrapper(_moduleDef) {
            _classCallCheck(this, InjectSetupWrapper);

            this._moduleDef = _moduleDef;
        }

        _createClass(InjectSetupWrapper, [{
            key: '_addModule',
            value: function _addModule() {
                var moduleDef = this._moduleDef();
                if (moduleDef) {
                    getTestBed().configureTestingModule(moduleDef);
                }
            }
        }, {
            key: 'inject',
            value: function inject(tokens, fn) {
                var self = this;
                // Not using an arrow function to preserve context passed from call site
                return function () {
                    self._addModule();
                    return _inject(tokens, fn).call(this);
                };
            }
        }]);

        return InjectSetupWrapper;
    }();

    function withModule(moduleDef) {
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (fn) {
            // Not using an arrow function to preserve context passed from call site
            return function () {
                var testBed = getTestBed();
                if (moduleDef) {
                    testBed.configureTestingModule(moduleDef);
                }
                return fn.apply(this);
            };
        }
        return new InjectSetupWrapper(function () {
            return moduleDef;
        });
    }
    function getComponentType(error) {
        return error[_core.ɵERROR_COMPONENT_TYPE];
    }

    var _global$2 = typeof window === 'undefined' ? global : window;
    // Reset the test providers and the fake async zone before each test.
    if (_global$2.beforeEach) {
        _global$2.beforeEach(function () {
            TestBed.resetTestingModule();
            resetFakeAsyncZone();
        });
    }
    // TODO(juliemr): remove this, only used because we need to export something to have compilation
    // work.
    var __core_private_testing_placeholder__ = '';

    var MockAnimationPlayer = function () {
        function MockAnimationPlayer() {
            var startingStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this12 = this;

            var keyframes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var previousPlayers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            _classCallCheck(this, MockAnimationPlayer);

            this.startingStyles = startingStyles;
            this.keyframes = keyframes;
            this._onDoneFns = [];
            this._onStartFns = [];
            this._onDestroyFns = [];
            this._finished = false;
            this._destroyed = false;
            this._started = false;
            this.parentPlayer = null;
            this.previousStyles = {};
            this.log = [];
            previousPlayers.forEach(function (player) {
                if (player instanceof MockAnimationPlayer) {
                    var styles = player._captureStyles();
                    Object.keys(styles).forEach(function (prop) {
                        return _this12.previousStyles[prop] = styles[prop];
                    });
                }
            });
        }

        _createClass(MockAnimationPlayer, [{
            key: '_onFinish',
            value: function _onFinish() {
                if (!this._finished) {
                    this._finished = true;
                    this.log.push('finish');
                    this._onDoneFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onDoneFns = [];
                }
            }
        }, {
            key: 'init',
            value: function init() {
                this.log.push('init');
            }
        }, {
            key: 'onDone',
            value: function onDone(fn) {
                this._onDoneFns.push(fn);
            }
        }, {
            key: 'onStart',
            value: function onStart(fn) {
                this._onStartFns.push(fn);
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy(fn) {
                this._onDestroyFns.push(fn);
            }
        }, {
            key: 'hasStarted',
            value: function hasStarted() {
                return this._started;
            }
        }, {
            key: 'play',
            value: function play() {
                if (!this.hasStarted()) {
                    this._onStartFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onStartFns = [];
                    this._started = true;
                }
                this.log.push('play');
            }
        }, {
            key: 'pause',
            value: function pause() {
                this.log.push('pause');
            }
        }, {
            key: 'restart',
            value: function restart() {
                this.log.push('restart');
            }
        }, {
            key: 'finish',
            value: function finish() {
                this._onFinish();
            }
        }, {
            key: 'reset',
            value: function reset() {
                this.log.push('reset');
                this._destroyed = false;
                this._finished = false;
                this._started = false;
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (!this._destroyed) {
                    this._destroyed = true;
                    this.finish();
                    this.log.push('destroy');
                    this._onDestroyFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onDestroyFns = [];
                }
            }
        }, {
            key: 'setPosition',
            value: function setPosition(p) {}
        }, {
            key: 'getPosition',
            value: function getPosition() {
                return 0;
            }
        }, {
            key: '_captureStyles',
            value: function _captureStyles() {
                var _this13 = this;

                var captures = {};
                if (this.hasStarted()) {
                    // when assembling the captured styles, it's important that
                    // we build the keyframe styles in the following order:
                    // {startingStyles, ... other styles within keyframes, ... previousStyles }
                    Object.keys(this.startingStyles).forEach(function (prop) {
                        captures[prop] = _this13.startingStyles[prop];
                    });
                    this.keyframes.forEach(function (kf) {
                        var _kf = _slicedToArray(kf, 2),
                            offset = _kf[0],
                            styles = _kf[1];

                        var newStyles = {};
                        Object.keys(styles).forEach(function (prop) {
                            captures[prop] = _this13._finished ? styles[prop] : _core.AUTO_STYLE;
                        });
                    });
                }
                Object.keys(this.previousStyles).forEach(function (prop) {
                    captures[prop] = _this13.previousStyles[prop];
                });
                return captures;
            }
        }]);

        return MockAnimationPlayer;
    }();

    exports.async = async;
    exports.ComponentFixture = ComponentFixture;
    exports.resetFakeAsyncZone = resetFakeAsyncZone;
    exports.fakeAsync = fakeAsync;
    exports.tick = tick;
    exports.discardPeriodicTasks = discardPeriodicTasks;
    exports.flushMicrotasks = flushMicrotasks;
    exports.TestComponentRenderer = TestComponentRenderer;
    exports.ComponentFixtureAutoDetect = ComponentFixtureAutoDetect;
    exports.ComponentFixtureNoNgZone = ComponentFixtureNoNgZone;
    exports.TestBed = TestBed;
    exports.getTestBed = getTestBed;
    exports.inject = _inject;
    exports.InjectSetupWrapper = InjectSetupWrapper;
    exports.withModule = withModule;
    exports.__core_private_testing_placeholder__ = __core_private_testing_placeholder__;
    exports.ɵMockAnimationPlayer = MockAnimationPlayer;
    exports.ɵTestingCompiler = TestingCompiler;
    exports.ɵTestingCompilerFactory = TestingCompilerFactory;
});
