
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

// page top btn
var topBtn = $("#page-top");
// topBtn.hide();

// btnの表示
// $(window).scroll(function(){
//     if($(this).scrollTop() > 70){
//         topBtn.fadeIn();
//     } else {
//         topBtn.fadeOut();
//     }
// });

// btnをクリックしたらスクロールして上に戻る
topBtn.click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 300, 'swing');
    return false;
});

//要素の取得とスピードの設定
// var box = $('.price__img-box'),
//     speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
// box.each(function () {
//     $(this).append('<div class="color"></div>')
//     var color = $(this).find($('.color')),
//         image = $(this).find('img');
//     var counter = 0;

//     image.css('opacity', '0');
//     color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
//     color.on('inviewenter', function () {
//         if (counter == 0) {
//             $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
//                 image.css('opacity', '1');
//                 $(this).css({ 'left': '0', 'right': 'auto' });
//                 $(this).animate({ 'width': '0%' }, speed);
//             })
//             counter = 1;
//         }
//     });
// });

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
    // autoplay: {
    //     delay: 400,
    // },
    speed: 200,
    slidesPerView: 1.2, // 一度に表示する枚数
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1400: {
            slidesPerView: 4.0,
        },

        1368: {
            slidesPerView: 3.8,
        },

        1268: {
            slidesPerView: 3.5,
        },
        
        1068: {
            slidesPerView: 3.0,
        },
        
        768: {
            slidesPerView: 2.8,
        },

        668: {
            slidesPerView: 2.2,
        },

        568: {
            slidesPerView: 1.8,
        },

        468: {
            slidesPerView: 1.5,
        },
    }
});

