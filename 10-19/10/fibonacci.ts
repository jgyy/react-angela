function fibonacciGenerator(n: number): number[] {
    let fib: number[] = [];
    if (n == 0) {
        return fib;
    }
    fib[0] = 0;
    if (n == 1) {
        return fib;
    }
    fib[1] = 1;
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

const fib = fibonacciGenerator(100);
console.log(fib);
