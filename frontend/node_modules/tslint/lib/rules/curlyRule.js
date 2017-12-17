"use strict";
/**
 * @license
 * Copyright 2013 Palantir Technologies, Inc.
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
var tsutils_1 = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var OPTION_IGNORE_SAME_LINE = "ignore-same-line";
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* tslint:enable:object-literal-sort-keys */
    Rule.FAILURE_STRING_FACTORY = function (kind) {
        return kind + " statements must be braced";
    };
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new CurlyWalker(sourceFile, this.ruleName, {
            ignoreSameLine: this.ruleArguments.indexOf(OPTION_IGNORE_SAME_LINE) !== -1,
        }));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "curly",
    description: "Enforces braces for `if`/`for`/`do`/`while` statements.",
    rationale: (_a = ["\n            ```ts\n            if (foo === bar)\n                foo++;\n                bar++;\n            ```\n\n            In the code above, the author almost certainly meant for both `foo++` and `bar++`\n            to be executed only if `foo === bar`. However, he forgot braces and `bar++` will be executed\n            no matter what. This rule could prevent such a mistake."], _a.raw = ["\n            \\`\\`\\`ts\n            if (foo === bar)\n                foo++;\n                bar++;\n            \\`\\`\\`\n\n            In the code above, the author almost certainly meant for both \\`foo++\\` and \\`bar++\\`\n            to be executed only if \\`foo === bar\\`. However, he forgot braces and \\`bar++\\` will be executed\n            no matter what. This rule could prevent such a mistake."], Lint.Utils.dedent(_a)),
    optionsDescription: (_b = ["\n            The rule may be set to `true`, or to the following:\n\n            * `\"", "\"` skips checking braces for control-flow statements\n            that are on one line and start on the same line as their control-flow keyword\n        "], _b.raw = ["\n            The rule may be set to \\`true\\`, or to the following:\n\n            * \\`\"", "\"\\` skips checking braces for control-flow statements\n            that are on one line and start on the same line as their control-flow keyword\n        "], Lint.Utils.dedent(_b, OPTION_IGNORE_SAME_LINE)),
    options: {
        type: "array",
        items: {
            type: "string",
            enum: [
                OPTION_IGNORE_SAME_LINE,
            ],
        },
    },
    optionExamples: [true, [true, "ignore-same-line"]],
    type: "functionality",
    typescriptOnly: false,
};
exports.Rule = Rule;
var CurlyWalker = (function (_super) {
    tslib_1.__extends(CurlyWalker, _super);
    function CurlyWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurlyWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            if (tsutils_1.isIterationStatement(node)) {
                _this.checkStatement(node.statement, node, 0, node.end);
            }
            else if (tsutils_1.isIfStatement(node)) {
                _this.checkStatement(node.thenStatement, node, 0);
                if (node.elseStatement !== undefined && node.elseStatement.kind !== ts.SyntaxKind.IfStatement) {
                    _this.checkStatement(node.elseStatement, node, 5);
                }
            }
            return ts.forEachChild(node, cb);
        };
        return ts.forEachChild(sourceFile, cb);
    };
    CurlyWalker.prototype.checkStatement = function (statement, node, childIndex, end) {
        if (end === void 0) { end = statement.end; }
        if (statement.kind !== ts.SyntaxKind.Block &&
            !(this.options.ignoreSameLine && tsutils_1.isSameLine(this.sourceFile, statement.pos, statement.end))) {
            var token = node.getChildAt(childIndex, this.sourceFile);
            var tokenText = ts.tokenToString(token.kind);
            this.addFailure(token.end - tokenText.length, end, Rule.FAILURE_STRING_FACTORY(tokenText));
        }
    };
    return CurlyWalker;
}(Lint.AbstractWalker));
var _a, _b;
