//Objects -02

// const Obj_a = new Object(); //singleton ;  empty
// const Obj_b = {}; //literal ; empty

// console.log(Obj_a);
// console.log(Obj_b);

const tinderUser = {};
tinderUser.id = "123dg";
tinderUser.name = "Aniket";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser ={
    email : "abc@gamil.com",
    fullname : {
        firstname: "aniket",
        middlename: "raj",
        lastname: "singh"
    },
}

// console.log(regularUser);
// console.log(regularUser.fullname.firstname);

const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'};
//const obj3 = {obj1,obj2}; //obj3 has obj1 and obj2 as elements
const obj3 = {...obj1, ...obj2}; //merging two objects
//const obj3 = Object.assign({},obj1,obj2); //merging two objects and returning as a new object
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //keys are shown in array
// console.log(Object.values(tinderUser)); //values are shown in array
// console.log(Object.entries(tinderUser)); //every element is shown in array
// console.log(tinderUser.hasOwnProperty('email')); //checks if the key is there in object

//++++++++++++++++++++++++++++++++ destructure and json api++++++++++++++++++++++++

const course =  {
    course_name : "backend dev",
    price : 1000,
    courseInstructor : "freecodecamp",
}

const {courseInstructor: instructor /*alias*/} = course;

console.log(instructor);


//json file
//both keys and values are strings in json
// {
//     "name" : "aniket raj singh",
//     "age" : 21,
//     "gender" : "male"
// };