game.tools = game.tools||{};

game.tools.add_characters = function(level){
    console.log("add characters to the level");
    //get the spawn area
    var spawnData = game.currentScreen.mapData.spawnData;
    console.log("spawn data",spawnData);
    var characters_count = 3;
    var characters_spawns =[];
    for (var n=0;n<characters_count;n++){
        var ok=false;
        while(!ok)
        {
            console.log("search valid spawn");
            var x = Math.floor(Math.random()*spawnData.w)+ spawnData.x;
            var y = Math.floor(Math.random()*spawnData.h)+ spawnData.y;
            console.log("try spawn",x,y);
            //check if it was used
            var test = true;
            for(var t=0;t<characters_spawns.length;t++){
                if (x == t.x && y == t.y)
                {
                    console.log("used spawn");
                   test=false;
                }
            };
            if (test){
                characters_spawns.push({x:x,y:y});
            };
            ok = test;
        }
    };
    console.log("final characters spawns",characters_spawns);
    for (var c=0;c<characters_spawns.length;c++){
        var char = characters_spawns[c];
        console.log("add character",char.x,char.y);
        level.addChild(new game.CharacterEntity(char.x,char.y),char.y*100+2);
    };
    level.addChild(new game.CharacterEntity(0,0),0+1);
    level.addChild(new game.CharacterEntity(5,5),5*100+1);
    level.addChild(new game.CharacterEntity(10,10),10*100+1);
    level.addChild(new game.CharacterEntity(15,15),15*100+1);
    level.addChild(new game.CharacterEntity(20,20),20*100+1);
    level.addChild(new game.CharacterEntity(25,25),25*100+1);
    level.addChild(new game.CharacterEntity(28,28),28*100+1);
    level.addChild(new game.CharacterEntity(30,30),30*100+1);
    level.addChild(new game.CharacterEntity(31,31),31*100+1);
};