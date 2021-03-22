const canConstruct = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return true

  for (const word of wordbank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length)
      if (canConstruct(suffix, wordbank, memo) === true)
      {
        memo[target] = true
        return true
      }
    }
  }

  memo[target] = false
  return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
  [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
  ])
); // false
