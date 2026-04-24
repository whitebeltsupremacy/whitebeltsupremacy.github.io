import { CubismColorBlend, CubismModel, CubismAlphaBlend } from '../model/cubismmodel';
import { CubismOffscreenRenderTarget_WebGL } from './cubismoffscreenrendertarget_webgl';
import { CubismTextureColor } from './cubismrenderer';
import { CubismRenderer_WebGL } from './cubismrenderer_webgl';
export declare class CubismShader_WebGL {
    private loadShader;
    private loadShaders;
    constructor();
    release(): void;
    setupShaderProgramForDrawable(renderer: CubismRenderer_WebGL, model: Readonly<CubismModel>, index: number): void;
    setupShaderProgramForOffscreen(renderer: CubismRenderer_WebGL, model: Readonly<CubismModel>, offscreen: CubismOffscreenRenderTarget_WebGL): void;
    setupShaderProgramForMask(renderer: CubismRenderer_WebGL, model: Readonly<CubismModel>, index: number): void;
    setupShaderProgramForOffscreenRenderTarget(renderer: CubismRenderer_WebGL): void;
    copyTexture(renderer: CubismRenderer_WebGL, baseColor: CubismTextureColor): void;
    releaseShaderProgram(): void;
    generateShaders(): void;
    registerShader(): void;
    registerBlendShader(): void;
    private generateBlendShader;
    loadShaderProgram(vertexShaderSource: string, fragmentShaderSource: string): WebGLProgram;
    compileShaderSource(shaderType: GLenum, shaderSource: string): WebGLProgram;
    setGl(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    setShaderPath(shaderPath: string): void;
    getShaderPath(): string;
    _shaderSets: Array<CubismShaderSet>;
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    _colorBlendMap: Map<CubismColorBlend, string>;
    _alphaBlendMap: Map<CubismAlphaBlend, string>;
    _colorBlendValues: Array<CubismColorBlend>;
    _alphaBlendValues: Array<CubismAlphaBlend>;
    _blendShaderSetMap: Map<string, number>;
    _shaderCount: number;
    _vertShaderSrc: string;
    _vertShaderSrcMasked: string;
    _vertShaderSrcSetupMask: string;
    _fragShaderSrcSetupMask: string;
    _fragShaderSrcPremultipliedAlpha: string;
    _fragShaderSrcMaskPremultipliedAlpha: string;
    _fragShaderSrcMaskInvertedPremultipliedAlpha: string;
    _vertShaderSrcCopy: string;
    _fragShaderSrcCopy: string;
    _fragShaderSrcColorBlend: string;
    _fragShaderSrcAlphaBlend: string;
    _vertShaderSrcBlend: string;
    _fragShaderSrcBlend: string;
    _isShaderLoading: boolean;
    _isShaderLoaded: boolean;
    _defaultShaderPath: string;
    _shaderPath: string;
}
export declare class CubismShaderManager_WebGL {
    static getInstance(): CubismShaderManager_WebGL;
    static deleteInstance(): void;
    private constructor();
    release(): void;
    getShader(gl: WebGLRenderingContext): CubismShader_WebGL;
    setGlContext(gl: WebGLRenderingContext): void;
    private _shaderMap;
}
export declare class CubismShaderSet {
    shaderProgram: WebGLProgram;
    attributePositionLocation: GLuint;
    attributeTexCoordLocation: GLuint;
    uniformMatrixLocation: WebGLUniformLocation;
    uniformClipMatrixLocation: WebGLUniformLocation;
    samplerTexture0Location: WebGLUniformLocation;
    samplerTexture1Location: WebGLUniformLocation;
    uniformBaseColorLocation: WebGLUniformLocation;
    uniformChannelFlagLocation: WebGLUniformLocation;
    uniformMultiplyColorLocation: WebGLUniformLocation;
    uniformScreenColorLocation: WebGLUniformLocation;
    samplerFrameBufferTextureLocation: WebGLUniformLocation;
    uniformInvertMaskFlagLocation: WebGLUniformLocation;
}
export declare enum ShaderNames {
    ShaderNames_SetupMask = 0,
    ShaderNames_NormalPremultipliedAlpha = 1,
    ShaderNames_NormalMaskedPremultipliedAlpha = 2,
    ShaderNames_NomralMaskedInvertedPremultipliedAlpha = 3,
    ShaderNames_AddPremultipliedAlpha = 4,
    ShaderNames_AddMaskedPremultipliedAlpha = 5,
    ShaderNames_AddMaskedPremultipliedAlphaInverted = 6,
    ShaderNames_MultPremultipliedAlpha = 7,
    ShaderNames_MultMaskedPremultipliedAlpha = 8,
    ShaderNames_MultMaskedPremultipliedAlphaInverted = 9,
    ShaderNames_ShaderCount = 10
}
export declare enum ShaderType {
    ShaderType_Normal = 0,
    ShaderType_Masked = 1,
    ShaderType_MaskedInverted = 2,
    ShaderType_Count = 3
}
import * as $ from './cubismshader_webgl';
export declare namespace Live2DCubismFramework {
    const CubismShaderSet: typeof $.CubismShaderSet;
    type CubismShaderSet = $.CubismShaderSet;
    const CubismShader_WebGL: typeof $.CubismShader_WebGL;
    type CubismShader_WebGL = $.CubismShader_WebGL;
    const CubismShaderManager_WebGL: typeof $.CubismShaderManager_WebGL;
    type CubismShaderManager_WebGL = $.CubismShaderManager_WebGL;
    const ShaderNames: typeof $.ShaderNames;
    type ShaderNames = $.ShaderNames;
}
