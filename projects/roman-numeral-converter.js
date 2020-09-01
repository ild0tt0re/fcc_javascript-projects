/** JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter */

/*
1. [] check valid number 
2. [] split number by digits
3. [] 
*/

var romanSymbols = [
    {value: 1, symbol: 'I'},
    {value: 5, symbol: 'V'},
    {value: 10, symbol: 'X'},
    {value: 50, symbol: 'L'},
    {value: 100, symbol: 'C'},
    {value: 500, symbol: 'D'},
    {value: 1000, symbol: 'M'}
];


function splitNumberByDigitsAndMultiply(n) {
    var a1 = String(n).split('').reverse();
    var a2 = a1.map((digit, i) => {
        var multiplierByDigit = 10**i;
        if (multiplierByDigit > 0){
            return digit * multiplierByDigit;
        }

        return digit;
    });

    return a2.reverse();
}

function convertDigitToSymbol(n) {

}

function main(n) {
    var a = splitNumberByDigitsAndMultiply(n);
    console.log(a)
    convertDigitToSymbol(a);

}

main(547);