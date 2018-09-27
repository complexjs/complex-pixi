"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var complex_engine_1 = require("complex-engine");
var pixi_js_1 = require("pixi.js");
var PixiComponent_1 = __importDefault(require("../Component/PixiComponent"));
var AnimationGroupComponent_1 = __importDefault(require("../Component/AnimationGroupComponent"));
var PixiSystem = /** @class */ (function (_super) {
    __extends(PixiSystem, _super);
    function PixiSystem(container, width, height, color) {
        var _this = _super.call(this) || this;
        _this.app = new pixi_js_1.Application(width, height, { backgroundColor: color });
        container.appendChild(_this.app.view);
        return _this;
    }
    PixiSystem.prototype.added = function (entity) {
        var pixiComponents = entity.getComponents(PixiComponent_1.default);
        for (var i = 0; i < pixiComponents.length; i++) {
            this.app.stage.addChild(pixiComponents[i].getObject());
        }
        var animationComponents = entity.getComponents(AnimationGroupComponent_1.default);
        for (var i = 0; i < animationComponents.length; i++) {
            this.app.stage.addChild(animationComponents[i].getAnimation());
        }
    };
    PixiSystem.prototype.removed = function (entity) {
        var comps = entity.getComponents(PixiComponent_1.default);
        for (var i = 0; i < comps.length; i++) {
            this.app.stage.removeChild(comps[i].getObject());
        }
        var animationComponents = entity.getComponents(AnimationGroupComponent_1.default);
        for (var i = 0; i < animationComponents.length; i++) {
            this.app.stage.removeChild(animationComponents[i].getAnimation());
        }
    };
    PixiSystem.prototype.update = function () {
    };
    return PixiSystem;
}(complex_engine_1.VoidSystem));
exports.default = PixiSystem;
//# sourceMappingURL=PixiSystem.js.map