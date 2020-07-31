game.tools = game.tools||{};

game.tools.build_relief_map = me.Container.extend({
    init:function(){
        
        this._super(me.Container,"init",[0,0,1024,1024]);
        var data  = {};
        console.log("build new relief map",this);
        this.anchorPoint.set(0,0);
        var txt = new me.BitmapText(500, 500, {font:"wood_32x32", text:"map item0"});
        txt.anchorPoint.set(0,0);
        this.text = this.addChild(txt);
        this.test = this.addChild(new game.testRenderable(100,100));
    },
    update:function(dt){
        this._super(me.Container,"update",[dt]);

    },
    draw:function(renderer){
        this._super(me.Container,"draw",[renderer]);
    }

});
game.testRenderable = me.Renderable.extend({
    init:function(x,y){
        console.log("init test renderable");
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        this._super(me.Renderable,"init",[this.x,this.y,this.w,this.h]);
        this.anchorPoint.set(0,0);
        this.alwaysUpdate = true;
    },
    // update:function(dt){
    //     this._super(me.Renderable,"update",[dt]);
    //     return true;
    // },
    draw:function(renderer){
        var color = 
        renderer.setColor('#5EFF7E');
        renderer.fillRect(this.x,this.y,30,30);
    }
});