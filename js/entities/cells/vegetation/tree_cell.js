game.TreeCell = me.Sprite.extend({
    init:function(x,y,settings){
        console.log("init tree sprite");
        var settings = settings||{};
        settings.image = settings.image||game.textures.vegetation;
        this.age = settings.age;
        settings.region = 'tree_0' + settings.age;
        settings.label = settings.region;
        this._super(me.Sprite, "init", [ x, y, settings ]);
        this.anchorPoint.set(0,1);
        this.startTime=game.data.time.timeId;
        this.growTime=30;
    },
    update:function(dt){
        if (this.age <3){
            if (game.data.time.timeId > this.startTime + this.growTime){
                this.age++;
                this.setRegion(game.textures.vegetation.getRegion('tree_0' + this.age));
    
            }
        }

    }
});