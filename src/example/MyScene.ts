import { Scene, Entity } from "complex-engine";
import PixiSystem from "../System/PixiSystem";

// This is our main entry point. In a scene we build the world. We attach all required systems to it. Add all managers
// and entities.
export default class MyScene extends Scene {
	constructor() {
		super("MainScene");
	}
	// This method is called internally as soon as you call `Complex.loadScene`
	load() {
		const canvas = <HTMLElement>document.getElementById("canvas");
		this.world.addSystem(new PixiSystem(canvas, 400, 400, 0x000000));
		this.createPointer();
	}

	createPointer() {
		let pointer = new Entity("Pointer");
		this.world.addEntity(pointer);
	}
}