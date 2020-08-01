/**
 * a basic HUD item to display score
 */
game.ClockPanel = me.Container.extend({
    /**
     * constructor
     */
    init: function(x, y) {

        // call the parent constructor
        // (size does not matter here)
        this._super(me.Container, 'init',[x,y,128,128]);
        this.anchorPoint.set(0, 0);
        // local copy of the global score
        this.time = {
            minut:0,
            hour:0,
            day:0,
            month:0,
            year:0
        };
        //this.test = this.addChild(new me.BitmapText(10, 0, {font:"wood_32x32", text:"clock test"}));
        this.timeDisplay = this.addChild(new me.BitmapText(10, 0, {font:"wood_32x32", text:"day" + this.time.day + "\n\n" + this.time.hour + ":"+ this.time.minut}));
        
    },

    /**
     * update function
     */
    update : function (dt) {
        this._super(me.Container,"update",[dt]);
        // we don't do anything fancy here, so just
        // return true if the score has been updated
        if (this.time.minut !== game.data.time.minut) {
            this.time = game.data.time;
            this.timeDisplay.setText("day" + this.time.day + "\n\n" + this.time.hour + ":"+ this.time.minut);
            return true;
        }
        return false;
    }


});