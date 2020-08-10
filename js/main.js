$(document).ready(function () {
    $('.photo__slider').slick({
        prevArrow: '<button class="slick-arrows slick-prev"><img src="images/arrow-left.svg"></button>',
        nextArrow: '<button class="slick-arrows slick-next"><img src="images/arrow-right.svg"></button>',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000
    });

    const menu_top = $('.menu').offset().top;


    setTimeout(function(){
        $('.header__title').removeClass('rot-op');
    },500);

    setTimeout(function(){
        window.scrollTo({
            top: menu_top,
            behavior: "smooth"
        });
    },3000)

    $(window).on('scroll', function() {
        let el_top1 = $('.about__row-1').offset().top;
        let el_top2 = $('.about__row-2').offset().top;
        let el_top = $('.reason__statistics').offset().top;
        let w_top = $(window).scrollTop();
        if (el_top1  <= w_top + 300) $('.about__row-1').removeClass('anim-left');
        if (el_top2  <= w_top + 300) $('.about__row-2').removeClass('anim-right');
        let timer;
        if (el_top <= w_top + 500) {
            const reasonStatisticsItem = document.querySelectorAll('.reason__statistics-item');
            const length = reasonStatisticsItem.length;
            let i = 0;
            stepFunc();
            function stepFunc() {
                reasonStatisticsItem[i].classList.remove('fade-in');
                i++;
                if (i<=3) timer = setTimeout(stepFunc, 500);
                else clearTimeout(timer);
            }
        }
        
    })
    
    
});