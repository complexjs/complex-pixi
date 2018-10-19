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
Object.defineProperty(exports, "__esModule", { value: true });
var complex_engine_1 = require("complex-engine");
var AnimationGroupComponent = /** @class */ (function (_super) {
    __extends(AnimationGroupComponent, _super);
    function AnimationGroupComponent(initialAnimation, animations) {
        var _this = _super.call(this) || this;
        _this.animations = animations;
        _this.animation = initialAnimation;
        _this.currentAnimation = '';
        return _this;
    }
    AnimationGroupComponent.prototype.playAnimation = function (name) {
        if (this.currentAnimation !== name) {
            this.currentAnimation = name;
            this.animation.textures = this.animations[name].frames;
            this.animation.animationSpeed = this.animations[name].animationSpeed;
            this.animation.gotoAndPlay(0);
        }
    };
    AnimationGroupComponent.prototype.getAnimation = function () {
        return this.animation;
    };
    return AnimationGroupComponent;
}(complex_engine_1.Component));
exports.default = AnimationGroupComponent;
//# sourceMappingURL=AnimationGroupComponent.js.map