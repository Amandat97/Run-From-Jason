const prompt = require('readline-sync'); // node jason .js
const colors = require('colors');

let userInput;
let name = prompt.question("What's your name camper?".rainbow);
console.log (`Welcome to Camp Crystal Lake! Beware ${name} ! It's Friday 13th!\n`.red);
console.log("Jason was spotted around the house! Try to escape safely! How do you want to escape? -Select from the rooms below to escape-\n".yellow);

function game() {

   let room = prompt.question("\n 1. Master Bedroom. \n 2. Kitchen \n 3. Bathroom \n 4. Kid's room \n".green);

   switch(room) {

    case "1" || "master bedroom":
      console.log ("You've entered the Master Bedroom, but there seems to be no way out. Becareful! I think I hear Jason in the other room! Hurry before he catches up!"); 
      game();
      break;        
     
    case "2" || "kitchen":
     console.log ("You've entered the Kitchen but there seems to be no way out, try another room! Hurry before Jason catches up!");
     game();
     break;
     
    
    case "3" || "bathroom":
      console.log ("You entered the same room as Jason!, X.X YOU'RE DEAD X.X".red);
      break;

    case "4" || "kid's room":
      console.log ("You entered the Kid's Room, there seems to be an escape through the window! Run! \n You've made it to safety! YOU WIN!".yellow);
      break;
  };
}

do {
    game();
    let userInput = prompt.question("Play again? y || n ");
}while (userInput != 'n' || userInput != 'N');
console.log("Thanks for playing!");



