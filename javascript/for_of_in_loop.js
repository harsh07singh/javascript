//forof loop can be used in array and string and map but not object **

// for (const element of object) {
//                                                //syntax of forof loop 
// }

//1
//forof loop in array
const Arr = [1,2,3,4,5,6,"apple","banana"]
for (const num of Arr) {
    console.log(num);
}

//forof loop in string
const str = "Harsh singh"
for (const value of str) {
    console.log(value);
}


//forin loop can be used in object and array and string not in map

//forin loop in object
const object = {
    name : "harsh singh",
    age : 21,
    email : "singh@gmail.com",
}
for (const key in object) {
    console.log(object[key]);
           //or
   console.log(`the key is ${key}, and the object is ${object[key]}`);
}

//forin loop in array
const arr1 = [1,2,3,4,5,"apple","boy"]
for (const key in arr1) {
    console.log(arr1[key]);
    
}

//forin loop in string
const strval = "Harsh Singh"
for (const key in strval) {
   console.log(strval[key]);
   
}