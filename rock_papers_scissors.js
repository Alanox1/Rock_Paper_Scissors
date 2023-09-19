// console.log("HOLA");

let elements = ["Rock","Paper","Scissors"]

let pointsUser = 0;
let pointsComputer = 0;

function getComputerChoice(){
    const indiceAleatorio = Math.floor(Math.random() * elements.length);
    
    return elements[indiceAleatorio]
}


function singleRound(playerSelection,computerSelection){
  let userChoice = playerSelection.toLowerCase()
  let computerChoice = computerSelection.toLowerCase()
 
  console.log("- - - - - - - -")
  if (userChoice === computerChoice) {
    return "it's a tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    pointsUser += 1
    return `You Win!! ${userChoice} beats ${computerChoice}`;
  } else {
    pointsComputer += 1
    return `You Lose, ${computerChoice} beats ${userChoice}`;
  }
 
}

function game(){
  
  for (let i = 0; i < 5; i++) {
   
    let elementUser = prompt("Rock,Paper or Scissors?")
    console.log(singleRound(elementUser,getComputerChoice()))
    
  }

  console.log(`User: ${pointsUser}, Computer: ${pointsComputer}`)
}

game()