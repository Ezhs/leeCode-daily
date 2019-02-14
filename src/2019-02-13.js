//   移动零 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:
// 1. 必须在原数组上操作，不能拷贝额外的数组。
// 2. 尽量减少操作次数。
let moveZeroes = function (arr) {
    let count = 0; // 存储0 的个数
    // 去除所有的0 并记录0的个数
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            count++;
            arr.splice(i, 1);
            i--;
        }
    }
    // 补0 
    for (let i = 0; i < count; i++) {
        arr.push(0);
    }
    return arr;
}
var num = [0,0,1];
console.log(moveZeroes(num));