var Template = function (x, y, sprite) {
    Phaser.Sprite.call(this, game, x, y, sprite);

    game.physics.enable(this, Phaser.Physics.ARCADE);
    oGroups.gTemplate.add(this);
    this.anchor.setTo(.5);
};

Template.prototype = Object.create(Phaser.Sprite.prototype);
Template.prototype.constructor = Template;

Template.prototype.update = function () {
  this.templateFunction();
};
