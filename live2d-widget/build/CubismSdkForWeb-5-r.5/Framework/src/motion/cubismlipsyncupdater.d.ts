import { ICubismUpdater } from './icubismupdater';
import { CubismModel } from '../model/cubismmodel';
import { CubismIdHandle } from '../id/cubismid';
import { IParameterProvider } from './iparameterprovider';
export declare class CubismLipSyncUpdater extends ICubismUpdater {
    private _lipSyncIds;
    private _audioProvider;
    constructor(lipSyncIds: Array<CubismIdHandle>, audioProvider: IParameterProvider | null);
    constructor(lipSyncIds: Array<CubismIdHandle>, audioProvider: IParameterProvider | null, executionOrder: number);
    onLateUpdate(model: CubismModel, deltaTimeSeconds: number): void;
    setAudioProvider(audioProvider: IParameterProvider | null): void;
    getAudioProvider(): IParameterProvider | null;
}
import * as $ from './cubismlipsyncupdater';
export declare namespace Live2DCubismFramework {
    const CubismLipSyncUpdater: typeof $.CubismLipSyncUpdater;
    type CubismLipSyncUpdater = $.CubismLipSyncUpdater;
}
