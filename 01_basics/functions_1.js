//functions

function say_my_name() {
    console.log(`Aniket Raj Singh`);
}
say_my_name();

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
    return num1+num2;
}
const sum = addTwoNumbers(10,20);
console.log(`Sum ${sum}`); //non-void function

function loginUser(username){
    if(username === undefined){
        console.log("Please provide username");
        return;
    }
    return `${username} logged in`;
}
console.log(loginUser(undefined));


const Obj ={
func1 : function CalculatePrice(num1){
    this.num1 = num1
    return num1;
}
,
// //passing multiple arguments in single parameter as array
func2 : function calculatePrice(...num1){ // '...' - rest opertor/spread operator
    return num1;
}
};

console.log(Obj.func1(100,200,300)); // only 100
console.log(Obj.func2(100,200,300)); // 100,200,300 in array
console.table([Obj.func1(100,200,300),Obj.func2(100,200,300)]); //tabular view

//passing object as an arguement
const user = {
    username : "aniket",
    email : "aniketrajsingh29@gmail.com"
};

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Email is ${anyObject.email}`);
}
handleObject(user);

//passing array as an arguement
const arr  = new Array(1,2,3,4,5,6);
console.log(arr);

function handleArray(anyArray){
    return anyArray[0];
};
console.log(handleArray(arr));

