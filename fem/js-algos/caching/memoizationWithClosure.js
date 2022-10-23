
const memoizedClosureTimes10 () {
    // this is sort of a class in Java, where you instantiate
    // and the return function is the constructor function
    // in addition it will execute and return a value
    // deppending on whats inside the return function codeblock
    const cache = {} //this is sort of a private property
    return (n) => {
        if(cache[n]) return cache[n];
        else {
            cache[n] = n * 10;
            return cache[n];
        }

    }
}

//instantiating our closure
const memoizedClosureTimes10 = memoizedClosureTimes10(9); // => 90  | which was calculated
const memoizedClosureTimes10 = memoizedClosureTimes10(9); // => 90  | which comes from the cache

