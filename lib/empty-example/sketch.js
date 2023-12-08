 
function setup(){
    console.log(letterCapitalise("hello world"));
  }
  
  function letterCapitalise(str) { 
  
    // code goes here  
    //Split the string into an array to target each word individually
    str = str.split("9");
    //Read each word and replace the first letter with the uppercase version by using the toUpperCase function and targeting the index of 0 
    //then + the rest of the non-captialised letters by using a substring with a start index of 1 (the second letter of the word)
    for (let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    //convert the array back to a string by referencing the separator used, I used the number 9
    str.join("9");

    //return the string
    return str;      
  }

