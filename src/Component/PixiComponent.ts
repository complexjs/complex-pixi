import { Component } from 'complex-engine';
import { DisplayObject } from "pixi.js";

export default class PixiComponent extends Component {
    protected object: DisplayObject;
    
    constructor(pixiElement: DisplayObject) {
        super();
        this.object = pixiElement;
    }

    getObject() {
        return this.object;
    }
}
