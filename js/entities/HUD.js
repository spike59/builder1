/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};


game.HUD.Container = me.Container.extend({

    init: function() {
        console.log("add hud");
        // call the constructor
        this._super(me.Container, 'init');

        // persistent across level change
        this.isPersistent = true;

        // make sure we use screen coordinates
        this.floating = true;

        // give a name
        this.name = "HUD";

        this.addChild(new me.BitmapText(10, 100, {font:"wood_32x32", text:"HUD item"}));
    },
    update:function(dt){
        this._super(me.Container,"update",[dt]);
        //console.log("update hud and game mecanics");
        //TODO a placer dans le screenController
        //game.currentScreen.doActions();
    }
});


/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Container.extend({
    /**
     * constructor
     */
    init: function(x, y) {

        // call the parent constructor
        // (size does not matter here)
        this._super(me.Container, 'init');
        
        // local copy of the global score
        this.score = -1;
        this.txt = this.addChild(new me.BitmapText(10, 10, {font:"wood_32x32", text:"score " + this.score}));
        
    },

    /**
     * update function
     */
    update : function () {
        // we don't do anything fancy here, so just
        // return true if the score has been updated
        if (this.score !== game.data.score) {
            this.score = game.data.score;
            this.txt.setText("score" + this.score);
            return true;
        }
        return false;
    }


});
