var SpawnerClass = function (x, y, p_loop) {  
  this.arrLoop = p_loop;
  this.numCurrent = 0;
  
  this.numLoop = game.time.events.loop(Phaser.Timer.SECOND, function(){    
    var numLength = game.oSpawner.arrLoop.enemies.length,
    oEnemy = game.oSpawner.arrLoop.enemies[game.oSpawner.numCurrent];
    if(game.oSpawner.numCurrent < numLength) {
      new window[oEnemy.type](game, oEnemy.posX, 16);
      game.oSpawner.numCurrent++;
    } else {
      game.time.events.remove(game.oSpawner.numLoop);
      delete game.oSpawner;
    }
  });
};
