/**
 * a basic HUD item to display score
 */
game.MenuPanel = me.Container.extend({
    /**
     * constructor
     */
    init: function() {
        this.sets={
            x:0,
            y:me.video.renderer.getHeight()-32,
            w:me.video.renderer.getWidth(),
            h:32
        };
        
        this._super(me.Container, 'init',[this.sets.x,this.sets.y,this.sets.w,this.sets.h]);
        this.anchorPoint.set(0, 0);  
        this.buildButton = this.addChild(new game.controller.MenuButton(160,0,"build",this));
   
    },
    showPanel:function(name){
        game.currentController.showPanel(name);
    },    
    /**
     * update function
     */
    update : function (dt) {
        this._super(me.Container,"update",[dt]);
        // we don't do anything fancy here, so just
        // return true if the score has been updated
            return true;

    },
    draw:function(renderer){
        var color = new me.Color(255,255,255,0.5);
        renderer.setColor(color);
        renderer.fillRect(this.sets.x,this.sets.y,this.sets.w,this.sets.h);
        this._super(me.Container, 'draw',[renderer]);
    }


});