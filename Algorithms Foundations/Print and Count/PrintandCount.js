// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

function printNCount(min,max){

if(min == undefined){
  min = 0;
}

if(max == undefined){
  max = 5000;
}

  var count = 0;

  if(min < max){
    for(var i=min;i<=max;i++){
      if(i%5==0){
        count++;
        console.log(i);
      }
    }
  }
  console.log('there were '+count+' numbers in the range of '+min+' and '+max);
}

printNCount(512,4096)
