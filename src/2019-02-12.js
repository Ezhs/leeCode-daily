// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
var num1 = 123;
var num2 = -123;

var reverse = function(x) {
    // let result = 0;
    // while (x != 0) {
    //     let p = x % 10; 
    //     x = parseInt(x / 10);
    //     result = result * 10 + p
    // }
    // if (result >= Math.pow(2,31) -1 || result <=  -Math.pow(2, 31)) {
    //     return 0
    // }
    // return result;
    let flag = x > 0,
        numStr = Math.abs(x).toString(),
        len = numStr.length,
        result = '';
    for (let i = len - 1; i >= 0; i--) {
        result += numStr[i];
    }
    if (result >= Math.pow(2,31) -1 || result <=  -Math.pow(2, 31)) {
        return 0
    }
    return flag ? +result :  -result;
};

console.log(num1, reverse(num1));
console.log(num2, reverse(num2));