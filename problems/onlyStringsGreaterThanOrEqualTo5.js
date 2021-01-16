/**
 * Returns an array of words that have 5 or more letters. 
 * @param {string[]} words - an array containing words
 * @returns {string[]} - words with 5 or more letters
 *
 * ex: onlyStringsGreaterThanOrEqualTo5(["cat", "hello", "corey", "dog"])
 * returns ["hello", "corey"]
 */

// function onlyStringsGreaterThanOrEqualTo5(words) { // filter should only have one condition inside
//     return words.filter((el) => {
//         return el.length > 4
//     })
// }

function onlyStringsGreaterThanOrEqualTo5(words) { // Sparky - one liner 
    return words.filter((el) => el.length >= 5)
}

module.exports = onlyStringsGreaterThanOrEqualTo5;
