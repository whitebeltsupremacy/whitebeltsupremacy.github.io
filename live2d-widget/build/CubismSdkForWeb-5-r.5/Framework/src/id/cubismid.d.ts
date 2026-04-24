export declare class CubismId {
    static createIdInternal(id: string): CubismId;
    getString(): string;
    isEqual(c: string | CubismId): boolean;
    isNotEqual(c: string | CubismId): boolean;
    private constructor();
    private _id;
}
export declare type CubismIdHandle = CubismId;
import * as $ from './cubismid';
export declare namespace Live2DCubismFramework {
    const CubismId: typeof $.CubismId;
    type CubismId = $.CubismId;
    type CubismIdHandle = $.CubismIdHandle;
}
