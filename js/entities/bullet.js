var BulletClass = function (game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "sProjectile");
  game.physics.enable(this, Phaser.Physics.ARCADE);

  this.anchor.setTo(.5);
  this.body.velocity.y = -350;

  game.oGroups.gBullets.add(this);

  game.add.existing(this);
};

BulletClass.prototype = Object.create(Phaser.Sprite.prototype);
BulletClass.prototype.constructor = BulletClass;

BulletClass.prototype.update = function () {
  if(this.y < 0) { this.destroy(); }
};
