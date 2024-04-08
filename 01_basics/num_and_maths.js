const score = 500
console.log(score);

const newNum = new Number(4000)
console.log(newNum);

console.log(`String - ${newNum.toString()}`);
console.log(newNum.toFixed(2));

let num2 = 4001.5
console.log(num2.toPrecision(3));

const US = 12358903
console.log(US.toLocaleString()); //US locale by default

const Ind = 12358903
console.log(Ind.toLocaleString('en-IN')); //using Indian loacle 


//+++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++
console.log(Math);

console.log(Math.abs(-345));
console.table([Math.round(4.45),Math.round(5.4),Math.round(6.94)]);
console.log(Math.random());  //between 0 and 1
console.log(Math.random()*10); //between 0 and 10
console.log((Math.random()*10) + 1); //between 1 and 10




