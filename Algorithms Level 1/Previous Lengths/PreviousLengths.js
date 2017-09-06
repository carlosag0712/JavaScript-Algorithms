// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number –
// the length of the string at previous array index – and return the array.

function preLength(arr){
  var newArr = []
  for(var i=0;i<arr.length; i++){

    if(arr[i-1] == undefined){
      arr[i-1] = arr[arr.length-1].length
    }
      arr[i] = arr[i].length
      newArr.push(arr[i-1]);
  }
  arr = newArr
  return arr;
}

var arr = ['carlos', 'tests', 'algo', 'ex']
console.log(preLength(arr));
