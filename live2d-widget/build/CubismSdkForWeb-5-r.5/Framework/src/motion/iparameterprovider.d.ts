export declare abstract class IParameterProvider {
    constructor();
    abstract update(deltaTimeSeconds?: number): boolean;
    abstract getParameter(): number;
}
import * as $ from './iparameterprovider';
export declare namespace Live2DCubismFramework {
    const IParameterProvider: typeof $.IParameterProvider;
    type IParameterProvider = $.IParameterProvider;
}
