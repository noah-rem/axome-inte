document.addEventListener('DOMContentLoaded', () => {
    const mySwiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        centeredSlides: false,
        initialSlide: 0,
        navigation: {
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                centeredSlides: true,
                loop: true,
            },
            992: {
                slidesPerView: 3,
                centeredSlides: true,
                loop: true,
            }
        }
    });
});
