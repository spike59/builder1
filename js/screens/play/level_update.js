
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
game.ScreenController = me.Container.extend({
    init: function (params) {
        console.log("init controller layer");
        this.name = "controller_container";
        this.w = me.video.renderer.getWidth();
        this.h = me.video.renderer.getHeight();
        this._super(me.Container, "init", [0, 0,this.w, this.h]);
        // persistent across level change
        this.isPersistent = true;
        // use screen coordinates
        this.floating = true;
        this.anchorPoint.set(0, 0);
        //this.cursor =this.addChild(new game.Cursor(30,30));
        //this.test = this.addChild(new game.Cursor(100,100));
        //this.test2 = this.addChild(new me.BitmapText(200, 200, {font:"wood_32x32", text:"score:"}),3);
        
        //add screen control events
        me.event.subscribe(me.event.POINTERMOVE, function(event) {
            var x = Math.round(event.gameScreenX);
            var y = Math.round(event.gameScreenY);
            var z = game.currentScreen.test2.pos.z;
            game.currentScreen.test2.pos.set(x, y , z);
            //console.log("update cursor pos",game.currentScreen.controller.cursor);
        });
     },
    // update: function (dt) {
    //     this._super(me.Container, "update",[dt]);
    //     var moving = false;
    //     var x =0,y=0;
    //     if (me.input.isKeyPressed('left')) {
    //         moving = true;
    //         x=-1;
    //     }
    //     else if (me.input.isKeyPressed('right')) {
    //         x=1;
    //     }
    //     if (me.input.isKeyPressed('up')) {
    //         moving = true;
    //         y=-1;           
    //     }
    //     else if (me.input.isKeyPressed('down')) {
    //         y=1;
    //     }
    //     game.currentScreen.currentLevel.translate(x,y);
        
    // },
    // draw:function(renderer){
    //     renderer.setColor(new me.Color(120,110,50,1));
    //     renderer.fillRect(new me.Rect(0,0,this.w,this.h));
    //     //this._super(me.Renderable,"draw",[renderer]);        
    // }
})