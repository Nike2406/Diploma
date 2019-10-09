'use strict';

const getPopups = () => {

    const right = document.querySelector('.right');
    let target,
        popupTab;

    right.addEventListener('click', (event) => {
        target = event.target;
        if (target.dataset.popup !== undefined) {
            popupTab = document.querySelector(`${target.dataset.popup}`);
            popupTab.style.display = 'block';
        }
        if (target.dataset.popup !== undefined) {
            popupTab.addEventListener('click', (event) => {
                let target = event.target;
                if (target.classList.contains('overlay') || target.closest('.close-form')) {
                    popupTab.style.display = 'none';
                }
            });
        }
    });
};

// getPopups();
export default getPopups;