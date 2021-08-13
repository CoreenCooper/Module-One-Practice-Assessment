/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */

 // try with forEach 
// function letterCount(str) { 
//     let newArr = str.toLowerCase().split(" ");
//     let strNoSpace = newArr.join("");
//     let obj = {};
//     for (let i = 0; i < strNoSpace.length; i++) {
//       const el = strNoSpace[i];
//       if (obj[el]) {
//         obj[el] += 1
//       } else {
//         obj[el] = 1};
//     }
//     return obj;
// }

function letterCount(str) {
  str = str.toLowerCase();
  let obj = {};
  for (const char of str) { // for each charcter in a string, we're going to do something {}
    if(char !== " ") {
        if(obj[char]) {
          obj[char] += 1;
        } else {
          obj[char] = 1;
        }
    }
  }
  return obj
} 
  
module.exports = letterCount;
