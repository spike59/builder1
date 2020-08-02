game.SpawnCell = me.Renderable.extend({
    init:function(x,y,settings){
        //console.log("init ground renderable");
        var sets = settings||{};
        this.x = x;
        this.y = y;
        this.w = 32;
        this.h = 32;
        this.color = sets.color||'#d62a55';
        this._super(me.Renderable,"init",[this.x,this.y,this.w,this.h]);
        this.anchorPoint.set(0,0);
        

    },
    // update:function(dt){
    //     this._super(me.Renderable,"update",[dt]);
    //     return true;
    // },
    draw:function(renderer){
        var color = new me.Color(255,0,0,0.2);
        renderer.setColor(color);
        renderer.fillRect(this.x,this.y,32,32);
        //renderer.setColor('#312618');
        //renderer.strokeRect(this.x,this.y,32,32);        
    }
});