game.WaterCell = me.Renderable.extend({
    init:function(x,y,settings){
        console.log("init ground renderable");
        var sets = settings||{};
        this.x = x;
        this.y = y;
        this.w = 32;
        this.h = 32;
        this.color = sets.color||'#21357f';
        this._super(me.Renderable,"init",[this.x,this.y,this.w,this.h]);
        this.anchorPoint.set(0,0);
        //this.alwaysUpdate = true;
    },
    // update:function(dt){
    //     this._super(me.Renderable,"update",[dt]);
    //     return true;
    // },
    draw:function(renderer){
        
        renderer.setColor('#21357f');
        renderer.fillRect(this.x,this.y,32,32);
    }
});