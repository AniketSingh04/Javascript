const num = [1,2,3,4,5,6,7,8,9,10];

/*The map() method of Array instances creates a new 
array populated with the results of calling 
a provided function on every element in the calling array.*/

const result = num.map( (item_of_num) => item_of_num*2);

//chaining
const newNum = num.map((item_of_num) => item_of_num *10 ) //1 -[10,20,..100]
                .map( (item_of_num) => item_of_num + 5 ) //2; values from 1 passed to 2 - [15,25,...105]
                .filter( (item_of_num) => item_of_num > 45 ) ;//3; values from 2 passed to 3 - [55,65,...105]
console.log(newNum);

