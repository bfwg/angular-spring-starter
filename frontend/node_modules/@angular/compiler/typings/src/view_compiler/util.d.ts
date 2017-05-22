import { CompileTokenMetadata } from '../compile_metadata';
import * as o from '../output/output_ast';
import { CompileView } from './compile_view';
export declare function getPropertyInView(property: o.Expression, callingView: CompileView, definedView: CompileView): o.Expression;
export declare function injectFromViewParentInjector(view: CompileView, token: CompileTokenMetadata, optional: boolean): o.Expression;
export declare function getHandleEventMethodName(elementIndex: number): string;
