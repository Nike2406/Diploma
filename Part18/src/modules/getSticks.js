'use strict';

const getSticks = () => {
    const topMenu = document.querySelector('.top-menu'),
        topMenuOfstop = topMenu.offsetTop,

        menuButton = document.querySelector('.menu-button img'),
        popUpMenu = document.querySelector('.popup-menu'),
        toTop = document.getElementById('totop'),
        headerMain = document.querySelector('.header-main');

    //Предзагрузка
    const stickMenu = () => {
        if (document.documentElement.scrollTop >= topMenuOfstop) {
            topMenu.style.position = 'fixed';
            topMenu.style.top = 0;
        } else {
            topMenu.removeAttribute('style');
        }

        if (document.documentElement.scrollTop <= headerMain.offsetHeight - topMenu.offsetHeight) {
            toTop.style.display = 'none';
        } else {
            toTop.removeAttribute('style');
        }
    };
    stickMenu();

    toTop.style.display = 'none';
    document.addEventListener('scroll', () => {
        stickMenu();
    });


    const showPopUpMenu = () => {
        menuButton.addEventListener('click', () => {
            popUpMenu.style.display = 'flex';
        });
        popUpMenu.addEventListener('click', (e) => {
            if (e.target !== popUpMenu) {
                popUpMenu.removeAttribute('style');
            }
        });
    };
    showPopUpMenu();
};
// getSticks();
export default getSticks;