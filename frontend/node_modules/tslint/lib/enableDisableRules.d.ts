import * as ts from "typescript";
import { RuleFailure } from "./language/rule/rule";
export declare function removeDisabledFailures(sourceFile: ts.SourceFile, failures: RuleFailure[]): RuleFailure[];
