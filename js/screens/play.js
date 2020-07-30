game.PlayScreen = me.Stage.extend({

    onResetEvent: function() {
        //shortcut to acces current screen
        game.currentScreen  = this;
        //load game data
        game.data.score = 0;
        //add bg color while loading level
        this.bg_color = me.game.world.addChild(new me.ColorLayer("bg_color", new me.Color(60,90,90,1)));
        //load level
        this.level = new me.Container();
        this.level.name = "level";
        me.game.onLevelLoaded = this.onLevelLoaded.bind(this);
        me.levelDirector.loadLevel("default_map1", { container: this.level, setViewportBounds: true }); 
        //prepare actions object
        this.actions={};
        //load start actions
        this.actions = game.actionsPacks.start;
        this.currentActions=[];
    },
    onLevelLoaded: function () {
        //add the level to the world
        this.currentLevel = me.game.world.addChild(this.level, 1);
        //add the hud to the screen     
        this.HUD = me.game.world.addChild( new game.HUD.Container(),2);
    }, //fin onLevelLoaded
    addAction:function(a){
        if (this.currentActions.indexOf(a)== -1)
        {
            this.currentActions.push(a);
        }        
    },
    doActions:function(){
        for (var i=0;i<this.currentActions.length;i++)
        {
            var a = this.currentActions[i];
            this.actions[a]();
        }      
    },
    removeAction:function(a){
        var index= this.currentActions.indexOf(a);
        this.currentActions.splice(index,1);
    },
    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.game.world.removeChild(this.currentLevel);
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
        me.game.world.removeChild(this.bg_color);
    }
});
