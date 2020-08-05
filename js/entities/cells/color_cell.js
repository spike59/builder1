game.ColorCell = me.Renderable.extend({
    init:function(x,y,settings){
        //console.log("init ground renderable");
        var sets = settings||{};
        this.x = x;
        this.y = y;
        this.w = 32;
        this.h = 32;
        this.color = new me.Color(sets.color[0],sets.color[1],sets.color[2],sets.color[3]);
        this._super(me.Renderable,"init",[this.x,this.y,this.w,this.h]);
        this.anchorPoint.set(0,0);
        //this.alwaysUpdate = true;
        this.selected=false;
    },
    // update:function(dt){
    //     this._super(me.Renderable,"update",[dt]);
    //     return true;
    // },
    draw:function(renderer){
        
        renderer.setColor(this.color);
        renderer.fillRect(this.x,this.y,32,32);
        if (this.selected)
        {
            var color = new me.Color(255,0,0,0.5);
            renderer.setColor(color);
            renderer.fillRect(this.x,this.y,32,32);            
        }
        //renderer.setColor('#312618');
        //renderer.strokeRect(this.x,this.y,32,32);        
    }
});