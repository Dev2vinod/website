/* const numberOfChar = document.querySelector('#numberOfCharacter');
let charactersLength = numberOfChar.value;

const display = document.querySelector('.display-password');

const generateBtn = document.querySelector('.generate-pass');

const upperCase = document.querySelector('#upperCaseChar');
const lowerCase = document.querySelector('#lowerCaseChar');
const specialChar = document.querySelector('#specialChar');
const numbers = document.querySelector('#numbers');

const UPPERCASE = arrayFromLowToHigh(65, 90);
const LOWERCASE = arrayFromLowToHigh(97, 122);
const SPECIALCHAR = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));
const NUMBERS = arrayFromLowToHigh(48, 57);


generateBtn.addEventListener('click', () => {
    const numberOfChar = document.querySelector('#numberOfCharacter');
    let charactersLength = numberOfChar.value;

    const characters = generatecharacters(charactersLength, upperCase.checked, lowerCase.checked, specialChar.checked, numbers.checked);

    display.textContent = characters;

});

function generatecharacters(charactersLength, upperCase, lowerCase, specialChar, numbers) {
    let characters = [];

    if (upperCase) {
        characters = characters.concat(UPPERCASE);
    }

    if (lowerCase) {
        characters = characters.concat(LOWERCASE);
    }

    if (specialChar) {
        characters = characters.concat(SPECIALCHAR);
    }

    if (numbers) {
        characters = characters.concat(NUMBERS);
    }

    const generatedPassword = [];
    for (let i = 0; i < charactersLength; i++) {
        const password = characters[Math.floor(Math.random() * characters.length)];
        generatedPassword.push(String.fromCharCode(password));
    }

    return generatedPassword.join('');
}

function arrayFromLowToHigh (low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }

    return array;
}


// Selectors
const numberOfChar = document.querySelector('#numberOfCharacter');
const copyIcon = document.querySelector('svg');
const display = document.querySelector('.display-password');
const generateBtn = document.querySelector('.generate-pass');
const upperCase = document.querySelector('#upperCaseChar');
const lowerCase = document.querySelector('#lowerCaseChar');
const specialChar = document.querySelector('#specialChar');
const numbers = document.querySelector('#numbers');

// Character sets
const UPPERCASE = arrayFromLowToHigh(65, 90);
const LOWERCASE = arrayFromLowToHigh(97, 122);
const SPECIALCHAR = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));
const NUMBERS = arrayFromLowToHigh(48, 57);

// Event Listener
generateBtn.addEventListener('click', () => {
    const charactersLength = numberOfChar.value;
    
    // Validate characters length
    if (charactersLength > 20) {
        display.textContent = 'Length should not exceed 20 characters';
        setTimeout(() => {
            display.textContent = '';
        }, 2500);
        return;
    }

    if (charactersLength < 8) {
        display.textContent = 'Length should not be less then 8 characters';
        setTimeout(() => {
            display.textContent = '';
        }, 2500);
        return;
    }

    const characters = generatecharacters(charactersLength, upperCase.checked, lowerCase.checked, specialChar.checked, numbers.checked);
    
    if (characters === 'no field is selected') {
        setTimeout(() => {
            display.textContent = '';
            
        }, 2000);
    } else {
        display.textContent = characters;
    }
});

copyIcon.addEventListener('click', copyText);


// Function to generate characters
function generatecharacters(charactersLength, upperCase, lowerCase, specialChar, numbers) {
    let characters = [];
    
    if (upperCase || lowerCase || specialChar || numbers) {
        if (upperCase) characters = characters.concat(UPPERCASE);
        if (lowerCase) characters = characters.concat(LOWERCASE);
        if (specialChar) characters = characters.concat(SPECIALCHAR);
        if (numbers) characters = characters.concat(NUMBERS);
        
        const generatedPassword = [];
        for (let i = 0; i < charactersLength; i++) {
            const password = characters[Math.floor(Math.random() * characters.length)];
            console.log(password);
            generatedPassword.push(String.fromCharCode(password));
        }
        
        return generatedPassword.join('');
    }
    
    return display.textContent = 'no field is selected';
}

// Function to create an array of character codes from low to high
function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function copyText() {
    // Create a range and select the text
    const range = document.createRange();
    range.selectNode(display);

    // Clear any existing selection
    window.getSelection().removeAllRanges();

    // Add the new selection
    window.getSelection().addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Clear the selection
    window.getSelection().removeAllRanges();

    alert(`Copied text: ${display.textContent}`);
} */

// SELECTORS
const display = document.querySelector('.display-password');
const copyToClipboard = document.querySelector('svg');
const generateBtn = document.querySelector('.generate-pass');
const numberOfChar = document.querySelector('#numberOfCharacter');
const includeUpperCase = document.querySelector('#upperCaseChar');
const includeLowerCase = document.querySelector('#lowerCaseChar');
const includeSpecialChar = document.querySelector('#specialChar');
const includeNumbers = document.querySelector('#numbers');

// EVENTLISTNER FOR COPY GENERATED PASSWORD
copyToClipboard.addEventListener('click', copyText);

// EVENTLISTNER FOR GENRATE PASSSWORD BUTTON
generateBtn.addEventListener('click', () => {
    const length = numberOfChar.value;

    const password = generatePassword (length, includeLowerCase.checked, includeUpperCase.checked, includeNumbers.checked, includeSpecialChar.checked);

    if (password === 'at least one charset is seleted') {
        display.textContent = password;
        
        setTimeout(() => {
            display.textContent = '';
        }, 2000);
    }

    display.textContent = password;
});

// EVENTLISTNER FOR RANGE INPUT
numberOfChar.addEventListener('input', () => {
    const length = numberOfChar.value;

    document.querySelector('input[type="text"]').value = length;

    const password = generatePassword (length, includeLowerCase.checked, includeUpperCase.checked, includeNumbers.checked, includeSpecialChar.checked);

    if (password === 'at least one charset is seleted') {
        display.textContent = password;
        
        setTimeout(() => {
            display.textContent = '';
        }, 2000);
    }

    display.textContent = password;
});



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

        for (let i = 0; i < length; i++) {
            const randomChar = Math.floor(Math.random() * allowedCharset.length);
            passcode += allowedCharset[randomChar];
        }    
        return passcode;
    }
    return 'at least one charset is seleted';
}

// COPY TO CLIPBOARD FUNCTION
function copyText() {
    // Create a range and select the text
    const range = document.createRange();
    range.selectNode(display);

    // Clear any existing selection
    window.getSelection().removeAllRanges();

    // Add the new selection
    window.getSelection().addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Clear the selection
    window.getSelection().removeAllRanges();

    alert(`Copied text: ${display.textContent}`);
}