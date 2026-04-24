import { ICubismUpdater } from './icubismupdater';
import { CubismModel } from '../model/cubismmodel';
import { CubismPose } from '../effect/cubismpose';
export declare class CubismPoseUpdater extends ICubismUpdater {
    private _pose;
    constructor(pose: CubismPose);
    constructor(pose: CubismPose, executionOrder: number);
    onLateUpdate(model: CubismModel, deltaTimeSeconds: number): void;
}
import * as $ from './cubismposeupdater';
export declare namespace Live2DCubismFramework {
    const CubismPoseUpdater: typeof $.CubismPoseUpdater;
    type CubismPoseUpdater = $.CubismPoseUpdater;
}
