import { ICubismUpdater, ICubismUpdaterChangeListener } from './icubismupdater';
import { CubismModel } from '../model/cubismmodel';
export declare class CubismUpdateScheduler implements ICubismUpdaterChangeListener {
    private _cubismUpdatableList;
    private _needsSort;
    constructor();
    release(): void;
    addUpdatableList(updatable: ICubismUpdater): void;
    removeUpdatableList(updatable: ICubismUpdater): boolean;
    sortUpdatableList(): void;
    onLateUpdate(model: CubismModel, deltaTimeSeconds: number): void;
    getUpdatableCount(): number;
    getUpdatable(index: number): ICubismUpdater | null;
    hasUpdatable(updatable: ICubismUpdater): boolean;
    clearUpdatableList(): void;
    onUpdaterChanged(updater: ICubismUpdater): void;
}
import * as $ from './cubismupdatescheduler';
export declare namespace Live2DCubismFramework {
    const CubismUpdateScheduler: typeof $.CubismUpdateScheduler;
    type CubismUpdateScheduler = $.CubismUpdateScheduler;
}
