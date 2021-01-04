import customSelect from './customSelect.js'
import animateSubmitButtons from './animateSubmitButtons.js'
import shoppingBasket from './shoppingBasket.js'
import CrackerFormHandler from './CrackerFormHandler.js'
import OrderList from "./OrderList.js";
import { packages } from './data.js'



customSelect(document.getElementsByClassName('custom-select')[0]);
animateSubmitButtons(document.getElementsByClassName('submit-order-container')[0]);
const toggleBasket = shoppingBasket(document.getElementsByClassName('shopping-basket')[0]);
const detail = document.getElementsByClassName('order-info-details')[0];
detail.addEventListener('click', toggleBasket);

const orderList = new OrderList();
const crackerFormHandler = new CrackerFormHandler(document.getElementsByClassName('cracker-constructor-form')[0], orderList);
crackerFormHandler.setRangeHandlers();

const itemCountNodes = document.getElementsByClassName('item-count');
for (let node of itemCountNodes) {
    orderList.subscribeOnChange(node, (el, count, sum) => el.textContent = count)
}
const totalPriceNodes = document.getElementsByClassName('total-price');
for (let node of totalPriceNodes) {
    orderList.subscribeOnChange(node, (el, count, sum) => el.textContent = sum + packages.currency)
}