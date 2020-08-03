game.actionsPacks = {};
game.actionsPacks.start = {
    "l2": function(){game.actions.zoomAction(0.9)},
    "r2": function(){game.actions.zoomAction(1.1)},
    "left": function(){game.actions.moveAction(-10,0)},
    "right": function(){game.actions.moveAction(10,0)},
    "up": function(){game.actions.moveAction(0,-10)},
    "down": function(){game.actions.moveAction(0,10)}
}