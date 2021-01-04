function sum(...args) {
    console.log(`function was called with args: ${args}`);
    return args.reduce((sum, item) => sum + item)
}

function memo(fn) {
    const cache = {};
    return function () {
        const hash = getHash(...arguments);
        if (cache.hasOwnProperty(hash)) {
            return cache[hash];
        }
        const result = fn.apply(this, arguments);
        cache[hash] = result;
        return result;
    }
}

function getHash() {
    return Array.from(arguments).sort((a, b) => a - b).join(',');
}

const arrSumMemo = memo(sum);

console.log(arrSumMemo(1, 2, 5));
console.log(arrSumMemo(1, 5, 2));

console.log(arrSumMemo(1, 5, 5));
console.log(arrSumMemo(5, 1, 5));