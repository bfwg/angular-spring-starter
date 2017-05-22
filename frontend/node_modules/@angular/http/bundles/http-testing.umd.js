/**
 * @license Angular v4.0.0-rc.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/http/testing', ['exports', '@angular/core', '@angular/http', 'rxjs/ReplaySubject', 'rxjs/Subject', 'rxjs/operator/take'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/core'), require('@angular/http'), require('rxjs/ReplaySubject'), require('rxjs/Subject'), require('rxjs/operator/take'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.core, global.ng.http, global.Rx, global.Rx, global.Rx.Observable.prototype);
        global.ng = global.ng || {};
        global.ng.http = global.ng.http || {};
        global.ng.http.testing = mod.exports;
    }
})(this, function (exports, _core, _http, _ReplaySubject, _Subject, _take) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MockBackend = exports.MockConnection = undefined;

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

    var MockConnection = function () {
        function MockConnection(req) {
            _classCallCheck(this, MockConnection);

            this.response = _take.take.call(new _ReplaySubject.ReplaySubject(1), 1);
            this.readyState = _http.ReadyState.Open;
            this.request = req;
        }
        /**
         * Sends a mock response to the connection. This response is the value that is emitted to the
         * {@link EventEmitter} returned by {@link Http}.
         *
         * ### Example
         *
         * ```
         * var connection;
         * backend.connections.subscribe(c => connection = c);
         * http.request('data.json').subscribe(res => console.log(res.text()));
         * connection.mockRespond(new Response(new ResponseOptions({ body: 'fake response' }))); //logs
         * 'fake response'
         * ```
         *
         */


        _createClass(MockConnection, [{
            key: 'mockRespond',
            value: function mockRespond(res) {
                if (this.readyState === _http.ReadyState.Done || this.readyState === _http.ReadyState.Cancelled) {
                    throw new Error('Connection has already been resolved');
                }
                this.readyState = _http.ReadyState.Done;
                this.response.next(res);
                this.response.complete();
            }
        }, {
            key: 'mockDownload',
            value: function mockDownload(res) {}
            // this.request.downloadObserver.onNext(res);
            // if (res.bytesLoaded === res.totalBytes) {
            //   this.request.downloadObserver.onCompleted();
            // }

            // TODO(jeffbcross): consider using Response type
            /**
             * Emits the provided error object as an error to the {@link Response} {@link EventEmitter}
             * returned
             * from {@link Http}.
             *
             * ### Example
             *
             * ```
             * var connection;
             * backend.connections.subscribe(c => connection = c);
             * http.request('data.json').subscribe(res => res, err => console.log(err)));
             * connection.mockError(new Error('error'));
             * ```
             *
             */

        }, {
            key: 'mockError',
            value: function mockError(err) {
                // Matches ResourceLoader semantics
                this.readyState = _http.ReadyState.Done;
                this.response.error(err);
            }
        }]);

        return MockConnection;
    }();

    var MockBackend = function () {
        function MockBackend() {
            var _this = this;

            _classCallCheck(this, MockBackend);

            this.connectionsArray = [];
            this.connections = new _Subject.Subject();
            this.connections.subscribe(function (connection) {
                return _this.connectionsArray.push(connection);
            });
            this.pendingConnections = new _Subject.Subject();
        }
        /**
         * Checks all connections, and raises an exception if any connection has not received a response.
         *
         * This method only exists in the mock implementation, not in real Backends.
         */


        _createClass(MockBackend, [{
            key: 'verifyNoPendingRequests',
            value: function verifyNoPendingRequests() {
                var pending = 0;
                this.pendingConnections.subscribe(function (c) {
                    return pending++;
                });
                if (pending > 0) throw new Error(pending + ' pending connections to be resolved');
            }
        }, {
            key: 'resolveAllConnections',
            value: function resolveAllConnections() {
                this.connections.subscribe(function (c) {
                    return c.readyState = 4;
                });
            }
        }, {
            key: 'createConnection',
            value: function createConnection(req) {
                if (!req || !(req instanceof _http.Request)) {
                    throw new Error('createConnection requires an instance of Request, got ' + req);
                }
                var connection = new MockConnection(req);
                this.connections.next(connection);
                return connection;
            }
        }]);

        return MockBackend;
    }();

    MockBackend.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    MockBackend.ctorParameters = function () {
        return [];
    };

    exports.MockConnection = MockConnection;
    exports.MockBackend = MockBackend;
});
