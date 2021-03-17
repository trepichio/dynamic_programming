const gridTraveller = (n, m, memo = {}) => {
  const grid = (n + ',' + m)
  const gridReverse = (m + ',' + n)
  if (grid in memo) return memo[grid]
  if (gridReverse in memo) return memo[gridReverse]

  if (n == 0 || m == 0) return 0
  if (n == 1 && m == 1) return 1

  memo[grid] = gridTraveller(n - 1, m, memo) + gridTraveller(n, m - 1, memo)
  memo[gridReverse] = memo[grid]
  return memo[grid]
}

console.log(gridTraveller(2,2));
console.log(gridTraveller(2,3));
console.log(gridTraveller(3,3));
console.log(gridTraveller(3,2));
console.log(gridTraveller(5,5));
console.log(gridTraveller(1,0));
console.log(gridTraveller(130, 115));
