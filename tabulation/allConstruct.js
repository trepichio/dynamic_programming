const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => [])

  table[0] = [[]]

  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map(subArray => [...subArray, word])

        table[i + word.length] = [...table[i + word.length], ...newCombinations]
      }
    }
  }

  return table[target.length]
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// [
//   ['purp', 'le'],
//   ['p', 'ur', 'p', 'le']
// ]

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
// [
//   ['ef','cd','ab'],
//   ['def', 'c', 'ab'],
//   ['def', 'abc'],
//   ['ef', 'abcd']
// ]

console.log(allConstruct('hello', ['cat', 'dog', 'mouse']))
// []

console.log(allConstruct('', ['cat', 'dog', 'mouse']))
// [[]]

console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// []

console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']));
// []
