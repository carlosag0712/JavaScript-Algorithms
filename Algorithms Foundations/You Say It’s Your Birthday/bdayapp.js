// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day....",
//
// Example: given yourBirthday(4,19) or yourBirthday(19,4)

function bday(date1, date2){
  if(date1==undefined ||date2==undefined){
    console.log('please enter a date, either MMDD or DDMM');
  }

  if((date1>0&&date1<31)&&(date2>0&&date2<31)){
    if((date1==7&&date2==12)||(date1==12&&date2==7)){
      console.log("How did you know?");
    }else{
      console.log("just another day");
    }

  }else{
      console.log('please enter a valid date, either MMDD or DDMM');
  }

}

bday(34,34);
