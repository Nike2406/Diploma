'use strict';

const toggleChooseClub = () => {
    const body = document.querySelector('body'),
        clubsListUl = document.querySelector('.clubs-list > ul');
    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.clubs-list')) {
            clubsListUl.style.display = 'block';
        } else {
            clubsListUl.style.display = 'none';
        }
        
    });
};

export default toggleChooseClub;