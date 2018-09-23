import { VoidSystem, Entity } from "complex-engine";
import { Application } from "pixi.js";
import PixiComponent from "../Component/PixiComponent";

export default class PixiSystem extends VoidSystem {
  app: Application;

  constructor(
    container: HTMLElement,
    width: number,
    height: number,
    color: number
  ) {
    super();
    this.app = new Application(width, height, { backgroundColor: color });
    container.appendChild(this.app.view);
  }

  added(entity: Entity) {
    let comps = entity.getComponents<PixiComponent>(PixiComponent);
    for (let i = 0; i < comps.length; i++) {
      this.app.stage.addChild(comps[i].getObject());
    }
  }

  removed(entity: Entity) {
    let comps = entity.getComponents<PixiComponent>(PixiComponent);
    for (let i = 0; i < comps.length; i++) {
      this.app.stage.removeChild(comps[i].getObject());
    }
  }

  update() {}
}
