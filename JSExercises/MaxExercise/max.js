var arr = [1,2,3,1,2,4,5];
var arr2 = [30,1,-20,10,2];

var res = max(arr);
var res2 = max(arr2);

console.log(res + "\n" + res2);

function max(arr){
    var max = arr[0];
    var i;
    
    for (var i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    
    return max;
}