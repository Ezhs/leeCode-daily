//  两数之和 II - 输入有序数组

// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
// 说明:
// 返回的下标值（index1 和 index2）不是从零开始的。
// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index1 = 0;
    let index2 = numbers.length - 1;
    while ((numbers[index1] + numbers[index2]) !== target) {
        if ((numbers[index1] + numbers[index2]) > target) {
            index2--;
        } else if ((numbers[index1] + numbers[index2]) < target) {
            index1++;
        }
    }
    return [++index1, ++index2];
};

console.log(twoSum([5,25,75],100))