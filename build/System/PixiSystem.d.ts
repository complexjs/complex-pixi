import { VoidSystem, Entity } from "complex-engine";
import { Application } from "pixi.js";
export default class PixiSystem extends VoidSystem {
    app: Application;
    constructor(container: HTMLElement, width: number, height: number, color: number);
    added(entity: Entity): void;
    removed(entity: Entity): void;
    update(): void;
}
