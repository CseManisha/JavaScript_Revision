// map() , filter() ,reduce(), find() , findindex() ,some(),every() , foreach() , sort() 
const number=[1,2,3,4,5,6]

const result=number.map((numArr)=>{
    return numArr+2;
})
console.log(result)

let result2=number.filter((newCond)=>{
    return newCond >3
})
console.log(result2)//4,5,6

let result3=number.reduce((newSum,newArr)=>{
    return newSum+newArr;
})
console.log(result3)//21

let result4=number.find((newArr)=>newArr>3);
console.log(result4)//4

let result5=number.findIndex(numIndex => numIndex>1)
console.log(result5)//1

let result6=number.some(num => num>6);
console.log(result6)// false

let result7=number.every(num => num>3)
console.log(result7);// false

number.forEach(num=>{
    console.log(num)
})

let value=[12,3,5,7,8]
value.sort((a,b)=>a-b);
console.log(value)

