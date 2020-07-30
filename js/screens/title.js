game.TitleScreen = me.Stage.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function () {
        //adding bg
        this.bg_color = me.game.world.addChild(new me.ColorLayer("bg_color", new me.Color(60, 90, 90, 1)), 0);
        var midX = me.video.renderer.getWidth() / 2;
        var midY = me.video.renderer.getHeight() / 2;
        this.startButton = me.game.world.addChild(new game.StartButton(midX, midY,
            {
                font: "wood_32x32",
                font_size: 32,
                text: "start",
                value: "START"
            }));
        this.hudButton = me.game.world.addChild(new game.HudButton(midX, midY+32,
            {
                font: "wood_32x32",
                font_size: 32,
                text: "hud debug",
                value: "START"
            }));
        //debug button

    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function () {
        me.game.world.removeChild(this.startButton);
        me.game.world.removeChild(this.bg_color);
    }
});
