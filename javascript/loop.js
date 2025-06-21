
//for loop
//1
for(let i=0; i<=10; i++){
    const num = i;
    console.log(num);
}

//print table of 1 to 10
//2
for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log(i + '*' + j + '='+ i*j)
    }
}

//3
let Arr = ["Harsh" , "Kumar", "Singh"]
 for(let i=0; i<Arr.length; i++){
    const value = Arr[i];
    console.log(value);
 }

//4
 let Arr2 = [1,2,3,4,5,6]
 for(let i=0;i<Arr2.length;i++){
    const arrValue = Arr2[i];
    console.log(arrValue);
 }

 While loop
 1
 let i = 0;
 while(i<=10){
    console.log(`${i}`);
    i++;
 }

 //While loop using array
 //2
 let Array = ["Harsh" , "Kumar", "Singh"]
  let i=0;
  while (i<Array.length) {
    console.log(`${Array[i]}`);
    i++
  }


  //Do while loop

//1
let val = 0;
do{
    console.log(`${val}`);
    val++
}
while(val<=10);


//do whaile using array
let arrval = ["H","a","r","s","h"]
let index = 0;
do {
    console.log(arrval[index])
    index++
} while (index<arrval.length);