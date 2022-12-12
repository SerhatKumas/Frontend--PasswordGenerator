let lengthOfPassword = 0;
let numberOfSpecialCase = 0;
let numberOfUpperCase = 0;
let numberOfNumberChar = 0;
let newPassword ="";

function generatePassword(){
    lengthOfPassword = document.getElementById("text-length").value;
    if(document.getElementById("special-case").checked){
        numberOfSpecialCase = document.getElementById("special-case-length").value;}
        if(document.getElementById("upper-case").checked){
    numberOfUpperCase = document.getElementById("upper-case-length").value;}
    if(document.getElementById("number-char").checked){
    numberOfNumberChar = document.getElementById("number-char-length").value;}
    
    for(i=0;i<lengthOfPassword;i++){
        let randomDecider = Math.floor(Math.random() * 4)
        if(randomDecider==0 && numberOfUpperCase!=0){
           newPassword+=createUpperCase();
        }
        else if(randomDecider==1 && numberOfSpecialCase!=0){
            newPassword+=createSpecialCase();
        }
        else if(randomDecider==2 && numberOfNumberChar!=0){
            newPassword+=createNumberChar();
        }
        else{
            newPassword+=createLowerCase();
        }
    }
    console.log(newPassword);
    newPassword="";
}

function createSpecialCase(){
    return "-";
}

function createUpperCase(){
    return "S";
}

function createLowerCase(){
    return "s";
}

function createNumberChar(){
    return "1";
}