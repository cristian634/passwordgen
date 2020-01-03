var generateButton = document.querySelector("#genPass");
var copyButton = document.querySelector("#copyToClip");
var textArea = document.querySelector("#changingText");
var newPass = "";

//copy to clip board requries textArea instead of a changing <p> 
// function toClipBoard(){
//     //get the text field and size 
//     copySize = document.querySelector("#changingText").length;
//     console.log(copySize);
//     copyText = document.getElementById("changingText");
//     copyText.select();
//     copyText.setSelectionRange(0, 18);

//     //copy command
//     document.execCommand("copy");
// }

function generatePassword(){
    //define booleans based on user input
    var specialChar  = confirm("Would you like to include special charactesr? (!, @, #, etc..");
    var upperCase = confirm("Would you like to conclude upcase letters?")
    var numbers = confirm("Would you like to include numbers?");
    var passLength = prompt('How many characters should your passowrd be? (8-128 characers)').trim();
    //Arrays of possible characters to use in the passsword
    var charSet1 = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var charSet2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var charSet3 = '1234567890'.split('');
    var charSet4 = '!@#$%^&*()_+-='.split('');
    var passArray = [];
    
    // pull a random character from the new array generated from user selection
    function randomCharacter(){
        for (i = 0; i < passLength; i++){
            randElement = Math.floor(Math.random()*passArray.length);
            randChar = passArray[randElement];
            newPass = newPass.concat(randChar);

            console.log(randElement);
            console.log(randChar);
        };
        console.log(newPass);

    }

    //determine user selection
    if (isNaN(passLength) || passLength < 8 || passLength > 128 || passLength===''){
        alert("Invalid input")
        generatePassword();
    }
    else if (specialChar && upperCase && numbers){

        passArray = [...charSet1, ...charSet2, ...charSet3, ...charSet4];
        randomCharacter();
        
    }
    else if (numbers && specialChar){
        passArray = [...charSet1, ...charSet3, ...charSet4 ];
        randomCharacter();
    }
    else if(specialChar && upperCase){
        passArray = [...charSet1, ...charSet4, ...charSet2];
        randomCharacter();
    }
    else if(upperCase && numbers){
        passArray = [...charSet1, ...charSet2, ...charSet3];
        randomCharacter();
    }
    else if(specialChar){
        passArray = [...charSet1, ...charSet4];
        randomCharacter();
    }
    else if(numbers){
        passArray = [...charSet1, ...charSet3];
        randomCharacter();

    }
    else if(upperCase){
        passArray = [...charSet1, ...charSet2];
        randomCharacter();
    }
    else{
        passArray = [...charSet1];
        randomCharacter();
    }
}

//button click to generate a new passowrd
generateButton.addEventListener('click', function(event){
    newPass = "";
    event.preventDefault();
    generatePassword();
    // document.getElementById("copyToClip").disabled = false; //enable copy button
    textArea.textContent = newPass;
})

//button click to copy to clip booard 
copyButton.addEventListener('click', function(event){
    event.preventDefault();
    toClipBoard();
    alert("Copied new password to clipboard");
})