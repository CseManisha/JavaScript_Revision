// problem --. find two numbers whose sum equals the target
/*
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

*/

// reverse array

let day=[1,2,3,4,5,6,7]

let revArr=[];
for(let i=day.length -1;i>=0;i--){
    if(i===3){
        i-- //skip value
    }
    revArr.push(day[i]);
}
console.log(revArr)

// frequency count

let nums=[1,2,2,3,1,2,4]
let frequency={};
for(let num of nums){
    if(frequency[num]){
        frequency[num]++;
    }else{
        frequency[num]=1;
    }
}
console.log(frequency);
// find the missing number
let number = [1, 2, 3, 5];

for (let i = 1; i <= 5; i++) {
    if (!number.includes(i)) {
        console.log(i);
    }
}