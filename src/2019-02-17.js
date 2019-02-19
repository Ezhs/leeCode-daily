// 找出字符串中重复对多次的一个或多个字符
// 示例
// 给定 str = 'abc', 返回 // 重复最多的字符 [a, b, c] // 次数 1;
// 给定 str = 'iysnzgsai'  // 重复最多的字符 [i, s] // 次数 2;
// 方法2 比 方法1 性能好一点 
// 使用字符串的 split 方法 比 使用拓展运算符 快 6倍左右
let getMax = function (str) {
    let m = new Map();
    str.split('').forEach(it => {
        m.set(it, (m.get(it) || 0) + 1);
    });
    let max = 0; let keys = [];
    for (let [key, val] of m) {
        if (val >= max) {
            if (val != max) {
                keys = [];
            }
            keys.push(key);
            max = val;
        }
    }
    return { keys, max };
}
var str1 = 'abc';
var str2 = 'fhis1asdiasho1ahxuai';

console.time();
for (let i = 0; i < 1000; i++) {
    getMax(str2)
}
console.timeEnd();

let getMax2 = function (str) {
    let o1 = {}; // 存储 key -> 次数
    let o2 = {}; // 存储 次数 -> [keys]
    str.split('').forEach(it => {
        o1[it] = (o1[it] || 0) + 1;
    });
    
    let max = -1;
    for (let k in o1) {
        if (!o2[o1[k]]) {
            o2[o1[k]] = [];
        } 
        o2[o1[k]].push(k);
        o1[k] > max ? max = o1[k] : '';
    }
    return { keys: o2[max], max }
} 

console.time();
for (let i = 0; i < 1000; i++) {
    getMax2(str2);
}
console.timeEnd();