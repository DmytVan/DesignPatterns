class NumberArr {
    constructor(initialArr) {
        this.arr = initialArr || [];
    }

    push(item) {
        if (!this.isNumber(item)) {
            throw new Error(`not Number`)
        }

        this.arr.push(item);
    }

    unshift(item) {
        if (!this.isNumber(item)) {
            throw new Error(`not Number`)
        }

        this.arr.unshift(item);
    }

    pop() {
        return this.arr.pop();
    }

    shift() {
        return this.arr.shift();
    }

    isNumber(num) {
        return typeof num === 'number' && isFinite(num);
    }

    toString() {
        return this.arr.toString();
    }
}

const arr = new NumberArr([1,2,3]);
arr.push(5);
console.log(arr);
// arr.push('qwe');











let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    },
    set(target, prop, val) {
        if (typeof val === 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});

// console.log( numbers[1] );
// console.log( numbers[123] );
//
//
// numbers.push(3);
// numbers.push(4);
//
// console.log(numbers);
//
// numbers.push("тест");
