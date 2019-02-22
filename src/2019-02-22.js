//   反转字符串中的元音字母
// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

// 输入: "hello"
// 输出: "holle"

// 输入: "leetcode"
// 输出: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // 找到所有的原音
    let arr = s.split('');
    for (let i = 0, j = arr.length - 1; i < j;) {
        if (vowels.indexOf(arr[i]) === -1) {
            i++;
        } else if (vowels.indexOf(arr[j]) === -1) {
            j--;
        } else {
            [arr[i++], arr[j--]] = [arr[j], arr[i]]
        }
    }
    return arr.join('');
};

let str1 = 'hello';
let str2 = 'leetcode';
let str3 = 'Aa';
console.time();
console.log(reverseVowels(str1));
console.log(reverseVowels(str2));
console.log(reverseVowels(str3));
console.timeEnd()