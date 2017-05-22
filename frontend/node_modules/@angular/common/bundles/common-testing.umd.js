/**
 * @license Angular v4.0.0-rc.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/common/testing', ['exports', '@angular/core', '@angular/common'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/core'), require('@angular/common'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.core, global.ng.common);
        global.ng = global.ng || {};
        global.ng.common = global.ng.common || {};
        global.ng.common.testing = mod.exports;
    }
})(this, function (exports, _core, _common) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MockLocationStrategy = exports.SpyLocation = undefined;

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

    var SpyLocation = function () {
        function SpyLocation() {
            _classCallCheck(this, SpyLocation);

            this.urlChanges = [];
            this._history = [new LocationState('', '')];
            this._historyIndex = 0;
            /** @internal */
            this._subject = new _core.EventEmitter();
            /** @internal */
            this._baseHref = '';
            /** @internal */
            this._platformStrategy = null;
        }

        _createClass(SpyLocation, [{
            key: 'setInitialPath',
            value: function setInitialPath(url) {
                this._history[this._historyIndex].path = url;
            }
        }, {
            key: 'setBaseHref',
            value: function setBaseHref(url) {
                this._baseHref = url;
            }
        }, {
            key: 'path',
            value: function path() {
                return this._history[this._historyIndex].path;
            }
        }, {
            key: 'isCurrentPathEqualTo',
            value: function isCurrentPathEqualTo(path) {
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

                var givenPath = path.endsWith('/') ? path.substring(0, path.length - 1) : path;
                var currPath = this.path().endsWith('/') ? this.path().substring(0, this.path().length - 1) : this.path();
                return currPath == givenPath + (query.length > 0 ? '?' + query : '');
            }
        }, {
            key: 'simulateUrlPop',
            value: function simulateUrlPop(pathname) {
                this._subject.emit({ 'url': pathname, 'pop': true });
            }
        }, {
            key: 'simulateHashChange',
            value: function simulateHashChange(pathname) {
                // Because we don't prevent the native event, the browser will independently update the path
                this.setInitialPath(pathname);
                this.urlChanges.push('hash: ' + pathname);
                this._subject.emit({ 'url': pathname, 'pop': true, 'type': 'hashchange' });
            }
        }, {
            key: 'prepareExternalUrl',
            value: function prepareExternalUrl(url) {
                if (url.length > 0 && !url.startsWith('/')) {
                    url = '/' + url;
                }
                return this._baseHref + url;
            }
        }, {
            key: 'go',
            value: function go(path) {
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

                path = this.prepareExternalUrl(path);
                if (this._historyIndex > 0) {
                    this._history.splice(this._historyIndex + 1);
                }
                this._history.push(new LocationState(path, query));
                this._historyIndex = this._history.length - 1;
                var locationState = this._history[this._historyIndex - 1];
                if (locationState.path == path && locationState.query == query) {
                    return;
                }
                var url = path + (query.length > 0 ? '?' + query : '');
                this.urlChanges.push(url);
                this._subject.emit({ 'url': url, 'pop': false });
            }
        }, {
            key: 'replaceState',
            value: function replaceState(path) {
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

                path = this.prepareExternalUrl(path);
                var history = this._history[this._historyIndex];
                if (history.path == path && history.query == query) {
                    return;
                }
                history.path = path;
                history.query = query;
                var url = path + (query.length > 0 ? '?' + query : '');
                this.urlChanges.push('replace: ' + url);
            }
        }, {
            key: 'forward',
            value: function forward() {
                if (this._historyIndex < this._history.length - 1) {
                    this._historyIndex++;
                    this._subject.emit({ 'url': this.path(), 'pop': true });
                }
            }
        }, {
            key: 'back',
            value: function back() {
                if (this._historyIndex > 0) {
                    this._historyIndex--;
                    this._subject.emit({ 'url': this.path(), 'pop': true });
                }
            }
        }, {
            key: 'subscribe',
            value: function subscribe(onNext) {
                var onThrow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var onReturn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
            }
        }, {
            key: 'normalize',
            value: function normalize(url) {
                return null;
            }
        }]);

        return SpyLocation;
    }();

    SpyLocation.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    SpyLocation.ctorParameters = function () {
        return [];
    };

    var LocationState = function LocationState(path, query) {
        _classCallCheck(this, LocationState);

        this.path = path;
        this.query = query;
    };

    var MockLocationStrategy = function (_LocationStrategy) {
        _inherits(MockLocationStrategy, _LocationStrategy);

        function MockLocationStrategy() {
            _classCallCheck(this, MockLocationStrategy);

            var _this = _possibleConstructorReturn(this, (MockLocationStrategy.__proto__ || Object.getPrototypeOf(MockLocationStrategy)).call(this));

            _this.internalBaseHref = '/';
            _this.internalPath = '/';
            _this.internalTitle = '';
            _this.urlChanges = [];
            /** @internal */
            _this._subject = new _core.EventEmitter();
            return _this;
        }

        _createClass(MockLocationStrategy, [{
            key: 'simulatePopState',
            value: function simulatePopState(url) {
                this.internalPath = url;
                this._subject.emit(new _MockPopStateEvent(this.path()));
            }
        }, {
            key: 'path',
            value: function path() {
                var includeHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                return this.internalPath;
            }
        }, {
            key: 'prepareExternalUrl',
            value: function prepareExternalUrl(internal) {
                if (internal.startsWith('/') && this.internalBaseHref.endsWith('/')) {
                    return this.internalBaseHref + internal.substring(1);
                }
                return this.internalBaseHref + internal;
            }
        }, {
            key: 'pushState',
            value: function pushState(ctx, title, path, query) {
                this.internalTitle = title;
                var url = path + (query.length > 0 ? '?' + query : '');
                this.internalPath = url;
                var externalUrl = this.prepareExternalUrl(url);
                this.urlChanges.push(externalUrl);
            }
        }, {
            key: 'replaceState',
            value: function replaceState(ctx, title, path, query) {
                this.internalTitle = title;
                var url = path + (query.length > 0 ? '?' + query : '');
                this.internalPath = url;
                var externalUrl = this.prepareExternalUrl(url);
                this.urlChanges.push('replace: ' + externalUrl);
            }
        }, {
            key: 'onPopState',
            value: function onPopState(fn) {
                this._subject.subscribe({ next: fn });
            }
        }, {
            key: 'getBaseHref',
            value: function getBaseHref() {
                return this.internalBaseHref;
            }
        }, {
            key: 'back',
            value: function back() {
                if (this.urlChanges.length > 0) {
                    this.urlChanges.pop();
                    var nextUrl = this.urlChanges.length > 0 ? this.urlChanges[this.urlChanges.length - 1] : '';
                    this.simulatePopState(nextUrl);
                }
            }
        }, {
            key: 'forward',
            value: function forward() {
                throw 'not implemented';
            }
        }]);

        return MockLocationStrategy;
    }(_common.LocationStrategy);

    MockLocationStrategy.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    MockLocationStrategy.ctorParameters = function () {
        return [];
    };

    var _MockPopStateEvent = function _MockPopStateEvent(newUrl) {
        _classCallCheck(this, _MockPopStateEvent);

        this.newUrl = newUrl;
        this.pop = true;
        this.type = 'popstate';
    };

    exports.SpyLocation = SpyLocation;
    exports.MockLocationStrategy = MockLocationStrategy;
});
