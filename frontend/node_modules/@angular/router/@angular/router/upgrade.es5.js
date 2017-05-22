import { ApplicationRef } from '@angular/core';
import { ROUTER_CONFIGURATION, RouterPreloader, ROUTER_INITIALIZER, Router } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

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
const RouterUpgradeInitializer = {
    provide: ROUTER_INITIALIZER,
    useFactory: initialRouterNavigation,
    deps: [UpgradeModule, ApplicationRef, RouterPreloader, ROUTER_CONFIGURATION]
};
/**
 * @internal
 */
function initialRouterNavigation(ngUpgrade, ref, preloader, opts) {
    return () => {
        if (!ngUpgrade.$injector) {
            throw new Error(`
        RouterUpgradeInitializer can be used only after UpgradeModule.bootstrap has been called.
        Remove RouterUpgradeInitializer and call setUpLocationSync after UpgradeModule.bootstrap.
      `);
        }
        const router = ngUpgrade.injector.get(Router);
        const ref = ngUpgrade.injector.get(ApplicationRef);
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
    const router = ngUpgrade.injector.get(Router);
    const url = document.createElement('a');
    ngUpgrade.$injector.get('$rootScope').$on('$locationChangeStart', (_, next, __) => {
        url.href = next;
        router.navigateByUrl(url.pathname);
    });
}

export { RouterUpgradeInitializer, initialRouterNavigation, setUpLocationSync };
