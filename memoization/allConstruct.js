const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return [[]]

  let result = []

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct(suffix, wordBank, memo)
      const targetWays = suffixWays.map(way => [word, ...way])

      result = [...result, ...targetWays]
    }
  }
  memo[target] = result
  return result
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [ ['purp', 'le'], ['p', 'ur', 'p', 'le' ] ]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); /*
[
  ['ef','cd','ab'],
  ['def', 'c', 'ab'],
  ['def', 'abc'],
  ['ef', 'abcd']
] */
console.log(allConstruct('hello', ['cat', 'dog', 'mouse'])) // []
console.log(allConstruct('', ['cat', 'dog', 'mouse'])) // [[]]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaz',
  [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa'
  ])
); // []
