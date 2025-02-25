/**
 * Returns a new string with every other letter.
 * @param {string} str - a string
 * @returns {str} - 
 *
 * ex: everyOtherLetter("mississippi") //=> "msispi"
 *
 */

function everyOtherLetter(str) {
  let evenIdxChar = "";
  for (let i = 0; i < str.length; i += 2) { // iterate thru even nums
        evenIdxChar += str[i]; // concatentate str
  }
  return evenIdxChar;
}

module.exports = everyOtherLetter;
