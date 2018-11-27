$(function () {
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        new WOW().init();
    }

    // tab切换
    function tabCtrl(ele) {
        $(ele + '>.tabContents>.tabContent').hide().eq(0).show();
        $(ele + '>.tabs>.tab').eq(0).addClass('cur');
        $(ele + '>.tabs>.tab').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($(this).hasClass('cur')) {
                return;
            }
            $(this).addClass('cur').siblings().removeClass('cur');
            let me = $(this);
            let index = 0;
            $(ele + '>.tabs>.tab').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + '>.tabContents>.tabContent').hide().eq(index).fadeIn();
        });
    }

    function tabCtrl2(ele) {
        $(ele + ' .tabContents .tabContent').hide().eq(0).show();
        $(ele + ' .tabs .tab').eq(0).addClass('cur');
        $(ele + ' .tabs .tab').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($(this).hasClass('cur')) {
                return;
            }
            $(this).addClass('cur').siblings().removeClass('cur');
            let me = $(this);
            let index = 0;
            $(ele + ' .tabs .tab').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
        });
    }

    tabCtrl('#jmjq');
    tabCtrl('.fmjq');
    tabCtrl('#zczy');
    tabCtrl2('#jmjx');
    //头像点击
    $('.js_zc').on('click', '.js_head_list li', function () {
        let src = $(this).find('img').attr('src');
        let text = $(this).find('.text').text();
        let subtext = $(this).find('.subtext').text();
        $('.js_zc .big_img').find('img').attr('src', src);
        $('.js_zc .big_img').find('.subtext').text(`${text} （${subtext}） `);
    });
    $('.js_zy').on('click', '.js_head_list li', function () {
        let src = $(this).find('img').attr('src');
        let text = $(this).find('.text').text();
        let subtext = $(this).find('.subtext').text();

        $('.js_zy .big_img').find('img').attr('src', src);
        $('.js_zy .big_img').find('.subtext').text(`${text} （${subtext}） `);
    });

    //轮播图
    // wmsx
    var swiper_wmsx = new Swiper('.wmsx .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 14,
        pagination: {
            el: '.wmsx .swiper-pagination',
            clickable: true,
        },
    });

    let music = document.getElementById('music');
    let video = document.getElementById('video');
    let video2 = document.getElementById('video_2');
    let isMusicPlay = true;
    document.addEventListener("WeixinJSBridgeReady", function () {
        music.play();
    }, false);

    $('#music-btn').click(function () {
        if ($(this).hasClass('on')) {
            music.pause();
            $(this).removeClass('on');
            isMusicPlay = false;
        } else {
            music.play();
            $(this).addClass('on');
            isMusicPlay = true;
        }
    });

    $('.video_btn').on('click', function (e) {
        e.preventDefault();
        $('.dialog_video').fadeIn();
        if (isMusicPlay) {
            music.pause();
        }
    });

    $('.close_video').on('click', function (e) {
        e.preventDefault();
        $('.dialog_video').fadeOut();
        video.pause();
        if (isMusicPlay) {
            music.play();
        }
    });

    video2.addEventListener('play',function () {
        if (isMusicPlay) {
            music.pause();
        }
    });
    video2.addEventListener('pause',function () {
        if (isMusicPlay) {
            music.play();
        }
    });

    $('#menu_btn').on('click', function (e) {
        e.preventDefault();
        $('.dialog_menu').show();
    });
    $('.close_menu').on('click', function (e) {
        e.preventDefault();
        $('.dialog_menu').fadeOut();
    });


    //导航
    let isClick = false;
    $('.nav a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        isClick = true;
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 50}, 600, function () {
            isClick = false;
        });
        // 修改颜色
        $(this).parent().siblings().removeClass('cur');
        $(this).parent().addClass('cur');
        $('.dialog_menu').fadeOut();
    });

    let t;
    let t0 = $('#home').offset().top - 110;
    let t1 = $('#jmjq').offset().top - 110;
    let t2 = $('#zczy').offset().top - 110;
    let t3 = $('#jmjx').offset().top - 110;
    let t4 = $('#wmsx').offset().top - 110;
    console.log(t0);
    console.log(t1);
    console.log(t2);
    console.log(t3);
    console.log(t4);
    $(window).scroll(function () {
        t = $(window).scrollTop();
        if (!isClick) {
            if (t < t1) {
                $('nav li').removeClass('cur');
                $('nav li').eq(0).addClass('cur');
            } else if (t >= t1 && t < t2) {
                $('nav li').removeClass('cur');
                $('nav li').eq(1).addClass('cur');
            } else if (t >= t2 && t < t3) {
                $('nav li').removeClass('cur');
                $('nav li').eq(2).addClass('cur');
            }
            else if (t >= t3 && t < t4) {
                $('nav li').removeClass('cur');
                $('nav li').eq(3).addClass('cur');
            }
            else if (t >= t4) {
                $('nav li').removeClass('cur');
                $('nav li').eq(4).addClass('cur');
            }
        }
    });

});