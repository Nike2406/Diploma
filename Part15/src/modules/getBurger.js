'use strict';

const getBurger = () => {
    const topMenu = document.querySelector('.top-menu'),
        topMenuOfstop = topMenu.offsetTop;
    document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= topMenuOfstop){
        topMenu.style.position = 'fixed';
        topMenu.style.top = 0;
    } else {
        topMenu.removeAttribute('style');
    }
    });
    
};
// getBurger();
export default getBurger;