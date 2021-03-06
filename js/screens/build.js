game.BuildScreen = me.Stage.extend({

    onResetEvent: function() {
        console.log("build screen");
        //shortcut to acces current screen
        game.currentScreen  = this;
        //load game data
        game.data.score = 0;
        game.data.technology = game.tools.buildTechnologyTree();
        //add bg color while loading level
        //this.bg_color = me.game.world.addChild(new me.ColorLayer("bg_color", new me.Color(60,90,90,1)),0);
        //prepare actions object
        this.actions={};
        //load start actions
        this.actions = game.actionsPacks.start;
        this.currentActions=[];
        
        //add the base level to the screen relief data
        this.level = new game.tools.build_relief_map();
        this.level.zoom =1;
        //game.tools.addLevelSelect(this.level);
        console.log("UPDATED LEVEL",this.level);
        this.currentLevel = me.game.world.addChild(this.level,1);
        

        //load the game data

        //add the game data to the screen
        
        //add characters to the screen
        game.tools.add_characters(this.currentLevel);


        //tests stuff
        //this.text = me.game.world.addChild(new me.BitmapText(200, 200, {font:"wood_32x32", text:"screen text"}),2);
        //this.test = me.game.world.addChild(new game.testRenderable(50,50),3);
        //add the hud to the screen   controller is the hud so no need for HUD object  
        //this.HUD = me.game.world.addChild( new game.HUD.Container(),4);
        
        //add th controller layer to the screen -> move zoom the level and add ui /start time
        this.controller = me.game.world.addChild(new game.ScreenController());
        //me.game.viewport.follow(this.controller.cursor, me.game.viewport.AXIS.BOTH,0.1);
        me.game.viewport.anchorPoint.set(0,0);
        me.game.viewport.pos.x=0;
        me.game.viewport.pos.y=0;
        me.game.viewport.setBounds(0,0,1024,1024);

        //add select event to the level
        
        //folow the cursor
        //controller manage the cursor
        //start the game cycles
        //controller manage time events
        console.log("screen",this);
        console.log("controller",this.controller);
    }, //fin onLevelLoaded
    addAction:function(a){
        //console.log("add action",a);
        if (this.currentActions.indexOf(a)== -1)
        {
            this.currentActions.push(a);
        }        
    },
    doActions:function(){
        //console.log("do actions",this.currentActions);
        for (var i=0;i<this.currentActions.length;i++)
        {
            var a = this.currentActions[i];
            if (this.actions[a]!=undefined)
            {
            this.actions[a]();
            }
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
