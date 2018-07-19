var Play = {

    preload:function(){

    },

    create : function(){
        new BackgroundClass(game, 0, 0, game.world.width, game.world.height, 'sBackground');
        
        game.oGroups = { gEnemies: null, gPlayer: null, gBullets: null };

        for(i = 0; i < Object.keys(game.oGroups).length; i++){ game.oGroups[Object.keys(game.oGroups)[i]] = game.add.group(); }                

        game.oGroups.gPlayer.add(new PlayerClass(game, game.world.centerX, game.world.height - game.cache.getImage('sPlayer').height * 1.5));        

        game.currentWave = 0;
                
        game.oWave = game.add.bitmapText(game.world.centerX, game.world.centerY, 'space','Get Ready', 20);
        game.oWave.anchor.setTo(.5);

        game.nextWave = function(){
            game.oSpawner = new SpawnerClass(game.world.centerX, game.world.centerY, arrWaves[game.currentWave]);
            if(game.oWave) game.oWave.destroy();
            game.currentWave++;
        }

        game.checkWave = function(){
            if(game.oGroups.gEnemies.children.length <= 0 && !game.oSpawner) {
                if(game.currentWave >= arrWaves.length) {
                    game.currentWave = 0;
                    game.oWave = game.add.bitmapText(game.world.centerX, game.world.centerY, 'space','Well done, you won!', 20);
                    game.oWave.alpha = 0;
                    game.add.tween(game.oWave).to( { alpha: 1 }, 2000, "Linear", true);
                    game.oGroups.gPlayer.getFirst().isDone = true;
                    game.oWave.anchor.setTo(.5);
                } else {                    
                    game.oWave = game.add.bitmapText(game.world.centerX, game.world.centerY, 'space','Next Wave', 20);
                    game.oWave.alpha = 0;
                    game.oWave.anchor.setTo(.5);
                    game.add.tween(game.oWave).to( { alpha: 1 }, 2000, "Linear", true);
                    game.time.events.add(Phaser.Timer.SECOND * 5, game.nextWave, game);
                }
            }
        }

        game.time.events.add(Phaser.Timer.SECOND * 5, game.nextWave, game);
    },

    update : function(){        
    }
};
