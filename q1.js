function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    
        if (input[0] === "[" && input[input.length-1] === "]" ) {
             out = true;
        } else { 
             out = false;
        }
    // out = input + 5;

/**/
    output.innerText = out;
}