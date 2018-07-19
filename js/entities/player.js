var PlayerClass = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, "sPlayer");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.body.maxVelocity.x = 500;
    this.body.drag.x = 100;
    this.anchor.setTo(.5);
    this.numSpeed = 500;
    this.isDone = false;
    
    /*this.oWeapon = game.add.weapon(30, 'sProjectile');
    
    this.oWeapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;    
    this.oWeapon.trackSprite(this, 0, 0 - this.height, false);
    this.oWeapon.bulletAngleOffset = 90
    this.oWeapon.bulletSpeed = 300;
    this.oWeapon.fireRate = 150;*/

    this.numBullets = 10;
    this.numShoot = true;
    this.numReset = 0;
    this.numHP = 10;

    game.add.existing(this);
};

PlayerClass.prototype = Object.create(Phaser.Sprite.prototype);
PlayerClass.prototype.constructor = PlayerClass;

PlayerClass.prototype.update = function () {
  var oKeys = { kShoot : game.input.keyboard.isDown(Phaser.Keyboard.Z),
    kLeft : game.input.keyboard.isDown(Phaser.Keyboard.LEFT),
    kRight : game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) }

  if(!this.isDone){

    if(this.numShoot > 0) { this.numShoot -= .1; }

    if(this.numReset > 0) { this.numReset--; } 
    else { this.tint = 0xFFFFFF; }
    
    if (oKeys.kRight) this.body.acceleration.x = this.numSpeed;
    else if(oKeys.kLeft) this.body.acceleration.x = -this.numSpeed;    
    else this.body.acceleration.x = 0;
    
    if(oKeys.kShoot && this.numShoot <= 0 && game.oGroups.gBullets.children.length < this.numBullets) {
      game.oGroups.gBullets.add(new BulletClass(game, this.x, this.y - this.height));
      this.numShoot = .75;
    }

    if(this.numHP <= 0) {
      new ExplosionClass(game, this.x, this.y);
      game.camera.shake(0.01, 250);
      this.destroy();
    } 

  } else {
    this.body.velocity.y -= .5;
    this.body.velocity.x = 0;    
    this.body.collideWorldBounds = false;
    if(this.y < 0) this.destroy();    
  }
};
