
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ドロワーメニュー
    $(".js-hamburger").click(function () {
        if ($(".js-hamburger").hasClass("is-active")) {
            $(".js-hamburger").removeClass("is-active");
            $(".js-sp-nav").removeClass("is-active");
        } else {
            $(".js-hamburger").addClass("is-active");
            $(".js-sp-nav").addClass("is-active");
        };
    });
});

// mv swiper
var swiper = new Swiper(".js-mv-swiper", {
    autoplay: {
        delay: 5000,
    },
    roundLength: true,
    speed: 200,
});

// campaign swiper
var campaignSwiper = new Swiper(".js-campaign-swiper", {
    spaceBetween: 20, // スライド間の距離
    loop: true, // ループ
    // centeredSlides: true, // アクティブなスライドを中央にする
    autoplay: {
        delay: 4000,
    },
    speed: 200,
    slidesPerView: 1.2, // 一度に表示する枚数
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
    breakpoints:{
        768:{
            slidesPerView: 3.5,
        }
    }
});

