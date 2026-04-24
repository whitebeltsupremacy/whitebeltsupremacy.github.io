import { CubismIdHandle } from '../id/cubismid';
import { CubismModel } from '../model/cubismmodel';
import { ACubismMotion, BeganMotionCallback, FinishedMotionCallback } from './acubismmotion';
import { CubismMotionData } from './cubismmotioninternal';
import { CubismMotionQueueEntry } from './cubismmotionqueueentry';
export declare enum MotionBehavior {
    MotionBehavior_V1 = 0,
    MotionBehavior_V2 = 1
}
export declare class CubismMotion extends ACubismMotion {
    static create(buffer: ArrayBuffer, size: number, onFinishedMotionHandler?: FinishedMotionCallback, onBeganMotionHandler?: BeganMotionCallback, shouldCheckMotionConsistency?: boolean): CubismMotion;
    doUpdateParameters(model: CubismModel, userTimeSeconds: number, fadeWeight: number, motionQueueEntry: CubismMotionQueueEntry): void;
    setMotionBehavior(motionBehavior: MotionBehavior): void;
    getMotionBehavior(): MotionBehavior;
    getDuration(): number;
    getLoopDuration(): number;
    setParameterFadeInTime(parameterId: CubismIdHandle, value: number): void;
    setParameterFadeOutTime(parameterId: CubismIdHandle, value: number): void;
    getParameterFadeInTime(parameterId: CubismIdHandle): number;
    getParameterFadeOutTime(parameterId: CubismIdHandle): number;
    setEffectIds(eyeBlinkParameterIds: Array<CubismIdHandle>, lipSyncParameterIds: Array<CubismIdHandle>): void;
    constructor();
    release(): void;
    updateForNextLoop(motionQueueEntry: CubismMotionQueueEntry, userTimeSeconds: number, time: number): void;
    parse(motionJson: ArrayBuffer, size: number, shouldCheckMotionConsistency?: boolean): void;
    getFiredEvent(beforeCheckTimeSeconds: number, motionTimeSeconds: number): Array<string>;
    isExistModelOpacity(): boolean;
    getModelOpacityIndex(): number;
    getModelOpacityId(index: number): CubismIdHandle;
    getModelOpacityValue(): number;
    setDebugMode(debugMode: boolean): void;
    _sourceFrameRate: number;
    _loopDurationSeconds: number;
    _motionBehavior: MotionBehavior;
    _lastWeight: number;
    _motionData: CubismMotionData;
    _eyeBlinkParameterIds: Array<CubismIdHandle>;
    _lipSyncParameterIds: Array<CubismIdHandle>;
    _modelCurveIdEyeBlink: CubismIdHandle;
    _modelCurveIdLipSync: CubismIdHandle;
    _modelCurveIdOpacity: CubismIdHandle;
    _modelOpacity: number;
    private _debugMode;
}
import * as $ from './cubismmotion';
export declare namespace Live2DCubismFramework {
    const CubismMotion: typeof $.CubismMotion;
    type CubismMotion = $.CubismMotion;
}
