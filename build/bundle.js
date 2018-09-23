var cxPixi = (function () {
  var main = null;
  var modules = {
      "require": {
          factory: undefined,
          dependencies: [],
          exports: function (args, callback) { return require(args, callback); },
          resolved: true
      }
  };
  function define(id, dependencies, factory) {
      return main = modules[id] = {
          dependencies: dependencies,
          factory: factory,
          exports: {},
          resolved: false
      };
  }
  function resolve(definition) {
      if (definition.resolved === true)
          return;
      definition.resolved = true;
      var dependencies = definition.dependencies.map(function (id) {
          return (id === "exports")
              ? definition.exports
              : (function () {
                  if(modules[id] !== undefined) {
                    resolve(modules[id]);
                    return modules[id].exports;
                  } else if(id === "complex-engine") {
                    return window["cx"];
                  } else if(id === "pixi.js") {
                    return window["pixi.js"];
                  } else {
                    try {
                      return require(id);
                    } catch(e) {
                      throw Error("module '" + id + "' not found.");
                    }
                  }
              })();
      });
      definition.factory.apply(null, dependencies);
  }
  function collect() {
      Object.keys(modules).map(function (key) { return modules[key]; }).forEach(resolve);
      return (main !== null) 
        ? main.exports
        : undefined
  }

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
  define("Component/PixiComponent", ["require", "exports", "complex-engine"], function (require, exports, complex_engine_1) {
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
  define("System/PixiSystem", ["require", "exports", "complex-engine", "pixi.js", "Component/PixiComponent"], function (require, exports, complex_engine_2, pixi_js_1, PixiComponent_1) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      PixiComponent_1 = __importDefault(PixiComponent_1);
      var PixiSystem = /** @class */ (function (_super) {
          __extends(PixiSystem, _super);
          function PixiSystem(container, width, height, color) {
              var _this = _super.call(this) || this;
              _this.app = new pixi_js_1.Application(width, height, { backgroundColor: color });
              container.appendChild(_this.app.view);
              return _this;
          }
          PixiSystem.prototype.added = function (entity) {
              var comps = entity.getComponents(PixiComponent_1.default);
              for (var i = 0; i < comps.length; i++) {
                  this.app.stage.addChild(comps[i].getObject());
              }
          };
          PixiSystem.prototype.removed = function (entity) {
              var comps = entity.getComponents(PixiComponent_1.default);
              for (var i = 0; i < comps.length; i++) {
                  this.app.stage.removeChild(comps[i].getObject());
              }
          };
          PixiSystem.prototype.update = function () { };
          return PixiSystem;
      }(complex_engine_2.VoidSystem));
      exports.default = PixiSystem;
  });
  define("example/MyScene", ["require", "exports", "complex-engine", "System/PixiSystem"], function (require, exports, complex_engine_3, PixiSystem_1) {
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
              var pointer = new complex_engine_3.Entity("Pointer");
              this.world.addEntity(pointer);
          };
          return MyScene;
      }(complex_engine_3.Scene));
      exports.default = MyScene;
  });
  define("example/index", ["require", "exports", "complex-engine", "example/MyScene"], function (require, exports, complex_engine_4, MyScene_1) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      MyScene_1 = __importDefault(MyScene_1);
      var complex = complex_engine_4.Complex.getInstance();
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
  //# sourceMappingURL=bundle.js.map
  return collect(); 
})();