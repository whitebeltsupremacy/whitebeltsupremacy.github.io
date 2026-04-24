import { ICubismUpdater, CubismUpdateOrder } from './icubismupdater';
export class CubismExpressionUpdater extends ICubismUpdater {
    constructor(expressionManager, executionOrder) {
        super(executionOrder !== null && executionOrder !== void 0 ? executionOrder : CubismUpdateOrder.CubismUpdateOrder_Expression);
        this._expressionManager = expressionManager;
    }
    onLateUpdate(model, deltaTimeSeconds) {
        if (!model) {
            return;
        }
        this._expressionManager.updateMotion(model, deltaTimeSeconds);
    }
}
import * as $ from './cubismexpressionupdater';
export var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismExpressionUpdater = $.CubismExpressionUpdater;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
