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
var utils = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* tslint:enable:object-literal-sort-keys */
    Rule.FAILURE_STRING = function (name) {
        return "Duplicate variable: '" + name + "'";
    };
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "no-duplicate-variable",
    description: "Disallows duplicate variable declarations in the same block scope.",
    descriptionDetails: (_a = ["\n            This rule is only useful when using the `var` keyword -\n            the compiler will detect redeclarations of `let` and `const` variables."], _a.raw = ["\n            This rule is only useful when using the \\`var\\` keyword -\n            the compiler will detect redeclarations of \\`let\\` and \\`const\\` variables."], Lint.Utils.dedent(_a)),
    rationale: (_b = ["\n            A variable can be reassigned if necessary -\n            there's no good reason to have a duplicate variable declaration."], _b.raw = ["\n            A variable can be reassigned if necessary -\n            there's no good reason to have a duplicate variable declaration."], Lint.Utils.dedent(_b)),
    optionsDescription: "Not configurable.",
    options: null,
    optionExamples: [true],
    type: "functionality",
    typescriptOnly: false,
};
exports.Rule = Rule;
function walk(ctx) {
    var scope = new Set();
    return ts.forEachChild(ctx.sourceFile, function cb(node) {
        if (utils.isFunctionScopeBoundary(node)) {
            var oldScope = scope;
            scope = new Set();
            ts.forEachChild(node, cb);
            scope = oldScope;
            return;
        }
        else if (utils.isVariableDeclaration(node) && !utils.isBlockScopedVariableDeclaration(node)) {
            forEachBoundIdentifier(node.name, function (id) {
                var text = id.text;
                if (scope.has(text)) {
                    ctx.addFailureAtNode(id, Rule.FAILURE_STRING(text));
                }
                else {
                    scope.add(text);
                }
            });
        }
        return ts.forEachChild(node, cb);
    });
}
function forEachBoundIdentifier(name, action) {
    if (name.kind === ts.SyntaxKind.Identifier) {
        action(name);
    }
    else {
        for (var _i = 0, _a = name.elements; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.kind !== ts.SyntaxKind.OmittedExpression) {
                forEachBoundIdentifier(e.name, action);
            }
        }
    }
}
var _a, _b;
