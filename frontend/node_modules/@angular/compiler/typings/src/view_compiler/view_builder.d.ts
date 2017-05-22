import * as o from '../output/output_ast';
import { TemplateAst } from '../template_parser/template_ast';
import { CompileView } from './compile_view';
import { ComponentFactoryDependency, ComponentViewDependency, DirectiveWrapperDependency } from './deps';
export declare function buildView(view: CompileView, template: TemplateAst[], targetDependencies: Array<ComponentViewDependency | ComponentFactoryDependency | DirectiveWrapperDependency>): number;
export declare function finishView(view: CompileView, targetStatements: o.Statement[]): void;
