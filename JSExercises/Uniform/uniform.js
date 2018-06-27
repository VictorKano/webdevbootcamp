var arr1=[1,1,1,1,1,1];
var arr2=[1,1,1,1,1,2];
var arr3=["a","a","a","a","a","a"];
var arr4=["a","a","a","a","b","a"];

var res1 = isUniform(arr1);
var res2 = isUniform(arr2);
var res3 = isUniform(arr3);
var res4 = isUniform(arr4);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

function isUniform(arr){
    var x = arr[0];
    var i;
    var flag = 0;
    
    for(i=1; i < arr.length; i++){
        if(arr[i] !== x){
            flag++;
        }
    }
    
    if(flag > 0){
        return false;
    }else{
        return true;
    }
}