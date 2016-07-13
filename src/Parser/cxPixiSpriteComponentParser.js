'use strict';

import {cxJsonParser} from 'complex-json-loader';
import {cxPixiSpriteComponent} from 'complex-pixi';
import PIXI from 'pixi.js';

export default class cxPixiSpriteComponentParser extends cxJsonParser {
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
