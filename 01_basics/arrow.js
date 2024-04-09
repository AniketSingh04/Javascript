const user = {
    username : "arunima",
    age : 21,
    welcome :  function(){
        console.log(`${this.username}, logged in`); //this operator provides more flexibility
        //console.log(this);
    }
};

const user2 = {
    username: "mohit"
};
user.welcome(); // arunima logged in
user2.welcome = user.welcome; //this operator allows to access the username : mohit
user2.welcome(); //mohit logged in

console.log(this); // shows {}

function night(){
    console.log(this);
}
night();

// const night = function(){
//     let username = "aniket"
//     console.log(this.username);
// }
// night();

//arrow 
const night = () => {
    let username = "aniket"
    console.log(this.username);
}
night();

//arrow function 

//syntax : -  (parameters) => {}

const AddTwoNumbers = (num1, num2) => {
    return num1 + num2;
}
console.log(AddTwoNumbers(23,45));

//implicit return in arrow function; without using return
const MulTwoNum = (num1, num2) => (num1*num2);
console.log(MulTwoNum(34,6));

