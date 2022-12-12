let lengthOfPassword = 0;
let numberOfSpecialCase = 0;
let numberOfUpperCase = 0;
let numberOfNumberChar = 0;
let numberOfLowerCase = 0;
let newPassword ="";
let counter = 0;

function generatePassword(){
    lengthOfPassword = document.getElementById("text-length").value;
    if(document.getElementById("special-case").checked){
        numberOfSpecialCase = Number(document.getElementById("special-case-length").value);}
        if(document.getElementById("upper-case").checked){
    numberOfUpperCase = Number(document.getElementById("upper-case-length").value);}
    if(document.getElementById("number-char").checked){
    numberOfNumberChar = Number(document.getElementById("number-char-length").value);}

    numberOfLowerCase = lengthOfPassword - (numberOfNumberChar+numberOfSpecialCase+numberOfUpperCase);
    
    if((numberOfNumberChar+numberOfSpecialCase+numberOfUpperCase)<=lengthOfPassword){
        while(counter<lengthOfPassword){
            let randomDecider = Math.floor(Math.random() * 4)
            if(randomDecider==0 && numberOfUpperCase!=0){
               newPassword+=createUpperCase();
               --numberOfUpperCase;
               counter++;
            }
            else if(randomDecider==1 && numberOfSpecialCase!=0){
                newPassword+=createSpecialCase();
                --numberOfSpecialCase
                counter++;
            }
            else if(randomDecider==2 && numberOfNumberChar!=0){
                newPassword+=createNumberChar();
                --numberOfNumberChar
                counter++;
            }
            else if(randomDecider==3 && numberOfLowerCase!=0){
                newPassword+=createLowerCase();
                --numberOfLowerCase;
                counter++;
            }
        }
        printResult();
    }
    else{
        alert("Number of requested password characters are not valid");
    }
}

function createSpecialCase(){
   let randomChar = String.fromCharCode((Math.floor(Math.random() * (15) + 33)));
    return randomChar;
}

function createUpperCase(){
    let randomChar = String.fromCharCode((Math.floor(Math.random() * (26) + 65)));
    return randomChar;
}

function createLowerCase(){
    let randomChar = String.fromCharCode((Math.floor(Math.random() * (26) + 97)));
    return randomChar;
}

function createNumberChar(){
    let randomChar = String.fromCharCode((Math.floor(Math.random() * (10) + 48)));
    return randomChar;
}

function printResult(){ 
    let resulter = document.getElementById("generated-password");
    console.log(newPassword);
    resulter.innerHTML = newPassword;
    newPassword="";
    counter =0;
}