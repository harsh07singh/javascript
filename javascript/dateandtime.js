let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);


let myDate2 = new Date(2023,0,15)
console.log(myDate2.toDateString());

let myDate3 = new Date(2023,0,15,13,3,12)
console.log(myDate3.toLocaleString());

let myDate4 = Date.now()
console.log(myDate4);                 //output is given in miliseconds

console.log(Math.floor(Date.now()/1000));     //output is given in seconds

let newDate5 = new Date(2023,4,25)
console.log(newDate5.getMonth());
console.log(newDate5.getDate());
console.log(newDate5.getFullYear());

console.log(`The date is ${newDate5.getDate()}, month is ${newDate5.getMonth()} and year is ${newDate5.getFullYear()}.`)


// For printing week day name  
console.log(newDate5.toLocaleString('Default',{                    
      weekday : "long"
}))








