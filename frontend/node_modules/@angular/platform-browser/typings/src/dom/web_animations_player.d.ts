/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵAnimationPlayer as AnimationPlayer } from '@angular/core';
import { DomAnimatePlayer } from './dom_animate_player';
export declare class WebAnimationsPlayer implements AnimationPlayer {
    element: any;
    keyframes: {
        [key: string]: string | number;
    }[];
    options: {
        [key: string]: string | number;
    };
    private _onDoneFns;
    private _onStartFns;
    private _onDestroyFns;
    private _player;
    private _duration;
    private _initialized;
    private _finished;
    private _started;
    private _destroyed;
    private _finalKeyframe;
    parentPlayer: AnimationPlayer;
    previousStyles: {
        [styleName: string]: string | number;
    };
    constructor(element: any, keyframes: {
        [key: string]: string | number;
    }[], options: {
        [key: string]: string | number;
    }, previousPlayers?: WebAnimationsPlayer[]);
    private _onFinish();
    init(): void;
    readonly domPlayer: DomAnimatePlayer;
    onStart(fn: () => void): void;
    onDone(fn: () => void): void;
    onDestroy(fn: () => void): void;
    play(): void;
    pause(): void;
    finish(): void;
    reset(): void;
    private _resetDomPlayerState();
    restart(): void;
    hasStarted(): boolean;
    destroy(): void;
    readonly totalTime: number;
    setPosition(p: number): void;
    getPosition(): number;
    private _captureStyles();
}
