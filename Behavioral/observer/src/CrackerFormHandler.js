import CustomRangeObserver from './CustomRangeObserver.js'
import OrderList from './OrderList.js'
import { packages } from './data.js'

export default class  {

    constructor(form, orderList) {
        this.form = form;
        this.orderList = orderList;
        this.selectInputsList = form.getElementsByClassName('range-inputs')[0];
        this.customRangeObserver = new CustomRangeObserver(Array.from(this.selectInputsList.querySelectorAll('.input-custom-range')));
        this.form.elements.lgsubmit.onclick = this.onSubmit.bind(this);
        this.form.elements.submit.onclick = this.onSubmit.bind(this);
        }

    setRangeHandlers() {
        this.selectInputsList.oninput = (e) => {
            this.customRangeObserver.changePercent(e.target)
        };

        this.selectInputsList.onchange = (e) => {
            this.customRangeObserver.changeValue(e.target);
        };
    }

    onSubmit(e) {
        e.preventDefault();
        if (!Object.keys(packages).includes(this.form.getElementsByClassName('selected-options')[0].getAttribute('value'))) {
            alert('Please select a package');
            return;
        }
        this.orderList.addOrder(this.generateOrder());
    }

    generateOrder() {
        const packInfo = packages[this.form.getElementsByClassName('selected-options')[0].getAttribute('value')];
        const result = {};
        for (let element of this.form.elements) {
            if (element.closest('.submit-order-container')) continue;
            result[element.name] = element.value + '%';
        }
        Object.assign(result, packInfo);
        console.log(result);
        return result;
    }

}