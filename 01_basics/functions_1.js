//functions

// function say_my_name() {
//     console.log(`Aniket Raj Singh`);
// }
// say_my_name();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
//     return num1+num2;
// }
// const sum = addTwoNumbers(10,20);
// console.log(`Sum ${sum}`); //non-void function

function loginUser(username){
    if(username === undefined){
        console.log("Please provide username");
        return;
    }
    return `${username} logged in`;
}
console.log(loginUser(undefined));




