/**
 * Return if a given number includes 0. 
 * @param {number} num - a number
 * @returns {boolean} - is zero in the number
 *
 * ex: numberIncludes0(1023) //=> true
 * ex: numberIncludes0(123) //=> false
 *  
 */

// function numberIncludes0(num) {
//     let numStr = num.toString()
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] === "0" ) {
//             return true
//         } 
//     }
//     return false
// }


// function numberIncludes0(num) { // Sparky
//     let numStr = num.toString();
//     return numStr.includes('0');

// }

function numberIncludes0(num) { // Marsha also made it into a single liner
    numArr = ("" + num).split("");
    return numArr.some((element) => {
        return element === "0"
    })
}


module.exports = numberIncludes0;
