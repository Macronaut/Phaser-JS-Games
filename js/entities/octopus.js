var Octopus = function(x, y) {
    Enemy.call(this, x, y, 'sOctopus');
    this.speed = 75;
    this.hp = 3;

    this.body.velocity.x = Math.random() > .5 ? this.speed : -this.speed;
    this.body.velocity.y = this.speed/2;
}

Octopus.prototype = Object.create(Enemy.prototype);
Octopus.prototype.constructor = Octopus;

Octopus.prototype.updateObject = function() { this.checkEdges(); }

Octopus.prototype.checkEdges = function() {
  if(this.x > game.world.width - this.width/2){
    this.body.velocity.x = -this.speed;
    this.x = game.world.width - this.width/2;
  }

  if(this.x < this.width/2){
    this.body.velocity.x = this.speed;
    this.x = this.width/2;
  }
}
