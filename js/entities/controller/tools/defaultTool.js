game.controller = game.controller||{};
game.controller.tools = game.controller.tools||{};
game.controller.tools.defaultTool = me.Object.extend({
    "init":function(){
        console.log("init default tool");
    },
    onSelect:function(x,y){
        console.log("default tool select cell",x,y);
        //add cell infos tu the screen
        if (!game.currentScreen.currentLevel.cells[y][x].ground.selected)
        {
            game.currentScreen.currentLevel.cells[y][x].ground.selected = true;
        }
        else
        {
            game.currentScreen.currentLevel.cells[y][x].ground.selected = false;
        }
        
    }
});