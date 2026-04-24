import { ICubismUpdater } from './icubismupdater';
import { CubismModel } from '../model/cubismmodel';
import { CubismEyeBlink } from '../effect/cubismeyeblink';
export declare class CubismEyeBlinkUpdater extends ICubismUpdater {
    private _motionUpdated;
    private _eyeBlink;
    constructor(motionUpdated: () => boolean, eyeBlink: CubismEyeBlink);
    constructor(motionUpdated: () => boolean, eyeBlink: CubismEyeBlink, executionOrder: number);
    onLateUpdate(model: CubismModel, deltaTimeSeconds: number): void;
}
import * as $ from './cubismeyeblinkupdater';
export declare namespace Live2DCubismFramework {
    const CubismEyeBlinkUpdater: typeof $.CubismEyeBlinkUpdater;
    type CubismEyeBlinkUpdater = $.CubismEyeBlinkUpdater;
}
