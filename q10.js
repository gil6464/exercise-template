function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
     const myArr = JSON.parse(input);
     const firstArr = myArr[0];
      firstArr.sort();

     const secondArr = myArr[1];
      secondArr.sort();

     const bothArr = firstArr.concat(secondArr);
      out = [...new Set(bothArr)];


          
 
 /**/
     output.innerText = "[" + out + "]";
 }