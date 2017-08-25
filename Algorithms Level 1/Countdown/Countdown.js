// Countdown
// Create a function that accepts a number as an input.
// Return a new array that counts down by one, from the number (as array’s ‘zero’th element)
// down to 0 (as the last element). How long is this array?

function countdown(input){
  var newArr = [];
  newArr[0]= input;

  for(var i=input-1;i>=0;i--){
    newArr.push(i);
  }
    console.log(newArr);
    console.log('New Array length is:', newArr.length);
}

countdown(20);
