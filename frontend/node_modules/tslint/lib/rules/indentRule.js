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
var ts = require("typescript");
var Lint = require("../index");
var OPTION_USE_TABS = "tabs";
var OPTION_USE_SPACES = "spaces";
var OPTION_INDENT_SIZE_2 = 2;
var OPTION_INDENT_SIZE_4 = 4;
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new IndentWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "indent",
    description: "Enforces indentation with tabs or spaces.",
    rationale: (_a = ["\n            Using only one of tabs or spaces for indentation leads to more consistent editor behavior,\n            cleaner diffs in version control, and easier programmatic manipulation."], _a.raw = ["\n            Using only one of tabs or spaces for indentation leads to more consistent editor behavior,\n            cleaner diffs in version control, and easier programmatic manipulation."], Lint.Utils.dedent(_a)),
    optionsDescription: (_b = ["\n            One of the following arguments must be provided:\n\n            * `", "` enforces consistent spaces.\n            * `", "` enforces consistent tabs.\n\n            A second optional argument specifies indentation size:\n\n            * `", "` enforces 2 space indentation.\n            * `", "` enforces 4 space indentation.\n\n            Indentation size is required for auto-fixing, but not for rule checking.\n            "], _b.raw = ["\n            One of the following arguments must be provided:\n\n            * \\`", "\\` enforces consistent spaces.\n            * \\`", "\\` enforces consistent tabs.\n\n            A second optional argument specifies indentation size:\n\n            * \\`", "\\` enforces 2 space indentation.\n            * \\`", "\\` enforces 4 space indentation.\n\n            Indentation size is required for auto-fixing, but not for rule checking.\n            "], Lint.Utils.dedent(_b, OPTION_USE_SPACES, OPTION_USE_TABS, OPTION_INDENT_SIZE_2.toString(), OPTION_INDENT_SIZE_4.toString())),
    options: {
        type: "array",
        items: [
            {
                type: "string",
                enum: [OPTION_USE_TABS, OPTION_USE_SPACES],
            },
            {
                type: "number",
                enum: [OPTION_INDENT_SIZE_2, OPTION_INDENT_SIZE_4],
            },
        ],
        minLength: 0,
        maxLength: 5,
    },
    optionExamples: [
        [true, OPTION_USE_SPACES],
        [true, OPTION_USE_SPACES, OPTION_INDENT_SIZE_4],
        [true, OPTION_USE_TABS, OPTION_INDENT_SIZE_2],
    ],
    type: "maintainability",
    typescriptOnly: false,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING_TABS = "tab indentation expected";
Rule.FAILURE_STRING_SPACES = "space indentation expected";
exports.Rule = Rule;
// visit every token and enforce that only the right character is used for indentation
var IndentWalker = (function (_super) {
    tslib_1.__extends(IndentWalker, _super);
    function IndentWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        // fixer is only provided with the indent size arg
        if (_this.getOptions().length === 2 && typeof _this.getOptions()[1] === "number"
            && (_this.getOptions()[1] === OPTION_INDENT_SIZE_2 || _this.getOptions()[1] === OPTION_INDENT_SIZE_4)) {
            // tslint:disable-next-line:no-unsafe-any
            var size_1 = _this.getOptions()[1];
            var replaceRegExp_1;
            var replaceIndent_1;
            if (_this.hasOption(OPTION_USE_TABS)) {
                _this.regExp = new RegExp(" ".repeat(size_1));
                _this.failureString = Rule.FAILURE_STRING_TABS;
                // we want to find every group of `size` spaces, plus up to one 'incomplete' group
                replaceRegExp_1 = new RegExp("^( {" + size_1 + "})+( {1," + (size_1 - 1) + "})?", "g");
                replaceIndent_1 = "\t";
            }
            else if (_this.hasOption(OPTION_USE_SPACES)) {
                _this.regExp = new RegExp("\t");
                _this.failureString = size_1 + " " + Rule.FAILURE_STRING_SPACES;
                replaceRegExp_1 = new RegExp("\t", "g");
                replaceIndent_1 = " ".repeat(size_1);
            }
            _this.replacementFactory = function (lineStart, fullLeadingWhitespace) {
                return new Lint.Replacement(lineStart, fullLeadingWhitespace.length, fullLeadingWhitespace.replace(replaceRegExp_1, function (match) { return replaceIndent_1.repeat(Math.ceil(match.length / size_1)); }));
            };
        }
        else {
            if (_this.hasOption(OPTION_USE_TABS)) {
                _this.regExp = new RegExp(" ");
                _this.failureString = Rule.FAILURE_STRING_TABS;
            }
            else if (_this.hasOption(OPTION_USE_SPACES)) {
                _this.regExp = new RegExp("\t");
                _this.failureString = Rule.FAILURE_STRING_SPACES;
            }
            _this.replacementFactory = function () { return undefined; };
        }
        return _this;
    }
    IndentWalker.prototype.visitSourceFile = function (node) {
        if (!this.hasOption(OPTION_USE_TABS) && !this.hasOption(OPTION_USE_SPACES)) {
            // if we don't have either option, no need to check anything, and no need to call super, so just return
            return;
        }
        var endOfComment = -1;
        var endOfTemplateString = -1;
        var scanner = ts.createScanner(ts.ScriptTarget.ES5, false, ts.LanguageVariant.Standard, node.text);
        for (var _i = 0, _a = node.getLineStarts(); _i < _a.length; _i++) {
            var lineStart = _a[_i];
            if (lineStart < endOfComment || lineStart < endOfTemplateString) {
                // skip checking lines inside multi-line comments or template strings
                continue;
            }
            scanner.setTextPos(lineStart);
            var currentScannedType = scanner.scan();
            var fullLeadingWhitespace = "";
            var lastStartPos = -1;
            while (currentScannedType === ts.SyntaxKind.WhitespaceTrivia) {
                var startPos = scanner.getStartPos();
                if (startPos === lastStartPos) {
                    break;
                }
                lastStartPos = startPos;
                fullLeadingWhitespace += scanner.getTokenText();
                currentScannedType = scanner.scan();
            }
            var commentRanges = ts.getTrailingCommentRanges(node.text, lineStart);
            if (commentRanges !== undefined) {
                endOfComment = commentRanges[commentRanges.length - 1].end;
            }
            else {
                var scanType = currentScannedType;
                // scan until we reach end of line, skipping over template strings
                while (scanType !== ts.SyntaxKind.NewLineTrivia && scanType !== ts.SyntaxKind.EndOfFileToken) {
                    if (scanType === ts.SyntaxKind.NoSubstitutionTemplateLiteral) {
                        // template string without expressions - skip past it
                        endOfTemplateString = scanner.getStartPos() + scanner.getTokenText().length;
                    }
                    else if (scanType === ts.SyntaxKind.TemplateHead) {
                        // find end of template string containing expressions...
                        while (scanType !== ts.SyntaxKind.TemplateTail && scanType !== ts.SyntaxKind.EndOfFileToken) {
                            scanType = scanner.scan();
                            if (scanType === ts.SyntaxKind.CloseBraceToken) {
                                scanType = scanner.reScanTemplateToken();
                            }
                        }
                        // ... and skip past it
                        endOfTemplateString = scanner.getStartPos() + scanner.getTokenText().length;
                    }
                    scanType = scanner.scan();
                }
            }
            switch (currentScannedType) {
                case ts.SyntaxKind.SingleLineCommentTrivia:
                case ts.SyntaxKind.MultiLineCommentTrivia:
                case ts.SyntaxKind.NewLineTrivia:
                    // ignore lines that have comments before the first token
                    continue;
            }
            if (this.regExp.test(fullLeadingWhitespace)) {
                this.addFailureAt(lineStart, fullLeadingWhitespace.length, this.failureString, this.replacementFactory(lineStart, fullLeadingWhitespace));
            }
        }
        // no need to call super to visit the rest of the nodes, so don't call super here
    };
    return IndentWalker;
}(Lint.RuleWalker));
var _a, _b;
