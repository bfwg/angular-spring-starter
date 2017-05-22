/**
 * @license Angular v4.0.0-rc.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('@angular/router/upgrade', ['exports', '@angular/core', '@angular/router', '@angular/upgrade/static'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/upgrade/static'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ng.core, global.ng.router, global.ng.upgrade.static);
        global.ng = global.ng || {};
        global.ng.router = global.ng.router || {};
        global.ng.router.upgrade = mod.exports;
    }
})(this, function (exports, _core, _router, _static) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.setUpLocationSync = exports.initialRouterNavigation = exports.RouterUpgradeInitializer = undefined;


    /**
     * @whatItDoes Creates an initializer that in addition to setting up the Angular
     * router sets up the ngRoute integration.
     *
     * @howToUse
     *
     * ```
     * @NgModule({
     *  imports: [
     *   RouterModule.forRoot(SOME_ROUTES),
     *   UpgradeModule
     * ],
     * providers: [
     *   RouterUpgradeInitializer
     * ]
     * })
     * export class AppModule {
     *   ngDoBootstrap() {}
     * }
     * ```
     *
     * @experimental
     */
    var RouterUpgradeInitializer = {
        provide: _router.ROUTER_INITIALIZER,
        useFactory: initialRouterNavigation,
        deps: [_static.UpgradeModule, _core.ApplicationRef, _router.RouterPreloader, _router.ROUTER_CONFIGURATION]
    };
    /**
     * @internal
     */
    function initialRouterNavigation(ngUpgrade, ref, preloader, opts) {
        return function () {
            if (!ngUpgrade.$injector) {
                throw new Error('\n        RouterUpgradeInitializer can be used only after UpgradeModule.bootstrap has been called.\n        Remove RouterUpgradeInitializer and call setUpLocationSync after UpgradeModule.bootstrap.\n      ');
            }
            var router = ngUpgrade.injector.get(_router.Router);
            var ref = ngUpgrade.injector.get(_core.ApplicationRef);
            router.resetRootComponentType(ref.componentTypes[0]);
            preloader.setUpPreloading();
            if (opts.initialNavigation === false) {
                router.setUpLocationChangeListener();
            } else {
                router.initialNavigation();
            }
            setUpLocationSync(ngUpgrade);
        };
    }
    /**
     * @whatItDoes Sets up a location synchronization.
     *
     * History.pushState does not fire onPopState, so the angular2 location
     * doesn't detect it. The workaround is to attach a location change listener
     *
     * @experimental
     */
    function setUpLocationSync(ngUpgrade) {
        var router = ngUpgrade.injector.get(_router.Router);
        var url = document.createElement('a');
        ngUpgrade.$injector.get('$rootScope').$on('$locationChangeStart', function (_, next, __) {
            url.href = next;
            router.navigateByUrl(url.pathname);
        });
    }

    exports.RouterUpgradeInitializer = RouterUpgradeInitializer;
    exports.initialRouterNavigation = initialRouterNavigation;
    exports.setUpLocationSync = setUpLocationSync;
});
