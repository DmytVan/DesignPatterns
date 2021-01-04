class Memento {
    constructor(state) {
        this.state = state;
    }
}

class Caretaker {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento);
    }

    getMemento() {
        return this.values.pop().state;
    }
}

class Game {
    constructor() {
        this.patrons = 10;
        this.lives = 5;
        this.caretaker = new Caretaker();
    }

    shoot() {
        if (this.patrons > 0) {
            console.log(`Выстрел. патронов осталось ${--this.patrons}`);
        }
    }

    die() {
        if (this.lives > 0) {
            console.log(`Вы умерли. жизней осталось ${--this.lives}`);
        } else {
            console.log('Game Over')
        }
    }

    save() {
        this.caretaker.addMemento(new Memento(Object.assign({}, this)));
        console.log('игра сохранена!\n');
    }

    load() {
        const {patrons, lives} = this.caretaker.getMemento();
        this.patrons = patrons;
        this.lives = lives;
        console.log('\nигра загружена!');
    }
}

let game = new Game();
game.shoot();
game.die();
game.save();

game.shoot();
game.die();

game.load();
console.log(`патронов: ${game.patrons}, жизней: ${game.lives}\n`);

game.shoot();
game.die();