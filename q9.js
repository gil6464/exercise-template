function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 /**/
     // write your code here
          const originArr = JSON.parse(input);
          out = [];
          originArr.sort();

          for (i = 0; i < originArr.length -1 ; i++) {
            if (originArr[i] === originArr[i+1] &&
                 originArr[i] !==originArr[i+2]) {

                 out.push(originArr[i])
            }
          };
          output.innerText = "Duplicate values : " + out ;
};
 /**/