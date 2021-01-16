/**
 * Return the product of all odd numbers in an array. 
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 * 
 * ex: productOfOddNumbers([1, 2, 3, 4, 5])
 * returns 15
 */

//  function productOfOddNumbers(nums) { 
//      let num = 1 // cannot be zero
//      for (let i = 0; i < nums.length; i++) {
//          if (nums[i] % 2 === 1) {
//              num *= nums[i]
//          }
//      }
//      if (num === 1) {
//          return 0
//      }
//      return num
//  }
 
function productOfOddNumbers(nums) { // Sparky - filter
    let product = 1;
    let oddNums = nums.filter(num => num % 2 === 1) 
    if (oddNums.length === 0) {
        return 0
    } 
    for (let el of oddNums) {
        product *= el
    }
    return product;

}


 module.exports = productOfOddNumbers