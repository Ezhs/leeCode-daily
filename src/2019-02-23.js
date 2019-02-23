// 盛最多水的容器

/// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

// 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0,
        right = height.length - 1,
        lastLeft = height[left], // 存储最大的左侧值
        lastRight = height[right], // 存储最大的右侧值
        max = 0;

    while (left < right) {
        // 如果不能大于当前的高度 既值也不可能大于上一次的面积 因为 x 轴一直在减小 
        if (height[left] < lastLeft) {
            left++;
            continue;
        }
        if (height[right] < lastRight) {
            right--;
            continue;
        }

        lastLeft = height[left];
        lastRight = height[right];
        max = Math.max(max, Math.min(lastLeft, lastRight) * (right - left));

        // 那边值小 那边移动
        if (lastLeft < lastRight) {
            left++;
        } else {
            right--;;
        }
    }

    return max;
};

let nums = [9,8,6,2,5,4,8,3,7];
console.log(maxArea(nums));