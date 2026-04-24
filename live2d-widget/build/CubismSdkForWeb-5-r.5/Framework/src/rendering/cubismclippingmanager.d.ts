import { csmRect } from '../type/csmrectf';
import { CubismMatrix44 } from '../math/cubismmatrix44';
import { CubismModel } from '../model/cubismmodel';
import { CubismClippingContext, CubismTextureColor } from './cubismrenderer';
export type ClippingContextConstructor<T_ClippingContext extends CubismClippingContext> = new (manager: CubismClippingManager<T_ClippingContext>, drawableMasks: Int32Array, drawableMaskCounts: number) => T_ClippingContext;
export interface ICubismClippingManager {
    getClippingMaskBufferSize(): number;
}
export declare abstract class CubismClippingManager<T_ClippingContext extends CubismClippingContext> implements ICubismClippingManager {
    constructor(clippingContextFactory: ClippingContextConstructor<T_ClippingContext>);
    release(): void;
    initializeForDrawable(model: CubismModel, renderTextureCount: number): void;
    initializeForOffscreen(model: CubismModel, maskBufferCount: number): void;
    findSameClip(drawableMasks: Int32Array, drawableMaskCounts: number): T_ClippingContext;
    setupMatrixForHighPrecision(model: CubismModel, isRightHanded: boolean): void;
    setupMatrixForOffscreenHighPrecision(model: CubismModel, isRightHanded: boolean, mvp: CubismMatrix44): void;
    calcClippedOffscreenTotalBounds(model: CubismModel, clippingContext: T_ClippingContext): void;
    getOffscreenChildDrawableIndexList(model: CubismModel, offscreenIndex: number, childDrawableIndexList: Array<number>): void;
    getPartChildDrawableIndexList(model: CubismModel, partIndex: number, childDrawableIndexList: Array<number>): void;
    createMatrixForMask(isRightHanded: boolean, layoutBoundsOnTex01: csmRect, scaleX: number, scaleY: number): void;
    setupLayoutBounds(usingClipCount: number): void;
    calcClippedDrawableTotalBounds(model: CubismModel, clippingContext: T_ClippingContext): void;
    getClippingContextListForDraw(): Array<T_ClippingContext>;
    getClippingContextListForOffscreen(): Array<T_ClippingContext>;
    getClippingMaskBufferSize(): number;
    getRenderTextureCount(): number;
    getChannelFlagAsColor(channelNo: number): CubismTextureColor;
    setClippingMaskBufferSize(size: number): void;
    protected _clearedMaskBufferFlags: Array<boolean>;
    protected _channelColors: Array<CubismTextureColor>;
    protected _clippingContextListForMask: Array<T_ClippingContext>;
    protected _clippingContextListForDraw: Array<T_ClippingContext>;
    protected _clippingContextListForOffscreen: Array<T_ClippingContext>;
    protected _clippingMaskBufferSize: number;
    protected _renderTextureCount: number;
    protected _tmpMatrix: CubismMatrix44;
    protected _tmpMatrixForMask: CubismMatrix44;
    protected _tmpMatrixForDraw: CubismMatrix44;
    protected _tmpBoundsOnModel: csmRect;
    protected _clippingContexttConstructor: ClippingContextConstructor<T_ClippingContext>;
}
