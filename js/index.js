function sliderFeedback() {
    var swiper = new Swiper('.feedback .swiper-container', {
        slidesPerView: 3,
        centeredSlidesBounds: false,
        spaceBetween: 0,
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            480: {
                // slidesPerView: 3,
                spaceBetween: 0
            },

        }
    })
}




$(document).ready(function() {
    sliderFeedback()

    $(".header__burger").click(function() {
        $(".nav").toggleClass("nav--active")
        $(this).toggleClass("header__burger--active")
    })

    $(".modules__item-btn").click(function() {
        if ($(this).parents(".modules__item").hasClass("modules__item--active")) {
            $(this).parents(".modules__item").removeClass("modules__item--active")
        } else {
            $(".modules__item").removeClass("modules__item--active")
            $(this).parents(".modules__item").addClass("modules__item--active")
        }

    })

    $(".nav__item--page").click(function(event) {
        event.preventDefault();
        var idc = $(this).attr('href'),
            top = $(idc).offset().top;
        $('body,html').animate({ scrollTop: top - 165 }, 500);
        if ($(window).innerWidth() < 992) {
            $(".nav").hide()
        }
        if ($(window).innerWidth() < 992) {
            $(".nav").removeClass("nav--active")
            $(".header__burger").removeClass("header__burger--active")
        }
    });

    $(window).scroll(function() {
        var $sections = $('section');
        $sections.each(function(i, el) {
            var top = $(el).offset().top - 165;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var idn = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('a.nav__item--active').removeClass('nav__item--active');
                $('a[href="#' + idn + '"]').addClass('nav__item--active');
            }
        });
    });
})