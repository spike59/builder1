game.actionsPacks = {};
game.actionsPacks.start = {
    "l2": function(){game.actions.zoomAction(0.5)},
    "r2": function(){game.actions.zoomAction(2)},
    "left": function(){game.actions.moveAction(-1,0)},
    "right": function(){game.actions.moveAction(1,0)},
    "up": function(){game.actions.moveAction(0,-1)},
    "down": function(){game.actions.moveAction(0,1)}
}