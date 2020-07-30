game.utils = game.utils || {};

game.utils.load_texture_level = function (texture_name, pivot) {
    //build tool
    var data = {
        frames: []
    };
    var texture_pivot = pivot || { "x": 0.5, "y": 0.5 };

    console.log("loading texture " + texture_name);

    var texture_data = me.loader.getJSON("lvl_" + texture_name);


    console.log("texture_data", texture_data);

    for (i = 0; i < texture_data.layers.length; i++) {

        if (texture_data.layers[i].name === "frames") {
            var layer = texture_data.layers[i];
            layer.objects.forEach(function (frame) {
                var fram = {};
                fram.filename = frame.name;
                fram.frame = { "x": frame.x, "y": frame.y, "w": frame.width, "h": frame.height };
                fram.rotated = false;
                fram.trimmed = false;
                fram.spriteSourceSize = { "x": 0, "y": 0, "w": frame.width, "h": frame.height };
                fram.sourceSize = { "w": frame.width, "h": frame.height };
                fram.pivot = texture_pivot;

                data.frames.push(fram);

            });
        }



        //var image = {};
        //console.log("nouvelle image");



    }//fin for layers
    console.log("DATA", data);
    game.textures[texture_name] = new me.video.renderer.Texture(
        data,
        me.loader.getImage(texture_name)
    );
};
