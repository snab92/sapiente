document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: 3,

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});


