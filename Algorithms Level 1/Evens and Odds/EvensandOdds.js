// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print
// "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function EvensAndOdds(arr){
  // if(isNaN(arr)||arr.length<=0){
  //   return 'please enter a numeric array'
  // }

  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
      return "That's odd";
    }

    if (arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0) {
      return "Even more so!";
    }

    return 'no anomalies'
  }


}

var arr = [1,3,5,6,8,77,1,3,5,87,90];

console.log(EvensAndOdds(arr));
