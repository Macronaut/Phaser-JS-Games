var Play = {

    preload:function(){

    },

    create : function(){
        oBackground = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'sBackground');
        oGroups = { gEnemies: null, gPlayer: null, gBullets: null };

        Object.keys(oGroups).forEach( function(element, index) { oGroups[element] = game.add.group(); } )

        oPlayer = new Player( game.world.centerX, game.world.height - game.cache.getImage("sPlayer").height );
        new Octopus( game.world.centerX, game.cache.getImage("sOctopus").height/2 );
    },

    update : function() {
      oBackground.tilePosition.y += 1;

      game.physics.arcade.overlap(oGroups.gEnemies, oGroups.gBullets, function(enemy, bullet) {
        enemy.receiveDamage(1);
        bullet.destroy();
      });

      game.physics.arcade.overlap(oGroups.gEnemies, oGroups.gPlayer, function(enemy, player) {
        player.receiveDamage(5);
        enemy.destroy();
      });
      
    }
};
