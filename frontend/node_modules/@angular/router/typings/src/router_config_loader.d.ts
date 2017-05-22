/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Compiler, ComponentFactoryResolver, InjectionToken, Injector, NgModuleFactoryLoader } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Route } from './config';
/**
 * @docsNotRequired
 * @experimental
 */
export declare const ROUTES: InjectionToken<Route[][]>;
export declare class LoadedRouterConfig {
    routes: Route[];
    injector: Injector;
    factoryResolver: ComponentFactoryResolver;
    injectorFactory: Function;
    constructor(routes: Route[], injector: Injector, factoryResolver: ComponentFactoryResolver, injectorFactory: Function);
}
export declare class RouterConfigLoader {
    private loader;
    private compiler;
    private onLoadStartListener;
    private onLoadEndListener;
    constructor(loader: NgModuleFactoryLoader, compiler: Compiler, onLoadStartListener?: (r: Route) => void, onLoadEndListener?: (r: Route) => void);
    load(parentInjector: Injector, route: Route): Observable<LoadedRouterConfig>;
    private loadModuleFactory(loadChildren);
}
