// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print
// "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function EvensAndOdds(arr){
  // if(isNaN(arr)||arr.length<=0){
  //   return 'please enter a numeric array'
  // }

  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
      console.log("That's odd");
    }

    else if (arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0) {
      console.log("Even more so!");
    }

    else{
      console.log('no worries');
    }



  }


}

var arr = [1,1,3,6,8];

console.log(EvensAndOdds(arr));
