console.log("HOLA");

let elements = ["Rock", "Paper" , "Scissors"]
let elementUser = prompt("Rock,Paper or Scissors?")
function getComputerChoice(){
    const indiceAleatorio = Math.floor(Math.random() * elements.length);
    
    return elements[indiceAleatorio]
}


function singleRound(playerSelection,computerSelection){
      if(playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock"){
        console.log(playerSelection,computerSelection);
        return "Rock Wins!"
      }else if(playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock"){
        console.log(playerSelection,computerSelection);
        return "Paper Wins!"
      }else if(playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors"){
        console.log(playerSelection,computerSelection);
        return "Scissors Wins!"
      }
      else{
        return "Empate!"
      }
}
console.log(singleRound(elementUser,getComputerChoice()))