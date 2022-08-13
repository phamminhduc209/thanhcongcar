
var app = app || {};

app.init = function () {
    app.tab();
    app.anchorLink();
    app.showMenu();
    app.jsSlider();
    app.productList();
};

app.tab = function () {
    $(document).on("click", ".tab a", function (e) {
        e.preventDefault();
        let target = $(this).attr("href").split('#')[1];

        $(this).parent().addClass("active").siblings().removeClass("active");
        $('[data-id="' + target + '"]').fadeIn(0).siblings().fadeOut(0);
        history.pushState({}, '', '#' + target);
    });

    if (location.hash && $(".tab li a[href='" + location.hash + "']").length) {
        $(".tab li a[href='" + location.hash + "']").trigger("click");

        $('.pagination a.page-numbers').each(function (i, a) {
            $(a).attr('href', $(a).attr('href') + '#' + $(a).parents('.tab-box').attr('data-id'));
        });
    } else {
        $(".tab li:first-child a").trigger("click");
        history.replaceState(null, null, ' ');
    }
}

app.anchorLink = function () {
    $('.anchor-link').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}

app.showMenu = function () {
    let ele = $(".hamburger-box");
    ele.on('click', function (e) {
        $(this).toggleClass('is-active');
        $('html').toggleClass('is-active');
        $('.p-header').toggleClass('is-open');
    });
}

app.jsSlider = function () {
    $('.js-mainvisual').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
}

app.productList = function () {
    $('.js-product-slider, .js-experience-slider').slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
    })
}

$(document).ready(function () {

    $('.page-top a').click(function () {
        $('html, body').animate({ scrollTop: 0 });
        return false;
    });

    app.init();
});