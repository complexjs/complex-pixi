/// <reference types="pixi.js" />
declare module "Component/PixiComponent" {
    import { Component } from 'complex-engine';
    import { DisplayObject } from "pixi.js";
    export default class PixiComponent extends Component {
        protected object: DisplayObject;
        constructor(pixiElement: DisplayObject);
        getObject(): DisplayObject;
    }
}
declare module "System/PixiSystem" {
    import { VoidSystem, Entity } from "complex-engine";
    import { Application } from "pixi.js";
    export default class PixiSystem extends VoidSystem {
        app: Application;
        constructor(container: HTMLElement, width: number, height: number, color: number);
        added(entity: Entity): void;
        removed(entity: Entity): void;
        update(): void;
    }
}
declare module "example/MyScene" {
    import { Scene } from "complex-engine";
    export default class MyScene extends Scene {
        constructor();
        load(): void;
        createPointer(): void;
    }
}
declare module "example/index" { }
