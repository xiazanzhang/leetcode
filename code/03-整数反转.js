// 7. 整数反转
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21

// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

var reverse = function (x) {
  let nums = x.toString().split('')
  let val = ''
  let s = nums[0] === '-'

  if (s) {
    val = nums.shift(0)
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1 && nums[i] == 0) continue
    val += nums[i]
  }
  if (s) {
    return Math.pow(-2, 31) > val ? 0 : val
  }
  return val > Math.pow(2, 31) - 1 ? 0 : val
};


console.time()
console.log(reverse(-123))
console.timeEnd()