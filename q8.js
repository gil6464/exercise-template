function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
     // bounus qwestion, didnt solve until the end, also need more input so i used the second one.
     const newArray = JSON.parse(input);
     let reqArrIndex = document.getElementById("input2"); 
     let findArrIndex = Number(reqArrIndex);
     console.log(newArray.indexOf(findArrIndex));
     
     
 /**/
     output.innerText = out;
 }