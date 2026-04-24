import { CubismId } from './cubismid';
export declare class CubismIdManager {
    constructor();
    release(): void;
    registerIds(ids: string[]): void;
    registerId(id: string): CubismId;
    getId(id: string): CubismId;
    isExist(id: string): boolean;
    private findId;
    private _ids;
}
import * as $ from './cubismidmanager';
export declare namespace Live2DCubismFramework {
    const CubismIdManager: typeof $.CubismIdManager;
    type CubismIdManager = $.CubismIdManager;
}
