var TemplateClass = function (game, x, y) {
    /*Phaser.Sprite.call(this, game, x, y, "REPLACE");
    game.physics.enable(this, Phaser.Physics.ARCADE);

    game.add.existing(this);*/
};

TemplateClass.prototype = Object.create(Phaser.Sprite.prototype);
TemplateClass.prototype.constructor = TemplateClass;

TemplateClass.prototype.update = function () {
  /*var oKeys = {
    kLeft : game.input.keyboard.isDown(Phaser.Keyboard.LEFT),
    kRight : game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)
  }*/
};
