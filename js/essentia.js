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


    $('#section01 .tit').addClass('on');

    TweenMax.to('#section01 .con > div > div',1,{
        delay:0.5,
        y:0,
        opacity:1,
        stagger: 0.1,
    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if(scrollTop >= 400){
            $('#section02 .floating-wrap').addClass('on');
        }
        if(scrollTop >= 950){
            $('#section02 .floating-wrap-02').addClass('on');
        }
        if(scrollTop >= 1700){
            $('#section05 .tit').addClass('on');
        }
        if(scrollTop >= 1800){
            $('#section05').addClass('on');
        }

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


    $('.slider-focus').on('init', function(event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
    });


    $('.slider-focus').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        asNavFor: '.slider',
        autoplaySpeed: 3000,
        infinite: true,
        centerPadding: '140px',
    })

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        asNavFor: '.slider-focus',
        autoplaySpeed: 3000,
        infinite: true,
        variableWidth: true,
        centerPadding: '140px',
        arrows: false,
    })



    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: "#section02",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    });

    sc02.to(".txt01 .front",{width:1400},0);
    sc02.to(".txt02 .front",{width:1400},0.2);
    sc02.to(".txt03 .front",{width:1400},0.4);
    sc02.to(".txt04 .front",{width:1400},0.6);


})





