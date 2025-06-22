//using multiple filter and maps

const arr = [1,2,3,4,5,6,7,8,9]
const numbers = arr.map((num) => num*10 )
.map ((num)=> num+1)
.map((num) => num+3)
.filter((num) => num>40)
.filter((num) => num<84)
console.log(numbers);
