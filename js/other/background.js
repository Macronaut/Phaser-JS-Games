var BackgroundClass = function (game, x, y, width, height, strSprite) {
  Phaser.TileSprite.call(this, game, x, y, width, height, strSprite);  
  game.add.existing(this);
};

BackgroundClass.prototype = Object.create(Phaser.TileSprite.prototype);
BackgroundClass.prototype.constructor = BackgroundClass;

BackgroundClass.prototype.update = function () {
  this.tilePosition.y += 1;
};
