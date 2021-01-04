class ChatRoom {
    showMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(`${time} [${sender}]: ${message}`)
    }
}

class User {
    constructor(name, chatMediator) {
        this.name = name;
        this.chatMediator = chatMediator
    }

    getName() {
        return this.name
    }

    send(message) {
        this.chatMediator.showMessage(this, message)
    }
}

const mediator = new ChatRoom();

const john = new User('Alex', mediator);
const jane = new User('John', mediator);

john.send('Hi there!');
jane.send('Hey!');