//   数组中的第K个最大元素

// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 例示
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return nums.sort((cur, next) => {
        return cur > next ? 1 : -1
    })[nums.length - k];
};

let nums = [3,2,1,5,6,4];
k = 2;
console.log(findKthLargest(nums, k));