'use strict';

var cxVoidSystem = require('complex-engine-system').cxVoidSystem;
var PIXI = require('pixi.js');

class PixiSystem extends cxVoidSystem
{
    constructor(container, width, height)
    {
        super();
        this.tag = 'cx.pixi.system';

        this.width = width;
        this.height = height;
        this.container = container || document.body;

        this.stage = new PIXI.Stage(0x66FF99);
        this.renderer = PIXI.autoDetectRenderer(width, height);


        this.container.appendChild(this.renderer.view);
    }

    added(cxEntity)
    {
        if(cxEntity.hasComponent('cx.pixi.component.sprite')){
            let comp = cxEntity.getComponent('cx.pixi.component.sprite');
            this.stage.addChild(comp.sprite);
        }
    }

    removed(cxEntity)
    {
        if(cxEntity.hasComponent('cx.pixi.component.sprite')){
            let comp = cxEntity.getComponent('cx.pixi.component.sprite');
            //this.stage.addChild(comp.sprite);
        }
    }

    update ()
    {
         this.renderer.render(this.stage);
    }
}

module.exports = PixiSystem;
