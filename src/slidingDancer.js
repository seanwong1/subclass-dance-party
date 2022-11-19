var makeSlidingDancer = function(top, left, r, g, b, timeBetweenSteps, direction) {
  makeDancer.call(this, top, left, r, g, b, timeBetweenSteps, direction);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.direction = direction;

  // var oldStep = this.step;
};

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.oldStep = function() {
  makeDancer.prototype.step.call(this);
}

makeSlidingDancer.prototype.step = function(direction) {
  // call the old version of step at the beginning of any call to this new version of step
  //
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({ 'left': "+=50px" }, "slow" );
  this.$node.animate({ 'right': "-=50px" }, "slow" );
};