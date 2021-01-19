"use strict"
function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
     const stringArr = input.split('');
     const numArr = stringArr.map(Number);

       for (let i = 0; i < numArr.length; i++) {
         if (numArr[i-1] % 2 === 0 && numArr[i] % 2 === 0) {
           numArr.splice(i, 0, '-');
         }
       }
       
       console.log(numArr.join(''));
     // out = input + 5;
 
 /**/
     // output.innerText = out;
 }