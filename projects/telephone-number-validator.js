/** JavaScript Algorithms and Data Structures Projects: Telephone Number Validator */

function getStringWithoutSpaces(str) {
  const strNoSpaces = str.replaceAll(' ', '')
  return strNoSpaces
}

function isValidUSNumber(strNoSpaces) {
  const regStrWithDigitsAndMinusSigns = new RegExp(/^1?\d{3}-?\d{3}-?\d{4}$/)
  const regStrWithRoundBrackets = new RegExp(/^1?\(\d{3}\)-?\d{3}-?\d{4}$/)

  return (
    regStrWithDigitsAndMinusSigns.test(strNoSpaces) ||
    regStrWithRoundBrackets.test(strNoSpaces)
  )
}

function telephoneCheck(str) {
  const strNoSpaces = getStringWithoutSpaces(str)
  return isValidUSNumber(strNoSpaces)
}

telephoneCheck('555-555-5555')
