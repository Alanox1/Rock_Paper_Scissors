console.log("HOLA");

let elements = ["Rock", "Paper" , "Scissors"]

function getComputerChoice(){
    const indiceAleatorio = Math.floor(Math.random() * elements.length);
    return elements[indiceAleatorio]
}

console.log(getComputerChoice())