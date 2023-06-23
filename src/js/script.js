
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
// var campaignSwiper = new Swiper(".js-campaign-swiper", {
//     spaceBetween: 20, // スライド間の距離
//     loop: true, // ループ
//     // centeredSlides: true, // アクティブなスライドを中央にする
//     autoplay: {
//         delay: 5000,
//     },
//     // roundLength: true,
//     speed: 200,
//     slidesPerView: 1.2, // 一度に表示する枚数
//     breakpoints:{
//         768:{
//             slidesPerView: 3.5,
//             loop: true, 
//             autoplay: {
//                 delay: 5000,
//             },
//         }
//     },
   
// });

var campaignSwiper = null;

function initSwiper() {
  if (campaignSwiper !== null) {
    campaignSwiper.destroy(); // Swiperインスタンスを破棄
  }

  campaignSwiper = new Swiper(".js-campaign-swiper", {
    spaceBetween: 20,
    loop: true,
    speed: 200,
    slidesPerView: getSlidesPerView(),
    autoplay: {
      delay: 5000,
    },
  });
}

function getSlidesPerView() {
  if (window.innerWidth >= 768) {
    return 3.5;
  } else {
    return 1.2;
  }
}

initSwiper(); // 初回のSwiperインスタンス作成

window.addEventListener("resize", function () {
  initSwiper(); // ブレイクポイントでのリサイズ時にSwiperインスタンスを再作成
});
