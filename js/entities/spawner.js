var SpawnerClass = function (x, y, p_loop) {  
  this.arrLoop = p_loop;
  this.numCurrent = 0;
  
  this.numLoop = game.time.events.loop(Phaser.Timer.SECOND, function(){
    if(game.oSpawner.arrLoop){
      var numLength = game.oSpawner.arrLoop.length,
      oEnemy = game.oSpawner.arrLoop[game.oSpawner.numCurrent];
    }

    if(game.oSpawner.numCurrent < numLength) {
      game.oGroups.gEnemies.add(new window[oEnemy.type](game, oEnemy.posX, 16));
      game.oSpawner.numCurrent++;
    } else {
      game.time.events.remove(game.oSpawner.numLoop);
      delete game.oSpawner;
    }
  });
};
