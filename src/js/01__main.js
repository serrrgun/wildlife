const menuBtn = document.querySelector('.main-nav__btn');
const mainNav = document.querySelector('.main-nav__list');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('main-nav__btn--active')
    mainNav.classList.toggle('main-nav__list--active')
});

var swiper = new Swiper('.swiper-container', {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            slidesPerView: 'auto',
        },

        1280: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 60,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.slider__button--next',
                prevEl: '.slider__button--prev',
            },
        },
    }
});