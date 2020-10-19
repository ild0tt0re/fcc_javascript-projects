/** JavaScript Algorithms and Data Structures Projects: Caesars Cipher */

function isOutFromCharCodeBound(charCode) {
  return charCode < 65 || charCode > 90
}

function rot13(str = '') {
  const encodedString = str.toUpperCase().split('')

  const decodedString = encodedString.map((char) => {
    let charCode = char.charCodeAt(0)
    if (isOutFromCharCodeBound(charCode)) return String.fromCharCode(charCode)

    let shiftedCharCode = charCode + 13
    let decodedCharCode = 0

    if (shiftedCharCode > 90) {
      let valueToFillTail = 90 - charCode
      decodedCharCode = 65 + (13 - valueToFillTail - 1) // -1 because start from 65
    } else {
      decodedCharCode = shiftedCharCode
    }

    return String.fromCharCode(decodedCharCode)
  })

  return decodedString.join('')
}

rot13('SERR PBQR PNZC')
