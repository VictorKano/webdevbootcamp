var arr1 = [1,3,-5,4,-10,9];
var arr2 = [-1,-3,-5,-4,-10,-9];

var res1 = sumArray(arr1);
var res2 = sumArray(arr2);

console.log(res1 + "\n" + res2);

function sumArray(arr){
    var sum = 0;
    var i;
    
    for(i=0; i< arr.length; i++){
        sum += arr[i];
    }
    
    return sum;
}