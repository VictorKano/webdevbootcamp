function factorial(x){
    var y=1;
    for(var i = 2; i<=x; i++){
        y = y * i;
    }
    return y;
}

var num = factorial(0);

console.log(num);