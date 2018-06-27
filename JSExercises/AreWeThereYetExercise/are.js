var resposta = prompt("Are we there yet?");

while(resposta.indexOf("yes") === -1 && resposta.indexOf("yeah") === -1){
    var resposta = prompt("Are we there yet?");
}

alert("Yay we finally made it!");