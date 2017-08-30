// Count Positives
// Given array of numbers, create function to replace last value with number of positive values.
//
// Example: countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
  var countPositives = 0;

  for(var i=0;i<arr.length;i++){
    if(arr[i]>=0){
      countPositives = countPositives+arr[i];
    }
  }

  arr.pop(arr[arr.length-1]);
  arr.push(countPositives);

  return arr;

}

var arr = [-2,5,6,10,-10];
console.log(countPositives(arr));
