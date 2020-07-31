game.TextButton = me.Entity.extend({

    /**
     * constructor
     */
    init: function (x,y,settings) {
        
        //TODO set dynamic width
        var w = 32;
        var h = settings.font_size;
        this._super(me.Entity, "init", [x, y, {width:w,height:h}]);
        this.anchorPoint.set(0,0);
        this.text = settings.text;
        var txt = new me.BitmapText(0, 0, {font:settings.font, text:settings.text});
        txt.anchorPoint.set(0,0);
        this.renderable = txt;
        //this.addChild(txt);
        this.selected =settings.selected||false;
        this.hover =false;
        this.value = settings.value;
        this.collision_type = "NO_OBJECT";
        this.body.collisionType = me.collision.types[this.collision_type];
    },
    onActivateEvent: function () {
        //register on mouse/touch event
        me.input.registerPointerEvent("pointerdown", this, this.onSelect.bind(this));
    },    

    onDeactivateEvent: function () {
        //register on mouse/touch event
        me.input.releasePointerEvent("pointerdown", this);
    },         
});

game.StartButton = game.TextButton.extend({

    onSelect:function(){
        if (!this.selected)
        {
        this.selected = true;
        }
        else
        {
            me.state.change(me.state.PLAY);
        }
    },

});
game.StartButton2 = game.TextButton.extend({

    onSelect:function(){
        if (!this.selected)
        {
        this.selected = true;
        }
        else
        {
            console.log("got to play 2");
            me.state.change(me.state.BUILD);
        }
    },

});
game.HudButton = game.TextButton.extend({

    onSelect:function(){
        if (!this.selected)
        {
        this.selected = true;
        }
        else
        {
            me.state.change(me.state.DEBUGHUD);
        }
    },

});