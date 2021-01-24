function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
        const myNum = input;
        const numbersToArr = eval(myNum);
        
        const minToMax = numbersToArr.sort((x, y) => x - y);

       out = minToMax;
       output.innerText = out;
} ;
 /**/
