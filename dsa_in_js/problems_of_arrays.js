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


//  problem 3:find the second largest number

let arr=[10,25,5,40,30];
let max=arr[0];
let secMax=-Infinity;

for(let i=1;i<arr.length;i++){
    if(max<arr[i]){
        secMax=max
        max=arr[i];
    } else if( secMax<arr[i]&& max!== arr[i]){
        secMax=arr[i];
    }
    
}
console.log(max)
console.log(secMax)

// second min

let array=[4,6,7,2,3]
let min=array[0];
let sMin=+Infinity;
for(let i=1;i<array.length;i++){
    if(array[i]<min){
        sMin=min;
        min=array[i];
    } else if( sMin>array[i]&& min!== array[i]){
        sMin=array[i];
    }
}
console.log(min)
console.log(sMin);
*/

let newArr=[10,5,25,2,40,15];
for(let i=0;i<newArr.length;i++){
    for(let j=i+1;j<newArr.length;j++){
        if(newArr[i]>newArr[j]){
        let temp=newArr[i]
        newArr[i]=newArr[j]
        newArr[j]=temp;
        }
    }
}
console.log(newArr);