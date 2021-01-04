import OrderTable from './OrderTable.js'

export default class  {
    orderList = [];
    lastId = 0;
    orderTable = new OrderTable(document.querySelector('.products-table'), this.deleteOrder.bind(this));
    actions = new Map();

    addOrder(products) {
        this.orderList.push({...products, id: this.lastId++});
        console.log(this.orderList);
        this.orderTable.render(this.orderList);
        this.change();
    }

    subscribeOnChange(el, cb) {
        this.actions.set(cb, el);
    }

    change() {
        for (let [cb, el] of this.actions) {
            cb(el, this.orderList.length, this.sum);
        }
    }

    deleteOrder(id) {
        this.orderList = this.orderList.filter(order => order.id !== id);
        this.orderTable.render(this.orderList);
        this.change();
    }

    get sum() {
        return this.orderList.reduce((sum, order) => sum + order.price, 0)
    }
}