game.PlayScreen = me.Stage.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        game.currentScreen  = this;
        // reset the score
        game.data.score = 0;
        //add a temporary bg color
        this.bg_color = me.game.world.addChild(new me.ColorLayer("bg_color", new me.Color(60,90,90,1)), 0);
        
        // Add our HUD to the game world, add it last so that this is on top of the rest.
        // Can also be forced by specifying a "Infinity" z value to the addChild function.
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
        //start the level loading
        this.level = new me.Container();
        this.level.name = "level";
        me.game.onLevelLoaded = this.onLevelLoaded.bind(this);
        me.levelDirector.loadLevel("default_map1", { container: this.level, setViewportBounds: true }); 
    },
    onLevelLoaded: function () {
        console.log("level loaded", this.level);
        
        game.currentLevel = me.game.world.addChild(this.level, 1);
    }, //fin onLevelLoaded
    doAction:function(a){
        console.log("doing action",a);
        switch (a){
            case "l2":
                this.zoomAction(0.5);
            break;
            case "r2":
                this.zoomAction(2);
            break;
            case "left":
                console.log("this",this);
                this.moveAction(-1,0);
            break;
            default:
                break;
        }
    },
    moveAction:game.actions.moveAction,
    zoomAction : function(f){
        console.log("zoom ",f);
        game.currentLevel.scale(f);
    },
    stopAction:function(a){
        console.log("stopping action",a);
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
