'use strict';

const popupFreeVisit = () => {

    const freeVisitForm = document.getElementById('free_visit_form'),
        openpopup = document.querySelector('.open-popup');

    openpopup.addEventListener('click', () => {
        freeVisitForm.style.display = 'block';
    });
    freeVisitForm.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('overlay') || target.closest('.close-form')) {
            freeVisitForm.style.display = 'none';
        }
    });

};

export default popupFreeVisit;