'use strict';

let cxJsonParser = require('complex-json-loader').cxJsonParser;
let cxPixiSpriteComponent = require('../Component/cxPixiSpriteComponent.js');
let PIXI = require('pixi.js');

module.exports = class cxPixiSpriteComponentParser extends cxJsonParser {
    constructor(){
        super();
    }

    /**
     * Check if object is supported to be parsed
     */
    supports( obj ){
        return ( obj.type === 'cx.pixi.component.sprite');
    }

    /**
     * Deserialize object
     * @return cxPixiSpriteComponent
     */
    parse( json ){
        let data = json.data;
        let tex = PIXI.Texture.fromImage(data.texture);
        let component = new cxPixiSpriteComponent(tex, data.size, data.position);
        return component;
    }
};
