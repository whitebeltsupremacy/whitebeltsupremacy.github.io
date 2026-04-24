import { ICubismUpdater } from './icubismupdater';
import { CubismModel } from '../model/cubismmodel';
import { CubismTargetPoint } from '../math/cubismtargetpoint';
import { CubismLook } from '../effect/cubismlook';
export declare class CubismLookUpdater extends ICubismUpdater {
    private _look;
    private _dragManager;
    constructor(look: CubismLook, dragManager: CubismTargetPoint);
    constructor(look: CubismLook, dragManager: CubismTargetPoint, executionOrder: number);
    onLateUpdate(model: CubismModel, deltaTimeSeconds: number): void;
}
import * as $ from './cubismlookupdater';
export declare namespace Live2DCubismFramework {
    const CubismLookUpdater: typeof $.CubismLookUpdater;
    type CubismLookUpdater = $.CubismLookUpdater;
}
