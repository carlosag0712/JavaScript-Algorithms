// Print One, Return Another
// Build a function that takes array of numbers. The function should print second-to-last value in the array,
// and return first odd value in the array.

function printOneReturnAnother(arr){
  console.log('second to last is '+ arr[arr.length-2]);
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2 != 0){
      return 'first odd number found '+arr[i]
    }
  }
}

var arr = [4,4,4,4,6,7,9,7,8,4,1]

console.log(printOneReturnAnother(arr));
