var age = Number(prompt("Digite a sua idade"));

if(age < 0){
    alert("Erro!");
}

if(age == 21){
    alert("Happy 21st birthday!");
}

if(age % 2 > 0){
    alert("Your age is odd");
}

if(age % Math.sqrt(age) == 0){
    alert("Your age is a perfect square!");
}