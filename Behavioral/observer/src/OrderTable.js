import { packages } from './data.js'

export default class  {
    insertionOrder = ['soybean', 'sesame', 'wheat', 'corn', 'weight', 'price'];

    constructor(table, deleteOrder) {
        this.table = table;
        console.log(table.tHead);
        this.deleteOrder = deleteOrder;
    }

    render(orderList) {
        const head = this.table.tHead;
        this.table.innerHTML = '';
        this.table.append(head);
        orderList.forEach(order => {
            this.table.append(this.generateRow(order));
        })
    }

    generateRow(order) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const img = document.createElement('img');
        img.src = './img/semen-negative.png';
        td.append(img);
        tr.append(td);
        for (let i = 0; i < this.insertionOrder.length; i++) {
            const td = document.createElement('td');
            td.textContent = order[this.insertionOrder[i]] || '';
            if (this.insertionOrder[i] === 'price') {
                td.textContent = td.textContent + packages.currency;
            }
            tr.append(td)
        }
        const span = document.createElement('span');
        span.innerHTML = '&times;';
        span.classList.add('delete-order');
        span.onclick = () => {
            this.deleteOrder(order.id);
        };
        tr.append(span);
        return tr;
    }
}