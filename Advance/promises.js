// const promiseOne = new Promise(function(resolve, reject){
//     //Do n async task
//     //DB calls, crypto, network
//     setTimeout(function(){
//         console.log(`Async Task is complete`);
//         resolve();
// },1000);
// })
// promiseOne.then(function(){
//     console.log("Promise Consumed");
// });   //direct realtion with resolve


// new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log(`Async Task2 is completed`);
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log(`Async2 resolved`);
// })

// //passing data through resolve
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "aniket", email: "aniketrajsingh29@gmail.com"});
//     }, 1000);
// })
// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error  = true;
//         if(!error){
//             resolve([1,2,3,4,5,6,7,8]);
//         }
//         else{
//             reject(`Error: something went wrong`);
//         }
//     },  1000);
// });
// promiseFour.
// then(function(arr){
//     console.log(arr);
//     return arr[2];
// })
// .then(function(num){
//     console.log(num);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log(`the promise is either resolved or rejected`));

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "aniket", password: "1234dfgh"});
        }
        else{
            reject(`Error: something went wrong`);
        }
    },1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);}
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.error("An error occurred:", error);
//     }
//     }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("An error occurred:", error));
