// problem 1 : find the diff btw maximum and mini elemet
/*
let arr=[20,5,10,15,55];
let maximum_num=arr[0];
let minimum_num=arr[0];
for(let i=0;i<arr.length;i++){
    if(maximum_num<=arr[i]){
        maximum_num=arr[i]
    }
     if(minimum_num>=arr[i]){
        minimum_num=arr[i]
    }
 
}
console.log(minimum_num)
console.log(maximum_num )
console.log(maximum_num-minimum_num)

// problem 2 find smallest element
let arr=[20,5,10,15,55,2];
let small_ele=arr[0];

for (let i=1;i<arr.length;i++){
    if(small_ele>=arr[i]){
        small_ele=arr[i]
    }
}
console.log(small_ele);
*/

//  problem 3:find the second largest number

let arr=[10,25,5,40,30];
let largest=arr[0];
let second_largest=-Infinity;

for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        second_largest=largest;
        largest=arr[i];
    }else if(arr[i]>second_largest && arr[i]!== largest){
        second_largest=arr[i];
    }
    
}
console.log(second_largest)