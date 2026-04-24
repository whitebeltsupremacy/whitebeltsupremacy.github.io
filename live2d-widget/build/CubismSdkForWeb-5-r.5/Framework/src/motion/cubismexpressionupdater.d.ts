import { ICubismUpdater } from './icubismupdater';
import { CubismModel } from '../model/cubismmodel';
import { CubismExpressionMotionManager } from './cubismexpressionmotionmanager';
export declare class CubismExpressionUpdater extends ICubismUpdater {
    private _expressionManager;
    constructor(expressionManager: CubismExpressionMotionManager);
    constructor(expressionManager: CubismExpressionMotionManager, executionOrder: number);
    onLateUpdate(model: CubismModel, deltaTimeSeconds: number): void;
}
import * as $ from './cubismexpressionupdater';
export declare namespace Live2DCubismFramework {
    const CubismExpressionUpdater: typeof $.CubismExpressionUpdater;
    type CubismExpressionUpdater = $.CubismExpressionUpdater;
}
