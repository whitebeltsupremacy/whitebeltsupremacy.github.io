import { CubismIdHandle } from '../id/cubismid';
import { CubismModel } from '../model/cubismmodel';
import { CubismMotionQueueManager } from './cubismmotionqueuemanager';
export declare class ExpressionParameterValue {
    parameterId: CubismIdHandle;
    additiveValue: number;
    multiplyValue: number;
    overwriteValue: number;
}
export declare class CubismExpressionMotionManager extends CubismMotionQueueManager {
    constructor();
    release(): void;
    getFadeWeight(index: number): number;
    setFadeWeight(index: number, expressionFadeWeight: number): void;
    updateMotion(model: CubismModel, deltaTimeSeconds: number): boolean;
    private _expressionParameterValues;
    private _fadeWeights;
    private _startExpressionTime;
}
import * as $ from './cubismexpressionmotionmanager';
export declare namespace Live2DCubismFramework {
    const CubismExpressionMotionManager: typeof $.CubismExpressionMotionManager;
    type CubismExpressionMotionManager = $.CubismExpressionMotionManager;
}
