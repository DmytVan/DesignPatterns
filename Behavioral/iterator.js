class Iterator {
    constructor(obj) {
        this.index = 0;
        this.elements = obj;
        this.keys = Object.keys(obj)
    }

    next() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}


const obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
};

const iterator = new Iterator(obj);

while (iterator.hasNext()) {
    console.log(iterator.next())
}






// -------

class Iterator2 {
    constructor(obj) {
        this.elements = obj;
        this.keys = Object.keys(obj)
    }

    [Symbol.iterator]() {
        return {
            self: this,
            current: 0,
            next() {
                if (this.current < this.self.keys.length) {
                    return { done: false, value: this.self.elements[this.self.keys[this.current++]] };
                } else {
                    return { done: true };
                }
            }
        }
    }
}

// const iterator2 = new Iterator2(obj);
//
// for (let item of iterator2) {
//     console.log(item)
// }
//
// console.log(Array.from(iterator2));


class Iterator3 {
    constructor(obj) {
        this.elements = obj;
        this.keys = Object.keys(obj)
    }

    *[Symbol.iterator]() {
        let current = 0;
        while (current < this.keys.length) {
            yield this.elements[this.keys[current++]];
        }
    }
}

// const iterator3 = new Iterator3(obj);
//
// for (let item of iterator3) {
//     console.log(item)
// }
//
// console.log(Array.from(iterator3));