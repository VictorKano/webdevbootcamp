var num1 = -10;
var num2 = 10;
var num3 = 300;
var num4 = 5;

console.log("Print all numbers between -10 and 19");
for(var i=num1; i<=19; i++){
    console.log(i);
}

console.log("---------------------------");

console.log("Print all even numbers between 10 and 40");
for(var i=num2; i<=40; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

console.log("---------------------------");

console.log("Print all odd numbers between 300 and 333");
for(var i=num3; i<=333; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

console.log("---------------------------");

console.log("Print all numbers divisible by 3 and 5");
for(var i=num4; i<=50; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log(i);
    }
}