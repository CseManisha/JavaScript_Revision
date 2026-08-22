// problem --. find two numbers whose sum equals the target

let nums=[2,6,2,15,6,3,4];
let target=9;

for(let i=0;i<nums.length;i++){
    for(let j=i+1; j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            console.log(i,j);
        }
    }
}

// remove duplicate
let unique=[...new Set(nums)];
console.log(unique);

// find maximum/ minimum
let max=nums[0];

for (let num of nums){
    if(num>max){
        max=num;
    }
}
console.log(max);

min=nums[0];
for(let num of nums){
    if(num<min){
        min=num;
    }
}
console.log(min)

// in sort way

console.log(Math.max(...nums))
console.log(Math.min(...nums))


