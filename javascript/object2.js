//object under object
const jsUser={
       age : "21",
       name :{
        fullname :{
            firstname : "Harsh",
            lastname : "Singh"
        }
       }
}
console.log(jsUser.name.fullname.firstname);

// Non singleton object
const tinderUser = {}
        tinderUser.id = "abc123"
        tinderUser.name = "Harsh"
        tinderUser.age = 21
  console.log(tinderUser);
  console.log(Object.keys(tinderUser));                  //give output in array
  console.log(Object.values(tinderUser));                 //give output in array
  console.log(Object.entries(tinderUser))                 //give output in array

  console.log(tinderUser.hasOwnProperty("age"));           
  console.log(tinderUser.hasOwnProperty("title"));          
  
  
//Combinig multiple objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const obj4 = Object.assign({}, obj1 , obj2 , obj3)   //spread is more better thn this method
console.log(obj4);


const objNew = {...obj1, ...obj2, ...obj3}       //spread method to combine objects
console.log(objNew);
