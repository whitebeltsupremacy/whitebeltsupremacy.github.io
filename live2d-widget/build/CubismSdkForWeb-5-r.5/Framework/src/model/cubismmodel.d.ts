import { CubismIdHandle } from '../id/cubismid';
import { CubismBlendMode, CubismTextureColor } from '../rendering/cubismrenderer';
import { CubismModelMultiplyAndScreenColor } from './cubismmodelmultiplyandscreencolor';
export declare const NoParentIndex = -1;
export declare const NoOffscreenIndex = -1;
export declare enum CubismColorBlend {
    ColorBlend_None = -1,
    ColorBlend_Normal,
    ColorBlend_AddGlow,
    ColorBlend_Add,
    ColorBlend_Darken,
    ColorBlend_Multiply,
    ColorBlend_ColorBurn,
    ColorBlend_LinearBurn,
    ColorBlend_Lighten,
    ColorBlend_Screen,
    ColorBlend_ColorDodge,
    ColorBlend_Overlay,
    ColorBlend_SoftLight,
    ColorBlend_HardLight,
    ColorBlend_LinearLight,
    ColorBlend_Hue,
    ColorBlend_Color,
    ColorBlend_AddCompatible,
    ColorBlend_MultiplyCompatible
}
export declare enum CubismAlphaBlend {
    AlphaBlend_None = -1,
    AlphaBlend_Over = 0,
    AlphaBlend_Atop = 1,
    AlphaBlend_Out = 2,
    AlphaBlend_ConjointOver = 3,
    AlphaBlend_DisjointOver = 4
}
export declare enum CubismModelObjectType {
    CubismModelObjectType_Drawable = 0,
    CubismModelObjectType_Parts = 1
}
export declare class ParameterRepeatData {
    constructor(isOverridden?: boolean, isParameterRepeated?: boolean);
    isOverridden: boolean;
    isParameterRepeated: boolean;
}
export declare class DrawableCullingData {
    constructor(isOverridden?: boolean, isCulling?: boolean);
    isOverridden: boolean;
    isCulling: boolean;
    get isOverwritten(): boolean;
}
export declare class CullingData {
    constructor(isOverridden?: boolean, isCulling?: boolean);
    isOverridden: boolean;
    isCulling: boolean;
}
export declare class PartChildDrawObjects {
    drawableIndices: Array<number>;
    offscreenIndices: Array<number>;
    constructor(drawableIndices?: Array<number>, offscreenIndices?: Array<number>);
}
export declare class CubismModelObjectInfo {
    objectType: CubismModelObjectType;
    objectIndex: number;
    constructor(objectIndex: number, objectType: CubismModelObjectType);
}
export declare class CubismModelPartInfo {
    objects: Array<CubismModelObjectInfo>;
    childDrawObjects: PartChildDrawObjects;
    constructor(objects?: Array<CubismModelObjectInfo>, childDrawObjects?: PartChildDrawObjects);
    getChildObjectCount(): number;
}
export declare class CubismModel {
    update(): void;
    getPixelsPerUnit(): number;
    getCanvasWidth(): number;
    getCanvasHeight(): number;
    saveParameters(): void;
    getOverrideMultiplyAndScreenColor(): CubismModelMultiplyAndScreenColor;
    getOverrideFlagForModelParameterRepeat(): boolean;
    setOverrideFlagForModelParameterRepeat(isRepeat: boolean): void;
    getOverrideFlagForParameterRepeat(parameterIndex: number): boolean;
    setOverrideFlagForParameterRepeat(parameterIndex: number, value: boolean): void;
    getRepeatFlagForParameterRepeat(parameterIndex: number): boolean;
    setRepeatFlagForParameterRepeat(parameterIndex: number, value: boolean): void;
    getDrawableCulling(drawableIndex: number): boolean;
    setDrawableCulling(drawableIndex: number, isCulling: boolean): void;
    getOffscreenCulling(offscreenIndex: number): boolean;
    setOffscreenCulling(offscreenIndex: number, isCulling: boolean): void;
    getOverrideFlagForModelCullings(): boolean;
    setOverrideFlagForModelCullings(isOverriddenCullings: boolean): void;
    getOverrideFlagForDrawableCullings(drawableIndex: number): boolean;
    getOverrideFlagForOffscreenCullings(offscreenIndex: number): boolean;
    setOverrideFlagForDrawableCullings(drawableIndex: number, isOverriddenCullings: boolean): void;
    getModelOapcity(): number;
    setModelOapcity(value: number): void;
    getModel(): Live2DCubismCore.Model;
    getPartIndex(partId: CubismIdHandle): number;
    getPartId(partIndex: number): CubismIdHandle;
    getPartCount(): number;
    getPartOffscreenIndices(): Int32Array;
    getPartParentPartIndices(): Int32Array;
    setPartOpacityByIndex(partIndex: number, opacity: number): void;
    setPartOpacityById(partId: CubismIdHandle, opacity: number): void;
    getPartOpacityByIndex(partIndex: number): number;
    getPartOpacityById(partId: CubismIdHandle): number;
    getParameterIndex(parameterId: CubismIdHandle): number;
    getParameterCount(): number;
    getParameterType(parameterIndex: number): Live2DCubismCore.csmParameterType;
    getParameterMaximumValue(parameterIndex: number): number;
    getParameterMinimumValue(parameterIndex: number): number;
    getParameterDefaultValue(parameterIndex: number): number;
    getParameterId(parameterIndex: number): CubismIdHandle;
    getParameterValueByIndex(parameterIndex: number): number;
    getParameterValueById(parameterId: CubismIdHandle): number;
    setParameterValueByIndex(parameterIndex: number, value: number, weight?: number): void;
    setParameterValueById(parameterId: CubismIdHandle, value: number, weight?: number): void;
    addParameterValueByIndex(parameterIndex: number, value: number, weight?: number): void;
    addParameterValueById(parameterId: any, value: number, weight?: number): void;
    isRepeat(parameterIndex: number): boolean;
    getParameterRepeatValue(parameterIndex: number, value: number): number;
    getParameterClampValue(parameterIndex: number, value: number): number;
    getParameterRepeats(parameterIndex: number): boolean;
    multiplyParameterValueById(parameterId: CubismIdHandle, value: number, weight?: number): void;
    multiplyParameterValueByIndex(parameterIndex: number, value: number, weight?: number): void;
    getDrawableIndex(drawableId: CubismIdHandle): number;
    getDrawableCount(): number;
    getDrawableId(drawableIndex: number): CubismIdHandle;
    getRenderOrders(): Int32Array;
    getDrawableTextureIndex(drawableIndex: number): number;
    getDrawableDynamicFlagVertexPositionsDidChange(drawableIndex: number): boolean;
    getDrawableVertexIndexCount(drawableIndex: number): number;
    getDrawableVertexCount(drawableIndex: number): number;
    getDrawableVertices(drawableIndex: number): Float32Array;
    getDrawableVertexIndices(drawableIndex: number): Uint16Array;
    getDrawableVertexPositions(drawableIndex: number): Float32Array;
    getDrawableVertexUvs(drawableIndex: number): Float32Array;
    getDrawableOpacity(drawableIndex: number): number;
    getDrawableMultiplyColor(drawableIndex: number): CubismTextureColor;
    getDrawableScreenColor(drawableIndex: number): CubismTextureColor;
    getOffscreenMultiplyColor(offscreenIndex: number): CubismTextureColor;
    getOffscreenScreenColor(offscreenIndex: number): CubismTextureColor;
    getDrawableParentPartIndex(drawableIndex: number): number;
    getDrawableBlendMode(drawableIndex: number): CubismBlendMode;
    getDrawableColorBlend(drawableIndex: number): CubismColorBlend;
    getDrawableAlphaBlend(drawableIndex: number): CubismAlphaBlend;
    getDrawableInvertedMaskBit(drawableIndex: number): boolean;
    getDrawableMasks(): Int32Array[];
    getDrawableMaskCounts(): Int32Array;
    isUsingMasking(): boolean;
    isUsingMaskingForOffscreen(): boolean;
    getDrawableDynamicFlagIsVisible(drawableIndex: number): boolean;
    getDrawableDynamicFlagVisibilityDidChange(drawableIndex: number): boolean;
    getDrawableDynamicFlagOpacityDidChange(drawableIndex: number): boolean;
    getDrawableDynamicFlagRenderOrderDidChange(drawableIndex: number): boolean;
    getDrawableDynamicFlagBlendColorDidChange(drawableIndex: number): boolean;
    getOffscreenCount(): number;
    getOffscreenColorBlend(offscreenIndex: number): CubismColorBlend;
    getOffscreenAlphaBlend(offscreenIndex: number): CubismAlphaBlend;
    getOffscreenOwnerIndices(): Int32Array;
    getOffscreenOpacity(offscreenIndex: number): number;
    getOffscreenMasks(): Int32Array[];
    getOffscreenMaskCounts(): Int32Array;
    getOffscreenInvertedMask(offscreenIndex: number): boolean;
    isBlendModeEnabled(): boolean;
    loadParameters(): void;
    initialize(): void;
    getPartsHierarchy(): Array<CubismModelPartInfo>;
    setupPartsHierarchy(): void;
    getPartChildDrawObjects(partInfoIndex: number): PartChildDrawObjects;
    private getOffscreenIndices;
    constructor(model: Live2DCubismCore.Model);
    release(): void;
    private _notExistPartOpacities;
    private _notExistPartId;
    private _notExistParameterValues;
    private _notExistParameterId;
    private _savedParameters;
    private _isOverriddenParameterRepeat;
    private _overrideMultiplyAndScreenColor;
    private _userParameterRepeatDataList;
    private _partsHierarchy;
    private _model;
    private _parameterValues;
    private _parameterMaximumValues;
    private _parameterMinimumValues;
    private _partOpacities;
    private _offscreenOpacities;
    private _modelOpacity;
    private _parameterIds;
    private _partIds;
    private _drawableIds;
    private _isOverriddenCullings;
    private _userDrawableCullings;
    private _userOffscreenCullings;
    private _isBlendModeEnabled;
    private _drawableColorBlends;
    private _drawableAlphaBlends;
    private _offscreenColorBlends;
    private _offscreenAlphaBlends;
    private _drawableMultiplyColors;
    private _drawableScreenColors;
    private _offscreenMultiplyColors;
    private _offscreenScreenColors;
}
import * as $ from './cubismmodel';
export declare namespace Live2DCubismFramework {
    const CubismModel: typeof $.CubismModel;
    type CubismModel = $.CubismModel;
}
