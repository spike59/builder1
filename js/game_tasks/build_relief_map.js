game.tools = game.tools || {};

game.tools.build_relief_map = me.Container.extend({
    init: function () {

        this._super(me.Container, "init", [0, 0, 1024, 1024]);
        var data = {};
        console.log("build new relief map", this);
        this.anchorPoint.set(0, 0);

        //test map pr dev 32*32 = 1024
        var map = {
            w: 32,
            h: 32
        }
        var default_tile = {
            "ground": {
                "type": "earth"
            },
            "layers": [
            ]
        };
        data.tiles = [];
        //add default ground to the map
        for (var i = 0; i < 32; i++) {
            //pour chaque ligne en partant du haut
            data.tiles[i] = [];
            for (var j = 0; j < 32; j++) {
                //pour chaque cell de la ligne
                data.tiles[i][j] = {
                    "ground": {
                        "type": "GroundCell"
                    },
                    "layers": [
                    ]
                };
                //this.addChild(new game.GroundCell(j*32,i*32),i)
            }
        }
        //TODO BUGGY stuff
        //TODO add river
        //add water spots
        var water_options = {
            "min_spots": 2,
            "max_spots": 5,
            "min_radius": 2,
            "max_radius": 5
        };
        var spots_count = water_options.min_spots + Math.floor(Math.random() * (water_options.max_spots - water_options.min_spots));
        var spots = [];
        for (var i = 0; i < spots_count; i++) {
            console.log("add water spot");
            var rx = Math.floor(Math.random() * map.w);
            var ry = Math.floor(Math.random() * map.h);
            console.log("x y", rx, ry);
            var radius = water_options.min_radius + Math.floor(Math.random() * (water_options.max_radius - water_options.min_radius));
            console.log("radius", radius);
            for (var y = ry - radius; y < ry + radius; y++) {

                for (var x = rx - radius; x < rx + radius; x++) {
                    if ((rx + x < map.w) && (ry + y < map.h)) {
                        data.tiles[ry + y][rx + x] = {
                            "ground": {
                                "type": "WaterCell"
                            },
                            "layers": [
                            ]
                        };
                    }
                }
            }

        }
        //add trees
        var trees_options = {
            max: 50,
            ages: 3
        };
        var grass_options ={
            max:50,
            models:2
        };
        //add the trees to the ground cells only
        for (var i = 0; i < 32; i++) {
            //pour chaque ligne en partant du haut

            for (var j = 0; j < 32; j++) {
                //pour chaque cell de la ligne
                
                var d = data.tiles[i][j];
                if (d.ground.type == "GroundCell") {
                    console.log("case ok add tree");
                    //si c est du sol on ajoute un layer d arbre en fonction du purcentage de remplissage
                    if (Math.random() * 100 < grass_options.max) {
                        var model = Math.floor(Math.random() * grass_options.models)+1;
                        var grass = {
                            type: "GrassCell",
                            settings: {
                                model: model
                            }
                        };
                        data.tiles[i][j].layers.push(grass);
                    }
                    if (Math.random() * 100 < trees_options.max) {
                        var age = Math.floor(Math.random() * trees_options.ages)+1;
                        var tree = {
                            type: "TreeCell",
                            settings: {
                                age: age
                            }
                        };
                        data.tiles[i][j].layers.push(tree);
                    }

                }
            }
        }

        //add the cells to the container
        for (var i = 0; i < 32; i++) {
            //pour chaque ligne en partant du haut

            for (var j = 0; j < 32; j++) {
                //pour chaque cell de la ligne
                var d = data.tiles[i][j]
                this.addChild(new game[d.ground.type](j * 32, i * 32), i*100);
                if (d.layers.length>0)
                {
                    for (var z =0 ;z<d.layers.length;z++)
                    {
                        
                        console.log("add tree",d.layers[z].type);
                        this.addChild(new game[d.layers[z].type](j * 32, i * 32,d.layers[z].settings),i*100+1+z);
                    }
                }
                //this.addChild(new game.GroundCell(j*32,i*32),i);
            }
        }
        var txt = new me.BitmapText(500, 500, { font: "wood_32x32", text: "map item0" });
        txt.anchorPoint.set(0, 0);
        this.text = this.addChild(txt);
        this.test = this.addChild(new game.testRenderable(100, 100));
    },
    update: function (dt) {
        this._super(me.Container, "update", [dt]);

    },
    draw: function (renderer) {
        this._super(me.Container, "draw", [renderer]);
    }

});
game.testRenderable = me.Renderable.extend({
    init: function (x, y) {
        console.log("init test renderable");
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        this._super(me.Renderable, "init", [this.x, this.y, this.w, this.h]);
        this.anchorPoint.set(0, 0);
        this.alwaysUpdate = true;
    },
    // update:function(dt){
    //     this._super(me.Renderable,"update",[dt]);
    //     return true;
    // },
    draw: function (renderer) {
        var color =
            renderer.setColor('#5EFF7E');
        renderer.fillRect(this.x, this.y, 30, 30);
    }
});