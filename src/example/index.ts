import { Scene, Entity, Complex } from "complex-engine";
import MyScene from './MyScene';

const complex = Complex.getInstance();
console.log('hello')

// After the scene has been created we load it
complex.loadScene(new MyScene());

// and start to render it
function render() {
  complex.update();
  requestAnimationFrame(render);
}

requestAnimationFrame(render);
