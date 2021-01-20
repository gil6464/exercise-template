function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
     const newArray = JSON.parse(input);
     console.log(newArray);
     let reqArrIndex = document.getElementById("input2"); 
     let findArrIndex = Number(reqArrIndex);
     console.log(findArrIndex)
     console.log(newArray.indexOf(findArrIndex));
 /**/
     output.innerText = out;
 }