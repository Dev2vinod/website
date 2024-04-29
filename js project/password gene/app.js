
var display =document.querySelector(".display-password");
var copyIcon =document.querySelector(".copy-icon");
var includeLowerCase =document.querySelector("#lowerCaseChar");
var numberOfChar =document.querySelector("#numberOfCharacter");
var includeUpperCase =document.querySelector("#upperCaseChar");
var includeSpecialChar =document.querySelector("#specialChar");
var includeNumbers =document.querySelector("#numbers");
var generateBtn =document.querySelector(".generate-pass");

// copy to clipboard or copy the generate code

copyIcon.addEventListener("click",copyText);
// window.addEventListener("click",copyText)
// calling the genetrate password btn

generateBtn.addEventListener("click",()=>{
    const length =numberOfChar.value

    
    const password = generatePassword (length, includeLowerCase.checked, includeUpperCase.checked, includeNumbers.checked, includeSpecialChar.checked);
    
    console.log(password)

    if (password === 'at least one charset is seleted') {
        display.textContent = password;
        console.log(password,"inside the if lop")
        setTimeout(() => {
            display.textContent = '';
        }, 2000);
    }

    display.textContent = password;
})




// GENERATE PASSWORD FUNCTION
function generatePassword (length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialChar) {
    
    if (includeLowerCase || includeUpperCase || includeNumbers || includeSpecialChar) {
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const upperCase = 'ABCDEFGHIJKLMNOPQRTUVWXYZ';
        const numbers = '0123456789';
        const specialChar = '`!@#$%^&*()_-[]{}<>';
    
        let allowedCharset = '';
        let passcode = '';

        allowedCharset += includeLowerCase ? lowerCase : '';
        allowedCharset += includeUpperCase ? upperCase : '';
        allowedCharset += includeNumbers ? numbers : '';
        allowedCharset += includeSpecialChar ? specialChar : '';
        console.log(allowedCharset,"allow char set")
        for (let i = 0; i < length; i++) {
            const randomChar = Math.floor(Math.random() * allowedCharset.length);
            console.log(randomChar,"random char")
            passcode += allowedCharset[randomChar];
            console.log(passcode,"im passcode",i)
        }    
        return passcode;
    }
    console.log('inside the gnr btn if loop' )
    return 'at least one charset is seleted';
}

// EVENTLISTNER FOR RANGE INPUT how the range input vary
numberOfChar.addEventListener('input', () => {
    const length = numberOfChar.value;

    document.querySelector('input[type="text"]').value = length;
console.log(length,"value of range")
    const password = generatePassword (length, includeLowerCase.checked, includeUpperCase.checked, includeNumbers.checked, includeSpecialChar.checked);

    if (password === 'at least one charset is seleted') {
        display.textContent = password;
        
        setTimeout(() => {
            display.textContent = '';
        }, 2000);
    }

    display.textContent = password;
});


// COPY TO CLIPBOARD FUNCTION
function copyText() {
    // Create a range and select the text
    const range = document.createRange();
    range.selectNode(display);
    console.log(range,"iam range")

    // Clear any existing selection
    window.getSelection().removeAllRanges();

    // Add the new selection
    window.getSelection().addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Clear the selection
    window.getSelection().removeAllRanges();

    // alert(`Copied text: ${display.textContent}`);

    Swal.fire({
        title: "Your Password ",
        text: `Copy text : ${display.textContent}`,
        icon: "success"
      });
}



