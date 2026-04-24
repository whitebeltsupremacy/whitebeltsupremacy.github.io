import { ICubismUpdater } from './icubismupdater';
import { CubismModel } from '../model/cubismmodel';
import { CubismPhysics } from '../physics/cubismphysics';
export declare class CubismPhysicsUpdater extends ICubismUpdater {
    private _physics;
    constructor(physics: CubismPhysics);
    constructor(physics: CubismPhysics, executionOrder: number);
    onLateUpdate(model: CubismModel, deltaTimeSeconds: number): void;
}
import * as $ from './cubismphysicsupdater';
export declare namespace Live2DCubismFramework {
    const CubismPhysicsUpdater: typeof $.CubismPhysicsUpdater;
    type CubismPhysicsUpdater = $.CubismPhysicsUpdater;
}
