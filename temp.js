/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {


   //nums = integer array
   //fn = function´
   //init = initial value

var accumulator = init;

   for (let i = 0; i < nums.length; i++) {

     accumulator = fn(accumulator, nums[i]);

   }

    return accumulator
};

//teste