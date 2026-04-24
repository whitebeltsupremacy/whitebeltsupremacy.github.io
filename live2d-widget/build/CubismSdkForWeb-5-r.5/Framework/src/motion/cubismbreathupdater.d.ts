import { ICubismUpdater } from './icubismupdater';
import { CubismModel } from '../model/cubismmodel';
import { CubismBreath } from '../effect/cubismbreath';
export declare class CubismBreathUpdater extends ICubismUpdater {
    private _breath;
    constructor(breath: CubismBreath);
    constructor(breath: CubismBreath, executionOrder: number);
    onLateUpdate(model: CubismModel, deltaTimeSeconds: number): void;
}
import * as $ from './cubismbreathupdater';
export declare namespace Live2DCubismFramework {
    const CubismBreathUpdater: typeof $.CubismBreathUpdater;
    type CubismBreathUpdater = $.CubismBreathUpdater;
}
