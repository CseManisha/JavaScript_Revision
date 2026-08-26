// undefine
/*
let c;
console.log(c)

// bigint
let num=1122255123266622
console.log(num)

// symbol

let id= Symbol("id")
console.log(id)

// distracturing array

const fruits=["apple","mango","banana"]

const [f,s]=fruits
console.log(f,s)

// distructuring object

const stu={
    name:"mani",
    age:23
}
// const{name,age}=stu;
console.log(name,age)

// rest operator

const user={
    name:"abhi",
    age:22,
    add:"h-23",
};
const{name , ...other}=user

console.log(name,other)

// callback

function greet(name){
    console.log("hello "+name)
}
// greet("manisha");
function processUser(callback){
    callback("mani")
}

processUser(greet)
// callback using arrow function
const userr=(name)=>{
   console.log("hii "+name)
}

const processName=(callback)=>{
    callback("how are you")
}

processName(userr)


// settimeout() is also callback
console.log("hii user")
setTimeout(()=>{
    console.log("hi manisha we are back")
},2000)


// higher order function

const number=[1,2,3,4,5]
const result= number.map(
function(number){
    return number*2;
}
);
console.log(result);



// self invoking function

 (function(){
    console.log("hii")
 })();


// this keyword
const user={
   name:"mani",
   age:21,

   greet(){
   console.log(this.name)
   }
}
user.greet()

*/

// promise
const promise=new Promise((resolve,reject)=>{
    let succes=true;
    if(succes){
        resolve("data receive")
    }else {
        reject("somthing went wrong")
    }
});
promise
.then((re)=>{
    console.log(re)
})
.catch((error)=>{
    console.log(error)
});