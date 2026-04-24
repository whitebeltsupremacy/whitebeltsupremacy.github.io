import { CubismModel } from '../model/cubismmodel';
export interface ICubismUpdaterChangeListener {
    onUpdaterChanged(updater: ICubismUpdater): void;
}
export declare enum CubismUpdateOrder {
    CubismUpdateOrder_EyeBlink = 200,
    CubismUpdateOrder_Expression = 300,
    CubismUpdateOrder_Drag = 400,
    CubismUpdateOrder_Breath = 500,
    CubismUpdateOrder_Physics = 600,
    CubismUpdateOrder_LipSync = 700,
    CubismUpdateOrder_Pose = 800,
    CubismUpdateOrder_Max
}
export declare abstract class ICubismUpdater {
    static sortFunction(left: ICubismUpdater, right: ICubismUpdater): number;
    private _executionOrder;
    private _changeListeners;
    constructor(executionOrder?: number);
    abstract onLateUpdate(model: CubismModel, deltaTimeSeconds: number): void;
    getExecutionOrder(): number;
    setExecutionOrder(executionOrder: number): void;
    addChangeListener(listener: ICubismUpdaterChangeListener): void;
    removeChangeListener(listener: ICubismUpdaterChangeListener): void;
    private notifyChangeListeners;
}
import * as $ from './icubismupdater';
export declare namespace Live2DCubismFramework {
    const ICubismUpdater: typeof $.ICubismUpdater;
    type ICubismUpdater = $.ICubismUpdater;
    type ICubismUpdaterChangeListener = $.ICubismUpdaterChangeListener;
}
