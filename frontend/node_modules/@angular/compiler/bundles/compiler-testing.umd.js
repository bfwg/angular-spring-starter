/**
 * @license Angular v4.0.0-rc.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/core/testing', ['exports', '@angular/core', '@angular/compiler', '@angular/core/testing'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/core'), require('@angular/compiler'), require('@angular/core/testing'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.core, global.ng.compiler, global.ng.core.testing);
        global.ng = global.ng || {};
        global.ng.core = global.ng.core || {};
        global.ng.core.testing = mod.exports;
    }
})(this, function (exports, _core, _compiler2, _testing) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MockPipeResolver = exports.MockNgModuleResolver = exports.MockDirectiveResolver = exports.MockSchemaRegistry = exports.platformCoreDynamicTesting = exports.TestingCompilerImpl = exports.TestingCompilerFactoryImpl = undefined;

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

    var MockSchemaRegistry = function () {
        function MockSchemaRegistry(existingProperties, attrPropMapping, existingElements, invalidProperties, invalidAttributes) {
            _classCallCheck(this, MockSchemaRegistry);

            this.existingProperties = existingProperties;
            this.attrPropMapping = attrPropMapping;
            this.existingElements = existingElements;
            this.invalidProperties = invalidProperties;
            this.invalidAttributes = invalidAttributes;
        }

        _createClass(MockSchemaRegistry, [{
            key: 'hasProperty',
            value: function hasProperty(tagName, property, schemas) {
                var value = this.existingProperties[property];
                return value === void 0 ? true : value;
            }
        }, {
            key: 'hasElement',
            value: function hasElement(tagName, schemaMetas) {
                var value = this.existingElements[tagName.toLowerCase()];
                return value === void 0 ? true : value;
            }
        }, {
            key: 'allKnownElementNames',
            value: function allKnownElementNames() {
                return Object.keys(this.existingElements);
            }
        }, {
            key: 'securityContext',
            value: function securityContext(selector, property, isAttribute) {
                return _core.SecurityContext.NONE;
            }
        }, {
            key: 'getMappedPropName',
            value: function getMappedPropName(attrName) {
                return this.attrPropMapping[attrName] || attrName;
            }
        }, {
            key: 'getDefaultComponentElementName',
            value: function getDefaultComponentElementName() {
                return 'ng-component';
            }
        }, {
            key: 'validateProperty',
            value: function validateProperty(name) {
                if (this.invalidProperties.indexOf(name) > -1) {
                    return { error: true, msg: 'Binding to property \'' + name + '\' is disallowed for security reasons' };
                } else {
                    return { error: false };
                }
            }
        }, {
            key: 'validateAttribute',
            value: function validateAttribute(name) {
                if (this.invalidAttributes.indexOf(name) > -1) {
                    return {
                        error: true,
                        msg: 'Binding to attribute \'' + name + '\' is disallowed for security reasons'
                    };
                } else {
                    return { error: false };
                }
            }
        }, {
            key: 'normalizeAnimationStyleProperty',
            value: function normalizeAnimationStyleProperty(propName) {
                return propName;
            }
        }, {
            key: 'normalizeAnimationStyleValue',
            value: function normalizeAnimationStyleValue(camelCaseProp, userProvidedProp, val) {
                return { error: null, value: val.toString() };
            }
        }]);

        return MockSchemaRegistry;
    }();

    function isPresent(obj) {
        return obj != null;
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
     * An implementation of {@link DirectiveResolver} that allows overriding
     * various properties of directives.
     */

    var MockDirectiveResolver = function (_DirectiveResolver) {
        _inherits(MockDirectiveResolver, _DirectiveResolver);

        function MockDirectiveResolver(_injector) {
            _classCallCheck(this, MockDirectiveResolver);

            var _this = _possibleConstructorReturn(this, (MockDirectiveResolver.__proto__ || Object.getPrototypeOf(MockDirectiveResolver)).call(this));

            _this._injector = _injector;
            _this._directives = new Map();
            _this._providerOverrides = new Map();
            _this._viewProviderOverrides = new Map();
            _this._views = new Map();
            _this._inlineTemplates = new Map();
            return _this;
        }

        _createClass(MockDirectiveResolver, [{
            key: '_clearCacheFor',
            value: function _clearCacheFor(component) {
                this._compiler.clearCacheFor(component);
            }
        }, {
            key: 'resolve',
            value: function resolve(type) {
                var throwIfNotFound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                var metadata = this._directives.get(type);
                if (!metadata) {
                    metadata = _get(MockDirectiveResolver.prototype.__proto__ || Object.getPrototypeOf(MockDirectiveResolver.prototype), 'resolve', this).call(this, type, throwIfNotFound);
                }
                if (!metadata) {
                    return null;
                }
                var providerOverrides = this._providerOverrides.get(type);
                var viewProviderOverrides = this._viewProviderOverrides.get(type);
                var providers = metadata.providers;
                if (isPresent(providerOverrides)) {
                    var originalViewProviders = metadata.providers || [];
                    providers = originalViewProviders.concat(providerOverrides);
                }
                if (metadata instanceof _core.Component) {
                    var viewProviders = metadata.viewProviders;
                    if (isPresent(viewProviderOverrides)) {
                        var _originalViewProviders = metadata.viewProviders || [];
                        viewProviders = _originalViewProviders.concat(viewProviderOverrides);
                    }
                    var view = this._views.get(type);
                    if (!view) {
                        view = metadata;
                    }
                    var animations = view.animations;
                    var templateUrl = view.templateUrl;
                    var inlineTemplate = this._inlineTemplates.get(type);
                    if (isPresent(inlineTemplate)) {
                        templateUrl = null;
                    } else {
                        inlineTemplate = view.template;
                    }
                    return new _core.Component({
                        selector: metadata.selector,
                        inputs: metadata.inputs,
                        outputs: metadata.outputs,
                        host: metadata.host,
                        exportAs: metadata.exportAs,
                        moduleId: metadata.moduleId,
                        queries: metadata.queries,
                        changeDetection: metadata.changeDetection,
                        providers: providers,
                        viewProviders: viewProviders,
                        entryComponents: metadata.entryComponents,
                        template: inlineTemplate,
                        templateUrl: templateUrl,
                        animations: animations,
                        styles: view.styles,
                        styleUrls: view.styleUrls,
                        encapsulation: view.encapsulation,
                        interpolation: view.interpolation
                    });
                }
                return new _core.Directive({
                    selector: metadata.selector,
                    inputs: metadata.inputs,
                    outputs: metadata.outputs,
                    host: metadata.host,
                    providers: providers,
                    exportAs: metadata.exportAs,
                    queries: metadata.queries
                });
            }
        }, {
            key: 'setDirective',
            value: function setDirective(type, metadata) {
                this._directives.set(type, metadata);
                this._clearCacheFor(type);
            }
        }, {
            key: 'setProvidersOverride',
            value: function setProvidersOverride(type, providers) {
                this._providerOverrides.set(type, providers);
                this._clearCacheFor(type);
            }
        }, {
            key: 'setViewProvidersOverride',
            value: function setViewProvidersOverride(type, viewProviders) {
                this._viewProviderOverrides.set(type, viewProviders);
                this._clearCacheFor(type);
            }
        }, {
            key: 'setView',
            value: function setView(component, view) {
                this._views.set(component, view);
                this._clearCacheFor(component);
            }
        }, {
            key: 'setInlineTemplate',
            value: function setInlineTemplate(component, template) {
                this._inlineTemplates.set(component, template);
                this._clearCacheFor(component);
            }
        }, {
            key: '_compiler',
            get: function get() {
                return this._injector.get(_core.Compiler);
            }
        }]);

        return MockDirectiveResolver;
    }(_compiler2.DirectiveResolver);

    MockDirectiveResolver.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    MockDirectiveResolver.ctorParameters = function () {
        return [{ type: _core.Injector }];
    };

    var MockNgModuleResolver = function (_NgModuleResolver) {
        _inherits(MockNgModuleResolver, _NgModuleResolver);

        function MockNgModuleResolver(_injector) {
            _classCallCheck(this, MockNgModuleResolver);

            var _this2 = _possibleConstructorReturn(this, (MockNgModuleResolver.__proto__ || Object.getPrototypeOf(MockNgModuleResolver)).call(this));

            _this2._injector = _injector;
            _this2._ngModules = new Map();
            return _this2;
        }
        /**
         * Overrides the {@link NgModule} for a module.
         */


        _createClass(MockNgModuleResolver, [{
            key: 'setNgModule',
            value: function setNgModule(type, metadata) {
                this._ngModules.set(type, metadata);
                this._clearCacheFor(type);
            }
        }, {
            key: 'resolve',
            value: function resolve(type) {
                var throwIfNotFound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                return this._ngModules.get(type) || _get(MockNgModuleResolver.prototype.__proto__ || Object.getPrototypeOf(MockNgModuleResolver.prototype), 'resolve', this).call(this, type, throwIfNotFound);
            }
        }, {
            key: '_clearCacheFor',
            value: function _clearCacheFor(component) {
                this._compiler.clearCacheFor(component);
            }
        }, {
            key: '_compiler',
            get: function get() {
                return this._injector.get(_core.Compiler);
            }
        }]);

        return MockNgModuleResolver;
    }(_compiler2.NgModuleResolver);

    MockNgModuleResolver.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    MockNgModuleResolver.ctorParameters = function () {
        return [{ type: _core.Injector }];
    };

    var MockPipeResolver = function (_PipeResolver) {
        _inherits(MockPipeResolver, _PipeResolver);

        function MockPipeResolver(_injector) {
            _classCallCheck(this, MockPipeResolver);

            var _this3 = _possibleConstructorReturn(this, (MockPipeResolver.__proto__ || Object.getPrototypeOf(MockPipeResolver)).call(this));

            _this3._injector = _injector;
            _this3._pipes = new Map();
            return _this3;
        }

        _createClass(MockPipeResolver, [{
            key: '_clearCacheFor',
            value: function _clearCacheFor(pipe) {
                this._compiler.clearCacheFor(pipe);
            }
        }, {
            key: 'setPipe',
            value: function setPipe(type, metadata) {
                this._pipes.set(type, metadata);
                this._clearCacheFor(type);
            }
        }, {
            key: 'resolve',
            value: function resolve(type) {
                var throwIfNotFound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                var metadata = this._pipes.get(type);
                if (!metadata) {
                    metadata = _get(MockPipeResolver.prototype.__proto__ || Object.getPrototypeOf(MockPipeResolver.prototype), 'resolve', this).call(this, type, throwIfNotFound);
                }
                return metadata;
            }
        }, {
            key: '_compiler',
            get: function get() {
                return this._injector.get(_core.Compiler);
            }
        }]);

        return MockPipeResolver;
    }(_compiler2.PipeResolver);

    MockPipeResolver.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    MockPipeResolver.ctorParameters = function () {
        return [{ type: _core.Injector }];
    };

    var _nextReferenceId = 0;

    var MetadataOverrider = function () {
        function MetadataOverrider() {
            _classCallCheck(this, MetadataOverrider);

            this._references = new Map();
        }
        /**
         * Creates a new instance for the given metadata class
         * based on an old instance and overrides.
         */


        _createClass(MetadataOverrider, [{
            key: 'overrideMetadata',
            value: function overrideMetadata(metadataClass, oldMetadata, override) {
                var props = {};
                if (oldMetadata) {
                    _valueProps(oldMetadata).forEach(function (prop) {
                        return props[prop] = oldMetadata[prop];
                    });
                }
                if (override.set) {
                    if (override.remove || override.add) {
                        throw new Error('Cannot set and add/remove ' + stringify(metadataClass) + ' at the same time!');
                    }
                    setMetadata(props, override.set);
                }
                if (override.remove) {
                    removeMetadata(props, override.remove, this._references);
                }
                if (override.add) {
                    addMetadata(props, override.add);
                }
                return new metadataClass(props);
            }
        }]);

        return MetadataOverrider;
    }();

    function removeMetadata(metadata, remove, references) {
        var removeObjects = new Set();

        var _loop = function _loop(prop) {
            var removeValue = remove[prop];
            if (removeValue instanceof Array) {
                removeValue.forEach(function (value) {
                    removeObjects.add(_propHashKey(prop, value, references));
                });
            } else {
                removeObjects.add(_propHashKey(prop, removeValue, references));
            }
        };

        for (var prop in remove) {
            _loop(prop);
        }

        var _loop2 = function _loop2(prop) {
            var propValue = metadata[prop];
            if (propValue instanceof Array) {
                metadata[prop] = propValue.filter(function (value) {
                    return !removeObjects.has(_propHashKey(prop, value, references));
                });
            } else {
                if (removeObjects.has(_propHashKey(prop, propValue, references))) {
                    metadata[prop] = undefined;
                }
            }
        };

        for (var prop in metadata) {
            _loop2(prop);
        }
    }
    function addMetadata(metadata, add) {
        for (var prop in add) {
            var addValue = add[prop];
            var _propValue = metadata[prop];
            if (_propValue != null && _propValue instanceof Array) {
                metadata[prop] = _propValue.concat(addValue);
            } else {
                metadata[prop] = addValue;
            }
        }
    }
    function setMetadata(metadata, set) {
        for (var prop in set) {
            metadata[prop] = set[prop];
        }
    }
    function _propHashKey(propName, propValue, references) {
        var replacer = function replacer(key, value) {
            if (typeof value === 'function') {
                value = _serializeReference(value, references);
            }
            return value;
        };
        return propName + ':' + JSON.stringify(propValue, replacer);
    }
    function _serializeReference(ref, references) {
        var id = references.get(ref);
        if (!id) {
            id = '' + stringify(ref) + _nextReferenceId++;
            references.set(ref, id);
        }
        return id;
    }
    function _valueProps(obj) {
        var props = [];
        // regular public props
        Object.keys(obj).forEach(function (prop) {
            if (!prop.startsWith('_')) {
                props.push(prop);
            }
        });
        // getters
        var proto = obj;
        while (proto = Object.getPrototypeOf(proto)) {
            Object.keys(proto).forEach(function (protoProp) {
                var desc = Object.getOwnPropertyDescriptor(proto, protoProp);
                if (!protoProp.startsWith('_') && desc && 'get' in desc) {
                    props.push(protoProp);
                }
            });
        }
        return props;
    }

    var TestingCompilerFactoryImpl = function () {
        function TestingCompilerFactoryImpl(_compilerFactory) {
            _classCallCheck(this, TestingCompilerFactoryImpl);

            this._compilerFactory = _compilerFactory;
        }

        _createClass(TestingCompilerFactoryImpl, [{
            key: 'createTestingCompiler',
            value: function createTestingCompiler(options) {
                var compiler = this._compilerFactory.createCompiler(options);
                return new TestingCompilerImpl(compiler, compiler.injector.get(MockDirectiveResolver), compiler.injector.get(MockPipeResolver), compiler.injector.get(MockNgModuleResolver));
            }
        }]);

        return TestingCompilerFactoryImpl;
    }();

    TestingCompilerFactoryImpl.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    TestingCompilerFactoryImpl.ctorParameters = function () {
        return [{ type: _core.CompilerFactory }];
    };

    var TestingCompilerImpl = function () {
        function TestingCompilerImpl(_compiler, _directiveResolver, _pipeResolver, _moduleResolver) {
            _classCallCheck(this, TestingCompilerImpl);

            this._compiler = _compiler;
            this._directiveResolver = _directiveResolver;
            this._pipeResolver = _pipeResolver;
            this._moduleResolver = _moduleResolver;
            this._overrider = new MetadataOverrider();
        }

        _createClass(TestingCompilerImpl, [{
            key: 'compileModuleSync',
            value: function compileModuleSync(moduleType) {
                return this._compiler.compileModuleSync(moduleType);
            }
        }, {
            key: 'compileModuleAsync',
            value: function compileModuleAsync(moduleType) {
                return this._compiler.compileModuleAsync(moduleType);
            }
        }, {
            key: 'compileModuleAndAllComponentsSync',
            value: function compileModuleAndAllComponentsSync(moduleType) {
                return this._compiler.compileModuleAndAllComponentsSync(moduleType);
            }
        }, {
            key: 'compileModuleAndAllComponentsAsync',
            value: function compileModuleAndAllComponentsAsync(moduleType) {
                return this._compiler.compileModuleAndAllComponentsAsync(moduleType);
            }
        }, {
            key: 'getNgContentSelectors',
            value: function getNgContentSelectors(component) {
                return this._compiler.getNgContentSelectors(component);
            }
        }, {
            key: 'overrideModule',
            value: function overrideModule(ngModule, override) {
                var oldMetadata = this._moduleResolver.resolve(ngModule, false);
                this._moduleResolver.setNgModule(ngModule, this._overrider.overrideMetadata(_core.NgModule, oldMetadata, override));
            }
        }, {
            key: 'overrideDirective',
            value: function overrideDirective(directive, override) {
                var oldMetadata = this._directiveResolver.resolve(directive, false);
                this._directiveResolver.setDirective(directive, this._overrider.overrideMetadata(_core.Directive, oldMetadata, override));
            }
        }, {
            key: 'overrideComponent',
            value: function overrideComponent(component, override) {
                var oldMetadata = this._directiveResolver.resolve(component, false);
                this._directiveResolver.setDirective(component, this._overrider.overrideMetadata(_core.Component, oldMetadata, override));
            }
        }, {
            key: 'overridePipe',
            value: function overridePipe(pipe, override) {
                var oldMetadata = this._pipeResolver.resolve(pipe, false);
                this._pipeResolver.setPipe(pipe, this._overrider.overrideMetadata(_core.Pipe, oldMetadata, override));
            }
        }, {
            key: 'clearCache',
            value: function clearCache() {
                this._compiler.clearCache();
            }
        }, {
            key: 'clearCacheFor',
            value: function clearCacheFor(type) {
                this._compiler.clearCacheFor(type);
            }
        }, {
            key: 'injector',
            get: function get() {
                return this._compiler.injector;
            }
        }]);

        return TestingCompilerImpl;
    }();

    /**
     * Platform for dynamic tests
     *
     * @experimental
     */
    var platformCoreDynamicTesting = (0, _core.createPlatformFactory)(_compiler2.platformCoreDynamic, 'coreDynamicTesting', [{
        provide: _core.COMPILER_OPTIONS,
        useValue: {
            providers: [MockPipeResolver, { provide: _compiler2.PipeResolver, useExisting: MockPipeResolver }, MockDirectiveResolver, { provide: _compiler2.DirectiveResolver, useExisting: MockDirectiveResolver }, MockNgModuleResolver, { provide: _compiler2.NgModuleResolver, useExisting: MockNgModuleResolver }]
        },
        multi: true
    }, { provide: _testing.ɵTestingCompilerFactory, useClass: TestingCompilerFactoryImpl }]);

    exports.TestingCompilerFactoryImpl = TestingCompilerFactoryImpl;
    exports.TestingCompilerImpl = TestingCompilerImpl;
    exports.platformCoreDynamicTesting = platformCoreDynamicTesting;
    exports.MockSchemaRegistry = MockSchemaRegistry;
    exports.MockDirectiveResolver = MockDirectiveResolver;
    exports.MockNgModuleResolver = MockNgModuleResolver;
    exports.MockPipeResolver = MockPipeResolver;
});
