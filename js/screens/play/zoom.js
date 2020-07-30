game.actions = {};
game.actions.zoomAction = function(f){
    console.log("zoom ",f);
    game.currentScreen.level.scale(f);
};
game.actions.moveAction = function(vx,vy){
    //console.log("move ",vx,vy,this);
    var v = new me.Vector2d(vx,vy);
    //console.log("game currentScreen level",game.currentScreen.level);
    game.currentScreen.level.translateV(v);
    //console.log("game.viewport",me.game.viewport);
};
