//character entity next melon will remove entity class and only use renderable
game.CharacterEntity = me.Container.extend({
    init:function(cellX,cellY){
        this.data = {
            fieldOfView:5,
            speed:5,
            life:5,
            name:"bob",
            weight:50,
            height:1.80,
            age:32,
            sexe:"male",
            jobs:[
                "transporter",
                "cook",
                "builder",
                "hunter",
                "miner",
                "blacksmith",
                "artist",
                "herborist",
                "farmer",
                "enginner",
                "scientist",
                "architect",
                "history",
            ],
            jobsLevels:[
                1,1,1,1,1,1,1,1,1,1,1,1,1
            ],
            state:{
                happyness:50,
                food:100,
                water:100,
                sleep:100,
                oxygen:100,
                hot:0,
                fresh:0
            },
            deseases:{
                hungry:false,
                thirsty:false,
                sick:false,
                sad:false
            },
            health:{
                physic:[
                    "no_left_arm"
                ],
                mental:[
                    "pyroman"
                ]
            }
        };
        this.currentCell = {
            x:cellX,
            y:cellY
        };
        var x = cellX*32;
        var y = cellY*32+32;
        this._super(me.Container,"init",[x,y,32,32]);
        this.anchorPoint.set(0, 1);
        
        //this.renderable = this.addChild(new game.WaterCell(128,128));
        console.log("textures",game.textures);
        console.log("texture perso",game.textures.character_test);
        //this.renderable = this.addChild(new game.CharacterRenderable(128,128));
        this.renderableData = game.textures.character_test.createAnimationFromName(
            ["character_base_down_01","character_base_down_02","character_base_down_03","character_base_down_04"]
        );
        this.renderableData.anchorPoint.set (0,1);
        this.renderableData.addAnimation("walk",["character_base_down_01","character_base_down_02","character_base_down_03","character_base_down_04"],200);
        this.renderableData.setCurrentAnimation("walk");
        
        //this.renderableData.pos.x =128;
        //this.renderableData.pos.y =128;
        this.renderable2 = this.addChild(this.renderableData);
    },
    update:function(dt){
        this._super(me.Container,"update",[dt]);
        //this.pos.z = this.currentCell.y *100 +5;
    },
    draw:function(renderer){
        
        renderer.setColor('#312618');
        renderer.strokeRect(this.x,this.y,32,32);
        this._super(me.Container, "draw",[renderer]);   
    }
});
game.CharacterRenderable = me.Sprite.extend({

    /**
     * constructor
     */
    init: function(x, y, settings) {
        //console.log("x",x);
        //console.log("y",y);
        //console.log("settings",settings);
        var settings = settings||{};
        settings.image = settings.image||game.textures.character_test;
        settings.region = settings.region||'character_base_down_01';
        settings.label = settings.region;
        this._super(me.Sprite, "init", [ x, y, settings ]);
        
        this.name = 'button_test';
        this.region_name = settings.region;
        // offset of the two used images in the texture
        this.region = game.textures.character_test.getRegion("character_base_down_01");
        

        this.anchorPoint.set(0, 0);
        this.setOpacity(1);

        // this.font = new me.Font("kenpixel", 12, "black");
        // this.font.textAlign = "center";
        // this.font.textBaseline = "bottom";

        this.label = settings.label;


    },
    onClic:function(){
        //display character infos on the screen
    },
    change:function(new_region){
    console.log("change",new_region);
    this.region_name = new_region;
    this.setRegion(game.textures.UI_Testsuite.getRegion(new_region));
    },
    draw: function(renderer) {
        this._super(me.Sprite, "draw", [ renderer ]);
        // this.font.draw(renderer,
        //     this.label,
        //     this.pos.x + this.width / 2,
        //     this.pos.y + this.height / 2+32
        // );
    }
});  
/**
 * Player Entity
 */
game.PlayerEntity = me.Entity.extend({

    /**
     * constructor
     */
    init:function (x, y, settings) {
        // call the constructor
        this._super(me.Entity, 'init', [x, y , settings]);
    },

    /**
     * update the entity
     */
    update : function (dt) {

        // apply physics to the body (this moves the entity)
        this.body.update(dt);

        // handle collisions against other shapes
        me.collision.check(this);

        // return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
    },

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision : function (response, other) {
        // Make all other objects solid
        return true;
    }
});
