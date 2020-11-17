// 1. 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。



// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


const sum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

console.time()
console.log(sum([2, 7, 11, 15], 9))
console.timeEnd()


const twoSum = (nums, target) => {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    }
    map.set(target - nums[i], i)
  }
};

console.time()
console.log(twoSum([1, 3, 3], 6)); // [1, 2]
console.timeEnd()