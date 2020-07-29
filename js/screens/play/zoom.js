game.PlayScreen = game.PlayScreen||{};
game.PlayScreen.zoomAction = function(f){
    console.log("zoom ",f);
};
game.actions = {};
game.actions.moveAction = function(vx,vy){
    console.log("move ",vx,vy,this);
    this.level.translate(vx,vy);
};
