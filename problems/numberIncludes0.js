/**
 * Return if a given number includes 0. 
 * @param {number} num - a number
 * @returns {boolean} - is zero in the number
 *
 * ex: numberIncludes0(1023) //=> true
 * ex: numberIncludes0(123) //=> false
 *  
 */

function numberIncludes0(num) {
    let numStr = num.toString()
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === "0" ) {
            return true
        } 
    }
    return false
}

module.exports = numberIncludes0;
