// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function greaterThanSecond(arr){

if(arr.length<=1){
  return "Enter an array with 2 or more values";
}

var arrcount = 0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]>arr[1]){
      console.log(arr[i]+' is greater than '+arr[1] );
      arrcount++;
    }

  }

  return "total numbers greater than the 2nd value: " + arrcount;
}

var arrnew = [1,3,5,7,9,13];

console.log(greaterThanSecond(arrnew));
