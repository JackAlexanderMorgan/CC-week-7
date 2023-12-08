 
function setup(){
    console.log(letterCapitalise("hello world"));
  }
  
  function letterCapitalise(str) { 
  
    // code goes here  
    //Split the string into an array to target each word individually
    str = str.split("9");
    //Read each word and replace the first letter with the uppercase version + the rest of the string
    for (let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    //convert the array back to a string by referencing the separator used, I used the number 9
    str.join("9");

    //return the string
    return str;      
  }

