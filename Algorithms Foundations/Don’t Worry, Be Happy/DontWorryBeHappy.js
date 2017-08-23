// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.


function beCheerful(){
  console.log("good morning");
}

for(var i=0;i<99;i++){
  console.log("function called "+i+" time(s)");
  beCheerful();
}
