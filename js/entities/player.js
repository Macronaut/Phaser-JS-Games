var Player = function (x, y) {
    Phaser.Sprite.call(this, game, x, y, "sPlayer");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.body.maxVelocity.x = 100;
    this.anchor.setTo(.5, 1);
    this.body.gravity.y = 150;
    this.body.drag.x = 100;
    this.smoothed = false;
    this.speed = 75;
    this.attemps = 0;
    this.jump = 80;    

    this.animations.add("walk", [0,1]);
    this.animations.add("idle", [0]);    
    this.animations.add("stop", [2]);

    oGroups.gPlayer.add(this);    
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function () {

  this.move();

}

Player.prototype.move = function() {
  var oKeys = { kJump : game.input.keyboard.justPressed(Phaser.Keyboard.Z),
  kLeft : game.input.keyboard.isDown(Phaser.Keyboard.LEFT),
  kRight : game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) }

  if(oKeys.kJump && this.attemps < 1 ) { this.attemps++; this.body.velocity.y = -this.jump; }

  if(this.body.onFloor()) this.attemps = 0;

  if(this.body.velocity.x != 0) this.scale.x = Math.sign(this.body.velocity.x);

  if( this.body.onFloor() ) {
    if(this.body.velocity.x != 0 ) {
      this.animations.play("walk", 10, true);      
    } else {
      if(this.body.velocity.x != 0) {
        this.animations.play("stop");
      } else {
        this.animations.play("idle");
      }    
    }
  } else {
    this.animations.play("stop");
  }

  if (oKeys.kRight) this.body.velocity.x = this.speed;
  else if(oKeys.kLeft) this.body.velocity.x = -this.speed;
  else this.body.velocity.x = 0; 

}
