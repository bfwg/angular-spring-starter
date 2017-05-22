/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, Provider } from '@angular/core';
import { ɵDomRendererFactoryV2 } from '@angular/platform-browser';
import { AnimationEngine } from './animation_engine';
import { AnimationStyleNormalizer } from './dsl/style_normalization/animation_style_normalizer';
import { WebAnimationsStyleNormalizer } from './dsl/style_normalization/web_animations_style_normalizer';
import { AnimationDriver, NoopAnimationDriver } from './render/animation_driver';
import { AnimationRendererFactory } from './render/animation_renderer';
import { DomAnimationEngine } from './render/dom_animation_engine';
export declare class InjectableAnimationEngine extends DomAnimationEngine {
    constructor(driver: AnimationDriver, normalizer: AnimationStyleNormalizer);
}
export declare function instantiateSupportedAnimationDriver(): NoopAnimationDriver;
export declare function instantiateDefaultStyleNormalizer(): WebAnimationsStyleNormalizer;
export declare function instantiateRendererFactory(renderer: ɵDomRendererFactoryV2, engine: AnimationEngine, zone: NgZone): AnimationRendererFactory;
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
export declare const BROWSER_ANIMATIONS_PROVIDERS: Provider[];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
export declare const BROWSER_NOOP_ANIMATIONS_PROVIDERS: Provider[];
