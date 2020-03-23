// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {


    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition();

   }; // Ahlan how are you guys doing so far?

// did u get it

  makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps)
    // setTimeout(this.step, this.timeBetweenSteps);
  };
  // Honestly, this needs to be debugged step by step and the challenge of the entire sprint is in this one function so I will leave you to figure it out for a little more

  // Honestly, this needs to be debugged step by step and the challenge of the entire sprint is in this one function so I will leave you to figure it out for a little more

  makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
  };

