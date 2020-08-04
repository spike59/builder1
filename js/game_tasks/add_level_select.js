// game.tools = game.tools || {};
// game.tools.addLevelSelect = function(level){
//     //add selections events to the level
//     console.log("add selections events to the level");
    
//     level.onSelect = function(e){
//         console.log("select event");
//     };
//     level.onActivateEvent = function(){
//         console.log("level On activate");
//         me.input.registerPointerEvent("pointerdown", level, level.onSelect.bind(level));
//         level._super(me.Container, "onActivateEvent");
//     };
//     level.onDeactivateEvent = function(){
//         console.log("level On DEactivate");
//         me.input.releasePointerEvent("pointerdown", level);
//         level._super(me.Container, "onDeactivateEvent");
//     };
// }