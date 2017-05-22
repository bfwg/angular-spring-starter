(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/core', ['exports', 'rxjs/Observable', 'rxjs/observable/merge', 'rxjs/operator/share', 'rxjs/symbol/observable', 'rxjs/Subject'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('rxjs/Observable'), require('rxjs/observable/merge'), require('rxjs/operator/share'), require('rxjs/symbol/observable'), require('rxjs/Subject'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.rxjsObservable, global.rxjsObservableMerge, global.rxjsOperatorShare, global.rxjsSymbolObservable, global.Rx);
        global.ng = global.ng || {};
        global.ng.core = mod.exports;
    }
})(this, function (exports, _Observable, _merge, _share, _observable, _Subject2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ɵy = exports.ɵx = exports.ɵb = exports.ɵa = exports.ɵu = exports.ɵt = exports.ɵv = exports.ɵr = exports.ɵs = exports.ɵq = exports.ɵj = exports.ɵe = exports.ɵd = exports.ɵc = exports.ɵl = exports.ɵk = exports.ɵi = exports.ɵh = exports.ɵg = exports.ɵf = exports.ɵo = exports.ɵn = exports.ɵm = exports.ɵp = exports.ɵbb = exports.ɵbi = exports.ɵbf = exports.ɵbg = exports.ɵbe = exports.ɵbh = exports.ɵbd = exports.ɵbc = exports.ɵz = exports.transition = exports.keyframes = exports.state = exports.style = exports.sequence = exports.group = exports.animate = exports.trigger = exports.AUTO_STYLE = exports.ɵviewDef = exports.ɵunwrapValue = exports.ɵtextDef = exports.ɵqueryDef = exports.ɵpurePipeDef = exports.ɵpureObjectDef = exports.ɵpureArrayDef = exports.ɵproviderDef = exports.ɵpipeDef = exports.ɵnodeValue = exports.ɵngContentDef = exports.ɵelementEventFullName = exports.ɵelementDef = exports.ɵdirectiveDef = exports.ɵcreateRendererTypeV2 = exports.ɵcreateComponentFactory = exports.ɵanchorDef = exports.ɵViewFlags = exports.ɵQueryValueType = exports.ɵQueryBindingType = undefined;
    exports.ɵProviderType = exports.ɵNodeFlags = exports.ɵDepFlags = exports.ɵBindingType = exports.ɵArgumentType = exports.ɵsubscribeToRenderElement = exports.ɵsetBindingDebugInfoForChanges = exports.ɵsetBindingDebugInfo = exports.ɵselectOrCreateRenderHostElement = exports.ɵpureProxy9 = exports.ɵpureProxy8 = exports.ɵpureProxy7 = exports.ɵpureProxy6 = exports.ɵpureProxy5 = exports.ɵpureProxy4 = exports.ɵpureProxy3 = exports.ɵpureProxy2 = exports.ɵpureProxy10 = exports.ɵpureProxy1 = exports.ɵnoop = exports.ɵinterpolate = exports.ɵinlineInterpolate = exports.ɵgetComponentFactoryViewClass = exports.ɵcreateRenderElement = exports.ɵcreateRenderComponentType = exports.ɵcheckRenderText = exports.ɵcheckRenderStyle = exports.ɵcheckRenderProperty = exports.ɵcheckRenderClass = exports.ɵcheckRenderAttribute = exports.ɵcheckBindingChange = exports.ɵcheckBinding = exports.ɵcastByValue = exports.ɵViewUtils = exports.ɵInlineArrayDynamic = exports.ɵInlineArray8 = exports.ɵInlineArray4 = exports.ɵInlineArray2 = exports.ɵInlineArray16 = exports.ɵEMPTY_MAP = exports.ɵEMPTY_INLINE_ARRAY = exports.ɵEMPTY_ARRAY = exports.ɵTemplateRef_ = exports.ɵregisterModuleFactory = exports.ɵNgModuleInjector = exports.ɵComponentRef_ = exports.ɵisPromise = exports.ɵisObservable = exports.ɵmakeDecorator = exports.ɵRenderDebugInfo = exports.ɵReflectorReader = exports.ɵReflectionCapabilities = exports.ɵreflector = exports.ɵReflector = exports.ɵViewMetadata = exports.ɵLifecycleHooks = exports.ɵLIFECYCLE_HOOKS_VALUES = exports.ɵViewType = exports.ɵViewContainer = exports.ɵDebugAppView = exports.ɵAppView = exports.ɵStaticNodeDebugInfo = exports.ɵDebugContext = exports.ɵCodegenComponentFactoryResolver = exports.ɵComponentFactory = exports.ɵERROR_COMPONENT_TYPE = exports.ɵDebugDomRootRenderer = exports.ɵConsole = exports.ɵisDefaultChangeDetectionStrategy = exports.ɵChangeDetectorStatus = exports.ɵdevModeEqual = exports.ɵValueUnwrapper = exports.ɵAPP_ID_RANDOM_PROVIDER = exports.ɵALLOW_MULTIPLE_PLATFORMS = exports.ɵAnimationTransition = exports.ɵAnimationStyles = exports.ɵrenderStyles = exports.ɵprepareFinalAnimationStyles = exports.ɵflattenStyles = exports.ɵcollectAndResolveStyles = exports.ɵclearStyles = exports.ɵbalanceAnimationKeyframes = exports.ɵAnimationSequencePlayer = exports.ɵNoOpAnimationPlayer = exports.ɵAnimationPlayer = exports.ɵAnimationKeyframe = exports.ɵAnimationGroupPlayer = exports.ɵFILL_STYLE_FLAG = exports.ɵEMPTY_STATE = exports.ɵDEFAULT_STATE = exports.ɵANY_STATE = exports.platformCore = exports.WrappedValue = exports.SimpleChange = exports.KeyValueDiffers = exports.IterableDiffers = exports.DefaultIterableDiffer = exports.ChangeDetectorRef = exports.ChangeDetectionStrategy = exports.ViewRef = undefined;
    exports.EmbeddedViewRef = exports.ViewContainerRef = exports.TemplateRef = exports.SystemJsNgModuleLoaderConfig = exports.SystemJsNgModuleLoader = exports.QueryList = exports.getModuleFactory = exports.NgModuleFactoryLoader = exports.NgModuleRef = exports.NgModuleFactory = exports.ElementRef = exports.ComponentFactoryResolver = exports.ComponentRef = exports.ComponentFactory = exports.ModuleWithComponentFactories = exports.CompilerFactory = exports.Compiler = exports.COMPILER_OPTIONS = exports.RootRenderer = exports.RendererV2 = exports.RendererFactoryV2 = exports.Renderer = exports.RenderComponentType = exports.NgZone = exports.Host = exports.SkipSelf = exports.Self = exports.Injectable = exports.Optional = exports.Inject = exports.OpaqueToken = exports.InjectionToken = exports.ReflectiveKey = exports.ResolvedReflectiveFactory = exports.ReflectiveInjector = exports.Injector = exports.resolveForwardRef = exports.forwardRef = exports.Class = exports.VERSION = exports.Version = exports.ViewEncapsulation = exports.NgModule = exports.NO_ERRORS_SCHEMA = exports.CUSTOM_ELEMENTS_SCHEMA = exports.Pipe = exports.Output = exports.Input = exports.HostListener = exports.HostBinding = exports.Directive = exports.Component = exports.ViewChildren = exports.ViewChild = exports.Query = exports.ContentChildren = exports.ContentChild = exports.Attribute = exports.ANALYZE_FOR_ENTRY_COMPONENTS = exports.SecurityContext = exports.Sanitizer = exports.AnimationKeyframe = exports.AnimationStyles = exports.AnimationPlayer = exports.ErrorHandler = exports.EventEmitter = exports.Type = exports.wtfEndTimeRange = exports.wtfStartTimeRange = exports.wtfLeave = exports.wtfCreateScope = exports.ApplicationModule = exports.MissingTranslationStrategy = exports.LOCALE_ID = exports.TRANSLATIONS_FORMAT = exports.TRANSLATIONS = exports.setTestabilityGetter = exports.TestabilityRegistry = exports.Testability = exports.getDebugNode = exports.asNativeElements = exports.DebugNode = exports.DebugElement = exports.ApplicationInitStatus = exports.APP_INITIALIZER = exports.APP_BOOTSTRAP_LISTENER = exports.PLATFORM_ID = exports.PLATFORM_INITIALIZER = exports.PACKAGE_ROOT_URL = exports.APP_ID = exports.NgProbeToken = exports.createPlatformFactory = exports.isDevMode = exports.enableProdMode = exports.ApplicationRef = exports.PlatformRef = exports.getPlatform = exports.destroyPlatform = exports.assertPlatform = exports.createPlatform = undefined;

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

    var OpaqueToken = function () {
        /**
         * @param {?} _desc
         */
        function OpaqueToken(_desc) {
            _classCallCheck(this, OpaqueToken);

            this._desc = _desc;
        }
        /**
         * @return {?}
         */


        _createClass(OpaqueToken, [{
            key: 'toString',
            value: function toString() {
                return 'Token ' + this._desc;
            }
        }]);

        return OpaqueToken;
    }();

    var InjectionToken = function (_OpaqueToken) {
        _inherits(InjectionToken, _OpaqueToken);

        /**
         * @param {?} desc
         */
        function InjectionToken(desc) {
            _classCallCheck(this, InjectionToken);

            return _possibleConstructorReturn(this, (InjectionToken.__proto__ || Object.getPrototypeOf(InjectionToken)).call(this, desc));
        }
        /**
         * @return {?}
         */


        _createClass(InjectionToken, [{
            key: 'toString',
            value: function toString() {
                return 'InjectionToken ' + this._desc;
            }
        }]);

        return InjectionToken;
    }(OpaqueToken);

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
    /**
     * @param {?} fn
     * @return {?}
     */
    function scheduleMicroTask(fn) {
        Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
    }
    // Need to declare a new variable for global here since TypeScript
    // exports the original value of the symbol.
    var /** @type {?} */global$1 = globalScope;
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
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function looseIdentical(a, b) {
        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
    }
    /**
     * @param {?} o
     * @return {?}
     */
    function isJsObject(o) {
        return o !== null && (typeof o === 'function' || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object');
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function print(obj) {
        // tslint:disable-next-line:no-console
        console.log(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function _warn(obj) {
        console.warn(obj);
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
     * @param {?} obj
     * @return {?}
     */
    function isPrimitive(obj) {
        return !isJsObject(obj);
    }

    var /** @type {?} */_nextClassId = 0;
    var /** @type {?} */Reflect = global$1.Reflect;
    /**
     * @param {?} annotation
     * @return {?}
     */
    function extractAnnotation(annotation) {
        if (typeof annotation === 'function' && annotation.hasOwnProperty('annotation')) {
            // it is a decorator, extract annotation
            annotation = annotation.annotation;
        }
        return annotation;
    }
    /**
     * @param {?} fnOrArray
     * @param {?} key
     * @return {?}
     */
    function applyParams(fnOrArray, key) {
        if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function || fnOrArray === Number || fnOrArray === Array) {
            throw new Error('Can not use native ' + stringify(fnOrArray) + ' as constructor');
        }
        if (typeof fnOrArray === 'function') {
            return fnOrArray;
        }
        if (Array.isArray(fnOrArray)) {
            var /** @type {?} */annotations = fnOrArray;
            var /** @type {?} */annoLength = annotations.length - 1;
            var /** @type {?} */fn = fnOrArray[annoLength];
            if (typeof fn !== 'function') {
                throw new Error('Last position of Class method array must be Function in key ' + key + ' was \'' + stringify(fn) + '\'');
            }
            if (annoLength != fn.length) {
                throw new Error('Number of annotations (' + annoLength + ') does not match number of arguments (' + fn.length + ') in the function: ' + stringify(fn));
            }
            var /** @type {?} */paramsAnnotations = [];
            for (var /** @type {?} */i = 0, /** @type {?} */ii = annotations.length - 1; i < ii; i++) {
                var /** @type {?} */paramAnnotations = [];
                paramsAnnotations.push(paramAnnotations);
                var /** @type {?} */annotation = annotations[i];
                if (Array.isArray(annotation)) {
                    for (var /** @type {?} */j = 0; j < annotation.length; j++) {
                        paramAnnotations.push(extractAnnotation(annotation[j]));
                    }
                } else if (typeof annotation === 'function') {
                    paramAnnotations.push(extractAnnotation(annotation));
                } else {
                    paramAnnotations.push(annotation);
                }
            }
            Reflect.defineMetadata('parameters', paramsAnnotations, fn);
            return fn;
        }
        throw new Error('Only Function or Array is supported in Class definition for key \'' + key + '\' is \'' + stringify(fnOrArray) + '\'');
    }
    /**
     * Provides a way for expressing ES6 classes with parameter annotations in ES5.
     *
     * ## Basic Example
     *
     * ```
     * var Greeter = ng.Class({
     *   constructor: function(name) {
     *     this.name = name;
     *   },
     *
     *   greet: function() {
     *     alert('Hello ' + this.name + '!');
     *   }
     * });
     * ```
     *
     * is equivalent to ES6:
     *
     * ```
     * class Greeter {
     *   constructor(name) {
     *     this.name = name;
     *   }
     *
     *   greet() {
     *     alert('Hello ' + this.name + '!');
     *   }
     * }
     * ```
     *
     * or equivalent to ES5:
     *
     * ```
     * var Greeter = function (name) {
     *   this.name = name;
     * }
     *
     * Greeter.prototype.greet = function () {
     *   alert('Hello ' + this.name + '!');
     * }
     * ```
     *
     * ### Example with parameter annotations
     *
     * ```
     * var MyService = ng.Class({
     *   constructor: [String, [new Optional(), Service], function(name, myService) {
     *     ...
     *   }]
     * });
     * ```
     *
     * is equivalent to ES6:
     *
     * ```
     * class MyService {
     *   constructor(name: string, \@Optional() myService: Service) {
     *     ...
     *   }
     * }
     * ```
     *
     * ### Example with inheritance
     *
     * ```
     * var Shape = ng.Class({
     *   constructor: (color) {
     *     this.color = color;
     *   }
     * });
     *
     * var Square = ng.Class({
     *   extends: Shape,
     *   constructor: function(color, size) {
     *     Shape.call(this, color);
     *     this.size = size;
     *   }
     * });
     * ```
     * @suppress {globalThis}
     * \@stable
     * @param {?} clsDef
     * @return {?}
     */
    function Class(clsDef) {
        var /** @type {?} */constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
        var /** @type {?} */proto = constructor.prototype;
        if (clsDef.hasOwnProperty('extends')) {
            if (typeof clsDef.extends === 'function') {
                constructor.prototype = proto = Object.create(clsDef.extends.prototype);
            } else {
                throw new Error('Class definition \'extends\' property must be a constructor function was: ' + stringify(clsDef.extends));
            }
        }
        for (var /** @type {?} */key in clsDef) {
            if (key !== 'extends' && key !== 'prototype' && clsDef.hasOwnProperty(key)) {
                proto[key] = applyParams(clsDef[key], key);
            }
        }
        if (this && this.annotations instanceof Array) {
            Reflect.defineMetadata('annotations', this.annotations, constructor);
        }
        var /** @type {?} */constructorName = constructor['name'];
        if (!constructorName || constructorName === 'constructor') {
            constructor['overriddenName'] = 'class' + _nextClassId++;
        }
        return constructor;
    }
    /**
     * @suppress {globalThis}
     * @param {?} name
     * @param {?} props
     * @param {?=} parentClass
     * @param {?=} chainFn
     * @return {?}
     */
    function makeDecorator(name, props, parentClass) {
        var chainFn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        var /** @type {?} */metaCtor = makeMetadataCtor([props]);
        /**
         * @param {?} objOrType
         * @return {?}
         */
        function DecoratorFactory(objOrType) {
            if (!(Reflect && Reflect.getOwnMetadata)) {
                throw 'reflect-metadata shim is required when using class decorators';
            }
            if (this instanceof DecoratorFactory) {
                metaCtor.call(this, objOrType);
                return this;
            }
            var /** @type {?} */annotationInstance = new DecoratorFactory(objOrType);
            var /** @type {?} */chainAnnotation = typeof this === 'function' && Array.isArray(this.annotations) ? this.annotations : [];
            chainAnnotation.push(annotationInstance);
            var /** @type {?} */TypeDecorator = function TypeDecorator(cls) {
                var /** @type {?} */annotations = Reflect.getOwnMetadata('annotations', cls) || [];
                annotations.push(annotationInstance);
                Reflect.defineMetadata('annotations', annotations, cls);
                return cls;
            };
            TypeDecorator.annotations = chainAnnotation;
            TypeDecorator.Class = Class;
            if (chainFn) chainFn(TypeDecorator);
            return TypeDecorator;
        }
        if (parentClass) {
            DecoratorFactory.prototype = Object.create(parentClass.prototype);
        }
        DecoratorFactory.prototype.toString = function () {
            return '@' + name;
        };
        DecoratorFactory.annotationCls = DecoratorFactory;
        return DecoratorFactory;
    }
    /**
     * @param {?} props
     * @return {?}
     */
    function makeMetadataCtor(props) {
        return function ctor() {
            var _this2 = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            props.forEach(function (prop, i) {
                var /** @type {?} */argVal = args[i];
                if (Array.isArray(prop)) {
                    // plain parameter
                    _this2[prop[0]] = argVal === undefined ? prop[1] : argVal;
                } else {
                    for (var /** @type {?} */propName in prop) {
                        _this2[propName] = argVal && argVal.hasOwnProperty(propName) ? argVal[propName] : prop[propName];
                    }
                }
            });
        };
    }
    /**
     * @param {?} name
     * @param {?} props
     * @param {?=} parentClass
     * @return {?}
     */
    function makeParamDecorator(name, props, parentClass) {
        var /** @type {?} */metaCtor = makeMetadataCtor(props);
        /**
         * @param {...?} args
         * @return {?}
         */
        function ParamDecoratorFactory() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            if (this instanceof ParamDecoratorFactory) {
                metaCtor.apply(this, args);
                return this;
            }
            var /** @type {?} */annotationInstance = new (Function.prototype.bind.apply(ParamDecoratorFactory, [null].concat(args)))();
            ParamDecorator.annotation = annotationInstance;
            return ParamDecorator;
            /**
             * @param {?} cls
             * @param {?} unusedKey
             * @param {?} index
             * @return {?}
             */
            function ParamDecorator(cls, unusedKey, index) {
                var /** @type {?} */parameters = Reflect.getOwnMetadata('parameters', cls) || [];
                // there might be gaps if some in between parameters do not have annotations.
                // we pad with nulls.
                while (parameters.length <= index) {
                    parameters.push(null);
                }
                parameters[index] = parameters[index] || [];
                parameters[index].push(annotationInstance);
                Reflect.defineMetadata('parameters', parameters, cls);
                return cls;
            }
        }
        if (parentClass) {
            ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
        }
        ParamDecoratorFactory.prototype.toString = function () {
            return '@' + name;
        };
        ParamDecoratorFactory.annotationCls = ParamDecoratorFactory;
        return ParamDecoratorFactory;
    }
    /**
     * @param {?} name
     * @param {?} props
     * @param {?=} parentClass
     * @return {?}
     */
    function makePropDecorator(name, props, parentClass) {
        var /** @type {?} */metaCtor = makeMetadataCtor(props);
        /**
         * @param {...?} args
         * @return {?}
         */
        function PropDecoratorFactory() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            if (this instanceof PropDecoratorFactory) {
                metaCtor.apply(this, args);
                return this;
            }
            var /** @type {?} */decoratorInstance = new (Function.prototype.bind.apply(PropDecoratorFactory, [null].concat(args)))();
            return function PropDecorator(target, name) {
                var /** @type {?} */meta = Reflect.getOwnMetadata('propMetadata', target.constructor) || {};
                meta[name] = meta.hasOwnProperty(name) && meta[name] || [];
                meta[name].unshift(decoratorInstance);
                Reflect.defineMetadata('propMetadata', meta, target.constructor);
            };
        }
        if (parentClass) {
            PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
        }
        PropDecoratorFactory.prototype.toString = function () {
            return '@' + name;
        };
        PropDecoratorFactory.annotationCls = PropDecoratorFactory;
        return PropDecoratorFactory;
    }

    /**
     * This token can be used to create a virtual provider that will populate the
     * `entryComponents` fields of components and ng modules based on its `useValue`.
     * All components that are referenced in the `useValue` value (either directly
     * or in a nested array or map) will be added to the `entryComponents` property.
     *
     * ### Example
     * The following example shows how the router can populate the `entryComponents`
     * field of an NgModule based on the router configuration which refers
     * to components.
     *
     * ```typescript
     * // helper function inside the router
     * function provideRoutes(routes) {
     *   return [
     *     {provide: ROUTES, useValue: routes},
     *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
     *   ];
     * }
     *
     * // user code
     * let routes = [
     *   {path: '/root', component: RootComp},
     *   {path: '/teams', component: TeamsComp}
     * ];
     *
     * @NgModule({
     *   providers: [provideRoutes(routes)]
     * })
     * class ModuleWithRoutes {}
     * ```
     *
     * @experimental
     */
    var /** @type {?} */ANALYZE_FOR_ENTRY_COMPONENTS = new InjectionToken('AnalyzeForEntryComponents');
    /**
     * Attribute decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Attribute = makeParamDecorator('Attribute', [['attributeName', undefined]]);
    /**
     * Base class for query metadata.
     *
     * See {\@link ContentChildren}, {\@link ContentChild}, {\@link ViewChildren}, {\@link ViewChild} for
     * more information.
     *
     * \@stable
     * @abstract
     */

    var Query = function Query() {
        _classCallCheck(this, Query);
    };

    /**
     * ContentChildren decorator and metadata.
     *
     *  @stable
     *  @Annotation
     */
    var /** @type {?} */ContentChildren = makePropDecorator('ContentChildren', [['selector', undefined], {
        first: false,
        isViewQuery: false,
        descendants: false,
        read: undefined
    }], Query);
    /**
     * ContentChild decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */ContentChild = makePropDecorator('ContentChild', [['selector', undefined], {
        first: true,
        isViewQuery: false,
        descendants: true,
        read: undefined
    }], Query);
    /**
     * ViewChildren decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */ViewChildren = makePropDecorator('ViewChildren', [['selector', undefined], {
        first: false,
        isViewQuery: true,
        descendants: true,
        read: undefined
    }], Query);
    /**
     * ViewChild decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */ViewChild = makePropDecorator('ViewChild', [['selector', undefined], {
        first: true,
        isViewQuery: true,
        descendants: true,
        read: undefined
    }], Query);

    var ChangeDetectionStrategy = {};
    ChangeDetectionStrategy.OnPush = 0;
    ChangeDetectionStrategy.Default = 1;
    ChangeDetectionStrategy[ChangeDetectionStrategy.OnPush] = "OnPush";
    ChangeDetectionStrategy[ChangeDetectionStrategy.Default] = "Default";
    var ChangeDetectorStatus = {};
    ChangeDetectorStatus.CheckOnce = 0;
    ChangeDetectorStatus.Checked = 1;
    ChangeDetectorStatus.CheckAlways = 2;
    ChangeDetectorStatus.Detached = 3;
    ChangeDetectorStatus.Errored = 4;
    ChangeDetectorStatus.Destroyed = 5;
    ChangeDetectorStatus[ChangeDetectorStatus.CheckOnce] = "CheckOnce";
    ChangeDetectorStatus[ChangeDetectorStatus.Checked] = "Checked";
    ChangeDetectorStatus[ChangeDetectorStatus.CheckAlways] = "CheckAlways";
    ChangeDetectorStatus[ChangeDetectorStatus.Detached] = "Detached";
    ChangeDetectorStatus[ChangeDetectorStatus.Errored] = "Errored";
    ChangeDetectorStatus[ChangeDetectorStatus.Destroyed] = "Destroyed";
    /**
     * @param {?} changeDetectionStrategy
     * @return {?}
     */
    function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
        return isBlank(changeDetectionStrategy) || changeDetectionStrategy === ChangeDetectionStrategy.Default;
    }

    /**
     * Directive decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Directive = makeDecorator('Directive', {
        selector: undefined,
        inputs: undefined,
        outputs: undefined,
        host: undefined,
        providers: undefined,
        exportAs: undefined,
        queries: undefined
    });
    /**
     * Component decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Component = makeDecorator('Component', {
        selector: undefined,
        inputs: undefined,
        outputs: undefined,
        host: undefined,
        exportAs: undefined,
        moduleId: undefined,
        providers: undefined,
        viewProviders: undefined,
        changeDetection: ChangeDetectionStrategy.Default,
        queries: undefined,
        templateUrl: undefined,
        template: undefined,
        styleUrls: undefined,
        styles: undefined,
        animations: undefined,
        encapsulation: undefined,
        interpolation: undefined,
        entryComponents: undefined
    }, Directive);
    /**
     * Pipe decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Pipe = makeDecorator('Pipe', {
        name: undefined,
        pure: true
    });
    /**
     * Input decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Input = makePropDecorator('Input', [['bindingPropertyName', undefined]]);
    /**
     * Output decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Output = makePropDecorator('Output', [['bindingPropertyName', undefined]]);
    /**
     * HostBinding decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */HostBinding = makePropDecorator('HostBinding', [['hostPropertyName', undefined]]);
    /**
     * HostListener decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */HostListener = makePropDecorator('HostListener', [['eventName', undefined], ['args', []]]);

    /**
     * Defines a schema that will allow:
     * - any non-Angular elements with a `-` in their name,
     * - any properties on elements with a `-` in their name which is the common rule for custom
     * elements.
     *
     * @stable
     */
    var /** @type {?} */CUSTOM_ELEMENTS_SCHEMA = {
        name: 'custom-elements'
    };
    /**
     * Defines a schema that will allow any property on any element.
     *
     * @experimental
     */
    var /** @type {?} */NO_ERRORS_SCHEMA = {
        name: 'no-errors-schema'
    };
    /**
     * NgModule decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */NgModule = makeDecorator('NgModule', {
        providers: undefined,
        declarations: undefined,
        imports: undefined,
        exports: undefined,
        entryComponents: undefined,
        bootstrap: undefined,
        schemas: undefined,
        id: undefined
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ViewEncapsulation = {};
    ViewEncapsulation.Emulated = 0;
    ViewEncapsulation.Native = 1;
    ViewEncapsulation.None = 2;
    ViewEncapsulation[ViewEncapsulation.Emulated] = "Emulated";
    ViewEncapsulation[ViewEncapsulation.Native] = "Native";
    ViewEncapsulation[ViewEncapsulation.None] = "None";
    /**
     * Metadata properties available for configuring Views.
     *
     * For details on the `\@Component` annotation, see {\@link Component}.
     *
     * ### Example
     *
     * ```
     * \@Component({
     *   selector: 'greet',
     *   template: 'Hello {{name}}!',
     * })
     * class Greet {
     *   name: string;
     *
     *   constructor() {
     *     this.name = 'World';
     *   }
     * }
     * ```
     *
     * @deprecated Use Component instead.
     *
     * {\@link Component}
     */

    var ViewMetadata =
    /**
     * @param {?=} __0
     */
    function ViewMetadata() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            templateUrl = _ref.templateUrl,
            template = _ref.template,
            encapsulation = _ref.encapsulation,
            styles = _ref.styles,
            styleUrls = _ref.styleUrls,
            animations = _ref.animations,
            interpolation = _ref.interpolation;

        _classCallCheck(this, ViewMetadata);

        this.templateUrl = templateUrl;
        this.template = template;
        this.styleUrls = styleUrls;
        this.styles = styles;
        this.encapsulation = encapsulation;
        this.animations = animations;
        this.interpolation = interpolation;
    };

    var Version = function () {
        /**
         * @param {?} full
         */
        function Version(full) {
            _classCallCheck(this, Version);

            this.full = full;
        }
        /**
         * @return {?}
         */


        _createClass(Version, [{
            key: 'major',
            get: function get() {
                return this.full.split('.')[0];
            }
        }, {
            key: 'minor',
            get: function get() {
                return this.full.split('.')[1];
            }
        }, {
            key: 'patch',
            get: function get() {
                return this.full.split('.').slice(2).join('.');
            }
        }]);

        return Version;
    }();

    /**
     * @stable
     */
    var /** @type {?} */VERSION = new Version('4.0.0-rc.1');

    /**
     * Inject decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Inject = makeParamDecorator('Inject', [['token', undefined]]);
    /**
     * Optional decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Optional = makeParamDecorator('Optional', []);
    /**
     * Injectable decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Injectable = makeDecorator('Injectable', []);
    /**
     * Self decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Self = makeParamDecorator('Self', []);
    /**
     * SkipSelf decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */SkipSelf = makeParamDecorator('SkipSelf', []);
    /**
     * Host decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var /** @type {?} */Host = makeParamDecorator('Host', []);

    /**
     * Allows to refer to references which are not yet defined.
     *
     * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
     * DI is declared,
     * but not yet defined. It is also used when the `token` which we use when creating a query is not
     * yet defined.
     *
     * ### Example
     * {\@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
     * \@experimental
     * @param {?} forwardRefFn
     * @return {?}
     */
    function forwardRef(forwardRefFn) {
        forwardRefFn.__forward_ref__ = forwardRef;
        forwardRefFn.toString = function () {
            return stringify(this());
        };
        return forwardRefFn;
    }
    /**
     * Lazily retrieves the reference value from a forwardRef.
     *
     * Acts as the identity function when given a non-forward-ref value.
     *
     * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
     *
     * {\@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
     *
     * See: {\@link forwardRef}
     * \@experimental
     * @param {?} type
     * @return {?}
     */
    function resolveForwardRef(type) {
        if (typeof type === 'function' && type.hasOwnProperty('__forward_ref__') && type.__forward_ref__ === forwardRef) {
            return type();
        } else {
            return type;
        }
    }

    var /** @type {?} */_THROW_IF_NOT_FOUND = new Object();
    var /** @type {?} */THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;

    var _NullInjector = function () {
        function _NullInjector() {
            _classCallCheck(this, _NullInjector);
        }

        _createClass(_NullInjector, [{
            key: 'get',
            value: function get(token) {
                var notFoundValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _THROW_IF_NOT_FOUND;

                if (notFoundValue === _THROW_IF_NOT_FOUND) {
                    throw new Error('No provider for ' + stringify(token) + '!');
                }
                return notFoundValue;
            }
        }]);

        return _NullInjector;
    }();

    var Injector = function () {
        function Injector() {
            _classCallCheck(this, Injector);
        }

        _createClass(Injector, [{
            key: 'get',
            value: function get(token, notFoundValue) {}
        }, {
            key: 'get',
            value: function get(token, notFoundValue) {}
        }]);

        return Injector;
    }();

    Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
    Injector.NULL = new _NullInjector();

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var /** @type {?} */ERROR_TYPE = 'ngType';
    var /** @type {?} */ERROR_COMPONENT_TYPE = 'ngComponentType';
    var /** @type {?} */ERROR_DEBUG_CONTEXT = 'ngDebugContext';
    var /** @type {?} */ERROR_ORIGINAL_ERROR = 'ngOriginalError';
    /**
     * @param {?} error
     * @return {?}
     */
    function getType(error) {
        return error[ERROR_TYPE];
    }
    /**
     * @param {?} error
     * @return {?}
     */
    function getDebugContext(error) {
        return error[ERROR_DEBUG_CONTEXT];
    }
    /**
     * @param {?} error
     * @return {?}
     */
    function getOriginalError(error) {
        return error[ERROR_ORIGINAL_ERROR];
    }

    /**
     * \@whatItDoes Provides a hook for centralized exception handling.
     *
     * \@description
     *
     * The default implementation of `ErrorHandler` prints error messages to the `console`. To
     * intercept error handling, write a custom exception handler that replaces this default as
     * appropriate for your app.
     *
     * ### Example
     *
     * ```
     * class MyErrorHandler implements ErrorHandler {
     *   handleError(error) {
     *     // do something with the exception
     *   }
     * }
     *
     * \@NgModule({
     *   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
     * })
     * class MyModule {}
     * ```
     *
     * \@stable
     */

    var ErrorHandler = function () {
        /**
         * @param {?=} rethrowError
         */
        function ErrorHandler() {
            var rethrowError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            _classCallCheck(this, ErrorHandler);

            /**
             * @internal
             */
            this._console = console;
            this.rethrowError = rethrowError;
        }
        /**
         * @param {?} error
         * @return {?}
         */


        _createClass(ErrorHandler, [{
            key: 'handleError',
            value: function handleError(error) {
                this._console.error('EXCEPTION: ' + this._extractMessage(error));
                if (error instanceof Error) {
                    var /** @type {?} */originalError = this._findOriginalError(error);
                    var /** @type {?} */originalStack = this._findOriginalStack(error);
                    var /** @type {?} */context = this._findContext(error);
                    if (originalError) {
                        this._console.error('ORIGINAL EXCEPTION: ' + this._extractMessage(originalError));
                    }
                    if (originalStack) {
                        this._console.error('ORIGINAL STACKTRACE:');
                        this._console.error(originalStack);
                    }
                    if (context) {
                        this._console.error('ERROR CONTEXT:');
                        this._console.error(context);
                    }
                }
                // We rethrow exceptions, so operations like 'bootstrap' will result in an error
                // when an error happens. If we do not rethrow, bootstrap will always succeed.
                if (this.rethrowError) throw error;
            }
        }, {
            key: '_extractMessage',
            value: function _extractMessage(error) {
                return error instanceof Error ? error.message : error.toString();
            }
        }, {
            key: '_findContext',
            value: function _findContext(error) {
                if (error) {
                    return getDebugContext(error) ? getDebugContext(error) : this._findContext(getOriginalError(error));
                }
                return null;
            }
        }, {
            key: '_findOriginalError',
            value: function _findOriginalError(error) {
                var /** @type {?} */e = getOriginalError(error);
                while (e && getOriginalError(e)) {
                    e = getOriginalError(e);
                }
                return e;
            }
        }, {
            key: '_findOriginalStack',
            value: function _findOriginalStack(error) {
                var /** @type {?} */e = error;
                var /** @type {?} */stack = e.stack;
                while (e instanceof Error && getOriginalError(e)) {
                    e = getOriginalError(e);
                    if (e instanceof Error && e.stack) {
                        stack = e.stack;
                    }
                }
                return stack;
            }
        }]);

        return ErrorHandler;
    }();

    /**
     * @param {?} message
     * @param {?} originalError
     * @return {?}
     */
    function wrappedError(message, originalError) {
        var /** @type {?} */msg = message + ' caused by: ' + (originalError instanceof Error ? originalError.message : originalError);
        var /** @type {?} */error = Error(msg);
        error[ERROR_ORIGINAL_ERROR] = originalError;
        return error;
    }

    /**
     * @param {?} keys
     * @return {?}
     */
    function findFirstClosedCycle(keys) {
        var /** @type {?} */res = [];
        for (var /** @type {?} */i = 0; i < keys.length; ++i) {
            if (res.indexOf(keys[i]) > -1) {
                res.push(keys[i]);
                return res;
            }
            res.push(keys[i]);
        }
        return res;
    }
    /**
     * @param {?} keys
     * @return {?}
     */
    function constructResolvingPath(keys) {
        if (keys.length > 1) {
            var /** @type {?} */reversed = findFirstClosedCycle(keys.slice().reverse());
            var /** @type {?} */tokenStrs = reversed.map(function (k) {
                return stringify(k.token);
            });
            return ' (' + tokenStrs.join(' -> ') + ')';
        }
        return '';
    }
    /**
     * @param {?} injector
     * @param {?} key
     * @param {?} constructResolvingMessage
     * @param {?=} originalError
     * @return {?}
     */
    function injectionError(injector, key, constructResolvingMessage, originalError) {
        var /** @type {?} */error = originalError ? wrappedError('', originalError) : Error();
        error.addKey = addKey;
        error.keys = [key];
        error.injectors = [injector];
        error.constructResolvingMessage = constructResolvingMessage;
        error.message = error.constructResolvingMessage();
        error[ERROR_ORIGINAL_ERROR] = originalError;
        return error;
    }
    /**
     * @this {?}
     * @param {?} injector
     * @param {?} key
     * @return {?}
     */
    function addKey(injector, key) {
        this.injectors.push(injector);
        this.keys.push(key);
        this.message = this.constructResolvingMessage();
    }
    /**
     * Thrown when trying to retrieve a dependency by key from {\@link Injector}, but the
     * {\@link Injector} does not have a {\@link Provider} for the given key.
     *
     * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
     *
     * ```typescript
     * class A {
     *   constructor(b:B) {}
     * }
     *
     * expect(() => Injector.resolveAndCreate([A])).toThrowError();
     * ```
     * @param {?} injector
     * @param {?} key
     * @return {?}
     */
    function noProviderError(injector, key) {
        return injectionError(injector, key, function () {
            var /** @type {?} */first = stringify(this.keys[0].token);
            return 'No provider for ' + first + '!' + constructResolvingPath(this.keys);
        });
    }
    /**
     * Thrown when dependencies form a cycle.
     *
     * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
     *
     * ```typescript
     * var injector = Injector.resolveAndCreate([
     *   {provide: "one", useFactory: (two) => "two", deps: [[new Inject("two")]]},
     *   {provide: "two", useFactory: (one) => "one", deps: [[new Inject("one")]]}
     * ]);
     *
     * expect(() => injector.get("one")).toThrowError();
     * ```
     *
     * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
     * @param {?} injector
     * @param {?} key
     * @return {?}
     */
    function cyclicDependencyError(injector, key) {
        return injectionError(injector, key, function () {
            return 'Cannot instantiate cyclic dependency!' + constructResolvingPath(this.keys);
        });
    }
    /**
     * Thrown when a constructing type returns with an Error.
     *
     * The `InstantiationError` class contains the original error plus the dependency graph which caused
     * this object to be instantiated.
     *
     * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
     *
     * ```typescript
     * class A {
     *   constructor() {
     *     throw new Error('message');
     *   }
     * }
     *
     * var injector = Injector.resolveAndCreate([A]);
     * try {
     *   injector.get(A);
     * } catch (e) {
     *   expect(e instanceof InstantiationError).toBe(true);
     *   expect(e.originalException.message).toEqual("message");
     *   expect(e.originalStack).toBeDefined();
     * }
     * ```
     * @param {?} injector
     * @param {?} originalException
     * @param {?} originalStack
     * @param {?} key
     * @return {?}
     */
    function instantiationError(injector, originalException, originalStack, key) {
        return injectionError(injector, key, function () {
            var /** @type {?} */first = stringify(this.keys[0].token);
            return getOriginalError(this).message + ': Error during instantiation of ' + first + '!' + constructResolvingPath(this.keys) + '.';
        }, originalException);
    }
    /**
     * Thrown when an object other then {\@link Provider} (or `Type`) is passed to {\@link Injector}
     * creation.
     *
     * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
     *
     * ```typescript
     * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
     * ```
     * @param {?} provider
     * @return {?}
     */
    function invalidProviderError(provider) {
        return Error('Invalid provider - only instances of Provider and Type are allowed, got: ' + provider);
    }
    /**
     * Thrown when the class has no annotation information.
     *
     * Lack of annotation information prevents the {\@link Injector} from determining which dependencies
     * need to be injected into the constructor.
     *
     * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
     *
     * ```typescript
     * class A {
     *   constructor(b) {}
     * }
     *
     * expect(() => Injector.resolveAndCreate([A])).toThrowError();
     * ```
     *
     * This error is also thrown when the class not marked with {\@link Injectable} has parameter types.
     *
     * ```typescript
     * class B {}
     *
     * class A {
     *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
     * }
     *
     * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
     * ```
     * \@stable
     * @param {?} typeOrFunc
     * @param {?} params
     * @return {?}
     */
    function noAnnotationError(typeOrFunc, params) {
        var /** @type {?} */signature = [];
        for (var /** @type {?} */i = 0, /** @type {?} */ii = params.length; i < ii; i++) {
            var /** @type {?} */parameter = params[i];
            if (!parameter || parameter.length == 0) {
                signature.push('?');
            } else {
                signature.push(parameter.map(stringify).join(' '));
            }
        }
        return Error('Cannot resolve all parameters for \'' + stringify(typeOrFunc) + '\'(' + signature.join(', ') + '). ' + 'Make sure that all the parameters are decorated with Inject or have valid type annotations and that \'' + stringify(typeOrFunc) + '\' is decorated with Injectable.');
    }
    /**
     * Thrown when getting an object by index.
     *
     * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
     *
     * ```typescript
     * class A {}
     *
     * var injector = Injector.resolveAndCreate([A]);
     *
     * expect(() => injector.getAt(100)).toThrowError();
     * ```
     * \@stable
     * @param {?} index
     * @return {?}
     */
    function outOfBoundsError(index) {
        return Error('Index ' + index + ' is out-of-bounds.');
    }
    /**
     * Thrown when a multi provider and a regular provider are bound to the same token.
     *
     * ### Example
     *
     * ```typescript
     * expect(() => Injector.resolveAndCreate([
     *   { provide: "Strings", useValue: "string1", multi: true},
     *   { provide: "Strings", useValue: "string2", multi: false}
     * ])).toThrowError();
     * ```
     * @param {?} provider1
     * @param {?} provider2
     * @return {?}
     */
    function mixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
        return Error('Cannot mix multi providers and regular providers, got: ' + provider1 + ' ' + provider2);
    }

    /**
     * A unique object used for retrieving items from the {\@link ReflectiveInjector}.
     *
     * Keys have:
     * - a system-wide unique `id`.
     * - a `token`.
     *
     * `Key` is used internally by {\@link ReflectiveInjector} because its system-wide unique `id` allows
     * the
     * injector to store created objects in a more efficient way.
     *
     * `Key` should not be created directly. {\@link ReflectiveInjector} creates keys automatically when
     * resolving
     * providers.
     * \@experimental
     */

    var ReflectiveKey = function () {
        /**
         * Private
         * @param {?} token
         * @param {?} id
         */
        function ReflectiveKey(token, id) {
            _classCallCheck(this, ReflectiveKey);

            this.token = token;
            this.id = id;
            if (!token) {
                throw new Error('Token must be defined!');
            }
        }
        /**
         * Returns a stringified token.
         * @return {?}
         */


        _createClass(ReflectiveKey, [{
            key: 'displayName',
            get: function get() {
                return stringify(this.token);
            }
        }], [{
            key: 'get',
            value: function get(token) {
                return _globalKeyRegistry.get(resolveForwardRef(token));
            }
        }, {
            key: 'numberOfKeys',
            get: function get() {
                return _globalKeyRegistry.numberOfKeys;
            }
        }]);

        return ReflectiveKey;
    }();

    var KeyRegistry = function () {
        function KeyRegistry() {
            _classCallCheck(this, KeyRegistry);

            this._allKeys = new Map();
        }
        /**
         * @param {?} token
         * @return {?}
         */


        _createClass(KeyRegistry, [{
            key: 'get',
            value: function get(token) {
                if (token instanceof ReflectiveKey) return token;
                if (this._allKeys.has(token)) {
                    return this._allKeys.get(token);
                }
                var /** @type {?} */newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
                this._allKeys.set(token, newKey);
                return newKey;
            }
        }, {
            key: 'numberOfKeys',
            get: function get() {
                return this._allKeys.size;
            }
        }]);

        return KeyRegistry;
    }();

    var /** @type {?} */_globalKeyRegistry = new KeyRegistry();

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @whatItDoes Represents a type that a Component or other object is instances of.
     *
     * @description
     *
     * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
     * the `MyCustomComponent` constructor function.
     *
     * @stable
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var /** @type {?} */Type = Function;
    /**
     * @param {?} v
     * @return {?}
     */
    function isType(v) {
        return typeof v === 'function';
    }

    /**
     * Attention: This regex has to hold even if the code is minified!
     */
    var /** @type {?} */DELEGATE_CTOR = /^function\s+\S+\(\)\s*{\s*("use strict";)?\s*(return\s+)?(\S+\s+!==\s+null\s+&&\s+)?\S+\.apply\(this,\s*arguments\)/;

    var ReflectionCapabilities = function () {
        /**
         * @param {?=} reflect
         */
        function ReflectionCapabilities(reflect) {
            _classCallCheck(this, ReflectionCapabilities);

            this._reflect = reflect || global$1.Reflect;
        }
        /**
         * @return {?}
         */


        _createClass(ReflectionCapabilities, [{
            key: 'isReflectionEnabled',
            value: function isReflectionEnabled() {
                return true;
            }
        }, {
            key: 'factory',
            value: function factory(t) {
                return function () {
                    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                        args[_key4] = arguments[_key4];
                    }

                    return new (Function.prototype.bind.apply(t, [null].concat(args)))();
                };
            }
        }, {
            key: '_zipTypesAndAnnotations',
            value: function _zipTypesAndAnnotations(paramTypes, paramAnnotations) {
                var /** @type {?} */result = void 0;
                if (typeof paramTypes === 'undefined') {
                    result = new Array(paramAnnotations.length);
                } else {
                    result = new Array(paramTypes.length);
                }
                for (var /** @type {?} */i = 0; i < result.length; i++) {
                    // TS outputs Object for parameters without types, while Traceur omits
                    // the annotations. For now we preserve the Traceur behavior to aid
                    // migration, but this can be revisited.
                    if (typeof paramTypes === 'undefined') {
                        result[i] = [];
                    } else if (paramTypes[i] != Object) {
                        result[i] = [paramTypes[i]];
                    } else {
                        result[i] = [];
                    }
                    if (paramAnnotations && isPresent(paramAnnotations[i])) {
                        result[i] = result[i].concat(paramAnnotations[i]);
                    }
                }
                return result;
            }
        }, {
            key: '_ownParameters',
            value: function _ownParameters(type, parentCtor) {
                // If we have no decorators, we only have function.length as metadata.
                // In that case, to detect whether a child class declared an own constructor or not,
                // we need to look inside of that constructor to check whether it is
                // just calling the parent.
                // This also helps to work around for https://github.com/Microsoft/TypeScript/issues/12439
                // that sets 'design:paramtypes' to []
                // if a class inherits from another class but has no ctor declared itself.
                if (DELEGATE_CTOR.exec(type.toString())) {
                    return null;
                }
                // Prefer the direct API.
                if (type.parameters && type.parameters !== parentCtor.parameters) {
                    return type.parameters;
                }
                // API of tsickle for lowering decorators to properties on the class.
                var /** @type {?} */tsickleCtorParams = type.ctorParameters;
                if (tsickleCtorParams && tsickleCtorParams !== parentCtor.ctorParameters) {
                    // Newer tsickle uses a function closure
                    // Retain the non-function case for compatibility with older tsickle
                    var /** @type {?} */ctorParameters = typeof tsickleCtorParams === 'function' ? tsickleCtorParams() : tsickleCtorParams;
                    var /** @type {?} */paramTypes = ctorParameters.map(function (ctorParam) {
                        return ctorParam && ctorParam.type;
                    });
                    var /** @type {?} */paramAnnotations = ctorParameters.map(function (ctorParam) {
                        return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators);
                    });
                    return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
                }
                // API for metadata created by invoking the decorators.
                if (isPresent(this._reflect) && isPresent(this._reflect.getOwnMetadata)) {
                    var /** @type {?} */_paramAnnotations = this._reflect.getOwnMetadata('parameters', type);
                    var /** @type {?} */_paramTypes = this._reflect.getOwnMetadata('design:paramtypes', type);
                    if (_paramTypes || _paramAnnotations) {
                        return this._zipTypesAndAnnotations(_paramTypes, _paramAnnotations);
                    }
                }
                // If a class has no decorators, at least create metadata
                // based on function.length.
                // Note: We know that this is a real constructor as we checked
                // the content of the constructor above.
                return new Array(type.length).fill(undefined);
            }
        }, {
            key: 'parameters',
            value: function parameters(type) {
                // Note: only report metadata if we have at least one class decorator
                // to stay in sync with the static reflector.
                if (!isType(type)) {
                    return [];
                }
                var /** @type {?} */parentCtor = getParentCtor(type);
                var /** @type {?} */parameters = this._ownParameters(type, parentCtor);
                if (!parameters && parentCtor !== Object) {
                    parameters = this.parameters(parentCtor);
                }
                return parameters || [];
            }
        }, {
            key: '_ownAnnotations',
            value: function _ownAnnotations(typeOrFunc, parentCtor) {
                // Prefer the direct API.
                if (typeOrFunc.annotations && typeOrFunc.annotations !== parentCtor.annotations) {
                    var /** @type {?} */annotations = typeOrFunc.annotations;
                    if (typeof annotations === 'function' && annotations.annotations) {
                        annotations = annotations.annotations;
                    }
                    return annotations;
                }
                // API of tsickle for lowering decorators to properties on the class.
                if (typeOrFunc.decorators && typeOrFunc.decorators !== parentCtor.decorators) {
                    return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
                }
                // API for metadata created by invoking the decorators.
                if (this._reflect && this._reflect.getOwnMetadata) {
                    return this._reflect.getOwnMetadata('annotations', typeOrFunc);
                }
            }
        }, {
            key: 'annotations',
            value: function annotations(typeOrFunc) {
                if (!isType(typeOrFunc)) {
                    return [];
                }
                var /** @type {?} */parentCtor = getParentCtor(typeOrFunc);
                var /** @type {?} */ownAnnotations = this._ownAnnotations(typeOrFunc, parentCtor) || [];
                var /** @type {?} */parentAnnotations = parentCtor !== Object ? this.annotations(parentCtor) : [];
                return parentAnnotations.concat(ownAnnotations);
            }
        }, {
            key: '_ownPropMetadata',
            value: function _ownPropMetadata(typeOrFunc, parentCtor) {
                // Prefer the direct API.
                if (typeOrFunc.propMetadata && typeOrFunc.propMetadata !== parentCtor.propMetadata) {
                    var /** @type {?} */propMetadata = typeOrFunc.propMetadata;
                    if (typeof propMetadata === 'function' && propMetadata.propMetadata) {
                        propMetadata = propMetadata.propMetadata;
                    }
                    return propMetadata;
                }
                // API of tsickle for lowering decorators to properties on the class.
                if (typeOrFunc.propDecorators && typeOrFunc.propDecorators !== parentCtor.propDecorators) {
                    var /** @type {?} */propDecorators = typeOrFunc.propDecorators;
                    var /** @type {?} */_propMetadata = {};
                    Object.keys(propDecorators).forEach(function (prop) {
                        _propMetadata[prop] = convertTsickleDecoratorIntoMetadata(propDecorators[prop]);
                    });
                    return _propMetadata;
                }
                // API for metadata created by invoking the decorators.
                if (this._reflect && this._reflect.getOwnMetadata) {
                    return this._reflect.getOwnMetadata('propMetadata', typeOrFunc);
                }
            }
        }, {
            key: 'propMetadata',
            value: function propMetadata(typeOrFunc) {
                if (!isType(typeOrFunc)) {
                    return {};
                }
                var /** @type {?} */parentCtor = getParentCtor(typeOrFunc);
                var /** @type {?} */propMetadata = {};
                if (parentCtor !== Object) {
                    var /** @type {?} */parentPropMetadata = this.propMetadata(parentCtor);
                    Object.keys(parentPropMetadata).forEach(function (propName) {
                        propMetadata[propName] = parentPropMetadata[propName];
                    });
                }
                var /** @type {?} */ownPropMetadata = this._ownPropMetadata(typeOrFunc, parentCtor);
                if (ownPropMetadata) {
                    Object.keys(ownPropMetadata).forEach(function (propName) {
                        var /** @type {?} */decorators = [];
                        if (propMetadata.hasOwnProperty(propName)) {
                            decorators.push.apply(decorators, _toConsumableArray(propMetadata[propName]));
                        }
                        decorators.push.apply(decorators, _toConsumableArray(ownPropMetadata[propName]));
                        propMetadata[propName] = decorators;
                    });
                }
                return propMetadata;
            }
        }, {
            key: 'hasLifecycleHook',
            value: function hasLifecycleHook(type, lcProperty) {
                return type instanceof Type && lcProperty in type.prototype;
            }
        }, {
            key: 'getter',
            value: function getter(name) {
                return new Function('o', 'return o.' + name + ';');
            }
        }, {
            key: 'setter',
            value: function setter(name) {
                return new Function('o', 'v', 'return o.' + name + ' = v;');
            }
        }, {
            key: 'method',
            value: function method(name) {
                var /** @type {?} */functionBody = 'if (!o.' + name + ') throw new Error(\'"' + name + '" is undefined\');\n        return o.' + name + '.apply(o, args);';
                return new Function('o', 'args', functionBody);
            }
        }, {
            key: 'importUri',
            value: function importUri(type) {
                // StaticSymbol
                if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type['filePath']) {
                    return type['filePath'];
                }
                // Runtime type
                return './' + stringify(type);
            }
        }, {
            key: 'resolveIdentifier',
            value: function resolveIdentifier(name, moduleUrl, members, runtime) {
                return runtime;
            }
        }, {
            key: 'resolveEnum',
            value: function resolveEnum(enumIdentifier, name) {
                return enumIdentifier[name];
            }
        }]);

        return ReflectionCapabilities;
    }();

    /**
     * @param {?} decoratorInvocations
     * @return {?}
     */
    function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
        if (!decoratorInvocations) {
            return [];
        }
        return decoratorInvocations.map(function (decoratorInvocation) {
            var /** @type {?} */decoratorType = decoratorInvocation.type;
            var /** @type {?} */annotationCls = decoratorType.annotationCls;
            var /** @type {?} */annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
            return new (Function.prototype.bind.apply(annotationCls, [null].concat(_toConsumableArray(annotationArgs))))();
        });
    }
    /**
     * @param {?} ctor
     * @return {?}
     */
    function getParentCtor(ctor) {
        var /** @type {?} */parentProto = Object.getPrototypeOf(ctor.prototype);
        var /** @type {?} */parentCtor = parentProto ? parentProto.constructor : null;
        // Note: We always use `Object` as the null value
        // to simplify checking later on.
        return parentCtor || Object;
    }

    /**
     * Provides read-only access to reflection data about symbols. Used internally by Angular
     * to power dependency injection and compilation.
     * @abstract
     */

    var ReflectorReader = function () {
        function ReflectorReader() {
            _classCallCheck(this, ReflectorReader);
        }

        _createClass(ReflectorReader, [{
            key: 'parameters',
            value: function parameters(typeOrFunc) {}
        }, {
            key: 'annotations',
            value: function annotations(typeOrFunc) {}
        }, {
            key: 'propMetadata',
            value: function propMetadata(typeOrFunc) {}
        }, {
            key: 'importUri',
            value: function importUri(typeOrFunc) {}
        }, {
            key: 'resolveIdentifier',
            value: function resolveIdentifier(name, moduleUrl, members, runtime) {}
        }, {
            key: 'resolveEnum',
            value: function resolveEnum(identifier, name) {}
        }]);

        return ReflectorReader;
    }();

    var Reflector = function (_ReflectorReader) {
        _inherits(Reflector, _ReflectorReader);

        /**
         * @param {?} reflectionCapabilities
         */
        function Reflector(reflectionCapabilities) {
            _classCallCheck(this, Reflector);

            var _this3 = _possibleConstructorReturn(this, (Reflector.__proto__ || Object.getPrototypeOf(Reflector)).call(this));

            _this3.reflectionCapabilities = reflectionCapabilities;
            return _this3;
        }
        /**
         * @param {?} caps
         * @return {?}
         */


        _createClass(Reflector, [{
            key: 'updateCapabilities',
            value: function updateCapabilities(caps) {
                this.reflectionCapabilities = caps;
            }
        }, {
            key: 'factory',
            value: function factory(type) {
                return this.reflectionCapabilities.factory(type);
            }
        }, {
            key: 'parameters',
            value: function parameters(typeOrFunc) {
                return this.reflectionCapabilities.parameters(typeOrFunc);
            }
        }, {
            key: 'annotations',
            value: function annotations(typeOrFunc) {
                return this.reflectionCapabilities.annotations(typeOrFunc);
            }
        }, {
            key: 'propMetadata',
            value: function propMetadata(typeOrFunc) {
                return this.reflectionCapabilities.propMetadata(typeOrFunc);
            }
        }, {
            key: 'hasLifecycleHook',
            value: function hasLifecycleHook(type, lcProperty) {
                return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
            }
        }, {
            key: 'getter',
            value: function getter(name) {
                return this.reflectionCapabilities.getter(name);
            }
        }, {
            key: 'setter',
            value: function setter(name) {
                return this.reflectionCapabilities.setter(name);
            }
        }, {
            key: 'method',
            value: function method(name) {
                return this.reflectionCapabilities.method(name);
            }
        }, {
            key: 'importUri',
            value: function importUri(type) {
                return this.reflectionCapabilities.importUri(type);
            }
        }, {
            key: 'resolveIdentifier',
            value: function resolveIdentifier(name, moduleUrl, members, runtime) {
                return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, members, runtime);
            }
        }, {
            key: 'resolveEnum',
            value: function resolveEnum(identifier, name) {
                return this.reflectionCapabilities.resolveEnum(identifier, name);
            }
        }]);

        return Reflector;
    }(ReflectorReader);

    /**
     * The {@link Reflector} used internally in Angular to access metadata
     * about symbols.
     */
    var /** @type {?} */reflector = new Reflector(new ReflectionCapabilities());

    /**
     * `Dependency` is used by the framework to extend DI.
     * This is internal to Angular and should not be used directly.
     */

    var ReflectiveDependency = function () {
        /**
         * @param {?} key
         * @param {?} optional
         * @param {?} visibility
         */
        function ReflectiveDependency(key, optional, visibility) {
            _classCallCheck(this, ReflectiveDependency);

            this.key = key;
            this.optional = optional;
            this.visibility = visibility;
        }
        /**
         * @param {?} key
         * @return {?}
         */


        _createClass(ReflectiveDependency, null, [{
            key: 'fromKey',
            value: function fromKey(key) {
                return new ReflectiveDependency(key, false, null);
            }
        }]);

        return ReflectiveDependency;
    }();

    var /** @type {?} */_EMPTY_LIST = [];

    var ResolvedReflectiveProvider_ = function () {
        /**
         * @param {?} key
         * @param {?} resolvedFactories
         * @param {?} multiProvider
         */
        function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
            _classCallCheck(this, ResolvedReflectiveProvider_);

            this.key = key;
            this.resolvedFactories = resolvedFactories;
            this.multiProvider = multiProvider;
        }
        /**
         * @return {?}
         */


        _createClass(ResolvedReflectiveProvider_, [{
            key: 'resolvedFactory',
            get: function get() {
                return this.resolvedFactories[0];
            }
        }]);

        return ResolvedReflectiveProvider_;
    }();

    var ResolvedReflectiveFactory =
    /**
     * @param {?} factory
     * @param {?} dependencies
     */
    function ResolvedReflectiveFactory(factory, dependencies) {
        _classCallCheck(this, ResolvedReflectiveFactory);

        this.factory = factory;
        this.dependencies = dependencies;
    };

    /**
     * Resolve a single provider.
     * @param {?} provider
     * @return {?}
     */
    function resolveReflectiveFactory(provider) {
        var /** @type {?} */factoryFn = void 0;
        var /** @type {?} */resolvedDeps = void 0;
        if (provider.useClass) {
            var /** @type {?} */useClass = resolveForwardRef(provider.useClass);
            factoryFn = reflector.factory(useClass);
            resolvedDeps = _dependenciesFor(useClass);
        } else if (provider.useExisting) {
            factoryFn = function factoryFn(aliasInstance) {
                return aliasInstance;
            };
            resolvedDeps = [ReflectiveDependency.fromKey(ReflectiveKey.get(provider.useExisting))];
        } else if (provider.useFactory) {
            factoryFn = provider.useFactory;
            resolvedDeps = constructDependencies(provider.useFactory, provider.deps);
        } else {
            factoryFn = function factoryFn() {
                return provider.useValue;
            };
            resolvedDeps = _EMPTY_LIST;
        }
        return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
    }
    /**
     * Converts the {\@link Provider} into {\@link ResolvedProvider}.
     *
     * {\@link Injector} internally only uses {\@link ResolvedProvider}, {\@link Provider} contains
     * convenience provider syntax.
     * @param {?} provider
     * @return {?}
     */
    function resolveReflectiveProvider(provider) {
        return new ResolvedReflectiveProvider_(ReflectiveKey.get(provider.provide), [resolveReflectiveFactory(provider)], provider.multi);
    }
    /**
     * Resolve a list of Providers.
     * @param {?} providers
     * @return {?}
     */
    function resolveReflectiveProviders(providers) {
        var /** @type {?} */normalized = _normalizeProviders(providers, []);
        var /** @type {?} */resolved = normalized.map(resolveReflectiveProvider);
        var /** @type {?} */resolvedProviderMap = mergeResolvedReflectiveProviders(resolved, new Map());
        return Array.from(resolvedProviderMap.values());
    }
    /**
     * Merges a list of ResolvedProviders into a list where
     * each key is contained exactly once and multi providers
     * have been merged.
     * @param {?} providers
     * @param {?} normalizedProvidersMap
     * @return {?}
     */
    function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
        for (var /** @type {?} */i = 0; i < providers.length; i++) {
            var /** @type {?} */provider = providers[i];
            var /** @type {?} */existing = normalizedProvidersMap.get(provider.key.id);
            if (existing) {
                if (provider.multiProvider !== existing.multiProvider) {
                    throw mixingMultiProvidersWithRegularProvidersError(existing, provider);
                }
                if (provider.multiProvider) {
                    for (var /** @type {?} */j = 0; j < provider.resolvedFactories.length; j++) {
                        existing.resolvedFactories.push(provider.resolvedFactories[j]);
                    }
                } else {
                    normalizedProvidersMap.set(provider.key.id, provider);
                }
            } else {
                var /** @type {?} */resolvedProvider = void 0;
                if (provider.multiProvider) {
                    resolvedProvider = new ResolvedReflectiveProvider_(provider.key, provider.resolvedFactories.slice(), provider.multiProvider);
                } else {
                    resolvedProvider = provider;
                }
                normalizedProvidersMap.set(provider.key.id, resolvedProvider);
            }
        }
        return normalizedProvidersMap;
    }
    /**
     * @param {?} providers
     * @param {?} res
     * @return {?}
     */
    function _normalizeProviders(providers, res) {
        providers.forEach(function (b) {
            if (b instanceof Type) {
                res.push({ provide: b, useClass: b });
            } else if (b && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) == 'object' && b.provide !== undefined) {
                res.push( /** @type {?} */b);
            } else if (b instanceof Array) {
                _normalizeProviders(b, res);
            } else {
                throw invalidProviderError(b);
            }
        });
        return res;
    }
    /**
     * @param {?} typeOrFunc
     * @param {?} dependencies
     * @return {?}
     */
    function constructDependencies(typeOrFunc, dependencies) {
        if (!dependencies) {
            return _dependenciesFor(typeOrFunc);
        } else {
            var /** @type {?} */params = dependencies.map(function (t) {
                return [t];
            });
            return dependencies.map(function (t) {
                return _extractToken(typeOrFunc, t, params);
            });
        }
    }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    function _dependenciesFor(typeOrFunc) {
        var /** @type {?} */params = reflector.parameters(typeOrFunc);
        if (!params) return [];
        if (params.some(function (p) {
            return p == null;
        })) {
            throw noAnnotationError(typeOrFunc, params);
        }
        return params.map(function (p) {
            return _extractToken(typeOrFunc, p, params);
        });
    }
    /**
     * @param {?} typeOrFunc
     * @param {?} metadata
     * @param {?} params
     * @return {?}
     */
    function _extractToken(typeOrFunc, metadata, params) {
        var /** @type {?} */token = null;
        var /** @type {?} */optional = false;
        if (!Array.isArray(metadata)) {
            if (metadata instanceof Inject) {
                return _createDependency(metadata['token'], optional, null);
            } else {
                return _createDependency(metadata, optional, null);
            }
        }
        var /** @type {?} */visibility = null;
        for (var /** @type {?} */i = 0; i < metadata.length; ++i) {
            var /** @type {?} */paramMetadata = metadata[i];
            if (paramMetadata instanceof Type) {
                token = paramMetadata;
            } else if (paramMetadata instanceof Inject) {
                token = paramMetadata['token'];
            } else if (paramMetadata instanceof Optional) {
                optional = true;
            } else if (paramMetadata instanceof Self || paramMetadata instanceof SkipSelf) {
                visibility = paramMetadata;
            } else if (paramMetadata instanceof InjectionToken) {
                token = paramMetadata;
            }
        }
        token = resolveForwardRef(token);
        if (token != null) {
            return _createDependency(token, optional, visibility);
        } else {
            throw noAnnotationError(typeOrFunc, params);
        }
    }
    /**
     * @param {?} token
     * @param {?} optional
     * @param {?} visibility
     * @return {?}
     */
    function _createDependency(token, optional, visibility) {
        return new ReflectiveDependency(ReflectiveKey.get(token), optional, visibility);
    }

    // Threshold for the dynamic version
    var /** @type {?} */UNDEFINED = new Object();
    /**
     * A ReflectiveDependency injection container used for instantiating objects and resolving
     * dependencies.
     *
     * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
     * constructor dependencies.
     *
     * In typical use, application code asks for the dependencies in the constructor and they are
     * resolved by the `Injector`.
     *
     * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
     *
     * The following example creates an `Injector` configured to create `Engine` and `Car`.
     *
     * ```typescript
     * \@Injectable()
     * class Engine {
     * }
     *
     * \@Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
     * var car = injector.get(Car);
     * expect(car instanceof Car).toBe(true);
     * expect(car.engine instanceof Engine).toBe(true);
     * ```
     *
     * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
     * resolve all of the object's dependencies automatically.
     *
     * \@stable
     * @abstract
     */

    var ReflectiveInjector = function () {
        function ReflectiveInjector() {
            _classCallCheck(this, ReflectiveInjector);
        }

        _createClass(ReflectiveInjector, [{
            key: 'parent',
            value: function parent() {}
        }, {
            key: 'resolveAndCreateChild',
            value: function resolveAndCreateChild(providers) {}
        }, {
            key: 'createChildFromResolved',
            value: function createChildFromResolved(providers) {}
        }, {
            key: 'resolveAndInstantiate',
            value: function resolveAndInstantiate(provider) {}
        }, {
            key: 'instantiateResolved',
            value: function instantiateResolved(provider) {}
        }, {
            key: 'get',
            value: function get(token, notFoundValue) {}
        }], [{
            key: 'resolve',
            value: function resolve(providers) {
                return resolveReflectiveProviders(providers);
            }
        }, {
            key: 'resolveAndCreate',
            value: function resolveAndCreate(providers) {
                var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                var /** @type {?} */ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
                return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
            }
        }, {
            key: 'fromResolvedProviders',
            value: function fromResolvedProviders(providers) {
                var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                return new ReflectiveInjector_(providers, parent);
            }
        }]);

        return ReflectiveInjector;
    }();

    var ReflectiveInjector_ = function () {
        /**
         * Private
         * @param {?} _providers
         * @param {?=} _parent
         */
        function ReflectiveInjector_(_providers) {
            var _parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            _classCallCheck(this, ReflectiveInjector_);

            /** @internal */
            this._constructionCounter = 0;
            this._providers = _providers;
            this._parent = _parent;
            var len = _providers.length;
            this.keyIds = new Array(len);
            this.objs = new Array(len);
            for (var i = 0; i < len; i++) {
                this.keyIds[i] = _providers[i].key.id;
                this.objs[i] = UNDEFINED;
            }
        }
        /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @return {?}
         */


        _createClass(ReflectiveInjector_, [{
            key: 'get',
            value: function get(token) {
                var notFoundValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : THROW_IF_NOT_FOUND;

                return this._getByKey(ReflectiveKey.get(token), null, notFoundValue);
            }
        }, {
            key: 'resolveAndCreateChild',
            value: function resolveAndCreateChild(providers) {
                var /** @type {?} */ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
                return this.createChildFromResolved(ResolvedReflectiveProviders);
            }
        }, {
            key: 'createChildFromResolved',
            value: function createChildFromResolved(providers) {
                var /** @type {?} */inj = new ReflectiveInjector_(providers);
                inj._parent = this;
                return inj;
            }
        }, {
            key: 'resolveAndInstantiate',
            value: function resolveAndInstantiate(provider) {
                return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
            }
        }, {
            key: 'instantiateResolved',
            value: function instantiateResolved(provider) {
                return this._instantiateProvider(provider);
            }
        }, {
            key: 'getProviderAtIndex',
            value: function getProviderAtIndex(index) {
                if (index < 0 || index >= this._providers.length) {
                    throw outOfBoundsError(index);
                }
                return this._providers[index];
            }
        }, {
            key: '_new',
            value: function _new(provider) {
                if (this._constructionCounter++ > this._getMaxNumberOfObjects()) {
                    throw cyclicDependencyError(this, provider.key);
                }
                return this._instantiateProvider(provider);
            }
        }, {
            key: '_getMaxNumberOfObjects',
            value: function _getMaxNumberOfObjects() {
                return this.objs.length;
            }
        }, {
            key: '_instantiateProvider',
            value: function _instantiateProvider(provider) {
                if (provider.multiProvider) {
                    var /** @type {?} */res = new Array(provider.resolvedFactories.length);
                    for (var /** @type {?} */i = 0; i < provider.resolvedFactories.length; ++i) {
                        res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
                    }
                    return res;
                } else {
                    return this._instantiate(provider, provider.resolvedFactories[0]);
                }
            }
        }, {
            key: '_instantiate',
            value: function _instantiate(provider, ResolvedReflectiveFactory) {
                var _this4 = this;

                var /** @type {?} */factory = ResolvedReflectiveFactory.factory;
                var /** @type {?} */deps = void 0;
                try {
                    deps = ResolvedReflectiveFactory.dependencies.map(function (dep) {
                        return _this4._getByReflectiveDependency(dep);
                    });
                } catch (e) {
                    if (e.addKey) {
                        e.addKey(this, provider.key);
                    }
                    throw e;
                }
                var /** @type {?} */obj = void 0;
                try {
                    obj = factory.apply(undefined, _toConsumableArray(deps));
                } catch (e) {
                    throw instantiationError(this, e, e.stack, provider.key);
                }
                return obj;
            }
        }, {
            key: '_getByReflectiveDependency',
            value: function _getByReflectiveDependency(dep) {
                return this._getByKey(dep.key, dep.visibility, dep.optional ? null : THROW_IF_NOT_FOUND);
            }
        }, {
            key: '_getByKey',
            value: function _getByKey(key, visibility, notFoundValue) {
                if (key === INJECTOR_KEY) {
                    return this;
                }
                if (visibility instanceof Self) {
                    return this._getByKeySelf(key, notFoundValue);
                } else {
                    return this._getByKeyDefault(key, notFoundValue, visibility);
                }
            }
        }, {
            key: '_getObjByKeyId',
            value: function _getObjByKeyId(keyId) {
                for (var /** @type {?} */i = 0; i < this.keyIds.length; i++) {
                    if (this.keyIds[i] === keyId) {
                        if (this.objs[i] === UNDEFINED) {
                            this.objs[i] = this._new(this._providers[i]);
                        }
                        return this.objs[i];
                    }
                }
                return UNDEFINED;
            }
        }, {
            key: '_throwOrNull',
            value: function _throwOrNull(key, notFoundValue) {
                if (notFoundValue !== THROW_IF_NOT_FOUND) {
                    return notFoundValue;
                } else {
                    throw noProviderError(this, key);
                }
            }
        }, {
            key: '_getByKeySelf',
            value: function _getByKeySelf(key, notFoundValue) {
                var /** @type {?} */obj = this._getObjByKeyId(key.id);
                return obj !== UNDEFINED ? obj : this._throwOrNull(key, notFoundValue);
            }
        }, {
            key: '_getByKeyDefault',
            value: function _getByKeyDefault(key, notFoundValue, visibility) {
                var /** @type {?} */inj = void 0;
                if (visibility instanceof SkipSelf) {
                    inj = this._parent;
                } else {
                    inj = this;
                }
                while (inj instanceof ReflectiveInjector_) {
                    var /** @type {?} */inj_ = inj;
                    var /** @type {?} */obj = inj_._getObjByKeyId(key.id);
                    if (obj !== UNDEFINED) return obj;
                    inj = inj_._parent;
                }
                if (inj !== null) {
                    return inj.get(key.token, notFoundValue);
                } else {
                    return this._throwOrNull(key, notFoundValue);
                }
            }
        }, {
            key: 'toString',
            value: function toString() {
                return this.displayName;
            }
        }, {
            key: 'parent',
            get: function get() {
                return this._parent;
            }
        }, {
            key: 'displayName',
            get: function get() {
                var /** @type {?} */providers = _mapProviders(this, function (b) {
                    return ' "' + b.key.displayName + '" ';
                }).join(', ');
                return 'ReflectiveInjector(providers: [' + providers + '])';
            }
        }]);

        return ReflectiveInjector_;
    }();

    var /** @type {?} */INJECTOR_KEY = ReflectiveKey.get(Injector);
    /**
     * @param {?} injector
     * @param {?} fn
     * @return {?}
     */
    function _mapProviders(injector, fn) {
        var /** @type {?} */res = new Array(injector._providers.length);
        for (var /** @type {?} */i = 0; i < injector._providers.length; ++i) {
            res[i] = fn(injector.getProviderAtIndex(i));
        }
        return res;
    }

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
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(m1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var k = _step.value;

                        m[k] = m1[k];
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

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = Object.keys(m2)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _k = _step2.value;

                        m[_k] = m2[_k];
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

    var ListWrapper = function () {
        function ListWrapper() {
            _classCallCheck(this, ListWrapper);
        }

        _createClass(ListWrapper, null, [{
            key: 'findLast',
            value: function findLast(arr, condition) {
                for (var /** @type {?} */i = arr.length - 1; i >= 0; i--) {
                    if (condition(arr[i])) {
                        return arr[i];
                    }
                }
                return null;
            }
        }, {
            key: 'removeAll',
            value: function removeAll(list, items) {
                for (var /** @type {?} */i = 0; i < items.length; ++i) {
                    var /** @type {?} */index = list.indexOf(items[i]);
                    if (index > -1) {
                        list.splice(index, 1);
                    }
                }
            }
        }, {
            key: 'remove',
            value: function remove(list, el) {
                var /** @type {?} */index = list.indexOf(el);
                if (index > -1) {
                    list.splice(index, 1);
                    return true;
                }
                return false;
            }
        }, {
            key: 'equals',
            value: function equals(a, b) {
                if (a.length != b.length) return false;
                for (var /** @type {?} */i = 0; i < a.length; ++i) {
                    if (a[i] !== b[i]) return false;
                }
                return true;
            }
        }, {
            key: 'flatten',
            value: function flatten(list) {
                return list.reduce(function (flat, item) {
                    var /** @type {?} */flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
                    return flat.concat(flatItem);
                }, []);
            }
        }]);

        return ListWrapper;
    }();

    /**
     * @param {?} obj
     * @return {?}
     */
    function isListLikeIterable(obj) {
        if (!isJsObject(obj)) return false;
        return Array.isArray(obj) || !(obj instanceof Map) && getSymbolIterator() in obj; // JS Iterable have a Symbol.iterator prop
    }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} comparator
     * @return {?}
     */
    function areIterablesEqual(a, b, comparator) {
        var /** @type {?} */iterator1 = a[getSymbolIterator()]();
        var /** @type {?} */iterator2 = b[getSymbolIterator()]();
        while (true) {
            var /** @type {?} */item1 = iterator1.next();
            var /** @type {?} */item2 = iterator2.next();
            if (item1.done && item2.done) return true;
            if (item1.done || item2.done) return false;
            if (!comparator(item1.value, item2.value)) return false;
        }
    }
    /**
     * @param {?} obj
     * @param {?} fn
     * @return {?}
     */
    function iterateListLike(obj, fn) {
        if (Array.isArray(obj)) {
            for (var /** @type {?} */i = 0; i < obj.length; i++) {
                fn(obj[i]);
            }
        } else {
            var /** @type {?} */iterator = obj[getSymbolIterator()]();
            var /** @type {?} */item = void 0;
            while (!(item = iterator.next()).done) {
                fn(item.value);
            }
        }
    }

    /**
     * Determine if the argument is shaped like a Promise
     * @param {?} obj
     * @return {?}
     */
    function isPromise(obj) {
        // allow any Promise/A+ compliant thenable.
        // It's up to the caller to ensure that obj.then conforms to the spec
        return !!obj && typeof obj.then === 'function';
    }
    /**
     * Determine if the argument is an Observable
     * @param {?} obj
     * @return {?}
     */
    function isObservable(obj) {
        return !!(obj && obj[_observable.$$observable]);
    }

    /**
     * A function that will be executed when an application is initialized.
     * @experimental
     */
    var /** @type {?} */APP_INITIALIZER = new InjectionToken('Application Initializer');
    /**
     * A class that reflects the state of running {\@link APP_INITIALIZER}s.
     *
     * \@experimental
     */

    var ApplicationInitStatus = function () {
        /**
         * @param {?} appInits
         */
        function ApplicationInitStatus(appInits) {
            var _this5 = this;

            _classCallCheck(this, ApplicationInitStatus);

            this._done = false;
            var asyncInitPromises = [];
            if (appInits) {
                for (var i = 0; i < appInits.length; i++) {
                    var initResult = appInits[i]();
                    if (isPromise(initResult)) {
                        asyncInitPromises.push(initResult);
                    }
                }
            }
            this._donePromise = Promise.all(asyncInitPromises).then(function () {
                _this5._done = true;
            });
            if (asyncInitPromises.length === 0) {
                this._done = true;
            }
        }
        /**
         * @return {?}
         */


        _createClass(ApplicationInitStatus, [{
            key: 'done',
            get: function get() {
                return this._done;
            }
        }, {
            key: 'donePromise',
            get: function get() {
                return this._donePromise;
            }
        }]);

        return ApplicationInitStatus;
    }();

    ApplicationInitStatus.decorators = [{ type: Injectable }];
    /** @nocollapse */
    ApplicationInitStatus.ctorParameters = function () {
        return [{ type: Array, decorators: [{ type: Inject, args: [APP_INITIALIZER] }, { type: Optional }] }];
    };

    /**
     * A DI Token representing a unique string id assigned to the application by Angular and used
     * primarily for prefixing application attributes and CSS styles when
     * {@link ViewEncapsulation#Emulated} is being used.
     *
     * If you need to avoid randomly generated value to be used as an application id, you can provide
     * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
     * using this token.
     * @experimental
     */
    var /** @type {?} */APP_ID = new InjectionToken('AppId');
    /**
     * @return {?}
     */
    function _appIdRandomProviderFactory() {
        return '' + _randomChar() + _randomChar() + _randomChar();
    }
    /**
     * Providers that will generate a random APP_ID_TOKEN.
     * @experimental
     */
    var /** @type {?} */APP_ID_RANDOM_PROVIDER = {
        provide: APP_ID,
        useFactory: _appIdRandomProviderFactory,
        deps: /** @type {?} */[]
    };
    /**
     * @return {?}
     */
    function _randomChar() {
        return String.fromCharCode(97 + Math.floor(Math.random() * 25));
    }
    /**
     * A function that will be executed when a platform is initialized.
     * @experimental
     */
    var /** @type {?} */PLATFORM_INITIALIZER = new InjectionToken('Platform Initializer');
    /**
     * A token that indicates an opaque platform id.
     * @experimental
     */
    var /** @type {?} */PLATFORM_ID = new InjectionToken('Platform ID');
    /**
     * All callbacks provided via this token will be called for every component that is bootstrapped.
     * Signature of the callback:
     *
     * `(componentRef: ComponentRef) => void`.
     *
     * @experimental
     */
    var /** @type {?} */APP_BOOTSTRAP_LISTENER = new InjectionToken('appBootstrapListener');
    /**
     * A token which indicates the root directory of the application
     * @experimental
     */
    var /** @type {?} */PACKAGE_ROOT_URL = new InjectionToken('Application Packages Root URL');

    var Console = function () {
        function Console() {
            _classCallCheck(this, Console);
        }

        _createClass(Console, [{
            key: 'log',
            value: function log(message) {
                print(message);
            }
        }, {
            key: 'warn',
            value: function warn(message) {
                _warn(message);
            }
        }]);

        return Console;
    }();

    Console.decorators = [{ type: Injectable }];
    /** @nocollapse */
    Console.ctorParameters = function () {
        return [];
    };

    /**
     * Combination of NgModuleFactory and ComponentFactorys.
     *
     * \@experimental
     */

    var ModuleWithComponentFactories =
    /**
     * @param {?} ngModuleFactory
     * @param {?} componentFactories
     */
    function ModuleWithComponentFactories(ngModuleFactory, componentFactories) {
        _classCallCheck(this, ModuleWithComponentFactories);

        this.ngModuleFactory = ngModuleFactory;
        this.componentFactories = componentFactories;
    };

    /**
     * @return {?}
     */
    function _throwError() {
        throw new Error('Runtime compiler is not loaded');
    }
    /**
     * Low-level service for running the angular compiler during runtime
     * to create {\@link ComponentFactory}s, which
     * can later be used to create and render a Component instance.
     *
     * Each `\@NgModule` provides an own `Compiler` to its injector,
     * that will use the directives/pipes of the ng module for compilation
     * of components.
     * \@stable
     */

    var Compiler = function () {
        function Compiler() {
            _classCallCheck(this, Compiler);
        }

        _createClass(Compiler, [{
            key: 'compileModuleSync',
            value: function compileModuleSync(moduleType) {
                throw _throwError();
            }
        }, {
            key: 'compileModuleAsync',
            value: function compileModuleAsync(moduleType) {
                throw _throwError();
            }
        }, {
            key: 'compileModuleAndAllComponentsSync',
            value: function compileModuleAndAllComponentsSync(moduleType) {
                throw _throwError();
            }
        }, {
            key: 'compileModuleAndAllComponentsAsync',
            value: function compileModuleAndAllComponentsAsync(moduleType) {
                throw _throwError();
            }
        }, {
            key: 'getNgContentSelectors',
            value: function getNgContentSelectors(component) {
                throw _throwError();
            }
        }, {
            key: 'clearCache',
            value: function clearCache() {}
        }, {
            key: 'clearCacheFor',
            value: function clearCacheFor(type) {}
        }]);

        return Compiler;
    }();

    Compiler.decorators = [{ type: Injectable }];
    /** @nocollapse */
    Compiler.ctorParameters = function () {
        return [];
    };
    /**
     * Token to provide CompilerOptions in the platform injector.
     *
     * @experimental
     */
    var /** @type {?} */COMPILER_OPTIONS = new InjectionToken('compilerOptions');
    /**
     * A factory for creating a Compiler
     *
     * \@experimental
     * @abstract
     */

    var CompilerFactory = function () {
        function CompilerFactory() {
            _classCallCheck(this, CompilerFactory);
        }

        _createClass(CompilerFactory, [{
            key: 'createCompiler',
            value: function createCompiler(options) {}
        }]);

        return CompilerFactory;
    }();

    var ElementRef =
    /**
     * @param {?} nativeElement
     */
    function ElementRef(nativeElement) {
        _classCallCheck(this, ElementRef);

        this.nativeElement = nativeElement;
    };

    var EventEmitter = function (_Subject) {
        _inherits(EventEmitter, _Subject);

        /**
         * Creates an instance of [EventEmitter], which depending on [isAsync],
         * delivers events synchronously or asynchronously.
         * @param {?=} isAsync
         */
        function EventEmitter() {
            var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _classCallCheck(this, EventEmitter);

            var _this6 = _possibleConstructorReturn(this, (EventEmitter.__proto__ || Object.getPrototypeOf(EventEmitter)).call(this));

            _this6.__isAsync = isAsync;
            return _this6;
        }
        /**
         * @param {?=} value
         * @return {?}
         */


        _createClass(EventEmitter, [{
            key: 'emit',
            value: function emit(value) {
                _get(EventEmitter.prototype.__proto__ || Object.getPrototypeOf(EventEmitter.prototype), 'next', this).call(this, value);
            }
        }, {
            key: 'subscribe',
            value: function subscribe(generatorOrNext, error, complete) {
                var /** @type {?} */schedulerFn = void 0;
                var /** @type {?} */errorFn = function errorFn(err) {
                    return null;
                };
                var /** @type {?} */completeFn = function completeFn() {
                    return null;
                };
                if (generatorOrNext && (typeof generatorOrNext === 'undefined' ? 'undefined' : _typeof(generatorOrNext)) === 'object') {
                    schedulerFn = this.__isAsync ? function (value) {
                        setTimeout(function () {
                            return generatorOrNext.next(value);
                        });
                    } : function (value) {
                        generatorOrNext.next(value);
                    };
                    if (generatorOrNext.error) {
                        errorFn = this.__isAsync ? function (err) {
                            setTimeout(function () {
                                return generatorOrNext.error(err);
                            });
                        } : function (err) {
                            generatorOrNext.error(err);
                        };
                    }
                    if (generatorOrNext.complete) {
                        completeFn = this.__isAsync ? function () {
                            setTimeout(function () {
                                return generatorOrNext.complete();
                            });
                        } : function () {
                            generatorOrNext.complete();
                        };
                    }
                } else {
                    schedulerFn = this.__isAsync ? function (value) {
                        setTimeout(function () {
                            return generatorOrNext(value);
                        });
                    } : function (value) {
                        generatorOrNext(value);
                    };
                    if (error) {
                        errorFn = this.__isAsync ? function (err) {
                            setTimeout(function () {
                                return error(err);
                            });
                        } : function (err) {
                            error(err);
                        };
                    }
                    if (complete) {
                        completeFn = this.__isAsync ? function () {
                            setTimeout(function () {
                                return complete();
                            });
                        } : function () {
                            complete();
                        };
                    }
                }
                return _get(EventEmitter.prototype.__proto__ || Object.getPrototypeOf(EventEmitter.prototype), 'subscribe', this).call(this, schedulerFn, errorFn, completeFn);
            }
        }]);

        return EventEmitter;
    }(_Subject2.Subject);

    var NgZone = function () {
        /**
         * @param {?} __0
         */
        function NgZone(_ref2) {
            var _ref2$enableLongStack = _ref2.enableLongStackTrace,
                enableLongStackTrace = _ref2$enableLongStack === undefined ? false : _ref2$enableLongStack;

            _classCallCheck(this, NgZone);

            this._hasPendingMicrotasks = false;
            this._hasPendingMacrotasks = false;
            this._isStable = true;
            this._nesting = 0;
            this._onUnstable = new EventEmitter(false);
            this._onMicrotaskEmpty = new EventEmitter(false);
            this._onStable = new EventEmitter(false);
            this._onErrorEvents = new EventEmitter(false);
            if (typeof Zone == 'undefined') {
                throw new Error('Angular requires Zone.js prolyfill.');
            }
            Zone.assertZonePatched();
            this.outer = this.inner = Zone.current;
            if (Zone['wtfZoneSpec']) {
                this.inner = this.inner.fork(Zone['wtfZoneSpec']);
            }
            if (enableLongStackTrace && Zone['longStackTraceZoneSpec']) {
                this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
            }
            this.forkInnerZoneWithAngularBehavior();
        }
        /**
         * @return {?}
         */


        _createClass(NgZone, [{
            key: 'run',
            value: function run(fn) {
                return this.inner.run(fn);
            }
        }, {
            key: 'runGuarded',
            value: function runGuarded(fn) {
                return this.inner.runGuarded(fn);
            }
        }, {
            key: 'runOutsideAngular',
            value: function runOutsideAngular(fn) {
                return this.outer.run(fn);
            }
        }, {
            key: 'checkStable',
            value: function checkStable() {
                var _this7 = this;

                if (this._nesting == 0 && !this._hasPendingMicrotasks && !this._isStable) {
                    try {
                        this._nesting++;
                        this._onMicrotaskEmpty.emit(null);
                    } finally {
                        this._nesting--;
                        if (!this._hasPendingMicrotasks) {
                            try {
                                this.runOutsideAngular(function () {
                                    return _this7._onStable.emit(null);
                                });
                            } finally {
                                this._isStable = true;
                            }
                        }
                    }
                }
            }
        }, {
            key: 'forkInnerZoneWithAngularBehavior',
            value: function forkInnerZoneWithAngularBehavior() {
                var _this8 = this;

                this.inner = this.inner.fork({
                    name: 'angular',
                    properties: /** @type {?} */{ 'isAngularZone': true },
                    onInvokeTask: function onInvokeTask(delegate, current, target, task, applyThis, applyArgs) {
                        try {
                            _this8.onEnter();
                            return delegate.invokeTask(target, task, applyThis, applyArgs);
                        } finally {
                            _this8.onLeave();
                        }
                    },
                    onInvoke: function onInvoke(delegate, current, target, callback, applyThis, applyArgs, source) {
                        try {
                            _this8.onEnter();
                            return delegate.invoke(target, callback, applyThis, applyArgs, source);
                        } finally {
                            _this8.onLeave();
                        }
                    },
                    onHasTask: function onHasTask(delegate, current, target, hasTaskState) {
                        delegate.hasTask(target, hasTaskState);
                        if (current === target) {
                            // We are only interested in hasTask events which originate from our zone
                            // (A child hasTask event is not interesting to us)
                            if (hasTaskState.change == 'microTask') {
                                _this8.setHasMicrotask(hasTaskState.microTask);
                            } else if (hasTaskState.change == 'macroTask') {
                                _this8.setHasMacrotask(hasTaskState.macroTask);
                            }
                        }
                    },
                    onHandleError: function onHandleError(delegate, current, target, error) {
                        delegate.handleError(target, error);
                        _this8.triggerError(error);
                        return false;
                    }
                });
            }
        }, {
            key: 'onEnter',
            value: function onEnter() {
                this._nesting++;
                if (this._isStable) {
                    this._isStable = false;
                    this._onUnstable.emit(null);
                }
            }
        }, {
            key: 'onLeave',
            value: function onLeave() {
                this._nesting--;
                this.checkStable();
            }
        }, {
            key: 'setHasMicrotask',
            value: function setHasMicrotask(hasMicrotasks) {
                this._hasPendingMicrotasks = hasMicrotasks;
                this.checkStable();
            }
        }, {
            key: 'setHasMacrotask',
            value: function setHasMacrotask(hasMacrotasks) {
                this._hasPendingMacrotasks = hasMacrotasks;
            }
        }, {
            key: 'triggerError',
            value: function triggerError(error) {
                this._onErrorEvents.emit(error);
            }
        }, {
            key: 'onUnstable',
            get: function get() {
                return this._onUnstable;
            }
        }, {
            key: 'onMicrotaskEmpty',
            get: function get() {
                return this._onMicrotaskEmpty;
            }
        }, {
            key: 'onStable',
            get: function get() {
                return this._onStable;
            }
        }, {
            key: 'onError',
            get: function get() {
                return this._onErrorEvents;
            }
        }, {
            key: 'isStable',
            get: function get() {
                return this._isStable;
            }
        }, {
            key: 'hasPendingMicrotasks',
            get: function get() {
                return this._hasPendingMicrotasks;
            }
        }, {
            key: 'hasPendingMacrotasks',
            get: function get() {
                return this._hasPendingMacrotasks;
            }
        }], [{
            key: 'isInAngularZone',
            value: function isInAngularZone() {
                return Zone.current.get('isAngularZone') === true;
            }
        }, {
            key: 'assertInAngularZone',
            value: function assertInAngularZone() {
                if (!NgZone.isInAngularZone()) {
                    throw new Error('Expected to be in Angular Zone, but it is not!');
                }
            }
        }, {
            key: 'assertNotInAngularZone',
            value: function assertNotInAngularZone() {
                if (NgZone.isInAngularZone()) {
                    throw new Error('Expected to not be in Angular Zone, but it is!');
                }
            }
        }]);

        return NgZone;
    }();

    var AnimationQueue = function () {
        /**
         * @param {?} _zone
         */
        function AnimationQueue(_zone) {
            _classCallCheck(this, AnimationQueue);

            this._zone = _zone;
            this.entries = [];
        }
        /**
         * @param {?} player
         * @return {?}
         */


        _createClass(AnimationQueue, [{
            key: 'enqueue',
            value: function enqueue(player) {
                this.entries.push(player);
            }
        }, {
            key: 'flush',
            value: function flush() {
                var _this9 = this;

                // given that each animation player may set aside
                // microtasks and rely on DOM-based events, this
                // will cause Angular to run change detection after
                // each request. This sidesteps the issue. If a user
                // hooks into an animation via (@anim.start) or (@anim.done)
                // then those methods will automatically trigger change
                // detection by wrapping themselves inside of a zone
                if (this.entries.length) {
                    this._zone.runOutsideAngular(function () {
                        // this code is wrapped into a single promise such that the
                        // onStart and onDone player callbacks are triggered outside
                        // of the digest cycle of animations
                        Promise.resolve(null).then(function () {
                            return _this9._triggerAnimations();
                        });
                    });
                }
            }
        }, {
            key: '_triggerAnimations',
            value: function _triggerAnimations() {
                NgZone.assertNotInAngularZone();
                while (this.entries.length) {
                    var /** @type {?} */player = this.entries.shift();
                    // in the event that an animation throws an error then we do
                    // not want to re-run animations on any previous animations
                    // if they have already been kicked off beforehand
                    if (!player.hasStarted()) {
                        player.play();
                    }
                }
            }
        }]);

        return AnimationQueue;
    }();

    AnimationQueue.decorators = [{ type: Injectable }];
    /** @nocollapse */
    AnimationQueue.ctorParameters = function () {
        return [{ type: NgZone }];
    };

    var DefaultIterableDifferFactory = function () {
        function DefaultIterableDifferFactory() {
            _classCallCheck(this, DefaultIterableDifferFactory);
        }
        /**
         * @param {?} obj
         * @return {?}
         */


        _createClass(DefaultIterableDifferFactory, [{
            key: 'supports',
            value: function supports(obj) {
                return isListLikeIterable(obj);
            }
        }, {
            key: 'create',
            value: function create(cdRefOrTrackBy, trackByFn) {
                return new DefaultIterableDiffer(trackByFn || cdRefOrTrackBy);
            }
        }]);

        return DefaultIterableDifferFactory;
    }();

    var /** @type {?} */trackByIdentity = function trackByIdentity(index, item) {
        return item;
    };
    /**
     * @deprecated v4.0.0 - Should not be part of public API.
     */

    var DefaultIterableDiffer = function () {
        /**
         * @param {?=} _trackByFn
         */
        function DefaultIterableDiffer(_trackByFn) {
            _classCallCheck(this, DefaultIterableDiffer);

            this._trackByFn = _trackByFn;
            this._length = null;
            this._collection = null;
            this._linkedRecords = null;
            this._unlinkedRecords = null;
            this._previousItHead = null;
            this._itHead = null;
            this._itTail = null;
            this._additionsHead = null;
            this._additionsTail = null;
            this._movesHead = null;
            this._movesTail = null;
            this._removalsHead = null;
            this._removalsTail = null;
            this._identityChangesHead = null;
            this._identityChangesTail = null;
            this._trackByFn = this._trackByFn || trackByIdentity;
        }
        /**
         * @return {?}
         */


        _createClass(DefaultIterableDiffer, [{
            key: 'forEachItem',
            value: function forEachItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._itHead; record !== null; record = record._next) {
                    fn(record);
                }
            }
        }, {
            key: 'forEachOperation',
            value: function forEachOperation(fn) {
                var /** @type {?} */nextIt = this._itHead;
                var /** @type {?} */nextRemove = this._removalsHead;
                var /** @type {?} */addRemoveOffset = 0;
                var /** @type {?} */moveOffsets = null;
                while (nextIt || nextRemove) {
                    // Figure out which is the next record to process
                    // Order: remove, add, move
                    var /** @type {?} */record = !nextRemove || nextIt && nextIt.currentIndex < getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets) ? nextIt : nextRemove;
                    var /** @type {?} */adjPreviousIndex = getPreviousIndex(record, addRemoveOffset, moveOffsets);
                    var /** @type {?} */currentIndex = record.currentIndex;
                    // consume the item, and adjust the addRemoveOffset and update moveDistance if necessary
                    if (record === nextRemove) {
                        addRemoveOffset--;
                        nextRemove = nextRemove._nextRemoved;
                    } else {
                        nextIt = nextIt._next;
                        if (record.previousIndex == null) {
                            addRemoveOffset++;
                        } else {
                            // INVARIANT:  currentIndex < previousIndex
                            if (!moveOffsets) moveOffsets = [];
                            var /** @type {?} */localMovePreviousIndex = adjPreviousIndex - addRemoveOffset;
                            var /** @type {?} */localCurrentIndex = currentIndex - addRemoveOffset;
                            if (localMovePreviousIndex != localCurrentIndex) {
                                for (var /** @type {?} */i = 0; i < localMovePreviousIndex; i++) {
                                    var /** @type {?} */offset = i < moveOffsets.length ? moveOffsets[i] : moveOffsets[i] = 0;
                                    var /** @type {?} */index = offset + i;
                                    if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                                        moveOffsets[i] = offset + 1;
                                    }
                                }
                                var /** @type {?} */previousIndex = record.previousIndex;
                                moveOffsets[previousIndex] = localCurrentIndex - localMovePreviousIndex;
                            }
                        }
                    }
                    if (adjPreviousIndex !== currentIndex) {
                        fn(record, adjPreviousIndex, currentIndex);
                    }
                }
            }
        }, {
            key: 'forEachPreviousItem',
            value: function forEachPreviousItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
                    fn(record);
                }
            }
        }, {
            key: 'forEachAddedItem',
            value: function forEachAddedItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._additionsHead; record !== null; record = record._nextAdded) {
                    fn(record);
                }
            }
        }, {
            key: 'forEachMovedItem',
            value: function forEachMovedItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._movesHead; record !== null; record = record._nextMoved) {
                    fn(record);
                }
            }
        }, {
            key: 'forEachRemovedItem',
            value: function forEachRemovedItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
                    fn(record);
                }
            }
        }, {
            key: 'forEachIdentityChange',
            value: function forEachIdentityChange(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
                    fn(record);
                }
            }
        }, {
            key: 'diff',
            value: function diff(collection) {
                if (isBlank(collection)) collection = [];
                if (!isListLikeIterable(collection)) {
                    throw new Error('Error trying to diff \'' + collection + '\'');
                }
                if (this.check(collection)) {
                    return this;
                } else {
                    return null;
                }
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy() {}
        }, {
            key: 'check',
            value: function check(collection) {
                var _this10 = this;

                this._reset();
                var /** @type {?} */record = this._itHead;
                var /** @type {?} */mayBeDirty = false;
                var /** @type {?} */index = void 0;
                var /** @type {?} */item = void 0;
                var /** @type {?} */itemTrackBy = void 0;
                if (Array.isArray(collection)) {
                    this._length = collection.length;
                    for (var /** @type {?} */_index2 = 0; _index2 < this._length; _index2++) {
                        item = collection[_index2];
                        itemTrackBy = this._trackByFn(_index2, item);
                        if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
                            record = this._mismatch(record, item, itemTrackBy, _index2);
                            mayBeDirty = true;
                        } else {
                            if (mayBeDirty) {
                                // TODO(misko): can we limit this to duplicates only?
                                record = this._verifyReinsertion(record, item, itemTrackBy, _index2);
                            }
                            if (!looseIdentical(record.item, item)) this._addIdentityChange(record, item);
                        }
                        record = record._next;
                    }
                } else {
                    index = 0;
                    iterateListLike(collection, function (item) {
                        itemTrackBy = _this10._trackByFn(index, item);
                        if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
                            record = _this10._mismatch(record, item, itemTrackBy, index);
                            mayBeDirty = true;
                        } else {
                            if (mayBeDirty) {
                                // TODO(misko): can we limit this to duplicates only?
                                record = _this10._verifyReinsertion(record, item, itemTrackBy, index);
                            }
                            if (!looseIdentical(record.item, item)) _this10._addIdentityChange(record, item);
                        }
                        record = record._next;
                        index++;
                    });
                    this._length = index;
                }
                this._truncate(record);
                this._collection = collection;
                return this.isDirty;
            }
        }, {
            key: '_reset',
            value: function _reset() {
                if (this.isDirty) {
                    var /** @type {?} */record = void 0;
                    var /** @type {?} */nextRecord = void 0;
                    for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
                        record._nextPrevious = record._next;
                    }
                    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
                        record.previousIndex = record.currentIndex;
                    }
                    this._additionsHead = this._additionsTail = null;
                    for (record = this._movesHead; record !== null; record = nextRecord) {
                        record.previousIndex = record.currentIndex;
                        nextRecord = record._nextMoved;
                    }
                    this._movesHead = this._movesTail = null;
                    this._removalsHead = this._removalsTail = null;
                    this._identityChangesHead = this._identityChangesTail = null;
                }
            }
        }, {
            key: '_mismatch',
            value: function _mismatch(record, item, itemTrackBy, index) {
                // The previous record after which we will append the current one.
                var /** @type {?} */previousRecord = void 0;
                if (record === null) {
                    previousRecord = this._itTail;
                } else {
                    previousRecord = record._prev;
                    // Remove the record from the collection since we know it does not match the item.
                    this._remove(record);
                }
                // Attempt to see if we have seen the item before.
                record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
                if (record !== null) {
                    // We have seen this before, we need to move it forward in the collection.
                    // But first we need to check if identity changed, so we can update in view if necessary
                    if (!looseIdentical(record.item, item)) this._addIdentityChange(record, item);
                    this._moveAfter(record, previousRecord, index);
                } else {
                    // Never seen it, check evicted list.
                    record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
                    if (record !== null) {
                        // It is an item which we have evicted earlier: reinsert it back into the list.
                        // But first we need to check if identity changed, so we can update in view if necessary
                        if (!looseIdentical(record.item, item)) this._addIdentityChange(record, item);
                        this._reinsertAfter(record, previousRecord, index);
                    } else {
                        // It is a new item: add it.
                        record = this._addAfter(new IterableChangeRecord_(item, itemTrackBy), previousRecord, index);
                    }
                }
                return record;
            }
        }, {
            key: '_verifyReinsertion',
            value: function _verifyReinsertion(record, item, itemTrackBy, index) {
                var /** @type {?} */reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
                if (reinsertRecord !== null) {
                    record = this._reinsertAfter(reinsertRecord, record._prev, index);
                } else if (record.currentIndex != index) {
                    record.currentIndex = index;
                    this._addToMoves(record, index);
                }
                return record;
            }
        }, {
            key: '_truncate',
            value: function _truncate(record) {
                // Anything after that needs to be removed;
                while (record !== null) {
                    var /** @type {?} */nextRecord = record._next;
                    this._addToRemovals(this._unlink(record));
                    record = nextRecord;
                }
                if (this._unlinkedRecords !== null) {
                    this._unlinkedRecords.clear();
                }
                if (this._additionsTail !== null) {
                    this._additionsTail._nextAdded = null;
                }
                if (this._movesTail !== null) {
                    this._movesTail._nextMoved = null;
                }
                if (this._itTail !== null) {
                    this._itTail._next = null;
                }
                if (this._removalsTail !== null) {
                    this._removalsTail._nextRemoved = null;
                }
                if (this._identityChangesTail !== null) {
                    this._identityChangesTail._nextIdentityChange = null;
                }
            }
        }, {
            key: '_reinsertAfter',
            value: function _reinsertAfter(record, prevRecord, index) {
                if (this._unlinkedRecords !== null) {
                    this._unlinkedRecords.remove(record);
                }
                var /** @type {?} */prev = record._prevRemoved;
                var /** @type {?} */next = record._nextRemoved;
                if (prev === null) {
                    this._removalsHead = next;
                } else {
                    prev._nextRemoved = next;
                }
                if (next === null) {
                    this._removalsTail = prev;
                } else {
                    next._prevRemoved = prev;
                }
                this._insertAfter(record, prevRecord, index);
                this._addToMoves(record, index);
                return record;
            }
        }, {
            key: '_moveAfter',
            value: function _moveAfter(record, prevRecord, index) {
                this._unlink(record);
                this._insertAfter(record, prevRecord, index);
                this._addToMoves(record, index);
                return record;
            }
        }, {
            key: '_addAfter',
            value: function _addAfter(record, prevRecord, index) {
                this._insertAfter(record, prevRecord, index);
                if (this._additionsTail === null) {
                    // todo(vicb)
                    // assert(this._additionsHead === null);
                    this._additionsTail = this._additionsHead = record;
                } else {
                    // todo(vicb)
                    // assert(_additionsTail._nextAdded === null);
                    // assert(record._nextAdded === null);
                    this._additionsTail = this._additionsTail._nextAdded = record;
                }
                return record;
            }
        }, {
            key: '_insertAfter',
            value: function _insertAfter(record, prevRecord, index) {
                // todo(vicb)
                // assert(record != prevRecord);
                // assert(record._next === null);
                // assert(record._prev === null);
                var /** @type {?} */next = prevRecord === null ? this._itHead : prevRecord._next;
                // todo(vicb)
                // assert(next != record);
                // assert(prevRecord != record);
                record._next = next;
                record._prev = prevRecord;
                if (next === null) {
                    this._itTail = record;
                } else {
                    next._prev = record;
                }
                if (prevRecord === null) {
                    this._itHead = record;
                } else {
                    prevRecord._next = record;
                }
                if (this._linkedRecords === null) {
                    this._linkedRecords = new _DuplicateMap();
                }
                this._linkedRecords.put(record);
                record.currentIndex = index;
                return record;
            }
        }, {
            key: '_remove',
            value: function _remove(record) {
                return this._addToRemovals(this._unlink(record));
            }
        }, {
            key: '_unlink',
            value: function _unlink(record) {
                if (this._linkedRecords !== null) {
                    this._linkedRecords.remove(record);
                }
                var /** @type {?} */prev = record._prev;
                var /** @type {?} */next = record._next;
                // todo(vicb)
                // assert((record._prev = null) === null);
                // assert((record._next = null) === null);
                if (prev === null) {
                    this._itHead = next;
                } else {
                    prev._next = next;
                }
                if (next === null) {
                    this._itTail = prev;
                } else {
                    next._prev = prev;
                }
                return record;
            }
        }, {
            key: '_addToMoves',
            value: function _addToMoves(record, toIndex) {
                // todo(vicb)
                // assert(record._nextMoved === null);
                if (record.previousIndex === toIndex) {
                    return record;
                }
                if (this._movesTail === null) {
                    // todo(vicb)
                    // assert(_movesHead === null);
                    this._movesTail = this._movesHead = record;
                } else {
                    // todo(vicb)
                    // assert(_movesTail._nextMoved === null);
                    this._movesTail = this._movesTail._nextMoved = record;
                }
                return record;
            }
        }, {
            key: '_addToRemovals',
            value: function _addToRemovals(record) {
                if (this._unlinkedRecords === null) {
                    this._unlinkedRecords = new _DuplicateMap();
                }
                this._unlinkedRecords.put(record);
                record.currentIndex = null;
                record._nextRemoved = null;
                if (this._removalsTail === null) {
                    // todo(vicb)
                    // assert(_removalsHead === null);
                    this._removalsTail = this._removalsHead = record;
                    record._prevRemoved = null;
                } else {
                    // todo(vicb)
                    // assert(_removalsTail._nextRemoved === null);
                    // assert(record._nextRemoved === null);
                    record._prevRemoved = this._removalsTail;
                    this._removalsTail = this._removalsTail._nextRemoved = record;
                }
                return record;
            }
        }, {
            key: '_addIdentityChange',
            value: function _addIdentityChange(record, item) {
                record.item = item;
                if (this._identityChangesTail === null) {
                    this._identityChangesTail = this._identityChangesHead = record;
                } else {
                    this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
                }
                return record;
            }
        }, {
            key: 'toString',
            value: function toString() {
                var /** @type {?} */list = [];
                this.forEachItem(function (record) {
                    return list.push(record);
                });
                var /** @type {?} */previous = [];
                this.forEachPreviousItem(function (record) {
                    return previous.push(record);
                });
                var /** @type {?} */additions = [];
                this.forEachAddedItem(function (record) {
                    return additions.push(record);
                });
                var /** @type {?} */moves = [];
                this.forEachMovedItem(function (record) {
                    return moves.push(record);
                });
                var /** @type {?} */removals = [];
                this.forEachRemovedItem(function (record) {
                    return removals.push(record);
                });
                var /** @type {?} */identityChanges = [];
                this.forEachIdentityChange(function (record) {
                    return identityChanges.push(record);
                });
                return 'collection: ' + list.join(', ') + '\n' + 'previous: ' + previous.join(', ') + '\n' + 'additions: ' + additions.join(', ') + '\n' + 'moves: ' + moves.join(', ') + '\n' + 'removals: ' + removals.join(', ') + '\n' + 'identityChanges: ' + identityChanges.join(', ') + '\n';
            }
        }, {
            key: 'collection',
            get: function get() {
                return this._collection;
            }
        }, {
            key: 'length',
            get: function get() {
                return this._length;
            }
        }, {
            key: 'isDirty',
            get: function get() {
                return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
            }
        }]);

        return DefaultIterableDiffer;
    }();

    var IterableChangeRecord_ = function () {
        /**
         * @param {?} item
         * @param {?} trackById
         */
        function IterableChangeRecord_(item, trackById) {
            _classCallCheck(this, IterableChangeRecord_);

            this.item = item;
            this.trackById = trackById;
            this.currentIndex = null;
            this.previousIndex = null;
            /** @internal */
            this._nextPrevious = null;
            /** @internal */
            this._prev = null;
            /** @internal */
            this._next = null;
            /** @internal */
            this._prevDup = null;
            /** @internal */
            this._nextDup = null;
            /** @internal */
            this._prevRemoved = null;
            /** @internal */
            this._nextRemoved = null;
            /** @internal */
            this._nextAdded = null;
            /** @internal */
            this._nextMoved = null;
            /** @internal */
            this._nextIdentityChange = null;
        }
        /**
         * @return {?}
         */


        _createClass(IterableChangeRecord_, [{
            key: 'toString',
            value: function toString() {
                return this.previousIndex === this.currentIndex ? stringify(this.item) : stringify(this.item) + '[' + stringify(this.previousIndex) + '->' + stringify(this.currentIndex) + ']';
            }
        }]);

        return IterableChangeRecord_;
    }();

    var _DuplicateItemRecordList = function () {
        function _DuplicateItemRecordList() {
            _classCallCheck(this, _DuplicateItemRecordList);

            /** @internal */
            this._head = null;
            /** @internal */
            this._tail = null;
        }
        /**
         * Append the record to the list of duplicates.
         *
         * Note: by design all records in the list of duplicates hold the same value in record.item.
         * @param {?} record
         * @return {?}
         */


        _createClass(_DuplicateItemRecordList, [{
            key: 'add',
            value: function add(record) {
                if (this._head === null) {
                    this._head = this._tail = record;
                    record._nextDup = null;
                    record._prevDup = null;
                } else {
                    // todo(vicb)
                    // assert(record.item ==  _head.item ||
                    //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
                    this._tail._nextDup = record;
                    record._prevDup = this._tail;
                    record._nextDup = null;
                    this._tail = record;
                }
            }
        }, {
            key: 'get',
            value: function get(trackById, afterIndex) {
                var /** @type {?} */record = void 0;
                for (record = this._head; record !== null; record = record._nextDup) {
                    if ((afterIndex === null || afterIndex < record.currentIndex) && looseIdentical(record.trackById, trackById)) {
                        return record;
                    }
                }
                return null;
            }
        }, {
            key: 'remove',
            value: function remove(record) {
                // todo(vicb)
                // assert(() {
                //  // verify that the record being removed is in the list.
                //  for (IterableChangeRecord_ cursor = _head; cursor != null; cursor = cursor._nextDup) {
                //    if (identical(cursor, record)) return true;
                //  }
                //  return false;
                //});
                var /** @type {?} */prev = record._prevDup;
                var /** @type {?} */next = record._nextDup;
                if (prev === null) {
                    this._head = next;
                } else {
                    prev._nextDup = next;
                }
                if (next === null) {
                    this._tail = prev;
                } else {
                    next._prevDup = prev;
                }
                return this._head === null;
            }
        }]);

        return _DuplicateItemRecordList;
    }();

    var _DuplicateMap = function () {
        function _DuplicateMap() {
            _classCallCheck(this, _DuplicateMap);

            this.map = new Map();
        }
        /**
         * @param {?} record
         * @return {?}
         */


        _createClass(_DuplicateMap, [{
            key: 'put',
            value: function put(record) {
                var /** @type {?} */key = record.trackById;
                var /** @type {?} */duplicates = this.map.get(key);
                if (!duplicates) {
                    duplicates = new _DuplicateItemRecordList();
                    this.map.set(key, duplicates);
                }
                duplicates.add(record);
            }
        }, {
            key: 'get',
            value: function get(trackById) {
                var afterIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                var /** @type {?} */key = trackById;
                var /** @type {?} */recordList = this.map.get(key);
                return recordList ? recordList.get(trackById, afterIndex) : null;
            }
        }, {
            key: 'remove',
            value: function remove(record) {
                var /** @type {?} */key = record.trackById;
                var /** @type {?} */recordList = this.map.get(key);
                // Remove the list of duplicates when it gets empty
                if (recordList.remove(record)) {
                    this.map.delete(key);
                }
                return record;
            }
        }, {
            key: 'clear',
            value: function clear() {
                this.map.clear();
            }
        }, {
            key: 'toString',
            value: function toString() {
                return '_DuplicateMap(' + stringify(this.map) + ')';
            }
        }, {
            key: 'isEmpty',
            get: function get() {
                return this.map.size === 0;
            }
        }]);

        return _DuplicateMap;
    }();

    /**
     * @param {?} item
     * @param {?} addRemoveOffset
     * @param {?} moveOffsets
     * @return {?}
     */
    function getPreviousIndex(item, addRemoveOffset, moveOffsets) {
        var /** @type {?} */previousIndex = item.previousIndex;
        if (previousIndex === null) return previousIndex;
        var /** @type {?} */moveOffset = 0;
        if (moveOffsets && previousIndex < moveOffsets.length) {
            moveOffset = moveOffsets[previousIndex];
        }
        return previousIndex + addRemoveOffset + moveOffset;
    }

    var DefaultKeyValueDifferFactory = function () {
        function DefaultKeyValueDifferFactory() {
            _classCallCheck(this, DefaultKeyValueDifferFactory);
        }
        /**
         * @param {?} obj
         * @return {?}
         */


        _createClass(DefaultKeyValueDifferFactory, [{
            key: 'supports',
            value: function supports(obj) {
                return obj instanceof Map || isJsObject(obj);
            }
        }, {
            key: 'create',
            value: function create(cd) {
                return new DefaultKeyValueDiffer();
            }
        }]);

        return DefaultKeyValueDifferFactory;
    }();

    var DefaultKeyValueDiffer = function () {
        function DefaultKeyValueDiffer() {
            _classCallCheck(this, DefaultKeyValueDiffer);

            this._records = new Map();
            this._mapHead = null;
            this._previousMapHead = null;
            this._changesHead = null;
            this._changesTail = null;
            this._additionsHead = null;
            this._additionsTail = null;
            this._removalsHead = null;
            this._removalsTail = null;
        }
        /**
         * @return {?}
         */


        _createClass(DefaultKeyValueDiffer, [{
            key: 'forEachItem',
            value: function forEachItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._mapHead; record !== null; record = record._next) {
                    fn(record);
                }
            }
        }, {
            key: 'forEachPreviousItem',
            value: function forEachPreviousItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
                    fn(record);
                }
            }
        }, {
            key: 'forEachChangedItem',
            value: function forEachChangedItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._changesHead; record !== null; record = record._nextChanged) {
                    fn(record);
                }
            }
        }, {
            key: 'forEachAddedItem',
            value: function forEachAddedItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._additionsHead; record !== null; record = record._nextAdded) {
                    fn(record);
                }
            }
        }, {
            key: 'forEachRemovedItem',
            value: function forEachRemovedItem(fn) {
                var /** @type {?} */record = void 0;
                for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
                    fn(record);
                }
            }
        }, {
            key: 'diff',
            value: function diff(map) {
                if (!map) {
                    map = new Map();
                } else if (!(map instanceof Map || isJsObject(map))) {
                    throw new Error('Error trying to diff \'' + map + '\'');
                }
                return this.check(map) ? this : null;
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy() {}
        }, {
            key: 'check',
            value: function check(map) {
                var _this11 = this;

                this._reset();
                var /** @type {?} */records = this._records;
                var /** @type {?} */oldSeqRecord = this._mapHead;
                var /** @type {?} */lastOldSeqRecord = null;
                var /** @type {?} */lastNewSeqRecord = null;
                var /** @type {?} */seqChanged = false;
                this._forEach(map, function (value, key) {
                    var /** @type {?} */newSeqRecord = void 0;
                    if (oldSeqRecord && key === oldSeqRecord.key) {
                        newSeqRecord = oldSeqRecord;
                        _this11._maybeAddToChanges(newSeqRecord, value);
                    } else {
                        seqChanged = true;
                        if (oldSeqRecord !== null) {
                            _this11._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
                            _this11._addToRemovals(oldSeqRecord);
                        }
                        if (records.has(key)) {
                            newSeqRecord = records.get(key);
                            _this11._maybeAddToChanges(newSeqRecord, value);
                        } else {
                            newSeqRecord = new KeyValueChangeRecord_(key);
                            records.set(key, newSeqRecord);
                            newSeqRecord.currentValue = value;
                            _this11._addToAdditions(newSeqRecord);
                        }
                    }
                    if (seqChanged) {
                        if (_this11._isInRemovals(newSeqRecord)) {
                            _this11._removeFromRemovals(newSeqRecord);
                        }
                        if (lastNewSeqRecord == null) {
                            _this11._mapHead = newSeqRecord;
                        } else {
                            lastNewSeqRecord._next = newSeqRecord;
                        }
                    }
                    lastOldSeqRecord = oldSeqRecord;
                    lastNewSeqRecord = newSeqRecord;
                    oldSeqRecord = oldSeqRecord && oldSeqRecord._next;
                });
                this._truncate(lastOldSeqRecord, oldSeqRecord);
                return this.isDirty;
            }
        }, {
            key: '_reset',
            value: function _reset() {
                if (this.isDirty) {
                    var /** @type {?} */record = void 0;
                    // Record the state of the mapping
                    for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
                        record._nextPrevious = record._next;
                    }
                    for (record = this._changesHead; record !== null; record = record._nextChanged) {
                        record.previousValue = record.currentValue;
                    }
                    for (record = this._additionsHead; record != null; record = record._nextAdded) {
                        record.previousValue = record.currentValue;
                    }
                    this._changesHead = this._changesTail = null;
                    this._additionsHead = this._additionsTail = null;
                    this._removalsHead = this._removalsTail = null;
                }
            }
        }, {
            key: '_truncate',
            value: function _truncate(lastRecord, record) {
                while (record !== null) {
                    if (lastRecord === null) {
                        this._mapHead = null;
                    } else {
                        lastRecord._next = null;
                    }
                    var /** @type {?} */nextRecord = record._next;
                    this._addToRemovals(record);
                    lastRecord = record;
                    record = nextRecord;
                }
                for (var /** @type {?} */rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
                    rec.previousValue = rec.currentValue;
                    rec.currentValue = null;
                    this._records.delete(rec.key);
                }
            }
        }, {
            key: '_maybeAddToChanges',
            value: function _maybeAddToChanges(record, newValue) {
                if (!looseIdentical(newValue, record.currentValue)) {
                    record.previousValue = record.currentValue;
                    record.currentValue = newValue;
                    this._addToChanges(record);
                }
            }
        }, {
            key: '_isInRemovals',
            value: function _isInRemovals(record) {
                return record === this._removalsHead || record._nextRemoved !== null || record._prevRemoved !== null;
            }
        }, {
            key: '_addToRemovals',
            value: function _addToRemovals(record) {
                if (this._removalsHead === null) {
                    this._removalsHead = this._removalsTail = record;
                } else {
                    this._removalsTail._nextRemoved = record;
                    record._prevRemoved = this._removalsTail;
                    this._removalsTail = record;
                }
            }
        }, {
            key: '_removeFromSeq',
            value: function _removeFromSeq(prev, record) {
                var /** @type {?} */next = record._next;
                if (prev === null) {
                    this._mapHead = next;
                } else {
                    prev._next = next;
                }
                record._next = null;
            }
        }, {
            key: '_removeFromRemovals',
            value: function _removeFromRemovals(record) {
                var /** @type {?} */prev = record._prevRemoved;
                var /** @type {?} */next = record._nextRemoved;
                if (prev === null) {
                    this._removalsHead = next;
                } else {
                    prev._nextRemoved = next;
                }
                if (next === null) {
                    this._removalsTail = prev;
                } else {
                    next._prevRemoved = prev;
                }
                record._prevRemoved = record._nextRemoved = null;
            }
        }, {
            key: '_addToAdditions',
            value: function _addToAdditions(record) {
                if (this._additionsHead === null) {
                    this._additionsHead = this._additionsTail = record;
                } else {
                    this._additionsTail._nextAdded = record;
                    this._additionsTail = record;
                }
            }
        }, {
            key: '_addToChanges',
            value: function _addToChanges(record) {
                if (this._changesHead === null) {
                    this._changesHead = this._changesTail = record;
                } else {
                    this._changesTail._nextChanged = record;
                    this._changesTail = record;
                }
            }
        }, {
            key: 'toString',
            value: function toString() {
                var /** @type {?} */items = [];
                var /** @type {?} */previous = [];
                var /** @type {?} */changes = [];
                var /** @type {?} */additions = [];
                var /** @type {?} */removals = [];
                var /** @type {?} */record = void 0;
                for (record = this._mapHead; record !== null; record = record._next) {
                    items.push(stringify(record));
                }
                for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
                    previous.push(stringify(record));
                }
                for (record = this._changesHead; record !== null; record = record._nextChanged) {
                    changes.push(stringify(record));
                }
                for (record = this._additionsHead; record !== null; record = record._nextAdded) {
                    additions.push(stringify(record));
                }
                for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
                    removals.push(stringify(record));
                }
                return 'map: ' + items.join(', ') + '\n' + 'previous: ' + previous.join(', ') + '\n' + 'additions: ' + additions.join(', ') + '\n' + 'changes: ' + changes.join(', ') + '\n' + 'removals: ' + removals.join(', ') + '\n';
            }
        }, {
            key: '_forEach',
            value: function _forEach(obj, fn) {
                if (obj instanceof Map) {
                    obj.forEach(fn);
                } else {
                    Object.keys(obj).forEach(function (k) {
                        return fn(obj[k], k);
                    });
                }
            }
        }, {
            key: 'isDirty',
            get: function get() {
                return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
            }
        }]);

        return DefaultKeyValueDiffer;
    }();

    var KeyValueChangeRecord_ = function () {
        /**
         * @param {?} key
         */
        function KeyValueChangeRecord_(key) {
            _classCallCheck(this, KeyValueChangeRecord_);

            this.key = key;
            this.previousValue = null;
            this.currentValue = null;
            /** @internal */
            this._nextPrevious = null;
            /** @internal */
            this._next = null;
            /** @internal */
            this._nextAdded = null;
            /** @internal */
            this._nextRemoved = null;
            /** @internal */
            this._prevRemoved = null;
            /** @internal */
            this._nextChanged = null;
        }
        /**
         * @return {?}
         */


        _createClass(KeyValueChangeRecord_, [{
            key: 'toString',
            value: function toString() {
                return looseIdentical(this.previousValue, this.currentValue) ? stringify(this.key) : stringify(this.key) + '[' + stringify(this.previousValue) + '->' + stringify(this.currentValue) + ']';
            }
        }]);

        return KeyValueChangeRecord_;
    }();

    var IterableDiffers = function () {
        /**
         * @param {?} factories
         */
        function IterableDiffers(factories) {
            _classCallCheck(this, IterableDiffers);

            this.factories = factories;
        }
        /**
         * @param {?} factories
         * @param {?=} parent
         * @return {?}
         */


        _createClass(IterableDiffers, [{
            key: 'find',
            value: function find(iterable) {
                var /** @type {?} */factory = this.factories.find(function (f) {
                    return f.supports(iterable);
                });
                if (isPresent(factory)) {
                    return factory;
                } else {
                    throw new Error('Cannot find a differ supporting object \'' + iterable + '\' of type \'' + getTypeNameForDebugging(iterable) + '\'');
                }
            }
        }], [{
            key: 'create',
            value: function create(factories, parent) {
                if (isPresent(parent)) {
                    var /** @type {?} */copied = parent.factories.slice();
                    factories = factories.concat(copied);
                    return new IterableDiffers(factories);
                } else {
                    return new IterableDiffers(factories);
                }
            }
        }, {
            key: 'extend',
            value: function extend(factories) {
                return {
                    provide: IterableDiffers,
                    useFactory: function useFactory(parent) {
                        if (!parent) {
                            // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
                            // to
                            // bootstrap(), which would override default pipes instead of extending them.
                            throw new Error('Cannot extend IterableDiffers without a parent injector');
                        }
                        return IterableDiffers.create(factories, parent);
                    },
                    // Dependency technically isn't optional, but we can provide a better error message this way.
                    deps: [[IterableDiffers, new SkipSelf(), new Optional()]]
                };
            }
        }]);

        return IterableDiffers;
    }();

    var KeyValueDiffers = function () {
        /**
         * @param {?} factories
         */
        function KeyValueDiffers(factories) {
            _classCallCheck(this, KeyValueDiffers);

            this.factories = factories;
        }
        /**
         * @param {?} factories
         * @param {?=} parent
         * @return {?}
         */


        _createClass(KeyValueDiffers, [{
            key: 'find',
            value: function find(kv) {
                var /** @type {?} */factory = this.factories.find(function (f) {
                    return f.supports(kv);
                });
                if (factory) {
                    return factory;
                }
                throw new Error('Cannot find a differ supporting object \'' + kv + '\'');
            }
        }], [{
            key: 'create',
            value: function create(factories, parent) {
                if (parent) {
                    var /** @type {?} */copied = parent.factories.slice();
                    factories = factories.concat(copied);
                }
                return new KeyValueDiffers(factories);
            }
        }, {
            key: 'extend',
            value: function extend(factories) {
                return {
                    provide: KeyValueDiffers,
                    useFactory: function useFactory(parent) {
                        if (!parent) {
                            // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
                            // to bootstrap(), which would override default pipes instead of extending them.
                            throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                        }
                        return KeyValueDiffers.create(factories, parent);
                    },
                    // Dependency technically isn't optional, but we can provide a better error message this way.
                    deps: [[KeyValueDiffers, new SkipSelf(), new Optional()]]
                };
            }
        }]);

        return KeyValueDiffers;
    }();

    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function devModeEqual(a, b) {
        if (isListLikeIterable(a) && isListLikeIterable(b)) {
            return areIterablesEqual(a, b, devModeEqual);
        } else if (!isListLikeIterable(a) && !isPrimitive(a) && !isListLikeIterable(b) && !isPrimitive(b)) {
            return true;
        } else {
            return looseIdentical(a, b);
        }
    }
    /**
     * Indicates that the result of a {\@link Pipe} transformation has changed even though the
     * reference
     * has not changed.
     *
     * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
     *
     * Example:
     *
     * ```
     * if (this._latestValue === this._latestReturnedValue) {
     *    return this._latestReturnedValue;
     *  } else {
     *    this._latestReturnedValue = this._latestValue;
     *    return WrappedValue.wrap(this._latestValue); // this will force update
     *  }
     * ```
     * \@stable
     */

    var WrappedValue = function () {
        /**
         * @param {?} wrapped
         */
        function WrappedValue(wrapped) {
            _classCallCheck(this, WrappedValue);

            this.wrapped = wrapped;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(WrappedValue, null, [{
            key: 'wrap',
            value: function wrap(value) {
                return new WrappedValue(value);
            }
        }]);

        return WrappedValue;
    }();

    var ValueUnwrapper = function () {
        function ValueUnwrapper() {
            _classCallCheck(this, ValueUnwrapper);

            this.hasWrappedValue = false;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(ValueUnwrapper, [{
            key: 'unwrap',
            value: function unwrap(value) {
                if (value instanceof WrappedValue) {
                    this.hasWrappedValue = true;
                    return value.wrapped;
                }
                return value;
            }
        }, {
            key: 'reset',
            value: function reset() {
                this.hasWrappedValue = false;
            }
        }]);

        return ValueUnwrapper;
    }();

    var SimpleChange = function () {
        /**
         * @param {?} previousValue
         * @param {?} currentValue
         * @param {?} firstChange
         */
        function SimpleChange(previousValue, currentValue, firstChange) {
            _classCallCheck(this, SimpleChange);

            this.previousValue = previousValue;
            this.currentValue = currentValue;
            this.firstChange = firstChange;
        }
        /**
         * Check whether the new value is the first value assigned.
         * @return {?}
         */


        _createClass(SimpleChange, [{
            key: 'isFirstChange',
            value: function isFirstChange() {
                return this.firstChange;
            }
        }]);

        return SimpleChange;
    }();

    var ChangeDetectorRef = function () {
        function ChangeDetectorRef() {
            _classCallCheck(this, ChangeDetectorRef);
        }

        _createClass(ChangeDetectorRef, [{
            key: 'markForCheck',
            value: function markForCheck() {}
        }, {
            key: 'detach',
            value: function detach() {}
        }, {
            key: 'detectChanges',
            value: function detectChanges() {}
        }, {
            key: 'checkNoChanges',
            value: function checkNoChanges() {}
        }, {
            key: 'reattach',
            value: function reattach() {}
        }]);

        return ChangeDetectorRef;
    }();

    /**
     * Structural diffing for `Object`s and `Map`s.
     */
    var /** @type {?} */keyValDiff = [new DefaultKeyValueDifferFactory()];
    /**
     * Structural diffing for `Iterable` types such as `Array`s.
     */
    var /** @type {?} */iterableDiff = [new DefaultIterableDifferFactory()];
    var /** @type {?} */defaultIterableDiffers = new IterableDiffers(iterableDiff);
    var /** @type {?} */defaultKeyValueDiffers = new KeyValueDiffers(keyValDiff);

    /**
     * @deprecated Use `RendererTypeV2` (and `RendererV2`) instead.
     */

    var RenderComponentType =
    /**
     * @param {?} id
     * @param {?} templateUrl
     * @param {?} slotCount
     * @param {?} encapsulation
     * @param {?} styles
     * @param {?} animations
     */
    function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles, animations) {
        _classCallCheck(this, RenderComponentType);

        this.id = id;
        this.templateUrl = templateUrl;
        this.slotCount = slotCount;
        this.encapsulation = encapsulation;
        this.styles = styles;
        this.animations = animations;
    };

    var RenderDebugInfo = function () {
        function RenderDebugInfo() {
            _classCallCheck(this, RenderDebugInfo);
        }

        _createClass(RenderDebugInfo, [{
            key: 'injector',
            value: function injector() {}
        }, {
            key: 'component',
            value: function component() {}
        }, {
            key: 'providerTokens',
            value: function providerTokens() {}
        }, {
            key: 'references',
            value: function references() {}
        }, {
            key: 'context',
            value: function context() {}
        }, {
            key: 'source',
            value: function source() {}
        }]);

        return RenderDebugInfo;
    }();

    var RendererV1 = function () {
        function RendererV1() {
            _classCallCheck(this, RendererV1);
        }

        _createClass(RendererV1, [{
            key: 'selectRootElement',
            value: function selectRootElement(selectorOrNode, debugInfo) {}
        }, {
            key: 'createElement',
            value: function createElement(parentElement, name, debugInfo) {}
        }, {
            key: 'createViewRoot',
            value: function createViewRoot(hostElement) {}
        }, {
            key: 'createTemplateAnchor',
            value: function createTemplateAnchor(parentElement, debugInfo) {}
        }, {
            key: 'createText',
            value: function createText(parentElement, value, debugInfo) {}
        }, {
            key: 'projectNodes',
            value: function projectNodes(parentElement, nodes) {}
        }, {
            key: 'attachViewAfter',
            value: function attachViewAfter(node, viewRootNodes) {}
        }, {
            key: 'detachView',
            value: function detachView(viewRootNodes) {}
        }, {
            key: 'destroyView',
            value: function destroyView(hostElement, viewAllNodes) {}
        }, {
            key: 'listen',
            value: function listen(renderElement, name, callback) {}
        }, {
            key: 'listenGlobal',
            value: function listenGlobal(target, name, callback) {}
        }, {
            key: 'setElementProperty',
            value: function setElementProperty(renderElement, propertyName, propertyValue) {}
        }, {
            key: 'setElementAttribute',
            value: function setElementAttribute(renderElement, attributeName, attributeValue) {}
        }, {
            key: 'setBindingDebugInfo',
            value: function setBindingDebugInfo(renderElement, propertyName, propertyValue) {}
        }, {
            key: 'setElementClass',
            value: function setElementClass(renderElement, className, isAdd) {}
        }, {
            key: 'setElementStyle',
            value: function setElementStyle(renderElement, styleName, styleValue) {}
        }, {
            key: 'invokeElementMethod',
            value: function invokeElementMethod(renderElement, methodName, args) {}
        }, {
            key: 'setText',
            value: function setText(renderNode, text) {}
        }, {
            key: 'animate',
            value: function animate(element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {}
        }]);

        return RendererV1;
    }();

    var /** @type {?} */RendererV2Interceptor = new InjectionToken('RendererV2Interceptor');
    /**
     * Injectable service that provides a low-level interface for modifying the UI.
     *
     * Use this service to bypass Angular's templating and make custom UI changes that can't be
     * expressed declaratively. For example if you need to set a property or an attribute whose name is
     * not statically known, use {\@link #setElementProperty} or {\@link #setElementAttribute}
     * respectively.
     *
     * If you are implementing a custom renderer, you must implement this interface.
     *
     * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
     *
     * @deprecated Use `RendererFactoryV2` instead.
     * @abstract
     */

    var RootRenderer = function () {
        function RootRenderer() {
            _classCallCheck(this, RootRenderer);
        }

        _createClass(RootRenderer, [{
            key: 'renderComponent',
            value: function renderComponent(componentType) {}
        }]);

        return RootRenderer;
    }();

    var RendererFactoryV2 = function () {
        function RendererFactoryV2() {
            _classCallCheck(this, RendererFactoryV2);
        }

        _createClass(RendererFactoryV2, [{
            key: 'createRenderer',
            value: function createRenderer(hostElement, type) {}
        }]);

        return RendererFactoryV2;
    }();

    var RendererV2 = function () {
        function RendererV2() {
            _classCallCheck(this, RendererV2);
        }

        _createClass(RendererV2, [{
            key: 'data',
            value: function data() {}
        }, {
            key: 'destroy',
            value: function destroy() {}
        }, {
            key: 'createElement',
            value: function createElement(name, namespace) {}
        }, {
            key: 'createComment',
            value: function createComment(value) {}
        }, {
            key: 'createText',
            value: function createText(value) {}
        }, {
            key: 'appendChild',
            value: function appendChild(parent, newChild) {}
        }, {
            key: 'insertBefore',
            value: function insertBefore(parent, newChild, refChild) {}
        }, {
            key: 'removeChild',
            value: function removeChild(parent, oldChild) {}
        }, {
            key: 'selectRootElement',
            value: function selectRootElement(selectorOrNode) {}
        }, {
            key: 'parentNode',
            value: function parentNode(node) {}
        }, {
            key: 'nextSibling',
            value: function nextSibling(node) {}
        }, {
            key: 'setAttribute',
            value: function setAttribute(el, name, value, namespace) {}
        }, {
            key: 'removeAttribute',
            value: function removeAttribute(el, name, namespace) {}
        }, {
            key: 'addClass',
            value: function addClass(el, name) {}
        }, {
            key: 'removeClass',
            value: function removeClass(el, name) {}
        }, {
            key: 'setStyle',
            value: function setStyle(el, style, value, hasVendorPrefix, hasImportant) {}
        }, {
            key: 'removeStyle',
            value: function removeStyle(el, style, hasVendorPrefix) {}
        }, {
            key: 'setProperty',
            value: function setProperty(el, name, value) {}
        }, {
            key: 'setValue',
            value: function setValue(node, value) {}
        }, {
            key: 'listen',
            value: function listen(target, eventName, callback) {}
        }]);

        return RendererV2;
    }();

    var SecurityContext = {};
    SecurityContext.NONE = 0;
    SecurityContext.HTML = 1;
    SecurityContext.STYLE = 2;
    SecurityContext.SCRIPT = 3;
    SecurityContext.URL = 4;
    SecurityContext.RESOURCE_URL = 5;
    SecurityContext[SecurityContext.NONE] = "NONE";
    SecurityContext[SecurityContext.HTML] = "HTML";
    SecurityContext[SecurityContext.STYLE] = "STYLE";
    SecurityContext[SecurityContext.SCRIPT] = "SCRIPT";
    SecurityContext[SecurityContext.URL] = "URL";
    SecurityContext[SecurityContext.RESOURCE_URL] = "RESOURCE_URL";
    /**
     * Sanitizer is used by the views to sanitize potentially dangerous values.
     *
     * \@stable
     * @abstract
     */

    var Sanitizer = function () {
        function Sanitizer() {
            _classCallCheck(this, Sanitizer);
        }

        _createClass(Sanitizer, [{
            key: 'sanitize',
            value: function sanitize(context, value) {}
        }]);

        return Sanitizer;
    }();

    /**
     * An error thrown if application changes model breaking the top-down data flow.
     *
     * This exception is only thrown in dev mode.
     *
     * <!-- TODO: Add a link once the dev mode option is configurable -->
     *
     * ### Example
     *
     * ```typescript
     * \@Component({
     *   selector: 'parent',
     *   template: '<child [prop]="parentProp"></child>',
     * })
     * class Parent {
     *   parentProp = 'init';
     * }
     *
     * \@Directive({selector: 'child', inputs: ['prop']})
     * class Child {
     *   constructor(public parent: Parent) {}
     *
     *   set prop(v) {
     *     // this updates the parent property, which is disallowed during change detection
     *     // this will result in ExpressionChangedAfterItHasBeenCheckedError
     *     this.parent.parentProp = 'updated';
     *   }
     * }
     * ```
     * @param {?} oldValue
     * @param {?} currValue
     * @param {?} isFirstCheck
     * @return {?}
     */
    function expressionChangedAfterItHasBeenCheckedError(oldValue, currValue, isFirstCheck) {
        var /** @type {?} */msg = 'Expression has changed after it was checked. Previous value: \'' + oldValue + '\'. Current value: \'' + currValue + '\'.';
        if (isFirstCheck) {
            msg += ' It seems like the view has been created after its parent and its children have been dirty checked.' + ' Has it been created in a change detection hook ?';
        }
        var /** @type {?} */error = Error(msg);
        error[ERROR_TYPE] = expressionChangedAfterItHasBeenCheckedError;
        return error;
    }
    /**
     * Thrown when an exception was raised during view creation, change detection or destruction.
     *
     * This error wraps the original exception to attach additional contextual information that can
     * be useful for debugging.
     * @param {?} originalError
     * @param {?} context
     * @return {?}
     */
    function viewWrappedError(originalError, context) {
        var /** @type {?} */error = wrappedError('Error in ' + context.source, originalError);
        error[ERROR_DEBUG_CONTEXT] = context;
        error[ERROR_TYPE] = viewWrappedError;
        return error;
    }
    /**
     * Thrown when a destroyed view is used.
     *
     * This error indicates a bug in the framework.
     *
     * This is an internal Angular error.
     * @param {?} details
     * @return {?}
     */
    function viewDestroyedError(details) {
        return Error('Attempt to use a destroyed view: ' + details);
    }

    var ViewUtils = function () {
        /**
         * @param {?} _renderer
         * @param {?} sanitizer
         * @param {?} animationQueue
         */
        function ViewUtils(_renderer, sanitizer, animationQueue) {
            _classCallCheck(this, ViewUtils);

            this._renderer = _renderer;
            this.animationQueue = animationQueue;
            this.sanitizer = sanitizer;
        }
        /**
         * \@internal
         * @param {?} renderComponentType
         * @return {?}
         */


        _createClass(ViewUtils, [{
            key: 'renderComponent',
            value: function renderComponent(renderComponentType) {
                return this._renderer.renderComponent(renderComponentType);
            }
        }]);

        return ViewUtils;
    }();

    ViewUtils.decorators = [{ type: Injectable }];
    /** @nocollapse */
    ViewUtils.ctorParameters = function () {
        return [{ type: RootRenderer }, { type: Sanitizer }, { type: AnimationQueue }];
    };
    var /** @type {?} */nextRenderComponentTypeId = 0;
    /**
     * @param {?} templateUrl
     * @param {?} slotCount
     * @param {?} encapsulation
     * @param {?} styles
     * @param {?} animations
     * @return {?}
     */
    function createRenderComponentType(templateUrl, slotCount, encapsulation, styles, animations) {
        return new RenderComponentType('' + nextRenderComponentTypeId++, templateUrl, slotCount, encapsulation, styles, animations);
    }
    /**
     * @param {?} e
     * @param {?} array
     * @return {?}
     */
    function addToArray(e, array) {
        array.push(e);
    }
    /**
     * @param {?} valueCount
     * @param {?} constAndInterp
     * @return {?}
     */
    function interpolate(valueCount, constAndInterp) {
        var /** @type {?} */result = '';
        for (var /** @type {?} */i = 0; i < valueCount * 2; i = i + 2) {
            result = result + constAndInterp[i] + _toStringWithNull(constAndInterp[i + 1]);
        }
        return result + constAndInterp[valueCount * 2];
    }
    /**
     * @param {?} valueCount
     * @param {?} c0
     * @param {?} a1
     * @param {?} c1
     * @param {?=} a2
     * @param {?=} c2
     * @param {?=} a3
     * @param {?=} c3
     * @param {?=} a4
     * @param {?=} c4
     * @param {?=} a5
     * @param {?=} c5
     * @param {?=} a6
     * @param {?=} c6
     * @param {?=} a7
     * @param {?=} c7
     * @param {?=} a8
     * @param {?=} c8
     * @param {?=} a9
     * @param {?=} c9
     * @return {?}
     */
    function inlineInterpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
        switch (valueCount) {
            case 1:
                return c0 + _toStringWithNull(a1) + c1;
            case 2:
                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
            case 3:
                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3;
            case 4:
                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4;
            case 5:
                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
            case 6:
                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6;
            case 7:
                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6 + _toStringWithNull(a7) + c7;
            case 8:
                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
            case 9:
                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) + c9;
            default:
                throw new Error('Does not support more than 9 expressions');
        }
    }
    /**
     * @param {?} v
     * @return {?}
     */
    function _toStringWithNull(v) {
        return v != null ? v.toString() : '';
    }
    /**
     * @param {?} view
     * @param {?} oldValue
     * @param {?} newValue
     * @param {?} forceUpdate
     * @return {?}
     */
    function checkBinding(view, oldValue, newValue, forceUpdate) {
        var /** @type {?} */isFirstCheck = view.numberOfChecks === 0;
        if (view.throwOnChange) {
            if (isFirstCheck || !devModeEqual(oldValue, newValue)) {
                throw expressionChangedAfterItHasBeenCheckedError(oldValue, newValue, isFirstCheck);
            }
            return false;
        } else {
            return isFirstCheck || forceUpdate || !looseIdentical(oldValue, newValue);
        }
    }
    /**
     * @param {?} view
     * @param {?} oldValue
     * @param {?} newValue
     * @param {?} forceUpdate
     * @return {?}
     */
    function checkBindingChange(view, oldValue, newValue, forceUpdate) {
        if (checkBinding(view, oldValue, newValue, forceUpdate)) {
            return new SimpleChange(oldValue, newValue, view.numberOfChecks === 0);
        }
    }
    /**
     * @param {?} view
     * @param {?} renderElement
     * @param {?} oldValue
     * @param {?} newValue
     * @param {?} forceUpdate
     * @return {?}
     */
    function checkRenderText(view, renderElement, oldValue, newValue, forceUpdate) {
        if (checkBinding(view, oldValue, newValue, forceUpdate)) {
            view.renderer.setText(renderElement, newValue);
        }
    }
    /**
     * @param {?} view
     * @param {?} renderElement
     * @param {?} propName
     * @param {?} oldValue
     * @param {?} newValue
     * @param {?} forceUpdate
     * @param {?} securityContext
     * @return {?}
     */
    function checkRenderProperty(view, renderElement, propName, oldValue, newValue, forceUpdate, securityContext) {
        if (checkBinding(view, oldValue, newValue, forceUpdate)) {
            var /** @type {?} */renderValue = securityContext ? view.viewUtils.sanitizer.sanitize(securityContext, newValue) : newValue;
            view.renderer.setElementProperty(renderElement, propName, renderValue);
        }
    }
    /**
     * @param {?} view
     * @param {?} renderElement
     * @param {?} attrName
     * @param {?} oldValue
     * @param {?} newValue
     * @param {?} forceUpdate
     * @param {?} securityContext
     * @return {?}
     */
    function checkRenderAttribute(view, renderElement, attrName, oldValue, newValue, forceUpdate, securityContext) {
        if (checkBinding(view, oldValue, newValue, forceUpdate)) {
            var /** @type {?} */renderValue = securityContext ? view.viewUtils.sanitizer.sanitize(securityContext, newValue) : newValue;
            renderValue = renderValue != null ? renderValue.toString() : null;
            view.renderer.setElementAttribute(renderElement, attrName, renderValue);
        }
    }
    /**
     * @param {?} view
     * @param {?} renderElement
     * @param {?} className
     * @param {?} oldValue
     * @param {?} newValue
     * @param {?} forceUpdate
     * @return {?}
     */
    function checkRenderClass(view, renderElement, className, oldValue, newValue, forceUpdate) {
        if (checkBinding(view, oldValue, newValue, forceUpdate)) {
            view.renderer.setElementClass(renderElement, className, newValue);
        }
    }
    /**
     * @param {?} view
     * @param {?} renderElement
     * @param {?} styleName
     * @param {?} unit
     * @param {?} oldValue
     * @param {?} newValue
     * @param {?} forceUpdate
     * @param {?} securityContext
     * @return {?}
     */
    function checkRenderStyle(view, renderElement, styleName, unit, oldValue, newValue, forceUpdate, securityContext) {
        if (checkBinding(view, oldValue, newValue, forceUpdate)) {
            var /** @type {?} */renderValue = securityContext ? view.viewUtils.sanitizer.sanitize(securityContext, newValue) : newValue;
            if (renderValue != null) {
                renderValue = renderValue.toString();
                if (unit != null) {
                    renderValue = renderValue + unit;
                }
            } else {
                renderValue = null;
            }
            view.renderer.setElementStyle(renderElement, styleName, renderValue);
        }
    }
    /**
     * @param {?} input
     * @param {?} value
     * @return {?}
     */
    function castByValue(input, value) {
        return input;
    }
    var /** @type {?} */EMPTY_ARRAY = [];
    var /** @type {?} */EMPTY_MAP = {};
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy1(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0;
        return function (p0) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0)) {
                v0 = p0;
                result = fn(p0);
            }
            return result;
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy2(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0;
        var /** @type {?} */v1 = void 0;
        return function (p0, p1) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0) || !looseIdentical(v1, p1)) {
                v0 = p0;
                v1 = p1;
                result = fn(p0, p1);
            }
            return result;
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy3(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0;
        var /** @type {?} */v1 = void 0;
        var /** @type {?} */v2 = void 0;
        return function (p0, p1, p2) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2)) {
                v0 = p0;
                v1 = p1;
                v2 = p2;
                result = fn(p0, p1, p2);
            }
            return result;
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy4(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0,
            /** @type {?} */v1 = void 0,
            /** @type {?} */v2 = void 0,
            /** @type {?} */v3 = void 0;
        v0 = v1 = v2 = v3;
        return function (p0, p1, p2, p3) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3)) {
                v0 = p0;
                v1 = p1;
                v2 = p2;
                v3 = p3;
                result = fn(p0, p1, p2, p3);
            }
            return result;
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy5(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0,
            /** @type {?} */v1 = void 0,
            /** @type {?} */v2 = void 0,
            /** @type {?} */v3 = void 0,
            /** @type {?} */v4 = void 0;
        v0 = v1 = v2 = v3 = v4;
        return function (p0, p1, p2, p3, p4) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4)) {
                v0 = p0;
                v1 = p1;
                v2 = p2;
                v3 = p3;
                v4 = p4;
                result = fn(p0, p1, p2, p3, p4);
            }
            return result;
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy6(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0,
            /** @type {?} */v1 = void 0,
            /** @type {?} */v2 = void 0,
            /** @type {?} */v3 = void 0,
            /** @type {?} */v4 = void 0,
            /** @type {?} */v5 = void 0;
        v0 = v1 = v2 = v3 = v4 = v5;
        return function (p0, p1, p2, p3, p4, p5) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5)) {
                v0 = p0;
                v1 = p1;
                v2 = p2;
                v3 = p3;
                v4 = p4;
                v5 = p5;
                result = fn(p0, p1, p2, p3, p4, p5);
            }
            return result;
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy7(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0,
            /** @type {?} */v1 = void 0,
            /** @type {?} */v2 = void 0,
            /** @type {?} */v3 = void 0,
            /** @type {?} */v4 = void 0,
            /** @type {?} */v5 = void 0,
            /** @type {?} */v6 = void 0;
        v0 = v1 = v2 = v3 = v4 = v5 = v6;
        return function (p0, p1, p2, p3, p4, p5, p6) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6)) {
                v0 = p0;
                v1 = p1;
                v2 = p2;
                v3 = p3;
                v4 = p4;
                v5 = p5;
                v6 = p6;
                result = fn(p0, p1, p2, p3, p4, p5, p6);
            }
            return result;
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy8(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0,
            /** @type {?} */v1 = void 0,
            /** @type {?} */v2 = void 0,
            /** @type {?} */v3 = void 0,
            /** @type {?} */v4 = void 0,
            /** @type {?} */v5 = void 0,
            /** @type {?} */v6 = void 0,
            /** @type {?} */v7 = void 0;
        v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7;
        return function (p0, p1, p2, p3, p4, p5, p6, p7) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6) || !looseIdentical(v7, p7)) {
                v0 = p0;
                v1 = p1;
                v2 = p2;
                v3 = p3;
                v4 = p4;
                v5 = p5;
                v6 = p6;
                v7 = p7;
                result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
            }
            return result;
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy9(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0,
            /** @type {?} */v1 = void 0,
            /** @type {?} */v2 = void 0,
            /** @type {?} */v3 = void 0,
            /** @type {?} */v4 = void 0,
            /** @type {?} */v5 = void 0,
            /** @type {?} */v6 = void 0,
            /** @type {?} */v7 = void 0,
            /** @type {?} */v8 = void 0;
        v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8;
        return function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8)) {
                v0 = p0;
                v1 = p1;
                v2 = p2;
                v3 = p3;
                v4 = p4;
                v5 = p5;
                v6 = p6;
                v7 = p7;
                v8 = p8;
                result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
            }
            return result;
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function pureProxy10(fn) {
        var /** @type {?} */numberOfChecks = 0;
        var /** @type {?} */result = void 0;
        var /** @type {?} */v0 = void 0,
            /** @type {?} */v1 = void 0,
            /** @type {?} */v2 = void 0,
            /** @type {?} */v3 = void 0,
            /** @type {?} */v4 = void 0,
            /** @type {?} */v5 = void 0,
            /** @type {?} */v6 = void 0,
            /** @type {?} */v7 = void 0,
            /** @type {?} */v8 = void 0,
            /** @type {?} */v9 = void 0;
        v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9;
        return function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
            if (!numberOfChecks++ || !looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8) || !looseIdentical(v9, p9)) {
                v0 = p0;
                v1 = p1;
                v2 = p2;
                v3 = p3;
                v4 = p4;
                v5 = p5;
                v6 = p6;
                v7 = p7;
                v8 = p8;
                v9 = p9;
                result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
            }
            return result;
        };
    }
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} changes
     * @return {?}
     */
    function setBindingDebugInfoForChanges(renderer, el, changes) {
        Object.keys(changes).forEach(function (propName) {
            setBindingDebugInfo(renderer, el, propName, changes[propName].currentValue);
        });
    }
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} propName
     * @param {?} value
     * @return {?}
     */
    function setBindingDebugInfo(renderer, el, propName, value) {
        try {
            renderer.setBindingDebugInfo(el, 'ng-reflect-' + camelCaseToDashCase(propName), value ? value.toString() : null);
        } catch (e) {
            renderer.setBindingDebugInfo(el, 'ng-reflect-' + camelCaseToDashCase(propName), '[ERROR] Exception while trying to serialize the value');
        }
    }
    var /** @type {?} */CAMEL_CASE_REGEXP = /([A-Z])/g;
    /**
     * @param {?} input
     * @return {?}
     */
    function camelCaseToDashCase(input) {
        return input.replace(CAMEL_CASE_REGEXP, function () {
            for (var _len5 = arguments.length, m = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                m[_key5] = arguments[_key5];
            }

            return '-' + m[1].toLowerCase();
        });
    }
    /**
     * @param {?} renderer
     * @param {?} parentElement
     * @param {?} name
     * @param {?} attrs
     * @param {?=} debugInfo
     * @return {?}
     */
    function createRenderElement(renderer, parentElement, name, attrs, debugInfo) {
        var /** @type {?} */el = renderer.createElement(parentElement, name, debugInfo);
        for (var /** @type {?} */i = 0; i < attrs.length; i += 2) {
            renderer.setElementAttribute(el, attrs.get(i), attrs.get(i + 1));
        }
        return el;
    }
    /**
     * @param {?} renderer
     * @param {?} elementName
     * @param {?} attrs
     * @param {?} rootSelectorOrNode
     * @param {?=} debugInfo
     * @return {?}
     */
    function selectOrCreateRenderHostElement(renderer, elementName, attrs, rootSelectorOrNode, debugInfo) {
        var /** @type {?} */hostElement = void 0;
        if (isPresent(rootSelectorOrNode)) {
            hostElement = renderer.selectRootElement(rootSelectorOrNode, debugInfo);
            for (var /** @type {?} */i = 0; i < attrs.length; i += 2) {
                renderer.setElementAttribute(hostElement, attrs.get(i), attrs.get(i + 1));
            }
            renderer.setElementAttribute(hostElement, 'ng-version', VERSION.full);
        } else {
            hostElement = createRenderElement(renderer, null, elementName, attrs, debugInfo);
        }
        return hostElement;
    }
    /**
     * @param {?} view
     * @param {?} element
     * @param {?} eventNamesAndTargets
     * @param {?} listener
     * @return {?}
     */
    function subscribeToRenderElement(view, element, eventNamesAndTargets, listener) {
        var /** @type {?} */disposables = createEmptyInlineArray(eventNamesAndTargets.length / 2);
        for (var /** @type {?} */i = 0; i < eventNamesAndTargets.length; i += 2) {
            var /** @type {?} */eventName = eventNamesAndTargets.get(i);
            var /** @type {?} */eventTarget = eventNamesAndTargets.get(i + 1);
            var /** @type {?} */disposable = void 0;
            if (eventTarget) {
                disposable = view.renderer.listenGlobal(eventTarget, eventName, listener.bind(view, eventTarget + ':' + eventName));
            } else {
                disposable = view.renderer.listen(element, eventName, listener.bind(view, eventName));
            }
            disposables.set(i / 2, disposable);
        }
        return disposeInlineArray.bind(null, disposables);
    }
    /**
     * @param {?} disposables
     * @return {?}
     */
    function disposeInlineArray(disposables) {
        for (var /** @type {?} */i = 0; i < disposables.length; i++) {
            disposables.get(i)();
        }
    }
    /**
     * @return {?}
     */
    function noop() {}
    /**
     * @param {?} length
     * @return {?}
     */
    function createEmptyInlineArray(length) {
        var /** @type {?} */ctor = void 0;
        if (length <= 2) {
            ctor = InlineArray2;
        } else if (length <= 4) {
            ctor = InlineArray4;
        } else if (length <= 8) {
            ctor = InlineArray8;
        } else if (length <= 16) {
            ctor = InlineArray16;
        } else {
            ctor = InlineArrayDynamic;
        }
        return new ctor(length);
    }

    var InlineArray0 = function () {
        function InlineArray0() {
            _classCallCheck(this, InlineArray0);

            this.length = 0;
        }
        /**
         * @param {?} index
         * @return {?}
         */


        _createClass(InlineArray0, [{
            key: 'get',
            value: function get(index) {
                return undefined;
            }
        }, {
            key: 'set',
            value: function set(index, value) {}
        }]);

        return InlineArray0;
    }();

    var InlineArray2 = function () {
        /**
         * @param {?} length
         * @param {?=} _v0
         * @param {?=} _v1
         */
        function InlineArray2(length, _v0, _v1) {
            _classCallCheck(this, InlineArray2);

            this.length = length;
            this._v0 = _v0;
            this._v1 = _v1;
        }
        /**
         * @param {?} index
         * @return {?}
         */


        _createClass(InlineArray2, [{
            key: 'get',
            value: function get(index) {
                switch (index) {
                    case 0:
                        return this._v0;
                    case 1:
                        return this._v1;
                    default:
                        return undefined;
                }
            }
        }, {
            key: 'set',
            value: function set(index, value) {
                switch (index) {
                    case 0:
                        this._v0 = value;
                        break;
                    case 1:
                        this._v1 = value;
                        break;
                }
            }
        }]);

        return InlineArray2;
    }();

    var InlineArray4 = function () {
        /**
         * @param {?} length
         * @param {?=} _v0
         * @param {?=} _v1
         * @param {?=} _v2
         * @param {?=} _v3
         */
        function InlineArray4(length, _v0, _v1, _v2, _v3) {
            _classCallCheck(this, InlineArray4);

            this.length = length;
            this._v0 = _v0;
            this._v1 = _v1;
            this._v2 = _v2;
            this._v3 = _v3;
        }
        /**
         * @param {?} index
         * @return {?}
         */


        _createClass(InlineArray4, [{
            key: 'get',
            value: function get(index) {
                switch (index) {
                    case 0:
                        return this._v0;
                    case 1:
                        return this._v1;
                    case 2:
                        return this._v2;
                    case 3:
                        return this._v3;
                    default:
                        return undefined;
                }
            }
        }, {
            key: 'set',
            value: function set(index, value) {
                switch (index) {
                    case 0:
                        this._v0 = value;
                        break;
                    case 1:
                        this._v1 = value;
                        break;
                    case 2:
                        this._v2 = value;
                        break;
                    case 3:
                        this._v3 = value;
                        break;
                }
            }
        }]);

        return InlineArray4;
    }();

    var InlineArray8 = function () {
        /**
         * @param {?} length
         * @param {?=} _v0
         * @param {?=} _v1
         * @param {?=} _v2
         * @param {?=} _v3
         * @param {?=} _v4
         * @param {?=} _v5
         * @param {?=} _v6
         * @param {?=} _v7
         */
        function InlineArray8(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
            _classCallCheck(this, InlineArray8);

            this.length = length;
            this._v0 = _v0;
            this._v1 = _v1;
            this._v2 = _v2;
            this._v3 = _v3;
            this._v4 = _v4;
            this._v5 = _v5;
            this._v6 = _v6;
            this._v7 = _v7;
        }
        /**
         * @param {?} index
         * @return {?}
         */


        _createClass(InlineArray8, [{
            key: 'get',
            value: function get(index) {
                switch (index) {
                    case 0:
                        return this._v0;
                    case 1:
                        return this._v1;
                    case 2:
                        return this._v2;
                    case 3:
                        return this._v3;
                    case 4:
                        return this._v4;
                    case 5:
                        return this._v5;
                    case 6:
                        return this._v6;
                    case 7:
                        return this._v7;
                    default:
                        return undefined;
                }
            }
        }, {
            key: 'set',
            value: function set(index, value) {
                switch (index) {
                    case 0:
                        this._v0 = value;
                        break;
                    case 1:
                        this._v1 = value;
                        break;
                    case 2:
                        this._v2 = value;
                        break;
                    case 3:
                        this._v3 = value;
                        break;
                    case 4:
                        this._v4 = value;
                        break;
                    case 5:
                        this._v5 = value;
                        break;
                    case 6:
                        this._v6 = value;
                        break;
                    case 7:
                        this._v7 = value;
                        break;
                }
            }
        }]);

        return InlineArray8;
    }();

    var InlineArray16 = function () {
        /**
         * @param {?} length
         * @param {?=} _v0
         * @param {?=} _v1
         * @param {?=} _v2
         * @param {?=} _v3
         * @param {?=} _v4
         * @param {?=} _v5
         * @param {?=} _v6
         * @param {?=} _v7
         * @param {?=} _v8
         * @param {?=} _v9
         * @param {?=} _v10
         * @param {?=} _v11
         * @param {?=} _v12
         * @param {?=} _v13
         * @param {?=} _v14
         * @param {?=} _v15
         */
        function InlineArray16(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15) {
            _classCallCheck(this, InlineArray16);

            this.length = length;
            this._v0 = _v0;
            this._v1 = _v1;
            this._v2 = _v2;
            this._v3 = _v3;
            this._v4 = _v4;
            this._v5 = _v5;
            this._v6 = _v6;
            this._v7 = _v7;
            this._v8 = _v8;
            this._v9 = _v9;
            this._v10 = _v10;
            this._v11 = _v11;
            this._v12 = _v12;
            this._v13 = _v13;
            this._v14 = _v14;
            this._v15 = _v15;
        }
        /**
         * @param {?} index
         * @return {?}
         */


        _createClass(InlineArray16, [{
            key: 'get',
            value: function get(index) {
                switch (index) {
                    case 0:
                        return this._v0;
                    case 1:
                        return this._v1;
                    case 2:
                        return this._v2;
                    case 3:
                        return this._v3;
                    case 4:
                        return this._v4;
                    case 5:
                        return this._v5;
                    case 6:
                        return this._v6;
                    case 7:
                        return this._v7;
                    case 8:
                        return this._v8;
                    case 9:
                        return this._v9;
                    case 10:
                        return this._v10;
                    case 11:
                        return this._v11;
                    case 12:
                        return this._v12;
                    case 13:
                        return this._v13;
                    case 14:
                        return this._v14;
                    case 15:
                        return this._v15;
                    default:
                        return undefined;
                }
            }
        }, {
            key: 'set',
            value: function set(index, value) {
                switch (index) {
                    case 0:
                        this._v0 = value;
                        break;
                    case 1:
                        this._v1 = value;
                        break;
                    case 2:
                        this._v2 = value;
                        break;
                    case 3:
                        this._v3 = value;
                        break;
                    case 4:
                        this._v4 = value;
                        break;
                    case 5:
                        this._v5 = value;
                        break;
                    case 6:
                        this._v6 = value;
                        break;
                    case 7:
                        this._v7 = value;
                        break;
                    case 8:
                        this._v8 = value;
                        break;
                    case 9:
                        this._v9 = value;
                        break;
                    case 10:
                        this._v10 = value;
                        break;
                    case 11:
                        this._v11 = value;
                        break;
                    case 12:
                        this._v12 = value;
                        break;
                    case 13:
                        this._v13 = value;
                        break;
                    case 14:
                        this._v14 = value;
                        break;
                    case 15:
                        this._v15 = value;
                        break;
                }
            }
        }]);

        return InlineArray16;
    }();

    var InlineArrayDynamic = function () {
        /**
         * @param {?} length
         * @param {...?} values
         */
        function InlineArrayDynamic(length) {
            _classCallCheck(this, InlineArrayDynamic);

            this.length = length;

            for (var _len6 = arguments.length, values = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                values[_key6 - 1] = arguments[_key6];
            }

            this._values = values;
        }
        /**
         * @param {?} index
         * @return {?}
         */


        _createClass(InlineArrayDynamic, [{
            key: 'get',
            value: function get(index) {
                return this._values[index];
            }
        }, {
            key: 'set',
            value: function set(index, value) {
                this._values[index] = value;
            }
        }]);

        return InlineArrayDynamic;
    }();

    var /** @type {?} */EMPTY_INLINE_ARRAY = new InlineArray0();
    /**
     * This is a private API only used by the compiler to read the view class.
     * @param {?} componentFactory
     * @return {?}
     */
    function getComponentFactoryViewClass(componentFactory) {
        return componentFactory._viewClass;
    }

    /**
     * Represents an instance of a Component created via a {\@link ComponentFactory}.
     *
     * `ComponentRef` provides access to the Component Instance as well other objects related to this
     * Component Instance and allows you to destroy the Component Instance via the {\@link #destroy}
     * method.
     * \@stable
     * @abstract
     */

    var ComponentRef = function () {
        function ComponentRef() {
            _classCallCheck(this, ComponentRef);
        }

        _createClass(ComponentRef, [{
            key: 'location',
            value: function location() {}
        }, {
            key: 'injector',
            value: function injector() {}
        }, {
            key: 'instance',
            value: function instance() {}
        }, {
            key: 'hostView',
            value: function hostView() {}
        }, {
            key: 'changeDetectorRef',
            value: function changeDetectorRef() {}
        }, {
            key: 'componentType',
            value: function componentType() {}
        }, {
            key: 'destroy',
            value: function destroy() {}
        }, {
            key: 'onDestroy',
            value: function onDestroy(callback) {}
        }]);

        return ComponentRef;
    }();

    var ComponentRef_ = function (_ComponentRef) {
        _inherits(ComponentRef_, _ComponentRef);

        /**
         * @param {?} _index
         * @param {?} _parentView
         * @param {?} _nativeElement
         * @param {?} _component
         */
        function ComponentRef_(_index, _parentView, _nativeElement, _component) {
            _classCallCheck(this, ComponentRef_);

            var _this12 = _possibleConstructorReturn(this, (ComponentRef_.__proto__ || Object.getPrototypeOf(ComponentRef_)).call(this));

            _this12._index = _index;
            _this12._parentView = _parentView;
            _this12._nativeElement = _nativeElement;
            _this12._component = _component;
            return _this12;
        }
        /**
         * @return {?}
         */


        _createClass(ComponentRef_, [{
            key: 'destroy',
            value: function destroy() {
                this._parentView.detachAndDestroy();
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy(callback) {
                this.hostView.onDestroy(callback);
            }
        }, {
            key: 'location',
            get: function get() {
                return new ElementRef(this._nativeElement);
            }
        }, {
            key: 'injector',
            get: function get() {
                return this._parentView.injector(this._index);
            }
        }, {
            key: 'instance',
            get: function get() {
                return this._component;
            }
        }, {
            key: 'hostView',
            get: function get() {
                return this._parentView.ref;
            }
        }, {
            key: 'changeDetectorRef',
            get: function get() {
                return this._parentView.ref;
            }
        }, {
            key: 'componentType',
            get: function get() {
                return this._component.constructor;
            }
        }]);

        return ComponentRef_;
    }(ComponentRef);

    var ComponentFactory = function () {
        /**
         * @param {?} selector
         * @param {?} _viewClass
         * @param {?} componentType
         */
        function ComponentFactory(selector, _viewClass, componentType) {
            _classCallCheck(this, ComponentFactory);

            this.selector = selector;
            this.componentType = componentType;
            this._viewClass = _viewClass;
        }
        /**
         * Creates a new component.
         * @param {?} injector
         * @param {?=} projectableNodes
         * @param {?=} rootSelectorOrNode
         * @return {?}
         */


        _createClass(ComponentFactory, [{
            key: 'create',
            value: function create(injector) {
                var projectableNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var rootSelectorOrNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                var /** @type {?} */vu = injector.get(ViewUtils);
                if (!projectableNodes) {
                    projectableNodes = [];
                }
                var /** @type {?} */hostView = new this._viewClass(vu, null, null, null);
                return hostView.createHostView(rootSelectorOrNode, injector, projectableNodes);
            }
        }]);

        return ComponentFactory;
    }();

    /**
     * @param {?} component
     * @return {?}
     */
    function noComponentFactoryError(component) {
        var /** @type {?} */error = Error('No component factory found for ' + stringify(component) + '. Did you add it to @NgModule.entryComponents?');
        error[ERROR_COMPONENT] = component;
        return error;
    }
    var /** @type {?} */ERROR_COMPONENT = 'ngComponent';

    var _NullComponentFactoryResolver = function () {
        function _NullComponentFactoryResolver() {
            _classCallCheck(this, _NullComponentFactoryResolver);
        }

        _createClass(_NullComponentFactoryResolver, [{
            key: 'resolveComponentFactory',
            value: function resolveComponentFactory(component) {
                throw noComponentFactoryError(component);
            }
        }]);

        return _NullComponentFactoryResolver;
    }();

    var ComponentFactoryResolver = function () {
        function ComponentFactoryResolver() {
            _classCallCheck(this, ComponentFactoryResolver);
        }

        _createClass(ComponentFactoryResolver, [{
            key: 'resolveComponentFactory',
            value: function resolveComponentFactory(component) {}
        }]);

        return ComponentFactoryResolver;
    }();

    ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();

    var CodegenComponentFactoryResolver = function () {
        /**
         * @param {?} factories
         * @param {?} _parent
         */
        function CodegenComponentFactoryResolver(factories, _parent) {
            _classCallCheck(this, CodegenComponentFactoryResolver);

            this._parent = _parent;
            this._factories = new Map();
            for (var i = 0; i < factories.length; i++) {
                var factory = factories[i];
                this._factories.set(factory.componentType, factory);
            }
        }
        /**
         * @param {?} component
         * @return {?}
         */


        _createClass(CodegenComponentFactoryResolver, [{
            key: 'resolveComponentFactory',
            value: function resolveComponentFactory(component) {
                var /** @type {?} */result = this._factories.get(component);
                if (!result) {
                    result = this._parent.resolveComponentFactory(component);
                }
                return result;
            }
        }]);

        return CodegenComponentFactoryResolver;
    }();

    var /** @type {?} */trace = void 0;
    var /** @type {?} */events = void 0;
    /**
     * @return {?}
     */
    function detectWTF() {
        var /** @type {?} */wtf = global$1[/** TODO #9100 */'wtf'];
        if (wtf) {
            trace = wtf['trace'];
            if (trace) {
                events = trace['events'];
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} signature
     * @param {?=} flags
     * @return {?}
     */
    function createScope(signature) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        return events.createScope(signature, flags);
    }
    /**
     * @param {?} scope
     * @param {?=} returnValue
     * @return {?}
     */
    function leave(scope, returnValue) {
        trace.leaveScope(scope, returnValue);
        return returnValue;
    }
    /**
     * @param {?} rangeType
     * @param {?} action
     * @return {?}
     */
    function startTimeRange(rangeType, action) {
        return trace.beginTimeRange(rangeType, action);
    }
    /**
     * @param {?} range
     * @return {?}
     */
    function endTimeRange(range) {
        trace.endTimeRange(range);
    }

    /**
     * True if WTF is enabled.
     */
    var /** @type {?} */wtfEnabled = detectWTF();
    /**
     * @param {?=} arg0
     * @param {?=} arg1
     * @return {?}
     */
    function noopScope(arg0, arg1) {
        return null;
    }
    /**
     * Create trace scope.
     *
     * Scopes must be strictly nested and are analogous to stack frames, but
     * do not have to follow the stack frames. Instead it is recommended that they follow logical
     * nesting. You may want to use
     * [Event
     * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
     * as they are defined in WTF.
     *
     * Used to mark scope entry. The return value is used to leave the scope.
     *
     *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
     *
     *     someMethod() {
     *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
     *        // DO SOME WORK HERE
     *        return wtfLeave(s, 123); // Return value 123
     *     }
     *
     * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
     * negatively impact the performance of your application. For this reason we recommend that
     * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
     * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
     * exception, will produce incorrect trace, but presence of exception signifies logic error which
     * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
     * an exception is expected during normal execution while profiling.
     *
     * @experimental
     */
    var /** @type {?} */wtfCreateScope = wtfEnabled ? createScope : function (signature, flags) {
        return noopScope;
    };
    /**
     * Used to mark end of Scope.
     *
     * - `scope` to end.
     * - `returnValue` (optional) to be passed to the WTF.
     *
     * Returns the `returnValue for easy chaining.
     * @experimental
     */
    var /** @type {?} */wtfLeave = wtfEnabled ? leave : function (s, r) {
        return r;
    };
    /**
     * Used to mark Async start. Async are similar to scope but they don't have to be strictly nested.
     * The return value is used in the call to [endAsync]. Async ranges only work if WTF has been
     * enabled.
     *
     *     someMethod() {
     *        var s = wtfStartTimeRange('HTTP:GET', 'some.url');
     *        var future = new Future.delay(5).then((_) {
     *          wtfEndTimeRange(s);
     *        });
     *     }
     * @experimental
     */
    var /** @type {?} */wtfStartTimeRange = wtfEnabled ? startTimeRange : function (rangeType, action) {
        return null;
    };
    /**
     * Ends a async time range operation.
     * [range] is the return value from [wtfStartTimeRange] Async ranges only work if WTF has been
     * enabled.
     * @experimental
     */
    var /** @type {?} */wtfEndTimeRange = wtfEnabled ? endTimeRange : function (r) {
        return null;
    };

    /**
     * The Testability service provides testing hooks that can be accessed from
     * the browser and by services such as Protractor. Each bootstrapped Angular
     * application on the page will have an instance of Testability.
     * \@experimental
     */

    var Testability = function () {
        /**
         * @param {?} _ngZone
         */
        function Testability(_ngZone) {
            _classCallCheck(this, Testability);

            this._ngZone = _ngZone;
            /** @internal */
            this._pendingCount = 0;
            /** @internal */
            this._isZoneStable = true;
            /**
             * Whether any work was done since the last 'whenStable' callback. This is
             * useful to detect if this could have potentially destabilized another
             * component while it is stabilizing.
             * @internal
             */
            this._didWork = false;
            /** @internal */
            this._callbacks = [];
            this._watchAngularEvents();
        }
        /**
         * \@internal
         * @return {?}
         */


        _createClass(Testability, [{
            key: '_watchAngularEvents',
            value: function _watchAngularEvents() {
                var _this13 = this;

                this._ngZone.onUnstable.subscribe({
                    next: function next() {
                        _this13._didWork = true;
                        _this13._isZoneStable = false;
                    }
                });
                this._ngZone.runOutsideAngular(function () {
                    _this13._ngZone.onStable.subscribe({
                        next: function next() {
                            NgZone.assertNotInAngularZone();
                            scheduleMicroTask(function () {
                                _this13._isZoneStable = true;
                                _this13._runCallbacksIfReady();
                            });
                        }
                    });
                });
            }
        }, {
            key: 'increasePendingRequestCount',
            value: function increasePendingRequestCount() {
                this._pendingCount += 1;
                this._didWork = true;
                return this._pendingCount;
            }
        }, {
            key: 'decreasePendingRequestCount',
            value: function decreasePendingRequestCount() {
                this._pendingCount -= 1;
                if (this._pendingCount < 0) {
                    throw new Error('pending async requests below zero');
                }
                this._runCallbacksIfReady();
                return this._pendingCount;
            }
        }, {
            key: 'isStable',
            value: function isStable() {
                return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
            }
        }, {
            key: '_runCallbacksIfReady',
            value: function _runCallbacksIfReady() {
                var _this14 = this;

                if (this.isStable()) {
                    // Schedules the call backs in a new frame so that it is always async.
                    scheduleMicroTask(function () {
                        while (_this14._callbacks.length !== 0) {
                            _this14._callbacks.pop()(_this14._didWork);
                        }
                        _this14._didWork = false;
                    });
                } else {
                    // Not Ready
                    this._didWork = true;
                }
            }
        }, {
            key: 'whenStable',
            value: function whenStable(callback) {
                this._callbacks.push(callback);
                this._runCallbacksIfReady();
            }
        }, {
            key: 'getPendingRequestCount',
            value: function getPendingRequestCount() {
                return this._pendingCount;
            }
        }, {
            key: 'findBindings',
            value: function findBindings(using, provider, exactMatch) {
                // TODO(juliemr): implement.
                return [];
            }
        }, {
            key: 'findProviders',
            value: function findProviders(using, provider, exactMatch) {
                // TODO(juliemr): implement.
                return [];
            }
        }]);

        return Testability;
    }();

    Testability.decorators = [{ type: Injectable }];
    /** @nocollapse */
    Testability.ctorParameters = function () {
        return [{ type: NgZone }];
    };
    /**
     * A global registry of {\@link Testability} instances for specific elements.
     * \@experimental
     */

    var TestabilityRegistry = function () {
        function TestabilityRegistry() {
            _classCallCheck(this, TestabilityRegistry);

            /** @internal */
            this._applications = new Map();
            _testabilityGetter.addToWindow(this);
        }
        /**
         * @param {?} token
         * @param {?} testability
         * @return {?}
         */


        _createClass(TestabilityRegistry, [{
            key: 'registerApplication',
            value: function registerApplication(token, testability) {
                this._applications.set(token, testability);
            }
        }, {
            key: 'getTestability',
            value: function getTestability(elem) {
                return this._applications.get(elem);
            }
        }, {
            key: 'getAllTestabilities',
            value: function getAllTestabilities() {
                return Array.from(this._applications.values());
            }
        }, {
            key: 'getAllRootElements',
            value: function getAllRootElements() {
                return Array.from(this._applications.keys());
            }
        }, {
            key: 'findTestabilityInTree',
            value: function findTestabilityInTree(elem) {
                var findInAncestors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
            }
        }]);

        return TestabilityRegistry;
    }();

    TestabilityRegistry.decorators = [{ type: Injectable }];
    /** @nocollapse */
    TestabilityRegistry.ctorParameters = function () {
        return [];
    };

    var _NoopGetTestability = function () {
        function _NoopGetTestability() {
            _classCallCheck(this, _NoopGetTestability);
        }

        _createClass(_NoopGetTestability, [{
            key: 'addToWindow',
            value: function addToWindow(registry) {}
        }, {
            key: 'findTestabilityInTree',
            value: function findTestabilityInTree(registry, elem, findInAncestors) {
                return null;
            }
        }]);

        return _NoopGetTestability;
    }();

    /**
     * Set the {\@link GetTestability} implementation used by the Angular testing framework.
     * \@experimental
     * @param {?} getter
     * @return {?}
     */
    function setTestabilityGetter(getter) {
        _testabilityGetter = getter;
    }
    var /** @type {?} */_testabilityGetter = new _NoopGetTestability();

    var /** @type {?} */_devMode = true;
    var /** @type {?} */_runModeLocked = false;
    var /** @type {?} */_platform = void 0;
    var /** @type {?} */ALLOW_MULTIPLE_PLATFORMS = new InjectionToken('AllowMultipleToken');
    /**
     * Disable Angular's development mode, which turns off assertions and other
     * checks within the framework.
     *
     * One important assertion this disables verifies that a change detection pass
     * does not result in additional changes to any bindings (also known as
     * unidirectional data flow).
     *
     * \@stable
     * @return {?}
     */
    function enableProdMode() {
        if (_runModeLocked) {
            throw new Error('Cannot enable prod mode after platform setup.');
        }
        _devMode = false;
    }
    /**
     * Returns whether Angular is in development mode. After called once,
     * the value is locked and won't change any more.
     *
     * By default, this is true, unless a user calls `enableProdMode` before calling this.
     *
     * \@experimental APIs related to application bootstrap are currently under review.
     * @return {?}
     */
    function isDevMode() {
        _runModeLocked = true;
        return _devMode;
    }
    /**
     * A token for third-party components that can register themselves with NgProbe.
     *
     * \@experimental
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
     * Creates a platform.
     * Platforms have to be eagerly created via this function.
     *
     * \@experimental APIs related to application bootstrap are currently under review.
     * @param {?} injector
     * @return {?}
     */
    function createPlatform(injector) {
        if (_platform && !_platform.destroyed && !_platform.injector.get(ALLOW_MULTIPLE_PLATFORMS, false)) {
            throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
        }
        _platform = injector.get(PlatformRef);
        var /** @type {?} */inits = injector.get(PLATFORM_INITIALIZER, null);
        if (inits) inits.forEach(function (init) {
            return init();
        });
        return _platform;
    }
    /**
     * Creates a factory for a platform
     *
     * \@experimental APIs related to application bootstrap are currently under review.
     * @param {?} parentPlatformFactory
     * @param {?} name
     * @param {?=} providers
     * @return {?}
     */
    function createPlatformFactory(parentPlatformFactory, name) {
        var providers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var /** @type {?} */marker = new InjectionToken('Platform: ' + name);
        return function () {
            var extraProviders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var /** @type {?} */platform = getPlatform();
            if (!platform || platform.injector.get(ALLOW_MULTIPLE_PLATFORMS, false)) {
                if (parentPlatformFactory) {
                    parentPlatformFactory(providers.concat(extraProviders).concat({ provide: marker, useValue: true }));
                } else {
                    createPlatform(ReflectiveInjector.resolveAndCreate(providers.concat(extraProviders).concat({ provide: marker, useValue: true })));
                }
            }
            return assertPlatform(marker);
        };
    }
    /**
     * Checks that there currently is a platform which contains the given token as a provider.
     *
     * \@experimental APIs related to application bootstrap are currently under review.
     * @param {?} requiredToken
     * @return {?}
     */
    function assertPlatform(requiredToken) {
        var /** @type {?} */platform = getPlatform();
        if (!platform) {
            throw new Error('No platform exists!');
        }
        if (!platform.injector.get(requiredToken, null)) {
            throw new Error('A platform with a different configuration has been created. Please destroy it first.');
        }
        return platform;
    }
    /**
     * Destroy the existing platform.
     *
     * \@experimental APIs related to application bootstrap are currently under review.
     * @return {?}
     */
    function destroyPlatform() {
        if (_platform && !_platform.destroyed) {
            _platform.destroy();
        }
    }
    /**
     * Returns the current platform.
     *
     * \@experimental APIs related to application bootstrap are currently under review.
     * @return {?}
     */
    function getPlatform() {
        return _platform && !_platform.destroyed ? _platform : null;
    }
    /**
     * The Angular platform is the entry point for Angular on a web page. Each page
     * has exactly one platform, and services (such as reflection) which are common
     * to every Angular application running on the page are bound in its scope.
     *
     * A page's platform is initialized implicitly when {\@link bootstrap}() is called, or
     * explicitly by calling {\@link createPlatform}().
     *
     * \@stable
     * @abstract
     */

    var PlatformRef = function () {
        function PlatformRef() {
            _classCallCheck(this, PlatformRef);
        }

        _createClass(PlatformRef, [{
            key: 'bootstrapModuleFactory',
            value: function bootstrapModuleFactory(moduleFactory) {}
        }, {
            key: 'bootstrapModule',
            value: function bootstrapModule(moduleType, compilerOptions) {}
        }, {
            key: 'onDestroy',
            value: function onDestroy(callback) {}
        }, {
            key: 'injector',
            value: function injector() {}
        }, {
            key: 'destroy',
            value: function destroy() {}
        }, {
            key: 'destroyed',
            value: function destroyed() {}
        }]);

        return PlatformRef;
    }();

    /**
     * @param {?} errorHandler
     * @param {?} callback
     * @return {?}
     */
    function _callAndReportToErrorHandler(errorHandler, callback) {
        try {
            var /** @type {?} */result = callback();
            if (isPromise(result)) {
                return result.catch(function (e) {
                    errorHandler.handleError(e);
                    // rethrow as the exception handler might not do it
                    throw e;
                });
            }
            return result;
        } catch (e) {
            errorHandler.handleError(e);
            // rethrow as the exception handler might not do it
            throw e;
        }
    }
    /**
     * workaround https://github.com/angular/tsickle/issues/350
     * @suppress {checkTypes}
     */

    var PlatformRef_ = function (_PlatformRef) {
        _inherits(PlatformRef_, _PlatformRef);

        /**
         * @param {?} _injector
         */
        function PlatformRef_(_injector) {
            _classCallCheck(this, PlatformRef_);

            var _this15 = _possibleConstructorReturn(this, (PlatformRef_.__proto__ || Object.getPrototypeOf(PlatformRef_)).call(this));

            _this15._injector = _injector;
            _this15._modules = [];
            _this15._destroyListeners = [];
            _this15._destroyed = false;
            return _this15;
        }
        /**
         * @param {?} callback
         * @return {?}
         */


        _createClass(PlatformRef_, [{
            key: 'onDestroy',
            value: function onDestroy(callback) {
                this._destroyListeners.push(callback);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (this._destroyed) {
                    throw new Error('The platform has already been destroyed!');
                }
                this._modules.slice().forEach(function (module) {
                    return module.destroy();
                });
                this._destroyListeners.forEach(function (listener) {
                    return listener();
                });
                this._destroyed = true;
            }
        }, {
            key: 'bootstrapModuleFactory',
            value: function bootstrapModuleFactory(moduleFactory) {
                return this._bootstrapModuleFactoryWithZone(moduleFactory, null);
            }
        }, {
            key: '_bootstrapModuleFactoryWithZone',
            value: function _bootstrapModuleFactoryWithZone(moduleFactory, ngZone) {
                var _this16 = this;

                // Note: We need to create the NgZone _before_ we instantiate the module,
                // as instantiating the module creates some providers eagerly.
                // So we create a mini parent injector that just contains the new NgZone and
                // pass that as parent to the NgModuleFactory.
                if (!ngZone) ngZone = new NgZone({ enableLongStackTrace: isDevMode() });
                // Attention: Don't use ApplicationRef.run here,
                // as we want to be sure that all possible constructor calls are inside `ngZone.run`!
                return ngZone.run(function () {
                    var /** @type {?} */ngZoneInjector = ReflectiveInjector.resolveAndCreate([{ provide: NgZone, useValue: ngZone }], _this16.injector);
                    var /** @type {?} */moduleRef = moduleFactory.create(ngZoneInjector);
                    var /** @type {?} */exceptionHandler = moduleRef.injector.get(ErrorHandler, null);
                    if (!exceptionHandler) {
                        throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
                    }
                    moduleRef.onDestroy(function () {
                        return ListWrapper.remove(_this16._modules, moduleRef);
                    });
                    ngZone.onError.subscribe({ next: function next(error) {
                            exceptionHandler.handleError(error);
                        } });
                    return _callAndReportToErrorHandler(exceptionHandler, function () {
                        var /** @type {?} */initStatus = moduleRef.injector.get(ApplicationInitStatus);
                        return initStatus.donePromise.then(function () {
                            _this16._moduleDoBootstrap(moduleRef);
                            return moduleRef;
                        });
                    });
                });
            }
        }, {
            key: 'bootstrapModule',
            value: function bootstrapModule(moduleType) {
                var compilerOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

                return this._bootstrapModuleWithZone(moduleType, compilerOptions, null);
            }
        }, {
            key: '_bootstrapModuleWithZone',
            value: function _bootstrapModuleWithZone(moduleType) {
                var _this17 = this;

                var compilerOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                var ngZone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                var /** @type {?} */compilerFactory = this.injector.get(CompilerFactory);
                var /** @type {?} */compiler = compilerFactory.createCompiler(Array.isArray(compilerOptions) ? compilerOptions : [compilerOptions]);
                return compiler.compileModuleAsync(moduleType).then(function (moduleFactory) {
                    return _this17._bootstrapModuleFactoryWithZone(moduleFactory, ngZone);
                });
            }
        }, {
            key: '_moduleDoBootstrap',
            value: function _moduleDoBootstrap(moduleRef) {
                var /** @type {?} */appRef = moduleRef.injector.get(ApplicationRef);
                if (moduleRef.bootstrapFactories.length > 0) {
                    moduleRef.bootstrapFactories.forEach(function (compFactory) {
                        return appRef.bootstrap(compFactory);
                    });
                } else if (moduleRef.instance.ngDoBootstrap) {
                    moduleRef.instance.ngDoBootstrap(appRef);
                } else {
                    throw new Error('The module ' + stringify(moduleRef.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ' + 'Please define one of these.');
                }
                this._modules.push(moduleRef);
            }
        }, {
            key: 'injector',
            get: function get() {
                return this._injector;
            }
        }, {
            key: 'destroyed',
            get: function get() {
                return this._destroyed;
            }
        }]);

        return PlatformRef_;
    }(PlatformRef);

    PlatformRef_.decorators = [{ type: Injectable }];
    /** @nocollapse */
    PlatformRef_.ctorParameters = function () {
        return [{ type: Injector }];
    };
    /**
     * A reference to an Angular application running on a page.
     *
     * For more about Angular applications, see the documentation for {\@link bootstrap}.
     *
     * \@stable
     * @abstract
     */

    var ApplicationRef = function () {
        function ApplicationRef() {
            _classCallCheck(this, ApplicationRef);
        }

        _createClass(ApplicationRef, [{
            key: 'bootstrap',
            value: function bootstrap(componentFactory) {}
        }, {
            key: 'tick',
            value: function tick() {}
        }, {
            key: 'componentTypes',
            value: function componentTypes() {}
        }, {
            key: 'components',
            value: function components() {}
        }, {
            key: 'attachView',
            value: function attachView(view) {}
        }, {
            key: 'detachView',
            value: function detachView(view) {}
        }, {
            key: 'viewCount',
            value: function viewCount() {}
        }, {
            key: 'isStable',
            value: function isStable() {}
        }]);

        return ApplicationRef;
    }();

    var ApplicationRef_ = function (_ApplicationRef) {
        _inherits(ApplicationRef_, _ApplicationRef);

        /**
         * @param {?} _zone
         * @param {?} _console
         * @param {?} _injector
         * @param {?} _exceptionHandler
         * @param {?} _componentFactoryResolver
         * @param {?} _initStatus
         * @param {?} _testabilityRegistry
         * @param {?} _testability
         */
        function ApplicationRef_(_zone, _console, _injector, _exceptionHandler, _componentFactoryResolver, _initStatus, _testabilityRegistry, _testability) {
            _classCallCheck(this, ApplicationRef_);

            var _this18 = _possibleConstructorReturn(this, (ApplicationRef_.__proto__ || Object.getPrototypeOf(ApplicationRef_)).call(this));

            _this18._zone = _zone;
            _this18._console = _console;
            _this18._injector = _injector;
            _this18._exceptionHandler = _exceptionHandler;
            _this18._componentFactoryResolver = _componentFactoryResolver;
            _this18._initStatus = _initStatus;
            _this18._testabilityRegistry = _testabilityRegistry;
            _this18._testability = _testability;
            _this18._bootstrapListeners = [];
            _this18._rootComponents = [];
            _this18._rootComponentTypes = [];
            _this18._views = [];
            _this18._runningTick = false;
            _this18._enforceNoNewChanges = false;
            _this18._stable = true;
            _this18._enforceNoNewChanges = isDevMode();
            _this18._zone.onMicrotaskEmpty.subscribe({ next: function next() {
                    _this18._zone.run(function () {
                        _this18.tick();
                    });
                } });
            var isCurrentlyStable = new _Observable.Observable(function (observer) {
                _this18._stable = _this18._zone.isStable && !_this18._zone.hasPendingMacrotasks && !_this18._zone.hasPendingMicrotasks;
                _this18._zone.runOutsideAngular(function () {
                    observer.next(_this18._stable);
                    observer.complete();
                });
            });
            var isStable = new _Observable.Observable(function (observer) {
                var stableSub = _this18._zone.onStable.subscribe(function () {
                    NgZone.assertNotInAngularZone();
                    // Check whether there are no pending macro/micro tasks in the next tick
                    // to allow for NgZone to update the state.
                    scheduleMicroTask(function () {
                        if (!_this18._stable && !_this18._zone.hasPendingMacrotasks && !_this18._zone.hasPendingMicrotasks) {
                            _this18._stable = true;
                            observer.next(true);
                        }
                    });
                });
                var unstableSub = _this18._zone.onUnstable.subscribe(function () {
                    NgZone.assertInAngularZone();
                    if (_this18._stable) {
                        _this18._stable = false;
                        _this18._zone.runOutsideAngular(function () {
                            observer.next(false);
                        });
                    }
                });
                return function () {
                    stableSub.unsubscribe();
                    unstableSub.unsubscribe();
                };
            });
            _this18._isStable = (0, _merge.merge)(isCurrentlyStable, _share.share.call(isStable));
            return _this18;
        }
        /**
         * @param {?} viewRef
         * @return {?}
         */


        _createClass(ApplicationRef_, [{
            key: 'attachView',
            value: function attachView(viewRef) {
                var /** @type {?} */view = viewRef;
                this._views.push(view);
                view.attachToAppRef(this);
            }
        }, {
            key: 'detachView',
            value: function detachView(viewRef) {
                var /** @type {?} */view = viewRef;
                ListWrapper.remove(this._views, view);
                view.detachFromAppRef();
            }
        }, {
            key: 'bootstrap',
            value: function bootstrap(componentOrFactory) {
                var _this19 = this;

                if (!this._initStatus.done) {
                    throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
                }
                var /** @type {?} */componentFactory = void 0;
                if (componentOrFactory instanceof ComponentFactory) {
                    componentFactory = componentOrFactory;
                } else {
                    componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentOrFactory);
                }
                this._rootComponentTypes.push(componentFactory.componentType);
                var /** @type {?} */compRef = componentFactory.create(this._injector, [], componentFactory.selector);
                compRef.onDestroy(function () {
                    _this19._unloadComponent(compRef);
                });
                var /** @type {?} */testability = compRef.injector.get(Testability, null);
                if (testability) {
                    compRef.injector.get(TestabilityRegistry).registerApplication(compRef.location.nativeElement, testability);
                }
                this._loadComponent(compRef);
                if (isDevMode()) {
                    this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.');
                }
                return compRef;
            }
        }, {
            key: '_loadComponent',
            value: function _loadComponent(componentRef) {
                this.attachView(componentRef.hostView);
                this.tick();
                this._rootComponents.push(componentRef);
                // Get the listeners lazily to prevent DI cycles.
                var /** @type {?} */listeners = this._injector.get(APP_BOOTSTRAP_LISTENER, []).concat(this._bootstrapListeners);
                listeners.forEach(function (listener) {
                    return listener(componentRef);
                });
            }
        }, {
            key: '_unloadComponent',
            value: function _unloadComponent(componentRef) {
                this.detachView(componentRef.hostView);
                ListWrapper.remove(this._rootComponents, componentRef);
            }
        }, {
            key: 'tick',
            value: function tick() {
                if (this._runningTick) {
                    throw new Error('ApplicationRef.tick is called recursively');
                }
                var /** @type {?} */scope = ApplicationRef_._tickScope();
                try {
                    this._runningTick = true;
                    this._views.forEach(function (view) {
                        return view.detectChanges();
                    });
                    if (this._enforceNoNewChanges) {
                        this._views.forEach(function (view) {
                            return view.checkNoChanges();
                        });
                    }
                } finally {
                    this._runningTick = false;
                    wtfLeave(scope);
                }
            }
        }, {
            key: 'ngOnDestroy',
            value: function ngOnDestroy() {
                // TODO(alxhub): Dispose of the NgZone.
                this._views.slice().forEach(function (view) {
                    return view.destroy();
                });
            }
        }, {
            key: 'viewCount',
            get: function get() {
                return this._views.length;
            }
        }, {
            key: 'componentTypes',
            get: function get() {
                return this._rootComponentTypes;
            }
        }, {
            key: 'components',
            get: function get() {
                return this._rootComponents;
            }
        }, {
            key: 'isStable',
            get: function get() {
                return this._isStable;
            }
        }]);

        return ApplicationRef_;
    }(ApplicationRef);

    /** @internal */
    ApplicationRef_._tickScope = wtfCreateScope('ApplicationRef#tick()');
    ApplicationRef_.decorators = [{ type: Injectable }];
    /** @nocollapse */
    ApplicationRef_.ctorParameters = function () {
        return [{ type: NgZone }, { type: Console }, { type: Injector }, { type: ErrorHandler }, { type: ComponentFactoryResolver }, { type: ApplicationInitStatus }, { type: TestabilityRegistry, decorators: [{ type: Optional }] }, { type: Testability, decorators: [{ type: Optional }] }];
    };

    /**
     * Represents an instance of an NgModule created via a {\@link NgModuleFactory}.
     *
     * `NgModuleRef` provides access to the NgModule Instance as well other objects related to this
     * NgModule Instance.
     *
     * \@stable
     * @abstract
     */

    var NgModuleRef = function () {
        function NgModuleRef() {
            _classCallCheck(this, NgModuleRef);
        }

        _createClass(NgModuleRef, [{
            key: 'injector',
            value: function injector() {}
        }, {
            key: 'componentFactoryResolver',
            value: function componentFactoryResolver() {}
        }, {
            key: 'instance',
            value: function instance() {}
        }, {
            key: 'destroy',
            value: function destroy() {}
        }, {
            key: 'onDestroy',
            value: function onDestroy(callback) {}
        }]);

        return NgModuleRef;
    }();

    var NgModuleFactory = function () {
        /**
         * @param {?} _injectorClass
         * @param {?} _moduleType
         */
        function NgModuleFactory(_injectorClass, _moduleType) {
            _classCallCheck(this, NgModuleFactory);

            this._injectorClass = _injectorClass;
            this._moduleType = _moduleType;
        }
        /**
         * @return {?}
         */


        _createClass(NgModuleFactory, [{
            key: 'create',
            value: function create(parentInjector) {
                if (!parentInjector) {
                    parentInjector = Injector.NULL;
                }
                var /** @type {?} */instance = new this._injectorClass(parentInjector);
                instance.create();
                return instance;
            }
        }, {
            key: 'moduleType',
            get: function get() {
                return this._moduleType;
            }
        }]);

        return NgModuleFactory;
    }();

    var /** @type {?} */_UNDEFINED = new Object();
    /**
     * @abstract
     */

    var NgModuleInjector = function (_CodegenComponentFact) {
        _inherits(NgModuleInjector, _CodegenComponentFact);

        /**
         * @param {?} parent
         * @param {?} factories
         * @param {?} bootstrapFactories
         */
        function NgModuleInjector(parent, factories, bootstrapFactories) {
            _classCallCheck(this, NgModuleInjector);

            var _this20 = _possibleConstructorReturn(this, (NgModuleInjector.__proto__ || Object.getPrototypeOf(NgModuleInjector)).call(this, factories, parent.get(ComponentFactoryResolver, ComponentFactoryResolver.NULL)));

            _this20.parent = parent;
            _this20.bootstrapFactories = bootstrapFactories;
            _this20._destroyListeners = [];
            _this20._destroyed = false;
            return _this20;
        }
        /**
         * @return {?}
         */


        _createClass(NgModuleInjector, [{
            key: 'create',
            value: function create() {
                this.instance = this.createInternal();
            }
        }, {
            key: 'createInternal',
            value: function createInternal() {}
        }, {
            key: 'get',
            value: function get(token) {
                var notFoundValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : THROW_IF_NOT_FOUND;

                if (token === Injector || token === ComponentFactoryResolver) {
                    return this;
                }
                var /** @type {?} */result = this.getInternal(token, _UNDEFINED);
                return result === _UNDEFINED ? this.parent.get(token, notFoundValue) : result;
            }
        }, {
            key: 'getInternal',
            value: function getInternal(token, notFoundValue) {}
        }, {
            key: 'destroy',
            value: function destroy() {
                if (this._destroyed) {
                    throw new Error('The ng module ' + stringify(this.instance.constructor) + ' has already been destroyed.');
                }
                this._destroyed = true;
                this.destroyInternal();
                this._destroyListeners.forEach(function (listener) {
                    return listener();
                });
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy(callback) {
                this._destroyListeners.push(callback);
            }
        }, {
            key: 'destroyInternal',
            value: function destroyInternal() {}
        }, {
            key: 'injector',
            get: function get() {
                return this;
            }
        }, {
            key: 'componentFactoryResolver',
            get: function get() {
                return this;
            }
        }]);

        return NgModuleInjector;
    }(CodegenComponentFactoryResolver);

    var NgModuleFactoryLoader = function () {
        function NgModuleFactoryLoader() {
            _classCallCheck(this, NgModuleFactoryLoader);
        }

        _createClass(NgModuleFactoryLoader, [{
            key: 'load',
            value: function load(path) {}
        }]);

        return NgModuleFactoryLoader;
    }();

    var /** @type {?} */moduleFactories = new Map();
    /**
     * Registers a loaded module. Should only be called from generated NgModuleFactory code.
     * \@experimental
     * @param {?} id
     * @param {?} factory
     * @return {?}
     */
    function registerModuleFactory(id, factory) {
        var /** @type {?} */existing = moduleFactories.get(id);
        if (existing) {
            throw new Error('Duplicate module registered for ' + id + ' - ' + existing.moduleType.name + ' vs ' + factory.moduleType.name);
        }
        moduleFactories.set(id, factory);
    }
    /**
     * Returns the NgModuleFactory with the given id, if it exists and has been loaded.
     * Factories for modules that do not specify an `id` cannot be retrieved. Throws if the module
     * cannot be found.
     * \@experimental
     * @param {?} id
     * @return {?}
     */
    function getModuleFactory(id) {
        var /** @type {?} */factory = moduleFactories.get(id);
        if (!factory) throw new Error('No module with ID ' + id + ' loaded');
        return factory;
    }

    /**
     * An unmodifiable list of items that Angular keeps up to date when the state
     * of the application changes.
     *
     * The type of object that {\@link Query} and {\@link ViewQueryMetadata} provide.
     *
     * Implements an iterable interface, therefore it can be used in both ES6
     * javascript `for (var i of items)` loops as well as in Angular templates with
     * `*ngFor="let i of myList"`.
     *
     * Changes can be observed by subscribing to the changes `Observable`.
     *
     * NOTE: In the future this class will implement an `Observable` interface.
     *
     * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
     * ```typescript
     * \@Component({...})
     * class Container {
     *   \@ViewChildren(Item) items:QueryList<Item>;
     * }
     * ```
     * \@stable
     */

    var QueryList = function () {
        function QueryList() {
            _classCallCheck(this, QueryList);

            this._dirty = true;
            this._results = [];
            this._emitter = new EventEmitter();
        }
        /**
         * @return {?}
         */


        _createClass(QueryList, [{
            key: 'map',
            value: function map(fn) {
                return this._results.map(fn);
            }
        }, {
            key: 'filter',
            value: function filter(fn) {
                return this._results.filter(fn);
            }
        }, {
            key: 'find',
            value: function find(fn) {
                return this._results.find(fn);
            }
        }, {
            key: 'reduce',
            value: function reduce(fn, init) {
                return this._results.reduce(fn, init);
            }
        }, {
            key: 'forEach',
            value: function forEach(fn) {
                this._results.forEach(fn);
            }
        }, {
            key: 'some',
            value: function some(fn) {
                return this._results.some(fn);
            }
        }, {
            key: 'toArray',
            value: function toArray() {
                return this._results.slice();
            }
        }, {
            key: getSymbolIterator(),
            value: function value() {
                return this._results[getSymbolIterator()]();
            }
        }, {
            key: 'toString',
            value: function toString() {
                return this._results.toString();
            }
        }, {
            key: 'reset',
            value: function reset(res) {
                this._results = ListWrapper.flatten(res);
                this._dirty = false;
            }
        }, {
            key: 'notifyOnChanges',
            value: function notifyOnChanges() {
                this._emitter.emit(this);
            }
        }, {
            key: 'setDirty',
            value: function setDirty() {
                this._dirty = true;
            }
        }, {
            key: 'changes',
            get: function get() {
                return this._emitter;
            }
        }, {
            key: 'length',
            get: function get() {
                return this._results.length;
            }
        }, {
            key: 'first',
            get: function get() {
                return this._results[0];
            }
        }, {
            key: 'last',
            get: function get() {
                return this._results[this.length - 1];
            }
        }, {
            key: 'dirty',
            get: function get() {
                return this._dirty;
            }
        }]);

        return QueryList;
    }();

    var /** @type {?} */_SEPARATOR = '#';
    var /** @type {?} */FACTORY_CLASS_SUFFIX = 'NgFactory';
    /**
     * Configuration for SystemJsNgModuleLoader.
     * token.
     *
     * \@experimental
     * @abstract
     */

    var SystemJsNgModuleLoaderConfig = function SystemJsNgModuleLoaderConfig() {
        _classCallCheck(this, SystemJsNgModuleLoaderConfig);
    };

    var /** @type {?} */DEFAULT_CONFIG = {
        factoryPathPrefix: '',
        factoryPathSuffix: '.ngfactory'
    };
    /**
     * NgModuleFactoryLoader that uses SystemJS to load NgModuleFactory
     * \@experimental
     */

    var SystemJsNgModuleLoader = function () {
        /**
         * @param {?} _compiler
         * @param {?=} config
         */
        function SystemJsNgModuleLoader(_compiler, config) {
            _classCallCheck(this, SystemJsNgModuleLoader);

            this._compiler = _compiler;
            this._config = config || DEFAULT_CONFIG;
        }
        /**
         * @param {?} path
         * @return {?}
         */


        _createClass(SystemJsNgModuleLoader, [{
            key: 'load',
            value: function load(path) {
                var /** @type {?} */offlineMode = this._compiler instanceof Compiler;
                return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
            }
        }, {
            key: 'loadAndCompile',
            value: function loadAndCompile(path) {
                var _this21 = this;

                var _path$split = path.split(_SEPARATOR),
                    _path$split2 = _slicedToArray(_path$split, 2),
                    module = _path$split2[0],
                    exportName = _path$split2[1];

                if (exportName === undefined) {
                    exportName = 'default';
                }
                return System.import(module).then(function (module) {
                    return module[exportName];
                }).then(function (type) {
                    return checkNotEmpty(type, module, exportName);
                }).then(function (type) {
                    return _this21._compiler.compileModuleAsync(type);
                });
            }
        }, {
            key: 'loadFactory',
            value: function loadFactory(path) {
                var _path$split3 = path.split(_SEPARATOR),
                    _path$split4 = _slicedToArray(_path$split3, 2),
                    module = _path$split4[0],
                    exportName = _path$split4[1];

                var /** @type {?} */factoryClassSuffix = FACTORY_CLASS_SUFFIX;
                if (exportName === undefined) {
                    exportName = 'default';
                    factoryClassSuffix = '';
                }
                return System.import(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix).then(function (module) {
                    return module[exportName + factoryClassSuffix];
                }).then(function (factory) {
                    return checkNotEmpty(factory, module, exportName);
                });
            }
        }]);

        return SystemJsNgModuleLoader;
    }();

    SystemJsNgModuleLoader.decorators = [{ type: Injectable }];
    /** @nocollapse */
    SystemJsNgModuleLoader.ctorParameters = function () {
        return [{ type: Compiler }, { type: SystemJsNgModuleLoaderConfig, decorators: [{ type: Optional }] }];
    };
    /**
     * @param {?} value
     * @param {?} modulePath
     * @param {?} exportName
     * @return {?}
     */
    function checkNotEmpty(value, modulePath, exportName) {
        if (!value) {
            throw new Error('Cannot find \'' + exportName + '\' in \'' + modulePath + '\'');
        }
        return value;
    }

    /**
     * Represents an Embedded Template that can be used to instantiate Embedded Views.
     *
     * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<ng-template>` element
     * (or directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into
     * the constructor of the directive using the `TemplateRef` Token. Alternatively you can query for
     * the `TemplateRef` from a Component or a Directive via {\@link Query}.
     *
     * To instantiate Embedded Views based on a Template, use
     * {\@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
     * View Container.
     * \@stable
     * @abstract
     */

    var TemplateRef = function () {
        function TemplateRef() {
            _classCallCheck(this, TemplateRef);
        }

        _createClass(TemplateRef, [{
            key: 'elementRef',
            value: function elementRef() {}
        }, {
            key: 'createEmbeddedView',
            value: function createEmbeddedView(context) {}
        }]);

        return TemplateRef;
    }();

    var TemplateRef_ = function (_TemplateRef) {
        _inherits(TemplateRef_, _TemplateRef);

        /**
         * @param {?} _parentView
         * @param {?} _nodeIndex
         * @param {?} _nativeElement
         */
        function TemplateRef_(_parentView, _nodeIndex, _nativeElement) {
            _classCallCheck(this, TemplateRef_);

            var _this22 = _possibleConstructorReturn(this, (TemplateRef_.__proto__ || Object.getPrototypeOf(TemplateRef_)).call(this));

            _this22._parentView = _parentView;
            _this22._nodeIndex = _nodeIndex;
            _this22._nativeElement = _nativeElement;
            return _this22;
        }
        /**
         * @param {?} context
         * @return {?}
         */


        _createClass(TemplateRef_, [{
            key: 'createEmbeddedView',
            value: function createEmbeddedView(context) {
                var /** @type {?} */view = this._parentView.createEmbeddedViewInternal(this._nodeIndex);
                view.create(context || {});
                return view.ref;
            }
        }, {
            key: 'elementRef',
            get: function get() {
                return new ElementRef(this._nativeElement);
            }
        }]);

        return TemplateRef_;
    }(TemplateRef);

    var ViewContainerRef = function () {
        function ViewContainerRef() {
            _classCallCheck(this, ViewContainerRef);
        }

        _createClass(ViewContainerRef, [{
            key: 'element',
            value: function element() {}
        }, {
            key: 'injector',
            value: function injector() {}
        }, {
            key: 'parentInjector',
            value: function parentInjector() {}
        }, {
            key: 'clear',
            value: function clear() {}
        }, {
            key: 'get',
            value: function get(index) {}
        }, {
            key: 'length',
            value: function length() {}
        }, {
            key: 'createEmbeddedView',
            value: function createEmbeddedView(templateRef, context, index) {}
        }, {
            key: 'createComponent',
            value: function createComponent(componentFactory, index, injector, projectableNodes) {}
        }, {
            key: 'insert',
            value: function insert(viewRef, index) {}
        }, {
            key: 'move',
            value: function move(viewRef, currentIndex) {}
        }, {
            key: 'indexOf',
            value: function indexOf(viewRef) {}
        }, {
            key: 'remove',
            value: function remove(index) {}
        }, {
            key: 'detach',
            value: function detach(index) {}
        }]);

        return ViewContainerRef;
    }();

    var ViewContainerRef_ = function () {
        /**
         * @param {?} _element
         */
        function ViewContainerRef_(_element) {
            _classCallCheck(this, ViewContainerRef_);

            this._element = _element;
            /** @internal */
            this._createComponentInContainerScope = wtfCreateScope('ViewContainerRef#createComponent()');
            /** @internal */
            this._insertScope = wtfCreateScope('ViewContainerRef#insert()');
            /** @internal */
            this._removeScope = wtfCreateScope('ViewContainerRef#remove()');
            /** @internal */
            this._detachScope = wtfCreateScope('ViewContainerRef#detach()');
        }
        /**
         * @param {?} index
         * @return {?}
         */


        _createClass(ViewContainerRef_, [{
            key: 'get',
            value: function get(index) {
                return this._element.nestedViews[index].ref;
            }
        }, {
            key: 'createEmbeddedView',
            value: function createEmbeddedView(templateRef) {
                var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

                var /** @type {?} */viewRef = templateRef.createEmbeddedView(context);
                this.insert(viewRef, index);
                return viewRef;
            }
        }, {
            key: 'createComponent',
            value: function createComponent(componentFactory) {
                var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
                var injector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var projectableNodes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

                var /** @type {?} */s = this._createComponentInContainerScope();
                var /** @type {?} */contextInjector = injector || this._element.parentInjector;
                var /** @type {?} */componentRef = componentFactory.create(contextInjector, projectableNodes);
                this.insert(componentRef.hostView, index);
                return wtfLeave(s, componentRef);
            }
        }, {
            key: 'insert',
            value: function insert(viewRef) {
                var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

                var /** @type {?} */s = this._insertScope();
                if (index == -1) index = this.length;
                var /** @type {?} */viewRef_ = viewRef;
                this._element.attachView(viewRef_.internalView, index);
                return wtfLeave(s, viewRef_);
            }
        }, {
            key: 'move',
            value: function move(viewRef, currentIndex) {
                var /** @type {?} */s = this._insertScope();
                if (currentIndex == -1) return;
                var /** @type {?} */viewRef_ = viewRef;
                this._element.moveView(viewRef_.internalView, currentIndex);
                return wtfLeave(s, viewRef_);
            }
        }, {
            key: 'indexOf',
            value: function indexOf(viewRef) {
                return this.length ? this._element.nestedViews.indexOf(viewRef.internalView) : -1;
            }
        }, {
            key: 'remove',
            value: function remove() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

                var /** @type {?} */s = this._removeScope();
                if (index == -1) index = this.length - 1;
                var /** @type {?} */view = this._element.detachView(index);
                view.destroy();
                // view is intentionally not returned to the client.
                wtfLeave(s);
            }
        }, {
            key: 'detach',
            value: function detach() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

                var /** @type {?} */s = this._detachScope();
                if (index == -1) index = this.length - 1;
                var /** @type {?} */view = this._element.detachView(index);
                return wtfLeave(s, view.ref);
            }
        }, {
            key: 'clear',
            value: function clear() {
                for (var /** @type {?} */i = this.length - 1; i >= 0; i--) {
                    this.remove(i);
                }
            }
        }, {
            key: 'length',
            get: function get() {
                var /** @type {?} */views = this._element.nestedViews;
                return views ? views.length : 0;
            }
        }, {
            key: 'element',
            get: function get() {
                return this._element.elementRef;
            }
        }, {
            key: 'injector',
            get: function get() {
                return this._element.injector;
            }
        }, {
            key: 'parentInjector',
            get: function get() {
                return this._element.parentInjector;
            }
        }]);

        return ViewContainerRef_;
    }();

    var ViewRef = function (_ChangeDetectorRef) {
        _inherits(ViewRef, _ChangeDetectorRef);

        function ViewRef() {
            _classCallCheck(this, ViewRef);

            return _possibleConstructorReturn(this, (ViewRef.__proto__ || Object.getPrototypeOf(ViewRef)).apply(this, arguments));
        }

        _createClass(ViewRef, [{
            key: 'destroy',
            value: function destroy() {}
        }, {
            key: 'destroyed',
            value: function destroyed() {}
        }, {
            key: 'onDestroy',
            value: function onDestroy(callback) {}
        }]);

        return ViewRef;
    }(ChangeDetectorRef);

    var EmbeddedViewRef = function (_ViewRef) {
        _inherits(EmbeddedViewRef, _ViewRef);

        function EmbeddedViewRef() {
            _classCallCheck(this, EmbeddedViewRef);

            return _possibleConstructorReturn(this, (EmbeddedViewRef.__proto__ || Object.getPrototypeOf(EmbeddedViewRef)).apply(this, arguments));
        }

        _createClass(EmbeddedViewRef, [{
            key: 'context',
            value: function context() {}
        }, {
            key: 'rootNodes',
            value: function rootNodes() {}
        }]);

        return EmbeddedViewRef;
    }(ViewRef);

    var ViewRef_ = function () {
        /**
         * @param {?} _view
         * @param {?} animationQueue
         */
        function ViewRef_(_view, animationQueue) {
            _classCallCheck(this, ViewRef_);

            this._view = _view;
            this.animationQueue = animationQueue;
            this._view = _view;
            this._originalMode = this._view.cdMode;
        }
        /**
         * @return {?}
         */


        _createClass(ViewRef_, [{
            key: 'markForCheck',
            value: function markForCheck() {
                this._view.markPathToRootAsCheckOnce();
            }
        }, {
            key: 'detach',
            value: function detach() {
                this._view.cdMode = ChangeDetectorStatus.Detached;
            }
        }, {
            key: 'detectChanges',
            value: function detectChanges() {
                this._view.detectChanges(false);
                this.animationQueue.flush();
            }
        }, {
            key: 'checkNoChanges',
            value: function checkNoChanges() {
                this._view.detectChanges(true);
            }
        }, {
            key: 'reattach',
            value: function reattach() {
                this._view.cdMode = this._originalMode;
                this.markForCheck();
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy(callback) {
                if (!this._view.disposables) {
                    this._view.disposables = [];
                }
                this._view.disposables.push(callback);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this._view.detachAndDestroy();
            }
        }, {
            key: 'detachFromAppRef',
            value: function detachFromAppRef() {
                this._view.detach();
            }
        }, {
            key: 'attachToAppRef',
            value: function attachToAppRef(appRef) {
                this._view.attachToAppRef(appRef);
            }
        }, {
            key: 'internalView',
            get: function get() {
                return this._view;
            }
        }, {
            key: 'rootNodes',
            get: function get() {
                return this._view.flatRootNodes;
            }
        }, {
            key: 'context',
            get: function get() {
                return this._view.context;
            }
        }, {
            key: 'destroyed',
            get: function get() {
                return this._view.destroyed;
            }
        }]);

        return ViewRef_;
    }();

    var EventListener =
    /**
     * @param {?} name
     * @param {?} callback
     */
    function EventListener(name, callback) {
        _classCallCheck(this, EventListener);

        this.name = name;
        this.callback = callback;
    };

    var DebugNode = function () {
        /**
         * @param {?} nativeNode
         * @param {?} parent
         * @param {?} _debugInfo
         */
        function DebugNode(nativeNode, parent, _debugInfo) {
            _classCallCheck(this, DebugNode);

            this._debugInfo = _debugInfo;
            this.nativeNode = nativeNode;
            if (parent && parent instanceof DebugElement) {
                parent.addChild(this);
            } else {
                this.parent = null;
            }
            this.listeners = [];
        }
        /**
         * @return {?}
         */


        _createClass(DebugNode, [{
            key: 'injector',
            get: function get() {
                return this._debugInfo ? this._debugInfo.injector : null;
            }
        }, {
            key: 'componentInstance',
            get: function get() {
                return this._debugInfo ? this._debugInfo.component : null;
            }
        }, {
            key: 'context',
            get: function get() {
                return this._debugInfo ? this._debugInfo.context : null;
            }
        }, {
            key: 'references',
            get: function get() {
                return this._debugInfo ? this._debugInfo.references : null;
            }
        }, {
            key: 'providerTokens',
            get: function get() {
                return this._debugInfo ? this._debugInfo.providerTokens : null;
            }
        }, {
            key: 'source',
            get: function get() {
                return this._debugInfo ? this._debugInfo.source : null;
            }
        }]);

        return DebugNode;
    }();

    var DebugElement = function (_DebugNode) {
        _inherits(DebugElement, _DebugNode);

        /**
         * @param {?} nativeNode
         * @param {?} parent
         * @param {?} _debugInfo
         */
        function DebugElement(nativeNode, parent, _debugInfo) {
            _classCallCheck(this, DebugElement);

            var _this25 = _possibleConstructorReturn(this, (DebugElement.__proto__ || Object.getPrototypeOf(DebugElement)).call(this, nativeNode, parent, _debugInfo));

            _this25.properties = {};
            _this25.attributes = {};
            _this25.classes = {};
            _this25.styles = {};
            _this25.childNodes = [];
            _this25.nativeElement = nativeNode;
            return _this25;
        }
        /**
         * @param {?} child
         * @return {?}
         */


        _createClass(DebugElement, [{
            key: 'addChild',
            value: function addChild(child) {
                if (child) {
                    this.childNodes.push(child);
                    child.parent = this;
                }
            }
        }, {
            key: 'removeChild',
            value: function removeChild(child) {
                var /** @type {?} */childIndex = this.childNodes.indexOf(child);
                if (childIndex !== -1) {
                    child.parent = null;
                    this.childNodes.splice(childIndex, 1);
                }
            }
        }, {
            key: 'insertChildrenAfter',
            value: function insertChildrenAfter(child, newChildren) {
                var _this26 = this;

                var /** @type {?} */siblingIndex = this.childNodes.indexOf(child);
                if (siblingIndex !== -1) {
                    var _childNodes;

                    (_childNodes = this.childNodes).splice.apply(_childNodes, [siblingIndex + 1, 0].concat(_toConsumableArray(newChildren)));
                    newChildren.forEach(function (c) {
                        if (c.parent) {
                            c.parent.removeChild(c);
                        }
                        c.parent = _this26;
                    });
                }
            }
        }, {
            key: 'insertBefore',
            value: function insertBefore(refChild, newChild) {
                var /** @type {?} */refIndex = this.childNodes.indexOf(refChild);
                if (refIndex === -1) {
                    this.addChild(newChild);
                } else {
                    if (newChild.parent) {
                        newChild.parent.removeChild(newChild);
                    }
                    newChild.parent = this;
                    this.childNodes.splice(refIndex, 0, newChild);
                }
            }
        }, {
            key: 'query',
            value: function query(predicate) {
                var /** @type {?} */results = this.queryAll(predicate);
                return results[0] || null;
            }
        }, {
            key: 'queryAll',
            value: function queryAll(predicate) {
                var /** @type {?} */matches = [];
                _queryElementChildren(this, predicate, matches);
                return matches;
            }
        }, {
            key: 'queryAllNodes',
            value: function queryAllNodes(predicate) {
                var /** @type {?} */matches = [];
                _queryNodeChildren(this, predicate, matches);
                return matches;
            }
        }, {
            key: 'triggerEventHandler',
            value: function triggerEventHandler(eventName, eventObj) {
                this.listeners.forEach(function (listener) {
                    if (listener.name == eventName) {
                        listener.callback(eventObj);
                    }
                });
            }
        }, {
            key: 'children',
            get: function get() {
                return this.childNodes.filter(function (node) {
                    return node instanceof DebugElement;
                });
            }
        }]);

        return DebugElement;
    }(DebugNode);

    /**
     * \@experimental
     * @param {?} debugEls
     * @return {?}
     */
    function asNativeElements(debugEls) {
        return debugEls.map(function (el) {
            return el.nativeElement;
        });
    }
    /**
     * @param {?} element
     * @param {?} predicate
     * @param {?} matches
     * @return {?}
     */
    function _queryElementChildren(element, predicate, matches) {
        element.childNodes.forEach(function (node) {
            if (node instanceof DebugElement) {
                if (predicate(node)) {
                    matches.push(node);
                }
                _queryElementChildren(node, predicate, matches);
            }
        });
    }
    /**
     * @param {?} parentNode
     * @param {?} predicate
     * @param {?} matches
     * @return {?}
     */
    function _queryNodeChildren(parentNode, predicate, matches) {
        if (parentNode instanceof DebugElement) {
            parentNode.childNodes.forEach(function (node) {
                if (predicate(node)) {
                    matches.push(node);
                }
                if (node instanceof DebugElement) {
                    _queryNodeChildren(node, predicate, matches);
                }
            });
        }
    }
    // Need to keep the nodes in a global Map so that multiple angular apps are supported.
    var /** @type {?} */_nativeNodeToDebugNode = new Map();
    /**
     * \@experimental
     * @param {?} nativeNode
     * @return {?}
     */
    function getDebugNode(nativeNode) {
        return _nativeNodeToDebugNode.get(nativeNode);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    function indexDebugNode(node) {
        _nativeNodeToDebugNode.set(node.nativeNode, node);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    function removeDebugNodeFromIndex(node) {
        _nativeNodeToDebugNode.delete(node.nativeNode);
    }

    /**
     * @return {?}
     */
    function _reflector() {
        return reflector;
    }
    var /** @type {?} */_CORE_PLATFORM_PROVIDERS = [
    // Set a default platform name for platforms that don't set it explicitly.
    { provide: PLATFORM_ID, useValue: 'unknown' }, PlatformRef_, { provide: PlatformRef, useExisting: PlatformRef_ }, { provide: Reflector, useFactory: _reflector, deps: [] }, { provide: ReflectorReader, useExisting: Reflector }, TestabilityRegistry, Console];
    /**
     * This platform has to be included in any other platform
     *
     * @experimental
     */
    var /** @type {?} */platformCore = createPlatformFactory(null, 'core', _CORE_PLATFORM_PROVIDERS);

    /**
     * @experimental i18n support is experimental.
     */
    var /** @type {?} */LOCALE_ID = new InjectionToken('LocaleId');
    /**
     * @experimental i18n support is experimental.
     */
    var /** @type {?} */TRANSLATIONS = new InjectionToken('Translations');
    /**
     * @experimental i18n support is experimental.
     */
    var /** @type {?} */TRANSLATIONS_FORMAT = new InjectionToken('TranslationsFormat');
    var MissingTranslationStrategy = {};
    MissingTranslationStrategy.Error = 0;
    MissingTranslationStrategy.Warning = 1;
    MissingTranslationStrategy.Ignore = 2;
    MissingTranslationStrategy[MissingTranslationStrategy.Error] = "Error";
    MissingTranslationStrategy[MissingTranslationStrategy.Warning] = "Warning";
    MissingTranslationStrategy[MissingTranslationStrategy.Ignore] = "Ignore";

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ArgumentType = {};
    ArgumentType.Inline = 0;
    ArgumentType.Dynamic = 1;
    ArgumentType[ArgumentType.Inline] = "Inline";
    ArgumentType[ArgumentType.Dynamic] = "Dynamic";
    var ViewFlags = {};
    ViewFlags.None = 0;
    ViewFlags.OnPush = 2;
    ViewFlags[ViewFlags.None] = "None";
    ViewFlags[ViewFlags.OnPush] = "OnPush";
    var NodeType = {};
    NodeType.Element = 0;
    NodeType.Text = 1;
    NodeType.Directive = 2;
    NodeType.Provider = 3;
    NodeType.Pipe = 4;
    NodeType.PureExpression = 5;
    NodeType.Query = 6;
    NodeType.NgContent = 7;
    NodeType[NodeType.Element] = "Element";
    NodeType[NodeType.Text] = "Text";
    NodeType[NodeType.Directive] = "Directive";
    NodeType[NodeType.Provider] = "Provider";
    NodeType[NodeType.Pipe] = "Pipe";
    NodeType[NodeType.PureExpression] = "PureExpression";
    NodeType[NodeType.Query] = "Query";
    NodeType[NodeType.NgContent] = "NgContent";
    var NodeFlags = {};
    NodeFlags.None = 0;
    NodeFlags.OnInit = 1;
    NodeFlags.OnDestroy = 2;
    NodeFlags.DoCheck = 4;
    NodeFlags.OnChanges = 8;
    NodeFlags.AfterContentInit = 16;
    NodeFlags.AfterContentChecked = 32;
    NodeFlags.AfterViewInit = 64;
    NodeFlags.AfterViewChecked = 128;
    NodeFlags.HasEmbeddedViews = 256;
    NodeFlags.HasComponent = 512;
    NodeFlags.IsComponent = 1024;
    NodeFlags.HasContentQuery = 2048;
    NodeFlags.HasStaticQuery = 4096;
    NodeFlags.HasDynamicQuery = 8192;
    NodeFlags.HasViewQuery = 16384;
    NodeFlags.LazyProvider = 32768;
    NodeFlags.PrivateProvider = 65536;
    NodeFlags[NodeFlags.None] = "None";
    NodeFlags[NodeFlags.OnInit] = "OnInit";
    NodeFlags[NodeFlags.OnDestroy] = "OnDestroy";
    NodeFlags[NodeFlags.DoCheck] = "DoCheck";
    NodeFlags[NodeFlags.OnChanges] = "OnChanges";
    NodeFlags[NodeFlags.AfterContentInit] = "AfterContentInit";
    NodeFlags[NodeFlags.AfterContentChecked] = "AfterContentChecked";
    NodeFlags[NodeFlags.AfterViewInit] = "AfterViewInit";
    NodeFlags[NodeFlags.AfterViewChecked] = "AfterViewChecked";
    NodeFlags[NodeFlags.HasEmbeddedViews] = "HasEmbeddedViews";
    NodeFlags[NodeFlags.HasComponent] = "HasComponent";
    NodeFlags[NodeFlags.IsComponent] = "IsComponent";
    NodeFlags[NodeFlags.HasContentQuery] = "HasContentQuery";
    NodeFlags[NodeFlags.HasStaticQuery] = "HasStaticQuery";
    NodeFlags[NodeFlags.HasDynamicQuery] = "HasDynamicQuery";
    NodeFlags[NodeFlags.HasViewQuery] = "HasViewQuery";
    NodeFlags[NodeFlags.LazyProvider] = "LazyProvider";
    NodeFlags[NodeFlags.PrivateProvider] = "PrivateProvider";
    var BindingType = {};
    BindingType.ElementAttribute = 0;
    BindingType.ElementClass = 1;
    BindingType.ElementStyle = 2;
    BindingType.ElementProperty = 3;
    BindingType.ComponentHostProperty = 4;
    BindingType.DirectiveProperty = 5;
    BindingType.TextInterpolation = 6;
    BindingType.PureExpressionProperty = 7;
    BindingType[BindingType.ElementAttribute] = "ElementAttribute";
    BindingType[BindingType.ElementClass] = "ElementClass";
    BindingType[BindingType.ElementStyle] = "ElementStyle";
    BindingType[BindingType.ElementProperty] = "ElementProperty";
    BindingType[BindingType.ComponentHostProperty] = "ComponentHostProperty";
    BindingType[BindingType.DirectiveProperty] = "DirectiveProperty";
    BindingType[BindingType.TextInterpolation] = "TextInterpolation";
    BindingType[BindingType.PureExpressionProperty] = "PureExpressionProperty";
    var OutputType = {};
    OutputType.ElementOutput = 0;
    OutputType.DirectiveOutput = 1;
    OutputType[OutputType.ElementOutput] = "ElementOutput";
    OutputType[OutputType.DirectiveOutput] = "DirectiveOutput";
    var QueryValueType = {};
    QueryValueType.ElementRef = 0;
    QueryValueType.RenderElement = 1;
    QueryValueType.TemplateRef = 2;
    QueryValueType.ViewContainerRef = 3;
    QueryValueType.Provider = 4;
    QueryValueType[QueryValueType.ElementRef] = "ElementRef";
    QueryValueType[QueryValueType.RenderElement] = "RenderElement";
    QueryValueType[QueryValueType.TemplateRef] = "TemplateRef";
    QueryValueType[QueryValueType.ViewContainerRef] = "ViewContainerRef";
    QueryValueType[QueryValueType.Provider] = "Provider";
    var ProviderType = {};
    ProviderType.Value = 0;
    ProviderType.Class = 1;
    ProviderType.Factory = 2;
    ProviderType.UseExisting = 3;
    ProviderType[ProviderType.Value] = "Value";
    ProviderType[ProviderType.Class] = "Class";
    ProviderType[ProviderType.Factory] = "Factory";
    ProviderType[ProviderType.UseExisting] = "UseExisting";
    var DepFlags = {};
    DepFlags.None = 0;
    DepFlags.SkipSelf = 1;
    DepFlags.Optional = 2;
    DepFlags.Value = 8;
    DepFlags[DepFlags.None] = "None";
    DepFlags[DepFlags.SkipSelf] = "SkipSelf";
    DepFlags[DepFlags.Optional] = "Optional";
    DepFlags[DepFlags.Value] = "Value";
    var PureExpressionType = {};
    PureExpressionType.Array = 0;
    PureExpressionType.Object = 1;
    PureExpressionType.Pipe = 2;
    PureExpressionType[PureExpressionType.Array] = "Array";
    PureExpressionType[PureExpressionType.Object] = "Object";
    PureExpressionType[PureExpressionType.Pipe] = "Pipe";
    var QueryBindingType = {};
    QueryBindingType.First = 0;
    QueryBindingType.All = 1;
    QueryBindingType[QueryBindingType.First] = "First";
    QueryBindingType[QueryBindingType.All] = "All";
    var ViewState = {};
    ViewState.FirstCheck = 1;
    ViewState.ChecksEnabled = 2;
    ViewState.Errored = 4;
    ViewState.Destroyed = 8;
    ViewState[ViewState.FirstCheck] = "FirstCheck";
    ViewState[ViewState.ChecksEnabled] = "ChecksEnabled";
    ViewState[ViewState.Errored] = "Errored";
    ViewState[ViewState.Destroyed] = "Destroyed";
    /**
     * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
     * @param {?} view
     * @param {?} index
     * @return {?}
     */
    function asTextData(view, index) {
        return view.nodes[index];
    }
    /**
     * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
     * @param {?} view
     * @param {?} index
     * @return {?}
     */
    function asElementData(view, index) {
        return view.nodes[index];
    }
    /**
     * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
     * @param {?} view
     * @param {?} index
     * @return {?}
     */
    function asProviderData(view, index) {
        return view.nodes[index];
    }
    /**
     * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
     * @param {?} view
     * @param {?} index
     * @return {?}
     */
    function asPureExpressionData(view, index) {
        return view.nodes[index];
    }
    /**
     * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
     * @param {?} view
     * @param {?} index
     * @return {?}
     */
    function asQueryList(view, index) {
        return view.nodes[index];
    }
    var CheckType = {};
    CheckType.CheckAndUpdate = 0;
    CheckType.CheckNoChanges = 1;
    CheckType[CheckType.CheckAndUpdate] = "CheckAndUpdate";
    CheckType[CheckType.CheckNoChanges] = "CheckNoChanges";
    /**
     * This object is used to prevent cycles in the source files and to have a place where
     * debug mode can hook it. It is lazily filled when `isDevMode` is known.
     */
    var /** @type {?} */Services = {
        setCurrentNode: undefined,
        createRootView: undefined,
        createEmbeddedView: undefined,
        checkAndUpdateView: undefined,
        checkNoChangesView: undefined,
        destroyView: undefined,
        resolveDep: undefined,
        createDebugContext: undefined,
        handleEvent: undefined,
        updateDirectives: undefined,
        updateRenderer: undefined,
        dirtyParentQueries: undefined
    };

    /**
     * @param {?} context
     * @param {?} oldValue
     * @param {?} currValue
     * @param {?} isFirstCheck
     * @return {?}
     */
    function expressionChangedAfterItHasBeenCheckedError$1(context, oldValue, currValue, isFirstCheck) {
        var /** @type {?} */msg = 'ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: \'' + oldValue + '\'. Current value: \'' + currValue + '\'.';
        if (isFirstCheck) {
            msg += ' It seems like the view has been created after its parent and its children have been dirty checked.' + ' Has it been created in a change detection hook ?';
        }
        return viewDebugError(msg, context);
    }
    /**
     * @param {?} originalError
     * @param {?} context
     * @return {?}
     */
    function viewWrappedDebugError(originalError, context) {
        var /** @type {?} */err = viewDebugError(originalError.message, context);
        err[ERROR_ORIGINAL_ERROR] = originalError;
        return err;
    }
    /**
     * @param {?} msg
     * @param {?} context
     * @return {?}
     */
    function viewDebugError(msg, context) {
        var /** @type {?} */err = new Error(msg);
        err[ERROR_DEBUG_CONTEXT] = context;
        err.stack = context.source;
        return err;
    }
    /**
     * @param {?} err
     * @return {?}
     */
    function isViewDebugError(err) {
        return !!getDebugContext(err);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    function viewDestroyedError$1(action) {
        return new Error('ViewDestroyedError: Attempt to use a destroyed view: ' + action);
    }

    var /** @type {?} */_tokenKeyCache = new Map();
    /**
     * @param {?} token
     * @return {?}
     */
    function tokenKey(token) {
        var /** @type {?} */key = _tokenKeyCache.get(token);
        if (!key) {
            key = stringify(token) + '_' + _tokenKeyCache.size;
            _tokenKeyCache.set(token, key);
        }
        return key;
    }
    var /** @type {?} */unwrapCounter = 0;
    /**
     * @param {?} value
     * @return {?}
     */
    function unwrapValue(value) {
        if (value instanceof WrappedValue) {
            value = value.wrapped;
            unwrapCounter++;
        }
        return value;
    }
    var /** @type {?} */_renderCompCount = 0;
    /**
     * @param {?} values
     * @return {?}
     */
    function createRendererTypeV2(values) {
        var /** @type {?} */isFilled = values && (values.encapsulation !== ViewEncapsulation.None || values.styles.length || Object.keys(values.data).length);
        if (isFilled) {
            var /** @type {?} */id = 'c' + _renderCompCount++;
            return { id: id, styles: values.styles, encapsulation: values.encapsulation, data: values.data };
        } else {
            return null;
        }
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} bindingIdx
     * @param {?} value
     * @return {?}
     */
    function checkBinding$1(view, def, bindingIdx, value) {
        var /** @type {?} */oldValues = view.oldValues;
        if (unwrapCounter > 0 || !!(view.state & ViewState.FirstCheck) || !looseIdentical(oldValues[def.bindingIndex + bindingIdx], value)) {
            unwrapCounter = 0;
            return true;
        }
        return false;
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} bindingIdx
     * @param {?} value
     * @return {?}
     */
    function checkAndUpdateBinding(view, def, bindingIdx, value) {
        if (checkBinding$1(view, def, bindingIdx, value)) {
            view.oldValues[def.bindingIndex + bindingIdx] = value;
            return true;
        }
        return false;
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} bindingIdx
     * @param {?} value
     * @return {?}
     */
    function checkBindingNoChanges(view, def, bindingIdx, value) {
        var /** @type {?} */oldValue = view.oldValues[def.bindingIndex + bindingIdx];
        if (unwrapCounter || view.state & ViewState.FirstCheck || !devModeEqual(oldValue, value)) {
            unwrapCounter = 0;
            throw expressionChangedAfterItHasBeenCheckedError$1(Services.createDebugContext(view, def.index), oldValue, value, (view.state & ViewState.FirstCheck) !== 0);
        }
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function markParentViewsForCheck(view) {
        var /** @type {?} */currView = view;
        while (currView) {
            if (currView.def.flags & ViewFlags.OnPush) {
                currView.state |= ViewState.ChecksEnabled;
            }
            currView = currView.viewContainerParent || currView.parent;
        }
    }
    /**
     * @param {?} view
     * @param {?} nodeIndex
     * @param {?} eventName
     * @param {?} event
     * @return {?}
     */
    function dispatchEvent(view, nodeIndex, eventName, event) {
        markParentViewsForCheck(view);
        return Services.handleEvent(view, nodeIndex, eventName, event);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function declaredViewContainer(view) {
        if (view.parent) {
            var /** @type {?} */parentView = view.parent;
            return asElementData(parentView, view.parentNodeDef.index);
        }
        return undefined;
    }
    /**
     * for component views, this is the host element.
     * for embedded views, this is the index of the parent node
     * that contains the view container.
     * @param {?} view
     * @return {?}
     */
    function viewParentEl(view) {
        var /** @type {?} */parentView = view.parent;
        if (parentView) {
            return view.parentNodeDef.parent;
        } else {
            return null;
        }
    }
    /**
     * @param {?} view
     * @param {?} def
     * @return {?}
     */
    function renderNode(view, def) {
        switch (def.type) {
            case NodeType.Element:
                return asElementData(view, def.index).renderElement;
            case NodeType.Text:
                return asTextData(view, def.index).renderText;
        }
    }
    /**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function elementEventFullName(target, name) {
        return target ? target + ':' + name : name;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function isComponentView(view) {
        return view.component === view.context && !!view.parent;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function isEmbeddedView(view) {
        return view.component !== view.context && !!view.parent;
    }
    /**
     * @param {?} queryId
     * @return {?}
     */
    function filterQueryId(queryId) {
        return 1 << queryId % 32;
    }
    /**
     * @param {?} matchedQueriesDsl
     * @return {?}
     */
    function splitMatchedQueriesDsl(matchedQueriesDsl) {
        var /** @type {?} */matchedQueries = {};
        var /** @type {?} */matchedQueryIds = 0;
        var /** @type {?} */references = {};
        if (matchedQueriesDsl) {
            matchedQueriesDsl.forEach(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    queryId = _ref4[0],
                    valueType = _ref4[1];

                if (typeof queryId === 'number') {
                    matchedQueries[queryId] = valueType;
                    matchedQueryIds |= filterQueryId(queryId);
                } else {
                    references[queryId] = valueType;
                }
            });
        }
        return { matchedQueries: matchedQueries, references: references, matchedQueryIds: matchedQueryIds };
    }
    /**
     * @param {?} view
     * @param {?} renderHost
     * @param {?} def
     * @return {?}
     */
    function getParentRenderElement(view, renderHost, def) {
        var /** @type {?} */renderParent = def.renderParent;
        if (renderParent) {
            if (renderParent.type !== NodeType.Element || (renderParent.flags & NodeFlags.HasComponent) === 0 || renderParent.element.componentRendererType && renderParent.element.componentRendererType.encapsulation === ViewEncapsulation.Native) {
                // only children of non components, or children of components with native encapsulation should
                // be attached.
                return asElementData(view, def.renderParent.index).renderElement;
            }
        } else {
            return renderHost;
        }
    }
    var /** @type {?} */VIEW_DEFINITION_CACHE = new WeakMap();
    /**
     * @param {?} factory
     * @return {?}
     */
    function resolveViewDefinition(factory) {
        var /** @type {?} */value = VIEW_DEFINITION_CACHE.get(factory);
        if (!value) {
            value = factory();
            VIEW_DEFINITION_CACHE.set(factory, value);
        }
        return value;
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function sliceErrorStack(start, end) {
        var /** @type {?} */err = void 0;
        try {
            throw new Error();
        } catch (e) {
            err = e;
        }
        var /** @type {?} */stack = err.stack || '';
        var /** @type {?} */lines = stack.split('\n');
        if (lines[0].startsWith('Error')) {
            // Chrome always adds the message to the stack as well...
            start++;
            end++;
        }
        return lines.slice(start, end).join('\n');
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function rootRenderNodes(view) {
        var /** @type {?} */renderNodes = [];
        visitRootRenderNodes(view, RenderNodeAction.Collect, undefined, undefined, renderNodes);
        return renderNodes;
    }
    var RenderNodeAction = {};
    RenderNodeAction.Collect = 0;
    RenderNodeAction.AppendChild = 1;
    RenderNodeAction.InsertBefore = 2;
    RenderNodeAction.RemoveChild = 3;
    RenderNodeAction[RenderNodeAction.Collect] = "Collect";
    RenderNodeAction[RenderNodeAction.AppendChild] = "AppendChild";
    RenderNodeAction[RenderNodeAction.InsertBefore] = "InsertBefore";
    RenderNodeAction[RenderNodeAction.RemoveChild] = "RemoveChild";
    /**
     * @param {?} view
     * @param {?} action
     * @param {?} parentNode
     * @param {?} nextSibling
     * @param {?} target
     * @return {?}
     */
    function visitRootRenderNodes(view, action, parentNode, nextSibling, target) {
        // We need to re-compute the parent node in case the nodes have been moved around manually
        if (action === RenderNodeAction.RemoveChild) {
            parentNode = view.renderer.parentNode(renderNode(view, view.def.lastRenderRootNode));
        }
        visitSiblingRenderNodes(view, action, 0, view.def.nodes.length - 1, parentNode, nextSibling, target);
    }
    /**
     * @param {?} view
     * @param {?} action
     * @param {?} startIndex
     * @param {?} endIndex
     * @param {?} parentNode
     * @param {?} nextSibling
     * @param {?} target
     * @return {?}
     */
    function visitSiblingRenderNodes(view, action, startIndex, endIndex, parentNode, nextSibling, target) {
        for (var /** @type {?} */i = startIndex; i <= endIndex; i++) {
            var /** @type {?} */nodeDef = view.def.nodes[i];
            if (nodeDef.type === NodeType.Element || nodeDef.type === NodeType.Text || nodeDef.type === NodeType.NgContent) {
                visitRenderNode(view, nodeDef, action, parentNode, nextSibling, target);
            }
            // jump to next sibling
            i += nodeDef.childCount;
        }
    }
    /**
     * @param {?} view
     * @param {?} ngContentIndex
     * @param {?} action
     * @param {?} parentNode
     * @param {?} nextSibling
     * @param {?} target
     * @return {?}
     */
    function visitProjectedRenderNodes(view, ngContentIndex, action, parentNode, nextSibling, target) {
        var /** @type {?} */compView = view;
        while (compView && !isComponentView(compView)) {
            compView = compView.parent;
        }
        var /** @type {?} */hostView = compView.parent;
        var /** @type {?} */hostElDef = viewParentEl(compView);
        var /** @type {?} */startIndex = hostElDef.index + 1;
        var /** @type {?} */endIndex = hostElDef.index + hostElDef.childCount;
        for (var /** @type {?} */i = startIndex; i <= endIndex; i++) {
            var /** @type {?} */nodeDef = hostView.def.nodes[i];
            if (nodeDef.ngContentIndex === ngContentIndex) {
                visitRenderNode(hostView, nodeDef, action, parentNode, nextSibling, target);
            }
            // jump to next sibling
            i += nodeDef.childCount;
        }
        if (!hostView.parent) {
            // a root view
            var /** @type {?} */projectedNodes = view.root.projectableNodes[ngContentIndex];
            if (projectedNodes) {
                for (var /** @type {?} */_i = 0; _i < projectedNodes.length; _i++) {
                    execRenderNodeAction(view, projectedNodes[_i], action, parentNode, nextSibling, target);
                }
            }
        }
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} action
     * @param {?} parentNode
     * @param {?} nextSibling
     * @param {?} target
     * @return {?}
     */
    function visitRenderNode(view, nodeDef, action, parentNode, nextSibling, target) {
        if (nodeDef.type === NodeType.NgContent) {
            visitProjectedRenderNodes(view, nodeDef.ngContent.index, action, parentNode, nextSibling, target);
        } else {
            var /** @type {?} */rn = renderNode(view, nodeDef);
            execRenderNodeAction(view, rn, action, parentNode, nextSibling, target);
            if (nodeDef.flags & NodeFlags.HasEmbeddedViews) {
                var /** @type {?} */embeddedViews = asElementData(view, nodeDef.index).embeddedViews;
                if (embeddedViews) {
                    for (var /** @type {?} */k = 0; k < embeddedViews.length; k++) {
                        visitRootRenderNodes(embeddedViews[k], action, parentNode, nextSibling, target);
                    }
                }
            }
            if (nodeDef.type === NodeType.Element && !nodeDef.element.name) {
                visitSiblingRenderNodes(view, action, nodeDef.index + 1, nodeDef.index + nodeDef.childCount, parentNode, nextSibling, target);
            }
        }
    }
    /**
     * @param {?} view
     * @param {?} renderNode
     * @param {?} action
     * @param {?} parentNode
     * @param {?} nextSibling
     * @param {?} target
     * @return {?}
     */
    function execRenderNodeAction(view, renderNode, action, parentNode, nextSibling, target) {
        var /** @type {?} */renderer = view.renderer;
        switch (action) {
            case RenderNodeAction.AppendChild:
                renderer.appendChild(parentNode, renderNode);
                break;
            case RenderNodeAction.InsertBefore:
                renderer.insertBefore(parentNode, renderNode, nextSibling);
                break;
            case RenderNodeAction.RemoveChild:
                renderer.removeChild(parentNode, renderNode);
                break;
            case RenderNodeAction.Collect:
                target.push(renderNode);
                break;
        }
    }
    var /** @type {?} */NS_PREFIX_RE = /^:([^:]+):(.+)$/;
    /**
     * @param {?} name
     * @return {?}
     */
    function splitNamespace(name) {
        if (name[0] === ':') {
            var /** @type {?} */match = name.match(NS_PREFIX_RE);
            return [match[1], match[2]];
        }
        return ['', name];
    }

    var /** @type {?} */NOOP = function NOOP() {};
    /**
     * @param {?} flags
     * @param {?} matchedQueriesDsl
     * @param {?} ngContentIndex
     * @param {?} childCount
     * @param {?=} handleEvent
     * @param {?=} templateFactory
     * @return {?}
     */
    function anchorDef(flags, matchedQueriesDsl, ngContentIndex, childCount, handleEvent, templateFactory) {
        if (!handleEvent) {
            handleEvent = NOOP;
        }

        var _splitMatchedQueriesD = splitMatchedQueriesDsl(matchedQueriesDsl),
            matchedQueries = _splitMatchedQueriesD.matchedQueries,
            references = _splitMatchedQueriesD.references,
            matchedQueryIds = _splitMatchedQueriesD.matchedQueryIds;

        // skip the call to sliceErrorStack itself + the call to this function.
        var /** @type {?} */source = isDevMode() ? sliceErrorStack(2, 3) : '';
        var /** @type {?} */template = templateFactory ? resolveViewDefinition(templateFactory) : null;
        return {
            type: NodeType.Element,
            // will bet set by the view definition
            index: undefined,
            reverseChildIndex: undefined,
            parent: undefined,
            renderParent: undefined,
            bindingIndex: undefined,
            outputIndex: undefined,
            // regular values
            flags: flags,
            childFlags: 0,
            childMatchedQueries: 0, matchedQueries: matchedQueries, matchedQueryIds: matchedQueryIds, references: references, ngContentIndex: ngContentIndex, childCount: childCount,
            bindings: [],
            outputs: [],
            element: {
                ns: undefined,
                name: undefined,
                attrs: undefined, template: template, source: source,
                componentProvider: undefined,
                componentView: undefined,
                componentRendererType: undefined,
                publicProviders: undefined,
                allProviders: undefined, handleEvent: handleEvent
            },
            provider: undefined,
            text: undefined,
            pureExpression: undefined,
            query: undefined,
            ngContent: undefined
        };
    }
    /**
     * @param {?} flags
     * @param {?} matchedQueriesDsl
     * @param {?} ngContentIndex
     * @param {?} childCount
     * @param {?} namespaceAndName
     * @param {?=} fixedAttrs
     * @param {?=} bindings
     * @param {?=} outputs
     * @param {?=} handleEvent
     * @param {?=} componentView
     * @param {?=} componentRendererType
     * @return {?}
     */
    function elementDef(flags, matchedQueriesDsl, ngContentIndex, childCount, namespaceAndName) {
        var fixedAttrs = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
        var bindings = arguments[6];
        var outputs = arguments[7];
        var handleEvent = arguments[8];
        var componentView = arguments[9];
        var componentRendererType = arguments[10];

        if (!handleEvent) {
            handleEvent = NOOP;
        }
        // skip the call to sliceErrorStack itself + the call to this function.
        var /** @type {?} */source = isDevMode() ? sliceErrorStack(2, 3) : '';

        var _splitMatchedQueriesD2 = splitMatchedQueriesDsl(matchedQueriesDsl),
            matchedQueries = _splitMatchedQueriesD2.matchedQueries,
            references = _splitMatchedQueriesD2.references,
            matchedQueryIds = _splitMatchedQueriesD2.matchedQueryIds;

        var /** @type {?} */ns = void 0;
        var /** @type {?} */name = void 0;
        if (namespaceAndName) {
            var _splitNamespace = splitNamespace(namespaceAndName);

            var _splitNamespace2 = _slicedToArray(_splitNamespace, 2);

            ns = _splitNamespace2[0];
            name = _splitNamespace2[1];
        }
        bindings = bindings || [];
        var /** @type {?} */bindingDefs = new Array(bindings.length);
        for (var /** @type {?} */i = 0; i < bindings.length; i++) {
            var /** @type {?} */entry = bindings[i];
            var /** @type {?} */bindingDef = void 0;
            var /** @type {?} */bindingType = entry[0];

            var _splitNamespace3 = splitNamespace(entry[1]),
                _splitNamespace4 = _slicedToArray(_splitNamespace3, 2),
                _ns = _splitNamespace4[0],
                _name = _splitNamespace4[1];

            var /** @type {?} */securityContext = void 0;
            var /** @type {?} */suffix = void 0;
            switch (bindingType) {
                case BindingType.ElementStyle:
                    suffix = entry[2];
                    break;
                case BindingType.ElementAttribute:
                case BindingType.ElementProperty:
                case BindingType.ComponentHostProperty:
                    securityContext = entry[2];
                    break;
            }
            bindingDefs[i] = { type: bindingType, ns: _ns, name: _name, nonMinifiedName: _name, securityContext: securityContext, suffix: suffix };
        }
        outputs = outputs || [];
        var /** @type {?} */outputDefs = new Array(outputs.length);
        for (var /** @type {?} */_i2 = 0; _i2 < outputs.length; _i2++) {
            var _outputs$_i = _slicedToArray(outputs[_i2], 2),
                target = _outputs$_i[0],
                eventName = _outputs$_i[1];

            outputDefs[_i2] = {
                type: OutputType.ElementOutput,
                target: /** @type {?} */target, eventName: eventName,
                propName: undefined
            };
        }
        fixedAttrs = fixedAttrs || [];
        var /** @type {?} */attrs = fixedAttrs.map(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                namespaceAndName = _ref6[0],
                value = _ref6[1];

            var _splitNamespace5 = splitNamespace(namespaceAndName),
                _splitNamespace6 = _slicedToArray(_splitNamespace5, 2),
                ns = _splitNamespace6[0],
                name = _splitNamespace6[1];

            return [ns, name, value];
        });
        // This is needed as the jit compiler always uses an empty hash as default RendererTypeV2,
        // which is not filled for host views.
        if (componentRendererType && componentRendererType.encapsulation == null) {
            componentRendererType = null;
        }
        if (componentView) {
            flags |= NodeFlags.HasComponent;
        }
        return {
            type: NodeType.Element,
            // will bet set by the view definition
            index: undefined,
            reverseChildIndex: undefined,
            parent: undefined,
            renderParent: undefined,
            bindingIndex: undefined,
            outputIndex: undefined,
            // regular values
            flags: flags,
            childFlags: 0,
            childMatchedQueries: 0, matchedQueries: matchedQueries, matchedQueryIds: matchedQueryIds, references: references, ngContentIndex: ngContentIndex, childCount: childCount,
            bindings: bindingDefs,
            outputs: outputDefs,
            element: {
                ns: ns,
                name: name,
                attrs: attrs,
                source: source,
                template: undefined,
                // will bet set by the view definition
                componentProvider: undefined, componentView: componentView, componentRendererType: componentRendererType,
                publicProviders: undefined,
                allProviders: undefined, handleEvent: handleEvent
            },
            provider: undefined,
            text: undefined,
            pureExpression: undefined,
            query: undefined,
            ngContent: undefined
        };
    }
    /**
     * @param {?} view
     * @param {?} renderHost
     * @param {?} def
     * @return {?}
     */
    function createElement(view, renderHost, def) {
        var /** @type {?} */elDef = def.element;
        var /** @type {?} */rootSelectorOrNode = view.root.selectorOrNode;
        var /** @type {?} */renderer = view.renderer;
        var /** @type {?} */el = void 0;
        if (view.parent || !rootSelectorOrNode) {
            if (elDef.name) {
                el = renderer.createElement(elDef.name, elDef.ns);
            } else {
                el = renderer.createComment('');
            }
            var /** @type {?} */parentEl = getParentRenderElement(view, renderHost, def);
            if (parentEl) {
                renderer.appendChild(parentEl, el);
            }
        } else {
            el = renderer.selectRootElement(rootSelectorOrNode);
        }
        if (elDef.attrs) {
            for (var /** @type {?} */i = 0; i < elDef.attrs.length; i++) {
                var _elDef$attrs$i = _slicedToArray(elDef.attrs[i], 3),
                    ns = _elDef$attrs$i[0],
                    name = _elDef$attrs$i[1],
                    value = _elDef$attrs$i[2];

                renderer.setAttribute(el, name, value, ns);
            }
        }
        return el;
    }
    /**
     * @param {?} view
     * @param {?} compView
     * @param {?} def
     * @param {?} el
     * @return {?}
     */
    function listenToElementOutputs(view, compView, def, el) {
        for (var /** @type {?} */i = 0; i < def.outputs.length; i++) {
            var /** @type {?} */output = def.outputs[i];
            var /** @type {?} */handleEventClosure = renderEventHandlerClosure(view, def.index, elementEventFullName(output.target, output.eventName));
            var /** @type {?} */listenTarget = output.target;
            var /** @type {?} */listenerView = view;
            if (output.target === 'component') {
                listenTarget = null;
                listenerView = compView;
            }
            var /** @type {?} */disposable = listenerView.renderer.listen(listenTarget || el, output.eventName, handleEventClosure);
            view.disposables[def.outputIndex + i] = disposable;
        }
    }
    /**
     * @param {?} view
     * @param {?} index
     * @param {?} eventName
     * @return {?}
     */
    function renderEventHandlerClosure(view, index, eventName) {
        return function (event) {
            return dispatchEvent(view, index, eventName, event);
        };
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} v0
     * @param {?} v1
     * @param {?} v2
     * @param {?} v3
     * @param {?} v4
     * @param {?} v5
     * @param {?} v6
     * @param {?} v7
     * @param {?} v8
     * @param {?} v9
     * @return {?}
     */
    function checkAndUpdateElementInline(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        var /** @type {?} */bindLen = def.bindings.length;
        var /** @type {?} */changed = false;
        if (bindLen > 0 && checkAndUpdateElementValue(view, def, 0, v0)) changed = true;
        if (bindLen > 1 && checkAndUpdateElementValue(view, def, 1, v1)) changed = true;
        if (bindLen > 2 && checkAndUpdateElementValue(view, def, 2, v2)) changed = true;
        if (bindLen > 3 && checkAndUpdateElementValue(view, def, 3, v3)) changed = true;
        if (bindLen > 4 && checkAndUpdateElementValue(view, def, 4, v4)) changed = true;
        if (bindLen > 5 && checkAndUpdateElementValue(view, def, 5, v5)) changed = true;
        if (bindLen > 6 && checkAndUpdateElementValue(view, def, 6, v6)) changed = true;
        if (bindLen > 7 && checkAndUpdateElementValue(view, def, 7, v7)) changed = true;
        if (bindLen > 8 && checkAndUpdateElementValue(view, def, 8, v8)) changed = true;
        if (bindLen > 9 && checkAndUpdateElementValue(view, def, 9, v9)) changed = true;
        return changed;
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} values
     * @return {?}
     */
    function checkAndUpdateElementDynamic(view, def, values) {
        var /** @type {?} */changed = false;
        for (var /** @type {?} */i = 0; i < values.length; i++) {
            if (checkAndUpdateElementValue(view, def, i, values[i])) changed = true;
        }
        return changed;
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} bindingIdx
     * @param {?} value
     * @return {?}
     */
    function checkAndUpdateElementValue(view, def, bindingIdx, value) {
        if (!checkAndUpdateBinding(view, def, bindingIdx, value)) {
            return false;
        }
        var /** @type {?} */binding = def.bindings[bindingIdx];
        var /** @type {?} */elData = asElementData(view, def.index);
        var /** @type {?} */renderNode = elData.renderElement;
        var /** @type {?} */name = binding.name;
        switch (binding.type) {
            case BindingType.ElementAttribute:
                setElementAttribute(view, binding, renderNode, binding.ns, name, value);
                break;
            case BindingType.ElementClass:
                setElementClass(view, renderNode, name, value);
                break;
            case BindingType.ElementStyle:
                setElementStyle(view, binding, renderNode, name, value);
                break;
            case BindingType.ElementProperty:
                setElementProperty(view, binding, renderNode, name, value);
                break;
            case BindingType.ComponentHostProperty:
                setElementProperty(elData.componentView, binding, renderNode, name, value);
                break;
        }
        return true;
    }
    /**
     * @param {?} view
     * @param {?} binding
     * @param {?} renderNode
     * @param {?} ns
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function setElementAttribute(view, binding, renderNode, ns, name, value) {
        var /** @type {?} */securityContext = binding.securityContext;
        var /** @type {?} */renderValue = securityContext ? view.root.sanitizer.sanitize(securityContext, value) : value;
        renderValue = renderValue != null ? renderValue.toString() : null;
        var /** @type {?} */renderer = view.renderer;
        if (value != null) {
            renderer.setAttribute(renderNode, name, renderValue, ns);
        } else {
            renderer.removeAttribute(renderNode, name, ns);
        }
    }
    /**
     * @param {?} view
     * @param {?} renderNode
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function setElementClass(view, renderNode, name, value) {
        var /** @type {?} */renderer = view.renderer;
        if (value) {
            renderer.addClass(renderNode, name);
        } else {
            renderer.removeClass(renderNode, name);
        }
    }
    /**
     * @param {?} view
     * @param {?} binding
     * @param {?} renderNode
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function setElementStyle(view, binding, renderNode, name, value) {
        var /** @type {?} */renderValue = view.root.sanitizer.sanitize(SecurityContext.STYLE, value);
        if (renderValue != null) {
            renderValue = renderValue.toString();
            var /** @type {?} */unit = binding.suffix;
            if (unit != null) {
                renderValue = renderValue + unit;
            }
        } else {
            renderValue = null;
        }
        var /** @type {?} */renderer = view.renderer;
        if (renderValue != null) {
            renderer.setStyle(renderNode, name, renderValue, false, false);
        } else {
            renderer.removeStyle(renderNode, name, false);
        }
    }
    /**
     * @param {?} view
     * @param {?} binding
     * @param {?} renderNode
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function setElementProperty(view, binding, renderNode, name, value) {
        var /** @type {?} */securityContext = binding.securityContext;
        var /** @type {?} */renderValue = securityContext ? view.root.sanitizer.sanitize(securityContext, value) : value;
        view.renderer.setProperty(renderNode, name, renderValue);
    }

    /**
     * @param {?} ngContentIndex
     * @param {?} index
     * @return {?}
     */
    function ngContentDef(ngContentIndex, index) {
        return {
            type: NodeType.NgContent,
            // will bet set by the view definition
            index: undefined,
            reverseChildIndex: undefined,
            parent: undefined,
            renderParent: undefined,
            bindingIndex: undefined,
            outputIndex: undefined,
            // regular values
            flags: 0,
            childFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {}, ngContentIndex: ngContentIndex,
            childCount: 0,
            bindings: [],
            outputs: [],
            element: undefined,
            provider: undefined,
            text: undefined,
            pureExpression: undefined,
            query: undefined,
            ngContent: { index: index }
        };
    }
    /**
     * @param {?} view
     * @param {?} renderHost
     * @param {?} def
     * @return {?}
     */
    function appendNgContent(view, renderHost, def) {
        var /** @type {?} */parentEl = getParentRenderElement(view, renderHost, def);
        if (!parentEl) {
            // Nothing to do if there is no parent element.
            return;
        }
        var /** @type {?} */ngContentIndex = def.ngContent.index;
        visitProjectedRenderNodes(view, ngContentIndex, RenderNodeAction.AppendChild, parentEl, undefined, undefined);
    }

    /**
     * \@experimental Animation support is experimental.
     * @abstract
     */

    var AnimationPlayer = function () {
        function AnimationPlayer() {
            _classCallCheck(this, AnimationPlayer);
        }

        _createClass(AnimationPlayer, [{
            key: 'onDone',
            value: function onDone(fn) {}
        }, {
            key: 'onStart',
            value: function onStart(fn) {}
        }, {
            key: 'onDestroy',
            value: function onDestroy(fn) {}
        }, {
            key: 'init',
            value: function init() {}
        }, {
            key: 'hasStarted',
            value: function hasStarted() {}
        }, {
            key: 'play',
            value: function play() {}
        }, {
            key: 'pause',
            value: function pause() {}
        }, {
            key: 'restart',
            value: function restart() {}
        }, {
            key: 'finish',
            value: function finish() {}
        }, {
            key: 'destroy',
            value: function destroy() {}
        }, {
            key: 'reset',
            value: function reset() {}
        }, {
            key: 'setPosition',
            value: function setPosition(p) {}
        }, {
            key: 'getPosition',
            value: function getPosition() {}
        }, {
            key: 'parentPlayer',
            get: function get() {
                throw new Error('NOT IMPLEMENTED: Base Class');
            },
            set: function set(player) {
                throw new Error('NOT IMPLEMENTED: Base Class');
            }
        }]);

        return AnimationPlayer;
    }();

    var NoOpAnimationPlayer = function () {
        function NoOpAnimationPlayer() {
            var _this27 = this;

            _classCallCheck(this, NoOpAnimationPlayer);

            this._onDoneFns = [];
            this._onStartFns = [];
            this._onDestroyFns = [];
            this._started = false;
            this._destroyed = false;
            this._finished = false;
            this.parentPlayer = null;
            scheduleMicroTask(function () {
                return _this27._onFinish();
            });
        }
        /**
         * @return {?}
         */


        _createClass(NoOpAnimationPlayer, [{
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
            key: 'hasStarted',
            value: function hasStarted() {
                return this._started;
            }
        }, {
            key: 'init',
            value: function init() {}
        }, {
            key: 'play',
            value: function play() {
                if (!this.hasStarted()) {
                    this._onStartFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onStartFns = [];
                }
                this._started = true;
            }
        }, {
            key: 'pause',
            value: function pause() {}
        }, {
            key: 'restart',
            value: function restart() {}
        }, {
            key: 'finish',
            value: function finish() {
                this._onFinish();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (!this._destroyed) {
                    this._destroyed = true;
                    this.finish();
                    this._onDestroyFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onDestroyFns = [];
                }
            }
        }, {
            key: 'reset',
            value: function reset() {}
        }, {
            key: 'setPosition',
            value: function setPosition(p) {}
        }, {
            key: 'getPosition',
            value: function getPosition() {
                return 0;
            }
        }]);

        return NoOpAnimationPlayer;
    }();

    /**
     * @param {?} parentView
     * @param {?} elementData
     * @param {?} viewIndex
     * @param {?} view
     * @return {?}
     */
    function attachEmbeddedView(parentView, elementData, viewIndex, view) {
        var /** @type {?} */embeddedViews = elementData.embeddedViews;
        if (viewIndex == null) {
            viewIndex = embeddedViews.length;
        }
        view.viewContainerParent = parentView;
        addToArray$1(embeddedViews, viewIndex, view);
        var /** @type {?} */dvcElementData = declaredViewContainer(view);
        if (dvcElementData && dvcElementData !== elementData) {
            var /** @type {?} */projectedViews = dvcElementData.projectedViews;
            if (!projectedViews) {
                projectedViews = dvcElementData.projectedViews = [];
            }
            projectedViews.push(view);
        }
        Services.dirtyParentQueries(view);
        var /** @type {?} */prevView = viewIndex > 0 ? embeddedViews[viewIndex - 1] : null;
        renderAttachEmbeddedView(elementData, prevView, view);
    }
    /**
     * @param {?} elementData
     * @param {?} viewIndex
     * @return {?}
     */
    function detachEmbeddedView(elementData, viewIndex) {
        var /** @type {?} */embeddedViews = elementData.embeddedViews;
        if (viewIndex == null || viewIndex >= embeddedViews.length) {
            viewIndex = embeddedViews.length - 1;
        }
        if (viewIndex < 0) {
            return null;
        }
        var /** @type {?} */view = embeddedViews[viewIndex];
        view.viewContainerParent = undefined;
        removeFromArray(embeddedViews, viewIndex);
        var /** @type {?} */dvcElementData = declaredViewContainer(view);
        if (dvcElementData && dvcElementData !== elementData) {
            var /** @type {?} */projectedViews = dvcElementData.projectedViews;
            removeFromArray(projectedViews, projectedViews.indexOf(view));
        }
        Services.dirtyParentQueries(view);
        renderDetachView(view);
        return view;
    }
    /**
     * @param {?} elementData
     * @param {?} oldViewIndex
     * @param {?} newViewIndex
     * @return {?}
     */
    function moveEmbeddedView(elementData, oldViewIndex, newViewIndex) {
        var /** @type {?} */embeddedViews = elementData.embeddedViews;
        var /** @type {?} */view = embeddedViews[oldViewIndex];
        removeFromArray(embeddedViews, oldViewIndex);
        if (newViewIndex == null) {
            newViewIndex = embeddedViews.length;
        }
        addToArray$1(embeddedViews, newViewIndex, view);
        // Note: Don't need to change projectedViews as the order in there
        // as always invalid...
        Services.dirtyParentQueries(view);
        renderDetachView(view);
        var /** @type {?} */prevView = newViewIndex > 0 ? embeddedViews[newViewIndex - 1] : null;
        renderAttachEmbeddedView(elementData, prevView, view);
        return view;
    }
    /**
     * @param {?} elementData
     * @param {?} prevView
     * @param {?} view
     * @return {?}
     */
    function renderAttachEmbeddedView(elementData, prevView, view) {
        var /** @type {?} */prevRenderNode = prevView ? renderNode(prevView, prevView.def.lastRenderRootNode) : elementData.renderElement;
        var /** @type {?} */parentNode = view.renderer.parentNode(prevRenderNode);
        var /** @type {?} */nextSibling = view.renderer.nextSibling(prevRenderNode);
        // Note: We can't check if `nextSibling` is present, as on WebWorkers it will always be!
        // However, browsers automatically do `appendChild` when there is no `nextSibling`.
        visitRootRenderNodes(view, RenderNodeAction.InsertBefore, parentNode, nextSibling, undefined);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function renderDetachView(view) {
        visitRootRenderNodes(view, RenderNodeAction.RemoveChild, null, null, undefined);
    }
    /**
     * @param {?} arr
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    function addToArray$1(arr, index, value) {
        // perf: array.push is faster than array.splice!
        if (index >= arr.length) {
            arr.push(value);
        } else {
            arr.splice(index, 0, value);
        }
    }
    /**
     * @param {?} arr
     * @param {?} index
     * @return {?}
     */
    function removeFromArray(arr, index) {
        // perf: array.pop is faster than array.splice!
        if (index >= arr.length - 1) {
            arr.pop();
        } else {
            arr.splice(index, 1);
        }
    }

    var /** @type {?} */EMPTY_CONTEXT = new Object();
    /**
     * @param {?} selector
     * @param {?} componentType
     * @param {?} viewDefFactory
     * @return {?}
     */
    function createComponentFactory(selector, componentType, viewDefFactory) {
        return new ComponentFactory_(selector, componentType, viewDefFactory);
    }

    var ComponentFactory_ = function (_ComponentFactory) {
        _inherits(ComponentFactory_, _ComponentFactory);

        /**
         * @param {?} selector
         * @param {?} componentType
         * @param {?} viewDefFactory
         */
        function ComponentFactory_(selector, componentType, viewDefFactory) {
            _classCallCheck(this, ComponentFactory_);

            return _possibleConstructorReturn(this, (ComponentFactory_.__proto__ || Object.getPrototypeOf(ComponentFactory_)).call(this, selector, viewDefFactory, componentType));
        }
        /**
         * Creates a new component.
         * @param {?} injector
         * @param {?=} projectableNodes
         * @param {?=} rootSelectorOrNode
         * @return {?}
         */


        _createClass(ComponentFactory_, [{
            key: 'create',
            value: function create(injector) {
                var projectableNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var rootSelectorOrNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                var /** @type {?} */viewDef = resolveViewDefinition(this._viewClass);
                var /** @type {?} */componentNodeIndex = viewDef.nodes[0].element.componentProvider.index;
                var /** @type {?} */view = Services.createRootView(injector, projectableNodes || [], rootSelectorOrNode, viewDef, EMPTY_CONTEXT);
                var /** @type {?} */component = asProviderData(view, componentNodeIndex).instance;
                view.renderer.setAttribute(asElementData(view, 0).renderElement, 'ng-version', VERSION.full);
                return new ComponentRef_$1(view, new ViewRef_$1(view), component);
            }
        }]);

        return ComponentFactory_;
    }(ComponentFactory);

    var ComponentRef_$1 = function (_ComponentRef2) {
        _inherits(ComponentRef_$1, _ComponentRef2);

        /**
         * @param {?} _view
         * @param {?} _viewRef
         * @param {?} _component
         */
        function ComponentRef_$1(_view, _viewRef, _component) {
            _classCallCheck(this, ComponentRef_$1);

            var _this29 = _possibleConstructorReturn(this, (ComponentRef_$1.__proto__ || Object.getPrototypeOf(ComponentRef_$1)).call(this));

            _this29._view = _view;
            _this29._viewRef = _viewRef;
            _this29._component = _component;
            _this29._elDef = _this29._view.def.nodes[0];
            return _this29;
        }
        /**
         * @return {?}
         */


        _createClass(ComponentRef_$1, [{
            key: 'destroy',
            value: function destroy() {
                this._viewRef.destroy();
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy(callback) {
                this._viewRef.onDestroy(callback);
            }
        }, {
            key: 'location',
            get: function get() {
                return new ElementRef(asElementData(this._view, this._elDef.index).renderElement);
            }
        }, {
            key: 'injector',
            get: function get() {
                return new Injector_(this._view, this._elDef);
            }
        }, {
            key: 'instance',
            get: function get() {
                return this._component;
            }
        }, {
            key: 'hostView',
            get: function get() {
                return this._viewRef;
            }
        }, {
            key: 'changeDetectorRef',
            get: function get() {
                return this._viewRef;
            }
        }, {
            key: 'componentType',
            get: function get() {
                return this._component.constructor;
            }
        }]);

        return ComponentRef_$1;
    }(ComponentRef);

    /**
     * @param {?} view
     * @param {?} elDef
     * @return {?}
     */
    function createViewContainerRef(view, elDef) {
        return new ViewContainerRef_$1(view, elDef);
    }

    var ViewContainerRef_$1 = function () {
        /**
         * @param {?} _view
         * @param {?} _elDef
         */
        function ViewContainerRef_$1(_view, _elDef) {
            _classCallCheck(this, ViewContainerRef_$1);

            this._view = _view;
            this._elDef = _elDef;
            this._data = asElementData(_view, _elDef.index);
        }
        /**
         * @return {?}
         */


        _createClass(ViewContainerRef_$1, [{
            key: 'clear',
            value: function clear() {
                var /** @type {?} */len = this._data.embeddedViews.length;
                for (var /** @type {?} */i = len - 1; i >= 0; i--) {
                    var /** @type {?} */view = detachEmbeddedView(this._data, i);
                    Services.destroyView(view);
                }
            }
        }, {
            key: 'get',
            value: function get(index) {
                var /** @type {?} */view = this._data.embeddedViews[index];
                if (view) {
                    var /** @type {?} */ref = new ViewRef_$1(view);
                    ref.attachToViewContainerRef(this);
                    return ref;
                }
                return null;
            }
        }, {
            key: 'createEmbeddedView',
            value: function createEmbeddedView(templateRef, context, index) {
                var /** @type {?} */viewRef = templateRef.createEmbeddedView(context || {});
                this.insert(viewRef, index);
                return viewRef;
            }
        }, {
            key: 'createComponent',
            value: function createComponent(componentFactory, index, injector, projectableNodes) {
                var /** @type {?} */contextInjector = injector || this.parentInjector;
                var /** @type {?} */componentRef = componentFactory.create(contextInjector, projectableNodes);
                this.insert(componentRef.hostView, index);
                return componentRef;
            }
        }, {
            key: 'insert',
            value: function insert(viewRef, index) {
                var /** @type {?} */viewRef_ = viewRef;
                var /** @type {?} */viewData = viewRef_._view;
                attachEmbeddedView(this._view, this._data, index, viewData);
                viewRef_.attachToViewContainerRef(this);
                return viewRef;
            }
        }, {
            key: 'move',
            value: function move(viewRef, currentIndex) {
                var /** @type {?} */previousIndex = this._data.embeddedViews.indexOf(viewRef._view);
                moveEmbeddedView(this._data, previousIndex, currentIndex);
                return viewRef;
            }
        }, {
            key: 'indexOf',
            value: function indexOf(viewRef) {
                return this._data.embeddedViews.indexOf(viewRef._view);
            }
        }, {
            key: 'remove',
            value: function remove(index) {
                var /** @type {?} */viewData = detachEmbeddedView(this._data, index);
                if (viewData) {
                    Services.destroyView(viewData);
                }
            }
        }, {
            key: 'detach',
            value: function detach(index) {
                var /** @type {?} */view = detachEmbeddedView(this._data, index);
                return view ? new ViewRef_$1(view) : null;
            }
        }, {
            key: 'element',
            get: function get() {
                return new ElementRef(this._data.renderElement);
            }
        }, {
            key: 'injector',
            get: function get() {
                return new Injector_(this._view, this._elDef);
            }
        }, {
            key: 'parentInjector',
            get: function get() {
                var /** @type {?} */view = this._view;
                var /** @type {?} */elDef = this._elDef.parent;
                while (!elDef && view) {
                    elDef = viewParentEl(view);
                    view = view.parent;
                }
                return view ? new Injector_(view, elDef) : this._view.root.injector;
            }
        }, {
            key: 'length',
            get: function get() {
                return this._data.embeddedViews.length;
            }
        }]);

        return ViewContainerRef_$1;
    }();

    /**
     * @param {?} view
     * @return {?}
     */
    function createChangeDetectorRef(view) {
        return new ViewRef_$1(view);
    }

    var ViewRef_$1 = function () {
        /**
         * @param {?} _view
         */
        function ViewRef_$1(_view) {
            _classCallCheck(this, ViewRef_$1);

            this._view = _view;
            this._viewContainerRef = null;
            this._appRef = null;
        }
        /**
         * @return {?}
         */


        _createClass(ViewRef_$1, [{
            key: 'markForCheck',
            value: function markForCheck() {
                markParentViewsForCheck(this._view);
            }
        }, {
            key: 'detach',
            value: function detach() {
                this._view.state &= ~ViewState.ChecksEnabled;
            }
        }, {
            key: 'detectChanges',
            value: function detectChanges() {
                Services.checkAndUpdateView(this._view);
            }
        }, {
            key: 'checkNoChanges',
            value: function checkNoChanges() {
                Services.checkNoChangesView(this._view);
            }
        }, {
            key: 'reattach',
            value: function reattach() {
                this._view.state |= ViewState.ChecksEnabled;
            }
        }, {
            key: 'onDestroy',
            value: function onDestroy(callback) {
                if (!this._view.disposables) {
                    this._view.disposables = [];
                }
                this._view.disposables.push( /** @type {?} */callback);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (this._appRef) {
                    this._appRef.detachView(this);
                } else if (this._viewContainerRef) {
                    this._viewContainerRef.detach(this._viewContainerRef.indexOf(this));
                }
                Services.destroyView(this._view);
            }
        }, {
            key: 'detachFromAppRef',
            value: function detachFromAppRef() {
                this._appRef = null;
                renderDetachView(this._view);
                Services.dirtyParentQueries(this._view);
            }
        }, {
            key: 'attachToAppRef',
            value: function attachToAppRef(appRef) {
                if (this._viewContainerRef) {
                    throw new Error('This view is already attached to a ViewContainer!');
                }
                this._appRef = appRef;
            }
        }, {
            key: 'attachToViewContainerRef',
            value: function attachToViewContainerRef(vcRef) {
                if (this._appRef) {
                    throw new Error('This view is already attached directly to the ApplicationRef!');
                }
                this._viewContainerRef = vcRef;
            }
        }, {
            key: 'rootNodes',
            get: function get() {
                return rootRenderNodes(this._view);
            }
        }, {
            key: 'context',
            get: function get() {
                return this._view.context;
            }
        }, {
            key: 'destroyed',
            get: function get() {
                return (this._view.state & ViewState.Destroyed) !== 0;
            }
        }]);

        return ViewRef_$1;
    }();

    /**
     * @param {?} view
     * @param {?} def
     * @return {?}
     */
    function createTemplateRef(view, def) {
        return new TemplateRef_$1(view, def);
    }

    var TemplateRef_$1 = function (_TemplateRef2) {
        _inherits(TemplateRef_$1, _TemplateRef2);

        /**
         * @param {?} _parentView
         * @param {?} _def
         */
        function TemplateRef_$1(_parentView, _def) {
            _classCallCheck(this, TemplateRef_$1);

            var _this30 = _possibleConstructorReturn(this, (TemplateRef_$1.__proto__ || Object.getPrototypeOf(TemplateRef_$1)).call(this));

            _this30._parentView = _parentView;
            _this30._def = _def;
            return _this30;
        }
        /**
         * @param {?} context
         * @return {?}
         */


        _createClass(TemplateRef_$1, [{
            key: 'createEmbeddedView',
            value: function createEmbeddedView(context) {
                return new ViewRef_$1(Services.createEmbeddedView(this._parentView, this._def, context));
            }
        }, {
            key: 'elementRef',
            get: function get() {
                return new ElementRef(asElementData(this._parentView, this._def.index).renderElement);
            }
        }]);

        return TemplateRef_$1;
    }(TemplateRef);

    /**
     * @param {?} view
     * @param {?} elDef
     * @return {?}
     */
    function createInjector(view, elDef) {
        return new Injector_(view, elDef);
    }

    var Injector_ = function () {
        /**
         * @param {?} view
         * @param {?} elDef
         */
        function Injector_(view, elDef) {
            _classCallCheck(this, Injector_);

            this.view = view;
            this.elDef = elDef;
        }
        /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @return {?}
         */


        _createClass(Injector_, [{
            key: 'get',
            value: function get(token) {
                var notFoundValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Injector.THROW_IF_NOT_FOUND;

                var /** @type {?} */allowPrivateServices = (this.elDef.flags & NodeFlags.HasComponent) !== 0;
                return Services.resolveDep(this.view, this.elDef, allowPrivateServices, { flags: DepFlags.None, token: token, tokenKey: tokenKey(token) }, notFoundValue);
            }
        }]);

        return Injector_;
    }();

    /**
     * @param {?} view
     * @param {?} index
     * @return {?}
     */
    function nodeValue(view, index) {
        var /** @type {?} */def = view.def.nodes[index];
        switch (def.type) {
            case NodeType.Element:
                if (def.element.template) {
                    return createTemplateRef(view, def);
                } else {
                    return asElementData(view, def.index).renderElement;
                }
            case NodeType.Text:
                return asTextData(view, def.index).renderText;
            case NodeType.Directive:
            case NodeType.Pipe:
            case NodeType.Provider:
                return asProviderData(view, def.index).instance;
        }
        return undefined;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function createRendererV1(view) {
        return new RendererAdapter(view.renderer);
    }

    var RendererAdapter = function () {
        /**
         * @param {?} delegate
         */
        function RendererAdapter(delegate) {
            _classCallCheck(this, RendererAdapter);

            this.delegate = delegate;
        }
        /**
         * @param {?} selectorOrNode
         * @return {?}
         */


        _createClass(RendererAdapter, [{
            key: 'selectRootElement',
            value: function selectRootElement(selectorOrNode) {
                return this.delegate.selectRootElement(selectorOrNode);
            }
        }, {
            key: 'createElement',
            value: function createElement(parent, namespaceAndName) {
                var _splitNamespace7 = splitNamespace(namespaceAndName),
                    _splitNamespace8 = _slicedToArray(_splitNamespace7, 2),
                    ns = _splitNamespace8[0],
                    name = _splitNamespace8[1];

                var /** @type {?} */el = this.delegate.createElement(name, ns);
                if (parent) {
                    this.delegate.appendChild(parent, el);
                }
                return el;
            }
        }, {
            key: 'createViewRoot',
            value: function createViewRoot(hostElement) {
                return hostElement;
            }
        }, {
            key: 'createTemplateAnchor',
            value: function createTemplateAnchor(parentElement) {
                var /** @type {?} */comment = this.delegate.createComment('');
                if (parentElement) {
                    this.delegate.appendChild(parentElement, comment);
                }
                return comment;
            }
        }, {
            key: 'createText',
            value: function createText(parentElement, value) {
                var /** @type {?} */node = this.delegate.createText(value);
                if (parentElement) {
                    this.delegate.appendChild(parentElement, node);
                }
                return node;
            }
        }, {
            key: 'projectNodes',
            value: function projectNodes(parentElement, nodes) {
                for (var /** @type {?} */i = 0; i < nodes.length; i++) {
                    this.delegate.appendChild(parentElement, nodes[i]);
                }
            }
        }, {
            key: 'attachViewAfter',
            value: function attachViewAfter(node, viewRootNodes) {
                var /** @type {?} */parentElement = this.delegate.parentNode(node);
                var /** @type {?} */nextSibling = this.delegate.nextSibling(node);
                for (var /** @type {?} */i = 0; i < viewRootNodes.length; i++) {
                    this.delegate.insertBefore(parentElement, viewRootNodes[i], nextSibling);
                }
            }
        }, {
            key: 'detachView',
            value: function detachView(viewRootNodes) {
                for (var /** @type {?} */i = 0; i < viewRootNodes.length; i++) {
                    var /** @type {?} */node = viewRootNodes[i];
                    var /** @type {?} */parentElement = this.delegate.parentNode(node);
                    this.delegate.removeChild(parentElement, node);
                }
            }
        }, {
            key: 'destroyView',
            value: function destroyView(hostElement, viewAllNodes) {
                for (var /** @type {?} */i = 0; i < viewAllNodes.length; i++) {
                    this.delegate.destroyNode(viewAllNodes[i]);
                }
            }
        }, {
            key: 'listen',
            value: function listen(renderElement, name, callback) {
                return this.delegate.listen(renderElement, name, /** @type {?} */callback);
            }
        }, {
            key: 'listenGlobal',
            value: function listenGlobal(target, name, callback) {
                return this.delegate.listen(target, name, /** @type {?} */callback);
            }
        }, {
            key: 'setElementProperty',
            value: function setElementProperty(renderElement, propertyName, propertyValue) {
                this.delegate.setProperty(renderElement, propertyName, propertyValue);
            }
        }, {
            key: 'setElementAttribute',
            value: function setElementAttribute(renderElement, namespaceAndName, attributeValue) {
                var _splitNamespace9 = splitNamespace(namespaceAndName),
                    _splitNamespace10 = _slicedToArray(_splitNamespace9, 2),
                    ns = _splitNamespace10[0],
                    name = _splitNamespace10[1];

                if (attributeValue != null) {
                    this.delegate.setAttribute(renderElement, name, attributeValue, ns);
                } else {
                    this.delegate.removeAttribute(renderElement, name, ns);
                }
            }
        }, {
            key: 'setBindingDebugInfo',
            value: function setBindingDebugInfo(renderElement, propertyName, propertyValue) {}
        }, {
            key: 'setElementClass',
            value: function setElementClass(renderElement, className, isAdd) {
                if (isAdd) {
                    this.delegate.addClass(renderElement, className);
                } else {
                    this.delegate.removeClass(renderElement, className);
                }
            }
        }, {
            key: 'setElementStyle',
            value: function setElementStyle(renderElement, styleName, styleValue) {
                if (styleValue != null) {
                    this.delegate.setStyle(renderElement, styleName, styleValue, false, false);
                } else {
                    this.delegate.removeStyle(renderElement, styleName, false);
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
                this.delegate.setValue(renderNode, text);
            }
        }, {
            key: 'animate',
            value: function animate() {
                return new NoOpAnimationPlayer();
            }
        }]);

        return RendererAdapter;
    }();

    var /** @type {?} */RendererV1TokenKey = tokenKey(RendererV1);
    var /** @type {?} */RendererV2TokenKey = tokenKey(RendererV2);
    var /** @type {?} */ElementRefTokenKey = tokenKey(ElementRef);
    var /** @type {?} */ViewContainerRefTokenKey = tokenKey(ViewContainerRef);
    var /** @type {?} */TemplateRefTokenKey = tokenKey(TemplateRef);
    var /** @type {?} */ChangeDetectorRefTokenKey = tokenKey(ChangeDetectorRef);
    var /** @type {?} */InjectorRefTokenKey = tokenKey(Injector);
    var /** @type {?} */NOT_CREATED = new Object();
    /**
     * @param {?} flags
     * @param {?} matchedQueries
     * @param {?} childCount
     * @param {?} ctor
     * @param {?} deps
     * @param {?=} props
     * @param {?=} outputs
     * @return {?}
     */
    function directiveDef(flags, matchedQueries, childCount, ctor, deps, props, outputs) {
        var /** @type {?} */bindings = [];
        if (props) {
            for (var /** @type {?} */prop in props) {
                var _props$prop = _slicedToArray(props[prop], 2),
                    bindingIndex = _props$prop[0],
                    nonMinifiedName = _props$prop[1];

                bindings[bindingIndex] = {
                    type: BindingType.DirectiveProperty,
                    name: prop, nonMinifiedName: nonMinifiedName,
                    ns: undefined,
                    securityContext: undefined,
                    suffix: undefined
                };
            }
        }
        var /** @type {?} */outputDefs = [];
        if (outputs) {
            for (var /** @type {?} */propName in outputs) {
                outputDefs.push({ type: OutputType.DirectiveOutput, propName: propName, target: null, eventName: outputs[propName] });
            }
        }
        return _def(NodeType.Directive, flags, matchedQueries, childCount, ProviderType.Class, ctor, ctor, deps, bindings, outputDefs);
    }
    /**
     * @param {?} flags
     * @param {?} ctor
     * @param {?} deps
     * @return {?}
     */
    function pipeDef(flags, ctor, deps) {
        return _def(NodeType.Pipe, flags, null, 0, ProviderType.Class, ctor, ctor, deps);
    }
    /**
     * @param {?} flags
     * @param {?} matchedQueries
     * @param {?} type
     * @param {?} token
     * @param {?} value
     * @param {?} deps
     * @return {?}
     */
    function providerDef(flags, matchedQueries, type, token, value, deps) {
        return _def(NodeType.Provider, flags, matchedQueries, 0, type, token, value, deps);
    }
    /**
     * @param {?} type
     * @param {?} flags
     * @param {?} matchedQueriesDsl
     * @param {?} childCount
     * @param {?} providerType
     * @param {?} token
     * @param {?} value
     * @param {?} deps
     * @param {?=} bindings
     * @param {?=} outputs
     * @return {?}
     */
    function _def(type, flags, matchedQueriesDsl, childCount, providerType, token, value, deps, bindings, outputs) {
        var _splitMatchedQueriesD3 = splitMatchedQueriesDsl(matchedQueriesDsl),
            matchedQueries = _splitMatchedQueriesD3.matchedQueries,
            references = _splitMatchedQueriesD3.references,
            matchedQueryIds = _splitMatchedQueriesD3.matchedQueryIds;

        if (!outputs) {
            outputs = [];
        }
        if (!bindings) {
            bindings = [];
        }
        var /** @type {?} */depDefs = deps.map(function (value) {
            var /** @type {?} */token = void 0;
            var /** @type {?} */flags = void 0;
            if (Array.isArray(value)) {
                var _value = _slicedToArray(value, 2);

                flags = _value[0];
                token = _value[1];
            } else {
                flags = DepFlags.None;
                token = value;
            }
            return { flags: flags, token: token, tokenKey: tokenKey(token) };
        });
        return {
            type: type,
            // will bet set by the view definition
            index: undefined,
            reverseChildIndex: undefined,
            parent: undefined,
            renderParent: undefined,
            bindingIndex: undefined,
            outputIndex: undefined,
            // regular values
            flags: flags,
            childFlags: 0,
            childMatchedQueries: 0, matchedQueries: matchedQueries, matchedQueryIds: matchedQueryIds, references: references,
            ngContentIndex: undefined, childCount: childCount, bindings: bindings, outputs: outputs,
            element: undefined,
            provider: { type: providerType, token: token, tokenKey: tokenKey(token), value: value, deps: depDefs },
            text: undefined,
            pureExpression: undefined,
            query: undefined,
            ngContent: undefined
        };
    }
    /**
     * @param {?} view
     * @param {?} def
     * @return {?}
     */
    function createProviderInstance(view, def) {
        return def.flags & NodeFlags.LazyProvider ? NOT_CREATED : _createProviderInstance(view, def);
    }
    /**
     * @param {?} view
     * @param {?} def
     * @return {?}
     */
    function createPipeInstance(view, def) {
        // deps are looked up from component.
        var /** @type {?} */compView = view;
        while (compView.parent && !isComponentView(compView)) {
            compView = compView.parent;
        }
        // pipes can see the private services of the component
        var /** @type {?} */allowPrivateServices = true;
        // pipes are always eager and classes!
        return createClass(compView.parent, viewParentEl(compView), allowPrivateServices, def.provider.value, def.provider.deps);
    }
    /**
     * @param {?} view
     * @param {?} def
     * @return {?}
     */
    function createDirectiveInstance(view, def) {
        // components can see other private services, other directives can't.
        var /** @type {?} */allowPrivateServices = (def.flags & NodeFlags.IsComponent) > 0;
        var /** @type {?} */providerDef = def.provider;
        // directives are always eager and classes!
        var /** @type {?} */instance = createClass(view, def.parent, allowPrivateServices, def.provider.value, def.provider.deps);
        if (def.outputs.length) {
            for (var /** @type {?} */i = 0; i < def.outputs.length; i++) {
                var /** @type {?} */output = def.outputs[i];
                var /** @type {?} */subscription = instance[output.propName].subscribe(eventHandlerClosure(view, def.parent.index, output.eventName));
                view.disposables[def.outputIndex + i] = subscription.unsubscribe.bind(subscription);
            }
        }
        return instance;
    }
    /**
     * @param {?} view
     * @param {?} index
     * @param {?} eventName
     * @return {?}
     */
    function eventHandlerClosure(view, index, eventName) {
        return function (event) {
            return dispatchEvent(view, index, eventName, event);
        };
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} v0
     * @param {?} v1
     * @param {?} v2
     * @param {?} v3
     * @param {?} v4
     * @param {?} v5
     * @param {?} v6
     * @param {?} v7
     * @param {?} v8
     * @param {?} v9
     * @return {?}
     */
    function checkAndUpdateDirectiveInline(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        var /** @type {?} */providerData = asProviderData(view, def.index);
        var /** @type {?} */directive = providerData.instance;
        var /** @type {?} */changed = false;
        var /** @type {?} */changes = void 0;
        var /** @type {?} */bindLen = def.bindings.length;
        if (bindLen > 0 && checkBinding$1(view, def, 0, v0)) {
            changed = true;
            changes = updateProp(view, providerData, def, 0, v0, changes);
        }
        ;
        if (bindLen > 1 && checkBinding$1(view, def, 1, v1)) {
            changed = true;
            changes = updateProp(view, providerData, def, 1, v1, changes);
        }
        ;
        if (bindLen > 2 && checkBinding$1(view, def, 2, v2)) {
            changed = true;
            changes = updateProp(view, providerData, def, 2, v2, changes);
        }
        ;
        if (bindLen > 3 && checkBinding$1(view, def, 3, v3)) {
            changed = true;
            changes = updateProp(view, providerData, def, 3, v3, changes);
        }
        ;
        if (bindLen > 4 && checkBinding$1(view, def, 4, v4)) {
            changed = true;
            changes = updateProp(view, providerData, def, 4, v4, changes);
        }
        ;
        if (bindLen > 5 && checkBinding$1(view, def, 5, v5)) {
            changed = true;
            changes = updateProp(view, providerData, def, 5, v5, changes);
        }
        ;
        if (bindLen > 6 && checkBinding$1(view, def, 6, v6)) {
            changed = true;
            changes = updateProp(view, providerData, def, 6, v6, changes);
        }
        ;
        if (bindLen > 7 && checkBinding$1(view, def, 7, v7)) {
            changed = true;
            changes = updateProp(view, providerData, def, 7, v7, changes);
        }
        ;
        if (bindLen > 8 && checkBinding$1(view, def, 8, v8)) {
            changed = true;
            changes = updateProp(view, providerData, def, 8, v8, changes);
        }
        ;
        if (bindLen > 9 && checkBinding$1(view, def, 9, v9)) {
            changed = true;
            changes = updateProp(view, providerData, def, 9, v9, changes);
        }
        ;
        if (changes) {
            directive.ngOnChanges(changes);
        }
        if (view.state & ViewState.FirstCheck && def.flags & NodeFlags.OnInit) {
            directive.ngOnInit();
        }
        if (def.flags & NodeFlags.DoCheck) {
            directive.ngDoCheck();
        }
        return changed;
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} values
     * @return {?}
     */
    function checkAndUpdateDirectiveDynamic(view, def, values) {
        var /** @type {?} */providerData = asProviderData(view, def.index);
        var /** @type {?} */directive = providerData.instance;
        var /** @type {?} */changed = false;
        var /** @type {?} */changes = void 0;
        for (var /** @type {?} */i = 0; i < values.length; i++) {
            if (checkBinding$1(view, def, i, values[i])) {
                changed = true;
                changes = updateProp(view, providerData, def, i, values[i], changes);
            }
        }
        if (changes) {
            directive.ngOnChanges(changes);
        }
        if (view.state & ViewState.FirstCheck && def.flags & NodeFlags.OnInit) {
            directive.ngOnInit();
        }
        if (def.flags & NodeFlags.DoCheck) {
            directive.ngDoCheck();
        }
        return changed;
    }
    /**
     * @param {?} view
     * @param {?} def
     * @return {?}
     */
    function _createProviderInstance(view, def) {
        // private services can see other private services
        var /** @type {?} */allowPrivateServices = (def.flags & NodeFlags.PrivateProvider) > 0;
        var /** @type {?} */providerDef = def.provider;
        var /** @type {?} */injectable = void 0;
        switch (providerDef.type) {
            case ProviderType.Class:
                injectable = createClass(view, def.parent, allowPrivateServices, providerDef.value, providerDef.deps);
                break;
            case ProviderType.Factory:
                injectable = callFactory(view, def.parent, allowPrivateServices, providerDef.value, providerDef.deps);
                break;
            case ProviderType.UseExisting:
                injectable = resolveDep(view, def.parent, allowPrivateServices, providerDef.deps[0]);
                break;
            case ProviderType.Value:
                injectable = providerDef.value;
                break;
        }
        return injectable;
    }
    /**
     * @param {?} view
     * @param {?} elDef
     * @param {?} allowPrivateServices
     * @param {?} ctor
     * @param {?} deps
     * @return {?}
     */
    function createClass(view, elDef, allowPrivateServices, ctor, deps) {
        var /** @type {?} */len = deps.length;
        var /** @type {?} */injectable = void 0;
        switch (len) {
            case 0:
                injectable = new ctor();
                break;
            case 1:
                injectable = new ctor(resolveDep(view, elDef, allowPrivateServices, deps[0]));
                break;
            case 2:
                injectable = new ctor(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]));
                break;
            case 3:
                injectable = new ctor(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]), resolveDep(view, elDef, allowPrivateServices, deps[2]));
                break;
            default:
                var /** @type {?} */depValues = new Array(len);
                for (var /** @type {?} */i = 0; i < len; i++) {
                    depValues[i] = resolveDep(view, elDef, allowPrivateServices, deps[i]);
                }
                injectable = new (Function.prototype.bind.apply(ctor, [null].concat(depValues)))();
        }
        return injectable;
    }
    /**
     * @param {?} view
     * @param {?} elDef
     * @param {?} allowPrivateServices
     * @param {?} factory
     * @param {?} deps
     * @return {?}
     */
    function callFactory(view, elDef, allowPrivateServices, factory, deps) {
        var /** @type {?} */len = deps.length;
        var /** @type {?} */injectable = void 0;
        switch (len) {
            case 0:
                injectable = factory();
                break;
            case 1:
                injectable = factory(resolveDep(view, elDef, allowPrivateServices, deps[0]));
                break;
            case 2:
                injectable = factory(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]));
                break;
            case 3:
                injectable = factory(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]), resolveDep(view, elDef, allowPrivateServices, deps[2]));
                break;
            default:
                var /** @type {?} */depValues = Array(len);
                for (var /** @type {?} */i = 0; i < len; i++) {
                    depValues[i] = resolveDep(view, elDef, allowPrivateServices, deps[i]);
                }
                injectable = factory.apply(undefined, _toConsumableArray(depValues));
        }
        return injectable;
    }
    /**
     * @param {?} view
     * @param {?} elDef
     * @param {?} allowPrivateServices
     * @param {?} depDef
     * @param {?=} notFoundValue
     * @return {?}
     */
    function resolveDep(view, elDef, allowPrivateServices, depDef) {
        var notFoundValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Injector.THROW_IF_NOT_FOUND;

        if (depDef.flags & DepFlags.Value) {
            return depDef.token;
        }
        var /** @type {?} */startView = view;
        if (depDef.flags & DepFlags.Optional) {
            notFoundValue = null;
        }
        var /** @type {?} */tokenKey = depDef.tokenKey;
        if (depDef.flags & DepFlags.SkipSelf) {
            allowPrivateServices = false;
            elDef = elDef.parent;
        }
        while (view) {
            if (elDef) {
                switch (tokenKey) {
                    case RendererV1TokenKey:
                        {
                            var /** @type {?} */compView = findCompView(view, elDef, allowPrivateServices);
                            return createRendererV1(compView);
                        }
                    case RendererV2TokenKey:
                        {
                            var /** @type {?} */_compView = findCompView(view, elDef, allowPrivateServices);
                            return _compView.renderer;
                        }
                    case ElementRefTokenKey:
                        return new ElementRef(asElementData(view, elDef.index).renderElement);
                    case ViewContainerRefTokenKey:
                        return createViewContainerRef(view, elDef);
                    case TemplateRefTokenKey:
                        {
                            if (elDef.element.template) {
                                return createTemplateRef(view, elDef);
                            }
                            break;
                        }
                    case ChangeDetectorRefTokenKey:
                        {
                            var /** @type {?} */cdView = findCompView(view, elDef, allowPrivateServices);
                            return createChangeDetectorRef(cdView);
                        }
                    case InjectorRefTokenKey:
                        return createInjector(view, elDef);
                    default:
                        var /** @type {?} */_providerDef = (allowPrivateServices ? elDef.element.allProviders : elDef.element.publicProviders)[tokenKey];
                        if (_providerDef) {
                            var /** @type {?} */providerData = asProviderData(view, _providerDef.index);
                            if (providerData.instance === NOT_CREATED) {
                                providerData.instance = _createProviderInstance(view, _providerDef);
                            }
                            return providerData.instance;
                        }
                }
            }
            allowPrivateServices = isComponentView(view);
            elDef = viewParentEl(view);
            view = view.parent;
        }
        return startView.root.injector.get(depDef.token, notFoundValue);
    }
    /**
     * @param {?} view
     * @param {?} elDef
     * @param {?} allowPrivateServices
     * @return {?}
     */
    function findCompView(view, elDef, allowPrivateServices) {
        var /** @type {?} */compView = void 0;
        if (allowPrivateServices) {
            compView = asElementData(view, elDef.index).componentView;
        } else {
            compView = view;
            while (compView.parent && !isComponentView(compView)) {
                compView = compView.parent;
            }
        }
        return compView;
    }
    /**
     * @param {?} view
     * @param {?} providerData
     * @param {?} def
     * @param {?} bindingIdx
     * @param {?} value
     * @param {?} changes
     * @return {?}
     */
    function updateProp(view, providerData, def, bindingIdx, value, changes) {
        if (def.flags & NodeFlags.IsComponent) {
            var /** @type {?} */compView = asElementData(view, def.parent.index).componentView;
            if (compView.def.flags & ViewFlags.OnPush) {
                compView.state |= ViewState.ChecksEnabled;
            }
        }
        var /** @type {?} */binding = def.bindings[bindingIdx];
        var /** @type {?} */propName = binding.name;
        // Note: This is still safe with Closure Compiler as
        // the user passed in the property name as an object has to `providerDef`,
        // so Closure Compiler will have renamed the property correctly already.
        providerData.instance[propName] = value;
        if (def.flags & NodeFlags.OnChanges) {
            changes = changes || {};
            var /** @type {?} */oldValue = view.oldValues[def.bindingIndex + bindingIdx];
            var /** @type {?} */_binding = def.bindings[bindingIdx];
            changes[_binding.nonMinifiedName] = new SimpleChange(oldValue, value, (view.state & ViewState.FirstCheck) !== 0);
        }
        view.oldValues[def.bindingIndex + bindingIdx] = value;
        return changes;
    }
    /**
     * @param {?} view
     * @param {?} lifecycles
     * @return {?}
     */
    function callLifecycleHooksChildrenFirst(view, lifecycles) {
        if (!(view.def.nodeFlags & lifecycles)) {
            return;
        }
        var /** @type {?} */len = view.def.nodes.length;
        for (var /** @type {?} */i = 0; i < len; i++) {
            // We use the reverse child oreder to call providers of children first.
            var /** @type {?} */nodeDef = view.def.reverseChildNodes[i];
            var /** @type {?} */nodeIndex = nodeDef.index;
            if (nodeDef.flags & lifecycles) {
                // a leaf
                Services.setCurrentNode(view, nodeIndex);
                callProviderLifecycles(asProviderData(view, nodeIndex).instance, nodeDef.flags & lifecycles);
            } else if ((nodeDef.childFlags & lifecycles) === 0) {
                // a parent with leafs
                // no child matches one of the lifecycles,
                // then skip the children
                i += nodeDef.childCount;
            }
        }
    }
    /**
     * @param {?} provider
     * @param {?} lifecycles
     * @return {?}
     */
    function callProviderLifecycles(provider, lifecycles) {
        if (lifecycles & NodeFlags.AfterContentInit) {
            provider.ngAfterContentInit();
        }
        if (lifecycles & NodeFlags.AfterContentChecked) {
            provider.ngAfterContentChecked();
        }
        if (lifecycles & NodeFlags.AfterViewInit) {
            provider.ngAfterViewInit();
        }
        if (lifecycles & NodeFlags.AfterViewChecked) {
            provider.ngAfterViewChecked();
        }
        if (lifecycles & NodeFlags.OnDestroy) {
            provider.ngOnDestroy();
        }
    }

    /**
     * @param {?} argCount
     * @return {?}
     */
    function purePipeDef(argCount) {
        // argCount + 1 to include the pipe as first arg
        return _pureExpressionDef(PureExpressionType.Pipe, new Array(argCount + 1));
    }
    /**
     * @param {?} argCount
     * @return {?}
     */
    function pureArrayDef(argCount) {
        return _pureExpressionDef(PureExpressionType.Array, new Array(argCount));
    }
    /**
     * @param {?} propertyNames
     * @return {?}
     */
    function pureObjectDef(propertyNames) {
        return _pureExpressionDef(PureExpressionType.Object, propertyNames);
    }
    /**
     * @param {?} type
     * @param {?} propertyNames
     * @return {?}
     */
    function _pureExpressionDef(type, propertyNames) {
        var /** @type {?} */bindings = new Array(propertyNames.length);
        for (var /** @type {?} */i = 0; i < propertyNames.length; i++) {
            var /** @type {?} */prop = propertyNames[i];
            bindings[i] = {
                type: BindingType.PureExpressionProperty,
                name: prop,
                ns: undefined,
                nonMinifiedName: prop,
                securityContext: undefined,
                suffix: undefined
            };
        }
        return {
            type: NodeType.PureExpression,
            // will bet set by the view definition
            index: undefined,
            reverseChildIndex: undefined,
            parent: undefined,
            renderParent: undefined,
            bindingIndex: undefined,
            outputIndex: undefined,
            // regular values
            flags: 0,
            childFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {},
            ngContentIndex: undefined,
            childCount: 0, bindings: bindings,
            outputs: [],
            element: undefined,
            provider: undefined,
            text: undefined,
            pureExpression: { type: type },
            query: undefined,
            ngContent: undefined
        };
    }
    /**
     * @param {?} view
     * @param {?} def
     * @return {?}
     */
    function createPureExpression(view, def) {
        return { value: undefined };
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} v0
     * @param {?} v1
     * @param {?} v2
     * @param {?} v3
     * @param {?} v4
     * @param {?} v5
     * @param {?} v6
     * @param {?} v7
     * @param {?} v8
     * @param {?} v9
     * @return {?}
     */
    function checkAndUpdatePureExpressionInline(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        var /** @type {?} */bindings = def.bindings;
        var /** @type {?} */changed = false;
        var /** @type {?} */bindLen = bindings.length;
        if (bindLen > 0 && checkAndUpdateBinding(view, def, 0, v0)) changed = true;
        if (bindLen > 1 && checkAndUpdateBinding(view, def, 1, v1)) changed = true;
        if (bindLen > 2 && checkAndUpdateBinding(view, def, 2, v2)) changed = true;
        if (bindLen > 3 && checkAndUpdateBinding(view, def, 3, v3)) changed = true;
        if (bindLen > 4 && checkAndUpdateBinding(view, def, 4, v4)) changed = true;
        if (bindLen > 5 && checkAndUpdateBinding(view, def, 5, v5)) changed = true;
        if (bindLen > 6 && checkAndUpdateBinding(view, def, 6, v6)) changed = true;
        if (bindLen > 7 && checkAndUpdateBinding(view, def, 7, v7)) changed = true;
        if (bindLen > 8 && checkAndUpdateBinding(view, def, 8, v8)) changed = true;
        if (bindLen > 9 && checkAndUpdateBinding(view, def, 9, v9)) changed = true;
        if (changed) {
            var /** @type {?} */data = asPureExpressionData(view, def.index);
            var /** @type {?} */value = void 0;
            switch (def.pureExpression.type) {
                case PureExpressionType.Array:
                    value = new Array(bindings.length);
                    if (bindLen > 0) value[0] = v0;
                    if (bindLen > 1) value[1] = v1;
                    if (bindLen > 2) value[2] = v2;
                    if (bindLen > 3) value[3] = v3;
                    if (bindLen > 4) value[4] = v4;
                    if (bindLen > 5) value[5] = v5;
                    if (bindLen > 6) value[6] = v6;
                    if (bindLen > 7) value[7] = v7;
                    if (bindLen > 8) value[8] = v8;
                    if (bindLen > 9) value[9] = v9;
                    break;
                case PureExpressionType.Object:
                    value = {};
                    if (bindLen > 0) value[bindings[0].name] = v0;
                    if (bindLen > 1) value[bindings[1].name] = v1;
                    if (bindLen > 2) value[bindings[2].name] = v2;
                    if (bindLen > 3) value[bindings[3].name] = v3;
                    if (bindLen > 4) value[bindings[4].name] = v4;
                    if (bindLen > 5) value[bindings[5].name] = v5;
                    if (bindLen > 6) value[bindings[6].name] = v6;
                    if (bindLen > 7) value[bindings[7].name] = v7;
                    if (bindLen > 8) value[bindings[8].name] = v8;
                    if (bindLen > 9) value[bindings[9].name] = v9;
                    break;
                case PureExpressionType.Pipe:
                    var /** @type {?} */pipe = v0;
                    switch (bindLen) {
                        case 1:
                            value = pipe.transform(v0);
                            break;
                        case 2:
                            value = pipe.transform(v1);
                            break;
                        case 3:
                            value = pipe.transform(v1, v2);
                            break;
                        case 4:
                            value = pipe.transform(v1, v2, v3);
                            break;
                        case 5:
                            value = pipe.transform(v1, v2, v3, v4);
                            break;
                        case 6:
                            value = pipe.transform(v1, v2, v3, v4, v5);
                            break;
                        case 7:
                            value = pipe.transform(v1, v2, v3, v4, v5, v6);
                            break;
                        case 8:
                            value = pipe.transform(v1, v2, v3, v4, v5, v6, v7);
                            break;
                        case 9:
                            value = pipe.transform(v1, v2, v3, v4, v5, v6, v7, v8);
                            break;
                        case 10:
                            value = pipe.transform(v1, v2, v3, v4, v5, v6, v7, v8, v9);
                            break;
                    }
                    break;
            }
            data.value = value;
        }
        return changed;
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} values
     * @return {?}
     */
    function checkAndUpdatePureExpressionDynamic(view, def, values) {
        var /** @type {?} */bindings = def.bindings;
        var /** @type {?} */changed = false;
        for (var /** @type {?} */i = 0; i < values.length; i++) {
            // Note: We need to loop over all values, so that
            // the old values are updates as well!
            if (checkAndUpdateBinding(view, def, i, values[i])) {
                changed = true;
            }
        }
        if (changed) {
            var /** @type {?} */data = asPureExpressionData(view, def.index);
            var /** @type {?} */value = void 0;
            switch (def.pureExpression.type) {
                case PureExpressionType.Array:
                    value = values;
                    break;
                case PureExpressionType.Object:
                    value = {};
                    for (var /** @type {?} */_i3 = 0; _i3 < values.length; _i3++) {
                        value[bindings[_i3].name] = values[_i3];
                    }
                    break;
                case PureExpressionType.Pipe:
                    var /** @type {?} */pipe = values[0];
                    var /** @type {?} */params = values.slice(1);
                    value = pipe.transform.apply(pipe, _toConsumableArray(params));
                    break;
            }
            data.value = value;
        }
        return changed;
    }

    /**
     * @param {?} flags
     * @param {?} id
     * @param {?} bindings
     * @return {?}
     */
    function queryDef(flags, id, bindings) {
        var /** @type {?} */bindingDefs = [];
        for (var /** @type {?} */propName in bindings) {
            var /** @type {?} */bindingType = bindings[propName];
            bindingDefs.push({ propName: propName, bindingType: bindingType });
        }
        return {
            type: NodeType.Query,
            // will bet set by the view definition
            index: undefined,
            reverseChildIndex: undefined,
            parent: undefined,
            renderParent: undefined,
            bindingIndex: undefined,
            outputIndex: undefined,
            // regular values
            flags: flags,
            childFlags: 0,
            childMatchedQueries: 0,
            ngContentIndex: undefined,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {},
            childCount: 0,
            bindings: [],
            outputs: [],
            element: undefined,
            provider: undefined,
            text: undefined,
            pureExpression: undefined,
            query: { id: id, filterId: filterQueryId(id), bindings: bindingDefs },
            ngContent: undefined
        };
    }
    /**
     * @return {?}
     */
    function createQuery() {
        return new QueryList();
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function dirtyParentQueries(view) {
        var /** @type {?} */queryIds = view.def.nodeMatchedQueries;
        while (view.parent && isEmbeddedView(view)) {
            var /** @type {?} */tplDef = view.parentNodeDef;
            view = view.parent;
            // content queries
            var /** @type {?} */end = tplDef.index + tplDef.childCount;
            for (var /** @type {?} */i = 0; i <= end; i++) {
                var /** @type {?} */nodeDef = view.def.nodes[i];
                if (nodeDef.flags & NodeFlags.HasContentQuery && nodeDef.flags & NodeFlags.HasDynamicQuery && (nodeDef.query.filterId & queryIds) === nodeDef.query.filterId) {
                    asQueryList(view, i).setDirty();
                }
                if (nodeDef.type === NodeType.Element && i + nodeDef.childCount < tplDef.index || !(nodeDef.childFlags & NodeFlags.HasContentQuery) || !(nodeDef.childFlags & NodeFlags.HasDynamicQuery)) {
                    // skip elements that don't contain the template element or no query.
                    i += nodeDef.childCount;
                }
            }
        }
        // view queries
        if (view.def.nodeFlags & NodeFlags.HasViewQuery) {
            for (var /** @type {?} */_i4 = 0; _i4 < view.def.nodes.length; _i4++) {
                var /** @type {?} */_nodeDef = view.def.nodes[_i4];
                if (_nodeDef.flags & NodeFlags.HasViewQuery && _nodeDef.flags & NodeFlags.HasDynamicQuery) {
                    asQueryList(view, _i4).setDirty();
                }
                // only visit the root nodes
                _i4 += _nodeDef.childCount;
            }
        }
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @return {?}
     */
    function checkAndUpdateQuery(view, nodeDef) {
        var /** @type {?} */queryList = asQueryList(view, nodeDef.index);
        if (!queryList.dirty) {
            return;
        }
        var /** @type {?} */directiveInstance = void 0;
        var /** @type {?} */newValues = void 0;
        if (nodeDef.flags & NodeFlags.HasContentQuery) {
            var /** @type {?} */_elementDef = nodeDef.parent.parent;
            newValues = calcQueryValues(view, _elementDef.index, _elementDef.index + _elementDef.childCount, nodeDef.query, []);
            directiveInstance = asProviderData(view, nodeDef.parent.index).instance;
        } else if (nodeDef.flags & NodeFlags.HasViewQuery) {
            newValues = calcQueryValues(view, 0, view.def.nodes.length - 1, nodeDef.query, []);
            directiveInstance = view.component;
        }
        queryList.reset(newValues);
        var /** @type {?} */bindings = nodeDef.query.bindings;
        var /** @type {?} */notify = false;
        for (var /** @type {?} */i = 0; i < bindings.length; i++) {
            var /** @type {?} */binding = bindings[i];
            var /** @type {?} */boundValue = void 0;
            switch (binding.bindingType) {
                case QueryBindingType.First:
                    boundValue = queryList.first;
                    break;
                case QueryBindingType.All:
                    boundValue = queryList;
                    notify = true;
                    break;
            }
            directiveInstance[binding.propName] = boundValue;
        }
        if (notify) {
            queryList.notifyOnChanges();
        }
    }
    /**
     * @param {?} view
     * @param {?} startIndex
     * @param {?} endIndex
     * @param {?} queryDef
     * @param {?} values
     * @return {?}
     */
    function calcQueryValues(view, startIndex, endIndex, queryDef, values) {
        for (var /** @type {?} */i = startIndex; i <= endIndex; i++) {
            var /** @type {?} */nodeDef = view.def.nodes[i];
            var /** @type {?} */valueType = nodeDef.matchedQueries[queryDef.id];
            if (valueType != null) {
                values.push(getQueryValue(view, nodeDef, valueType));
            }
            if (nodeDef.type === NodeType.Element && nodeDef.element.template && (nodeDef.element.template.nodeMatchedQueries & queryDef.filterId) === queryDef.filterId) {
                // check embedded views that were attached at the place of their template.
                var /** @type {?} */elementData = asElementData(view, i);
                var /** @type {?} */embeddedViews = elementData.embeddedViews;
                if (embeddedViews) {
                    for (var /** @type {?} */k = 0; k < embeddedViews.length; k++) {
                        var /** @type {?} */embeddedView = embeddedViews[k];
                        var /** @type {?} */dvc = declaredViewContainer(embeddedView);
                        if (dvc && dvc === elementData) {
                            calcQueryValues(embeddedView, 0, embeddedView.def.nodes.length - 1, queryDef, values);
                        }
                    }
                }
                var /** @type {?} */projectedViews = elementData.projectedViews;
                if (projectedViews) {
                    for (var /** @type {?} */_k2 = 0; _k2 < projectedViews.length; _k2++) {
                        var /** @type {?} */projectedView = projectedViews[_k2];
                        calcQueryValues(projectedView, 0, projectedView.def.nodes.length - 1, queryDef, values);
                    }
                }
            }
            if ((nodeDef.childMatchedQueries & queryDef.filterId) !== queryDef.filterId) {
                // if no child matches the query, skip the children.
                i += nodeDef.childCount;
            }
        }
        return values;
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} queryValueType
     * @return {?}
     */
    function getQueryValue(view, nodeDef, queryValueType) {
        if (queryValueType != null) {
            // a match
            var /** @type {?} */value = void 0;
            switch (queryValueType) {
                case QueryValueType.RenderElement:
                    value = asElementData(view, nodeDef.index).renderElement;
                    break;
                case QueryValueType.ElementRef:
                    value = new ElementRef(asElementData(view, nodeDef.index).renderElement);
                    break;
                case QueryValueType.TemplateRef:
                    value = createTemplateRef(view, nodeDef);
                    break;
                case QueryValueType.ViewContainerRef:
                    value = createViewContainerRef(view, nodeDef);
                    break;
                case QueryValueType.Provider:
                    value = asProviderData(view, nodeDef.index).instance;
                    break;
            }
            return value;
        }
    }

    /**
     * @param {?} ngContentIndex
     * @param {?} constants
     * @return {?}
     */
    function textDef(ngContentIndex, constants) {
        // skip the call to sliceErrorStack itself + the call to this function.
        var /** @type {?} */source = isDevMode() ? sliceErrorStack(2, 3) : '';
        var /** @type {?} */bindings = new Array(constants.length - 1);
        for (var /** @type {?} */i = 1; i < constants.length; i++) {
            bindings[i - 1] = {
                type: BindingType.TextInterpolation,
                name: undefined,
                ns: undefined,
                nonMinifiedName: undefined,
                securityContext: undefined,
                suffix: constants[i]
            };
        }
        return {
            type: NodeType.Text,
            // will bet set by the view definition
            index: undefined,
            reverseChildIndex: undefined,
            parent: undefined,
            renderParent: undefined,
            bindingIndex: undefined,
            outputIndex: undefined,
            // regular values
            flags: 0,
            childFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {}, ngContentIndex: ngContentIndex,
            childCount: 0, bindings: bindings,
            outputs: [],
            element: undefined,
            provider: undefined,
            text: { prefix: constants[0], source: source },
            pureExpression: undefined,
            query: undefined,
            ngContent: undefined
        };
    }
    /**
     * @param {?} view
     * @param {?} renderHost
     * @param {?} def
     * @return {?}
     */
    function createText(view, renderHost, def) {
        var /** @type {?} */renderNode = void 0;
        var /** @type {?} */renderer = view.renderer;
        renderNode = renderer.createText(def.text.prefix);
        var /** @type {?} */parentEl = getParentRenderElement(view, renderHost, def);
        if (parentEl) {
            renderer.appendChild(parentEl, renderNode);
        }
        return { renderText: renderNode };
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} v0
     * @param {?} v1
     * @param {?} v2
     * @param {?} v3
     * @param {?} v4
     * @param {?} v5
     * @param {?} v6
     * @param {?} v7
     * @param {?} v8
     * @param {?} v9
     * @return {?}
     */
    function checkAndUpdateTextInline(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        var /** @type {?} */changed = false;
        var /** @type {?} */bindings = def.bindings;
        var /** @type {?} */bindLen = bindings.length;
        if (bindLen > 0 && checkAndUpdateBinding(view, def, 0, v0)) changed = true;
        if (bindLen > 1 && checkAndUpdateBinding(view, def, 1, v1)) changed = true;
        if (bindLen > 2 && checkAndUpdateBinding(view, def, 2, v2)) changed = true;
        if (bindLen > 3 && checkAndUpdateBinding(view, def, 3, v3)) changed = true;
        if (bindLen > 4 && checkAndUpdateBinding(view, def, 4, v4)) changed = true;
        if (bindLen > 5 && checkAndUpdateBinding(view, def, 5, v5)) changed = true;
        if (bindLen > 6 && checkAndUpdateBinding(view, def, 6, v6)) changed = true;
        if (bindLen > 7 && checkAndUpdateBinding(view, def, 7, v7)) changed = true;
        if (bindLen > 8 && checkAndUpdateBinding(view, def, 8, v8)) changed = true;
        if (bindLen > 9 && checkAndUpdateBinding(view, def, 9, v9)) changed = true;
        if (changed) {
            var /** @type {?} */value = def.text.prefix;
            if (bindLen > 0) value += _addInterpolationPart(v0, bindings[0]);
            if (bindLen > 1) value += _addInterpolationPart(v1, bindings[1]);
            if (bindLen > 2) value += _addInterpolationPart(v2, bindings[2]);
            if (bindLen > 3) value += _addInterpolationPart(v3, bindings[3]);
            if (bindLen > 4) value += _addInterpolationPart(v4, bindings[4]);
            if (bindLen > 5) value += _addInterpolationPart(v5, bindings[5]);
            if (bindLen > 6) value += _addInterpolationPart(v6, bindings[6]);
            if (bindLen > 7) value += _addInterpolationPart(v7, bindings[7]);
            if (bindLen > 8) value += _addInterpolationPart(v8, bindings[8]);
            if (bindLen > 9) value += _addInterpolationPart(v9, bindings[9]);
            var /** @type {?} */_renderNode = asTextData(view, def.index).renderText;
            view.renderer.setValue(_renderNode, value);
        }
        return changed;
    }
    /**
     * @param {?} view
     * @param {?} def
     * @param {?} values
     * @return {?}
     */
    function checkAndUpdateTextDynamic(view, def, values) {
        var /** @type {?} */bindings = def.bindings;
        var /** @type {?} */changed = false;
        for (var /** @type {?} */i = 0; i < values.length; i++) {
            // Note: We need to loop over all values, so that
            // the old values are updates as well!
            if (checkAndUpdateBinding(view, def, i, values[i])) {
                changed = true;
            }
        }
        if (changed) {
            var /** @type {?} */value = '';
            for (var /** @type {?} */_i5 = 0; _i5 < values.length; _i5++) {
                value = value + _addInterpolationPart(values[_i5], bindings[_i5]);
            }
            value = def.text.prefix + value;
            var /** @type {?} */_renderNode2 = asTextData(view, def.index).renderText;
            view.renderer.setValue(_renderNode2, value);
        }
        return changed;
    }
    /**
     * @param {?} value
     * @param {?} binding
     * @return {?}
     */
    function _addInterpolationPart(value, binding) {
        var /** @type {?} */valueStr = value != null ? value.toString() : '';
        return valueStr + binding.suffix;
    }

    var /** @type {?} */NOOP$1 = function NOOP$1() {
        return undefined;
    };
    /**
     * @param {?} flags
     * @param {?} nodes
     * @param {?=} updateDirectives
     * @param {?=} updateRenderer
     * @return {?}
     */
    function viewDef(flags, nodes, updateDirectives, updateRenderer) {
        // clone nodes and set auto calculated values
        if (nodes.length === 0) {
            throw new Error('Illegal State: Views without nodes are not allowed!');
        }
        var /** @type {?} */reverseChildNodes = new Array(nodes.length);
        var /** @type {?} */viewBindingCount = 0;
        var /** @type {?} */viewDisposableCount = 0;
        var /** @type {?} */viewNodeFlags = 0;
        var /** @type {?} */viewMatchedQueries = 0;
        var /** @type {?} */currentParent = null;
        var /** @type {?} */currentElementHasPublicProviders = false;
        var /** @type {?} */currentElementHasPrivateProviders = false;
        var /** @type {?} */lastRenderRootNode = null;
        for (var /** @type {?} */i = 0; i < nodes.length; i++) {
            while (currentParent && i > currentParent.index + currentParent.childCount) {
                var /** @type {?} */newParent = currentParent.parent;
                if (newParent) {
                    newParent.childFlags |= currentParent.childFlags;
                    newParent.childMatchedQueries |= currentParent.childMatchedQueries;
                }
                currentParent = newParent;
            }
            var /** @type {?} */node = nodes[i];
            node.index = i;
            node.parent = currentParent;
            node.bindingIndex = viewBindingCount;
            node.outputIndex = viewDisposableCount;
            node.reverseChildIndex = calculateReverseChildIndex(currentParent, i, node.childCount, nodes.length);
            // renderParent needs to account for ng-container!
            var /** @type {?} */currentRenderParent = void 0;
            if (currentParent && currentParent.type === NodeType.Element && !currentParent.element.name) {
                currentRenderParent = currentParent.renderParent;
            } else {
                currentRenderParent = currentParent;
            }
            node.renderParent = currentRenderParent;
            if (node.element) {
                var /** @type {?} */elDef = node.element;
                elDef.publicProviders = currentParent ? currentParent.element.publicProviders : Object.create(null);
                elDef.allProviders = elDef.publicProviders;
                // Note: We assume that all providers of an element are before any child element!
                currentElementHasPublicProviders = false;
                currentElementHasPrivateProviders = false;
            }
            reverseChildNodes[node.reverseChildIndex] = node;
            validateNode(currentParent, node, nodes.length);
            viewNodeFlags |= node.flags;
            viewMatchedQueries |= node.matchedQueryIds;
            if (node.element && node.element.template) {
                viewMatchedQueries |= node.element.template.nodeMatchedQueries;
            }
            if (currentParent) {
                currentParent.childFlags |= node.flags;
                currentParent.childMatchedQueries |= node.matchedQueryIds;
                if (node.element && node.element.template) {
                    currentParent.childMatchedQueries |= node.element.template.nodeMatchedQueries;
                }
            }
            viewBindingCount += node.bindings.length;
            viewDisposableCount += node.outputs.length;
            if (!currentRenderParent && (node.type === NodeType.Element || node.type === NodeType.Text)) {
                lastRenderRootNode = node;
            }
            if (node.type === NodeType.Provider || node.type === NodeType.Directive) {
                if (!currentElementHasPublicProviders) {
                    currentElementHasPublicProviders = true;
                    // Use protoypical inheritance to not get O(n^2) complexity...
                    currentParent.element.publicProviders = Object.create(currentParent.element.publicProviders);
                    currentParent.element.allProviders = currentParent.element.publicProviders;
                }
                var /** @type {?} */isPrivateService = (node.flags & NodeFlags.PrivateProvider) !== 0;
                var /** @type {?} */isComponent = (node.flags & NodeFlags.IsComponent) !== 0;
                if (!isPrivateService || isComponent) {
                    currentParent.element.publicProviders[node.provider.tokenKey] = node;
                } else {
                    if (!currentElementHasPrivateProviders) {
                        currentElementHasPrivateProviders = true;
                        // Use protoypical inheritance to not get O(n^2) complexity...
                        currentParent.element.allProviders = Object.create(currentParent.element.publicProviders);
                    }
                    currentParent.element.allProviders[node.provider.tokenKey] = node;
                }
                if (isComponent) {
                    currentParent.element.componentProvider = node;
                }
            }
            if (node.childCount) {
                currentParent = node;
            }
        }
        while (currentParent) {
            var /** @type {?} */_newParent = currentParent.parent;
            if (_newParent) {
                _newParent.childFlags |= currentParent.childFlags;
                _newParent.childMatchedQueries |= currentParent.childMatchedQueries;
            }
            currentParent = _newParent;
        }
        var /** @type {?} */handleEvent = function handleEvent(view, nodeIndex, eventName, event) {
            return nodes[nodeIndex].element.handleEvent(view, eventName, event);
        };
        return {
            nodeFlags: viewNodeFlags,
            nodeMatchedQueries: viewMatchedQueries, flags: flags,
            nodes: nodes, reverseChildNodes: reverseChildNodes,
            updateDirectives: updateDirectives || NOOP$1,
            updateRenderer: updateRenderer || NOOP$1,
            handleEvent: handleEvent || NOOP$1,
            bindingCount: viewBindingCount,
            outputCount: viewDisposableCount, lastRenderRootNode: lastRenderRootNode
        };
    }
    /**
     * @param {?} currentParent
     * @param {?} i
     * @param {?} childCount
     * @param {?} nodeCount
     * @return {?}
     */
    function calculateReverseChildIndex(currentParent, i, childCount, nodeCount) {
        // Notes about reverse child order:
        // - Every node is directly before its children, in dfs and reverse child order.
        // - node.childCount contains all children, in dfs and reverse child order.
        // - In dfs order, every node is before its first child
        // - In reverse child order, every node is before its last child
        // Algorithm, main idea:
        // - In reverse child order, the ranges for each child + its transitive children are mirrored
        //   regarding their position inside of their parent
        // Visualization:
        // Given the following tree:
        // Nodes: n0
        //             n1         n2
        //                n11 n12    n21 n22
        // dfs:    0   1   2   3  4   5   6
        // result: 0   4   6   5  1   3   2
        //
        // Example:
        // Current node = 1
        // 1) lastChildIndex = 3
        // 2) lastChildOffsetRelativeToParentInDfsOrder = 2
        // 3) parentEndIndexInReverseChildOrder = 6
        // 4) result = 4
        var /** @type {?} */lastChildOffsetRelativeToParentInDfsOrder = void 0;
        var /** @type {?} */parentEndIndexInReverseChildOrder = void 0;
        if (currentParent) {
            var /** @type {?} */lastChildIndex = i + childCount;
            lastChildOffsetRelativeToParentInDfsOrder = lastChildIndex - currentParent.index - 1;
            parentEndIndexInReverseChildOrder = currentParent.reverseChildIndex + currentParent.childCount;
        } else {
            lastChildOffsetRelativeToParentInDfsOrder = i + childCount;
            parentEndIndexInReverseChildOrder = nodeCount - 1;
        }
        return parentEndIndexInReverseChildOrder - lastChildOffsetRelativeToParentInDfsOrder;
    }
    /**
     * @param {?} parent
     * @param {?} node
     * @param {?} nodeCount
     * @return {?}
     */
    function validateNode(parent, node, nodeCount) {
        var /** @type {?} */template = node.element && node.element.template;
        if (template) {
            if (template.lastRenderRootNode && template.lastRenderRootNode.flags & NodeFlags.HasEmbeddedViews) {
                throw new Error('Illegal State: Last root node of a template can\'t have embedded views, at index ' + node.index + '!');
            }
        }
        if (node.type === NodeType.Provider || node.type === NodeType.Directive) {
            var /** @type {?} */parentType = parent ? parent.type : null;
            if (parentType !== NodeType.Element) {
                throw new Error('Illegal State: Provider/Directive nodes need to be children of elements or anchors, at index ' + node.index + '!');
            }
        }
        if (node.query) {
            if (node.flags & NodeFlags.HasContentQuery && (!parent || parent.type !== NodeType.Directive)) {
                throw new Error('Illegal State: Content Query nodes need to be children of directives, at index ' + node.index + '!');
            }
            if (node.flags & NodeFlags.HasViewQuery && parent) {
                throw new Error('Illegal State: View Query nodes have to be top level nodes, at index ' + node.index + '!');
            }
        }
        if (node.childCount) {
            var /** @type {?} */parentEnd = parent ? parent.index + parent.childCount : nodeCount - 1;
            if (node.index <= parentEnd && node.index + node.childCount > parentEnd) {
                throw new Error('Illegal State: childCount of node leads outside of parent, at index ' + node.index + '!');
            }
        }
    }
    /**
     * @param {?} parent
     * @param {?} anchorDef
     * @param {?=} context
     * @return {?}
     */
    function createEmbeddedView(parent, anchorDef, context) {
        // embedded views are seen as siblings to the anchor, so we need
        // to get the parent of the anchor and use it as parentIndex.
        var /** @type {?} */view = createView(parent.root, parent.renderer, parent, anchorDef, anchorDef.element.template);
        initView(view, parent.component, context);
        createViewNodes(view);
        return view;
    }
    /**
     * @param {?} root
     * @param {?} def
     * @param {?=} context
     * @return {?}
     */
    function createRootView(root, def, context) {
        var /** @type {?} */view = createView(root, root.renderer, null, null, def);
        initView(view, context, context);
        createViewNodes(view);
        return view;
    }
    /**
     * @param {?} root
     * @param {?} renderer
     * @param {?} parent
     * @param {?} parentNodeDef
     * @param {?} def
     * @return {?}
     */
    function createView(root, renderer, parent, parentNodeDef, def) {
        var /** @type {?} */nodes = new Array(def.nodes.length);
        var /** @type {?} */disposables = def.outputCount ? new Array(def.outputCount) : undefined;
        var /** @type {?} */view = {
            def: def,
            parent: parent,
            viewContainerParent: undefined, parentNodeDef: parentNodeDef,
            context: undefined,
            component: undefined, nodes: nodes,
            state: ViewState.FirstCheck | ViewState.ChecksEnabled, root: root, renderer: renderer,
            oldValues: new Array(def.bindingCount), disposables: disposables
        };
        return view;
    }
    /**
     * @param {?} view
     * @param {?} component
     * @param {?} context
     * @return {?}
     */
    function initView(view, component, context) {
        view.component = component;
        view.context = context;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function createViewNodes(view) {
        var /** @type {?} */renderHost = void 0;
        if (isComponentView(view)) {
            var /** @type {?} */hostDef = view.parentNodeDef;
            renderHost = asElementData(view.parent, hostDef.parent.index).renderElement;
        }
        var /** @type {?} */def = view.def;
        var /** @type {?} */nodes = view.nodes;
        for (var /** @type {?} */i = 0; i < def.nodes.length; i++) {
            var /** @type {?} */nodeDef = def.nodes[i];
            Services.setCurrentNode(view, i);
            var /** @type {?} */nodeData = void 0;
            switch (nodeDef.type) {
                case NodeType.Element:
                    var /** @type {?} */el = createElement(view, renderHost, nodeDef);
                    var /** @type {?} */componentView = void 0;
                    if (nodeDef.flags & NodeFlags.HasComponent) {
                        var /** @type {?} */compViewDef = resolveViewDefinition(nodeDef.element.componentView);
                        var /** @type {?} */rendererType = nodeDef.element.componentRendererType;
                        var /** @type {?} */compRenderer = void 0;
                        if (!rendererType) {
                            compRenderer = view.root.renderer;
                        } else {
                            compRenderer = view.root.rendererFactory.createRenderer(el, rendererType);
                        }
                        componentView = createView(view.root, compRenderer, view, nodeDef.element.componentProvider, compViewDef);
                    }
                    listenToElementOutputs(view, componentView, nodeDef, el);
                    nodeData = {
                        renderElement: el,
                        componentView: componentView,
                        embeddedViews: nodeDef.flags & NodeFlags.HasEmbeddedViews ? [] : undefined,
                        projectedViews: undefined
                    };
                    break;
                case NodeType.Text:
                    nodeData = createText(view, renderHost, nodeDef);
                    break;
                case NodeType.Provider:
                    {
                        var /** @type {?} */instance = createProviderInstance(view, nodeDef);
                        nodeData = { instance: instance };
                        break;
                    }
                case NodeType.Pipe:
                    {
                        var /** @type {?} */_instance = createPipeInstance(view, nodeDef);
                        nodeData = { instance: _instance };
                        break;
                    }
                case NodeType.Directive:
                    {
                        var /** @type {?} */_instance2 = createDirectiveInstance(view, nodeDef);
                        nodeData = { instance: _instance2 };
                        if (nodeDef.flags & NodeFlags.IsComponent) {
                            var /** @type {?} */compView = asElementData(view, nodeDef.parent.index).componentView;
                            initView(compView, _instance2, _instance2);
                        }
                        break;
                    }
                case NodeType.PureExpression:
                    nodeData = createPureExpression(view, nodeDef);
                    break;
                case NodeType.Query:
                    nodeData = createQuery();
                    break;
                case NodeType.NgContent:
                    appendNgContent(view, renderHost, nodeDef);
                    // no runtime data needed for NgContent...
                    nodeData = undefined;
                    break;
            }
            nodes[i] = nodeData;
        }
        // Create the ViewData.nodes of component views after we created everything else,
        // so that e.g. ng-content works
        execComponentViewsAction(view, ViewAction.CreateViewNodes);
        // fill static content and view queries
        execQueriesAction(view, NodeFlags.HasContentQuery | NodeFlags.HasViewQuery, NodeFlags.HasStaticQuery, CheckType.CheckAndUpdate);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function checkNoChangesView(view) {
        Services.updateDirectives(view, CheckType.CheckNoChanges);
        execEmbeddedViewsAction(view, ViewAction.CheckNoChanges);
        execQueriesAction(view, NodeFlags.HasContentQuery, NodeFlags.HasDynamicQuery, CheckType.CheckNoChanges);
        Services.updateRenderer(view, CheckType.CheckNoChanges);
        execComponentViewsAction(view, ViewAction.CheckNoChanges);
        execQueriesAction(view, NodeFlags.HasViewQuery, NodeFlags.HasDynamicQuery, CheckType.CheckNoChanges);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function checkAndUpdateView(view) {
        Services.updateDirectives(view, CheckType.CheckAndUpdate);
        execEmbeddedViewsAction(view, ViewAction.CheckAndUpdate);
        execQueriesAction(view, NodeFlags.HasContentQuery, NodeFlags.HasDynamicQuery, CheckType.CheckAndUpdate);
        callLifecycleHooksChildrenFirst(view, NodeFlags.AfterContentChecked | (view.state & ViewState.FirstCheck ? NodeFlags.AfterContentInit : 0));
        Services.updateRenderer(view, CheckType.CheckAndUpdate);
        execComponentViewsAction(view, ViewAction.CheckAndUpdate);
        execQueriesAction(view, NodeFlags.HasViewQuery, NodeFlags.HasDynamicQuery, CheckType.CheckAndUpdate);
        callLifecycleHooksChildrenFirst(view, NodeFlags.AfterViewChecked | (view.state & ViewState.FirstCheck ? NodeFlags.AfterViewInit : 0));
        if (view.def.flags & ViewFlags.OnPush) {
            view.state &= ~ViewState.ChecksEnabled;
        }
        view.state &= ~ViewState.FirstCheck;
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} argStyle
     * @param {?=} v0
     * @param {?=} v1
     * @param {?=} v2
     * @param {?=} v3
     * @param {?=} v4
     * @param {?=} v5
     * @param {?=} v6
     * @param {?=} v7
     * @param {?=} v8
     * @param {?=} v9
     * @return {?}
     */
    function checkAndUpdateNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        if (argStyle === ArgumentType.Inline) {
            return checkAndUpdateNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
        } else {
            return checkAndUpdateNodeDynamic(view, nodeDef, v0);
        }
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?=} v0
     * @param {?=} v1
     * @param {?=} v2
     * @param {?=} v3
     * @param {?=} v4
     * @param {?=} v5
     * @param {?=} v6
     * @param {?=} v7
     * @param {?=} v8
     * @param {?=} v9
     * @return {?}
     */
    function checkAndUpdateNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        var /** @type {?} */changed = false;
        switch (nodeDef.type) {
            case NodeType.Element:
                changed = checkAndUpdateElementInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
                break;
            case NodeType.Text:
                changed = checkAndUpdateTextInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
                break;
            case NodeType.Directive:
                changed = checkAndUpdateDirectiveInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
                break;
            case NodeType.PureExpression:
                changed = checkAndUpdatePureExpressionInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
                break;
        }
        return changed;
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} values
     * @return {?}
     */
    function checkAndUpdateNodeDynamic(view, nodeDef, values) {
        var /** @type {?} */changed = false;
        switch (nodeDef.type) {
            case NodeType.Element:
                changed = checkAndUpdateElementDynamic(view, nodeDef, values);
                break;
            case NodeType.Text:
                changed = checkAndUpdateTextDynamic(view, nodeDef, values);
                break;
            case NodeType.Directive:
                changed = checkAndUpdateDirectiveDynamic(view, nodeDef, values);
                break;
            case NodeType.PureExpression:
                changed = checkAndUpdatePureExpressionDynamic(view, nodeDef, values);
                break;
        }
        if (changed) {
            // Update oldValues after all bindings have been updated,
            // as a setter for a property might update other properties.
            var /** @type {?} */bindLen = nodeDef.bindings.length;
            var /** @type {?} */bindingStart = nodeDef.bindingIndex;
            var /** @type {?} */oldValues = view.oldValues;
            for (var /** @type {?} */i = 0; i < bindLen; i++) {
                oldValues[bindingStart + i] = values[i];
            }
        }
        return changed;
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} argStyle
     * @param {?=} v0
     * @param {?=} v1
     * @param {?=} v2
     * @param {?=} v3
     * @param {?=} v4
     * @param {?=} v5
     * @param {?=} v6
     * @param {?=} v7
     * @param {?=} v8
     * @param {?=} v9
     * @return {?}
     */
    function checkNoChangesNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        if (argStyle === ArgumentType.Inline) {
            checkNoChangesNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
        } else {
            checkNoChangesNodeDynamic(view, nodeDef, v0);
        }
        // Returning false is ok here as we would have thrown in case of a change.
        return false;
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} v0
     * @param {?} v1
     * @param {?} v2
     * @param {?} v3
     * @param {?} v4
     * @param {?} v5
     * @param {?} v6
     * @param {?} v7
     * @param {?} v8
     * @param {?} v9
     * @return {?}
     */
    function checkNoChangesNodeInline(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        var /** @type {?} */bindLen = nodeDef.bindings.length;
        if (bindLen > 0) checkBindingNoChanges(view, nodeDef, 0, v0);
        if (bindLen > 1) checkBindingNoChanges(view, nodeDef, 1, v1);
        if (bindLen > 2) checkBindingNoChanges(view, nodeDef, 2, v2);
        if (bindLen > 3) checkBindingNoChanges(view, nodeDef, 3, v3);
        if (bindLen > 4) checkBindingNoChanges(view, nodeDef, 4, v4);
        if (bindLen > 5) checkBindingNoChanges(view, nodeDef, 5, v5);
        if (bindLen > 6) checkBindingNoChanges(view, nodeDef, 6, v6);
        if (bindLen > 7) checkBindingNoChanges(view, nodeDef, 7, v7);
        if (bindLen > 8) checkBindingNoChanges(view, nodeDef, 8, v8);
        if (bindLen > 9) checkBindingNoChanges(view, nodeDef, 9, v9);
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} values
     * @return {?}
     */
    function checkNoChangesNodeDynamic(view, nodeDef, values) {
        for (var /** @type {?} */i = 0; i < values.length; i++) {
            checkBindingNoChanges(view, nodeDef, i, values[i]);
        }
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @return {?}
     */
    function checkNoChangesQuery(view, nodeDef) {
        var /** @type {?} */queryList = asQueryList(view, nodeDef.index);
        if (queryList.dirty) {
            throw expressionChangedAfterItHasBeenCheckedError$1(Services.createDebugContext(view, nodeDef.index), 'Query ' + nodeDef.query.id + ' not dirty', 'Query ' + nodeDef.query.id + ' dirty', (view.state & ViewState.FirstCheck) !== 0);
        }
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function destroyView(view) {
        if (view.state & ViewState.Destroyed) {
            return;
        }
        execEmbeddedViewsAction(view, ViewAction.Destroy);
        execComponentViewsAction(view, ViewAction.Destroy);
        callLifecycleHooksChildrenFirst(view, NodeFlags.OnDestroy);
        if (view.disposables) {
            for (var /** @type {?} */i = 0; i < view.disposables.length; i++) {
                view.disposables[i]();
            }
        }
        if (view.renderer.destroyNode) {
            destroyViewNodes(view);
        }
        if (isComponentView(view)) {
            view.renderer.destroy();
        }
        view.state |= ViewState.Destroyed;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function destroyViewNodes(view) {
        var /** @type {?} */len = view.def.nodes.length;
        for (var /** @type {?} */i = 0; i < len; i++) {
            var /** @type {?} */def = view.def.nodes[i];
            if (def.type === NodeType.Element) {
                view.renderer.destroyNode(asElementData(view, i).renderElement);
            } else if (def.type === NodeType.Text) {
                view.renderer.destroyNode(asTextData(view, i).renderText);
            }
        }
    }
    var ViewAction = {};
    ViewAction.CreateViewNodes = 0;
    ViewAction.CheckNoChanges = 1;
    ViewAction.CheckAndUpdate = 2;
    ViewAction.Destroy = 3;
    ViewAction[ViewAction.CreateViewNodes] = "CreateViewNodes";
    ViewAction[ViewAction.CheckNoChanges] = "CheckNoChanges";
    ViewAction[ViewAction.CheckAndUpdate] = "CheckAndUpdate";
    ViewAction[ViewAction.Destroy] = "Destroy";
    /**
     * @param {?} view
     * @param {?} action
     * @return {?}
     */
    function execComponentViewsAction(view, action) {
        var /** @type {?} */def = view.def;
        if (!(def.nodeFlags & NodeFlags.HasComponent)) {
            return;
        }
        for (var /** @type {?} */i = 0; i < def.nodes.length; i++) {
            var /** @type {?} */nodeDef = def.nodes[i];
            if (nodeDef.flags & NodeFlags.HasComponent) {
                // a leaf
                callViewAction(asElementData(view, i).componentView, action);
            } else if ((nodeDef.childFlags & NodeFlags.HasComponent) === 0) {
                // a parent with leafs
                // no child is a component,
                // then skip the children
                i += nodeDef.childCount;
            }
        }
    }
    /**
     * @param {?} view
     * @param {?} action
     * @return {?}
     */
    function execEmbeddedViewsAction(view, action) {
        var /** @type {?} */def = view.def;
        if (!(def.nodeFlags & NodeFlags.HasEmbeddedViews)) {
            return;
        }
        for (var /** @type {?} */i = 0; i < def.nodes.length; i++) {
            var /** @type {?} */nodeDef = def.nodes[i];
            if (nodeDef.flags & NodeFlags.HasEmbeddedViews) {
                // a leaf
                var /** @type {?} */embeddedViews = asElementData(view, i).embeddedViews;
                if (embeddedViews) {
                    for (var /** @type {?} */k = 0; k < embeddedViews.length; k++) {
                        callViewAction(embeddedViews[k], action);
                    }
                }
            } else if ((nodeDef.childFlags & NodeFlags.HasEmbeddedViews) === 0) {
                // a parent with leafs
                // no child is a component,
                // then skip the children
                i += nodeDef.childCount;
            }
        }
    }
    /**
     * @param {?} view
     * @param {?} action
     * @return {?}
     */
    function callViewAction(view, action) {
        var /** @type {?} */viewState = view.state;
        switch (action) {
            case ViewAction.CheckNoChanges:
                if (viewState & ViewState.ChecksEnabled && (viewState & (ViewState.Errored | ViewState.Destroyed)) === 0) {
                    checkNoChangesView(view);
                }
                break;
            case ViewAction.CheckAndUpdate:
                if (viewState & ViewState.ChecksEnabled && (viewState & (ViewState.Errored | ViewState.Destroyed)) === 0) {
                    checkAndUpdateView(view);
                }
                break;
            case ViewAction.Destroy:
                destroyView(view);
                break;
            case ViewAction.CreateViewNodes:
                createViewNodes(view);
                break;
        }
    }
    /**
     * @param {?} view
     * @param {?} queryFlags
     * @param {?} staticDynamicQueryFlag
     * @param {?} checkType
     * @return {?}
     */
    function execQueriesAction(view, queryFlags, staticDynamicQueryFlag, checkType) {
        if (!(view.def.nodeFlags & queryFlags) || !(view.def.nodeFlags & staticDynamicQueryFlag)) {
            return;
        }
        var /** @type {?} */nodeCount = view.def.nodes.length;
        for (var /** @type {?} */i = 0; i < nodeCount; i++) {
            var /** @type {?} */nodeDef = view.def.nodes[i];
            if (nodeDef.flags & queryFlags && nodeDef.flags & staticDynamicQueryFlag) {
                Services.setCurrentNode(view, nodeDef.index);
                switch (checkType) {
                    case CheckType.CheckAndUpdate:
                        checkAndUpdateQuery(view, nodeDef);
                        break;
                    case CheckType.CheckNoChanges:
                        checkNoChangesQuery(view, nodeDef);
                        break;
                }
            }
            if (!(nodeDef.childFlags & queryFlags) || !(nodeDef.childFlags & staticDynamicQueryFlag)) {
                // no child has a matching query
                // then skip the children
                i += nodeDef.childCount;
            }
        }
    }

    var /** @type {?} */initialized = false;
    /**
     * @return {?}
     */
    function initServicesIfNeeded() {
        if (initialized) {
            return;
        }
        initialized = true;
        var /** @type {?} */services = isDevMode() ? createDebugServices() : createProdServices();
        Services.setCurrentNode = services.setCurrentNode;
        Services.createRootView = services.createRootView;
        Services.createEmbeddedView = services.createEmbeddedView;
        Services.checkAndUpdateView = services.checkAndUpdateView;
        Services.checkNoChangesView = services.checkNoChangesView;
        Services.destroyView = services.destroyView;
        Services.resolveDep = resolveDep;
        Services.createDebugContext = services.createDebugContext;
        Services.handleEvent = services.handleEvent;
        Services.updateDirectives = services.updateDirectives;
        Services.updateRenderer = services.updateRenderer;
        Services.dirtyParentQueries = dirtyParentQueries;
    }
    /**
     * @return {?}
     */
    function createProdServices() {
        return {
            setCurrentNode: function setCurrentNode() {},
            createRootView: createProdRootView,
            createEmbeddedView: createEmbeddedView,
            checkAndUpdateView: checkAndUpdateView,
            checkNoChangesView: checkNoChangesView,
            destroyView: destroyView,
            createDebugContext: function createDebugContext(view, nodeIndex) {
                return new DebugContext_(view, nodeIndex);
            },
            handleEvent: function handleEvent(view, nodeIndex, eventName, event) {
                return view.def.handleEvent(view, nodeIndex, eventName, event);
            },
            updateDirectives: function updateDirectives(view, checkType) {
                return view.def.updateDirectives(checkType === CheckType.CheckAndUpdate ? prodCheckAndUpdateNode : prodCheckNoChangesNode, view);
            },
            updateRenderer: function updateRenderer(view, checkType) {
                return view.def.updateRenderer(checkType === CheckType.CheckAndUpdate ? prodCheckAndUpdateNode : prodCheckNoChangesNode, view);
            }
        };
    }
    /**
     * @return {?}
     */
    function createDebugServices() {
        return {
            setCurrentNode: debugSetCurrentNode,
            createRootView: debugCreateRootView,
            createEmbeddedView: debugCreateEmbeddedView,
            checkAndUpdateView: debugCheckAndUpdateView,
            checkNoChangesView: debugCheckNoChangesView,
            destroyView: debugDestroyView,
            createDebugContext: function createDebugContext(view, nodeIndex) {
                return new DebugContext_(view, nodeIndex);
            },
            handleEvent: debugHandleEvent,
            updateDirectives: debugUpdateDirectives,
            updateRenderer: debugUpdateRenderer
        };
    }
    /**
     * @param {?} injector
     * @param {?} projectableNodes
     * @param {?} rootSelectorOrNode
     * @param {?} def
     * @param {?=} context
     * @return {?}
     */
    function createProdRootView(injector, projectableNodes, rootSelectorOrNode, def, context) {
        var /** @type {?} */rendererFactory = injector.get(RendererFactoryV2);
        return createRootView(createRootData(injector, rendererFactory, projectableNodes, rootSelectorOrNode), def, context);
    }
    /**
     * @param {?} injector
     * @param {?} projectableNodes
     * @param {?} rootSelectorOrNode
     * @param {?} def
     * @param {?=} context
     * @return {?}
     */
    function debugCreateRootView(injector, projectableNodes, rootSelectorOrNode, def, context) {
        var /** @type {?} */rendererFactory = injector.get(RendererFactoryV2);
        var /** @type {?} */root = createRootData(injector, new DebugRendererFactoryV2(rendererFactory), projectableNodes, rootSelectorOrNode);
        return callWithDebugContext(DebugAction.create, createRootView, null, [root, def, context]);
    }
    /**
     * @param {?} injector
     * @param {?} rendererFactory
     * @param {?} projectableNodes
     * @param {?} rootSelectorOrNode
     * @return {?}
     */
    function createRootData(injector, rendererFactory, projectableNodes, rootSelectorOrNode) {
        var /** @type {?} */sanitizer = injector.get(Sanitizer);
        var /** @type {?} */renderer = rendererFactory.createRenderer(null, null);
        return {
            injector: injector,
            projectableNodes: projectableNodes,
            selectorOrNode: rootSelectorOrNode, sanitizer: sanitizer, rendererFactory: rendererFactory, renderer: renderer
        };
    }
    /**
     * @param {?} view
     * @param {?} nodeIndex
     * @param {?} argStyle
     * @param {?=} v0
     * @param {?=} v1
     * @param {?=} v2
     * @param {?=} v3
     * @param {?=} v4
     * @param {?=} v5
     * @param {?=} v6
     * @param {?=} v7
     * @param {?=} v8
     * @param {?=} v9
     * @return {?}
     */
    function prodCheckAndUpdateNode(view, nodeIndex, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        var /** @type {?} */nodeDef = view.def.nodes[nodeIndex];
        checkAndUpdateNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
        return nodeDef.type === NodeType.PureExpression ? asPureExpressionData(view, nodeIndex).value : undefined;
    }
    /**
     * @param {?} view
     * @param {?} nodeIndex
     * @param {?} argStyle
     * @param {?=} v0
     * @param {?=} v1
     * @param {?=} v2
     * @param {?=} v3
     * @param {?=} v4
     * @param {?=} v5
     * @param {?=} v6
     * @param {?=} v7
     * @param {?=} v8
     * @param {?=} v9
     * @return {?}
     */
    function prodCheckNoChangesNode(view, nodeIndex, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        var /** @type {?} */nodeDef = view.def.nodes[nodeIndex];
        checkNoChangesNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
        return nodeDef.type === NodeType.PureExpression ? asPureExpressionData(view, nodeIndex).value : undefined;
    }
    /**
     * @param {?} parent
     * @param {?} anchorDef
     * @param {?=} context
     * @return {?}
     */
    function debugCreateEmbeddedView(parent, anchorDef, context) {
        return callWithDebugContext(DebugAction.create, createEmbeddedView, null, [parent, anchorDef, context]);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function debugCheckAndUpdateView(view) {
        return callWithDebugContext(DebugAction.detectChanges, checkAndUpdateView, null, [view]);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function debugCheckNoChangesView(view) {
        return callWithDebugContext(DebugAction.checkNoChanges, checkNoChangesView, null, [view]);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function debugDestroyView(view) {
        return callWithDebugContext(DebugAction.destroy, destroyView, null, [view]);
    }
    var DebugAction = {};
    DebugAction.create = 0;
    DebugAction.detectChanges = 1;
    DebugAction.checkNoChanges = 2;
    DebugAction.destroy = 3;
    DebugAction.handleEvent = 4;
    DebugAction[DebugAction.create] = "create";
    DebugAction[DebugAction.detectChanges] = "detectChanges";
    DebugAction[DebugAction.checkNoChanges] = "checkNoChanges";
    DebugAction[DebugAction.destroy] = "destroy";
    DebugAction[DebugAction.handleEvent] = "handleEvent";
    var /** @type {?} */_currentAction = void 0;
    var /** @type {?} */_currentView = void 0;
    var /** @type {?} */_currentNodeIndex = void 0;
    /**
     * @param {?} view
     * @param {?} nodeIndex
     * @return {?}
     */
    function debugSetCurrentNode(view, nodeIndex) {
        _currentView = view;
        _currentNodeIndex = nodeIndex;
    }
    /**
     * @param {?} view
     * @param {?} nodeIndex
     * @param {?} eventName
     * @param {?} event
     * @return {?}
     */
    function debugHandleEvent(view, nodeIndex, eventName, event) {
        debugSetCurrentNode(view, nodeIndex);
        return callWithDebugContext(DebugAction.handleEvent, view.def.handleEvent, null, [view, nodeIndex, eventName, event]);
    }
    /**
     * @param {?} view
     * @param {?} checkType
     * @return {?}
     */
    function debugUpdateDirectives(view, checkType) {
        if (view.state & ViewState.Destroyed) {
            throw viewDestroyedError$1(DebugAction[_currentAction]);
        }
        debugSetCurrentNode(view, nextDirectiveWithBinding(view, 0));
        return view.def.updateDirectives(debugCheckDirectivesFn, view);
        /**
         * @param {?} view
         * @param {?} nodeIndex
         * @param {?} argStyle
         * @param {...?} values
         * @return {?}
         */
        function debugCheckDirectivesFn(view, nodeIndex, argStyle) {
            var /** @type {?} */nodeDef = view.def.nodes[nodeIndex];

            for (var _len7 = arguments.length, values = Array(_len7 > 3 ? _len7 - 3 : 0), _key7 = 3; _key7 < _len7; _key7++) {
                values[_key7 - 3] = arguments[_key7];
            }

            if (checkType === CheckType.CheckAndUpdate) {
                debugCheckAndUpdateNode(view, nodeDef, argStyle, values);
            } else {
                debugCheckNoChangesNode(view, nodeDef, argStyle, values);
            }
            if (nodeDef.type === NodeType.Directive) {
                debugSetCurrentNode(view, nextDirectiveWithBinding(view, nodeIndex));
            }
            return nodeDef.type === NodeType.PureExpression ? asPureExpressionData(view, nodeDef.index).value : undefined;
        }
        ;
    }
    /**
     * @param {?} view
     * @param {?} checkType
     * @return {?}
     */
    function debugUpdateRenderer(view, checkType) {
        if (view.state & ViewState.Destroyed) {
            throw viewDestroyedError$1(DebugAction[_currentAction]);
        }
        debugSetCurrentNode(view, nextRenderNodeWithBinding(view, 0));
        return view.def.updateRenderer(debugCheckRenderNodeFn, view);
        /**
         * @param {?} view
         * @param {?} nodeIndex
         * @param {?} argStyle
         * @param {...?} values
         * @return {?}
         */
        function debugCheckRenderNodeFn(view, nodeIndex, argStyle) {
            var /** @type {?} */nodeDef = view.def.nodes[nodeIndex];

            for (var _len8 = arguments.length, values = Array(_len8 > 3 ? _len8 - 3 : 0), _key8 = 3; _key8 < _len8; _key8++) {
                values[_key8 - 3] = arguments[_key8];
            }

            if (checkType === CheckType.CheckAndUpdate) {
                debugCheckAndUpdateNode(view, nodeDef, argStyle, values);
            } else {
                debugCheckNoChangesNode(view, nodeDef, argStyle, values);
            }
            if (nodeDef.type === NodeType.Element || nodeDef.type === NodeType.Text) {
                debugSetCurrentNode(view, nextRenderNodeWithBinding(view, nodeIndex));
            }
            return nodeDef.type === NodeType.PureExpression ? asPureExpressionData(view, nodeDef.index).value : undefined;
        }
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} argStyle
     * @param {?} givenValues
     * @return {?}
     */
    function debugCheckAndUpdateNode(view, nodeDef, argStyle, givenValues) {
        var /** @type {?} */changed = checkAndUpdateNode.apply(undefined, [view, nodeDef, argStyle].concat(_toConsumableArray(givenValues)));
        if (changed) {
            var /** @type {?} */values = argStyle === ArgumentType.Dynamic ? givenValues[0] : givenValues;
            if (nodeDef.type === NodeType.Directive || nodeDef.type === NodeType.Element) {
                var /** @type {?} */bindingValues = {};
                for (var /** @type {?} */i = 0; i < nodeDef.bindings.length; i++) {
                    var /** @type {?} */binding = nodeDef.bindings[i];
                    var /** @type {?} */value = values[i];
                    if (binding.type === BindingType.ElementProperty || binding.type === BindingType.ComponentHostProperty || binding.type === BindingType.DirectiveProperty) {
                        bindingValues[normalizeDebugBindingName(binding.nonMinifiedName)] = normalizeDebugBindingValue(value);
                    }
                }
                var /** @type {?} */elDef = nodeDef.type === NodeType.Directive ? nodeDef.parent : nodeDef;
                var /** @type {?} */el = asElementData(view, elDef.index).renderElement;
                if (!elDef.element.name) {
                    // a comment.
                    view.renderer.setValue(el, 'bindings=' + JSON.stringify(bindingValues, null, 2));
                } else {
                    // a regular element.
                    for (var /** @type {?} */attr in bindingValues) {
                        var /** @type {?} */_value2 = bindingValues[attr];
                        if (_value2 != null) {
                            view.renderer.setAttribute(el, attr, _value2);
                        } else {
                            view.renderer.removeAttribute(el, attr);
                        }
                    }
                }
            }
        }
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} argStyle
     * @param {?} values
     * @return {?}
     */
    function debugCheckNoChangesNode(view, nodeDef, argStyle, values) {
        checkNoChangesNode.apply(undefined, [view, nodeDef, argStyle].concat(_toConsumableArray(values)));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function normalizeDebugBindingName(name) {
        // Attribute names with `$` (eg `x-y$`) are valid per spec, but unsupported by some browsers
        name = camelCaseToDashCase$1(name.replace(/[$@]/g, '_'));
        return 'ng-reflect-' + name;
    }
    var /** @type {?} */CAMEL_CASE_REGEXP$1 = /([A-Z])/g;
    /**
     * @param {?} input
     * @return {?}
     */
    function camelCaseToDashCase$1(input) {
        return input.replace(CAMEL_CASE_REGEXP$1, function () {
            for (var _len9 = arguments.length, m = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                m[_key9] = arguments[_key9];
            }

            return '-' + m[1].toLowerCase();
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function normalizeDebugBindingValue(value) {
        try {
            // Limit the size of the value as otherwise the DOM just gets polluted.
            return value ? value.toString().slice(0, 30) : value;
        } catch (e) {
            return '[ERROR] Exception while trying to serialize the value';
        }
    }
    /**
     * @param {?} view
     * @param {?} nodeIndex
     * @return {?}
     */
    function nextDirectiveWithBinding(view, nodeIndex) {
        for (var /** @type {?} */i = nodeIndex; i < view.def.nodes.length; i++) {
            var /** @type {?} */nodeDef = view.def.nodes[i];
            if (nodeDef.type === NodeType.Directive && nodeDef.bindings && nodeDef.bindings.length) {
                return i;
            }
        }
        return undefined;
    }
    /**
     * @param {?} view
     * @param {?} nodeIndex
     * @return {?}
     */
    function nextRenderNodeWithBinding(view, nodeIndex) {
        for (var /** @type {?} */i = nodeIndex; i < view.def.nodes.length; i++) {
            var /** @type {?} */nodeDef = view.def.nodes[i];
            if ((nodeDef.type === NodeType.Element || nodeDef.type === NodeType.Text) && nodeDef.bindings && nodeDef.bindings.length) {
                return i;
            }
        }
        return undefined;
    }

    var DebugContext_ = function () {
        /**
         * @param {?} view
         * @param {?} nodeIndex
         */
        function DebugContext_(view, nodeIndex) {
            _classCallCheck(this, DebugContext_);

            this.view = view;
            this.nodeIndex = nodeIndex;
            if (nodeIndex == null) {
                this.nodeIndex = nodeIndex = 0;
            }
            this.nodeDef = view.def.nodes[nodeIndex];
            var elDef = this.nodeDef;
            var elView = view;
            while (elDef && elDef.type !== NodeType.Element) {
                elDef = elDef.parent;
            }
            if (!elDef) {
                while (!elDef && elView) {
                    elDef = viewParentEl(elView);
                    elView = elView.parent;
                }
            }
            this.elDef = elDef;
            this.elView = elView;
        }
        /**
         * @return {?}
         */


        _createClass(DebugContext_, [{
            key: 'elOrCompView',
            get: function get() {
                // Has to be done lazily as we use the DebugContext also during creation of elements...
                return asElementData(this.elView, this.elDef.index).componentView || this.view;
            }
        }, {
            key: 'injector',
            get: function get() {
                return createInjector(this.elView, this.elDef);
            }
        }, {
            key: 'component',
            get: function get() {
                return this.elOrCompView.component;
            }
        }, {
            key: 'context',
            get: function get() {
                return this.elOrCompView.context;
            }
        }, {
            key: 'providerTokens',
            get: function get() {
                var /** @type {?} */tokens = [];
                if (this.elDef) {
                    for (var /** @type {?} */i = this.elDef.index + 1; i <= this.elDef.index + this.elDef.childCount; i++) {
                        var /** @type {?} */childDef = this.elView.def.nodes[i];
                        if (childDef.type === NodeType.Provider || childDef.type === NodeType.Directive) {
                            tokens.push(childDef.provider.token);
                        }
                        i += childDef.childCount;
                    }
                }
                return tokens;
            }
        }, {
            key: 'references',
            get: function get() {
                var /** @type {?} */references = {};
                if (this.elDef) {
                    collectReferences(this.elView, this.elDef, references);
                    for (var /** @type {?} */i = this.elDef.index + 1; i <= this.elDef.index + this.elDef.childCount; i++) {
                        var /** @type {?} */childDef = this.elView.def.nodes[i];
                        if (childDef.type === NodeType.Provider || childDef.type === NodeType.Directive) {
                            collectReferences(this.elView, childDef, references);
                        }
                        i += childDef.childCount;
                    }
                }
                return references;
            }
        }, {
            key: 'source',
            get: function get() {
                if (this.nodeDef.type === NodeType.Text) {
                    return this.nodeDef.text.source;
                } else {
                    return this.elDef.element.source;
                }
            }
        }, {
            key: 'componentRenderElement',
            get: function get() {
                var /** @type {?} */elData = findHostElement(this.elOrCompView);
                return elData ? elData.renderElement : undefined;
            }
        }, {
            key: 'renderNode',
            get: function get() {
                return this.nodeDef.type === NodeType.Text ? renderNode(this.view, this.nodeDef) : renderNode(this.elView, this.elDef);
            }
        }]);

        return DebugContext_;
    }();

    /**
     * @param {?} view
     * @return {?}
     */
    function findHostElement(view) {
        while (view && !isComponentView(view)) {
            view = view.parent;
        }
        if (view.parent) {
            return asElementData(view.parent, viewParentEl(view).index);
        }
        return undefined;
    }
    /**
     * @param {?} view
     * @param {?} nodeDef
     * @param {?} references
     * @return {?}
     */
    function collectReferences(view, nodeDef, references) {
        for (var /** @type {?} */refName in nodeDef.references) {
            references[refName] = getQueryValue(view, nodeDef, nodeDef.references[refName]);
        }
    }
    /**
     * @param {?} action
     * @param {?} fn
     * @param {?} self
     * @param {?} args
     * @return {?}
     */
    function callWithDebugContext(action, fn, self, args) {
        var /** @type {?} */oldAction = _currentAction;
        var /** @type {?} */oldView = _currentView;
        var /** @type {?} */oldNodeIndex = _currentNodeIndex;
        try {
            _currentAction = action;
            var /** @type {?} */result = fn.apply(self, args);
            _currentView = oldView;
            _currentNodeIndex = oldNodeIndex;
            _currentAction = oldAction;
            return result;
        } catch (e) {
            if (isViewDebugError(e) || !_currentView) {
                throw e;
            }
            _currentView.state |= ViewState.Errored;
            throw viewWrappedDebugError(e, getCurrentDebugContext());
        }
    }
    /**
     * @return {?}
     */
    function getCurrentDebugContext() {
        return new DebugContext_(_currentView, _currentNodeIndex);
    }

    var DebugRendererFactoryV2 = function () {
        /**
         * @param {?} delegate
         */
        function DebugRendererFactoryV2(delegate) {
            _classCallCheck(this, DebugRendererFactoryV2);

            this.delegate = delegate;
        }
        /**
         * @param {?} element
         * @param {?} renderData
         * @return {?}
         */


        _createClass(DebugRendererFactoryV2, [{
            key: 'createRenderer',
            value: function createRenderer(element, renderData) {
                return new DebugRendererV2(this.delegate.createRenderer(element, renderData));
            }
        }]);

        return DebugRendererFactoryV2;
    }();

    var DebugRendererV2 = function () {
        /**
         * @param {?} delegate
         */
        function DebugRendererV2(delegate) {
            _classCallCheck(this, DebugRendererV2);

            this.delegate = delegate;
        }
        /**
         * @return {?}
         */


        _createClass(DebugRendererV2, [{
            key: 'destroyNode',
            value: function destroyNode(node) {
                removeDebugNodeFromIndex(getDebugNode(node));
                if (this.delegate.destroyNode) {
                    this.delegate.destroyNode(node);
                }
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.delegate.destroy();
            }
        }, {
            key: 'createElement',
            value: function createElement(name, namespace) {
                var /** @type {?} */el = this.delegate.createElement(name, namespace);
                var /** @type {?} */debugEl = new DebugElement(el, null, getCurrentDebugContext());
                debugEl.name = name;
                indexDebugNode(debugEl);
                return el;
            }
        }, {
            key: 'createComment',
            value: function createComment(value) {
                var /** @type {?} */comment = this.delegate.createComment(value);
                var /** @type {?} */debugEl = new DebugNode(comment, null, getCurrentDebugContext());
                indexDebugNode(debugEl);
                return comment;
            }
        }, {
            key: 'createText',
            value: function createText(value) {
                var /** @type {?} */text = this.delegate.createText(value);
                var /** @type {?} */debugEl = new DebugNode(text, null, getCurrentDebugContext());
                indexDebugNode(debugEl);
                return text;
            }
        }, {
            key: 'appendChild',
            value: function appendChild(parent, newChild) {
                var /** @type {?} */debugEl = getDebugNode(parent);
                var /** @type {?} */debugChildEl = getDebugNode(newChild);
                if (debugEl && debugChildEl && debugEl instanceof DebugElement) {
                    debugEl.addChild(debugChildEl);
                }
                this.delegate.appendChild(parent, newChild);
            }
        }, {
            key: 'insertBefore',
            value: function insertBefore(parent, newChild, refChild) {
                var /** @type {?} */debugEl = getDebugNode(parent);
                var /** @type {?} */debugChildEl = getDebugNode(newChild);
                var /** @type {?} */debugRefEl = getDebugNode(refChild);
                if (debugEl && debugChildEl && debugEl instanceof DebugElement) {
                    debugEl.insertBefore(debugRefEl, debugChildEl);
                }
                this.delegate.insertBefore(parent, newChild, refChild);
            }
        }, {
            key: 'removeChild',
            value: function removeChild(parent, oldChild) {
                var /** @type {?} */debugEl = getDebugNode(parent);
                var /** @type {?} */debugChildEl = getDebugNode(oldChild);
                if (debugEl && debugChildEl && debugEl instanceof DebugElement) {
                    debugEl.removeChild(debugChildEl);
                }
                this.delegate.removeChild(parent, oldChild);
            }
        }, {
            key: 'selectRootElement',
            value: function selectRootElement(selectorOrNode) {
                var /** @type {?} */el = this.delegate.selectRootElement(selectorOrNode);
                var /** @type {?} */debugEl = new DebugElement(el, null, getCurrentDebugContext());
                indexDebugNode(debugEl);
                return el;
            }
        }, {
            key: 'setAttribute',
            value: function setAttribute(el, name, value, namespace) {
                var /** @type {?} */debugEl = getDebugNode(el);
                if (debugEl && debugEl instanceof DebugElement) {
                    var /** @type {?} */fullName = namespace ? namespace + ':' + name : name;
                    debugEl.attributes[fullName] = value;
                }
                this.delegate.setAttribute(el, name, value, namespace);
            }
        }, {
            key: 'removeAttribute',
            value: function removeAttribute(el, name, namespace) {
                var /** @type {?} */debugEl = getDebugNode(el);
                if (debugEl && debugEl instanceof DebugElement) {
                    var /** @type {?} */fullName = namespace ? namespace + ':' + name : name;
                    debugEl.attributes[fullName] = null;
                }
                this.delegate.removeAttribute(el, name, namespace);
            }
        }, {
            key: 'addClass',
            value: function addClass(el, name) {
                var /** @type {?} */debugEl = getDebugNode(el);
                if (debugEl && debugEl instanceof DebugElement) {
                    debugEl.classes[name] = true;
                }
                this.delegate.addClass(el, name);
            }
        }, {
            key: 'removeClass',
            value: function removeClass(el, name) {
                var /** @type {?} */debugEl = getDebugNode(el);
                if (debugEl && debugEl instanceof DebugElement) {
                    debugEl.classes[name] = false;
                }
                this.delegate.removeClass(el, name);
            }
        }, {
            key: 'setStyle',
            value: function setStyle(el, style, value, hasVendorPrefix, hasImportant) {
                var /** @type {?} */debugEl = getDebugNode(el);
                if (debugEl && debugEl instanceof DebugElement) {
                    debugEl.styles[style] = value;
                }
                this.delegate.setStyle(el, style, value, hasVendorPrefix, hasImportant);
            }
        }, {
            key: 'removeStyle',
            value: function removeStyle(el, style, hasVendorPrefix) {
                var /** @type {?} */debugEl = getDebugNode(el);
                if (debugEl && debugEl instanceof DebugElement) {
                    debugEl.styles[style] = null;
                }
                this.delegate.removeStyle(el, style, hasVendorPrefix);
            }
        }, {
            key: 'setProperty',
            value: function setProperty(el, name, value) {
                var /** @type {?} */debugEl = getDebugNode(el);
                if (debugEl && debugEl instanceof DebugElement) {
                    debugEl.properties[name] = value;
                }
                this.delegate.setProperty(el, name, value);
            }
        }, {
            key: 'listen',
            value: function listen(target, eventName, callback) {
                if (typeof target !== 'string') {
                    var /** @type {?} */debugEl = getDebugNode(target);
                    if (debugEl) {
                        debugEl.listeners.push(new EventListener(eventName, callback));
                    }
                }
                return this.delegate.listen(target, eventName, callback);
            }
        }, {
            key: 'parentNode',
            value: function parentNode(node) {
                return this.delegate.parentNode(node);
            }
        }, {
            key: 'nextSibling',
            value: function nextSibling(node) {
                return this.delegate.nextSibling(node);
            }
        }, {
            key: 'setValue',
            value: function setValue(node, value) {
                return this.delegate.setValue(node, value);
            }
        }, {
            key: 'data',
            get: function get() {
                return this.delegate.data;
            }
        }]);

        return DebugRendererV2;
    }();

    /**
     * @return {?}
     */
    function _iterableDiffersFactory() {
        return defaultIterableDiffers;
    }
    /**
     * @return {?}
     */
    function _keyValueDiffersFactory() {
        return defaultKeyValueDiffers;
    }
    /**
     * @param {?=} locale
     * @return {?}
     */
    function _localeFactory(locale) {
        return locale || 'en-US';
    }
    /**
     * @return {?}
     */
    function _initViewEngine() {
        initServicesIfNeeded();
    }
    /**
     * This module includes the providers of \@angular/core that are needed
     * to bootstrap components via `ApplicationRef`.
     *
     * \@experimental
     */

    var ApplicationModule = function ApplicationModule() {
        _classCallCheck(this, ApplicationModule);
    };

    ApplicationModule.decorators = [{ type: NgModule, args: [{
            providers: [ApplicationRef_, { provide: ApplicationRef, useExisting: ApplicationRef_ }, ApplicationInitStatus, Compiler, APP_ID_RANDOM_PROVIDER, ViewUtils, AnimationQueue, { provide: IterableDiffers, useFactory: _iterableDiffersFactory }, { provide: KeyValueDiffers, useFactory: _keyValueDiffersFactory }, {
                provide: LOCALE_ID,
                useFactory: _localeFactory,
                deps: [[new Inject(LOCALE_ID), new Optional(), new SkipSelf()]]
            }, { provide: APP_INITIALIZER, useValue: _initViewEngine, multi: true }]
        }] }];
    /** @nocollapse */
    ApplicationModule.ctorParameters = function () {
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
     */var /** @type {?} */FILL_STYLE_FLAG = 'true'; // TODO (matsko): change to boolean
    // TODO (matsko): change to boolean
    var /** @type {?} */ANY_STATE = '*';
    var /** @type {?} */DEFAULT_STATE = '*';
    var /** @type {?} */EMPTY_STATE = 'void';

    var AnimationGroupPlayer = function () {
        /**
         * @param {?} _players
         */
        function AnimationGroupPlayer(_players) {
            var _this31 = this;

            _classCallCheck(this, AnimationGroupPlayer);

            this._players = _players;
            this._onDoneFns = [];
            this._onStartFns = [];
            this._finished = false;
            this._started = false;
            this._destroyed = false;
            this._onDestroyFns = [];
            this.parentPlayer = null;
            var count = 0;
            var total = this._players.length;
            if (total == 0) {
                scheduleMicroTask(function () {
                    return _this31._onFinish();
                });
            } else {
                this._players.forEach(function (player) {
                    player.parentPlayer = _this31;
                    player.onDone(function () {
                        if (++count >= total) {
                            _this31._onFinish();
                        }
                    });
                });
            }
        }
        /**
         * @return {?}
         */


        _createClass(AnimationGroupPlayer, [{
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
                this._players.forEach(function (player) {
                    return player.init();
                });
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
            key: 'hasStarted',
            value: function hasStarted() {
                return this._started;
            }
        }, {
            key: 'play',
            value: function play() {
                if (!isPresent(this.parentPlayer)) {
                    this.init();
                }
                if (!this.hasStarted()) {
                    this._onStartFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onStartFns = [];
                    this._started = true;
                }
                this._players.forEach(function (player) {
                    return player.play();
                });
            }
        }, {
            key: 'pause',
            value: function pause() {
                this._players.forEach(function (player) {
                    return player.pause();
                });
            }
        }, {
            key: 'restart',
            value: function restart() {
                this._players.forEach(function (player) {
                    return player.restart();
                });
            }
        }, {
            key: 'finish',
            value: function finish() {
                this._onFinish();
                this._players.forEach(function (player) {
                    return player.finish();
                });
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (!this._destroyed) {
                    this._onFinish();
                    this._players.forEach(function (player) {
                        return player.destroy();
                    });
                    this._destroyed = true;
                    this._onDestroyFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onDestroyFns = [];
                }
            }
        }, {
            key: 'reset',
            value: function reset() {
                this._players.forEach(function (player) {
                    return player.reset();
                });
                this._destroyed = false;
                this._finished = false;
                this._started = false;
            }
        }, {
            key: 'setPosition',
            value: function setPosition(p) {
                this._players.forEach(function (player) {
                    player.setPosition(p);
                });
            }
        }, {
            key: 'getPosition',
            value: function getPosition() {
                var /** @type {?} */min = 0;
                this._players.forEach(function (player) {
                    var /** @type {?} */p = player.getPosition();
                    min = Math.min(p, min);
                });
                return min;
            }
        }, {
            key: 'players',
            get: function get() {
                return this._players;
            }
        }]);

        return AnimationGroupPlayer;
    }();

    var AnimationKeyframe =
    /**
     * @param {?} offset
     * @param {?} styles
     */
    function AnimationKeyframe(offset, styles) {
        _classCallCheck(this, AnimationKeyframe);

        this.offset = offset;
        this.styles = styles;
    };

    var AnimationSequencePlayer = function () {
        /**
         * @param {?} _players
         */
        function AnimationSequencePlayer(_players) {
            var _this32 = this;

            _classCallCheck(this, AnimationSequencePlayer);

            this._players = _players;
            this._currentIndex = 0;
            this._onDoneFns = [];
            this._onStartFns = [];
            this._onDestroyFns = [];
            this._finished = false;
            this._started = false;
            this._destroyed = false;
            this.parentPlayer = null;
            this._players.forEach(function (player) {
                player.parentPlayer = _this32;
            });
            this._onNext(false);
        }
        /**
         * @param {?} start
         * @return {?}
         */


        _createClass(AnimationSequencePlayer, [{
            key: '_onNext',
            value: function _onNext(start) {
                var _this33 = this;

                if (this._finished) return;
                if (this._players.length == 0) {
                    this._activePlayer = new NoOpAnimationPlayer();
                    scheduleMicroTask(function () {
                        return _this33._onFinish();
                    });
                } else if (this._currentIndex >= this._players.length) {
                    this._activePlayer = new NoOpAnimationPlayer();
                    this._onFinish();
                } else {
                    var /** @type {?} */player = this._players[this._currentIndex++];
                    player.onDone(function () {
                        return _this33._onNext(true);
                    });
                    this._activePlayer = player;
                    if (start) {
                        player.play();
                    }
                }
            }
        }, {
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
                this._players.forEach(function (player) {
                    return player.init();
                });
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
            key: 'hasStarted',
            value: function hasStarted() {
                return this._started;
            }
        }, {
            key: 'play',
            value: function play() {
                if (!isPresent(this.parentPlayer)) {
                    this.init();
                }
                if (!this.hasStarted()) {
                    this._onStartFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onStartFns = [];
                    this._started = true;
                }
                this._activePlayer.play();
            }
        }, {
            key: 'pause',
            value: function pause() {
                this._activePlayer.pause();
            }
        }, {
            key: 'restart',
            value: function restart() {
                this.reset();
                if (this._players.length > 0) {
                    this._players[0].restart();
                }
            }
        }, {
            key: 'reset',
            value: function reset() {
                this._players.forEach(function (player) {
                    return player.reset();
                });
                this._destroyed = false;
                this._finished = false;
                this._started = false;
            }
        }, {
            key: 'finish',
            value: function finish() {
                this._onFinish();
                this._players.forEach(function (player) {
                    return player.finish();
                });
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                if (!this._destroyed) {
                    this._onFinish();
                    this._players.forEach(function (player) {
                        return player.destroy();
                    });
                    this._destroyed = true;
                    this._activePlayer = new NoOpAnimationPlayer();
                    this._onDestroyFns.forEach(function (fn) {
                        return fn();
                    });
                    this._onDestroyFns = [];
                }
            }
        }, {
            key: 'setPosition',
            value: function setPosition(p) {
                this._players[0].setPosition(p);
            }
        }, {
            key: 'getPosition',
            value: function getPosition() {
                return this._players[0].getPosition();
            }
        }, {
            key: 'players',
            get: function get() {
                return this._players;
            }
        }]);

        return AnimationSequencePlayer;
    }();

    /**
     * @experimental Animation support is experimental.
     */
    var /** @type {?} */AUTO_STYLE = '*';

    /**
     * @param {?} previousStyles
     * @param {?} newStyles
     * @param {?=} nullValue
     * @return {?}
     */
    function prepareFinalAnimationStyles(previousStyles, newStyles) {
        var nullValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var /** @type {?} */finalStyles = {};
        Object.keys(newStyles).forEach(function (prop) {
            var /** @type {?} */value = newStyles[prop];
            finalStyles[prop] = value == AUTO_STYLE ? nullValue : value.toString();
        });
        Object.keys(previousStyles).forEach(function (prop) {
            if (!isPresent(finalStyles[prop])) {
                finalStyles[prop] = nullValue;
            }
        });
        return finalStyles;
    }
    /**
     * @param {?} collectedStyles
     * @param {?} finalStateStyles
     * @param {?} keyframes
     * @return {?}
     */
    function balanceAnimationKeyframes(collectedStyles, finalStateStyles, keyframes) {
        var /** @type {?} */limit = keyframes.length - 1;
        var /** @type {?} */firstKeyframe = keyframes[0];
        // phase 1: copy all the styles from the first keyframe into the lookup map
        var /** @type {?} */flatenedFirstKeyframeStyles = flattenStyles(firstKeyframe.styles.styles);
        var /** @type {?} */extraFirstKeyframeStyles = {};
        var /** @type {?} */hasExtraFirstStyles = false;
        Object.keys(collectedStyles).forEach(function (prop) {
            var /** @type {?} */value = collectedStyles[prop];
            // if the style is already defined in the first keyframe then
            // we do not replace it.
            if (!flatenedFirstKeyframeStyles[prop]) {
                flatenedFirstKeyframeStyles[prop] = value;
                extraFirstKeyframeStyles[prop] = value;
                hasExtraFirstStyles = true;
            }
        });
        var /** @type {?} */keyframeCollectedStyles = StringMapWrapper.merge({}, flatenedFirstKeyframeStyles);
        // phase 2: normalize the final keyframe
        var /** @type {?} */finalKeyframe = keyframes[limit];
        finalKeyframe.styles.styles.unshift(finalStateStyles);
        var /** @type {?} */flatenedFinalKeyframeStyles = flattenStyles(finalKeyframe.styles.styles);
        var /** @type {?} */extraFinalKeyframeStyles = {};
        var /** @type {?} */hasExtraFinalStyles = false;
        Object.keys(keyframeCollectedStyles).forEach(function (prop) {
            if (!isPresent(flatenedFinalKeyframeStyles[prop])) {
                extraFinalKeyframeStyles[prop] = AUTO_STYLE;
                hasExtraFinalStyles = true;
            }
        });
        if (hasExtraFinalStyles) {
            finalKeyframe.styles.styles.push(extraFinalKeyframeStyles);
        }
        Object.keys(flatenedFinalKeyframeStyles).forEach(function (prop) {
            if (!isPresent(flatenedFirstKeyframeStyles[prop])) {
                extraFirstKeyframeStyles[prop] = AUTO_STYLE;
                hasExtraFirstStyles = true;
            }
        });
        if (hasExtraFirstStyles) {
            firstKeyframe.styles.styles.push(extraFirstKeyframeStyles);
        }
        collectAndResolveStyles(collectedStyles, [finalStateStyles]);
        return keyframes;
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    function clearStyles(styles) {
        var /** @type {?} */finalStyles = {};
        Object.keys(styles).forEach(function (key) {
            finalStyles[key] = null;
        });
        return finalStyles;
    }
    /**
     * @param {?} collection
     * @param {?} styles
     * @return {?}
     */
    function collectAndResolveStyles(collection, styles) {
        return styles.map(function (entry) {
            var /** @type {?} */stylesObj = {};
            Object.keys(entry).forEach(function (prop) {
                var /** @type {?} */value = entry[prop];
                if (value == FILL_STYLE_FLAG) {
                    value = collection[prop];
                    if (!isPresent(value)) {
                        value = AUTO_STYLE;
                    }
                }
                collection[prop] = value;
                stylesObj[prop] = value;
            });
            return stylesObj;
        });
    }
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} styles
     * @return {?}
     */
    function renderStyles(element, renderer, styles) {
        Object.keys(styles).forEach(function (prop) {
            renderer.setElementStyle(element, prop, styles[prop]);
        });
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    function flattenStyles(styles) {
        var /** @type {?} */finalStyles = {};
        styles.forEach(function (entry) {
            Object.keys(entry).forEach(function (prop) {
                finalStyles[prop] = entry[prop];
            });
        });
        return finalStyles;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * `AnimationStyles` consists of a collection of key/value maps containing CSS-based style data
     * that can either be used as initial styling data or apart of a series of keyframes within an
     * animation.
     * This class is mostly internal, and it is designed to be used alongside
     * {\@link AnimationKeyframe `AnimationKeyframe`} and {\@link Renderer#animate-anchor
     * `Renderer.animate`}.
     *
     * \@experimental Animation support is experimental
     */

    var AnimationStyles =
    /**
     * @param {?} styles
     */
    function AnimationStyles(styles) {
        _classCallCheck(this, AnimationStyles);

        this.styles = styles;
    };

    var AnimationTransitionEvent =
    /**
     * @param {?} __0
     */
    function AnimationTransitionEvent(_ref7) {
        var fromState = _ref7.fromState,
            toState = _ref7.toState,
            totalTime = _ref7.totalTime,
            phaseName = _ref7.phaseName,
            element = _ref7.element,
            triggerName = _ref7.triggerName;

        _classCallCheck(this, AnimationTransitionEvent);

        this.fromState = fromState;
        this.toState = toState;
        this.totalTime = totalTime;
        this.phaseName = phaseName;
        this.element = new ElementRef(element);
        this.triggerName = triggerName;
    };

    var AnimationTransition = function () {
        /**
         * @param {?} _player
         * @param {?} _element
         * @param {?} _triggerName
         * @param {?} _fromState
         * @param {?} _toState
         * @param {?} _totalTime
         */
        function AnimationTransition(_player, _element, _triggerName, _fromState, _toState, _totalTime) {
            _classCallCheck(this, AnimationTransition);

            this._player = _player;
            this._element = _element;
            this._triggerName = _triggerName;
            this._fromState = _fromState;
            this._toState = _toState;
            this._totalTime = _totalTime;
        }
        /**
         * @param {?} phaseName
         * @return {?}
         */


        _createClass(AnimationTransition, [{
            key: '_createEvent',
            value: function _createEvent(phaseName) {
                return new AnimationTransitionEvent({
                    fromState: this._fromState,
                    toState: this._toState,
                    totalTime: this._totalTime,
                    phaseName: phaseName,
                    element: this._element,
                    triggerName: this._triggerName
                });
            }
        }, {
            key: 'onStart',
            value: function onStart(callback) {
                var _this34 = this;

                var /** @type {?} */fn = Zone.current.wrap(function () {
                    return callback(_this34._createEvent('start'));
                }, 'player.onStart');
                this._player.onStart(fn);
            }
        }, {
            key: 'onDone',
            value: function onDone(callback) {
                var _this35 = this;

                var /** @type {?} */fn = Zone.current.wrap(function () {
                    return callback(_this35._createEvent('done'));
                }, 'player.onDone');
                this._player.onDone(fn);
            }
        }]);

        return AnimationTransition;
    }();

    var DebugDomRootRenderer = function () {
        /**
         * @param {?} _delegate
         */
        function DebugDomRootRenderer(_delegate) {
            _classCallCheck(this, DebugDomRootRenderer);

            this._delegate = _delegate;
            throw new Error('RootRenderer is no longer supported. Please use the `RendererFactoryV2` instead!');
        }
        /**
         * @param {?} componentProto
         * @return {?}
         */


        _createClass(DebugDomRootRenderer, [{
            key: 'renderComponent',
            value: function renderComponent(componentProto) {
                return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
            }
        }]);

        return DebugDomRootRenderer;
    }();

    var DebugDomRenderer = function () {
        /**
         * @param {?} _delegate
         */
        function DebugDomRenderer(_delegate) {
            _classCallCheck(this, DebugDomRenderer);

            this._delegate = _delegate;
        }
        /**
         * @param {?} selectorOrNode
         * @param {?=} debugInfo
         * @return {?}
         */


        _createClass(DebugDomRenderer, [{
            key: 'selectRootElement',
            value: function selectRootElement(selectorOrNode, debugInfo) {
                var /** @type {?} */nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
                var /** @type {?} */debugEl = new DebugElement(nativeEl, null, debugInfo);
                indexDebugNode(debugEl);
                return nativeEl;
            }
        }, {
            key: 'createElement',
            value: function createElement(parentElement, name, debugInfo) {
                var /** @type {?} */nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
                var /** @type {?} */debugEl = new DebugElement(nativeEl, getDebugNode(parentElement), debugInfo);
                debugEl.name = name;
                indexDebugNode(debugEl);
                return nativeEl;
            }
        }, {
            key: 'createViewRoot',
            value: function createViewRoot(hostElement) {
                return this._delegate.createViewRoot(hostElement);
            }
        }, {
            key: 'createTemplateAnchor',
            value: function createTemplateAnchor(parentElement, debugInfo) {
                var /** @type {?} */comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
                var /** @type {?} */debugEl = new DebugNode(comment, getDebugNode(parentElement), debugInfo);
                indexDebugNode(debugEl);
                return comment;
            }
        }, {
            key: 'createText',
            value: function createText(parentElement, value, debugInfo) {
                var /** @type {?} */text = this._delegate.createText(parentElement, value, debugInfo);
                var /** @type {?} */debugEl = new DebugNode(text, getDebugNode(parentElement), debugInfo);
                indexDebugNode(debugEl);
                return text;
            }
        }, {
            key: 'projectNodes',
            value: function projectNodes(parentElement, nodes) {
                var /** @type {?} */debugParent = getDebugNode(parentElement);
                if (isPresent(debugParent) && debugParent instanceof DebugElement) {
                    var /** @type {?} */debugElement = debugParent;
                    nodes.forEach(function (node) {
                        debugElement.addChild(getDebugNode(node));
                    });
                }
                this._delegate.projectNodes(parentElement, nodes);
            }
        }, {
            key: 'attachViewAfter',
            value: function attachViewAfter(node, viewRootNodes) {
                var /** @type {?} */debugNode = getDebugNode(node);
                if (isPresent(debugNode)) {
                    var /** @type {?} */debugParent = debugNode.parent;
                    if (viewRootNodes.length > 0 && isPresent(debugParent)) {
                        var /** @type {?} */debugViewRootNodes = [];
                        viewRootNodes.forEach(function (rootNode) {
                            return debugViewRootNodes.push(getDebugNode(rootNode));
                        });
                        debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
                    }
                }
                this._delegate.attachViewAfter(node, viewRootNodes);
            }
        }, {
            key: 'detachView',
            value: function detachView(viewRootNodes) {
                viewRootNodes.forEach(function (node) {
                    var /** @type {?} */debugNode = getDebugNode(node);
                    if (debugNode && debugNode.parent) {
                        debugNode.parent.removeChild(debugNode);
                    }
                });
                this._delegate.detachView(viewRootNodes);
            }
        }, {
            key: 'destroyView',
            value: function destroyView(hostElement, viewAllNodes) {
                viewAllNodes = viewAllNodes || [];
                viewAllNodes.forEach(function (node) {
                    removeDebugNodeFromIndex(getDebugNode(node));
                });
                this._delegate.destroyView(hostElement, viewAllNodes);
            }
        }, {
            key: 'listen',
            value: function listen(renderElement, name, callback) {
                var /** @type {?} */debugEl = getDebugNode(renderElement);
                if (isPresent(debugEl)) {
                    debugEl.listeners.push(new EventListener(name, callback));
                }
                return this._delegate.listen(renderElement, name, callback);
            }
        }, {
            key: 'listenGlobal',
            value: function listenGlobal(target, name, callback) {
                return this._delegate.listenGlobal(target, name, callback);
            }
        }, {
            key: 'setElementProperty',
            value: function setElementProperty(renderElement, propertyName, propertyValue) {
                var /** @type {?} */debugEl = getDebugNode(renderElement);
                if (isPresent(debugEl) && debugEl instanceof DebugElement) {
                    debugEl.properties[propertyName] = propertyValue;
                }
                this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
            }
        }, {
            key: 'setElementAttribute',
            value: function setElementAttribute(renderElement, attributeName, attributeValue) {
                var /** @type {?} */debugEl = getDebugNode(renderElement);
                if (isPresent(debugEl) && debugEl instanceof DebugElement) {
                    debugEl.attributes[attributeName] = attributeValue;
                }
                this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
            }
        }, {
            key: 'setBindingDebugInfo',
            value: function setBindingDebugInfo(renderElement, propertyName, propertyValue) {
                this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
            }
        }, {
            key: 'setElementClass',
            value: function setElementClass(renderElement, className, isAdd) {
                var /** @type {?} */debugEl = getDebugNode(renderElement);
                if (isPresent(debugEl) && debugEl instanceof DebugElement) {
                    debugEl.classes[className] = isAdd;
                }
                this._delegate.setElementClass(renderElement, className, isAdd);
            }
        }, {
            key: 'setElementStyle',
            value: function setElementStyle(renderElement, styleName, styleValue) {
                var /** @type {?} */debugEl = getDebugNode(renderElement);
                if (isPresent(debugEl) && debugEl instanceof DebugElement) {
                    debugEl.styles[styleName] = styleValue;
                }
                this._delegate.setElementStyle(renderElement, styleName, styleValue);
            }
        }, {
            key: 'invokeElementMethod',
            value: function invokeElementMethod(renderElement, methodName, args) {
                this._delegate.invokeElementMethod(renderElement, methodName, args);
            }
        }, {
            key: 'setText',
            value: function setText(renderNode, text) {
                this._delegate.setText(renderNode, text);
            }
        }, {
            key: 'animate',
            value: function animate(element, startingStyles, keyframes, duration, delay, easing) {
                var previousPlayers = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

                return this._delegate.animate(element, startingStyles, keyframes, duration, delay, easing, previousPlayers);
            }
        }]);

        return DebugDomRenderer;
    }();

    var ViewType = {};
    ViewType.HOST = 0;
    ViewType.COMPONENT = 1;
    ViewType.EMBEDDED = 2;
    ViewType[ViewType.HOST] = "HOST";
    ViewType[ViewType.COMPONENT] = "COMPONENT";
    ViewType[ViewType.EMBEDDED] = "EMBEDDED";

    var StaticNodeDebugInfo =
    /**
     * @param {?} providerTokens
     * @param {?} componentToken
     * @param {?} refTokens
     */
    function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
        _classCallCheck(this, StaticNodeDebugInfo);

        this.providerTokens = providerTokens;
        this.componentToken = componentToken;
        this.refTokens = refTokens;
    };

    var DebugContext$1 = function () {
        /**
         * @param {?} _view
         * @param {?} _nodeIndex
         * @param {?} _tplRow
         * @param {?} _tplCol
         */
        function DebugContext$1(_view, _nodeIndex, _tplRow, _tplCol) {
            _classCallCheck(this, DebugContext$1);

            this._view = _view;
            this._nodeIndex = _nodeIndex;
            this._tplRow = _tplRow;
            this._tplCol = _tplCol;
        }
        /**
         * @return {?}
         */


        _createClass(DebugContext$1, [{
            key: '_staticNodeInfo',
            get: function get() {
                return isPresent(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
            }
        }, {
            key: 'context',
            get: function get() {
                return this._view.context;
            }
        }, {
            key: 'component',
            get: function get() {
                var /** @type {?} */staticNodeInfo = this._staticNodeInfo;
                if (isPresent(staticNodeInfo) && isPresent(staticNodeInfo.componentToken)) {
                    return this.injector.get(staticNodeInfo.componentToken);
                }
                return null;
            }
        }, {
            key: 'componentRenderElement',
            get: function get() {
                var /** @type {?} */componentView = this._view;
                while (isPresent(componentView.parentView) && componentView.type !== ViewType.COMPONENT) {
                    componentView = componentView.parentView;
                }
                return componentView.parentElement;
            }
        }, {
            key: 'injector',
            get: function get() {
                return this._view.injector(this._nodeIndex);
            }
        }, {
            key: 'renderNode',
            get: function get() {
                if (isPresent(this._nodeIndex) && this._view.allNodes) {
                    return this._view.allNodes[this._nodeIndex];
                } else {
                    return null;
                }
            }
        }, {
            key: 'providerTokens',
            get: function get() {
                var /** @type {?} */staticNodeInfo = this._staticNodeInfo;
                return isPresent(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
            }
        }, {
            key: 'source',
            get: function get() {
                return this._view.componentType.templateUrl + ':' + this._tplRow + ':' + this._tplCol;
            }
        }, {
            key: 'references',
            get: function get() {
                var _this36 = this;

                var /** @type {?} */varValues = {};
                var /** @type {?} */staticNodeInfo = this._staticNodeInfo;
                if (isPresent(staticNodeInfo)) {
                    var /** @type {?} */refs = staticNodeInfo.refTokens;
                    Object.keys(refs).forEach(function (refName) {
                        var /** @type {?} */refToken = refs[refName];
                        var /** @type {?} */varValue = void 0;
                        if (isBlank(refToken)) {
                            varValue = _this36._view.allNodes ? _this36._view.allNodes[_this36._nodeIndex] : null;
                        } else {
                            varValue = _this36._view.injectorGet(refToken, _this36._nodeIndex, null);
                        }
                        varValues[refName] = varValue;
                    });
                }
                return varValues;
            }
        }]);

        return DebugContext$1;
    }();

    var ViewAnimationMap = function () {
        function ViewAnimationMap() {
            _classCallCheck(this, ViewAnimationMap);

            this._map = new Map();
            this._allPlayers = [];
        }
        /**
         * @param {?} element
         * @param {?} animationName
         * @return {?}
         */


        _createClass(ViewAnimationMap, [{
            key: 'find',
            value: function find(element, animationName) {
                var /** @type {?} */playersByAnimation = this._map.get(element);
                if (isPresent(playersByAnimation)) {
                    return playersByAnimation[animationName];
                }
            }
        }, {
            key: 'findAllPlayersByElement',
            value: function findAllPlayersByElement(element) {
                var /** @type {?} */el = this._map.get(element);
                return el ? Object.keys(el).map(function (k) {
                    return el[k];
                }) : [];
            }
        }, {
            key: 'set',
            value: function set(element, animationName, player) {
                var /** @type {?} */playersByAnimation = this._map.get(element);
                if (!isPresent(playersByAnimation)) {
                    playersByAnimation = {};
                }
                var /** @type {?} */existingEntry = playersByAnimation[animationName];
                if (isPresent(existingEntry)) {
                    this.remove(element, animationName);
                }
                playersByAnimation[animationName] = player;
                this._allPlayers.push(player);
                this._map.set(element, playersByAnimation);
            }
        }, {
            key: 'getAllPlayers',
            value: function getAllPlayers() {
                return this._allPlayers;
            }
        }, {
            key: 'remove',
            value: function remove(element, animationName) {
                var targetPlayer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                var /** @type {?} */playersByAnimation = this._map.get(element);
                if (playersByAnimation) {
                    var /** @type {?} */player = playersByAnimation[animationName];
                    if (!targetPlayer || player === targetPlayer) {
                        delete playersByAnimation[animationName];
                        var /** @type {?} */index = this._allPlayers.indexOf(player);
                        this._allPlayers.splice(index, 1);
                        if (Object.keys(playersByAnimation).length === 0) {
                            this._map.delete(element);
                        }
                    }
                }
            }
        }]);

        return ViewAnimationMap;
    }();

    var AnimationViewContext = function () {
        /**
         * @param {?} _animationQueue
         */
        function AnimationViewContext(_animationQueue) {
            _classCallCheck(this, AnimationViewContext);

            this._animationQueue = _animationQueue;
            this._players = new ViewAnimationMap();
        }
        /**
         * @param {?} callback
         * @return {?}
         */


        _createClass(AnimationViewContext, [{
            key: 'onAllActiveAnimationsDone',
            value: function onAllActiveAnimationsDone(callback) {
                var /** @type {?} */activeAnimationPlayers = this._players.getAllPlayers();
                // we check for the length to avoid having GroupAnimationPlayer
                // issue an unnecessary microtask when zero players are passed in
                if (activeAnimationPlayers.length) {
                    new AnimationGroupPlayer(activeAnimationPlayers).onDone(function () {
                        return callback();
                    });
                } else {
                    callback();
                }
            }
        }, {
            key: 'queueAnimation',
            value: function queueAnimation(element, animationName, player) {
                var _this37 = this;

                this._animationQueue.enqueue(player);
                this._players.set(element, animationName, player);
                player.onDone(function () {
                    return _this37._players.remove(element, animationName, player);
                });
            }
        }, {
            key: 'getAnimationPlayers',
            value: function getAnimationPlayers(element) {
                var animationName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                var /** @type {?} */players = [];
                if (animationName) {
                    var /** @type {?} */currentPlayer = this._players.find(element, animationName);
                    if (currentPlayer) {
                        _recursePlayers(currentPlayer, players);
                    }
                } else {
                    this._players.findAllPlayersByElement(element).forEach(function (player) {
                        return _recursePlayers(player, players);
                    });
                }
                return players;
            }
        }]);

        return AnimationViewContext;
    }();

    /**
     * @param {?} player
     * @param {?} collectedPlayers
     * @return {?}
     */
    function _recursePlayers(player, collectedPlayers) {
        if (player instanceof AnimationGroupPlayer || player instanceof AnimationSequencePlayer) {
            player.players.forEach(function (player) {
                return _recursePlayers(player, collectedPlayers);
            });
        } else {
            collectedPlayers.push(player);
        }
    }

    var ElementInjector = function (_Injector) {
        _inherits(ElementInjector, _Injector);

        /**
         * @param {?} _view
         * @param {?} _nodeIndex
         */
        function ElementInjector(_view, _nodeIndex) {
            _classCallCheck(this, ElementInjector);

            var _this38 = _possibleConstructorReturn(this, (ElementInjector.__proto__ || Object.getPrototypeOf(ElementInjector)).call(this));

            _this38._view = _view;
            _this38._nodeIndex = _nodeIndex;
            return _this38;
        }
        /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @return {?}
         */


        _createClass(ElementInjector, [{
            key: 'get',
            value: function get(token) {
                var notFoundValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : THROW_IF_NOT_FOUND;

                return this._view.injectorGet(token, this._nodeIndex, notFoundValue);
            }
        }]);

        return ElementInjector;
    }(Injector);

    var /** @type {?} */_scope_check = wtfCreateScope('AppView#check(ascii id)');
    /**
     * @experimental
     */
    var /** @type {?} */EMPTY_CONTEXT$1 = new Object();
    var /** @type {?} */UNDEFINED$1 = new Object();
    /**
     * Cost of making objects: http://jsperf.com/instantiate-size-of-object
     *
     * @abstract
     */

    var AppView = function () {
        /**
         * @param {?} clazz
         * @param {?} componentType
         * @param {?} type
         * @param {?} viewUtils
         * @param {?} parentView
         * @param {?} parentIndex
         * @param {?} parentElement
         * @param {?} cdMode
         * @param {?=} declaredViewContainer
         */
        function AppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentElement, cdMode) {
            var declaredViewContainer = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;

            _classCallCheck(this, AppView);

            this.clazz = clazz;
            this.componentType = componentType;
            this.type = type;
            this.viewUtils = viewUtils;
            this.parentView = parentView;
            this.parentIndex = parentIndex;
            this.parentElement = parentElement;
            this.cdMode = cdMode;
            this.declaredViewContainer = declaredViewContainer;
            this.numberOfChecks = 0;
            this.throwOnChange = false;
            this.ref = new ViewRef_(this, viewUtils.animationQueue);
            if (type === ViewType.COMPONENT || type === ViewType.HOST) {
                this.renderer = viewUtils.renderComponent(componentType);
            } else {
                this.renderer = parentView.renderer;
            }
            this._directRenderer = this.renderer.directRenderer;
        }
        /**
         * @return {?}
         */


        _createClass(AppView, [{
            key: 'create',
            value: function create(context) {
                this.context = context;
                return this.createInternal(null);
            }
        }, {
            key: 'createHostView',
            value: function createHostView(rootSelectorOrNode, hostInjector, projectableNodes) {
                this.context = EMPTY_CONTEXT$1;
                this._hasExternalHostElement = isPresent(rootSelectorOrNode);
                this._hostInjector = hostInjector;
                this._hostProjectableNodes = projectableNodes;
                return this.createInternal(rootSelectorOrNode);
            }
        }, {
            key: 'createInternal',
            value: function createInternal(rootSelectorOrNode) {
                return null;
            }
        }, {
            key: 'createEmbeddedViewInternal',
            value: function createEmbeddedViewInternal(templateNodeIndex) {
                return null;
            }
        }, {
            key: 'init',
            value: function init(lastRootNode, allNodes, disposables) {
                this.lastRootNode = lastRootNode;
                this.allNodes = allNodes;
                this.disposables = disposables;
                if (this.type === ViewType.COMPONENT) {
                    this.dirtyParentQueriesInternal();
                }
            }
        }, {
            key: 'injectorGet',
            value: function injectorGet(token, nodeIndex) {
                var notFoundValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : THROW_IF_NOT_FOUND;

                var /** @type {?} */result = UNDEFINED$1;
                var /** @type {?} */view = this;
                while (result === UNDEFINED$1) {
                    if (isPresent(nodeIndex)) {
                        result = view.injectorGetInternal(token, nodeIndex, UNDEFINED$1);
                    }
                    if (result === UNDEFINED$1 && view.type === ViewType.HOST) {
                        result = view._hostInjector.get(token, notFoundValue);
                    }
                    nodeIndex = view.parentIndex;
                    view = view.parentView;
                }
                return result;
            }
        }, {
            key: 'injectorGetInternal',
            value: function injectorGetInternal(token, nodeIndex, notFoundResult) {
                return notFoundResult;
            }
        }, {
            key: 'injector',
            value: function injector(nodeIndex) {
                return new ElementInjector(this, nodeIndex);
            }
        }, {
            key: 'detachAndDestroy',
            value: function detachAndDestroy() {
                if (this.viewContainer) {
                    this.viewContainer.detachView(this.viewContainer.nestedViews.indexOf(this));
                } else if (this.appRef) {
                    this.appRef.detachView(this.ref);
                } else if (this._hasExternalHostElement) {
                    this.detach();
                }
                this.destroy();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                var _this39 = this;

                if (this.cdMode === ChangeDetectorStatus.Destroyed) {
                    return;
                }
                var /** @type {?} */hostElement = this.type === ViewType.COMPONENT ? this.parentElement : null;
                if (this.disposables) {
                    for (var /** @type {?} */i = 0; i < this.disposables.length; i++) {
                        this.disposables[i]();
                    }
                }
                this.destroyInternal();
                this.dirtyParentQueriesInternal();
                if (this._animationContext) {
                    this._animationContext.onAllActiveAnimationsDone(function () {
                        return _this39.renderer.destroyView(hostElement, _this39.allNodes);
                    });
                } else {
                    this.renderer.destroyView(hostElement, this.allNodes);
                }
                this.cdMode = ChangeDetectorStatus.Destroyed;
            }
        }, {
            key: 'destroyInternal',
            value: function destroyInternal() {}
        }, {
            key: 'detachInternal',
            value: function detachInternal() {}
        }, {
            key: 'detach',
            value: function detach() {
                var _this40 = this;

                this.detachInternal();
                if (this._animationContext) {
                    this._animationContext.onAllActiveAnimationsDone(function () {
                        return _this40._renderDetach();
                    });
                } else {
                    this._renderDetach();
                }
                if (this.declaredViewContainer && this.declaredViewContainer !== this.viewContainer && this.declaredViewContainer.projectedViews) {
                    var /** @type {?} */projectedViews = this.declaredViewContainer.projectedViews;
                    var /** @type {?} */index = projectedViews.indexOf(this);
                    // perf: pop is faster than splice!
                    if (index >= projectedViews.length - 1) {
                        projectedViews.pop();
                    } else {
                        projectedViews.splice(index, 1);
                    }
                }
                this.appRef = null;
                this.viewContainer = null;
                this.dirtyParentQueriesInternal();
            }
        }, {
            key: '_renderDetach',
            value: function _renderDetach() {
                if (this._directRenderer) {
                    this.visitRootNodesInternal(this._directRenderer.remove, null);
                } else {
                    this.renderer.detachView(this.flatRootNodes);
                }
            }
        }, {
            key: 'attachToAppRef',
            value: function attachToAppRef(appRef) {
                if (this.viewContainer) {
                    throw new Error('This view is already attached to a ViewContainer!');
                }
                this.appRef = appRef;
                this.dirtyParentQueriesInternal();
            }
        }, {
            key: 'attachAfter',
            value: function attachAfter(viewContainer, prevView) {
                if (this.appRef) {
                    throw new Error('This view is already attached directly to the ApplicationRef!');
                }
                this._renderAttach(viewContainer, prevView);
                this.viewContainer = viewContainer;
                if (this.declaredViewContainer && this.declaredViewContainer !== viewContainer) {
                    if (!this.declaredViewContainer.projectedViews) {
                        this.declaredViewContainer.projectedViews = [];
                    }
                    this.declaredViewContainer.projectedViews.push(this);
                }
                this.dirtyParentQueriesInternal();
            }
        }, {
            key: 'moveAfter',
            value: function moveAfter(viewContainer, prevView) {
                this._renderAttach(viewContainer, prevView);
                this.dirtyParentQueriesInternal();
            }
        }, {
            key: '_renderAttach',
            value: function _renderAttach(viewContainer, prevView) {
                var /** @type {?} */prevNode = prevView ? prevView.lastRootNode : viewContainer.nativeElement;
                if (this._directRenderer) {
                    var /** @type {?} */nextSibling = this._directRenderer.nextSibling(prevNode);
                    if (nextSibling) {
                        this.visitRootNodesInternal(this._directRenderer.insertBefore, nextSibling);
                    } else {
                        var /** @type {?} */parentElement = this._directRenderer.parentElement(prevNode);
                        if (parentElement) {
                            this.visitRootNodesInternal(this._directRenderer.appendChild, parentElement);
                        }
                    }
                } else {
                    this.renderer.attachViewAfter(prevNode, this.flatRootNodes);
                }
            }
        }, {
            key: 'projectNodes',
            value: function projectNodes(parentElement, ngContentIndex) {
                if (this._directRenderer) {
                    this.visitProjectedNodes(ngContentIndex, this._directRenderer.appendChild, parentElement);
                } else {
                    var /** @type {?} */nodes = [];
                    this.visitProjectedNodes(ngContentIndex, addToArray, nodes);
                    this.renderer.projectNodes(parentElement, nodes);
                }
            }
        }, {
            key: 'visitProjectedNodes',
            value: function visitProjectedNodes(ngContentIndex, cb, c) {
                switch (this.type) {
                    case ViewType.EMBEDDED:
                        this.parentView.visitProjectedNodes(ngContentIndex, cb, c);
                        break;
                    case ViewType.COMPONENT:
                        if (this.parentView.type === ViewType.HOST) {
                            var /** @type {?} */nodes = this.parentView._hostProjectableNodes[ngContentIndex] || [];
                            for (var /** @type {?} */i = 0; i < nodes.length; i++) {
                                cb(nodes[i], c);
                            }
                        } else {
                            this.parentView.visitProjectableNodesInternal(this.parentIndex, ngContentIndex, cb, c);
                        }
                        break;
                }
            }
        }, {
            key: 'visitRootNodesInternal',
            value: function visitRootNodesInternal(cb, c) {}
        }, {
            key: 'visitProjectableNodesInternal',
            value: function visitProjectableNodesInternal(nodeIndex, ngContentIndex, cb, c) {}
        }, {
            key: 'dirtyParentQueriesInternal',
            value: function dirtyParentQueriesInternal() {}
        }, {
            key: 'internalDetectChanges',
            value: function internalDetectChanges(throwOnChange) {
                if (this.cdMode !== ChangeDetectorStatus.Detached) {
                    this.detectChanges(throwOnChange);
                }
            }
        }, {
            key: 'detectChanges',
            value: function detectChanges(throwOnChange) {
                var /** @type {?} */s = _scope_check(this.clazz);
                if (this.cdMode === ChangeDetectorStatus.Checked || this.cdMode === ChangeDetectorStatus.Errored) return;
                if (this.cdMode === ChangeDetectorStatus.Destroyed) {
                    this.throwDestroyedError('detectChanges');
                }
                this.throwOnChange = throwOnChange;
                this.detectChangesInternal();
                if (this.cdMode === ChangeDetectorStatus.CheckOnce) this.cdMode = ChangeDetectorStatus.Checked;
                this.numberOfChecks++;
                wtfLeave(s);
            }
        }, {
            key: 'detectChangesInternal',
            value: function detectChangesInternal() {}
        }, {
            key: 'markAsCheckOnce',
            value: function markAsCheckOnce() {
                this.cdMode = ChangeDetectorStatus.CheckOnce;
            }
        }, {
            key: 'markPathToRootAsCheckOnce',
            value: function markPathToRootAsCheckOnce() {
                var /** @type {?} */c = this;
                while (isPresent(c) && c.cdMode !== ChangeDetectorStatus.Detached) {
                    if (c.cdMode === ChangeDetectorStatus.Checked) {
                        c.cdMode = ChangeDetectorStatus.CheckOnce;
                    }
                    if (c.type === ViewType.COMPONENT) {
                        c = c.parentView;
                    } else {
                        c = c.viewContainer ? c.viewContainer.parentView : null;
                    }
                }
            }
        }, {
            key: 'eventHandler',
            value: function eventHandler(cb) {
                return cb;
            }
        }, {
            key: 'throwDestroyedError',
            value: function throwDestroyedError(details) {
                throw viewDestroyedError(details);
            }
        }, {
            key: 'animationContext',
            get: function get() {
                if (!this._animationContext) {
                    this._animationContext = new AnimationViewContext(this.viewUtils.animationQueue);
                }
                return this._animationContext;
            }
        }, {
            key: 'destroyed',
            get: function get() {
                return this.cdMode === ChangeDetectorStatus.Destroyed;
            }
        }, {
            key: 'changeDetectorRef',
            get: function get() {
                return this.ref;
            }
        }, {
            key: 'flatRootNodes',
            get: function get() {
                var /** @type {?} */nodes = [];
                this.visitRootNodesInternal(addToArray, nodes);
                return nodes;
            }
        }]);

        return AppView;
    }();

    var DebugAppView = function (_AppView) {
        _inherits(DebugAppView, _AppView);

        /**
         * @param {?} clazz
         * @param {?} componentType
         * @param {?} type
         * @param {?} viewUtils
         * @param {?} parentView
         * @param {?} parentIndex
         * @param {?} parentNode
         * @param {?} cdMode
         * @param {?} staticNodeDebugInfos
         * @param {?=} declaredViewContainer
         */
        function DebugAppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, staticNodeDebugInfos) {
            var declaredViewContainer = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;

            _classCallCheck(this, DebugAppView);

            var _this41 = _possibleConstructorReturn(this, (DebugAppView.__proto__ || Object.getPrototypeOf(DebugAppView)).call(this, clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, declaredViewContainer));

            _this41.staticNodeDebugInfos = staticNodeDebugInfos;
            _this41._currentDebugContext = null;
            return _this41;
        }
        /**
         * @param {?} context
         * @return {?}
         */


        _createClass(DebugAppView, [{
            key: 'create',
            value: function create(context) {
                this._resetDebug();
                try {
                    return _get(DebugAppView.prototype.__proto__ || Object.getPrototypeOf(DebugAppView.prototype), 'create', this).call(this, context);
                } catch (e) {
                    this._rethrowWithContext(e);
                    throw e;
                }
            }
        }, {
            key: 'createHostView',
            value: function createHostView(rootSelectorOrNode, injector) {
                var projectableNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                this._resetDebug();
                try {
                    return _get(DebugAppView.prototype.__proto__ || Object.getPrototypeOf(DebugAppView.prototype), 'createHostView', this).call(this, rootSelectorOrNode, injector, projectableNodes);
                } catch (e) {
                    this._rethrowWithContext(e);
                    throw e;
                }
            }
        }, {
            key: 'injectorGet',
            value: function injectorGet(token, nodeIndex, notFoundResult) {
                this._resetDebug();
                try {
                    return _get(DebugAppView.prototype.__proto__ || Object.getPrototypeOf(DebugAppView.prototype), 'injectorGet', this).call(this, token, nodeIndex, notFoundResult);
                } catch (e) {
                    this._rethrowWithContext(e);
                    throw e;
                }
            }
        }, {
            key: 'detach',
            value: function detach() {
                this._resetDebug();
                try {
                    _get(DebugAppView.prototype.__proto__ || Object.getPrototypeOf(DebugAppView.prototype), 'detach', this).call(this);
                } catch (e) {
                    this._rethrowWithContext(e);
                    throw e;
                }
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this._resetDebug();
                try {
                    _get(DebugAppView.prototype.__proto__ || Object.getPrototypeOf(DebugAppView.prototype), 'destroy', this).call(this);
                } catch (e) {
                    this._rethrowWithContext(e);
                    throw e;
                }
            }
        }, {
            key: 'detectChanges',
            value: function detectChanges(throwOnChange) {
                this._resetDebug();
                try {
                    _get(DebugAppView.prototype.__proto__ || Object.getPrototypeOf(DebugAppView.prototype), 'detectChanges', this).call(this, throwOnChange);
                } catch (e) {
                    this._rethrowWithContext(e);
                    throw e;
                }
            }
        }, {
            key: '_resetDebug',
            value: function _resetDebug() {
                this._currentDebugContext = null;
            }
        }, {
            key: 'debug',
            value: function debug(nodeIndex, rowNum, colNum) {
                return this._currentDebugContext = new DebugContext$1(this, nodeIndex, rowNum, colNum);
            }
        }, {
            key: '_rethrowWithContext',
            value: function _rethrowWithContext(e) {
                if (!(getType(e) == viewWrappedError)) {
                    if (!(getType(e) == expressionChangedAfterItHasBeenCheckedError)) {
                        this.cdMode = ChangeDetectorStatus.Errored;
                    }
                    if (isPresent(this._currentDebugContext)) {
                        throw viewWrappedError(e, this._currentDebugContext);
                    }
                }
            }
        }, {
            key: 'eventHandler',
            value: function eventHandler(cb) {
                var _this42 = this;

                var /** @type {?} */superHandler = _get(DebugAppView.prototype.__proto__ || Object.getPrototypeOf(DebugAppView.prototype), 'eventHandler', this).call(this, cb);
                return function (eventName, event) {
                    _this42._resetDebug();
                    try {
                        return superHandler.call(_this42, eventName, event);
                    } catch (e) {
                        _this42._rethrowWithContext(e);
                        throw e;
                    }
                };
            }
        }]);

        return DebugAppView;
    }(AppView);

    var ViewContainer = function () {
        /**
         * @param {?} index
         * @param {?} parentIndex
         * @param {?} parentView
         * @param {?} nativeElement
         */
        function ViewContainer(index, parentIndex, parentView, nativeElement) {
            _classCallCheck(this, ViewContainer);

            this.index = index;
            this.parentIndex = parentIndex;
            this.parentView = parentView;
            this.nativeElement = nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(ViewContainer, [{
            key: 'detectChangesInNestedViews',
            value: function detectChangesInNestedViews(throwOnChange) {
                if (this.nestedViews) {
                    for (var /** @type {?} */i = 0; i < this.nestedViews.length; i++) {
                        this.nestedViews[i].detectChanges(throwOnChange);
                    }
                }
            }
        }, {
            key: 'destroyNestedViews',
            value: function destroyNestedViews() {
                if (this.nestedViews) {
                    for (var /** @type {?} */i = 0; i < this.nestedViews.length; i++) {
                        this.nestedViews[i].destroy();
                    }
                }
            }
        }, {
            key: 'visitNestedViewRootNodes',
            value: function visitNestedViewRootNodes(cb, c) {
                if (this.nestedViews) {
                    for (var /** @type {?} */i = 0; i < this.nestedViews.length; i++) {
                        this.nestedViews[i].visitRootNodesInternal(cb, c);
                    }
                }
            }
        }, {
            key: 'mapNestedViews',
            value: function mapNestedViews(nestedViewClass, callback) {
                var /** @type {?} */result = [];
                if (this.nestedViews) {
                    for (var /** @type {?} */i = 0; i < this.nestedViews.length; i++) {
                        var /** @type {?} */nestedView = this.nestedViews[i];
                        if (nestedView.clazz === nestedViewClass) {
                            result.push(callback(nestedView));
                        }
                    }
                }
                if (this.projectedViews) {
                    for (var /** @type {?} */_i6 = 0; _i6 < this.projectedViews.length; _i6++) {
                        var /** @type {?} */projectedView = this.projectedViews[_i6];
                        if (projectedView.clazz === nestedViewClass) {
                            result.push(callback(projectedView));
                        }
                    }
                }
                return result;
            }
        }, {
            key: 'moveView',
            value: function moveView(view, toIndex) {
                var /** @type {?} */fromIndex = this.nestedViews.indexOf(view);
                if (view.type === ViewType.COMPONENT) {
                    throw new Error('Component views can\'t be moved!');
                }
                var /** @type {?} */nestedViews = this.nestedViews;
                if (nestedViews == null) {
                    nestedViews = [];
                    this.nestedViews = nestedViews;
                }
                nestedViews.splice(fromIndex, 1);
                nestedViews.splice(toIndex, 0, view);
                var /** @type {?} */prevView = toIndex > 0 ? nestedViews[toIndex - 1] : null;
                view.moveAfter(this, prevView);
            }
        }, {
            key: 'attachView',
            value: function attachView(view, viewIndex) {
                if (view.type === ViewType.COMPONENT) {
                    throw new Error('Component views can\'t be moved!');
                }
                var /** @type {?} */nestedViews = this.nestedViews;
                if (nestedViews == null) {
                    nestedViews = [];
                    this.nestedViews = nestedViews;
                }
                // perf: array.push is faster than array.splice!
                if (viewIndex >= nestedViews.length) {
                    nestedViews.push(view);
                } else {
                    nestedViews.splice(viewIndex, 0, view);
                }
                var /** @type {?} */prevView = viewIndex > 0 ? nestedViews[viewIndex - 1] : null;
                view.attachAfter(this, prevView);
            }
        }, {
            key: 'detachView',
            value: function detachView(viewIndex) {
                var /** @type {?} */view = this.nestedViews[viewIndex];
                // perf: array.pop is faster than array.splice!
                if (viewIndex >= this.nestedViews.length - 1) {
                    this.nestedViews.pop();
                } else {
                    this.nestedViews.splice(viewIndex, 1);
                }
                if (view.type === ViewType.COMPONENT) {
                    throw new Error('Component views can\'t be moved!');
                }
                view.detach();
                return view;
            }
        }, {
            key: 'elementRef',
            get: function get() {
                return new ElementRef(this.nativeElement);
            }
        }, {
            key: 'vcRef',
            get: function get() {
                return new ViewContainerRef_(this);
            }
        }, {
            key: 'parentInjector',
            get: function get() {
                return this.parentView.injector(this.parentIndex);
            }
        }, {
            key: 'injector',
            get: function get() {
                return this.parentView.injector(this.index);
            }
        }]);

        return ViewContainer;
    }();

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var LifecycleHooks = {};
    LifecycleHooks.OnInit = 0;
    LifecycleHooks.OnDestroy = 1;
    LifecycleHooks.DoCheck = 2;
    LifecycleHooks.OnChanges = 3;
    LifecycleHooks.AfterContentInit = 4;
    LifecycleHooks.AfterContentChecked = 5;
    LifecycleHooks.AfterViewInit = 6;
    LifecycleHooks.AfterViewChecked = 7;
    LifecycleHooks[LifecycleHooks.OnInit] = "OnInit";
    LifecycleHooks[LifecycleHooks.OnDestroy] = "OnDestroy";
    LifecycleHooks[LifecycleHooks.DoCheck] = "DoCheck";
    LifecycleHooks[LifecycleHooks.OnChanges] = "OnChanges";
    LifecycleHooks[LifecycleHooks.AfterContentInit] = "AfterContentInit";
    LifecycleHooks[LifecycleHooks.AfterContentChecked] = "AfterContentChecked";
    LifecycleHooks[LifecycleHooks.AfterViewInit] = "AfterViewInit";
    LifecycleHooks[LifecycleHooks.AfterViewChecked] = "AfterViewChecked";
    var /** @type {?} */LIFECYCLE_HOOKS_VALUES = [LifecycleHooks.OnInit, LifecycleHooks.OnDestroy, LifecycleHooks.DoCheck, LifecycleHooks.OnChanges, LifecycleHooks.AfterContentInit, LifecycleHooks.AfterContentChecked, LifecycleHooks.AfterViewInit, LifecycleHooks.AfterViewChecked];

    /**
     * `trigger` is an animation-specific function that is designed to be used inside of Angular2's
     * animation DSL language. If this information is new, please navigate to the {\@link
     * Component#animations-anchor component animations metadata page} to gain a better understanding of
     * how animations in Angular2 are used.
     *
     * `trigger` Creates an animation trigger which will a list of {\@link state state} and {\@link
     * transition transition} entries that will be evaluated when the expression bound to the trigger
     * changes.
     *
     * Triggers are registered within the component annotation data under the {\@link
     * Component#animations-anchor animations section}. An animation trigger can be placed on an element
     * within a template by referencing the name of the trigger followed by the expression value that the
     * trigger is bound to (in the form of `[\@triggerName]="expression"`.
     *
     * ### Usage
     *
     * `trigger` will create an animation trigger reference based on the provided `name` value. The
     * provided `animation` value is expected to be an array consisting of {\@link state state} and {\@link
     * transition transition} declarations.
     *
     * ```typescript
     * \@Component({
     *   selector: 'my-component',
     *   templateUrl: 'my-component-tpl.html',
     *   animations: [
     *     trigger("myAnimationTrigger", [
     *       state(...),
     *       state(...),
     *       transition(...),
     *       transition(...)
     *     ])
     *   ]
     * })
     * class MyComponent {
     *   myStatusExp = "something";
     * }
     * ```
     *
     * The template associated with this component will make use of the `myAnimationTrigger` animation
     * trigger by binding to an element within its template code.
     *
     * ```html
     * <!-- somewhere inside of my-component-tpl.html -->
     * <div [\@myAnimationTrigger]="myStatusExp">...</div>
     * tools/gulp-tasks/validate-commit-message.js ```
     *
     * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
     *
     * \@experimental Animation support is experimental.
     * @param {?} name
     * @param {?} definitions
     * @return {?}
     */
    function trigger$2(name, definitions) {
        return { name: name, definitions: definitions };
    }
    /**
     * `animate` is an animation-specific function that is designed to be used inside of Angular2's
     * animation DSL language. If this information is new, please navigate to the {\@link
     * Component#animations-anchor component animations metadata page} to gain a better understanding of
     * how animations in Angular2 are used.
     *
     * `animate` specifies an animation step that will apply the provided `styles` data for a given
     * amount of time based on the provided `timing` expression value. Calls to `animate` are expected
     * to be used within {\@link sequence an animation sequence}, {\@link group group}, or {\@link
     * transition transition}.
     *
     * ### Usage
     *
     * The `animate` function accepts two input parameters: `timing` and `styles`:
     *
     * - `timing` is a string based value that can be a combination of a duration with optional delay
     * and easing values. The format for the expression breaks down to `duration delay easing`
     * (therefore a value such as `1s 100ms ease-out` will be parse itself into `duration=1000,
     * delay=100, easing=ease-out`. If a numeric value is provided then that will be used as the
     * `duration` value in millisecond form.
     * - `styles` is the style input data which can either be a call to {\@link style style} or {\@link
     * keyframes keyframes}. If left empty then the styles from the destination state will be collected
     * and used (this is useful when describing an animation step that will complete an animation by
     * {\@link transition#the-final-animate-call animating to the final state}).
     *
     * ```typescript
     * // various functions for specifying timing data
     * animate(500, style(...))
     * animate("1s", style(...))
     * animate("100ms 0.5s", style(...))
     * animate("5s ease", style(...))
     * animate("5s 10ms cubic-bezier(.17,.67,.88,.1)", style(...))
     *
     * // either style() of keyframes() can be used
     * animate(500, style({ background: "red" }))
     * animate(500, keyframes([
     *   style({ background: "blue" })),
     *   style({ background: "red" }))
     * ])
     * ```
     *
     * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
     *
     * \@experimental Animation support is experimental.
     * @param {?} timings
     * @param {?=} styles
     * @return {?}
     */
    function animate$2(timings) {
        var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        return { type: 4 /* Animate */, styles: styles, timings: timings };
    }
    /**
     * `group` is an animation-specific function that is designed to be used inside of Angular2's
     * animation DSL language. If this information is new, please navigate to the {\@link
     * Component#animations-anchor component animations metadata page} to gain a better understanding of
     * how animations in Angular2 are used.
     *
     * `group` specifies a list of animation steps that are all run in parallel. Grouped animations are
     * useful when a series of styles must be animated/closed off at different statrting/ending times.
     *
     * The `group` function can either be used within a {\@link sequence sequence} or a {\@link transition
     * transition} and it will only continue to the next instruction once all of the inner animation
     * steps have completed.
     *
     * ### Usage
     *
     * The `steps` data that is passed into the `group` animation function can either consist of {\@link
     * style style} or {\@link animate animate} function calls. Each call to `style()` or `animate()`
     * within a group will be executed instantly (use {\@link keyframes keyframes} or a {\@link
     * animate#usage animate() with a delay value} to offset styles to be applied at a later time).
     *
     * ```typescript
     * group([
     *   animate("1s", { background: "black" }))
     *   animate("2s", { color: "white" }))
     * ])
     * ```
     *
     * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
     *
     * \@experimental Animation support is experimental.
     * @param {?} steps
     * @return {?}
     */
    function group$2(steps) {
        return { type: 3 /* Group */, steps: steps };
    }
    /**
     * `sequence` is an animation-specific function that is designed to be used inside of Angular2's
     * animation DSL language. If this information is new, please navigate to the {\@link
     * Component#animations-anchor component animations metadata page} to gain a better understanding of
     * how animations in Angular2 are used.
     *
     * `sequence` Specifies a list of animation steps that are run one by one. (`sequence` is used by
     * default when an array is passed as animation data into {\@link transition transition}.)
     *
     * The `sequence` function can either be used within a {\@link group group} or a {\@link transition
     * transition} and it will only continue to the next instruction once each of the inner animation
     * steps have completed.
     *
     * To perform animation styling in parallel with other animation steps then have a look at the
     * {\@link group group} animation function.
     *
     * ### Usage
     *
     * The `steps` data that is passed into the `sequence` animation function can either consist of
     * {\@link style style} or {\@link animate animate} function calls. A call to `style()` will apply the
     * provided styling data immediately while a call to `animate()` will apply its styling data over a
     * given time depending on its timing data.
     *
     * ```typescript
     * sequence([
     *   style({ opacity: 0 })),
     *   animate("1s", { opacity: 1 }))
     * ])
     * ```
     *
     * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
     *
     * \@experimental Animation support is experimental.
     * @param {?} steps
     * @return {?}
     */
    function sequence$2(steps) {
        return { type: 2 /* Sequence */, steps: steps };
    }
    /**
     * `style` is an animation-specific function that is designed to be used inside of Angular2's
     * animation DSL language. If this information is new, please navigate to the {\@link
     * Component#animations-anchor component animations metadata page} to gain a better understanding of
     * how animations in Angular2 are used.
     *
     * `style` declares a key/value object containing CSS properties/styles that can then be used for
     * {\@link state animation states}, within an {\@link sequence animation sequence}, or as styling data
     * for both {\@link animate animate} and {\@link keyframes keyframes}.
     *
     * ### Usage
     *
     * `style` takes in a key/value string map as data and expects one or more CSS property/value pairs
     * to be defined.
     *
     * ```typescript
     * // string values are used for css properties
     * style({ background: "red", color: "blue" })
     *
     * // numerical (pixel) values are also supported
     * style({ width: 100, height: 0 })
     * ```
     *
     * #### Auto-styles (using `*`)
     *
     * When an asterix (`*`) character is used as a value then it will be detected from the element
     * being animated and applied as animation data when the animation starts.
     *
     * This feature proves useful for a state depending on layout and/or environment factors; in such
     * cases the styles are calculated just before the animation starts.
     *
     * ```typescript
     * // the steps below will animate from 0 to the
     * // actual height of the element
     * style({ height: 0 }),
     * animate("1s", style({ height: "*" }))
     * ```
     *
     * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
     *
     * \@experimental Animation support is experimental.
     * @param {?} tokens
     * @return {?}
     */
    function style$2(tokens) {
        var /** @type {?} */input = void 0;
        var /** @type {?} */offset = null;
        if (Array.isArray(tokens)) {
            input = tokens;
        } else {
            input = [/** @type {?} */tokens];
        }
        input.forEach(function (entry) {
            var /** @type {?} */entryOffset = entry['offset'];
            if (entryOffset != null) {
                offset = offset == null ? parseFloat( /** @type {?} */entryOffset) : offset;
            }
        });
        return _style(offset, input);
    }
    /**
     * @param {?} offset
     * @param {?} styles
     * @return {?}
     */
    function _style(offset, styles) {
        return { type: 6 /* Style */, styles: styles, offset: offset };
    }
    /**
     * `state` is an animation-specific function that is designed to be used inside of Angular2's
     * animation DSL language. If this information is new, please navigate to the {\@link
     * Component#animations-anchor component animations metadata page} to gain a better understanding of
     * how animations in Angular2 are used.
     *
     * `state` declares an animation state within the given trigger. When a state is active within a
     * component then its associated styles will persist on the element that the trigger is attached to
     * (even when the animation ends).
     *
     * To animate between states, have a look at the animation {\@link transition transition} DSL
     * function. To register states to an animation trigger please have a look at the {\@link trigger
     * trigger} function.
     *
     * #### The `void` state
     *
     * The `void` state value is a reserved word that angular uses to determine when the element is not
     * apart of the application anymore (e.g. when an `ngIf` evaluates to false then the state of the
     * associated element is void).
     *
     * #### The `*` (default) state
     *
     * The `*` state (when styled) is a fallback state that will be used if the state that is being
     * animated is not declared within the trigger.
     *
     * ### Usage
     *
     * `state` will declare an animation state with its associated styles
     * within the given trigger.
     *
     * - `stateNameExpr` can be one or more state names separated by commas.
     * - `styles` refers to the {\@link style styling data} that will be persisted on the element once
     * the state has been reached.
     *
     * ```typescript
     * // "void" is a reserved name for a state and is used to represent
     * // the state in which an element is detached from from the application.
     * state("void", style({ height: 0 }))
     *
     * // user-defined states
     * state("closed", style({ height: 0 }))
     * state("open, visible", style({ height: "*" }))
     * ```
     *
     * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
     *
     * \@experimental Animation support is experimental.
     * @param {?} name
     * @param {?} styles
     * @return {?}
     */
    function state$2(name, styles) {
        return { type: 0 /* State */, name: name, styles: styles };
    }
    /**
     * `keyframes` is an animation-specific function that is designed to be used inside of Angular2's
     * animation DSL language. If this information is new, please navigate to the {\@link
     * Component#animations-anchor component animations metadata page} to gain a better understanding of
     * how animations in Angular2 are used.
     *
     * `keyframes` specifies a collection of {\@link style style} entries each optionally characterized
     * by an `offset` value.
     *
     * ### Usage
     *
     * The `keyframes` animation function is designed to be used alongside the {\@link animate animate}
     * animation function. Instead of applying animations from where they are currently to their
     * destination, keyframes can describe how each style entry is applied and at what point within the
     * animation arc (much like CSS Keyframe Animations do).
     *
     * For each `style()` entry an `offset` value can be set. Doing so allows to specifiy at what
     * percentage of the animate time the styles will be applied.
     *
     * ```typescript
     * // the provided offset values describe when each backgroundColor value is applied.
     * animate("5s", keyframes([
     *   style({ backgroundColor: "red", offset: 0 }),
     *   style({ backgroundColor: "blue", offset: 0.2 }),
     *   style({ backgroundColor: "orange", offset: 0.3 }),
     *   style({ backgroundColor: "black", offset: 1 })
     * ]))
     * ```
     *
     * Alternatively, if there are no `offset` values used within the style entries then the offsets
     * will be calculated automatically.
     *
     * ```typescript
     * animate("5s", keyframes([
     *   style({ backgroundColor: "red" }) // offset = 0
     *   style({ backgroundColor: "blue" }) // offset = 0.33
     *   style({ backgroundColor: "orange" }) // offset = 0.66
     *   style({ backgroundColor: "black" }) // offset = 1
     * ]))
     * ```
     *
     * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
     *
     * \@experimental Animation support is experimental.
     * @param {?} steps
     * @return {?}
     */
    function keyframes$2(steps) {
        return { type: 5 /* KeyframeSequence */, steps: steps };
    }
    /**
     * `transition` is an animation-specific function that is designed to be used inside of Angular2's
     * animation DSL language. If this information is new, please navigate to the {\@link
     * Component#animations-anchor component animations metadata page} to gain a better understanding of
     * how animations in Angular2 are used.
     *
     * `transition` declares the {\@link sequence sequence of animation steps} that will be run when the
     * provided `stateChangeExpr` value is satisfied. The `stateChangeExpr` consists of a `state1 =>
     * state2` which consists of two known states (use an asterix (`*`) to refer to a dynamic starting
     * and/or ending state).
     *
     * A function can also be provided as the `stateChangeExpr` argument for a transition and this
     * function will be executed each time a state change occurs. If the value returned within the
     * function is true then the associated animation will be run.
     *
     * Animation transitions are placed within an {\@link trigger animation trigger}. For an transition
     * to animate to a state value and persist its styles then one or more {\@link state animation
     * states} is expected to be defined.
     *
     * ### Usage
     *
     * An animation transition is kicked off the `stateChangeExpr` predicate evaluates to true based on
     * what the previous state is and what the current state has become. In other words, if a transition
     * is defined that matches the old/current state criteria then the associated animation will be
     * triggered.
     *
     * ```typescript
     * // all transition/state changes are defined within an animation trigger
     * trigger("myAnimationTrigger", [
     *   // if a state is defined then its styles will be persisted when the
     *   // animation has fully completed itself
     *   state("on", style({ background: "green" })),
     *   state("off", style({ background: "grey" })),
     *
     *   // a transition animation that will be kicked off when the state value
     *   // bound to "myAnimationTrigger" changes from "on" to "off"
     *   transition("on => off", animate(500)),
     *
     *   // it is also possible to do run the same animation for both directions
     *   transition("on <=> off", animate(500)),
     *
     *   // or to define multiple states pairs separated by commas
     *   transition("on => off, off => void", animate(500)),
     *
     *   // this is a catch-all state change for when an element is inserted into
     *   // the page and the destination state is unknown
     *   transition("void => *", [
     *     style({ opacity: 0 }),
     *     animate(500)
     *   ]),
     *
     *   // this will capture a state change between any states
     *   transition("* => *", animate("1s 0s")),
     *
     *   // you can also go full out and include a function
     *   transition((fromState, toState) => {
     *     // when `true` then it will allow the animation below to be invoked
     *     return fromState == "off" && toState == "on";
     *   }, animate("1s 0s"))
     * ])
     * ```
     *
     * The template associated with this component will make use of the `myAnimationTrigger` animation
     * trigger by binding to an element within its template code.
     *
     * ```html
     * <!-- somewhere inside of my-component-tpl.html -->
     * <div [\@myAnimationTrigger]="myStatusExp">...</div>
     * ```
     *
     * #### The final `animate` call
     *
     * If the final step within the transition steps is a call to `animate()` that **only** uses a
     * timing value with **no style data** then it will be automatically used as the final animation arc
     * for the element to animate itself to the final state. This involves an automatic mix of
     * adding/removing CSS styles so that the element will be in the exact state it should be for the
     * applied state to be presented correctly.
     *
     * ```
     * // start off by hiding the element, but make sure that it animates properly to whatever state
     * // is currently active for "myAnimationTrigger"
     * transition("void => *", [
     *   style({ opacity: 0 }),
     *   animate(500)
     * ])
     * ```
     *
     * ### Transition Aliases (`:enter` and `:leave`)
     *
     * Given that enter (insertion) and leave (removal) animations are so common, the `transition`
     * function accepts both `:enter` and `:leave` values which are aliases for the `void => *` and `*
     * => void` state changes.
     *
     * ```
     * transition(":enter", [
     *   style({ opacity: 0 }),
     *   animate(500, style({ opacity: 1 }))
     * ])
     * transition(":leave", [
     *   animate(500, style({ opacity: 0 }))
     * ])
     * ```
     *
     * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
     *
     * \@experimental Animation support is experimental.
     * @param {?} stateChangeExpr
     * @param {?} steps
     * @return {?}
     */
    function transition$2(stateChangeExpr, steps) {
        return {
            type: 1 /* Transition */
            , expr: stateChangeExpr,
            animation: Array.isArray(steps) ? sequence$2(steps) : steps
        };
    }

    /**
     * @deprecated This symbol has moved. Please Import from @angular/animations instead!
     */
    var /** @type {?} */AUTO_STYLE$1 = '*';
    /**
     * @deprecated This symbol has moved. Please Import from \@angular/animations instead!
     * @param {?} name
     * @param {?} definitions
     * @return {?}
     */
    function trigger$1(name, definitions) {
        return trigger$2(name, definitions);
    }
    /**
     * @deprecated This symbol has moved. Please Import from \@angular/animations instead!
     * @param {?} timings
     * @param {?=} styles
     * @return {?}
     */
    function animate$1(timings) {
        var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        return animate$2(timings, styles);
    }
    /**
     * @deprecated This symbol has moved. Please Import from \@angular/animations instead!
     * @param {?} steps
     * @return {?}
     */
    function group$1(steps) {
        return group$2(steps);
    }
    /**
     * @deprecated This symbol has moved. Please Import from \@angular/animations instead!
     * @param {?} steps
     * @return {?}
     */
    function sequence$1(steps) {
        return sequence$2(steps);
    }
    /**
     * @deprecated This symbol has moved. Please Import from \@angular/animations instead!
     * @param {?} tokens
     * @return {?}
     */
    function style$1(tokens) {
        return style$2(tokens);
    }
    /**
     * @deprecated This symbol has moved. Please Import from \@angular/animations instead!
     * @param {?} name
     * @param {?} styles
     * @return {?}
     */
    function state$1(name, styles) {
        return state$2(name, styles);
    }
    /**
     * @deprecated This symbol has moved. Please Import from \@angular/animations instead!
     * @param {?} steps
     * @return {?}
     */
    function keyframes$1(steps) {
        return keyframes$2(steps);
    }
    /**
     * @deprecated This symbol has moved. Please Import from \@angular/animations instead!
     * @param {?} stateChangeExpr
     * @param {?} steps
     * @return {?}
     */
    function transition$1(stateChangeExpr, steps) {
        return transition$2(stateChangeExpr, steps);
    }

    exports.createPlatform = createPlatform;
    exports.assertPlatform = assertPlatform;
    exports.destroyPlatform = destroyPlatform;
    exports.getPlatform = getPlatform;
    exports.PlatformRef = PlatformRef;
    exports.ApplicationRef = ApplicationRef;
    exports.enableProdMode = enableProdMode;
    exports.isDevMode = isDevMode;
    exports.createPlatformFactory = createPlatformFactory;
    exports.NgProbeToken = NgProbeToken;
    exports.APP_ID = APP_ID;
    exports.PACKAGE_ROOT_URL = PACKAGE_ROOT_URL;
    exports.PLATFORM_INITIALIZER = PLATFORM_INITIALIZER;
    exports.PLATFORM_ID = PLATFORM_ID;
    exports.APP_BOOTSTRAP_LISTENER = APP_BOOTSTRAP_LISTENER;
    exports.APP_INITIALIZER = APP_INITIALIZER;
    exports.ApplicationInitStatus = ApplicationInitStatus;
    exports.DebugElement = DebugElement;
    exports.DebugNode = DebugNode;
    exports.asNativeElements = asNativeElements;
    exports.getDebugNode = getDebugNode;
    exports.Testability = Testability;
    exports.TestabilityRegistry = TestabilityRegistry;
    exports.setTestabilityGetter = setTestabilityGetter;
    exports.TRANSLATIONS = TRANSLATIONS;
    exports.TRANSLATIONS_FORMAT = TRANSLATIONS_FORMAT;
    exports.LOCALE_ID = LOCALE_ID;
    exports.MissingTranslationStrategy = MissingTranslationStrategy;
    exports.ApplicationModule = ApplicationModule;
    exports.wtfCreateScope = wtfCreateScope;
    exports.wtfLeave = wtfLeave;
    exports.wtfStartTimeRange = wtfStartTimeRange;
    exports.wtfEndTimeRange = wtfEndTimeRange;
    exports.Type = Type;
    exports.EventEmitter = EventEmitter;
    exports.ErrorHandler = ErrorHandler;
    exports.AnimationPlayer = AnimationPlayer;
    exports.AnimationStyles = AnimationStyles;
    exports.AnimationKeyframe = AnimationKeyframe;
    exports.Sanitizer = Sanitizer;
    exports.SecurityContext = SecurityContext;
    exports.ANALYZE_FOR_ENTRY_COMPONENTS = ANALYZE_FOR_ENTRY_COMPONENTS;
    exports.Attribute = Attribute;
    exports.ContentChild = ContentChild;
    exports.ContentChildren = ContentChildren;
    exports.Query = Query;
    exports.ViewChild = ViewChild;
    exports.ViewChildren = ViewChildren;
    exports.Component = Component;
    exports.Directive = Directive;
    exports.HostBinding = HostBinding;
    exports.HostListener = HostListener;
    exports.Input = Input;
    exports.Output = Output;
    exports.Pipe = Pipe;
    exports.CUSTOM_ELEMENTS_SCHEMA = CUSTOM_ELEMENTS_SCHEMA;
    exports.NO_ERRORS_SCHEMA = NO_ERRORS_SCHEMA;
    exports.NgModule = NgModule;
    exports.ViewEncapsulation = ViewEncapsulation;
    exports.Version = Version;
    exports.VERSION = VERSION;
    exports.Class = Class;
    exports.forwardRef = forwardRef;
    exports.resolveForwardRef = resolveForwardRef;
    exports.Injector = Injector;
    exports.ReflectiveInjector = ReflectiveInjector;
    exports.ResolvedReflectiveFactory = ResolvedReflectiveFactory;
    exports.ReflectiveKey = ReflectiveKey;
    exports.InjectionToken = InjectionToken;
    exports.OpaqueToken = OpaqueToken;
    exports.Inject = Inject;
    exports.Optional = Optional;
    exports.Injectable = Injectable;
    exports.Self = Self;
    exports.SkipSelf = SkipSelf;
    exports.Host = Host;
    exports.NgZone = NgZone;
    exports.RenderComponentType = RenderComponentType;
    exports.Renderer = RendererV1;
    exports.RendererFactoryV2 = RendererFactoryV2;
    exports.RendererV2 = RendererV2;
    exports.RootRenderer = RootRenderer;
    exports.COMPILER_OPTIONS = COMPILER_OPTIONS;
    exports.Compiler = Compiler;
    exports.CompilerFactory = CompilerFactory;
    exports.ModuleWithComponentFactories = ModuleWithComponentFactories;
    exports.ComponentFactory = ComponentFactory;
    exports.ComponentRef = ComponentRef;
    exports.ComponentFactoryResolver = ComponentFactoryResolver;
    exports.ElementRef = ElementRef;
    exports.NgModuleFactory = NgModuleFactory;
    exports.NgModuleRef = NgModuleRef;
    exports.NgModuleFactoryLoader = NgModuleFactoryLoader;
    exports.getModuleFactory = getModuleFactory;
    exports.QueryList = QueryList;
    exports.SystemJsNgModuleLoader = SystemJsNgModuleLoader;
    exports.SystemJsNgModuleLoaderConfig = SystemJsNgModuleLoaderConfig;
    exports.TemplateRef = TemplateRef;
    exports.ViewContainerRef = ViewContainerRef;
    exports.EmbeddedViewRef = EmbeddedViewRef;
    exports.ViewRef = ViewRef;
    exports.ChangeDetectionStrategy = ChangeDetectionStrategy;
    exports.ChangeDetectorRef = ChangeDetectorRef;
    exports.DefaultIterableDiffer = DefaultIterableDiffer;
    exports.IterableDiffers = IterableDiffers;
    exports.KeyValueDiffers = KeyValueDiffers;
    exports.SimpleChange = SimpleChange;
    exports.WrappedValue = WrappedValue;
    exports.platformCore = platformCore;
    exports.ɵANY_STATE = ANY_STATE;
    exports.ɵDEFAULT_STATE = DEFAULT_STATE;
    exports.ɵEMPTY_STATE = EMPTY_STATE;
    exports.ɵFILL_STYLE_FLAG = FILL_STYLE_FLAG;
    exports.ɵAnimationGroupPlayer = AnimationGroupPlayer;
    exports.ɵAnimationKeyframe = AnimationKeyframe;
    exports.ɵAnimationPlayer = AnimationPlayer;
    exports.ɵNoOpAnimationPlayer = NoOpAnimationPlayer;
    exports.ɵAnimationSequencePlayer = AnimationSequencePlayer;
    exports.ɵbalanceAnimationKeyframes = balanceAnimationKeyframes;
    exports.ɵclearStyles = clearStyles;
    exports.ɵcollectAndResolveStyles = collectAndResolveStyles;
    exports.ɵflattenStyles = flattenStyles;
    exports.ɵprepareFinalAnimationStyles = prepareFinalAnimationStyles;
    exports.ɵrenderStyles = renderStyles;
    exports.ɵAnimationStyles = AnimationStyles;
    exports.ɵAnimationTransition = AnimationTransition;
    exports.ɵALLOW_MULTIPLE_PLATFORMS = ALLOW_MULTIPLE_PLATFORMS;
    exports.ɵAPP_ID_RANDOM_PROVIDER = APP_ID_RANDOM_PROVIDER;
    exports.ɵValueUnwrapper = ValueUnwrapper;
    exports.ɵdevModeEqual = devModeEqual;
    exports.ɵChangeDetectorStatus = ChangeDetectorStatus;
    exports.ɵisDefaultChangeDetectionStrategy = isDefaultChangeDetectionStrategy;
    exports.ɵConsole = Console;
    exports.ɵDebugDomRootRenderer = DebugDomRootRenderer;
    exports.ɵERROR_COMPONENT_TYPE = ERROR_COMPONENT_TYPE;
    exports.ɵComponentFactory = ComponentFactory;
    exports.ɵCodegenComponentFactoryResolver = CodegenComponentFactoryResolver;
    exports.ɵDebugContext = DebugContext$1;
    exports.ɵStaticNodeDebugInfo = StaticNodeDebugInfo;
    exports.ɵAppView = AppView;
    exports.ɵDebugAppView = DebugAppView;
    exports.ɵViewContainer = ViewContainer;
    exports.ɵViewType = ViewType;
    exports.ɵLIFECYCLE_HOOKS_VALUES = LIFECYCLE_HOOKS_VALUES;
    exports.ɵLifecycleHooks = LifecycleHooks;
    exports.ɵViewMetadata = ViewMetadata;
    exports.ɵReflector = Reflector;
    exports.ɵreflector = reflector;
    exports.ɵReflectionCapabilities = ReflectionCapabilities;
    exports.ɵReflectorReader = ReflectorReader;
    exports.ɵRenderDebugInfo = RenderDebugInfo;
    exports.ɵmakeDecorator = makeDecorator;
    exports.ɵisObservable = isObservable;
    exports.ɵisPromise = isPromise;
    exports.ɵComponentRef_ = ComponentRef_;
    exports.ɵNgModuleInjector = NgModuleInjector;
    exports.ɵregisterModuleFactory = registerModuleFactory;
    exports.ɵTemplateRef_ = TemplateRef_;
    exports.ɵEMPTY_ARRAY = EMPTY_ARRAY;
    exports.ɵEMPTY_INLINE_ARRAY = EMPTY_INLINE_ARRAY;
    exports.ɵEMPTY_MAP = EMPTY_MAP;
    exports.ɵInlineArray16 = InlineArray16;
    exports.ɵInlineArray2 = InlineArray2;
    exports.ɵInlineArray4 = InlineArray4;
    exports.ɵInlineArray8 = InlineArray8;
    exports.ɵInlineArrayDynamic = InlineArrayDynamic;
    exports.ɵViewUtils = ViewUtils;
    exports.ɵcastByValue = castByValue;
    exports.ɵcheckBinding = checkBinding;
    exports.ɵcheckBindingChange = checkBindingChange;
    exports.ɵcheckRenderAttribute = checkRenderAttribute;
    exports.ɵcheckRenderClass = checkRenderClass;
    exports.ɵcheckRenderProperty = checkRenderProperty;
    exports.ɵcheckRenderStyle = checkRenderStyle;
    exports.ɵcheckRenderText = checkRenderText;
    exports.ɵcreateRenderComponentType = createRenderComponentType;
    exports.ɵcreateRenderElement = createRenderElement;
    exports.ɵgetComponentFactoryViewClass = getComponentFactoryViewClass;
    exports.ɵinlineInterpolate = inlineInterpolate;
    exports.ɵinterpolate = interpolate;
    exports.ɵnoop = noop;
    exports.ɵpureProxy1 = pureProxy1;
    exports.ɵpureProxy10 = pureProxy10;
    exports.ɵpureProxy2 = pureProxy2;
    exports.ɵpureProxy3 = pureProxy3;
    exports.ɵpureProxy4 = pureProxy4;
    exports.ɵpureProxy5 = pureProxy5;
    exports.ɵpureProxy6 = pureProxy6;
    exports.ɵpureProxy7 = pureProxy7;
    exports.ɵpureProxy8 = pureProxy8;
    exports.ɵpureProxy9 = pureProxy9;
    exports.ɵselectOrCreateRenderHostElement = selectOrCreateRenderHostElement;
    exports.ɵsetBindingDebugInfo = setBindingDebugInfo;
    exports.ɵsetBindingDebugInfoForChanges = setBindingDebugInfoForChanges;
    exports.ɵsubscribeToRenderElement = subscribeToRenderElement;
    exports.ɵArgumentType = ArgumentType;
    exports.ɵBindingType = BindingType;
    exports.ɵDepFlags = DepFlags;
    exports.ɵNodeFlags = NodeFlags;
    exports.ɵProviderType = ProviderType;
    exports.ɵQueryBindingType = QueryBindingType;
    exports.ɵQueryValueType = QueryValueType;
    exports.ɵViewFlags = ViewFlags;
    exports.ɵanchorDef = anchorDef;
    exports.ɵcreateComponentFactory = createComponentFactory;
    exports.ɵcreateRendererTypeV2 = createRendererTypeV2;
    exports.ɵdirectiveDef = directiveDef;
    exports.ɵelementDef = elementDef;
    exports.ɵelementEventFullName = elementEventFullName;
    exports.ɵngContentDef = ngContentDef;
    exports.ɵnodeValue = nodeValue;
    exports.ɵpipeDef = pipeDef;
    exports.ɵproviderDef = providerDef;
    exports.ɵpureArrayDef = pureArrayDef;
    exports.ɵpureObjectDef = pureObjectDef;
    exports.ɵpurePipeDef = purePipeDef;
    exports.ɵqueryDef = queryDef;
    exports.ɵtextDef = textDef;
    exports.ɵunwrapValue = unwrapValue;
    exports.ɵviewDef = viewDef;
    exports.AUTO_STYLE = AUTO_STYLE$1;
    exports.trigger = trigger$1;
    exports.animate = animate$1;
    exports.group = group$1;
    exports.sequence = sequence$1;
    exports.style = style$1;
    exports.state = state$1;
    exports.keyframes = keyframes$1;
    exports.transition = transition$1;
    exports.ɵz = AnimationQueue;
    exports.ɵbc = animate$2;
    exports.ɵbd = group$2;
    exports.ɵbh = keyframes$2;
    exports.ɵbe = sequence$2;
    exports.ɵbg = state$2;
    exports.ɵbf = style$2;
    exports.ɵbi = transition$2;
    exports.ɵbb = trigger$2;
    exports.ɵp = _initViewEngine;
    exports.ɵm = _iterableDiffersFactory;
    exports.ɵn = _keyValueDiffersFactory;
    exports.ɵo = _localeFactory;
    exports.ɵf = ApplicationRef_;
    exports.ɵg = _appIdRandomProviderFactory;
    exports.ɵh = defaultIterableDiffers;
    exports.ɵi = defaultKeyValueDiffers;
    exports.ɵk = DefaultIterableDifferFactory;
    exports.ɵl = DefaultKeyValueDifferFactory;
    exports.ɵc = ReflectiveInjector_;
    exports.ɵd = ReflectiveDependency;
    exports.ɵe = resolveReflectiveProviders;
    exports.ɵj = isBlank;
    exports.ɵq = wtfEnabled;
    exports.ɵs = createScope;
    exports.ɵr = detectWTF;
    exports.ɵv = endTimeRange;
    exports.ɵt = leave;
    exports.ɵu = startTimeRange;
    exports.ɵa = makeParamDecorator;
    exports.ɵb = makePropDecorator;
    exports.ɵx = _def;
    exports.ɵy = NodeType;
});
