function fib(n) {
  return n > 1 ? fib(n - 1) + fib(n - 2) : fib(n);
}
console.log(fib(5));
