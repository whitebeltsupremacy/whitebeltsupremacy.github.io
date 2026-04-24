import { CubismMatrix44 } from '@framework/math/cubismmatrix44';
import { ACubismMotion } from '@framework/motion/acubismmotion';
import { LAppModel } from './lappmodel';
import { LAppSubdelegate } from './lappsubdelegate';
export declare class LAppLive2DManager {
    private releaseAllModel;
    setOffscreenSize(width: number, height: number): void;
    onDrag(x: number, y: number): void;
    onTap(x: number, y: number): void;
    onUpdate(): void;
    nextScene(): void;
    private changeScene;
    setViewMatrix(m: CubismMatrix44): void;
    addModel(sceneIndex?: number): void;
    constructor();
    release(): void;
    initialize(subdelegate: LAppSubdelegate): void;
    private _subdelegate;
    _viewMatrix: CubismMatrix44;
    _models: Array<LAppModel>;
    private _sceneIndex;
    beganMotion: (self: ACubismMotion) => void;
    finishedMotion: (self: ACubismMotion) => void;
}
