/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileIdentifierMetadata } from '../compile_metadata';
import { ParseSourceSpan } from '../parse_util';
export declare enum TypeModifier {
    Const = 0,
}
export declare abstract class Type {
    modifiers: TypeModifier[];
    constructor(modifiers?: TypeModifier[]);
    abstract visitType(visitor: TypeVisitor, context: any): any;
    hasModifier(modifier: TypeModifier): boolean;
}
export declare enum BuiltinTypeName {
    Dynamic = 0,
    Bool = 1,
    String = 2,
    Int = 3,
    Number = 4,
    Function = 5,
    Inferred = 6,
}
export declare class BuiltinType extends Type {
    name: BuiltinTypeName;
    constructor(name: BuiltinTypeName, modifiers?: TypeModifier[]);
    visitType(visitor: TypeVisitor, context: any): any;
}
export declare class ExpressionType extends Type {
    value: Expression;
    constructor(value: Expression, modifiers?: TypeModifier[]);
    visitType(visitor: TypeVisitor, context: any): any;
}
export declare class ArrayType extends Type {
    of: Type;
    constructor(of: Type, modifiers?: TypeModifier[]);
    visitType(visitor: TypeVisitor, context: any): any;
}
export declare class MapType extends Type {
    valueType: Type;
    constructor(valueType: Type, modifiers?: TypeModifier[]);
    visitType(visitor: TypeVisitor, context: any): any;
}
export declare const DYNAMIC_TYPE: BuiltinType;
export declare const INFERRED_TYPE: BuiltinType;
export declare const BOOL_TYPE: BuiltinType;
export declare const INT_TYPE: BuiltinType;
export declare const NUMBER_TYPE: BuiltinType;
export declare const STRING_TYPE: BuiltinType;
export declare const FUNCTION_TYPE: BuiltinType;
export interface TypeVisitor {
    visitBuiltintType(type: BuiltinType, context: any): any;
    visitExpressionType(type: ExpressionType, context: any): any;
    visitArrayType(type: ArrayType, context: any): any;
    visitMapType(type: MapType, context: any): any;
}
export declare enum BinaryOperator {
    Equals = 0,
    NotEquals = 1,
    Identical = 2,
    NotIdentical = 3,
    Minus = 4,
    Plus = 5,
    Divide = 6,
    Multiply = 7,
    Modulo = 8,
    And = 9,
    Or = 10,
    Lower = 11,
    LowerEquals = 12,
    Bigger = 13,
    BiggerEquals = 14,
}
export declare abstract class Expression {
    type: Type;
    sourceSpan: ParseSourceSpan;
    constructor(type: Type, sourceSpan?: ParseSourceSpan);
    abstract visitExpression(visitor: ExpressionVisitor, context: any): any;
    prop(name: string, sourceSpan?: ParseSourceSpan): ReadPropExpr;
    key(index: Expression, type?: Type, sourceSpan?: ParseSourceSpan): ReadKeyExpr;
    callMethod(name: string | BuiltinMethod, params: Expression[], sourceSpan?: ParseSourceSpan): InvokeMethodExpr;
    callFn(params: Expression[], sourceSpan?: ParseSourceSpan): InvokeFunctionExpr;
    instantiate(params: Expression[], type?: Type, sourceSpan?: ParseSourceSpan): InstantiateExpr;
    conditional(trueCase: Expression, falseCase?: Expression, sourceSpan?: ParseSourceSpan): ConditionalExpr;
    equals(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    notEquals(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    identical(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    notIdentical(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    minus(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    plus(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    divide(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    multiply(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    modulo(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    and(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    or(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    lower(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    lowerEquals(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    bigger(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    biggerEquals(rhs: Expression, sourceSpan?: ParseSourceSpan): BinaryOperatorExpr;
    isBlank(sourceSpan?: ParseSourceSpan): Expression;
    cast(type: Type, sourceSpan?: ParseSourceSpan): Expression;
    toStmt(): Statement;
}
export declare enum BuiltinVar {
    This = 0,
    Super = 1,
    CatchError = 2,
    CatchStack = 3,
}
export declare class ReadVarExpr extends Expression {
    name: string;
    builtin: BuiltinVar;
    constructor(name: string | BuiltinVar, type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
    set(value: Expression): WriteVarExpr;
}
export declare class WriteVarExpr extends Expression {
    name: string;
    value: Expression;
    constructor(name: string, value: Expression, type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
    toDeclStmt(type?: Type, modifiers?: StmtModifier[]): DeclareVarStmt;
}
export declare class WriteKeyExpr extends Expression {
    receiver: Expression;
    index: Expression;
    value: Expression;
    constructor(receiver: Expression, index: Expression, value: Expression, type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class WritePropExpr extends Expression {
    receiver: Expression;
    name: string;
    value: Expression;
    constructor(receiver: Expression, name: string, value: Expression, type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare enum BuiltinMethod {
    ConcatArray = 0,
    SubscribeObservable = 1,
    Bind = 2,
}
export declare class InvokeMethodExpr extends Expression {
    receiver: Expression;
    args: Expression[];
    name: string;
    builtin: BuiltinMethod;
    constructor(receiver: Expression, method: string | BuiltinMethod, args: Expression[], type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class InvokeFunctionExpr extends Expression {
    fn: Expression;
    args: Expression[];
    constructor(fn: Expression, args: Expression[], type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class InstantiateExpr extends Expression {
    classExpr: Expression;
    args: Expression[];
    constructor(classExpr: Expression, args: Expression[], type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class LiteralExpr extends Expression {
    value: any;
    constructor(value: any, type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class ExternalExpr extends Expression {
    value: CompileIdentifierMetadata;
    typeParams: Type[];
    constructor(value: CompileIdentifierMetadata, type?: Type, typeParams?: Type[], sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class ConditionalExpr extends Expression {
    condition: Expression;
    falseCase: Expression;
    trueCase: Expression;
    constructor(condition: Expression, trueCase: Expression, falseCase?: Expression, type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class NotExpr extends Expression {
    condition: Expression;
    constructor(condition: Expression, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class CastExpr extends Expression {
    value: Expression;
    constructor(value: Expression, type: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class FnParam {
    name: string;
    type: Type;
    constructor(name: string, type?: Type);
}
export declare class FunctionExpr extends Expression {
    params: FnParam[];
    statements: Statement[];
    constructor(params: FnParam[], statements: Statement[], type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
    toDeclStmt(name: string, modifiers?: StmtModifier[]): DeclareFunctionStmt;
}
export declare class BinaryOperatorExpr extends Expression {
    operator: BinaryOperator;
    rhs: Expression;
    lhs: Expression;
    constructor(operator: BinaryOperator, lhs: Expression, rhs: Expression, type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class ReadPropExpr extends Expression {
    receiver: Expression;
    name: string;
    constructor(receiver: Expression, name: string, type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
    set(value: Expression): WritePropExpr;
}
export declare class ReadKeyExpr extends Expression {
    receiver: Expression;
    index: Expression;
    constructor(receiver: Expression, index: Expression, type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
    set(value: Expression): WriteKeyExpr;
}
export declare class LiteralArrayExpr extends Expression {
    entries: Expression[];
    constructor(entries: Expression[], type?: Type, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export declare class LiteralMapEntry {
    key: string;
    value: Expression;
    quoted: boolean;
    constructor(key: string, value: Expression, quoted?: boolean);
}
export declare class LiteralMapExpr extends Expression {
    entries: LiteralMapEntry[];
    valueType: Type;
    constructor(entries: LiteralMapEntry[], type?: MapType, sourceSpan?: ParseSourceSpan);
    visitExpression(visitor: ExpressionVisitor, context: any): any;
}
export interface ExpressionVisitor {
    visitReadVarExpr(ast: ReadVarExpr, context: any): any;
    visitWriteVarExpr(expr: WriteVarExpr, context: any): any;
    visitWriteKeyExpr(expr: WriteKeyExpr, context: any): any;
    visitWritePropExpr(expr: WritePropExpr, context: any): any;
    visitInvokeMethodExpr(ast: InvokeMethodExpr, context: any): any;
    visitInvokeFunctionExpr(ast: InvokeFunctionExpr, context: any): any;
    visitInstantiateExpr(ast: InstantiateExpr, context: any): any;
    visitLiteralExpr(ast: LiteralExpr, context: any): any;
    visitExternalExpr(ast: ExternalExpr, context: any): any;
    visitConditionalExpr(ast: ConditionalExpr, context: any): any;
    visitNotExpr(ast: NotExpr, context: any): any;
    visitCastExpr(ast: CastExpr, context: any): any;
    visitFunctionExpr(ast: FunctionExpr, context: any): any;
    visitBinaryOperatorExpr(ast: BinaryOperatorExpr, context: any): any;
    visitReadPropExpr(ast: ReadPropExpr, context: any): any;
    visitReadKeyExpr(ast: ReadKeyExpr, context: any): any;
    visitLiteralArrayExpr(ast: LiteralArrayExpr, context: any): any;
    visitLiteralMapExpr(ast: LiteralMapExpr, context: any): any;
}
export declare const THIS_EXPR: ReadVarExpr;
export declare const SUPER_EXPR: ReadVarExpr;
export declare const CATCH_ERROR_VAR: ReadVarExpr;
export declare const CATCH_STACK_VAR: ReadVarExpr;
export declare const NULL_EXPR: LiteralExpr;
export declare const TYPED_NULL_EXPR: LiteralExpr;
export declare enum StmtModifier {
    Final = 0,
    Private = 1,
}
export declare abstract class Statement {
    modifiers: StmtModifier[];
    sourceSpan: ParseSourceSpan;
    constructor(modifiers?: StmtModifier[], sourceSpan?: ParseSourceSpan);
    abstract visitStatement(visitor: StatementVisitor, context: any): any;
    hasModifier(modifier: StmtModifier): boolean;
}
export declare class DeclareVarStmt extends Statement {
    name: string;
    value: Expression;
    type: Type;
    constructor(name: string, value: Expression, type?: Type, modifiers?: StmtModifier[], sourceSpan?: ParseSourceSpan);
    visitStatement(visitor: StatementVisitor, context: any): any;
}
export declare class DeclareFunctionStmt extends Statement {
    name: string;
    params: FnParam[];
    statements: Statement[];
    type: Type;
    constructor(name: string, params: FnParam[], statements: Statement[], type?: Type, modifiers?: StmtModifier[], sourceSpan?: ParseSourceSpan);
    visitStatement(visitor: StatementVisitor, context: any): any;
}
export declare class ExpressionStatement extends Statement {
    expr: Expression;
    constructor(expr: Expression, sourceSpan?: ParseSourceSpan);
    visitStatement(visitor: StatementVisitor, context: any): any;
}
export declare class ReturnStatement extends Statement {
    value: Expression;
    constructor(value: Expression, sourceSpan?: ParseSourceSpan);
    visitStatement(visitor: StatementVisitor, context: any): any;
}
export declare class AbstractClassPart {
    type: Type;
    modifiers: StmtModifier[];
    constructor(type: Type, modifiers: StmtModifier[]);
    hasModifier(modifier: StmtModifier): boolean;
}
export declare class ClassField extends AbstractClassPart {
    name: string;
    constructor(name: string, type?: Type, modifiers?: StmtModifier[]);
}
export declare class ClassMethod extends AbstractClassPart {
    name: string;
    params: FnParam[];
    body: Statement[];
    constructor(name: string, params: FnParam[], body: Statement[], type?: Type, modifiers?: StmtModifier[]);
}
export declare class ClassGetter extends AbstractClassPart {
    name: string;
    body: Statement[];
    constructor(name: string, body: Statement[], type?: Type, modifiers?: StmtModifier[]);
}
export declare class ClassStmt extends Statement {
    name: string;
    parent: Expression;
    fields: ClassField[];
    getters: ClassGetter[];
    constructorMethod: ClassMethod;
    methods: ClassMethod[];
    constructor(name: string, parent: Expression, fields: ClassField[], getters: ClassGetter[], constructorMethod: ClassMethod, methods: ClassMethod[], modifiers?: StmtModifier[], sourceSpan?: ParseSourceSpan);
    visitStatement(visitor: StatementVisitor, context: any): any;
}
export declare class IfStmt extends Statement {
    condition: Expression;
    trueCase: Statement[];
    falseCase: Statement[];
    constructor(condition: Expression, trueCase: Statement[], falseCase?: Statement[], sourceSpan?: ParseSourceSpan);
    visitStatement(visitor: StatementVisitor, context: any): any;
}
export declare class CommentStmt extends Statement {
    comment: string;
    constructor(comment: string, sourceSpan?: ParseSourceSpan);
    visitStatement(visitor: StatementVisitor, context: any): any;
}
export declare class TryCatchStmt extends Statement {
    bodyStmts: Statement[];
    catchStmts: Statement[];
    constructor(bodyStmts: Statement[], catchStmts: Statement[], sourceSpan?: ParseSourceSpan);
    visitStatement(visitor: StatementVisitor, context: any): any;
}
export declare class ThrowStmt extends Statement {
    error: Expression;
    constructor(error: Expression, sourceSpan?: ParseSourceSpan);
    visitStatement(visitor: StatementVisitor, context: any): any;
}
export interface StatementVisitor {
    visitDeclareVarStmt(stmt: DeclareVarStmt, context: any): any;
    visitDeclareFunctionStmt(stmt: DeclareFunctionStmt, context: any): any;
    visitExpressionStmt(stmt: ExpressionStatement, context: any): any;
    visitReturnStmt(stmt: ReturnStatement, context: any): any;
    visitDeclareClassStmt(stmt: ClassStmt, context: any): any;
    visitIfStmt(stmt: IfStmt, context: any): any;
    visitTryCatchStmt(stmt: TryCatchStmt, context: any): any;
    visitThrowStmt(stmt: ThrowStmt, context: any): any;
    visitCommentStmt(stmt: CommentStmt, context: any): any;
}
export declare class ExpressionTransformer implements StatementVisitor, ExpressionVisitor {
    visitReadVarExpr(ast: ReadVarExpr, context: any): any;
    visitWriteVarExpr(expr: WriteVarExpr, context: any): any;
    visitWriteKeyExpr(expr: WriteKeyExpr, context: any): any;
    visitWritePropExpr(expr: WritePropExpr, context: any): any;
    visitInvokeMethodExpr(ast: InvokeMethodExpr, context: any): any;
    visitInvokeFunctionExpr(ast: InvokeFunctionExpr, context: any): any;
    visitInstantiateExpr(ast: InstantiateExpr, context: any): any;
    visitLiteralExpr(ast: LiteralExpr, context: any): any;
    visitExternalExpr(ast: ExternalExpr, context: any): any;
    visitConditionalExpr(ast: ConditionalExpr, context: any): any;
    visitNotExpr(ast: NotExpr, context: any): any;
    visitCastExpr(ast: CastExpr, context: any): any;
    visitFunctionExpr(ast: FunctionExpr, context: any): any;
    visitBinaryOperatorExpr(ast: BinaryOperatorExpr, context: any): any;
    visitReadPropExpr(ast: ReadPropExpr, context: any): any;
    visitReadKeyExpr(ast: ReadKeyExpr, context: any): any;
    visitLiteralArrayExpr(ast: LiteralArrayExpr, context: any): any;
    visitLiteralMapExpr(ast: LiteralMapExpr, context: any): any;
    visitAllExpressions(exprs: Expression[], context: any): Expression[];
    visitDeclareVarStmt(stmt: DeclareVarStmt, context: any): any;
    visitDeclareFunctionStmt(stmt: DeclareFunctionStmt, context: any): any;
    visitExpressionStmt(stmt: ExpressionStatement, context: any): any;
    visitReturnStmt(stmt: ReturnStatement, context: any): any;
    visitDeclareClassStmt(stmt: ClassStmt, context: any): any;
    visitIfStmt(stmt: IfStmt, context: any): any;
    visitTryCatchStmt(stmt: TryCatchStmt, context: any): any;
    visitThrowStmt(stmt: ThrowStmt, context: any): any;
    visitCommentStmt(stmt: CommentStmt, context: any): any;
    visitAllStatements(stmts: Statement[], context: any): Statement[];
}
export declare class RecursiveExpressionVisitor implements StatementVisitor, ExpressionVisitor {
    visitReadVarExpr(ast: ReadVarExpr, context: any): any;
    visitWriteVarExpr(expr: WriteVarExpr, context: any): any;
    visitWriteKeyExpr(expr: WriteKeyExpr, context: any): any;
    visitWritePropExpr(expr: WritePropExpr, context: any): any;
    visitInvokeMethodExpr(ast: InvokeMethodExpr, context: any): any;
    visitInvokeFunctionExpr(ast: InvokeFunctionExpr, context: any): any;
    visitInstantiateExpr(ast: InstantiateExpr, context: any): any;
    visitLiteralExpr(ast: LiteralExpr, context: any): any;
    visitExternalExpr(ast: ExternalExpr, context: any): any;
    visitConditionalExpr(ast: ConditionalExpr, context: any): any;
    visitNotExpr(ast: NotExpr, context: any): any;
    visitCastExpr(ast: CastExpr, context: any): any;
    visitFunctionExpr(ast: FunctionExpr, context: any): any;
    visitBinaryOperatorExpr(ast: BinaryOperatorExpr, context: any): any;
    visitReadPropExpr(ast: ReadPropExpr, context: any): any;
    visitReadKeyExpr(ast: ReadKeyExpr, context: any): any;
    visitLiteralArrayExpr(ast: LiteralArrayExpr, context: any): any;
    visitLiteralMapExpr(ast: LiteralMapExpr, context: any): any;
    visitAllExpressions(exprs: Expression[], context: any): void;
    visitDeclareVarStmt(stmt: DeclareVarStmt, context: any): any;
    visitDeclareFunctionStmt(stmt: DeclareFunctionStmt, context: any): any;
    visitExpressionStmt(stmt: ExpressionStatement, context: any): any;
    visitReturnStmt(stmt: ReturnStatement, context: any): any;
    visitDeclareClassStmt(stmt: ClassStmt, context: any): any;
    visitIfStmt(stmt: IfStmt, context: any): any;
    visitTryCatchStmt(stmt: TryCatchStmt, context: any): any;
    visitThrowStmt(stmt: ThrowStmt, context: any): any;
    visitCommentStmt(stmt: CommentStmt, context: any): any;
    visitAllStatements(stmts: Statement[], context: any): void;
}
export declare function replaceVarInExpression(varName: string, newValue: Expression, expression: Expression): Expression;
export declare function findReadVarNames(stmts: Statement[]): Set<string>;
export declare function variable(name: string, type?: Type, sourceSpan?: ParseSourceSpan): ReadVarExpr;
export declare function importExpr(id: CompileIdentifierMetadata, typeParams?: Type[], sourceSpan?: ParseSourceSpan): ExternalExpr;
export declare function importType(id: CompileIdentifierMetadata, typeParams?: Type[], typeModifiers?: TypeModifier[]): ExpressionType;
export declare function expressionType(expr: Expression, typeModifiers?: TypeModifier[]): ExpressionType;
export declare function literalArr(values: Expression[], type?: Type, sourceSpan?: ParseSourceSpan): LiteralArrayExpr;
export declare function literalMap(values: [string, Expression][], type?: MapType, quoted?: boolean): LiteralMapExpr;
export declare function not(expr: Expression, sourceSpan?: ParseSourceSpan): NotExpr;
export declare function fn(params: FnParam[], body: Statement[], type?: Type, sourceSpan?: ParseSourceSpan): FunctionExpr;
export declare function literal(value: any, type?: Type, sourceSpan?: ParseSourceSpan): LiteralExpr;
