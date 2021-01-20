let myArray = [];
function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
       myArray.push(input)
       for(let i = 0; i<myArray.length; i++){
            out += "Element " + i + " = " + myArray[i] +"\n"
       }
     /**/
     output.innerText = out;
 }