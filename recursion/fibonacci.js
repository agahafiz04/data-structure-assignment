// Fibonacci Using Loop

function fibs(n) {
  let fibs = [0, 1];

  let a = 0;
  let b = 1;
  let fibonacci = a + b;

  for (let i = 0; i < n - 1; i++) {
    fibonacci = a + b;
    a = b;
    b = fibonacci;
    fibs.push(fibonacci);
  }

  return fibs;
}

console.log(fibs(10));

// Fibonacci Using Recursive

// function fibsRecursive(n) {
//   if (n == 1) return [0, 1];
//   const arr = fibsRecursive(n - 1);

//   return [...arr, arr[n - 1] + arr[n - 2]];
// }

function fibsRecursive(n) {
  if (n <= 1) {
    return [0, 1];
  }

  let arr = fibsRecursive(n - 1);

  console.log(arr);
  arr.push(arr[n - 1] + arr[n - 2]);
  return arr;
}

// arr = [0, 1, 22]

console.log(fibsRecursive(10));
