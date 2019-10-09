const gellarySlider = () => {

    const gellarySliderWrap = document.querySelector('.gallery-slider'),
        slide = document.querySelectorAll('.gallery-slider .slide');

    gellarySliderWrap.style.position = 'relative';

    const showSlides = () => {
        slide.forEach((item) => {
            item.style.display = 'none';
        });
        slide[0].classList.add('slide_active');
    };
    showSlides();

    const addArrow = () => {
        let prev = document.createElement('button'),
            next = document.createElement('button');

        prev.innerHTML = '<strong><</strong>';
        next.innerHTML = '<strong>></strong>';

        prev.className = 'glo-slider__prev';
        next.className = 'glo-slider__next';

        gellarySliderWrap.appendChild(prev);
        gellarySliderWrap.appendChild(next);

        //ДОбавляем общие стили
        const style = document.createElement('style');
        style.textContent = `
            .glo-slider__prev {
                position: absolute;
                left: 10px;
                top: 50%;
                border: 10px solid #ffd11a;
                background: #ffd11a;
                border-radius: 20px;
            }
            .glo-slider__next {
                position: absolute;
                right: 10px;
                top: 50%;
                border: 10px solid #ffd11a;
                background: #ffd11a;
                border-radius: 20px;
            }
            .slide_active {
                display:flex !important;
            }
            .slide_nonactive {
                display:none;
            }
         
        `;
        document.head.appendChild(style);
    };
    addArrow();

    //точки по количеству слайдов
    const getNewDot = () => {
        let parentDot = document.createElement('ul');
        parentDot.classList.add('slider-dots');        
        parentDot.style.background = 'transparent';
        gellarySliderWrap.appendChild(parentDot);

        for (let i = 0; i < slide.length; i++) {
            
            let newDot = document.createElement('li');
            newDot.classList.add('slider-dot');
            parentDot.appendChild(newDot);
        
            let newBut = document.createElement('button');
            newDot.appendChild(newBut);
        }    
    };
    getNewDot();

    let dot = document.querySelectorAll('.gallery-slider .slider-dot');
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
        prevSlide(slide, currentSlide, 'slide_active');
        prevSlide(dot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide_active');
        nextSlide(dot, currentSlide, 'slick-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    
    const stopSlide = () => {
        clearInterval(interval);
    };  
    gellarySliderWrap.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.closest('.glo-slider__next, .glo-slider__prev, .slider-dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'slide_active');
        prevSlide(dot, currentSlide, 'slick-active');

        if (target.closest('.glo-slider__prev')) {
            currentSlide--;
        } else if (target.closest('.glo-slider__next')) {
            currentSlide++;
        } else if (target.closest('.slider-dot')) {
            dot.forEach((elem, index) => {
                if (elem === target || elem.children[0] === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'slide_active');
        nextSlide(dot, currentSlide, 'slick-active');

    });

    gellarySliderWrap.addEventListener('mouseover', (event) => {
        if (event.target.closest('.glo-slider__next') ||
            event.target.closest('.glo-slider__prev') ||
            event.target.closest('.slider-dot')) {
            stopSlide();
        }
    });

    gellarySliderWrap.addEventListener('mouseout', (event) => {
        if (event.target.closest('.glo-slider__next') ||
            event.target.closest('.glo-slider__prev') ||
            event.target.closest('.slider-dot')) {
            startSlide();
        }
    });

    startSlide();

};

// gellarySlider();
export default gellarySlider;