import { BindingDef, DepDef, DepFlags, NodeDef, NodeFlags, NodeType, OutputDef, ProviderType, QueryValueType, ViewData } from './types';
export declare function directiveDef(flags: NodeFlags, matchedQueries: [string | number, QueryValueType][], childCount: number, ctor: any, deps: ([DepFlags, any] | any)[], props?: {
    [name: string]: [number, string];
}, outputs?: {
    [name: string]: string;
}): NodeDef;
export declare function pipeDef(flags: NodeFlags, ctor: any, deps: ([DepFlags, any] | any)[]): NodeDef;
export declare function providerDef(flags: NodeFlags, matchedQueries: [string | number, QueryValueType][], type: ProviderType, token: any, value: any, deps: ([DepFlags, any] | any)[]): NodeDef;
export declare function _def(type: NodeType, flags: NodeFlags, matchedQueriesDsl: [string | number, QueryValueType][], childCount: number, providerType: ProviderType, token: any, value: any, deps: ([DepFlags, any] | any)[], bindings?: BindingDef[], outputs?: OutputDef[]): NodeDef;
export declare function createProviderInstance(view: ViewData, def: NodeDef): any;
export declare function createPipeInstance(view: ViewData, def: NodeDef): any;
export declare function createDirectiveInstance(view: ViewData, def: NodeDef): any;
export declare function checkAndUpdateDirectiveInline(view: ViewData, def: NodeDef, v0: any, v1: any, v2: any, v3: any, v4: any, v5: any, v6: any, v7: any, v8: any, v9: any): boolean;
export declare function checkAndUpdateDirectiveDynamic(view: ViewData, def: NodeDef, values: any[]): boolean;
export declare function resolveDep(view: ViewData, elDef: NodeDef, allowPrivateServices: boolean, depDef: DepDef, notFoundValue?: Object): any;
export declare function callLifecycleHooksChildrenFirst(view: ViewData, lifecycles: NodeFlags): void;
