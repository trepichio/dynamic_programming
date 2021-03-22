const countConstruct = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let count = 0

  for (const word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const numWaysForRest = countConstruct(suffix, wordbank, memo)
      if (numWaysForRest >= 1) {
        count += numWaysForRest
      }
    }
  }
  memo[target] = count
  return count
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
  [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
  ])
); // 0
