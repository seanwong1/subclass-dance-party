// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, r, g, b, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.r = r;
  this.g = g;
  this.b = b;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // define this
  var that = this;  //var hello =
  setTimeout(function() { that.step(); }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left, r, g, b) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left,
    border: '15px solid rgb(' + this.r + ',' + this.g + ',' + this.b + ')'
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  this.setPosition(this.top, 20);
}

