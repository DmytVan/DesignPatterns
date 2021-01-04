export default function (container) {
    const submitOrder = container.getElementsByClassName('submit-order')[0];
    const submitOrderLarge = document.querySelector('.submit-order.large');
    submitOrder.onmouseover = function () {
        submitOrderLarge.classList.add('show');

    };
    submitOrderLarge.onmouseout = function () {
        this.classList.remove('show');
    };
}