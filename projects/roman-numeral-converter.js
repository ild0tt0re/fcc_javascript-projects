/** JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter */

const romanSymbolsValue = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}

function convertToRoman(num) {
  let romanOutput = ''
  for (let romanSymbol in romanSymbolsValue) {
    while (num >= romanSymbolsValue[romanSymbol]) {
      romanOutput += romanSymbol
      num -= romanSymbolsValue[romanSymbol]
    }
  }
  return romanOutput
}

convertToRoman(36)
