game.Cursor = me.Renderable.extend({
    init:function(x,y){
        console.log("add cursor");
        this.x = x;
        this.y = y;
        this._super(me.Renderable,"init",[this.x,this.x,32,32]);
        this.alwaysUpdate = true;
        this.anchorPoint.set(0, 0);        
    },
    // update:function(dt){
    //     this._super(me.Renderable,"update",[dt]);
    //     return true;
    // },
    draw:function(renderer){
        
        renderer.setColor('#4296c5');
        renderer.fillRect(this.pos.x+128,this.pos.y,32,32);
        game.currentScreen.controller.font.draw(renderer,"text",this.pos.x+128,this.pos.y);
    }
});