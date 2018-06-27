var num = 7;
var flag = false;

do{
    var guessNum = Number(prompt("Guess the number!"));
    
    if(guessNum < num){
        alert("Too low. Try again.");
    }

    else if(guessNum > 7){
        alert("Too high. Try again.");
    }

    else{
        alert("You guessed it!");
        flag = true;
    }
    
} while(flag != true);