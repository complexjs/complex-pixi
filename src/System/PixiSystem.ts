import {Entity, VoidSystem} from "complex-engine";
import {Application} from "pixi.js";
import PixiComponent from "../Component/PixiComponent";
import AnimationGroupComponent from '../Component/AnimationGroupComponent';

export default class PixiSystem extends VoidSystem {
    app: Application;

    constructor(
        container: HTMLElement,
        width: number,
        height: number,
        color: number
    ) {
        super();
        this.app = new Application(width, height, {backgroundColor: color});
        container.appendChild(this.app.view);
    }


    added(entity: Entity) {
        let pixiComponents = entity.getComponents<PixiComponent>(PixiComponent);
        for (let i = 0; i < pixiComponents.length; i++) {
            this.app.stage.addChild(pixiComponents[i].getObject());
        }

        let animationComponents = entity.getComponents<AnimationGroupComponent>(AnimationGroupComponent);
        for (let i = 0; i < animationComponents.length; i++) {
            this.app.stage.addChild(animationComponents[i].getAnimation());
        }
    }

    removed(entity: Entity) {
        let comps = entity.getComponents<PixiComponent>(PixiComponent);
        for (let i = 0; i < comps.length; i++) {
            this.app.stage.removeChild(comps[i].getObject());
        }

        let animationComponents = entity.getComponents<AnimationGroupComponent>(AnimationGroupComponent);
        for (let i = 0; i < animationComponents.length; i++) {
            this.app.stage.removeChild(animationComponents[i].getAnimation());
        }
    }

    update() {
    }
}
