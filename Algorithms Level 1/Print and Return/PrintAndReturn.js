// Print and Return
// Your function will receive an array with two numbers.
// Print the first value, and return the second.



function printandreturn(arr){
  if(arr.length != 2){
    return "Please pass an array with two numbers";

  }

  console.log(arr[0]);
  return arr[1];
}


var newArr =[2,1]

var arr = printandreturn(newArr);
console.log(arr);
