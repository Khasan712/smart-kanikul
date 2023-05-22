$(function() {
    $("header .owl-carousel").owlCarousel(
        {
            items: 1,
            autoplay: true,
            nav: false,
            dots: true,
            loop: true,
            smartSpeed: 1000
        }
    );
    
    // $('header .call').click(function () {
    //     $('.modal').fadeIn()
    //     $('.modal').css('display' , 'flex')
    // })
    // $('.modal .close').click(function () {
    //     $('.modal').fadeOut()
    // })
    
    $('.mentors .owl-carousel').owlCarousel(
        {
            items: 1,
            autoplay: true,
            nav: false,
            dots: true,
            loop: true,
            smartSpeed: 1000,
            margin: 30,
    
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        }
    );
    
    AOS.init();
    
    
    $(function () {
        $('.bars').click(function () {
            $('.navbar').toggleClass('active');
            $('.bars .fa-bars').toggleClass('fa-xmark');
        });
    })
    
    
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop()
         if (scrollTop >= 500) {
            $('.scrollTop').fadeIn()
            $('.scrollTop').css({ display: 'flex' })
        } else {
            $('.scrollTop').fadeOut()
        }
    
        $('header ul a').each(function () {
            var id = $(this).attr('href')
            var href = $(id).offset().top - 120
            if (scrollTop >= href) {
                $('header ul a').css('color', 'white')
                $(this).css('color', '#30a8ff')
            }
        })
    })
    
    $('.scrollTop').click(function () {
        $('html , body').animate({
            scrollTop: 0
        }, 1000)
    })
    
    $('.registerBtn').click(function () {
        var res = $('#register').offset().top
        $('html , body').animate({
            scrollTop: res
        }, 1000)
    })
    
    
    $('header ul a').click(function (e) {
        e.preventDefault()
        $('header ul a').css('color', '#fff')
        var attr = $(this).css('color', '#30a8ff').attr('href')
        var offset = $(attr).offset().top - 70
    
        $('html , body').animate({
            scrollTop: offset
        }, 1000)
    
    })
    
    
})