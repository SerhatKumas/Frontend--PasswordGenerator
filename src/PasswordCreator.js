let lengthOfPassword = 0;
let numberOfSpecialCase = 0;
let numberOfUpperCase = 0;
let numberOfNumberChar = 0;
let numberOfLowerCase = 0;
let newPassword = "";
let counter = 0;

function generatePassword() {
    lengthOfPassword = document.getElementById("text-length").value;
    //If determiner boxex are checked assignments are done
    if (document.getElementById("special-case").checked) {
        numberOfSpecialCase = Number(document.getElementById("special-case-length").value);
    }
    if (document.getElementById("upper-case").checked) {
        numberOfUpperCase = Number(document.getElementById("upper-case-length").value);
    }
    if (document.getElementById("number-char").checked) {
        numberOfNumberChar = Number(document.getElementById("number-char-length").value);
    }

    numberOfLowerCase = lengthOfPassword - (numberOfNumberChar + numberOfSpecialCase + numberOfUpperCase);
    //Control of whether total of other requested cases number are greater than requested password length
    if ((numberOfNumberChar + numberOfSpecialCase + numberOfUpperCase) <= lengthOfPassword) {
        while (counter < lengthOfPassword) {
            //Chosing random number to determine which type of char will be added next, special,number,upper or lower case
            let randomDecider = Math.floor(Math.random() * 4)
            if (randomDecider == 0 && numberOfUpperCase != 0) {
                newPassword += createUpperCase();
                --numberOfUpperCase;
                counter++;
            } else if (randomDecider == 1 && numberOfSpecialCase != 0) {
                newPassword += createSpecialCase();
                --numberOfSpecialCase;
                counter++;
            } else if (randomDecider == 2 && numberOfNumberChar != 0) {
                newPassword += createNumberChar();
                --numberOfNumberChar;
                counter++;
            } else if (randomDecider == 3 && numberOfLowerCase != 0) {
                newPassword += createLowerCase();
                --numberOfLowerCase;
                counter++;
            }
        }
        printResult();
    } else {
        //If there is invalid choice of total number, we reset everthing to start over
        alert("Number of requested password characters are not valid");
        numberOfSpecialCase = 0;
        numberOfUpperCase = 0;
        numberOfNumberChar = 0;
        numberOfLowerCase = 0;
    }
}

//Random special case chooser with ascii codes 33-47
function createSpecialCase() {
    let randomChar = String.fromCharCode((Math.floor(Math.random() * (15) + 33)));
    return randomChar;
}


//Random upper case chooser with ascii codes 65-90
function createUpperCase() {
    let randomChar = String.fromCharCode((Math.floor(Math.random() * (26) + 65)));
    return randomChar;
}


//Random lower case chooser with ascii codes 97-122
function createLowerCase() {
    let randomChar = String.fromCharCode((Math.floor(Math.random() * (26) + 97)));
    return randomChar;
}


//Random number char chooser with ascii codes 48-57
function createNumberChar() {
    let randomChar = String.fromCharCode((Math.floor(Math.random() * (10) + 48)));
    return randomChar;
}


//Printing generated password into screen
function printResult() {
    let resulter = document.getElementById("generated-password");
    console.log(newPassword);
    resulter.innerHTML = newPassword;
    newPassword = "";
    counter = 0;
}