function run() {
     const input = document.getElementById("input").value;
     const input2 = document.getElementById("input2").value;
     const output = document.getElementById("output");
     let out = '';
 /**/
     // write your code here
     const array = eval(input2);
     let list = [];
     
     for (i = 0; i < array.length; i++){
         list.push(array[i][input])
         console.log(list);
     }

     out = list;

 /**/
     output.innerText = out;
    }
