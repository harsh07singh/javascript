//IIFE = Immediately Invoked Function Expression

//named IIFE
(function name(){
    console.log(`My name is`);
})();


//unnamed IIFE
(() => {
    console.log(`hello everyone`);
}) ();

((name) => {
    console.log(`Hello ${name}`);
}) ("Harsh");


