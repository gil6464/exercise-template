function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
       const myArr = (document.getElementById("input2").value).split(",");
       const untilNum = Number(input);
       const newList = myArr.slice(0 , untilNum);
       
        console.log(newList);
            
     // out = input + 5;
 
 /**/
     // output.innerText = out;
 }