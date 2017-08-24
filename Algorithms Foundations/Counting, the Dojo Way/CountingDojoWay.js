// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function countingDojo() {

  for(var i =0;i<=100;i++){
    if(i%5==0 && i%10!=0){ //If divisible by 5, print "Coding" instead
      console.log('Coding');
      continue;
    }else if (i%5==0 && i%10==0) { //If by 10, also print " Dojo".
      console.log('Coding Dojo');
      continue;
    }


    console.log(i);

  }

}

countingDojo();
