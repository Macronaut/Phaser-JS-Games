var Enemy = function (x, y, sprite) {
    Phaser.Sprite.call(this, game, x, y, sprite);

    game.physics.enable(this, Phaser.Physics.ARCADE);
    oGroups.gEnemies.add(this);
    this.anchor.setTo(.5);
    this.reset = 0;
};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function () {
  this.updateObject();

  if(this.hp <= 0) this.kill(shake = true);

  if(this.reset > 0) { this.reset -= .1; }
  else { this.tint = 0xffffff; }
};

Enemy.prototype.receiveDamage = function(damage) {
  this.hp = Math.max(0, ( this.hp - damage ) );
  this.tint = 0xff0000;
  this.reset = .5;
}

Enemy.prototype.kill = function(shake) {
  if(shake) game.camera.shake(0.01, 250);
  this.destroy();
}
