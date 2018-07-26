var Player = function (x, y) {
    Phaser.Sprite.call(this, game, x, y, "sPlayer");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.body.maxVelocity.x = 500;
    this.body.drag.x = 100;
    this.anchor.setTo(.5);
    this.isDone = false;
    this.speed = 500;

    this.bullets = 10;
    this.shoot = true;
    this.reset = 0;
    this.hp = 10;

    oGroups.gPlayer.add(this);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function () {

  if( !this.isDone ) { this.move(); }
  else {
    this.body.collideWorldBounds = false;
    if(this.y < 0) this.kill();
    this.body.velocity.y -= .5;
    this.body.velocity.x = 0;
  }

}

Player.prototype.checkShoot = function(keys) {
  if(this.shoot > 0) { this.shoot -= .1; }

  if(keys.kShoot && this.shoot <= 0 && oGroups.gBullets.children.length < this.bullets) {
    oGroups.gBullets.add( new BulletClass(this.x, this.y - this.height) );
    this.shoot = .75;
  }
}

Player.prototype.receiveDamage = function(damage) {
  this.hp = Math.max(0, ( this.hp - damage ) );
  this.tint = 0xff0000;
  this.reset = 5;
}

Player.prototype.kill = function(shake){
  if(shake) {
    new Effect ( this.x, this.y, "sExplosion");
    game.camera.shake(0.01, 250);
  }
  this.destroy();
}

Player.prototype.resetTint = function() {
  if(this.reset > 0) { this.reset--; }
  else { this.tint = 0xFFFFFF; }
}


Player.prototype.move = function() {
  var oKeys = { kShoot : game.input.keyboard.isDown(Phaser.Keyboard.Z),
  kLeft : game.input.keyboard.isDown(Phaser.Keyboard.LEFT),
  kRight : game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) }

  if (oKeys.kRight) this.body.acceleration.x = this.speed;
  else if(oKeys.kLeft) this.body.acceleration.x = -this.speed;
  else this.body.acceleration.x = 0;

  if(this.hp <= 0) { this.kill(shake = true); }

  this.checkShoot(oKeys);
  this.resetTint();
}
