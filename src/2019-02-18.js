// 颜色分类

// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 注意： 不能使用代码库中的排序函数来解决这道题。

// 输入: [2,0,2,1,1,0]
// 输出: [0,0,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let len = nums.length;
        lt = -1,
        gt = len,
        i = 0;

    while (i < gt) {
        console.log(gt, i, lt);
        let val = nums[i];
        if (val === 0) { // 红色 前移
            lt++;
            [nums[lt], nums[i]] = [nums[i], nums[lt]];
            i++;
        } else if (val === 2) { // 蓝色 后移
            gt--;
            [nums[i], nums[gt]] = [nums[gt], nums[i]];
        } else {
            i++; // 白色
        }
    }
};

let nums = [2,0,2,1,1,0];

sortColors(nums);
console.log(nums);