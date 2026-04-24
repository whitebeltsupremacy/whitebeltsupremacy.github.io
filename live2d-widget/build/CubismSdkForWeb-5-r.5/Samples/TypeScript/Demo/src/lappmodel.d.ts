import { CubismLook } from '@framework/effect/cubismlook';
import { ICubismModelSetting } from '@framework/icubismmodelsetting';
import { CubismIdHandle } from '@framework/id/cubismid';
import { CubismMatrix44 } from '@framework/math/cubismmatrix44';
import { CubismUserModel } from '@framework/model/cubismusermodel';
import { ACubismMotion, BeganMotionCallback, FinishedMotionCallback } from '@framework/motion/acubismmotion';
import { CubismMotionQueueEntryHandle } from '@framework/motion/cubismmotionqueuemanager';
import { csmRect } from '@framework/type/csmrectf';
import { LAppWavFileHandler } from './lappwavfilehandler';
import { LAppSubdelegate } from './lappsubdelegate';
declare enum LoadStep {
    LoadAssets = 0,
    LoadModel = 1,
    WaitLoadModel = 2,
    LoadExpression = 3,
    WaitLoadExpression = 4,
    LoadPhysics = 5,
    WaitLoadPhysics = 6,
    LoadPose = 7,
    WaitLoadPose = 8,
    SetupEyeBlink = 9,
    SetupBreath = 10,
    LoadUserData = 11,
    WaitLoadUserData = 12,
    SetupEyeBlinkIds = 13,
    SetupLipSyncIds = 14,
    SetupLook = 15,
    SetupLayout = 16,
    LoadMotion = 17,
    WaitLoadMotion = 18,
    CompleteInitialize = 19,
    CompleteSetupModel = 20,
    LoadTexture = 21,
    WaitLoadTexture = 22,
    CompleteSetup = 23
}
export declare class LAppModel extends CubismUserModel {
    loadAssets(dir: string, fileName: string): void;
    private setupModel;
    private setupTextures;
    reloadRenderer(): void;
    update(): void;
    startMotion(group: string, no: number, priority: number, onFinishedMotionHandler?: FinishedMotionCallback, onBeganMotionHandler?: BeganMotionCallback): CubismMotionQueueEntryHandle;
    startRandomMotion(group: string, priority: number, onFinishedMotionHandler?: FinishedMotionCallback, onBeganMotionHandler?: BeganMotionCallback): CubismMotionQueueEntryHandle;
    setExpression(expressionId: string): void;
    setRandomExpression(): void;
    motionEventFired(eventValue: string): void;
    hitTest(hitArenaName: string, x: number, y: number): boolean;
    preLoadMotionGroup(group: string): void;
    releaseMotions(): void;
    releaseExpressions(): void;
    doDraw(): void;
    draw(matrix: CubismMatrix44): void;
    hasMocConsistencyFromFile(): Promise<boolean>;
    setSubdelegate(subdelegate: LAppSubdelegate): void;
    release(): void;
    constructor();
    private _updateScheduler;
    private _motionUpdated;
    private _subdelegate;
    _modelSetting: ICubismModelSetting;
    _modelHomeDir: string;
    _userTimeSeconds: number;
    _eyeBlinkIds: Array<CubismIdHandle>;
    _lipSyncIds: Array<CubismIdHandle>;
    _motions: Map<string, ACubismMotion>;
    _expressions: Map<string, ACubismMotion>;
    _hitArea: Array<csmRect>;
    _userArea: Array<csmRect>;
    _idParamAngleX: CubismIdHandle;
    _idParamAngleY: CubismIdHandle;
    _idParamAngleZ: CubismIdHandle;
    _idParamBodyAngleX: CubismIdHandle;
    _look: CubismLook;
    _state: LoadStep;
    _expressionCount: number;
    _textureCount: number;
    _motionCount: number;
    _allMotionCount: number;
    _wavFileHandler: LAppWavFileHandler;
    _consistency: boolean;
}
export {};
