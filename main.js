

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
    let sel = randomSelection();
    let val1 = prompt("Choose: rock, paper, scissors");
    while (val1!="rock" && val1!="paper" && val1!="scissors"){
        console.log("hubo un error de tipeo, ingrese denuevo su eleccion")
        val1 = prompt("Choose: rock, paper, scissors");
    }
    

    console.log(sel, val1);
}


playRound();