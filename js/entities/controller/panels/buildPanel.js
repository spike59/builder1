/**
 * a basic HUD item to display score
 */
game.buildPanel = me.Container.extend({
    /**
     * constructor
     */
    init: function(x, y) {
        console.log("init build panel");
        this.sets = {
            x:x,
            y:y,
            w: me.video.renderer.getWidth(),
            h:64
        };
        
        
        // call the parent constructor
        // (size does not matter here)
        this._super(me.Container, 'init',[x,y,this.sets.w,this.sets.h]);
        this.anchorPoint.set(0, 0); 
        //get panels items
        //need to add game.data.technology -> availables builds stuffs
        this.items = game.data.technology.builds
        //add left and right arrow if items > width
        //one item is 64*64
        //get screeen width /64 if > 1 then arrows

        this.leftArrow = this.addChild(new game.MenuPanel.leftArrow());
    },
    update : function (dt) {
        this._super(me.Container,"update",[dt]);
        // we don't do anything fancy here, so just
        // return true if the score has been updated
            return true;

    },
    draw:function(renderer){
        var color = new me.Color(120,255,255,0.5);
        renderer.setColor(color);
        renderer.fillRect(this.sets.x,this.sets.y,this.sets.w,this.sets.h);
        this._super(me.Container, 'draw',[renderer]);
    }


});