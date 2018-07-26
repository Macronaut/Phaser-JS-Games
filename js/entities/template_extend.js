var Template = function(x, y) {
  Extend.call(this, x, y, 'sTemplate');
}

Template.prototype = Object.create(Enemy.prototype);
Template.prototype.constructor = Template;

Template.prototype.templateFunction = function() { }
