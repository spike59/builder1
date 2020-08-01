
game.Cursor = me.Renderable.extend({
    init:function(x,y){
        console.log("add cursor");
        this.x = x;
        this.y = y;
        this._super(me.Renderable,"init",[this.x,this.x,30,30]);
        this.alwaysUpdate = true;
        this.anchorPoint.set(0, 0);        
    },
    update:function(dt){
        this._super(me.Renderable,"update",[dt]);
        return true;
    },
    draw:function(renderer){
        this._super(me.Renderable,"draw",[renderer]);
        renderer.setColor(new me.Color(120,110,150,1));
        renderer.fillRect(new me.Rect(this.x,this.x,30,30));
        
    }
});
game.LayerTest = me.Container.extend({
    "init":function(){
        this._super(me.Container, "init", [50, 50,200, 200]);
        // persistent across level change
        this.isPersistent = true;
        // use screen coordinates
        this.floating = true;
        this.anchorPoint.set(0, 0);
        this.cursor =this.addChild(new game.Cursor(30,30));
        this.text = this.addChild(new me.BitmapText(200, 200, {font:"wood_32x32", text:"layer_test"}));
    },
    update : function(dt) {
        this._super(me.Container, "update", [ dt ]);
        return true;
    },
    draw: function(renderer) {
        this._super(me.Container, "draw", [ renderer ]);
        // this.font.draw(
        //     renderer,
        //     this.label,
        //     this.width / 2,
        //     16, // panel border
        // );
    }
});