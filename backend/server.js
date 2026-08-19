// const numbers =[10,20,30,40,50]
// const result=numbers.map((num)=>{
//     return num*2;
// })
// console.log(result)

// map --> transfer every element

// const users=['a','b','c','d','e']
// const re=users.map((user)=>{
//     return user;
// })
// console.log(re)

// filter
// const numb=[10,20,30,40,50]
// const res=numb.filter((num)=>{
//     return (num>25)

// })
// console.log(res)

// reduce ()-->reduce an aarray to one final value

// 
// find -->find the frist element that matches and retunr

// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.find((num) => {
//     return num > 25;
// });

// console.log(result);// 30 not check other

// find Index()

const numbers = [10, 20, 30, 40, 50];

const index = numbers.findIndex((num) => {
    return num > 25;
});

console.log(index);

// some -->does atleast one element satisfy the condition
const n1 = [10, 20, 30, 40, 20];

const r1 = n1.every((num) => {
    return num > 4;
});

console.log(r1);

const n2=[10,20,30]
const r2=n2.forEach((num)=>{
    return n2 + 2;
 });
 console.log(r2)

const n3=[4,2,3,8,7]
let nn=n3.sort()
console.log(nn)

