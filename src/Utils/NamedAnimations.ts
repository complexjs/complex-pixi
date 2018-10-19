import { Texture, extras } from 'pixi.js';

export default interface NamedAnimations {
    [key: string]: AnimationSettings;
}

export interface AnimationSettings {
    animationSpeed: number;
    frames: Texture[];
}