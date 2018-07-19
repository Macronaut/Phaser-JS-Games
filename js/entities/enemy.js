var EnemyClass = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, "sEnemy");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.velocity.x = game.math.random() > .5 ? 50 : -50;    
    this.body.velocity.y = 50;    
    this.anchor.setTo(.5);    
    this.numTimer = 30;
    this.numReset = 0;    
    this.numHP = 3;

    this.events.onOutOfBounds.add( function(){ this.destroy(); }, this );

    game.add.existing(this);

    new EffectClass(game, this.x, this.y, 'sSpawn');
};

EnemyClass.prototype = Object.create(Phaser.Sprite.prototype);
EnemyClass.prototype.constructor = EnemyClass;

EnemyClass.prototype.update = function () {

    if(this.x < this.width/2) {
        this.x = this.width/2;
        this.body.velocity.x = 50;
    }
    
    if(this.x > game.world.width - this.width/2) {
        this.x = game.world.width - this.width/2;
        this.body.velocity.x = -50;
    }

    if(this.y > game.world.height){ this.destroy(); }

    if(this.numTimer > 0) {
        this.numTimer++;
    } else {        
        this.body.velocity.x = game.math.random() > .5 ? 50 : -50;
        this.numTimer = 30;
    }

    if(this.numReset > 0){ this.numReset--; }
    else { this.tint = 0xFFFFFF; }
    
    game.physics.arcade.overlap(this, game.oGroups.gBullets, function(p_Enemy, p_Bullet){        
        new EffectClass(game, p_Bullet.x, p_Bullet.y, 'sHit');
        p_Enemy.tint = 0xFF0000;
        p_Enemy.numReset = 10;
        p_Enemy.numHP--;
        p_Bullet.destroy();
     });

    game.physics.arcade.overlap(this, game.oGroups.gPlayer, function(p_Enemy, p_Player){
        new EffectClass(game, p_Enemy.x, p_Enemy.y, 'sExplosion', true);        
        p_Player.tint = 0xFF0000;
        p_Player.numReset = 10;
        p_Player.numHP--;
        p_Enemy.destroy();
     })

    if(this.numHP <= 0){        
        new EffectClass(game, this.x, this.y, 'sExplosion', true);
        console.log("length :: " + game.oGroups.gEnemies.children.length);
        console.log("oSpawner :: " + game.oSpawner);
        this.destroy();        
        game.checkWave();        
    }

};
