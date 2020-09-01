/** JavaScript Algorithms and Data Structures Projects: Palindrome Checker */

function cleanString(str) {
    const strNoSpaces = str.replace(/\s+/g, '');
    const strNoPunctuation = strNoSpaces.replace(/[^0-9a-zA-Z]/g, '');
    const strInLowerCase = strNoPunctuation.toLowerCase();
  
    return strInLowerCase;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}


function palindrome(str) {
const cleanedString = cleanString(str);
const reversedStr = reverseString(cleanedString);

if (cleanedString === reversedStr) {
    return true;  
}

return false;
}

palindrome("2A3*3a2");