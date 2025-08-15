window.addEventListener('DOMContentLoaded', function () {

    /* header */

    let list = $('#menu .bg > div');
    $('#header .header-inner .menu').click(function () {

        $(this).toggleClass('on');
        $('#menu').toggleClass('on');
    });

    $('.menu-wrap li').mouseenter(function () {

        let idx = $('.menu-wrap li').index(this);


        console.log(idx);

        // $('sss').attr('src',`0${idx}.jpg`);

        TweenMax.to(list,1,{opacity: 0,})
        TweenMax.to(list.eq(idx),1,{opacity: 1,})
        // if ( idx === 0) $('#menu').css({"background":"url()"});
        // if ( idx === 1) $('#menu').css({"background":"url(images/common/menu-bg01.jpg)"});
        // if ( idx === 2) $('#menu').css({"background":"url(images/common/menu-bg02.jpg)"});
        // if ( idx === 3) $('#menu').css({"background":"url(images/common/menu-bg02.jpg)"});


    }).mouseleave(function () {
        
        $('#menu').css('background','#111');

    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if(scrollTop >= 200){
            $('#section02 .floating-wrap').addClass('on');

            TweenMax.to('#section02 .con > div > div',1,{
                delay:0.5,
                y:0,
                opacity:1,
                stagger: 0.1,
            })
        }
        if(scrollTop >= 1100){
            $('#section02 .concept-wrap').addClass('on');
        }
        if(scrollTop >= 1600){
            $('#section02 .floating-wrap-02').addClass('on');
        }
        if(scrollTop >= 4700){
            $('#section05 .tit').addClass('on');

            TweenMax.to('#section05 .con > div > div',1,{
                delay:0.5,
                y:0,
                opacity:1,
                stagger: 0.1,
            })
        }
        if(scrollTop >= 8300){
            $('#section07 .tit').addClass('on');
        }
        if(scrollTop >= 8400){
            $('#section07').addClass('on');
        }



    });




    $(".conceptcar-wrap, .img-slide").slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay:false, // autoplay mode
        autoplaySpeed: 3000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $('.conceptcar-wrap .slick-slide, .img-slide .slick-slide').removeClass('on');

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

        $('.conceptcar-wrap .slick-current, .img-slide .slick-current').addClass('on');

     });


    $('#section06 .tab > li').click(function () {

        let idx = $('#section06 .tab > li').index(this);

        $('#section06 .tab > li').removeClass('on');
        $('#section06 .tab > li').eq(idx).addClass('on');

        $('#section06 .content > div').removeClass('on');
        $('#section06 .content > div').eq(idx).addClass('on');

    });


    const $accordionList = $('#section06 .accordion > li');

    $accordionList.click(function () {


        $accordionList.removeClass('on');
        $accordionList.children('p').slideUp();
        $accordionList.find('.head').children('span').children().attr('src','images/common/i_plus.png');


        $(this).addClass('on');
        $(this).children('p').slideDown();
        $(this).find('.head').children('span').children().attr('src','images/common/i_minus.png');

    });


    /*  slide,click event section */


})





