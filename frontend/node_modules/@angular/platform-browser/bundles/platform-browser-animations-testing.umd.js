/**
 * @license Angular v4.0.0-rc.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/platform-browser/animations/testing', ['exports', '@angular/animations'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/animations'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.animations);
        global.angularPlatformBrowserAnimationsTesting = mod.exports;
    }
})(this, function (exports, _animations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MockAnimationPlayer = exports.MockAnimationDriver = undefined;

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

    var MockAnimationDriver = function () {
        function MockAnimationDriver() {
            _classCallCheck(this, MockAnimationDriver);
        }

        _createClass(MockAnimationDriver, [{
            key: 'animate',
            value: function animate(element, keyframes, duration, delay, easing) {
                var previousPlayers = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

                var player = new MockAnimationPlayer(element, keyframes, duration, delay, easing, previousPlayers);
                MockAnimationDriver.log.push(player);
                return player;
            }
        }]);

        return MockAnimationDriver;
    }();

    MockAnimationDriver.log = [];
    /**
     * @experimental Animation support is experimental.
     */

    var MockAnimationPlayer = function (_NoopAnimationPlayer) {
        _inherits(MockAnimationPlayer, _NoopAnimationPlayer);

        function MockAnimationPlayer(element, keyframes, duration, delay, easing, previousPlayers) {
            _classCallCheck(this, MockAnimationPlayer);

            var _this = _possibleConstructorReturn(this, (MockAnimationPlayer.__proto__ || Object.getPrototypeOf(MockAnimationPlayer)).call(this));

            _this.element = element;
            _this.keyframes = keyframes;
            _this.duration = duration;
            _this.delay = delay;
            _this.easing = easing;
            _this.previousPlayers = previousPlayers;
            _this.__finished = false;
            _this.previousStyles = {};
            previousPlayers.forEach(function (player) {
                if (player instanceof MockAnimationPlayer) {
                    var styles = player._captureStyles();
                    Object.keys(styles).forEach(function (prop) {
                        _this.previousStyles[prop] = styles[prop];
                    });
                }
            });
            return _this;
        }

        _createClass(MockAnimationPlayer, [{
            key: 'finish',
            value: function finish() {
                _get(MockAnimationPlayer.prototype.__proto__ || Object.getPrototypeOf(MockAnimationPlayer.prototype), 'finish', this).call(this);
                this.__finished = true;
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                _get(MockAnimationPlayer.prototype.__proto__ || Object.getPrototypeOf(MockAnimationPlayer.prototype), 'destroy', this).call(this);
                this.__finished = true;
            }
        }, {
            key: '_captureStyles',
            value: function _captureStyles() {
                var _this2 = this;

                var captures = {};
                Object.keys(this.previousStyles).forEach(function (prop) {
                    captures[prop] = _this2.previousStyles[prop];
                });
                if (this.hasStarted()) {
                    // when assembling the captured styles, it's important that
                    // we build the keyframe styles in the following order:
                    // {other styles within keyframes, ... previousStyles }
                    this.keyframes.forEach(function (kf) {
                        Object.keys(kf).forEach(function (prop) {
                            if (prop != 'offset') {
                                captures[prop] = _this2.__finished ? kf[prop] : _animations.AUTO_STYLE;
                            }
                        });
                    });
                }
                return captures;
            }
        }]);

        return MockAnimationPlayer;
    }(_animations.NoopAnimationPlayer);

    exports.MockAnimationDriver = MockAnimationDriver;
    exports.MockAnimationPlayer = MockAnimationPlayer;
});
