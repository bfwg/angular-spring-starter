/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, MissingTranslationStrategy, ViewEncapsulation } from '@angular/core';
import { CompileIdentifierMetadata } from './compile_metadata';
/**
 * Temporal switch for the compiler to use the new view engine,
 * until it is fully integrated.
 *
 * Only works in Jit for now.
 */
export declare const USE_VIEW_ENGINE: InjectionToken<boolean>;
export declare class CompilerConfig {
    renderTypes: RenderTypes;
    defaultEncapsulation: ViewEncapsulation;
    enableLegacyTemplate: boolean;
    useJit: boolean;
    useViewEngine: boolean;
    missingTranslation: MissingTranslationStrategy;
    private _genDebugInfo;
    private _logBindingUpdate;
    constructor({renderTypes, defaultEncapsulation, genDebugInfo, logBindingUpdate, useJit, missingTranslation, useViewEngine, enableLegacyTemplate}?: {
        renderTypes?: RenderTypes;
        defaultEncapsulation?: ViewEncapsulation;
        genDebugInfo?: boolean;
        logBindingUpdate?: boolean;
        useJit?: boolean;
        missingTranslation?: MissingTranslationStrategy;
        useViewEngine?: boolean;
        enableLegacyTemplate?: boolean;
    });
    readonly genDebugInfo: boolean;
    readonly logBindingUpdate: boolean;
}
/**
 * Types used for the renderer.
 * Can be replaced to specialize the generated output to a specific renderer
 * to help tree shaking.
 */
export declare abstract class RenderTypes {
    readonly abstract renderer: CompileIdentifierMetadata;
    readonly abstract renderText: CompileIdentifierMetadata;
    readonly abstract renderElement: CompileIdentifierMetadata;
    readonly abstract renderComment: CompileIdentifierMetadata;
    readonly abstract renderNode: CompileIdentifierMetadata;
    readonly abstract renderEvent: CompileIdentifierMetadata;
}
export declare class DefaultRenderTypes implements RenderTypes {
    readonly renderer: CompileIdentifierMetadata;
    renderText: any;
    renderElement: any;
    renderComment: any;
    renderNode: any;
    renderEvent: any;
}
