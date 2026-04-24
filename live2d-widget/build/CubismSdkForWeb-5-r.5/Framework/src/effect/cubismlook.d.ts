import { CubismIdHandle } from '../id/cubismid';
import { CubismModel } from '../model/cubismmodel';
export declare class CubismLook {
    static create(): CubismLook;
    static delete(instance: CubismLook): void;
    setParameters(lookParameters: Array<LookParameterData>): void;
    getParameters(): Array<LookParameterData>;
    updateParameters(model: CubismModel, dragX: number, dragY: number): void;
    constructor();
    _lookParameters: Array<LookParameterData>;
}
export declare class LookParameterData {
    constructor(parameterId?: CubismIdHandle, factorX?: number, factorY?: number, factorXY?: number);
    parameterId: CubismIdHandle;
    factorX: number;
    factorY: number;
    factorXY: number;
}
import * as $ from './cubismlook';
export declare namespace Live2DCubismFramework {
    const LookParameterData: typeof $.LookParameterData;
    type LookParameterData = $.LookParameterData;
    const CubismLook: typeof $.CubismLook;
    type CubismLook = $.CubismLook;
}
