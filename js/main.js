$(function() {

    //풀페이지 설정+메뉴   
    $('#snowj').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        responsiveWidth: 768,

        //메뉴
        afterLoad: function (anchorLink, index) {
            console.log(index)
            if (index >= 2) {
                $('header').stop().animate({
                    'height': '40px'
                }, 300);
                $('header ul').addClass('on');
                $('header ul li').addClass('on');
            } else if (index == 1) {
                $('header').stop().animate({
                    'height': '45px'
                }, 300);
                $('header ul').removeClass('on');
                $('header ul li').removeClass('on');
            } 

            if (index == 2) {
                $('.process').css({
                    'color': '#3D6B65'
                })
            } else {
                $('.process').css({
                    'color': 'inherit'
                })
            }
            if (index == 3 || index == 4) {
                $('.work').css({
                    'color': '#3D6B65'
                })
            } else {
                $('.work').css({
                    'color': 'inherit'
                })
            }
            if (index == 5) {
                $('.profile').css({
                    'color': '#3D6B65'
                })
            } else {
                $('.profile').css({
                    'color': 'inherit'
                })
            }

            if(index >=4){
                $('.gotop').fadeIn()
            }else{
                $('.gotop').fadeOut()
            }
        }

    })

    //page2-process 
    $('.item video').on('mouseenter', function() {
        $(this).get(0).play()
        })
    $('.item video').on('mouseleave', function() {
        $(this).get(0).pause()
        $(this).get(0).currentTime = 0
        })



})

//Initialize Swiper
var swiper1 = new Swiper(".seolji", {
    effect: "flip",
    speed: 500,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    loop: true,
    // autoplay: {
    //     delay: 5000,
    // }
});

var swiper2 = new Swiper(".seolji-work", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });










