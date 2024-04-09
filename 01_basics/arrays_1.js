// arays

//array declaration 
const arr1 = [1,2,3,4,true,"aniket",123.45]
const arr2 = [1,2,3,4,5]
const arr3 = new Array(1,2,3,4,566)

console.table([arr1,arr2,arr3]);
console.log(arr1,arr2,arr3);

console.log(arr1[5]);

// array methods
let myArr = new Array(0,1,2,3,4,5)
console.log(myArr);

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()

myArr.unshift(3,4,5)   // add elements at starting of array
console.log(myArr);
myArr.shift() //pops the first element  from array

console.log(myArr.includes(5));
console.log(myArr.includes(10));

console.log(myArr.indexOf(3)); // index of 3 is 3 in array
console.log(myArr.indexOf(23)); // -1 as 23 isnt in the array

const newArr = myArr.join(); //adds all elements of an rray into strings, separarted by the specified separator
console.log(newArr);
console.log(myArr.join(''));
console.log(myArr.join('-'));
console.log(typeof(newArr));

//slice and splice
console.log('A ', myArr);


const narr1 = myArr.slice(1,3) //creates a shallow copy
console.log(narr1);
console.log('B ', myArr);

const narr2 = myArr.splice(1,3) //manipulates the original array by replacing or removing the elements
console.log(narr2);
console.log('C ', myArr);




