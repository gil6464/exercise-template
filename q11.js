function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
     const myArr = (input);
     Array.from(myArr);
     let goodValues = myArr.filter(myArr=> true)
              out = goodValues
 /**/
     output.innerText = "[" + out + "]";
}