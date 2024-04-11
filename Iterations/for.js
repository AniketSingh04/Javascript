//for loop

// for (let index = 0; index <= 10; index++) {
//     let element = index;
//     console.log(element);
// }

// let arr = new Array(1,2,3,4,5,6,)
// for (let index = 0; index < arr.length; index++) {
//     arr[index] += 2;
//     console.log(arr[index]); 
// }
// console.log(arr);

//break and continue
console.log(`break statement`);
for (let index = 0; index <10; index++) {
    if(index === 5){
        console.log(`5 detected`);
        break; // for loop will be terminated when index === 5
    }
    console.log(`Value of index - ${index}`);
}

console.log(`continue statement`);

for (let index = 0; index <10; index++) {
    if(index === 5){
        console.log(`5 detected`);
        continue;  //for loop will continue when index === 5, i.e. itll skip that and go to next
    }
    console.log(`Value of index - ${index}`);
}
