// Code your solutions in this file
function writeCards (name, event){
    let  emptyArray = [];
    for(let i=0; i<name.length; i++){
        emptyArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
     }
     return emptyArray;
 }
 let number = 10;
 function countDown(number){
     while(number > 0){
         console.log(number);
         number -=1;
     }
     console.log(number);
 } 