game.actionsPacks = {};
game.actionsPacks.start = {
    "l2": function(){game.actions.zoomAction(0.9)},
    "r2": function(){game.actions.zoomAction(1.1)},
    "left": function(){game.actions.moveAction(-10,0)},
    "right": function(){game.actions.moveAction(10,0)},
    "up": function(){game.actions.moveAction(0,-10)},
    "down": function(){game.actions.moveAction(0,10)},
    "left2": function(){game.actions.moveAction(-10,0)},
    "right2": function(){game.actions.moveAction(10,0)},
    "up2": function(){game.actions.moveAction(0,-10)},
    "down2": function(){game.actions.moveAction(0,10)},
    "left0": function(){game.actions.moveAction(-10,0)},
    "right0": function(){game.actions.moveAction(10,0)},
    "up0": function(){game.actions.moveAction(0,-10)},
    "down0": function(){game.actions.moveAction(0,10)},        
    "valid": function(){game.actions.testAction()},
    "updateViewport":function(){game.actions.updateViewport()}
}