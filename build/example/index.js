var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "complex-engine", "./MyScene"], function (require, exports, complex_engine_1, MyScene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MyScene_1 = __importDefault(MyScene_1);
    var complex = complex_engine_1.Complex.getInstance();
    console.log('hello');
    // After the scene has been created we load it
    complex.loadScene(new MyScene_1.default());
    // and start to render it
    function render() {
        complex.update();
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
});
//# sourceMappingURL=index.js.map