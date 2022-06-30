
const playerSelection = document.querySelectorAll(".btn");
const btn1 = document.querySelector(".rock");
const selected = document.getElementById("selected");
const score = document.getElementById("score");
const reiniciar = document.querySelector(".reiniciar")
console.log(selected)
let scoreJugador = 0;
let scoreMaquina = 0;

const game = e => {

    const randomSel = randomSelection();
    let resultado;
    
    
    //console.log(e.target.classList);
    if((e.target.classList.contains("rock"))){
        selected.textContent = `Rock VS ${randomSel}`;
        switch(randomSel){
            case "Rock": resultado = 0; break; // 0 empate
            case "Paper": resultado = 2; break; // 2 pierde jugador
            case "Scissors": resultado = 1; break; // 1 gana jugador
            
        }
        
        
    } else if((e.target.classList.contains("paper"))){
        selected.textContent = `Paper VS ${randomSel}`;
        switch(randomSel){
            case "Rock": resultado = 1; break;// 1 gana jugador
            case "Paper": resultado = 0; break; // 0 empate
            case "Scissors": resultado = 2; break; // 2 pierde jugador
        }
        
        
    }else if((e.target.classList.contains("scissors"))){
        selected.textContent = `Scissors VS ${randomSel}`;
        switch(randomSel){
            case "Rock": resultado = 2; break; // 2 pierde jugador
            case "Paper": resultado = 1; break; // 1 gana jugador
            case "Scissors": resultado = 0; break; // 0 empate
        }
         
    }

    switch(resultado) {
        case 0: score.textContent = `Score Jugador: ${scoreJugador} -- Score Maquina: ${scoreMaquina}`; break;
        case 1: scoreJugador++,score.textContent = `Score Jugador: ${scoreJugador} -- Score Maquina: ${scoreMaquina}`; break;
        case 2: scoreMaquina++,score.textContent = `Score Jugador: ${scoreJugador} -- Score Maquina: ${scoreMaquina}`; break;
    }
    reiniciar.disabled = false;
    
    if(scoreJugador >= 5 || scoreMaquina >= 5){
        playerSelection.item(0).disabled = true;
        playerSelection.item(1).disabled = true;
        playerSelection.item(2).disabled = true;
        
        if(scoreJugador >= 5){
            score.textContent = "Jugador Gana"
        }else if(scoreMaquina >= 5){
            score.textContent = "Maquina Gana"
        }

    }
    
}
const randomSelection = () =>{

    let sel= "";
    let val1 = Math.floor(Math.random() * 3);
    switch(val1){
        case 0: sel = "Rock"; break; 
        case 1: sel = "Paper"; break; 
        case 2: sel = "Scissors"; break;
        default: sel = "hubo un error"; 
    }
        
    return sel;
}



playerSelection.forEach(sel =>{
    sel.addEventListener("click", game)
})


reiniciar.disabled = true;

reiniciar.addEventListener("click", e =>{
    
    scoreJugador = 0;
    scoreMaquina = 0;
    score.textContent = "";
    selected.textContent = "";
    playerSelection.item(0).disabled = false;
        playerSelection.item(1).disabled = false;
        playerSelection.item(2).disabled = false;

    //location.reload();
})



/*




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
    
}



game();
let continuar = prompt("quieres seguir jugando? (s-n)")
while(continuar == "s"){
    console.clear();
    game();
    continuar = prompt("quieres seguir jugando? (s-n)");
}
*/