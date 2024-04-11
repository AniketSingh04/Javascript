//for of

// ["",'','']
// [{},{},{}]

//forof
const myArr = [1,2,3,4,5]
// for (const num of myArr) {
//     console.log(num); 
// }

// const username = "aniketrajsingh";
// for (const char of username){
//     process.stdout.write(char + " ");
// }

//Maps
const map = new Map();
map.set(1,"aniet");
map.set(2,"arunima");
map.set(3,"mohit");
map.set(4,"madhavi");

// console.log(map);

// for (const key of map) {
//     console.log(key);
// } //gives key and value pair in array

// for (const [key, value] of map) {
//     console.log(key,value);
// } 

const user = {
    username : "Aniket",
    age : 21,
    gender : "male",
    isLoggedIn : "true"
};

// for (const [key, value] of user) {
//     console.log(key,value);
// } //cant iterate this object via forof

//forin
// for (const key in user) {
//    console.log(key);  //keys only
// }

// for (const key in user) {
//     console.log(key,"-", user[key]); //key,value
//  }

const arr = new Array("js", "python", "cpp", "kotlin", "swift");
// for (const lang in arr) {
//     //console.log(lang);
//     process.stdout.write(arr[lang] + " "); // all elements in same line
// }

//for each loop
// arr.forEach( function(language) {
//     console.log(language);
// })

// arr.forEach( (language) => language); //arrow function; impilicit return

// function printall(language){
//     console.log(language);
// }
// arr.forEach(printall); //just give the reference of that function

// arr.forEach((index, item, arr) => {
//     console.log(item, index, arr);
// })

const Obj_Lang = [
    {
        language: "C++",
        extension: "cpp"
    },
    {
        language: "javascript",
        extension: "js"
    }, 
    {
        language: "Python",
        extension: "py"
    }
];

// Obj_Lang.forEach( (item) =>{ //item represents every object
//     console.table([item.language, item.extension]);
// } )