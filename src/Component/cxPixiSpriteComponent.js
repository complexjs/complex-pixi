'use strict';

var cxComponent = require('complex-engine-component');
var PIXI = require('pixi.js');

class cxPixiSpriteComponent extends cxComponent
{
    /**
     * cxPixiSpriteComponent constructor
     * @param  {PIXI.Texture} texture  the sprites texture
     * @param  {Object} size     size Object {x:1, y:1}
     * @param  {Object} position position Object {x:10, y:10}
     */
    constructor( texture, size, position ){
        super();
        this.tag = 'cx.pixi.component.sprite';

        size = size || { x: 1, y: 1};
        position = position || { x: 0, y: 0};

        this.texture = texture;
        this.sprite = new PIXI.Sprite(texture);

        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;

        this.sprite.position.x = position.x;
        this.sprite.position.y = position.y;

        this.sprite.width = size.x;
        this.sprite.height = size.y;
    }
}

module.exports = cxPixiSpriteComponent;
