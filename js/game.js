
/* Game namespace */
var game = {

    // an object where to store game information
    data : {
        // score
        score : 0,
        time:{
            year:0,
            month:0,
            day:0,
            hour:0,
            minut:0
        },
        options:{
            speed:1
        }
    },
    devData:{
        uiUnit:32,
        baseSpeed:500
    },
    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init(960, 640, {wrapper : "screen", scale : "auto", scaleMethod : "fit"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    // Run on game resources loaded.
    "loaded" : function () {
        game.textures = {};

        game.utils.load_texture_level("texture_ui01");
        game.utils.load_texture_level("character_test");
        
        me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());
        me.state.BUILD =  me.state.USER + 1;
        me.state.set(me.state.BUILD, new game.BuildScreen());
        me.state.DEBUGHUD =  me.state.USER + 2;
        me.state.set(me.state.DEBUGHUD, new game.hudTestScreen());
        this.load_layout("base_layout");
        // add our player entity in the entity pool
        me.pool.register("mainPlayer", game.PlayerEntity);

        // Start the game.
        me.state.change(me.state.MENU);
    }
};
