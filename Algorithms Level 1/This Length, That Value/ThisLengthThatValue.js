// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function lengthValue(len,val){
  if(len == val){
    return "Jinx";

  }

  var arr = [];

  for(var i =0;i<len;i++){
    arr.push(val);
  }

  return arr;
}

console.log(lengthValue(2,3));
