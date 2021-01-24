function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
        const numbersRange = JSON.parse(input);
        let leapYears = "";

        for (let i = numbersRange[0]; i <= numbersRange[1]; i++) {
          if(i % 4 === 0 && i % 100 !== 0 || 
             i % 400 === 0 && i % 100 ===0){
               leapYears += i + " , ";
            }
        };
          out = leapYears;
          output.innerText = out;
};
 
 /**/