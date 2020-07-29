game.load_layout = function (layout) {
    
    var l = me.loader.getJSON(layout);
    var keys = {};
    for (var i = 0; i < l.keyboard.length; i++) {
        var a = l.keyboard[i];
        for (var j = 0; j < l.keyboard[i].keys.length; j++) {

            var k = a.keys[j];
            me.input.bindKey(me.input.KEY[k], a.action, a.lock || false);
        }
        keys[a.action]=a.keys[0];
    }
    for (var i=0; i< l.gamepad.length;i++){
        
        var a = l.gamepad[i];
        var s = {};
        s.type = a.type;
        var cut = a.code.split(".");
        s.code = me.input.GAMEPAD[a.type.toUpperCase()][cut[4]];
        if (a.threshold)
        {
            s.threshold = a.threshold;
        }
        me.input.bindGamepad(0, s, me.input.KEY[keys[a.action]]);

    }
    me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
        game.currentScreen.doAction(action, edge);
    });

    me.event.subscribe(me.event.KEYUP, function (action, keyCode /*, edge */) {
        game.currentScreen.stopAction(action);
    });


};