const prompt = require('readline-sync'); // node jason .js
const colors = require('colors');

function game() {

  let name = prompt.question("What's your name camper?".rainbow);

  switch(name) {
    case "Amanda":
      console.log("Welcome to Camp Crystal Lake! Beware Amanda! It's Friday 13th, It's not safe!".red);
      break;
    case "Daniel":
      console.log (`Welcome to Camp Crystal Lake! Beware Ernie! It's Friday 13th, Jason will be around!`.green);
      break;
    case name:
    console.log (`Welcome to Camp Crystal Lake! Beware ${name} ! It's Friday 13th!`);
    break;  
  };
  
   let greeting = prompt.question("Jason was spotted around the house! Try to escape safely! How do you want to escape? -Press any key and hit enter- to see rooms to escape from.");

   let room = prompt.question("\n 1. Master Bedroom. \n 2. Kitchen \n 3. Bathroom \n 4. Kid's room \n".rainbow)

   switch(room) {

    case "1" || "master bedroom":
      console.log ("You've entered the Master Bedroom, but there seems to be no way out. Becareful! I think I hear Jason in the other room! Hurry before he catches up!"); 
      prompt.question("\n 1. Master Bedroom. \n 2. Kitchen \n 3. Bathroom \n 4. Kid's room \n ".rainbow);  
         
     
    case "2" || "kitchen":
     console.log ("You've entered the Kitchen but there seems to be no way out, try another room! Hurry before Jason catches up! \n 1. Master Bedroom. \n 2. Bathroom \n 3. Kid's room \n 4. Garage \n ".rainbow);
     
     
    
    case "3" || "bathroom":
      console.log ("You entered the same room as Jason!, X.X YOU'RE DEAD X.X".orange);
      break;

    case "4" || "kid's room":
      console.log ("You entered the Kid's Room, there seems to be an escape through the window! Run! \n You've made it to safety! YOU WIN!".yellow);
      break;  
  };

 

}
  game();
