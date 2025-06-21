//if and else
const value = 100
if(value>50){
    console.log("True"); 
}
else{
    console.log("False");
}

//2
const score = 1000
if(score>500){
    let eligible = "Pass"
    console.log(eligible);
}
else{
    console.log("FAIL");
}


//Nested Condition
const number = 1000
if(number < 300){
    console.log("Less")
}
else if(number < 600){
    console.log("Less")
}
else if(number < 999){
    console.log("Less")
}
else{
    console.log("Greater")
}

//Multiple condition
const userLoggedIn = true
const haveDebitCard = true
if(userLoggedIn && haveDebitCard){             //&& use for multiple condition check
    console.log("Welcome");  
}
else{
    console.log("Sorry");  
}

//if one true
const userLoggedInn = true
const haveDebitCardd = false
if(userLoggedInn || haveDebitCardd){             // || use for single condition is true or not
    console.log("Welcome");  
}
else{
    console.log("Sorry");  
}


//check lenght of object value

const empObj={1:'a' , 2:'b'}
if(Object.keys(empObj).length===0){
    console.log("Object is empty");
}
else{
    console.log("Object is not Empty");
}

