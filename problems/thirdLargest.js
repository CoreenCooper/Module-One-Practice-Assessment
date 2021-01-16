/**
 * Return the third largest number. Cannot use sort.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - third largest number
 *
 * ex: thirdLargest([12, 3, 8, 2, 1, 14])
 * returns 8
 */

// function thirdLargest(nums) {
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;
//     let thirdLargest = -Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         if (firstLargest < nums[i]) {
//             firstLargest = nums[i]
//         }
//     } for (let i = 0; i < nums.length; i++) {
//         if (secondLargest < nums[i] && firstLargest > nums[i]) {
//             secondLargest = nums[i]    
//         }
//     } for (let i = 0; i < nums.length; i++) {
//         if (thirdLargest < nums[i] && secondLargest > nums[i] && firstLargest > nums[i]) {
//             thirdLargest = nums[i]
//         } else if (nums.length < 3) {
//             return null
        
//         }
//     } 
//     return thirdLargest  
// }


// think of test cases ex. array with less than 3 elements 

function thirdLargest(nums) {
    if (nums.length < 3) return null;
    let largest = -Infinity
    let secondLargest = -Infinity
    let thirdLargest = -Infinity

    nums.forEach((num) => {
        if (num > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest) {
            thirdLargest = secondLargest;
            secondLargest = num;
        } else if (num > thirdLargest) {
            thirdLargest = num;
        }
    })
    return thirdLargest
}


module.exports = thirdLargest