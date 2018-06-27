function kebabToSnake(str){
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

var palavra = "ola-tudo-bem";

var result = kebabToSnake(palavra);

console.log(result);