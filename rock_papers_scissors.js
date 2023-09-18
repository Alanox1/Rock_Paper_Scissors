// console.log("HOLA");

let elements = ["Rock","Paper","Scissors"]
// let elementUser = prompt("Rock,Paper or Scissors?")


function getComputerChoice(){
    const indiceAleatorio = Math.floor(Math.random() * elements.length);
    
    return elements[indiceAleatorio]
}


function singleRound(playerSelection,computerSelection){
  let player = playerSelection.toLowerCase()
  let computer = computerSelection.toLowerCase()

  // console.log(`Vos elegiste: ${player}`)
  // console.log(`La maquina eligió: ${computer}`);
   if(player === computer) return "Empataron"
   
   if(player === "rock"){
     if(computer === "scissors") return "You Win!! rock beats scissors"
     if(computer === "paper") return "You lose, paper beats rock"
   }
   

   if(computer === "rock"){
    if(player === "scissors") return "You lose, rock beats scissors"
    if(player === "paper") return "You Win!!, paper beats rock"
  }
     
   if(player === "scissors"){
    if(computer === "paper") return "You win!! Scissors beats paper"
   }

   if(computer === "scissors"){
    if(player === "paper") return "You lose, scissors beats paper"
   }
 
}

function game(){
  for (let i = 0; i < 5; i++) {
    console.log(singleRound("Rock",getComputerChoice()))
    
  }
}
// console.log(singleRound("Paper",getComputerChoice()))
game()