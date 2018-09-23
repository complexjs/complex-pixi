var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "complex-engine", "../System/PixiSystem"], function (require, exports, complex_engine_1, PixiSystem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    PixiSystem_1 = __importDefault(PixiSystem_1);
    // This is our main entry point. In a scene we build the world. We attach all required systems to it. Add all managers
    // and entities.
    var MyScene = /** @class */ (function (_super) {
        __extends(MyScene, _super);
        function MyScene() {
            return _super.call(this, "MainScene") || this;
        }
        // This method is called internally as soon as you call `Complex.loadScene`
        MyScene.prototype.load = function () {
            var canvas = document.getElementById("canvas");
            this.world.addSystem(new PixiSystem_1.default(canvas, 400, 400, 0x000000));
            this.createPointer();
        };
        MyScene.prototype.createPointer = function () {
            var pointer = new complex_engine_1.Entity("Pointer");
            this.world.addEntity(pointer);
        };
        return MyScene;
    }(complex_engine_1.Scene));
    exports.default = MyScene;
});
//# sourceMappingURL=MyScene.js.map