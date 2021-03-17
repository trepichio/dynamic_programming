// Takes a number and return the fibonacci of that value

// memoization
// js object, keys will be arg to fn, value will be the return value

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]

  if (n <= 2) return 1
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]

}

console.log(fib(6)); //8
console.log(fib(7)); //13
console.log(fib(8)); //21
console.log(fib(50)); //12586269025 (159 secs - with memo: 0.112s)k
console.log(fib(500)); //1.394232245616977e+104 (memo: 0.113 secs)
