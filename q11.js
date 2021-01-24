function run() {
     const input = document.getElementById("input").value;
     const output = document.getElementById("output");
     let out = "";
 
    //  write your code here
     let string =  input;
    
     needRemoveZero = string.slice(1, string.length - 1).split(', ');
    let goodValue = needRemoveZero.filter(needRemoveZero=> needRemoveZero !== "0");

    for (let i = 0; i < goodValue.length; i++) {
      
        if (goodValue[i] === '\'') {
            goodValue.splice(i, 1);
        }
        if (isNaN(Number(goodValue[i]))) {
            goodValue.splice(i, 1);
        }
    }
    
    out = goodValue
    /**/
    output.innerText = "[" + out + "]";
}


