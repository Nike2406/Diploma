const headSlider = () => {
    const slide = document.querySelectorAll('.main-slider .slide'),
        slider = document.querySelector('.main-slider');

    const getNewDot = () => {
        let parentDot = document.createElement('ul');
        parentDot.classList.add('slider-dots');
        slider.appendChild(parentDot);

        for (let i = 0; i < slide.length; i++) {
            
            let newDot = document.createElement('li');
            newDot.classList.add('slider-dot');
            parentDot.appendChild(newDot);
        
            let newBut = document.createElement('button');
            newDot.appendChild(newBut);
        }    
    };
    getNewDot();

    //ДОбавляем общие стили
    const style = document.createElement('style');
    style.textContent = `
        .slider-dots {
            z-index: 1200;
            background: transparent;
        }     
    `;
    document.head.appendChild(style);

    let dot = document.querySelectorAll('.slider-dot');
    dot[0].classList.add('slick-active');

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        slide[currentSlide].style.display = 'none';
        prevSlide(dot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        slide[currentSlide].style.display = 'flex';
        nextSlide(dot, currentSlide, 'slick-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    
    //Стоит добавить переключатель 
    
    // slider.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     let target = event.target;     

    //    if (target.closest('.slider-dot')) {
    //         dot.forEach((elem, index) => {
    //             if (elem === target) {
    //                 currentSlide = index;
    //             }
    //         });
    //     }        
    // });    

    startSlide(3000);
};
// headSlider();
export default headSlider;