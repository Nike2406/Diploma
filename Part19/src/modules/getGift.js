'use strict';

const getGift = () => {

    const fixedGift = document.querySelector('.fixed-gift'),
        gift = document.getElementById('gift');
    if (fixedGift, gift) {
        fixedGift.addEventListener('click', () => {
            gift.style.display = 'block';
            fixedGift.remove();
        });
        gift.addEventListener('click', (e) => {
            let target = e.target;
            if (!target.closest('.form-content') || target.classList.contains('close-btn')) {
                gift.style.display = 'none';
            }
        });
    }
};

// getGift();
export default getGift;