import { Component } from "complex-engine";
import { extras } from "pixi.js";
import NamedAnimations from '../Utils/NamedAnimations';
export default class AnimationGroupComponent extends Component {
    private animations;
    private currentAnimation;
    private animation;
    constructor(initialAnimation: extras.AnimatedSprite, animations: NamedAnimations);
    playAnimation(name: string): void;
    getAnimation(): extras.AnimatedSprite;
}
//# sourceMappingURL=AnimationGroupComponent.d.ts.map