var num = [1, 2, 3, 4];
var letras = ["a", "b", "c"];

printReverse(num);
printReverse(letras);

function printReverse(arr){
    var tam = arr.length -1;
    var i;
    console.log("************************");
    for (i=tam; i >= 0; i--){
        console.log(arr[i]);
    }
    console.log("************************");
}