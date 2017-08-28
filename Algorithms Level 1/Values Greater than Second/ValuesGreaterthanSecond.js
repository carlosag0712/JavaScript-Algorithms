// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values
// that are greater than its 2nd value. Print how many values this is.
// What will you do if the array is only one element long?

function greaterThanSecond(arr){

if(arr.length<=1){ // What will you do if the array is only one element long?
  return "Enter an array with 2 or more values this array only has the following value: ["+arr+"]";
}

var arrcount = 0;
var newArray = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i]>arr[1]){
      newArray.push(arr[i]);
      arrcount++;

    }

  }

  return "new array ["+newArray + "] contains "+newArray.length+" values that are greater than the "+
          "initial array's ["+arr+"] second value which is: "+arr[1];
}

var arrnew = [1];

console.log(greaterThanSecond(arrnew));
