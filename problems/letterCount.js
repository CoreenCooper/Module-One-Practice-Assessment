/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */

function letterCount(str) {
    let newArr = str.toLowerCase().split(" ");
    let strNoSpace = newArr.join("");
    let obj = {};
    for (let i = 0; i < strNoSpace.length; i++) {
      const el = strNoSpace[i];
      if (obj[el]) {
        obj[el] += 1;
      } else {
        obj[el] = 1;
      }
    }
    return obj;
}

console.log(letterCount(""))
console.log(letterCount("hello"))
console.log()
console.log(letterCount("HeLlo World"))

module.exports = letterCount;
