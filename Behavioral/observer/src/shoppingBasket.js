export default function (basket) {

    basket.addEventListener('click', (e) => {
        if (!e.target.classList.contains('basket-close')) return;
        toggleBasket();
    });

    function toggleBasket() {
        basket.classList.toggle('active-flex');
    }

    return toggleBasket;
}