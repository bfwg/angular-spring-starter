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
var OPTION_ALWAYS = "always";
var OPTION_NEVER = "never";
var OPTION_IGNORE_BOUND_CLASS_METHODS = "ignore-bound-class-methods";
var OPTION_IGNORE_INTERFACES = "ignore-interfaces";
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var options = {
            always: this.ruleArguments.indexOf(OPTION_NEVER) === -1,
            boundClassMethods: this.ruleArguments.indexOf(OPTION_IGNORE_BOUND_CLASS_METHODS) === -1,
            interfaces: this.ruleArguments.indexOf(OPTION_IGNORE_INTERFACES) === -1,
        };
        return this.applyWithWalker(new SemicolonWalker(sourceFile, this.ruleName, options));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "semicolon",
    description: "Enforces consistent semicolon usage at the end of every statement.",
    hasFix: true,
    optionsDescription: (_a = ["\n            One of the following arguments must be provided:\n\n            * `\"", "\"` enforces semicolons at the end of every statement.\n            * `\"", "\"` disallows semicolons at the end of every statement except for when they are necessary.\n\n            The following arguments may be optionally provided:\n\n            * `\"", "\"` skips checking semicolons at the end of interface members.\n            * `\"", "\"` skips checking semicolons at the end of bound class methods."], _a.raw = ["\n            One of the following arguments must be provided:\n\n            * \\`\"", "\"\\` enforces semicolons at the end of every statement.\n            * \\`\"", "\"\\` disallows semicolons at the end of every statement except for when they are necessary.\n\n            The following arguments may be optionally provided:\n\n            * \\`\"", "\"\\` skips checking semicolons at the end of interface members.\n            * \\`\"", "\"\\` skips checking semicolons at the end of bound class methods."], Lint.Utils.dedent(_a, OPTION_ALWAYS, OPTION_NEVER, OPTION_IGNORE_INTERFACES, OPTION_IGNORE_BOUND_CLASS_METHODS)),
    options: {
        type: "array",
        items: [
            {
                type: "string",
                enum: [OPTION_ALWAYS, OPTION_NEVER],
            },
            {
                type: "string",
                enum: [OPTION_IGNORE_INTERFACES],
            },
        ],
        additionalItems: false,
    },
    optionExamples: [
        [true, OPTION_ALWAYS],
        [true, OPTION_NEVER],
        [true, OPTION_ALWAYS, OPTION_IGNORE_INTERFACES],
        [true, OPTION_ALWAYS, OPTION_IGNORE_BOUND_CLASS_METHODS],
    ],
    type: "style",
    typescriptOnly: false,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING_MISSING = "Missing semicolon";
Rule.FAILURE_STRING_COMMA = "Properties should be separated by semicolons";
Rule.FAILURE_STRING_UNNECESSARY = "Unnecessary semicolon";
exports.Rule = Rule;
var SemicolonWalker = (function (_super) {
    tslib_1.__extends(SemicolonWalker, _super);
    function SemicolonWalker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scanner = undefined;
        return _this;
    }
    SemicolonWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            switch (node.kind) {
                case ts.SyntaxKind.VariableStatement:
                case ts.SyntaxKind.ExpressionStatement:
                case ts.SyntaxKind.ReturnStatement:
                case ts.SyntaxKind.BreakStatement:
                case ts.SyntaxKind.ContinueStatement:
                case ts.SyntaxKind.ThrowStatement:
                case ts.SyntaxKind.ImportEqualsDeclaration:
                case ts.SyntaxKind.DoStatement:
                case ts.SyntaxKind.ExportAssignment:
                    _this.checkSemicolonAt(node);
                    break;
                case ts.SyntaxKind.TypeAliasDeclaration:
                case ts.SyntaxKind.ImportDeclaration:
                case ts.SyntaxKind.ExportDeclaration:
                case ts.SyntaxKind.DebuggerStatement:
                    _this.checkSemicolonOrLineBreak(node);
                    break;
                case ts.SyntaxKind.ModuleDeclaration:
                    // shorthand module declaration
                    if (node.body === undefined) {
                        _this.checkSemicolonOrLineBreak(node);
                    }
                    break;
                case ts.SyntaxKind.PropertyDeclaration:
                    _this.visitPropertyDeclaration(node);
                    break;
                case ts.SyntaxKind.MethodDeclaration:
                case ts.SyntaxKind.FunctionDeclaration:
                    if (node.body === undefined) {
                        _this.checkSemicolonOrLineBreak(node);
                    }
                    break;
                case ts.SyntaxKind.InterfaceDeclaration:
                    if (_this.options.interfaces) {
                        _this.checkInterface(node);
                    }
                    break;
                case ts.SyntaxKind.SemicolonClassElement:
                    return _this.reportUnnecessary(node.end - 1);
                case ts.SyntaxKind.EmptyStatement:
                    return _this.checkEmptyStatement(node);
                default:
            }
            return ts.forEachChild(node, cb);
        };
        return ts.forEachChild(sourceFile, cb);
    };
    SemicolonWalker.prototype.visitPropertyDeclaration = function (node) {
        // check if this is a multi-line arrow function
        if (node.initializer !== undefined &&
            node.initializer.kind === ts.SyntaxKind.ArrowFunction &&
            !utils.isSameLine(this.sourceFile, node.getStart(this.sourceFile), node.end)) {
            if (this.options.boundClassMethods) {
                if (this.sourceFile.text[node.end - 1] === ";" &&
                    this.isFollowedByLineBreak(node.end)) {
                    this.reportUnnecessary(node.end - 1);
                }
            }
        }
        else {
            this.checkSemicolonOrLineBreak(node);
        }
    };
    SemicolonWalker.prototype.isFollowedByLineBreak = function (pos) {
        var scanner = this.scanner !== undefined ? this.scanner :
            (this.scanner = ts.createScanner(this.sourceFile.languageVersion, true, this.sourceFile.languageVariant, this.sourceFile.text));
        scanner.setTextPos(pos);
        return scanner.scan() === ts.SyntaxKind.EndOfFileToken || scanner.hasPrecedingLineBreak();
    };
    SemicolonWalker.prototype.checkSemicolonOrLineBreak = function (node) {
        var hasSemicolon = this.sourceFile.text[node.end - 1] === ";";
        if (this.options.always && !hasSemicolon) {
            this.reportMissing(node.end);
        }
        else if (!this.options.always && hasSemicolon && this.isFollowedByLineBreak(node.end)) {
            // semicolon can be removed if followed by line break;
            this.reportUnnecessary(node.end - 1);
        }
    };
    SemicolonWalker.prototype.checkEmptyStatement = function (node) {
        // An empty statement is only ever useful when it is the only statement inside a loop
        if (!utils.isIterationStatement(node.parent)) {
            var parentKind = node.parent.kind;
            // don't remove empty statement if it is a direct child of if, with or a LabeledStatement
            // otherwise this would unintentionally change control flow
            var noFix = parentKind === ts.SyntaxKind.IfStatement ||
                parentKind === ts.SyntaxKind.LabeledStatement ||
                parentKind === ts.SyntaxKind.WithStatement;
            this.reportUnnecessary(node.end - 1, noFix);
        }
    };
    SemicolonWalker.prototype.checkInterface = function (node) {
        for (var _i = 0, _a = node.members; _i < _a.length; _i++) {
            var member = _a[_i];
            var lastChar = this.sourceFile.text[member.end - 1];
            var hasSemicolon = lastChar === ";";
            if (this.options.always && !hasSemicolon) {
                if (lastChar === ",") {
                    this.addFailureAt(member.end - 1, 1, Rule.FAILURE_STRING_COMMA, new Lint.Replacement(member.end - 1, 1, ";"));
                }
                else {
                    this.reportMissing(member.end);
                }
            }
            else if (!this.options.always && hasSemicolon &&
                (member === node.members[node.members.length - 1] || this.isFollowedByLineBreak(member.end))) {
                this.reportUnnecessary(member.end - 1);
            }
        }
    };
    SemicolonWalker.prototype.reportMissing = function (pos) {
        this.addFailureAt(pos, 0, Rule.FAILURE_STRING_MISSING, Lint.Replacement.appendText(pos, ";"));
    };
    SemicolonWalker.prototype.reportUnnecessary = function (pos, noFix) {
        this.addFailureAt(pos, 1, Rule.FAILURE_STRING_UNNECESSARY, noFix === true ? undefined : Lint.Replacement.deleteText(pos, 1));
    };
    SemicolonWalker.prototype.checkSemicolonAt = function (node) {
        var hasSemicolon = this.sourceFile.text[node.end - 1] === ";";
        if (this.options.always && !hasSemicolon) {
            this.reportMissing(node.end);
        }
        else if (!this.options.always && hasSemicolon) {
            switch (utils.getNextToken(node, this.sourceFile).kind) {
                case ts.SyntaxKind.OpenParenToken:
                case ts.SyntaxKind.OpenBracketToken:
                case ts.SyntaxKind.PlusToken:
                case ts.SyntaxKind.MinusToken:
                case ts.SyntaxKind.RegularExpressionLiteral:
                    break;
                default:
                    if (!this.isFollowedByStatement(node)) {
                        this.reportUnnecessary(node.end - 1);
                    }
            }
        }
    };
    SemicolonWalker.prototype.isFollowedByStatement = function (node) {
        var nextStatement = utils.getNextStatement(node);
        if (nextStatement === undefined) {
            return false;
        }
        return utils.isSameLine(this.sourceFile, node.end, nextStatement.getStart(this.sourceFile));
    };
    return SemicolonWalker;
}(Lint.AbstractWalker));
var _a;
