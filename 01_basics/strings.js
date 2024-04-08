// const name = "aniket"
// const repoCount = "50"

// //console.log(name + repoCount);  //outdated practice

// console.log(`Hello My name is ${name} and my repoCount is ${repoCount}`); // ` -> backticks

//string declarartion type using 'new'
const gameName = new String('SubwaySurfers')
// console.log(gameName);
// console.log(gameName[0]);
// console.log(`at ${1} index , value is - ${gameName[1]}`);
// console.log(gameName.__proto__);

// console.log(`Length of gameName - ${gameName.length}`);
// console.log(`LowerCase - ${gameName.toUpperCase()}`);
// console.log(`UpperCase - ${gameName.toUpperCase()}`);
// console.log(`Char at ${6} - ${gameName.charAt(6)}`);
// console.log(`Index of ${'w'} - ${gameName.indexOf('w')}`);

//substr() and slice() both are used to extract a section of a string
// const str2 = gameName.substring(2,5)
// console.log(str2);

// const str3 = gameName.slice(2,5) // used widely in most envt
// console.log(str3);

// const str4 = "    aniket    "
// console.log(str4.trim());  //removes leading trailing white spaces

// const url = "https://aniket.com//aniketraj%20singhsingh"
// console.log(url.replace('%20','-')); //normally used for replace
// console.log(url.includes('aniket'));
// console.log(url.includes('aehe'));

const str = 'Aniket is placed at DELL with 16 Lakh CTC ';
const words = str.split(' ');
console.log(words[3]); //words is an array of substrings separated by ' '

const chars = str.split('');
console.log(chars[8]); 

const strCopy = str.split();
console.log(strCopy); //no parameter given so whole strings becomes a single element of array







