const marvel_heroes = ['ironamn', 'thor', 'ghostrider'];
const dc_heroes = ['superman', 'batman', 'flash'];

marvel_heroes.push(dc_heroes); //pushes the array as an element
console.log(marvel_heroes);
console.log(marvel_heroes[3][2]);

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes); //both arrays are concatinated

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; //similar to merge two or more arrays
console.log(all_new_heroes);

const anotherArr = [1,2,3,[4,5,6],7,8,[9,10,11,2]];
const real_another_array = anotherArr.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("AniketRajSingh")); //checks if its an array
console.log(Array.from("AniketRajSingh")); //converts the string into an 

console.log(Array.of(100,200,"aniket","luffy")); //converts arguements into array
