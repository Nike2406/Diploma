'use strict';

const priceCalculate = () => {
    const cardOrder = document.getElementById('card_order'),
        timeSelect = document.getElementsByName('card-type'),
        clubSchelkovo = document.getElementById('card_leto_schelkovo'),
        clubMozaika = document.getElementById('card_leto_mozaika'),
        priceTotal = document.getElementById('price-total'),
        promoVal = document.getElementById('promoVal');

    let period = 1,
        discount = 1;
    if (priceTotal) {
        promoVal.addEventListener('input', () => {
            if (promoVal.value == 'ТЕЛО2019') {
                discount = 0.7;
            } else {
                discount = 1;
            }
            clubCalc(period);
        });

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
                    priceTotal.textContent = Math.floor(1999 * discount);
                    break;
                case 6:
                    priceTotal.textContent = Math.floor(9900 * discount);
                    break;
                case 9:
                    priceTotal.textContent = Math.floor(13900 * discount);
                    break;
                case 12:
                    priceTotal.textContent = Math.floor(19900 * discount);
                    break;
                default:
                    priceTotal.textContent = Math.floor(1999 * discount);
            }
        };

        const showPriceSchelkovo = () => {
            switch (+period) {
                case 1:
                    priceTotal.textContent = Math.floor(2999 * discount);
                    break;
                case 6:
                    priceTotal.textContent = Math.floor(14900 * discount);
                    break;
                case 9:
                    priceTotal.textContent = Math.floor(21900 * discount);
                    break;
                case 12:
                    priceTotal.textContent = Math.floor(24900 * discount);
                    break;
                default:
                    priceTotal.textContent = Math.floor(2999 * discount);
            }
        };
    }
};

// priceCalculate();
export default priceCalculate;