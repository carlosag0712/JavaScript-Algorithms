// Print and Return
// Your function will receive an array with two numbers.
// Print the first value, and return the second.



function printandreturn(arr){
  if(arr.length != 2){
    console.log("Please pass an array with two numbers");
  }

  console.log(arr[0]);
  return arr[1];
}


var newArr =[1,2]

var arr = printandreturn(newArr);
console.log(arr);
