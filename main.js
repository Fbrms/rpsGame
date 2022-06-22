

const randomSelection = () =>{
    let sel= "";
    let val1 = Math.floor(Math.random() * 3);
    switch(val1){
        case 0: sel = "rock"; break; 
        case 1: sel = "paper"; break; 
        case 2: sel = "scissors"; break;
        default: sel = "hubo un error"; 
    }

    return sel;
}

const playRound = () =>{
    let resultado;
    let computerSelection = randomSelection();
    let playerSelection = prompt("Choose: rock, paper, scissors");
    while (playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors"){
        console.log("hubo un error de tipeo, ingrese denuevo su eleccion")
        playerSelection = prompt("Choose: rock, paper, scissors");
    }
    console.log(`La computadora eligio ${computerSelection} y El jugador eligio ${playerSelection}`)
    if(computerSelection==playerSelection){
        console.log("hubo un empate")
        
    }else if(computerSelection=="rock" && playerSelection =="scissors"){
        console.log("La computadura gana")
    }else if(computerSelection=="scissors" && playerSelection =="paper"){
        console.log("La computadura gana")
    }else{
        console.log("El jugador gana");
    }

}

const game = () => {
    let rondas = +prompt("cuantas rondas quiere jugar?");
    
    for(let i=0; i<rondas;i++){
        console.log(`ronda numero ${i+1}`)
        playRound();
    }
    let continuar = prompt("quieres seguir jugando? (s-n)");
    return continuar;
    
}
let continuar = game();
if(continuar == s){
    console.clear();
    game();
}

