var EffectClass = function (game, x, y, strSprite, blnShake) {
  Phaser.Sprite.call(this, game, x, y, strSprite);

  if(blnShake) game.camera.shake(0.01, 100);
  
  this.anchor.setTo(.5);
  this.animations.add('idle');
  this.animations.play('idle', 30, false, true);

  game.add.existing(this);
};

EffectClass.prototype = Object.create(Phaser.Sprite.prototype);
EffectClass.prototype.constructor = EffectClass;

EffectClass.prototype.update = function () {

};
