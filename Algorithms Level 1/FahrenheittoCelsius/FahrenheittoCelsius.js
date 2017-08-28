// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
// that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed
// in Celsius degrees.
//
// For review, Fahrenheit = (9/5 * Celsius) + 32.

function fahrenheitToCelsius(fDegrees) {
  if(isNaN(fDegrees)){
    return "please enter the a numeric value"
  }

  var Celsius = Math.floor(((fDegrees-32) *(5/9)));

  return "Converted "+fDegrees+"F to "+Celsius+"C. "


}
var degrees = -18;
console.log(fahrenheitToCelsius(degrees));
