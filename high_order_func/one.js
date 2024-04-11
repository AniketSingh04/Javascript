const myNums = [1,2,3,4,5,6];

/*The filter() method of Array instances creates a shallow copy of 
a portion of a given array, filtered down to just the elements from 
the given array that pass the test implemented by the provided function.*/

// function callback_1(value){
//     if(value>1){
//         return value;
//     }
// }
// const result = myNums.filter(callback_1);
// console.log(result);

// console.log(myNums.filter((num) => num>4)); //impilcit return
// console.log(myNums.filter((num) => { //{} are used so use return
//     return num > 2;
// }));

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
     edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, 
    edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, 
    edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
     edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, 
    edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, 
    edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, 
    edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, 
    edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, 
    edition: 1989 },
  ];

  const userBooks = books.filter( (bk) => bk.genre=== "History");
  const userBooks2 = books.filter((bk) => bk.publish >=1999 );
  const userBooks3 = books.filter( (bk) => { 
        return bk.genre=="Non-Fiction" && bk.edition >= 2000;
  })
  console.log(userBooks3);
