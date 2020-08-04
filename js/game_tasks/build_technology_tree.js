game.tools = game.tools||{};
game.tools.buildTechnologyTree = function(){
    var techs = {
        "builds":[
            {
                "name":"firewood",
                "icon":"firewood",
                "type":"ephemere",
                "resources":[
                    {
                        "name":"wood",
                        "quantity":3
                    }
                ],
                "production":{
                    "heat":20
                }
            },
            {
                "name":"firecamp",
                "icon":"firecamp",
                "resources":[
                    {
                        "name":"stone",
                        "quantity":5
                    }
                ]
            }
        ],
        "population":[],
        "stats":[],
        "harvest":[],
        "seeds":[],
        "danger":[],
        "map":[],
        "meteo":[]

    };

    return techs;
};