const memoize = (cb) => {
    const cache = {};
    return (n) => {
        if(n in cache) {
            return cache[n];
        } else {
            cache[n] = cb(n);
            return cache[n];
        }
    }
}


const factorial = memoize(
    x => {
        if(x === 0) {
            return 1;
        } else {
            return factorial(x - 1) * x;
        }
    }
)

const factorialOf6 = factorial(6);

console.log(factorialOf6);

function test() {
    moveTo(\ev, y)
    console.log()
}

