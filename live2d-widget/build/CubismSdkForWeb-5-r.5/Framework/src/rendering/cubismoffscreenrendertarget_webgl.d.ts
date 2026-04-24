import { CubismRenderTarget_WebGL } from './cubismrendertarget_webgl';
export declare class CubismOffscreenRenderTarget_WebGL extends CubismRenderTarget_WebGL {
    private initializeOffscreenManager;
    setOffscreenRenderTarget(gl: WebGLRenderingContext | WebGL2RenderingContext, displayBufferWidth: number, displayBufferHeight: number, previousFramebuffer: WebGLFramebuffer): void;
    getUsingRenderTextureState(): boolean;
    startUsingRenderTexture(): void;
    stopUsingRenderTexture(): void;
    setOffscreenIndex(offscreenIndex: number): void;
    getOffscreenIndex(): number;
    setOldOffscreen(oldOffscreen: CubismOffscreenRenderTarget_WebGL): void;
    getOldOffscreen(): CubismOffscreenRenderTarget_WebGL;
    setParentPartOffscreen(parentOffscreenRenderTarget: CubismOffscreenRenderTarget_WebGL): void;
    getParentPartOffscreen(): CubismOffscreenRenderTarget_WebGL;
    constructor();
    release(): void;
    private _offscreenIndex;
    private _parentOffscreenRenderTarget;
    private _oldOffscreen;
    private _webGLOffscreenManager;
    protected _gl: WebGLRenderingContext | WebGL2RenderingContext;
}
