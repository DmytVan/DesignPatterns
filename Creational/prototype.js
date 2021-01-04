class Computer {
    constructor(memory, core) {
        this.memory = memory;
        this.core = core;
    }

    produce() {
        return new Computer(this.memory, this.core);
    }
}

const computer = new Computer(16, 'i5');
const updatedComputer = computer.produce();
updatedComputer.core = 'i7';

console.log(computer);
console.log(updatedComputer);