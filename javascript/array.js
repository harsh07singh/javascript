let Arr = [1 , 2 , 3 , 4 , 5 , 6];
// console.log(Arr);

// push, pop, unshift, shift, include, indexOf

//pop element
let newArr = Arr.pop()
console.log(newArr);
console.log(Arr)


//push element
Arr.push(9)
console.log(Arr)


//unshift element    add given array to first of array
Arr.unshift(5)
console.log(Arr);


//shift element       remove first array
Arr.shift(5)
console.log(Arr);


//include or not?
console.log(Arr.includes(11));
console.log(Arr.includes(3));

//Check index position and number index
console.log(Arr.indexOf(3));



//Slice array
let Arr2 = [1,2,3,4,5,6];
const newArr2 = Arr2.slice(1,3)
console.log(newArr2);
console.log(Arr2);

//splice array
let Arr3 = [1,2,3,4,5,6];
const newArr3 = Arr3.splice(1,3)
console.log(newArr3);
console.log(Arr3);



