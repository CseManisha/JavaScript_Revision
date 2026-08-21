// template literals
/*
const name ="manisha"
const age=21
console.log("my name is "+name+"and i am "+age+"years old")

// backticks
console.log(`my name is ${name} and i am ${age} years old `)
 let a=10
 let b=2
console.log(`i am a girl the value is ${a+b}`)
// optional chaining . /?

const user={
    name:"manisha",
    age:21

}
// console.log(user.address.city)// error
console.log(user.city)
console.log(user.address?.city)// undefined
console.log(user.getname?.())

// nullish coalescing ??-- gives a default values when left side is null or undefined
const name='manisha'
const result =name ?? 'guest';
console.log(result)
*/

// modules-->allow to split js code into multiple files

// export --> sending file  for use in like app,js
export function add(a,b){
    return a+b
}

add(2,3)