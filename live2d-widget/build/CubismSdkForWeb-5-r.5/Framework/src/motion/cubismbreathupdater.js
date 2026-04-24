import { ICubismUpdater, CubismUpdateOrder } from './icubismupdater';
export class CubismBreathUpdater extends ICubismUpdater {
    constructor(breath, executionOrder) {
        super(executionOrder !== null && executionOrder !== void 0 ? executionOrder : CubismUpdateOrder.CubismUpdateOrder_Breath);
        this._breath = breath;
    }
    onLateUpdate(model, deltaTimeSeconds) {
        if (!model) {
            return;
        }
        this._breath.updateParameters(model, deltaTimeSeconds);
    }
}
import * as $ from './cubismbreathupdater';
export var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismBreathUpdater = $.CubismBreathUpdater;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
