// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length.
//  What happens if the array’s first value is not a number,
//  but a string (like "what?") or a boolean (like false).

function firstplustlength(input){
  //check if it's an array
  if(!Array.isArray(input)) {
    return "Please enter an array of numbers"
  }

//check if the arry contains numbers by iterating through it
  for(var i = 0; i<input.length;i++){
    if(isNaN(input[i])){
      return "Please enter numbers only";
    }
  }

  //check if the array has something in it

  if(input.length<1){
    return 'Please add items to the array, remember' +
    ' this function is supposed to add the 1st and last item of an array';
  }

//REady to rock
  if(input.length >=1){
    return input[0]+ input.length;
  }


}

var arr = [];

console.log(firstplustlength(arr));
