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
  for (let i = 0; i < str.length; i += 2) {
        evenIdxChar += str[i];
  }
  return evenIdxChar;
}

module.exports = everyOtherLetter;
