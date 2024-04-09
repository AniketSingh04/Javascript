//Objects -> object literals or Singleton


//both symbols have same keys but are uniquely identified
const mySym = Symbol('key1');
const mySym2 = Symbol('key1');

//object literal
const JsUser = {
    'name' : "aniket",
    mySym: "mykey1", //normal string 
    [mySym] : "mykey1", //symbol
    [mySym2]: "mykey2",//symbol
    age: 21,
    gender: "male",
    location: "Bangalore",
    email: "aniketrajsingh29@gmail.com",
    isLoggedIn : true
};

console.log(JsUser);
console.log(typeof(JsUser));
console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser['name']);

console.log(JsUser[mySym]); //accessing the value asscociated with symbol

JsUser['email'] = "rajsinghaniket054@gmail.com"
console.log(JsUser['email']);

Object.freeze(JsUser);  //freezes the object and hence no manipulation can be done
JsUser['email'] = "aniketrajsingh29@gmail.com"
console.log(JsUser['email']);

console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello aniket`);
}
console.log(JsUser.greeting);

JsUser.greeting2 = function(){
    console.log(`hello user, ${this['name']}`); //this operator allows to access anything inside the particular object it is used
}
console.log(JsUser.greeting2());


