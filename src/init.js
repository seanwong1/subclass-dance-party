$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 255, Math.random() * 255, Math.random() * 255,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addLineUpButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }

  });

  $('body').on('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof makeFollowDancer) {
        window.dancers[i].setPosition(y, x);
      }
    }
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof makeMoshDancer) {
        var distance = 1000;
        var x;
        var y;
        for (var j = 0; j < window.dancers.length; j++) {
          currentDistance = Math.sqrt(Math.pow(window.dancers[j].top, 2) + Math.pow(window.dancers[j].left, 2));
          if (currentDistance < distance) {
            distance = currentDistance;
            x = window.dancers[j].left;
            y = window.dancers[j].top;
          }
        }
        window.dancers[i].follow(y, x);
      }
    }
  });



});

