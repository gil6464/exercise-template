function run() {
     const input = document.getElementById("input").value;
     const input2 = document.getElementById("input2").value;
     const output = document.getElementById("output");
     let out = '';
 /**/
     // write your code here
     const array = eval(input2);
     let list = [];
     
     for (prop of array) {
         list.push(prop[input])
     };
         out = list;
         output.innerText = out;
};
 /**/
