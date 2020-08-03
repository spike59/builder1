game.controller = game.controller||{};
game.controller.MenuButton = me.GUI_Object.extend({

    /**
     * constructor
     */
    init: function (x,y,name,parent) {
            this.name = name;
            this.parent= parent;
            var texture = game.textures.texture_ui01;
            var bt={};
            
            this.region = "icon_" + name;
            this._super(me.GUI_Object, "init", [x, y, {
                image: texture,
                region: this.region,
                name:this.name
            }]);
            //set floating to false
            this.floating = false;
            this.region = texture.getRegion(this.region);
            if (bt.label) {
                //on verra aprés pour la police
            }
            if (bt.over) {
                this.over = texture.getRegion(bt.over);
            }
            if (bt.click) {
                this.click = texture.getRegion(bt.click);
            }

    },
    /**
    * function called when the pointer is over the object
    */
    onOver: function (/* event */) {
        this.setOpacity(1.0);
        //this.setRegion(this.over);
    },

    /**
     * function called when the pointer is leaving the object area
     */
    onOut: function (/* event */) {
        this.setOpacity(0.9);
        this.setRegion(this.region);
    },
    onClick: function () {
        console.log("clic",this.name,this);
        this.parent.showPanel(this.name);
        return false;
    },
    onRelease: function () {
        this.setRegion(this.region);
        return false;
    },
    draw: function(renderer) {
        this._super(me.GUI_Object, "draw", [ renderer ]);
        
    }
});