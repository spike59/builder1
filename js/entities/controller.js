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
        
        //time loop init
        this.timeId=0;
        this.year = 0;
        this.day = 0;
        this.hour = 0;
        this.minut = 0;
        //clock on mid left to let debug panel visible
        var midY = this.h/2-64;//clock panel height =128 then -64 
        this.clock = this.addChild(new game.ClockPanel(0,midY));
        
        this.menu = this.addChild(new game.MenuPanel());
        this.panel

        //cursor object init
        this.cursor = this.addChild(new me.BitmapText(200, 200, { font: "wood_32x32", text: "cursor" }), 3);       
        //update screen cursor
        me.event.subscribe(me.event.POINTERMOVE, function (event) {
            var x = Math.round(event.gameScreenX);
            var y = Math.round(event.gameScreenY);
            var z = game.currentController.cursor.pos.z;
            game.currentController.cursor.pos.set(x, y, z);
            //console.log("update cursor pos",game.currentScreen.controller.cursor);
        });
        this.panels=[
            "build"
        ]
        this.activePanel=-1;
    },
    showPanel:function(name){
        var panelY = me.video.renderer.getHeight()-96;
        console.log("display panel",name);
        var index = this.panels.indexOf(name);
        if (this.activePanel !=-1)
        {
            var openedPanel = this.panels.indexOf(this.activePanel);
            this.removeChild(this[openedPanel + "Panel"]);
        }
        this[name + "Panel"] = this.addChild(new game[name + "Panel"](0,panelY));
    },    
    update:function(dt){
        this._super(me.Container,"update",[dt]);
        game.currentScreen.doActions();
    },
    draw:function(renderer){
        this._super(me.Container,"draw",[renderer]);
        
    },    
    onActivateEvent: function () {
        console.log("starting game");
        this.startTime();
        // register on the global pointermove event
        // this.handler = me.event.subscribe(me.event.POINTERMOVE, this.pointerMove.bind(this));
        // //register on mouse/touch event
        // me.input.registerPointerEvent("pointerdown", this, this.onSelect.bind(this));
        // me.input.registerPointerEvent("pointerup", this, this.onRelease.bind(this));
        // me.input.registerPointerEvent("pointercancel", this, this.onRelease.bind(this));

        // call the parent function
        this._super(me.Container, "onActivateEvent");
    },

    onDeactivateEvent: function () {
        // unregister on the global pointermove event
        // me.event.unsubscribe(this.handler);
        // // release pointer events
        // me.input.releasePointerEvent("pointerdown", this);
        // me.input.releasePointerEvent("pointerup", this);
        // me.input.releasePointerEvent("pointercancel", this);

        // call the parent function
        this._super(me.Container, "onDeactivateEvent");
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
        //console.log("NEW TIME",game.data.time);
    }
});