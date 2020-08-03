game.actions = {};

game.actions.zoomAction = function(f){
    game.currentScreen.currentLevel.zoom = game.currentScreen.currentLevel.zoom||1;
    var w = me.game.viewport.getWidth();
    var h = me.game.viewport.getHeight();
    if (game.currentScreen.currentLevel.zoom*f>1 && game.currentScreen.currentLevel.zoom*f <5)
    {
        console.log("current zoom",game.currentScreen.currentLevel.zoom);
        console.log("zoom ",f);
        game.currentScreen.currentLevel.zoom = game.currentScreen.currentLevel.zoom *f;
        console.log("nvo zoom",game.currentScreen.currentLevel.zoom);
        me.game.viewport.currentTransform=new me.Matrix2d();
        me.game.viewport.scale(game.currentScreen.currentLevel.zoom);
        console.log("game.viewport pos" ,me.game.viewport.width);
        console.log("game.viewport",me.game.viewport);
        console.log("game level",game.currentScreen.currentLevel);
    }  
    game.actions.moveAction(0,0);
};
game.actions.moveAction = function(vx,vy){
    game.currentScreen.currentLevel.zoom = game.currentScreen.currentLevel.zoom||1;
    //console.log("move ",vx,vy,this);
    var v = new me.Vector2d(vx,vy);
    //console.log("game currentScreen level",game.currentScreen.level);
    //game.currentScreen.level.translateV(v);
    me.game.viewport.translateV(v);
    //constrain viewport to level bounds
    if (me.game.viewport.pos.x <0)
    {
       me.game.viewport.pos.x =0;
    }
    if (me.game.viewport.pos.y <0)
    {
        me.game.viewport.pos.y =0;
    }
    var maxX = game.currentScreen.currentLevel.width - me.game.viewport.width/game.currentScreen.currentLevel.zoom;
    if (me.game.viewport.pos.x > maxX)
    {
        me.game.viewport.pos.x =maxX;
    }
    var maxY = game.currentScreen.currentLevel.height - me.game.viewport.height/game.currentScreen.currentLevel.zoom;
    if (me.game.viewport.pos.y >maxY)
    {
        me.game.viewport.pos.y =maxY;
    }    
    // console.log("game.viewport pos" ,me.game.viewport.width);
    // console.log("game.viewport",me.game.viewport);
    // console.log("game level",game.currentScreen.currentLevel);
};
