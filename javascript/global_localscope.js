//Global and local scope

let a = 100                       //global scope
       if(true){
            let a = 10                   //local scope
            const b = 20                 //local scope
            console.log(a);     
       }
console.log(a);


let a1 = 100                       //global scope
       if(true){                
            const b = 20                 //local scope
            console.log(a);              //local console can access the global a
       }
console.log(a1);

   

    //function inside function

function name(){
    username = "Harsh"
    function name2(){
        website = "google"
        console.log(username)
    }
    // console.log(website);          //global cant access local 
    name2()
}
// name()


    //if inside if

    if(true){
        const username2 = "Singh"
        if(username2==="Singh"){
            website2 = "youtube"
            console.log(username2 + website2);
            
        }
        // console.log(website);         //global cant acess local scope
        
    }
    // console.log(username2);      // outside the scope isilie it will give a error mesg
    