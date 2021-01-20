function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
       let myArray = JSON.parse(input); 
       const lengthOfArr= myArray.length;

          for (let i = 0; i < lengthOfArr ; i++) {
               out = out + "row" + i + "\n";

                let lengthOfInArr = myArray[i].length;

          for(let j=0;  j < lengthOfInArr ; j++ ) {
               out = out +  myArray[i][j] + "\n" ;                    
               }
          }
 /**/
     output.innerText = out;
 }