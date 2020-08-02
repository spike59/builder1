game.GrassCell = me.Sprite.extend({
    init:function(x,y,settings){
        console.log("init tree sprite",settings);
        var settings = settings||{};
        settings.image = settings.image||game.textures.vegetation;
        this.model = settings.model;
        settings.region = 'grass_0' + this.model;
        settings.label = settings.region;
        this._super(me.Sprite, "init", [ x, y, settings ]);
        this.anchorPoint.set(0,1);
        this.startTime=game.data.time.timeId;
        this.growTime=30;
    }
});