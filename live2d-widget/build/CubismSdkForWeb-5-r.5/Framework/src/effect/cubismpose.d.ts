import { CubismIdHandle } from '../id/cubismid';
import { CubismModel } from '../model/cubismmodel';
export declare class CubismPose {
    static create(pose3json: ArrayBuffer, size: number): CubismPose;
    static delete(pose: CubismPose): void;
    updateParameters(model: CubismModel, deltaTimeSeconds: number): void;
    reset(model: CubismModel): void;
    copyPartOpacities(model: CubismModel): void;
    doFade(model: CubismModel, deltaTimeSeconds: number, beginIndex: number, partGroupCount: number): void;
    constructor();
    _partGroups: Array<PartData>;
    _partGroupCounts: Array<number>;
    _fadeTimeSeconds: number;
    _lastModel: CubismModel;
}
export declare class PartData {
    constructor(v?: PartData);
    assignment(v: PartData): PartData;
    initialize(model: CubismModel): void;
    clone(): PartData;
    partId: CubismIdHandle;
    parameterIndex: number;
    partIndex: number;
    link: Array<PartData>;
}
import * as $ from './cubismpose';
export declare namespace Live2DCubismFramework {
    const CubismPose: typeof $.CubismPose;
    type CubismPose = $.CubismPose;
    const PartData: typeof $.PartData;
    type PartData = $.PartData;
}
