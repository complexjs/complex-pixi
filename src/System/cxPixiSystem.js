'use strict';

let cxVoidSystem = require('complex-engine').cxVoidSystem;
let PIXI = require('pixi.js');

module.exports = class cxPixiSystem extends cxVoidSystem
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
        let comps = cxEntity.getComponents('cx.pixi.component.sprite');
        for (let i = 0; i < comps.length; i++){
            this.stage.addChild(comps[i].sprite);
        }

        comp = cxEntity.getComponent('cx.pixi.component');
        for (let i = 0; i < comps.length; i++){
            this.stage.addChild(comps[i].object);
        }
    }

    /**
     * Removed an entity
     * @param  {cxEntity} cxEntity Entity
     */
    removed(cxEntity) {
        let comps = cxEntity.getComponent('cx.pixi.component.sprite');
        for (let i = 0; i < comps.length; i++){
            this.stage.removeChild(comps[i].sprite);
        }

        comps = cxEntity.getComponent('cx.pixi.component');
        for (let i = 0; i < comps.length; i++){
            this.stage.removeChild(comps[i].object);
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
