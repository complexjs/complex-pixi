'use strict';

let cxJsonParser = require('complex-json-loader').cxJsonParser;
let cxPixiSpriteComponent = require('complex-pixi').cxPixiSpriteComponent;
let PIXI = require('pixi.js');

module.exports = class cxPixiSpriteComponentParser extends cxJsonParser {
    constructor(){
        super();
    }

    supports( obj ){
        return ( obj.type === 'cx.pixi.component.sprite');
    }

    parse( json ){
        let data = json.data;
        let tex = PIXI.Texture.fromImage(data.texture);
        let component = new cxPixiSpriteComponent(tex, data.size, data.position);
        return component;
    }
};
