function baseStrategy(amount) {
    return amount;
}

function premiumStrategy(amount) {
    return amount * 0.85;
}

function platinumStrategy(amount) {
    return amount * 0.65;
}

class Cart {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
};

const customer = new Cart(baseStrategy);
const premiumCustomer = new Cart(premiumStrategy);
const platinumCustomer = new Cart(platinumStrategy);

customer.setAmount(100);
premiumCustomer.setAmount(100);
platinumCustomer.setAmount(100);

console.log(customer.checkout());
console.log(premiumCustomer.checkout());
console.log(platinumCustomer.checkout());
