//"use strict"; // Taste it and give a error!

primitiveWrapper();

function primitiveWrapper(){
    let str = "text";
    str.test = 3;
    console.log(str.test); 
}