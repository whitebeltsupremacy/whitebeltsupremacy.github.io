import { CubismModel } from '../model/cubismmodel';
import { CubismClippingManager } from './cubismclippingmanager';
import { CubismClippingContext, CubismRenderer, DrawableObjectType } from './cubismrenderer';
export declare class CubismClippingManager_WebGL extends CubismClippingManager<CubismClippingContext_WebGL> {
    setGL(gl: WebGLRenderingContext): void;
    constructor();
    setupClippingContext(model: CubismModel, renderer: CubismRenderer_WebGL, lastFbo: WebGLFramebuffer, lastViewport: number[], drawObjectType: DrawableObjectType): void;
    getClippingMaskCount(): number;
    _currentMaskBuffer: CubismRenderTarget_WebGL;
    gl: WebGLRenderingContext;
}
export declare class CubismClippingContext_WebGL extends CubismClippingContext {
    constructor(manager: CubismClippingManager_WebGL, clippingDrawableIndices: Int32Array, clipCount: number);
    getClippingManager(): CubismClippingManager_WebGL;
    setGl(gl: WebGLRenderingContext): void;
    private _owner;
}
export declare class CubismRendererProfile_WebGL {
    private setGlEnable;
    private setGlEnableVertexAttribArray;
    save(): void;
    restore(): void;
    setGl(gl: WebGLRenderingContext): void;
    constructor();
    private _lastArrayBufferBinding;
    private _lastElementArrayBufferBinding;
    private _lastProgram;
    private _lastActiveTexture;
    private _lastTexture0Binding2D;
    private _lastTexture1Binding2D;
    private _lastVertexAttribArrayEnabled;
    private _lastScissorTest;
    private _lastBlend;
    private _lastStencilTest;
    private _lastDepthTest;
    private _lastCullFace;
    private _lastFrontFace;
    private _lastColorMask;
    private _lastBlending;
    gl: WebGLRenderingContext;
}
export declare class CubismRenderer_WebGL extends CubismRenderer {
    initialize(model: CubismModel, maskBufferCount?: number): void;
    private setupParentOffscreens;
    bindTexture(modelTextureNo: number, glTexture: WebGLTexture): void;
    getBindedTextures(): Map<number, WebGLTexture>;
    setClippingMaskBufferSize(size: number): void;
    getClippingMaskBufferSize(): number;
    getModelRenderTarget(index: number): CubismRenderTarget_WebGL;
    getRenderTextureCount(): number;
    constructor(width: number, height: number);
    release(): void;
    loadShaders(shaderPath?: string): void;
    doDrawModel(shaderPath?: string): void;
    drawObjectLoop(lastFbo: WebGLFramebuffer): void;
    protected renderObject(objectIndex: number, objectType: DrawableObjectType): void;
    drawDrawable(drawableIndex: number, rootFbo: WebGLFramebuffer): void;
    drawMeshWebGL(model: Readonly<CubismModel>, index: number): void;
    submitDrawToParentOffscreen(objectIndex: number, objectType: DrawableObjectType): void;
    addOffscreen(offscreenIndex: number): void;
    drawOffscreen(offscreen: CubismOffscreenRenderTarget_WebGL): void;
    drawOffscreenWebGL(model: Readonly<CubismModel>, offscreen: CubismOffscreenRenderTarget_WebGL): void;
    protected saveProfile(): void;
    protected restoreProfile(): void;
    beforeDrawModelRenderTarget(): void;
    afterDrawModelRenderTarget(): void;
    getOffscreenMaskBuffer(index: number): CubismRenderTarget_WebGL;
    static doStaticRelease(): void;
    setRenderState(fbo: WebGLFramebuffer, viewport: number[]): void;
    preDraw(): void;
    getDrawableMaskBuffer(index: number): CubismRenderTarget_WebGL;
    setClippingContextBufferForMask(clip: CubismClippingContext_WebGL): void;
    getClippingContextBufferForMask(): CubismClippingContext_WebGL;
    setClippingContextBufferForDrawable(clip: CubismClippingContext_WebGL): void;
    getClippingContextBufferForDrawable(): CubismClippingContext_WebGL;
    setClippingContextBufferForOffscreen(clip: CubismClippingContext_WebGL): void;
    getClippingContextBufferForOffscreen(): CubismClippingContext_WebGL;
    isGeneratingMask(): boolean;
    startUp(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    _textures: Map<number, WebGLTexture>;
    _sortedObjectsIndexList: Array<number>;
    _sortedObjectsTypeList: Array<number>;
    _rendererProfile: CubismRendererProfile_WebGL;
    _drawableClippingManager: CubismClippingManager_WebGL;
    _clippingContextBufferForMask: CubismClippingContext_WebGL;
    _clippingContextBufferForDraw: CubismClippingContext_WebGL;
    _clippingContextBufferForOffscreen: CubismClippingContext_WebGL;
    _offscreenClippingManager: CubismClippingManager_WebGL;
    _modelRenderTargets: Array<CubismOffscreenRenderTarget_WebGL>;
    _drawableMasks: Array<CubismRenderTarget_WebGL>;
    _offscreenMasks: Array<CubismRenderTarget_WebGL>;
    _offscreenList: Array<CubismOffscreenRenderTarget_WebGL>;
    _currentFbo: WebGLFramebuffer;
    _currentOffscreen: CubismOffscreenRenderTarget_WebGL | null;
    _modelRootFbo: WebGLFramebuffer;
    _bufferData: {
        vertex: WebGLBuffer;
        uv: WebGLBuffer;
        index: WebGLBuffer;
    };
    _extension: any;
    gl: WebGLRenderingContext | WebGL2RenderingContext;
}
import * as $ from './cubismrenderer_webgl';
import { CubismRenderTarget_WebGL as CubismRenderTarget_WebGL } from './cubismrendertarget_webgl';
import { CubismOffscreenRenderTarget_WebGL as CubismOffscreenRenderTarget_WebGL } from './cubismoffscreenrendertarget_webgl';
export declare namespace Live2DCubismFramework {
    const CubismClippingContext: typeof CubismClippingContext_WebGL;
    type CubismClippingContext = $.CubismClippingContext_WebGL;
    const CubismClippingManager_WebGL: typeof $.CubismClippingManager_WebGL;
    type CubismClippingManager_WebGL = $.CubismClippingManager_WebGL;
    const CubismRenderer_WebGL: typeof $.CubismRenderer_WebGL;
    type CubismRenderer_WebGL = $.CubismRenderer_WebGL;
}
