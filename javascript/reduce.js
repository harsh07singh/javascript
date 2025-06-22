// for syntax and eg1
const arr = [1,2,3,4,5]
const result = arr.reduce(function(acc , curr) {return acc+ curr},0)
console.log(result);

//arrow

const array = [1,2,3,4,5]
const value = array.reduce((acc , curr) => acc+curr , 0)
console.log(value);


//adding all amouunt in shopping cart

const productdetail = [
{
     product1 : "shirt",
     amount : 999
},
{
     product : "pant",
     amount : 800
},
{
     product : "gloves",
     amount : 200
},
{
     product : "cap",
     amount : 500
}]
const totalamount = productdetail.reduce((acc, curr) => acc + curr.amount ,0)
console.log(totalamount);


//adding sum of all product by first converting it into array

let product1 = 100
let product2 = 500 
let product3 = 400
let product4 = 600
const totalarray = Array.of(product1,product2,product3,product4);
console.log(totalarray);
const totalAmount = totalarray.reduce((acc , curr) => acc + curr , 0)
console.log(totalAmount);
