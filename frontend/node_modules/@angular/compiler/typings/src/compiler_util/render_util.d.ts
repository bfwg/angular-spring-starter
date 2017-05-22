import * as o from '../output/output_ast';
import { BoundElementPropertyAst, BoundEventAst } from '../template_parser/template_ast';
import { LegacyConvertPropertyBindingResult } from './expression_converter';
export declare function createCheckRenderBindingStmt(view: o.Expression, renderElement: o.Expression, boundProp: BoundElementPropertyAst, oldValue: o.ReadPropExpr, evalResult: LegacyConvertPropertyBindingResult, securityContextExpression?: o.Expression): o.Statement[];
export declare function createCheckAnimationBindingStmts(view: o.Expression, componentView: o.Expression, boundProp: BoundElementPropertyAst, boundOutputs: BoundEventAst[], eventListener: o.Expression, renderElement: o.Expression, oldValue: o.ReadPropExpr, evalResult: LegacyConvertPropertyBindingResult): {
    checkUpdateStmts: o.Statement[];
    checkDetachStmts: o.Statement[];
};
