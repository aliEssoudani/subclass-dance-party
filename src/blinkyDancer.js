var makeBlinkyDancer = function(top ,left ,timeBetweenSteps){
  makeDancer.call(this,top ,left ,timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = this.step();


};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step.call(this)
this.oldStep();
  // other effects you can use on a jQuery-wrapped html tag.
  // other effects you can use on a jQuery-wrapped html tag.
  // other effects you can use on a jQuery-wrapped html tag.
  // other effects you can use on a jQuery-wrapped html tag.
  // other effects you can use on a jQuery-wrapped html tag.
  // other effects you can use on a jQuery-wrapped html tag.
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};