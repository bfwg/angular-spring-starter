/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as cdAst from '../expression_parser/ast';
import { ClassBuilder } from '../output/class_builder';
import * as o from '../output/output_ast';
export declare class EventHandlerVars {
    static event: o.ReadVarExpr;
}
export interface LocalResolver {
    getLocal(name: string): o.Expression;
}
export declare class ConvertActionBindingResult {
    stmts: o.Statement[];
    allowDefault: o.ReadVarExpr;
    constructor(stmts: o.Statement[], allowDefault: o.ReadVarExpr);
}
/**
 * Converts the given expression AST into an executable output AST, assuming the expression is
 * used in an action binding (e.g. an event handler).
 */
export declare function convertActionBinding(localResolver: LocalResolver, implicitReceiver: o.Expression, action: cdAst.AST, bindingId: string): ConvertActionBindingResult;
export interface BuiltinConverter {
    (args: o.Expression[]): o.Expression;
}
export interface BuiltinConverterFactory {
    createLiteralArrayConverter(argCount: number): BuiltinConverter;
    createLiteralMapConverter(keys: string[]): BuiltinConverter;
    createPipeConverter(name: string, argCount: number): BuiltinConverter;
}
export declare function convertPropertyBindingBuiltins(converterFactory: BuiltinConverterFactory, ast: cdAst.AST): cdAst.AST;
export declare class ConvertPropertyBindingResult {
    stmts: o.Statement[];
    currValExpr: o.Expression;
    constructor(stmts: o.Statement[], currValExpr: o.Expression);
}
/**
 * Converts the given expression AST into an executable output AST, assuming the expression
 * is used in property binding. The expression has to be preprocessed via
 * `convertPropertyBindingBuiltins`.
 */
export declare function convertPropertyBinding(localResolver: LocalResolver, implicitReceiver: o.Expression, expressionWithoutBuiltins: cdAst.AST, bindingId: string): ConvertPropertyBindingResult;
export declare class LegacyConvertPropertyBindingResult implements ConvertPropertyBindingResult {
    stmts: o.Statement[];
    currValExpr: o.Expression;
    forceUpdate: o.Expression;
    constructor(stmts: o.Statement[], currValExpr: o.Expression, forceUpdate: o.Expression);
}
export interface LegacyNameResolver {
    callPipe(name: string, input: o.Expression, args: o.Expression[]): o.Expression;
    getLocal(name: string): o.Expression;
}
/**
 * Converts the given expression AST into an executable output AST, assuming the expression is
 * used in a property binding.
 */
export declare function legacyConvertPropertyBinding(builder: ClassBuilder, nameResolver: LegacyNameResolver, implicitReceiver: o.Expression, expression: cdAst.AST, bindingId: string): LegacyConvertPropertyBindingResult;
/**
 * Creates variables that are shared by multiple calls to `convertActionBinding` /
 * `convertPropertyBinding`
 */
export declare function legacyCreateSharedBindingVariablesIfNeeded(stmts: o.Statement[]): o.Statement[];
export declare function temporaryDeclaration(bindingId: string, temporaryNumber: number): o.Statement;
