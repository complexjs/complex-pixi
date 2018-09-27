import {Component} from "complex-engine";
import {extras} from "pixi.js";
import NamedAnimations from '../Utils/NamedAnimations';

export default class AnimationGroupComponent extends Component {
    private animations: NamedAnimations;
    private currentAnimation: string;
    private animation: extras.AnimatedSprite;

    constructor(currentAnimation: string, initialAnimation: extras.AnimatedSprite, animations: NamedAnimations) {
        super();
        this.animations = animations;
        this.animation = initialAnimation;
        this.currentAnimation = currentAnimation;
    }

    public playAnimation(name: string): void{
        this.currentAnimation = name;

		this.animation.textures = this.animations[name];
		this.animation.gotoAndPlay(0);
    }

    public getAnimation() {
        return this.animation;
    }

}