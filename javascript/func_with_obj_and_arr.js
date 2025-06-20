// function with object

const user = {
    username : "Harsh",
    price : 1000,
    email : "harsh@gmail.com"  
}

function handleObj(anyobject){
      return anyobject
}
console.log(handleObj(user));

           //OR

const newUser ={
     usernamee : "Singh",
     pricee : 500,
     emailid : "singh@gmail.com"
}

function handleObject(newobject){
    console.log(`Your name is ${newobject.usernamee}, the price of the product is ${newobject.pricee} and your email id is ${newobject.emailid}`);
}
handleObject(newUser)



//Function with array

const Arr = [100,200,300,400,500,600]

function handleArr(anyArray){
    return anyArray
}
console.log(handleArr(Arr));
