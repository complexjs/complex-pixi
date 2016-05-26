'use strict';

var cxComponent = require('complex-engine-component');
var PIXI = require('pixi');

class PixiSpriteComponent extends cxComponent
{
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

        this.sprite.scale.x = size.x;
        this.sprite.scale.y = size.y;
    }
}

module.exports = PixiSpriteComponent;
