
// //        Object Literals

const JsUser ={
    name :"Harsh",
    age :21,
    location :"Asansol",
    email :"harsh@gmail.com",
    "fullname" :"HarshKumar"
}
console.log(JsUser.name);
console.log(JsUser.email);
console.log(JsUser["fullname"]);     //use sqr backet for string

JsUser.email = "singh@gmail.com"      //we can change the value directly
console.log(JsUser.email);

// Object.freeze(JsUser)                      //Avoid change in value
// JsUser.email = "singhharsh@gmail.com"
// console.log(JsUser.email);

// //for symbol
const mySum = Symbol("key1")
const JsUser2 = {
    [mySum] : "myKey1"
}
console.log(JsUser2[mySum]);


//Function()

JsUser.greeting = function(){
     console.log(`Hello Js User, ${this.name} your gmail address is ${this.email}`);   
}
console.log(JsUser.greeting());


