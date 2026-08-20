// Synchronous → Asynchronous → Callback → Promise → async/await
// synchronous= one task at a one time in order
// so if one task takes a long time  the next task has to wait
/*
console.log("A");
console.log("B");
console.log("C");


// asynchronous -->  start a task and allow other code to continue while waiting
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");

// callback hell-->Callbacks become difficult when we have many dependent asynchronous operations.

// promise-->it represet the future result of an asynchronous operarion
 const promise =new Promise((resolve, reject) =>{
    let success=false;

    if(success){
        resolve("data receive");
    }else{
        reject("something went wrong")
    }

 } );

 promise
.then((result) =>
{
    console.log(result);
})
.catch((error)=>{
    console.log(error)
})

// try catch--> error handling
*/
function cal(){
    try{
    let a=10/2
     console.log(a)
    
    }catch(error){
        console.log(error.message);
    }
}
cal()
