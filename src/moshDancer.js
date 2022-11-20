var makeMoshDancer = function(top, left, r, g, b, timeBetweenSteps, size) {
  makeDancer.call(this, top, left, r, g, b, timeBetweenSteps, size);
  this.size = size;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = this.step;
};

makeMoshDancer.prototype = Object.create(makeDancer.prototype);
makeMoshDancer.prototype.constructor = makeMoshDancer;

makeMoshDancer.prototype.oldStep = function() {
  makeDancer.prototype.step.call(this);
}

makeMoshDancer.prototype.step = function(direction) {
  // call the old version of step at the beginning of any call to this new version of step
  //
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.fadeOut('slow');
  //this.$node.fadeIn('slow')
};

makeMoshDancer.prototype.follow = function(top, left) {
  this.$node.animate({top: top, left: left}, 5000);
}
