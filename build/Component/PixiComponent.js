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
define(["require", "exports", "complex-engine"], function (require, exports, complex_engine_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PixiComponent = /** @class */ (function (_super) {
        __extends(PixiComponent, _super);
        function PixiComponent(pixiElement) {
            var _this = _super.call(this) || this;
            _this.object = pixiElement;
            return _this;
        }
        PixiComponent.prototype.getObject = function () {
            return this.object;
        };
        return PixiComponent;
    }(complex_engine_1.Component));
    exports.default = PixiComponent;
});
//# sourceMappingURL=PixiComponent.js.map