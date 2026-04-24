export declare class CubismRenderTarget_WebGL {
    static copyBuffer(gl: WebGL2RenderingContext, src: CubismRenderTarget_WebGL, dst: CubismRenderTarget_WebGL): void;
    beginDraw(restoreFbo?: WebGLFramebuffer): void;
    endDraw(): void;
    clear(r: number, g: number, b: number, a: number): void;
    createRenderTarget(gl: WebGLRenderingContext | WebGL2RenderingContext, displayBufferWidth: number, displayBufferHeight: number, previousFramebuffer: WebGLFramebuffer): boolean;
    destroyRenderTarget(): void;
    getGL(): WebGLRenderingContext | WebGL2RenderingContext;
    getRenderTexture(): WebGLFramebuffer;
    getColorBuffer(): WebGLTexture;
    getBufferWidth(): number;
    getBufferHeight(): number;
    isValid(): boolean;
    getOldFBO(): WebGLFramebuffer;
    constructor();
    protected _gl: WebGLRenderingContext | WebGL2RenderingContext;
    protected _colorBuffer: WebGLTexture;
    protected _renderTexture: WebGLFramebuffer;
    protected _bufferWidth: number;
    protected _bufferHeight: number;
    private _oldFbo;
}
import * as $ from './cubismrendertarget_webgl';
export declare namespace Live2DCubismFramework {
    const CubismOffscreenSurface_WebGL: typeof CubismRenderTarget_WebGL;
    type CubismOffscreenSurface_WebGL = $.CubismRenderTarget_WebGL;
}
