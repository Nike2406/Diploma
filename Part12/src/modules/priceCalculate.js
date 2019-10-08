'use strict';

const priceCalculate = () => {
    const cardOrder = document.getElementById('card_order'),
        timeSelect = document.getElementsByName('card-type'),
        clubSchelkovo = document.getElementById('card_leto_schelkovo'),
        clubMozaika = document.getElementById('card_leto_mozaika'),
        priceTotal = document.getElementById('price-total');

    let period = 1;

    cardOrder.addEventListener('click', (event) => {
        let target = event.target;
        if (target.name == 'card-type') {
            checkPeriod();
            clubCalc(period);
        }
        if (target.closest('.club')) {
            clubCalc(period);
        }
    });

    const clubCalc = () => {
        if (clubMozaika.checked) {
            showPriceMozaika(period);
        }
        if (clubSchelkovo.checked) {
            showPriceSchelkovo(period);
        }
    };

    const checkPeriod = () => {
        timeSelect.forEach((item) => {
            if (item.checked) {
                period = item.value;
            }
        });
    };

    const showPriceMozaika = () => {
        switch (+period) {
            case 1:
                priceTotal.textContent = '1999';
                break;
            case 6:
                priceTotal.textContent = '9900';
                break;
            case 9:
                priceTotal.textContent = '13900';
                break;
            case 12:
                priceTotal.textContent = '19900';
                break;
            default:
                priceTotal.textContent = '1999';
        }
    };

    const showPriceSchelkovo = () => {
        switch (+period) {
            case 1:
                priceTotal.textContent = '2999';
                break;
            case 6:
                priceTotal.textContent = '14900';
                break;
            case 9:
                priceTotal.textContent = '21900';
                break;
            case 12:
                priceTotal.textContent = '24900';
                break;
            default:
                priceTotal.textContent = '2999';
        }
    };
};

export default priceCalculate;