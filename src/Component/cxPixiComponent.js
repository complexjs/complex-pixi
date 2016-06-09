'use strict';

var cxComponent = require('complex-engine-component');
var PIXI = require('pixi.js');

class cxPixiComponent extends cxComponent
{
    /**
     * cxPixiComponent constructor
     * @param  {PIXI.Texture} texture  the sprites texture
     * @param  {Object} size     size Object {x:1, y:1}
     * @param  {Object} position position Object {x:10, y:10}
     */
    constructor( pixiElement ){
        super();
        this.tag = 'cx.pixi.component';

        this.object = pixiElement;
    }
}

module.exports = cxPixiComponent;
