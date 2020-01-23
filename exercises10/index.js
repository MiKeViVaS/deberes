var p1 = prompt('player 1, elige entre: "piedra", "papel", "tijera".');
var p2 = prompt('player 2, elige entre: "piedra", "papel", "tijera".'); 

function jugar(p1,p2){

 if(p1==="piedra" && p2==="piedra"){
     alert("empate");
 }
 if(p1==="piedra" && p2==="papel"){
     alert("gana jugador 2");
 }
 if(p1==="piedra" && p2==="tijera"){
    alert("gana jugador 1");
}
if(p1==="papel" && p2==="piedra"){
    alert("gana jugador 1");
}
if(p1==="papel" && p2==="papel"){
    alert("empate");
}
if(p1==="papel" && p2==="tijera"){
    alert("gana jugador 2");
}
if(p1==="tijera" && p2==="piedra"){
    alert("gana jugador 2");
}
if(p1==="tijera" && p2==="papel"){
    alert("gana jugador 1");
}
if(p1==="tijera" && p2==="tijera"){
    alert("empate");
}
};
jugar(p1,p2);
