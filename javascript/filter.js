//filter method

//using array

const arr = [1,2,3,4,5,6,7,8,9,10]
const number = arr.filter((num) => num>5)
console.log(number);

//using object under array

const obj = [{
    fruitName : "Apple",
    colour : "Red",
    quantity : 50,
},
{
    fruitName : "Orange",
    colour : "Red",
    quantity : 50,
},
{
    fruitName : "Banana",
    colour : "Red",
    quantity : 50,
},
{
    fruitName : "Mango",
    colour : "Red",
    quantity : 50,
}]

const object = obj.filter((fruit) => fruit.fruitName ==="Apple")
let clr = obj.filter((fruitClr)=> fruitClr.quantity>30)
console.log(object);
console.log(clr);


//using map , foreach, 

const value = [1,2,3,4,5,6,7,8,9]

const result1 = value.map((num) =>num+5)
const result2 = value.map((num) => num>=5)
console.log(result1 , result2);


//using filter
const result3 = value.filter((num) => num>5)
console.log(result3)

//using forEach
const check  = [1,2,3,4,5,6,7,8,9]
check.forEach ( (number) => {
    console.log(number);
})
