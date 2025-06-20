
//call my name
function sayMyName(){
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");   
}
sayMyName();

//add two numbers
function addTwoNums(numa,numb){
    console.log(numa+numb)
}
addTwoNums(5,3)

                //OR

function addTwoNumber(number1, number2){              //lenghty way
    let result = number1 + number2
    return result
}
const result = addTwoNumber(5,3)
console.log(result);


                //OR

function addTwoNum (num1,num2){               //best small way
    return num1+num2
}
console.log(addTwoNum(5,3));


//call username
function sayUsername(username){
    return username
}
console.log(sayUsername("Harsh Singh"));



//if argument is not fixed like cart of shopping app
function addCartPrice(...numall){
    return numall
}
console.log(addCartPrice(100,200,300,400,500));
//now it will convert the arguments in array, add all arrays 