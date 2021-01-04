class Equipment {
    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

class Display extends Equipment {
    constructor(price) {
        super();
        this.setName('Display');
        this.setPrice(price);
    }
}

class CPU extends Equipment {
    constructor(price) {
        super();
        this.setName('CPU');
        this.setPrice(price);
    }
}


class RAM extends Equipment {
    constructor(price) {
        super();
        this.setName('RAM');
        this.setPrice(price);
    }
}

class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = [];
    }

    add(equipment) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments.map(equipment => equipment.getPrice())
                       .reduce((sum, price) => sum + price, 0);
    }
}

class Phone extends Composite {
    constructor(name) {
        super();
        this.setName(name);
    }
}

const phone = new Phone('iPhone10');

phone.add(new Display(1000));
phone.add(new CPU(1200));
phone.add(new RAM(800));

console.log(phone.getPrice());
