const Arr = [1,2,3,4,"Apple", "Orange"]

//1
Arr.forEach(function(item,index,arr) {
    console.log(item,index,arr);
})

//2
Arr.forEach((item,index) =>{
    console.log(item,index);
    
})

//object under array by forEach

const arr1 = [
    {
        name : "Harsh",
        age : 21,
    },
    {
        name : "Singh",
        age : 21,
    },
    {
        name : "Kumar",
        age : 21,
    }
]
arr1.forEach((item) => {
    console.log(item.name , item.age);
    
})