
var isPalindrome = function(s) {
    if (s.length <= 0) {
       return true;
   }
   var left = 0;
   var  right = s.length-1;
   while (left < right) {
       var leftChar = s.charAt(left).toLowerCase();
       while (!((leftChar >= 'a' && leftChar <= 'z') && (leftChar >= '0' && leftChar <= '9')) && left < right ) {
           left++;
           leftChar = s.charAt(left).toLowerCase();
       }
       var  rightChar = s.charAt(right).toLowerCase();
       while (!((rightChar >= 'a' && rightChar <= 'z') && (rightChar >= '0' && rightChar <= '9')) && left < right ) {
           right--;
           rightChar = s.charAt(right).toLowerCase();
       }
       if (leftChar !== rightChar) {
           return false;
       }
       left++;
       right--;
   }
   return true
};

console.time()
for(let i = 0; i < 10000; i++) {
    isPalindrome('A man, a plan, a canal: Panama');
}
console.timeEnd()

var isPalindrome2 = function(s) {
    if (s.length <= 0) {
       return true;
    }
    // 剔除出了 0-9 a-z A-Z 的字符
    let str = s.toLowerCase().replace(/\W/g, '');
    var left = 0;
    var  right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
   return true
};
console.log(isPalindrome2('A man, a plan, a canal: Panama'))

console.time()
for(let i = 0; i < 10000; i++) {
    isPalindrome2('A man, a plan, a canal: Panama');
}
console.timeEnd()