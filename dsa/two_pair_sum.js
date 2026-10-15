// Given an array arr[] of n integers and a target value, check if there exists a pair whose sum equals the target.
// time complexicity o(n**2)
function twoSum ( arr, target){
let n=arr.length;
 for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]+arr[j]=== target){
            return true
        }
    }
 }
 return false;
}

let arr=[3,3,4,5,6];
let target=12;
if(twoSum(arr,target)){
    console.log("true");
}else{
    console.log("false")
}