game.hudTestScreen = me.Stage.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        //adding bg
        this.bg_color = me.game.world.addChild(new me.ColorLayer("bg_color", new me.Color(90,90,90,1)), 0);
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);

    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.game.world.removeChild(this.HUD);
       me.game.world.removeChild(this.bg_color);
    }
});
