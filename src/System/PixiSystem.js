'use strict';

var cxVoidSystem = require('complex-engine-system').cxVoidSystem;
var PIXI = require('pixi.js');

class PixiSystem extends cxVoidSystem
{
    constructor(container, width, height, color)
    {
        super();
        color = color || 0x333333;
        this.tag = 'cx.pixi.system';

        this.width = width;
        this.height = height;
        this.container = container || document.body;

        this.stage = new PIXI.Stage(color);
        this.renderer = PIXI.autoDetectRenderer(width, height);

        this.container.appendChild(this.renderer.view);
    }

    /**
     * [added description]
     * @param  {[type]} cxEntity [description]
     * @return {[type]}          [description]
     */
    added(cxEntity)
    {
        if(cxEntity.hasComponent('cx.pixi.component.sprite')){
            let comp = cxEntity.getComponent('cx.pixi.component.sprite');
            this.stage.addChild(comp.sprite);
        }
    }

    /**
     * [removed description]
     * @param  {[type]} cxEntity [description]
     * @return {[type]}          [description]
     */
    removed(cxEntity)
    {
        if(cxEntity.hasComponent('cx.pixi.component.sprite')){
            let comp = cxEntity.getComponent('cx.pixi.component.sprite');
            this.stage.removeChild(comp.sprite);
        }
    }

    /**
     * [update description]
     * @return {[type]} [description]
     */
    update ()
    {
         this.renderer.render(this.stage);
    }
}

module.exports = PixiSystem;
