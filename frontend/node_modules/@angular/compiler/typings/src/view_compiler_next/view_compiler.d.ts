import { AnimationEntryCompileResult } from '../animation/animation_compiler';
import { CompileDirectiveMetadata, CompilePipeSummary } from '../compile_metadata';
import { CompilerConfig } from '../config';
import * as o from '../output/output_ast';
import { ElementSchemaRegistry } from '../schema/element_schema_registry';
import { TemplateAst } from '../template_parser/template_ast';
import { ViewCompileResult, ViewCompiler } from '../view_compiler/view_compiler';
export declare class ViewCompilerNext extends ViewCompiler {
    private _genConfigNext;
    private _schemaRegistryNext;
    constructor(_genConfigNext: CompilerConfig, _schemaRegistryNext: ElementSchemaRegistry);
    compileComponent(component: CompileDirectiveMetadata, template: TemplateAst[], styles: o.Expression, usedPipes: CompilePipeSummary[], compiledAnimations: AnimationEntryCompileResult[]): ViewCompileResult;
}
