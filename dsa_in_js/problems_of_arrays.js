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
*/

// reverse an array
let arr1=[1,2,3,4,5]
let result =[];
for(let i=arr1.length-1;i>=0;i--){
   result.push(arr1[i]);
}
console.log(result);

// find the sum of all elements in an array

let arr2=[1,3,5,7,9,11]
let totalSum=0;
for(let i=0;i<arr2.length;i++){
    totalSum+=arr2[i]
}
console.log(totalSum)

// count even and odd number in array

let even=0;
let odd=0;
let arr3=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<arr3.length;i++){
    if(arr3[i]%2==0){
    even+=1
    } else{
        odd+=1;
    }
}
console.log(even,odd)

// check wheather an array is sorted in ascending order
let arr4=[1,2,6,4,5]
let isSorted=true;
for(let i=0;i<arr4.length;i++){
    if(arr4[i]>arr4[i+1]){
        isSorted=false;
        break;
    }
}
console.log(isSorted)

