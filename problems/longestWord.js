/**
 * Returns the longest word in the array.
 * Ties should go to the earlier word
 * @param {string[]} words - an array containing words
 * @returns {string} - longest word
 *
 * ex: longestWord(["cat", "bird", "hello", "corey", "do"])
 * returns "hello"
 */

function longestWord(words) {
   let newStr = "";
   for (let i = 0; i < words.length; i++) {
    if (words[i].length > newStr.length) {
       newStr = words[i];
        }   
    }
    return newStr;
}

module.exports = longestWord;
