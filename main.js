

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

