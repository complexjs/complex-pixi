import { Texture } from 'pixi.js';
export default interface NamedAnimations {
    [key: string]: AnimationSettings;
}
export interface AnimationSettings {
    animationSpeed: number;
    frames: Texture[];
}
//# sourceMappingURL=NamedAnimations.d.ts.map