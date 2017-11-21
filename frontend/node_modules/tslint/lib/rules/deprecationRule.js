"use strict";
/**
 * @license
 * Copyright 2016 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("../index");
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* tslint:enable:object-literal-sort-keys */
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions(), program));
    };
    return Rule;
}(Lint.Rules.TypedRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "deprecation",
    description: "Warns when deprecated APIs are used.",
    descriptionDetails: (_a = ["Any usage of an identifier\n            with the @deprecated JSDoc annotation will trigger a warning.\n            See http://usejsdoc.org/tags-deprecated.html"], _a.raw = ["Any usage of an identifier\n            with the @deprecated JSDoc annotation will trigger a warning.\n            See http://usejsdoc.org/tags-deprecated.html"], Lint.Utils.dedent(_a)),
    rationale: (_b = ["\n            Deprecated APIs should be avoided, and usage updated."], _b.raw = ["\n            Deprecated APIs should be avoided, and usage updated."], Lint.Utils.dedent(_b)),
    optionsDescription: "",
    options: null,
    optionExamples: [],
    type: "maintainability",
    typescriptOnly: false,
    requiresTypeInfo: true,
};
exports.Rule = Rule;
var Walker = (function (_super) {
    tslib_1.__extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementation inspired by angular/tsickle:
    // https://github.com/angular/tsickle/blob/cad7c180a2155db6f6fb8d22c44151d7e8a9149f/src/decorator-annotator.ts#L42
    Walker.prototype.visitIdentifier = function (node) {
        var decSym = this.getTypeChecker().getSymbolAtLocation(node);
        if (decSym !== undefined && Lint.isSymbolFlagSet(decSym, ts.SymbolFlags.Alias)) {
            decSym = this.getTypeChecker().getAliasedSymbol(decSym);
        }
        var declarations = decSym === undefined ? undefined : decSym.getDeclarations();
        if (declarations === undefined) {
            _super.prototype.visitIdentifier.call(this, node);
            return;
        }
        for (var _i = 0, declarations_1 = declarations; _i < declarations_1.length; _i++) {
            var commentNode = declarations_1[_i];
            // Switch to the TS JSDoc parser in the future to avoid false positives here.
            // For example using '@deprecated' in a true comment.
            // However, a new TS API would be needed, track at
            // https://github.com/Microsoft/TypeScript/issues/7393.
            if (commentNode.kind === ts.SyntaxKind.VariableDeclaration) {
                commentNode = commentNode.parent;
            }
            // Go up one more level to VariableDeclarationStatement, where usually
            // the comment lives. If the declaration has an 'export', the
            // VDList.getFullText will not contain the comment.
            if (commentNode.kind === ts.SyntaxKind.VariableDeclarationList) {
                commentNode = commentNode.parent;
            }
            // Don't warn on the declaration of the @deprecated symbol.
            if (commentNode.pos <= node.pos
                && node.getEnd() <= commentNode.getEnd()
                && commentNode.getSourceFile() === this.getSourceFile()) {
                continue;
            }
            var range = ts.getLeadingCommentRanges(commentNode.getFullText(), 0);
            if (range === undefined) {
                continue;
            }
            for (var _a = 0, range_1 = range; _a < range_1.length; _a++) {
                var _b = range_1[_a], pos = _b.pos, end = _b.end;
                var jsDocText = commentNode.getFullText().substring(pos, end);
                if (jsDocText.includes("@deprecated")) {
                    this.addFailureAtNode(node, node.text + " is deprecated.");
                }
            }
        }
        _super.prototype.visitIdentifier.call(this, node);
    };
    return Walker;
}(Lint.ProgramAwareRuleWalker));
var _a, _b;
