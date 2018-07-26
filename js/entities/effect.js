var Effect = function (x, y, sprite) {
    Phaser.Sprite.call(this, game, x, y, sprite);
    this.anchor.setTo(.5);

    this.animations.add("idle");
    this.animations.play("idle", 20, false, true);

    game.add.existing(this);
};

Effect.prototype = Object.create(Phaser.Sprite.prototype);
Effect.prototype.constructor = Effect;

Effect.prototype.update = function () { };
