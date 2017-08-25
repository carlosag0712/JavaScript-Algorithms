// Countdown By Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

var count = 2016;

while(count > 0){

  if((count - 4)%2 ==0){
    count = count - 4;
    console.log(count);
  }

}
