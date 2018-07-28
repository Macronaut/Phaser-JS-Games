var Play = {

    preload:function(){

    },

    create : function(){        
        oGroups = { gPlayer: null };

        Object.keys(oGroups).forEach( function(element, index) { oGroups[element] = game.add.group(); } )

        game.stage.backgroundColor = "#ffe4c2";

        map = game.add.tilemap('levelJSON');     
        map.addTilesetImage('sTileset', 'sTileset');
        
        wallLayer = map.createLayer('Walls');
        wallLayer.resizeWorld();
        
        map.setCollisionBetween(0, 10000, true, wallLayer);

        var objLayer = game.cache.getJSON("objectJSON").layers[1].objects;

        objLayer.forEach(function(element){
          switch(element.type) {
            case "Player":
              oPlayer = new Player( element.x, element.y );
            break;
          }
        })

        if(oPlayer) game.camera.follow(oPlayer);
    },

    update : function() {
      game.physics.arcade.collide(oPlayer, wallLayer);
    }
};
