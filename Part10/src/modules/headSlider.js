const headSlider = () => {
    const slide = document.querySelectorAll('.main-slider .slide'),
        slider = document.querySelector('.main-slider'),
        parentDot = document.querySelector('.slider-dots');

    const getNewDot = () => {
        for (let i = 0; i < slide.length; i++) {
            let newDot = document.createElement('li');
            newDot.classList.add('slider-dot');
            parentDot.appendChild(newDot);
        
            let newBut = document.createElement('button');
            newDot.appendChild(newBut);
        }    
    };
    getNewDot();

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
    // const stopSlide = () => {
    //     clearInterval(interval);
    // };

    // slider.addEventListener('click', (event) => {
    //     let target = event.target;
    //     console.log(target);
    // });

    // slider.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     let target = event.target;

    //     if (!target.matches('.slide, .slider-dot')) {
    //         return;
    //     }

    //     prevSlide(slide, currentSlide, 'portfolio-item-active');
    //     prevSlide(dot, currentSlide, 'slick-active');

    //    if (target.matches('.slider-dot')) {
    //         dot.forEach((elem, index) => {
    //             if (elem === target) {
    //                 currentSlide = index;
    //             }
    //         });
    //     }

    //     if (currentSlide >= slide.length) {
    //         currentSlide = 0;
    //     }

    //     if (currentSlide < 0) {
    //         currentSlide = slide.length - 1;
    //     }

    //     nextSlide(slide, currentSlide, 'portfolio-item-active');
    //     nextSlide(dot, currentSlide, 'slick-active');

    // });

    // slider.addEventListener('mouseover', (event) => {
    //     if (event.target.matches('.portfolio-btn') ||
    //         event.target.matches('.slider-dot')) {
    //         stopSlide();
    //     }
    //     if (event.target.matches('.slider-dot')) {
    //         event.target.classList.add('slick-active');
    //     }
    // });

    // slider.addEventListener('mouseout', (event) => {
    //     if (event.target.matches('.portfolio-btn') ||
    //         event.target.matches('.slider-dot')) {
    //         startSlide();
    //     }
    // });

    startSlide(3000);
};
// headSlider();
export default headSlider;