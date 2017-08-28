// Fit the First Value
// Your function should accept an array. If the value at [0] is greater than array’s length,
// print "Too big!"; if the value at [0] is less than array’s length,
// print "Too small!"; otherwise print "Just right!".

function fitFirst(arr) {

  if(arr.length<=0){
    return "Please enter an array that contains at least 1 element"
  }

  if(arr[0]>arr.length){
    return "Too big!";
  }

  if(arr[0]<arr.length){
    return "Too small!";
  }

  if(arr[0]==arr.length){
    return "Just right!";
  }

}

var arr = [-1];

console.log(fitFirst(arr));
