declare class CubismRenderTargetContainer {
    constructor(colorBuffer?: WebGLTexture, renderTexture?: WebGLFramebuffer, inUse?: boolean);
    clear(): void;
    getColorBuffer(): WebGLTexture;
    getRenderTexture(): WebGLFramebuffer;
    colorBuffer: WebGLTexture;
    renderTexture: WebGLFramebuffer;
    inUse: boolean;
}
export declare class CubismWebGLOffscreenManager {
    private constructor();
    release(): void;
    static getInstance(): CubismWebGLOffscreenManager;
    private getContextManager;
    removeContext(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    initialize(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number): void;
    beginFrameProcess(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    endFrameProcess(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    getContainerSize(gl: WebGLRenderingContext | WebGL2RenderingContext): number;
    getOffscreenRenderTargetContainers(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number, previousFramebuffer: WebGLFramebuffer): CubismRenderTargetContainer;
    getUsingRenderTextureState(gl: WebGLRenderingContext | WebGL2RenderingContext, renderTexture: WebGLFramebuffer): boolean;
    startUsingRenderTexture(gl: WebGLRenderingContext | WebGL2RenderingContext, renderTexture: WebGLFramebuffer): void;
    stopUsingRenderTexture(gl: WebGLRenderingContext | WebGL2RenderingContext, renderTexture: WebGLFramebuffer): void;
    stopUsingAllRenderTextures(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    releaseStaleRenderTextures(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    getPreviousActiveRenderTextureCount(gl: WebGLRenderingContext | WebGL2RenderingContext): number;
    getCurrentActiveRenderTextureCount(gl: WebGLRenderingContext | WebGL2RenderingContext): number;
    updateRenderTargetContainerCount(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    getUnusedOffscreenRenderTargetContainer(gl: WebGLRenderingContext | WebGL2RenderingContext): CubismRenderTargetContainer;
    createOffscreenRenderTargetContainer(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number, previousFramebuffer: WebGLFramebuffer): CubismRenderTargetContainer;
    private static _instance;
    private _contextManagers;
}
export {};
