
// normal function 
// const addTwo = function(num1, num2){
//     return num1+num2
// }
// console.log(addTwo(5,2));

//Arrow function

const addTwo = (num1, num2) => {                         //explicit method
    return num1 + num2
}
console.log(addTwo(5,3));

const addThree = (num1 , num2, num3) => (num1 + num2 + num3)        //implicit method
console.log(addThree(2,3,5));

const addOne = (num) => num+1        
console.log(addOne(4))

