/**
 * Takes in an object and returns the sum of all values
 * @param {Object} obj - an object with key value pairs
 * @returns {number} - sum of all values
 *
 * ex: sumOfValuesOfObject({corey: 5, sam: 10, peter: 3, sparky: 9})
 * returns 27
 */


// function sumOfValuesOfObject(obj){
//     let sum = 0
//     for (let i = 0; i < Object.values(obj).length; i++) {
//         sum += Object.values(obj)[i]
//     }
//     return sum
// }


function sumOfValuesOfObject(obj){ // cannot use for in for objects
    let sum = 0;
    for (let key in obj) { // 
        sum += obj[key]
        // console.log(key)
    }
    return sum
}
// sumOfValuesOfObject({corey: 5, sam: 10, peter: 3, sparky: 9})


module.exports = sumOfValuesOfObject;