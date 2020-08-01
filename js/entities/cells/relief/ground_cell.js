game.GroundCell = me.Renderable.extend({
    init:function(x,y,settings){
        console.log("init ground renderable");
        var sets = settings||{};
        this.x = x;
        this.y = y;
        this.w = 32;
        this.h = 32;
        this.color = sets.color||'#744b16';
        this._super(me.Renderable,"init",[this.x,this.y,this.w,this.h]);
        this.anchorPoint.set(0,0);
        //this.alwaysUpdate = true;
    },
    // update:function(dt){
    //     this._super(me.Renderable,"update",[dt]);
    //     return true;
    // },
    draw:function(renderer){
        var color = 
        renderer.setColor('#744b16');
        renderer.fillRect(this.x,this.y,32,32);
    }
});