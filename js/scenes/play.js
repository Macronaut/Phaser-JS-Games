var Play = {

    preload:function(){

    },

    create : function(){
        new BackgroundClass(game, 0, 0, game.world.width, game.world.height, 'sBackground');
        
        game.oGroups = { gEnemies: null, gPlayer: null, gBullets: null };

        for(i = 0; i < Object.keys(game.oGroups).length; i++){ game.oGroups[Object.keys(game.oGroups)[i]] = game.add.group(); }                

        game.oGroups.gPlayer.add(new PlayerClass(game, game.world.centerX, game.world.height - game.cache.getImage('sPlayer').height * 1.5));

        game.oSpawner = new SpawnerClass(game.world.centerX, game.world.centerY, oWaves[0]);
        
        /*game.time.events.loop(2000, function() {
            game.oGroups.gEnemies.add(new EnemyClass(game, game.math.between(game.cache.getImage('sEnemy').width/2, game.world.width - game.cache.getImage('sEnemy').width/2), game.cache.getImage('sEnemy').height/2));
        }, this);*/
    },

    update : function(){
    }
};
