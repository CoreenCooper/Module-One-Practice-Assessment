/**
 * Return the product of all odd numbers in an array. 
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 * 
 * ex: productOfOddNumbers([1, 2, 3, 4, 5])
 * returns 15
 */

 function productOfOddNumbers(num) { // either get the check for zero or 1
     return nums.filter((el) => { // convert to for and if statement
        return el % 2 === 1
     }).map((el) => {
         return el * num
     })
 }
 

 module.exports = productOfOddNumbers