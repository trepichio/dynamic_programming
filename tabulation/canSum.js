const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)

  table[0] = true

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (const num of numbers) {
        if (i + num > targetSum) continue;
        table[i + num] = true
      }
    }
  }
  return table[targetSum]
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
console.log(canSum(300, [2, 3, 5, 7, 14, 25])); // true
