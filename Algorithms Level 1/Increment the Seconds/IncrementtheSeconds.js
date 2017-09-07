// Increment the Seconds
// Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd
// (arr[1], [3], [5], etc). Afterward, console.log each array value and return arr.

function increment2nd(arr) {

for(var i=0; i<arr.length;i++){

  if(i%2!=0){
    arr[i] = arr[i]+1
    // console.log(arr[arr.indexOf(arr[i])]+1);
  }
}
  return arr;
}

var arr = [1,2,3,4];

console.log(increment2nd(arr));
