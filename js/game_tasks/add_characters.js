game.tools = game.tools||{};

game.tools.add_characters = function(level){
    console.log("add characters to the level");
    level.addChild(new game.CharacterEntity());
};