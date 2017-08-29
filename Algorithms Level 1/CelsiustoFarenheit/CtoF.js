// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts the number of degrees Celsius,
// and returns the equivalent temperature expressed in Fahrenheit degrees.

function CelsiusTofahrenheit(CDegrees) {
  if(isNaN(CDegrees)){
    return "please enter the a numeric value"
  }

  var Fahrenheit = Math.floor((9/5 * CDegrees) + 32);

    return "Converted "+CDegrees+"C to "+Fahrenheit+"F. "

}


var degrees = -28;
console.log(CelsiusTofahrenheit(degrees));
