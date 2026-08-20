// objects--.store data in key value pairs

// const userData={
//     name:"mani",
//     age:22,
//     city:'mumbai'
// }
// empty object
// const user={};
// user.name="manisha";
// user.age=23;
// console.log(user)

// access prperties

// console.log(userData.age, userData.name)
// // bracket notation

// console.log(userData['name'],userData['age'])

// // distructuring
// const {name,age,city}=userData
// console.log(name,age,city)
// const {name:username}=userData
// console.log(username);
// // nested object destructuring

// const u1={
//     name:"abhi",
//     address:{
//         city:"delhi",
//         country:'india'
//     }
// }
// console.log(u1.address)

// spread operator -- copy the properties of an object
/*const user ={
    name:"manisha",
    age:21
}
console.log(user)
const newuser ={
    city:"mumbai",
    
  
    ...user
  
}
console.log(newuser)*/

// rest operator

/*
const ud={
    name:'mani',
    age:33,
    city:'delhi'
}
const {name,...otherDetails}=ud

console.log(name,otherDetails)

// objects method

const user={
    name:'abhi',
    age:33,

    greet(){
    console.log('hii mani',+this.age)
    }
}
console.log(user.greet())

function demo(){
    let a=10
    if(true){
         console.log(a)
    }
    console.log("no")
}
demo()


// closures--> 
function outer() {
    let name = "Manisha";

    function inner() {
        console.log(name);
    }

    return inner;
}

const re=outer()

re()
*/

// count function
/*
function  outer (){
let count=0

  function inner(){
    count=count+1;
    console.log(count)

  }
  return inner;

}
console.log("code run")
const tCount=outer()
tCount();
tCount()

// this --- refers to the object that calling the function
const user={
name: 'manisha',

 greet(){
    console.log(this.name)
 }

}
// this in arrow function

const user = {
    name: "Manisha",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();
*/


// call back --> a callback is a function passed to another function as an argument

function greet(name){
    console.log('hello '+ name);
}
function processUser(callback){
    callback("manisha");
}
processUser(greet)

function sayHello(){
    console.log("hello")
}
function execute(callback){
    callback()
}

execute(sayHello)

function calculate(a,b,callback){
    const re=a+b;
    callback(re);
    console.log("run")
}
function showRe(re){
    console.log(re);

}
calculate(10,20, showRe)