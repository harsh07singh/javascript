const Arr1 = [1,2,3,4]
const Arr2 = [5,6,7,8]
const Arr3 = ["Harsh", "Kumar", "Singh"]
const Arr4 = ["Singh", "Kumar", "Harsh"]

//Concat
const newArr = Arr1.concat(Arr2)
console.log(newArr);

const newArr1 = Arr3.concat(Arr4)
console.log(newArr1);


//spred
const newArr2 = [...Arr1,...Arr2]
console.log(newArr2);

const newArr3 = [...Arr3, ...Arr4]
console.log(newArr3);


//flat
const Array2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const newArray = Array2.flat(Infinity)
console.log(newArray);


//Array.from
console.log(Array.from("HARSHSINGH"));


//Array.of
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
