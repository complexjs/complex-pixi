'use strict';

var cxVoidSystem = require('complex-engine-system').cxVoidSystem;
var PIXI = require('pixi.js');

class cxPixiSystem extends cxVoidSystem
{
    /**
     * Constructor
     * @param  {DOMElement} container Container element
     * @param  {int} width     width
     * @param  {int} height    height
     * @param  {hex} color     background color
     */
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
     *Added a new entity
     * @param  {cxEntity} cxEntity Entity
     */
    added(cxEntity) {
        let comp = cxEntity.getComponent('cx.pixi.component.sprite');
        if(comp !== null){
            this.stage.addChild(comp.sprite);
        }

        comp = cxEntity.getComponent('cx.pixi.component');
        if(comp !== null){
            this.stage.addChild(comp.object);
        }
    }

    /**
     * Removed an entity
     * @param  {cxEntity} cxEntity Entity
     */
    removed(cxEntity) {
        let comp = cxEntity.getComponent('cx.pixi.component.sprite');
        if(comp !== null){
            this.stage.removeChild(comp.sprite);
        }

        comp = cxEntity.getComponent('cx.pixi.component');
        if(comp !== null){
            this.stage.removeChild(comp.object);
        }
    }

    /**
     * Update cycle
     */
    update ()
    {
         this.renderer.render(this.stage);
    }
}

module.exports = cxPixiSystem;
