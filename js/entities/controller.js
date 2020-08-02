game.ScreenController = me.Container.extend({
    init: function (params) {
        console.log("init controller layer");
        game.currentController = this;
        this.name = "controller_container";
        this.w = me.video.renderer.getWidth();
        this.h = me.video.renderer.getHeight();
        this._super(me.Container, "init", [0, 0, this.w, this.h]);
        // persistent across level change
        this.isPersistent = true;
        // use screen coordinates
        this.floating = true;
        this.anchorPoint.set(0, 0);
        this.alwaysUpdate = true;
        //this.cursor =this.addChild(new game.Cursor(30,30));
        //this.test = this.addChild(new game.Cursor(100,100));
        
        //cursor object init
        this.cursor = this.addChild(new me.BitmapText(200, 200, { font: "wood_32x32", text: "cursor" }), 3);
        
        //time loop init
        this.timeId=0;
        this.year = 0;
        this.day = 0;
        this.hour = 0;
        this.minut = 0;
        //clock on mid left to let debug panel visible
        var midY = this.h/2-64;//clock panel height =128 then -64
        this.clock = this.addChild(new game.ClockPanel(0,midY));
        //add screen control events
        me.event.subscribe(me.event.POINTERMOVE, function (event) {
            var x = Math.round(event.gameScreenX);
            var y = Math.round(event.gameScreenY);
            var z = game.currentController.cursor.pos.z;
            game.currentController.cursor.pos.set(x, y, z);
            //console.log("update cursor pos",game.currentScreen.controller.cursor);
        });

    },
    onActivateEvent: function () {
        console.log("starting game");
        this.startTime();
    },
    startTime:function(){
        this.minutTimeout = me.timer.setInterval(this.updateTime.bind(this),game.devData.baseSpeed * game.data.options.speed);

    },
    updateTime:function(){
        //TODO a deplacer dans le clock panel
        //console.log("update TIME");
        var newTime={};
        var t = game.data.time;
        newTime.timeId = t.timeId+1;
        if (t.minut >=60)
        {
            newTime.minut=0;
            newTime.hour = t.hour+1;
            if (newTime.hour>=24)
            {
                newTime.hour=0;
                newTime.day = t.day +1;
            }
            else
            {
                newTime.day = t.day;
            }
            //TODO add month and year management...
        }
        else
        {
            newTime.minut = t.minut+1;
            newTime.hour = t.hour;
            newTime.day = t.day;
            newTime.month = t.month;
            newTime.year = t.year;
        }
        game.data.time = newTime;
        console.log("NEW TIME",game.data.time);
    }
});