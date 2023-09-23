// [slide1, slide2, slide3, slide4]
//    0       1       2       3
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');

slides.forEach((slide, index) => {
    slide.style.transform = 'translateX(' + index * 100 + '%)';
    // 0 * 100% = 0
    // 1 * 100% = 100%
    // 2 * 100% = 200%
    // 3 * 100% = 300%
})

let currentSlide = 0;
let maxSlide = slides.length - 1;

nextBtn.addEventListener('click', () => {

    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = 'translateX(' + (index - currentSlide) * 100 + '%)';
        // -1 * 100% = -100%
        // -2 * 100% = -200%
        // -3 * 100% = -300%
        // -4 * 100% = -400%
    })
})

prevBtn.addEventListener('click', () => {

    if (currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = 'translateX(' + (index - currentSlide) * 100 + '%)';
        // 1 * 100% = 100%
        // 2 * 100% = 200%
        // 3 * 100% = 300%
        // 4 * 100% = 400%
    })
})