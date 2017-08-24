// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

//assumption: print all the way to 60k starting from 0;



function multiplesOfSeis(){
  var counter = 0;

while(counter <= 60000){
  counter++;
  if(counter%6==0){
    console.log(counter);
  }
}

}

multiplesOfSeis();
