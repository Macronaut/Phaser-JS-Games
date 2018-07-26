var BulletClass = function (x, y) {
  Phaser.Sprite.call(this, game, x, y, "sProjectile");
  game.physics.enable(this, Phaser.Physics.ARCADE);

  this.body.velocity.y = -350;
  this.anchor.setTo(.5);

  oGroups.gBullets.add(this);
};

BulletClass.prototype = Object.create(Phaser.Sprite.prototype);
BulletClass.prototype.constructor = BulletClass;

BulletClass.prototype.update = function () {
  if(this.y < 0) { this.destroy(); }
};
