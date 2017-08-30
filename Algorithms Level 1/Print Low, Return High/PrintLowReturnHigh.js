// Print Low, Return High
// Create a function that takes array of numbers.
// The function should print the lowest value in the array, and return the highest value in the array.




function plowrhigh(arr){
  var max = arr[0];
  var min = arr[0];

  for(var i=0;i<arr.length;i++){
    if (max<arr[i]){
      max = arr[i];
    }

    if(min > arr[i]){
      min = arr[i];
    }
  }

  console.log(min, ' is the lowest');
  return max +" is the highest";


}

var arr = [100,2000,5,-58,1,9,4,6,7,8];
console.log(plowrhigh(arr));
