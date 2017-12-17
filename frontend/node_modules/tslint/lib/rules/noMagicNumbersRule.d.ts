import * as ts from "typescript";
import * as Lint from "../index";
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: Lint.IRuleMetadata;
    static FAILURE_STRING: string;
    static ALLOWED_NODES: Set<ts.SyntaxKind>;
    static DEFAULT_ALLOWED: number[];
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
